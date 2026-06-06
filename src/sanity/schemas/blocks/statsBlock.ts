import { defineType, defineField } from "sanity";

export default defineType({
  name: "statsBlock",
  title: "Stats",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "note", title: "Note", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Stats" }),
  },
});
