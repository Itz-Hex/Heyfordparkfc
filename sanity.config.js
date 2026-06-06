import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemaTypes from "./src/sanity/schemas";

export default defineConfig({
  name: "heyford-park-fc",
  title: "Heyford Park FC",
  projectId: "rzjt6rbe",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
