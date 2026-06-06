import { defineType, defineField } from "sanity";

export default defineType({
  name: "stepsBlock",
  title: "Steps / numbered list",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "step",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Steps" }),
  },
});
