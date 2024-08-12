import vento from "https://deno.land/x/vento@v0.9.1/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { Item } from "./bibliography.d.ts";
async function getJson(filePath: string) {
  return JSON.parse(await Deno.readTextFile(filePath));
}

// Load the Bi

const config = {
  outputFolder: "./publications", // Output folder for the generated files
  templateFolder: "./templates", // Folder containing the templates
  bibliographyDb: "./bibliography/bibliography.json", // Path to the bibliography database
};

const bibliography = await getJson(config.bibliographyDb);
const items: Item[] = bibliography.items;

// Load the template for the Publication files
const env = vento();
const publicationTemplate = await env.load(
  join(config.templateFolder, "publication.vto")
);

console.log(items.length, "items found in the bibliography");

console.log(
  items.filter((item) => item.itemType === "journalArticle").length,
  "journal articles found"
);

console.log(
  items.filter((item) => item.itemType === "conferencePaper").length,
  "conference papers found"
);

//console.log( items.filter( item => item.type === "conferencePaper").length, "conference papers found");

const validTypes = [
  "conferencePaper",
  "journalArticle",
  "presentation",
  "report",
  "thesis",
  "book",
];

const creatorExtractor = (item: Item) =>
  item.creators &&
  item.creators.length > 0 && {
    authorFirst: item.creators[0],
    authorFirst_s:
      item.creators[0].lastName + ", " + item.creators[0].firstName,
    authors_s: item.creators
      .map((creator) => creator.lastName + ", " + creator.firstName)
      .join("; "),
    authors_s_bold: item.creators
      .map((creator) =>
        creator.lastName && creator.lastName.startsWith("Masson")
          ? `**${creator.lastName}, ${creator.firstName}**`
          : `${creator.lastName}, ${creator.firstName}`
      )
      .join("; "),
    authors_s_bold_html: item.creators
      .map((creator) =>
        creator.lastName && creator.lastName.startsWith("Masson")
          ? `<b>${creator.lastName}, ${creator.firstName}</b>`
          : `${creator.lastName}, ${creator.firstName}`
      )
      .join("; "),
    authors_names: item.creators.map((creator) => creator.name).join(", "),
    authors: item.creators,
  };
const halExtractor = (item: Item) =>
  item.archive === "HAL" &&
  item.archiveLocation && {
    halURL: item.archiveLocation,
    halId: item.archiveLocation.match(
      /(?:http:s?\/\/)?(?:hal.science\/)(?<halid>hal-\d+v?\d)/
    )?.groups?.halid,
  };

const dateExtractor = (item: Item) =>
  item.date && {
    date: item.date,
    year: item.date.split("-")[0],
    month: item.date.split("-")[1],
    day: item.date.split("-")[2],
  };
const publicationExtraction = (item: Item) => {
  if (item.itemType === "journalArticle") {
    return {
      publication: `${item.journalAbbreviation}, ${item.volume}(${item.issue}), ${item.pages}`,
      journal: item.journal,
      volume: item.volume,
      issue: item.issue,
      pages: item.pages,
      series: item.series,
    };
  }
  if (item.itemType === "conferencePaper") {
    return {
      publication: `${item.conferenceName ?? "in " + item.proceedingsTitle}, ${
        item.date
      }`,
      conference: item.conferenceName ?? item.proceedingsTitle,
      place: item.place,
    };
  }
  if (item.itemType === "thesis") {
    return {
      publication: `${item.institution}, ${item.date}`,
      institution: item.institution,
    };
  }
  return {
    publication: "",
  };
};
const cleanItems = [];
for (const item of items) {
  const cleanItem = {
    citationKey: item.citationKey,
    title: item.title,
    type: item.itemType,
    ...creatorExtractor(item),
    file:
      item.attachments && item.attachments.length > 0
        ? item.attachments[0].path
        : null,
    DOI: item.DOI,
    URL: item.url,
    ...halExtractor(item),
    ...dateExtractor(item),
    language: item.language ?? "en",
    abstract: item.abstractNote ?? "No abstract available",
    ...publicationExtraction(item),
  };
  cleanItems.push(cleanItem);
}
// save json
await Deno.writeTextFile(
  join(config.outputFolder, "cleanItems.json"),
  JSON.stringify(cleanItems, null, 2)
);

for (const item of cleanItems) {
  if (item.type && validTypes.includes(item.type) && item.citationKey) {
    console.log("Processing", item.citationKey);
    try {
      const result = await publicationTemplate(item);
      // Save file in the output folder
      await Deno.writeTextFile(
        join(config.outputFolder, `${item.citationKey}.md`),
        result.content
      );
    } catch (error) {
      console.error("Error processing", item.citationKey, error);
    }
  }
}
