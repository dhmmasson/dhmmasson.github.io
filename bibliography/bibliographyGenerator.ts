import vento from "https://deno.land/x/vento@v0.9.1/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import { Item } from "./zotero.d.ts";
import { PersonDatabase } from "./creator.ts";
import { format } from "https://deno.land/std@0.224.0/datetime/format.ts";
import { parse } from "npm:yaml";
async function getJson(filePath: string) {
  return JSON.parse(await Deno.readTextFile(filePath));
}

// Load the Bi

const config = {
  outputFolder: "./publications", // Output folder for the generated files
  templateFolder: "./templates", // Folder containing the templates
  bibliographyDb: "./bibliography/bibliography.json", // Path to the bibliography database
  bibliography: "./bibliography", // Path to the bibliography folder
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

const personDb = new PersonDatabase("bibliography/people.json");
await personDb.loadDatabase();
enum formatType {
  HTML,
  Markdown,
}

type Person = {
  firstName?: string;
  lastName?: string;
};
const highlightor =
  (format: formatType, lastName: string) => (creator: Person) => {
    if (creator.lastName && creator.lastName.startsWith(lastName)) {
      return format === formatType.HTML
        ? `<b>${creator.lastName}, ${creator.firstName}</b>`
        : `**${creator.lastName}, ${creator.firstName}**`;
    }
    return `${creator.lastName}, ${creator.firstName}`;
  };

const creatorExtractor = (item: Item) => {
  if (!item.creators || item.creators.length === 0) return {};
  const updatedCreators = item.creators.map((creator) => {
    const person = personDb.getPerson(creator);
    return person ? person : creator;
  });
  return {
    authors: updatedCreators,
    authors_s: updatedCreators
      .map((creator) => creator.lastName + ", " + creator.firstName)
      .join("; "),
    authors_s_bold: updatedCreators
      .map(highlightor(formatType.Markdown, "Masson"))
      .join("; "),
    authors_s_bold_html: updatedCreators
      .map(highlightor(formatType.HTML, "Masson"))
      .join("; "),
  };
};

const halExtractor = (item: Item) =>
  item.archive === "HAL" &&
  item.archiveLocation && {
    halURL: item.archiveLocation,
    halId: item.archiveLocation.match(
      /(?:http:s?\/\/)?(?:hal.science\/)(?<halid>hal-\d+v?\d)/
    )?.groups?.halid,
  };

const toDate = (date: string) => new Date(date);
const explodeDate = (d: Date) => ({
  date: format(d, "yyyy-MM-dd"),
  year: format(d, "yyyy"),
  month: format(d, "MM"),
  day: format(d, "dd"),
});
const dateExtractor = (item: Item) =>
  item.date && explodeDate(toDate(item.date));

const cslTypeMap = new Map([
  ["journalArticle", "article-journal"],
  ["conferencePaper", "paper-conference"],
  ["presentation", "speech"],
  ["report", "report"],
  ["thesis", "thesis"],
  ["software", "software"],
  ["book", "book"],
]);

const cslTypeConvertor = (item: Item) => {
  if (item.itemType && cslTypeMap.has(item.itemType)) {
    return cslTypeMap.get(item.itemType);
  }
  return "article";
};

const containerTitleExtractor = (item: Item) => {
  if (item.itemType === "journalArticle") {
    return {
      containerTitle: item.publicationTitle ?? item.journalAbbreviation,
    };
  }
  if (item.itemType === "conferencePaper") {
    return {
      containerTitle: item.proceedingsTitle,
    };
  }
  if (item.itemType === "thesis") {
    return {
      containerTitle: "",
    };
  }
  if (item.itemType === "book") {
    return {
      containerTitle: item.title,
    };
  }
  return {
    containerTitle: "",
  };
};
const publisherExtractor = (item: Item) => {
  if (item.publisher) {
    return {
      publisher: item.publisher,
    };
  }
  if (item.itemType === "thesis") {
    return {
      publisher: item.university,
    };
  }
  if (item.itemType === "conferencePaper") {
    return {
      publisher: item.conferenceName,
    };
  }
};

const citationExtractor = (item: Item) => ({
  citation: {
    type: cslTypeConvertor(item),
    doi: item.DOI,
    language: item.language ?? "en",
    isbn: item.ISBN,
    issn: item.ISSN,
    issue: item.issue,
    volume: item.volume,
    page: item.pages,
    ...containerTitleExtractor(item),
    ...publisherExtractor(item),
  },
});

const publicationExtraction = (item: Item) => {
  if (item.itemType === "journalArticle") {
    return {
      publication: `${item.journalAbbreviation}, ${item.volume ?? "n/a"}(${
        item.issue ?? "n/a"
      })`
        .replaceAll("n/a", "")
        .replace("()", "")
        .trim()
        .replace(/,$/, ""),
      journal: item.journalAbbreviation,
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
      publication: `${item.university}, ${item.date}`,
      institution: item.university,
    };
  }
  return {
    publication: "",
  };
};

const haikuFilePath = join(config.bibliography, "haiku.yml");
const haikuContent = await Deno.readTextFile(haikuFilePath);
const haikuData = parse(haikuContent) as Record<string, { haiku: string }>;

const cleanItems = [];
for (const item of items) {
  try {
    const cleanItem = {
      citationKey: item.citationKey,
      title: item.title,
      type: item.itemType,
      ...creatorExtractor(item),
      file:
        item.attachments && item.attachments.length > 0
          ? item.attachments[0].path
          : null,
      pdf:
        item.attachments && item.attachments.length > 0
          ? `${item.citationKey}.pdf`
          : null,

      DOI: item.DOI,
      URL: item.url,
      ...halExtractor(item),
      ...dateExtractor(item),
      language: item.language ?? "en",
      abstract: item.abstractNote ?? "No abstract available",
      ...publicationExtraction(item),
      ...citationExtractor(item),
      haiku: item.citationKey && haikuData[item.citationKey].haiku,
    };
    cleanItems.push(cleanItem);
  } catch (error) {
    console.error("Error processing", item.citationKey, error);
  }
}
// save json
await Deno.writeTextFile(
  join(config.outputFolder, "cleanItems.json"),
  JSON.stringify(cleanItems, null, 2)
);

for (const item of cleanItems) {
  if (item.type && validTypes.includes(item.type) && item.citationKey) {
    // console.log("Processing", item.citationKey);
    try {
      const result = await publicationTemplate(item);
      // Create a folder for the item
      const destination = join(config.outputFolder, item.citationKey);
      await Deno.mkdir(destination, {
        recursive: true,
      });
      // Save file in the output folder
      await Deno.writeTextFile(join(destination, `index.md`), result.content);
      // Copy item.file to the output folder
      if (item.file) {
        const file = item.file;
        const dest = join(destination, item.citationKey + ".pdf");
        await Deno.copyFile(file, dest);
      }
    } catch (error) {
      console.error("Error processing", item.citationKey, error);
    }
  }
}

// Save the person database
await personDb.saveDatabase();
