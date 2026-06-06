import { defineType, defineField } from "sanity";

export default defineType({
  name: "documentsBlock",
  title: "Documents list",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "items",
      title: "Documents",
      type: "array",
      of: [
        {
          type: "object",
          name: "documentItem",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "file", title: "File", type: "file" },
            { name: "url", title: "External URL", type: "string" },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Documents" }),
  },
});
