import { defineType, defineField } from "sanity";

export default defineType({
  name: "valuesBlock",
  title: "Icon cards",
  type: "object",
  description: "Grid of cards with icon, title and body (values, promises, policies).",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "iconCard",
          fields: [
            {
              name: "icon",
              title: "Icon (lucide name)",
              type: "string",
              description: 'e.g. "Users", "Heart", "Sparkles"',
            },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Icon cards" }),
  },
});
