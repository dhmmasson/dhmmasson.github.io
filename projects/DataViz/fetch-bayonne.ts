#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write
/**
 * Extract a daily temperature series for the Bayonne area (Biarritz-Anglet station)
 * from Météo-France's open dataset "Données climatologiques de base - quotidiennes".
 *
 *   deno run --allow-net --allow-write fetch-bayonne.ts            # -> bayonne_daily_temperature.csv
 *   deno run --allow-net fetch-bayonne.ts --list                   # only list candidate stations
 *   deno run --allow-net --allow-write fetch-bayonne.ts --station 64024001 --variable tm
 *   deno run --allow-read --allow-write fetch-bayonne.ts --file Q_64_previous-1950-2024_RR-T-Vent.csv.gz --file ...   # offline
 *
 * How it works
 *  1. asks the data.gouv.fr API for the département-64 "RR-T-Vent" files (names change every year,
 *     e.g. Q_64_avant-1949_…, Q_64_previous-1950-2024_…, Q_64_latest-2025-2026_…), unless --file is given;
 *  2. streams each .csv.gz (about 100–200 MB once unzipped) and keeps only the matching stations;
 *  3. prints a table of candidate stations, picks one (override with --station);
 *  4. writes `date,tmean,tn,tx` (°C) with a few "# key: value" comment lines the .qmd reads.
 *
 * Data: Météo-France, Licence Ouverte Etalab 2.0.
 */

const DATASET_ID = "6569b51ae64326786e4e8e1a"; // data.gouv.fr: Données climatologiques de base - quotidiennes

const opts = {
  dep: "64",
  out: "bayonne_daily_temperature.csv",
  match: "BIARRITZ|BAYONNE|ANGLET", // regex on NOM_USUEL, ignored when --station is given
  station: "", // NUM_POSTE, e.g. 64024001
  variable: "tntxm", // "tntxm" = (TN+TX)/2, available whenever min and max exist; "tm" = mean of hourly values
  list: false,
  files: [] as string[],
};

function usage() {
  console.log(`Options:
  --dep 64                 département number (default 64)
  --station <NUM_POSTE>    force a station id (see --list)
  --match <regex>          station-name regex (default "${opts.match}")
  --variable tntxm|tm      daily mean definition (default tntxm)
  --out <file>             output CSV (default ${opts.out})
  --file <url|path>        use this .csv.gz instead of querying data.gouv.fr (repeatable)
  --list                   print candidate stations and exit`);
}

for (let i = 0; i < Deno.args.length; i++) {
  const a = Deno.args[i];
  const next = () => {
    const v = Deno.args[++i];
    if (v === undefined) throw new Error(`Missing value for ${a}`);
    return v;
  };
  switch (a) {
    case "--dep": opts.dep = next(); break;
    case "--station": opts.station = next(); break;
    case "--match": opts.match = next(); break;
    case "--variable": opts.variable = next().toLowerCase(); break;
    case "--out": opts.out = next(); break;
    case "--file": opts.files.push(next()); break;
    case "--list": opts.list = true; break;
    case "-h": case "--help": usage(); Deno.exit(0); break;
    default: console.error(`Unknown option ${a}`); usage(); Deno.exit(1);
  }
}
if (!["tm", "tntxm"].includes(opts.variable)) {
  console.error('--variable must be "tm" or "tntxm"');
  Deno.exit(1);
}

interface Day { tm?: number; tn?: number; tx?: number; tntxm?: number }
interface Station { id: string; name: string; lat: string; lon: string; alt: string; days: Map<string, Day> }

/* ---------- discovery ---------- */
async function discoverFiles(dep: string): Promise<string[]> {
  let url: string | null =
    `https://www.data.gouv.fr/api/2/datasets/${DATASET_ID}/resources/?page=1&page_size=200&type=main`;
  const found: string[] = [];
  while (url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`data.gouv.fr API: HTTP ${r.status}`);
    const j = await r.json();
    for (const x of j.data ?? []) {
      if (typeof x.title === "string" && x.title.startsWith(`QUOT_departement_${dep}_`) && x.title.endsWith("_RR-T-Vent")) {
        found.push(x.url);
      }
    }
    url = j.next_page ?? null;
  }
  if (!found.length) {
    throw new Error(`No RR-T-Vent file found for département ${dep}. Download them by hand and pass them with --file.`);
  }
  return found;
}

/* ---------- streaming ---------- */
async function* lines(src: string): AsyncGenerator<string> {
  let body: ReadableStream<Uint8Array>;
  if (/^https?:\/\//.test(src)) {
    const r = await fetch(src);
    if (!r.ok || !r.body) throw new Error(`${src}: HTTP ${r.status}`);
    body = r.body;
  } else {
    body = (await Deno.open(src)).readable;
  }
  const unzipped = /\.gz$/i.test(src) ? body.pipeThrough(new DecompressionStream("gzip")) : body;
  let buf = "";
  for await (const chunk of unzipped.pipeThrough(new TextDecoderStream())) {
    buf += chunk;
    let start = 0, i: number;
    while ((i = buf.indexOf("\n", start)) >= 0) {
      yield buf.slice(start, i).replace(/\r$/, "");
      start = i + 1;
    }
    buf = buf.slice(start);
  }
  if (buf) yield buf;
}

const clean = (s: string | undefined) => (s ?? "").trim().replace(/^"|"$/g, "");

async function readSource(src: string, stations: Map<string, Station>) {
  const re = new RegExp(opts.match, "i");
  let cols: Record<string, number> | null = null;
  let sep = ";";
  let kept = 0;
  for await (const line of lines(src)) {
    if (!line) continue;
    if (!cols) {
      sep = line.includes(";") ? ";" : ",";
      cols = Object.fromEntries(line.split(sep).map((n, i) => [clean(n), i]));
      for (const need of ["NUM_POSTE", "NOM_USUEL", "AAAAMMJJ"]) {
        if (!(need in cols)) throw new Error(`${src}: column ${need} not found. Header was: ${Object.keys(cols).join(", ")}`);
      }
      continue;
    }
    const f = line.split(sep);
    const id = clean(f[cols.NUM_POSTE]);
    const name = clean(f[cols.NOM_USUEL]);
    if (opts.station ? id !== opts.station : !re.test(name)) continue;

    const num = (k: string) => {
      const i = cols![k];
      if (i === undefined) return undefined;
      const s = clean(f[i]);
      if (!s) return undefined;
      const v = parseFloat(s);
      return Number.isFinite(v) ? v : undefined;
    };
    const d = clean(f[cols.AAAAMMJJ]);
    if (d.length !== 8) continue;
    const date = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;

    let st = stations.get(id);
    if (!st) {
      st = { id, name, lat: clean(f[cols.LAT]), lon: clean(f[cols.LON]), alt: clean(f[cols.ALTI]), days: new Map() };
      stations.set(id, st);
    }
    st.days.set(date, { tm: num("TM"), tn: num("TN"), tx: num("TX"), tntxm: num("TNTXM") });
    kept++;
  }
  console.error(`  ${src.split("/").pop()}: ${kept} rows kept`);
}

/* ---------- series ---------- */
function dailyMean(d: Day): number | undefined {
  if (opts.variable === "tm") return d.tm;
  return d.tntxm ?? (d.tn !== undefined && d.tx !== undefined ? (d.tn + d.tx) / 2 : undefined);
}

function summarize(st: Station) {
  const dates = [...st.days.entries()].filter(([, d]) => dailyMean(d) !== undefined).map(([k]) => k).sort();
  const perYear = new Map<string, number>();
  for (const k of dates) perYear.set(k.slice(0, 4), (perYear.get(k.slice(0, 4)) ?? 0) + 1);
  return {
    id: st.id,
    name: st.name,
    lat: st.lat,
    lon: st.lon,
    alt_m: st.alt,
    first: dates[0] ?? "-",
    last: dates.at(-1) ?? "-",
    days: dates.length,
    complete_years: [...perYear.values()].filter((n) => n >= 330).length,
  };
}

/* ---------- main ---------- */
const sources = opts.files.length ? opts.files : await discoverFiles(opts.dep);
console.error(`Reading ${sources.length} file(s) for département ${opts.dep}…`);
const stations = new Map<string, Station>();
for (const s of sources) await readSource(s, stations); // later files overwrite earlier ones for the same date

if (!stations.size) {
  console.error(`No station matched ${opts.station ? "id " + opts.station : "/" + opts.match + "/i"}.`);
  Deno.exit(1);
}

const summaries = [...stations.values()].map(summarize).sort((a, b) => b.days - a.days);
console.error(`\nCandidate stations (variable: ${opts.variable}):`);
console.table(summaries);
if (opts.list) Deno.exit(0);

const chosen = opts.station
  ? stations.get(opts.station)!
  : stations.get((summaries.find((s) => /BIARRITZ.*ANGLET/i.test(s.name)) ?? summaries[0]).id)!;
const sum = summarize(chosen);
console.error(`\nUsing ${chosen.id} ${chosen.name}: ${sum.first} → ${sum.last}, ${sum.days} days, ${sum.complete_years} complete years`);
if (sum.complete_years < 30) console.error("Warning: fewer than 30 complete years, the 1991–2020 normal will be shaky. Check --list.");

const rows = [...chosen.days.entries()]
  .sort(([a], [b]) => (a < b ? -1 : 1))
  .flatMap(([date, d]) => {
    const t = dailyMean(d);
    if (t === undefined) return [];
    return [`${date},${t.toFixed(2)},${d.tn?.toFixed(1) ?? ""},${d.tx?.toFixed(1) ?? ""}`];
  });

const header = [
  "# source: Météo-France, Données climatologiques de base - quotidiennes (Licence Ouverte Etalab 2.0)",
  `# station: ${chosen.id} ${chosen.name}`,
  `# location: ${chosen.lat}°N ${chosen.lon}°E, ${chosen.alt} m`,
  `# variable: ${opts.variable === "tm" ? "TM (mean of hourly temperatures)" : "TNTXM ((TN+TX)/2)"}`,
  `# generated: ${new Date().toISOString().slice(0, 10)}`,
  "date,tmean,tn,tx",
];
await Deno.writeTextFile(opts.out, header.concat(rows).join("\n") + "\n");
console.error(`Wrote ${rows.length} days to ${opts.out}`);
