import { defineType, defineField } from "sanity";

export default defineType({
  name: "timelineBlock",
  title: "Timeline",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "milestone",
          fields: [
            { name: "date", title: "Date", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
          preview: { select: { title: "title", subtitle: "date" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Timeline" }),
  },
});
