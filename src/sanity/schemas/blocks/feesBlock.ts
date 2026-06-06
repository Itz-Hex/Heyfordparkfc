import { defineType, defineField } from "sanity";

export default defineType({
  name: "feesBlock",
  title: "Fees / pricing tiers",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "tiers",
      title: "Tiers",
      type: "array",
      of: [
        {
          type: "object",
          name: "tier",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "note", title: "Note", type: "string" },
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Fees" }),
  },
});
