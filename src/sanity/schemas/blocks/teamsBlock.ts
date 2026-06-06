import { defineType, defineField } from "sanity";

export default defineType({
  name: "teamsBlock",
  title: "Teams grid",
  type: "object",
  description: "Renders all team documents.",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Teams grid" }),
  },
});
