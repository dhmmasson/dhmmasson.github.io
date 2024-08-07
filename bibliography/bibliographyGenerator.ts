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
];

for (const item of bibliography.items) {
  if (item.itemType && validTypes.includes(item.itemType) && item.citationKey) {
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
