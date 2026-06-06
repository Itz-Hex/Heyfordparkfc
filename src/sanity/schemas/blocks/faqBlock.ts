import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqBlock",
  title: "FAQ",
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
          name: "faq",
          fields: [
            { name: "question", title: "Question", type: "string" },
            {
              name: "answer",
              title: "Answer",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "FAQ" }),
  },
});
