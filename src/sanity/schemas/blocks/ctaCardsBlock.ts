import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaCardsBlock",
  title: "CTA cards (inline shortcuts)",
  type: "object",
  description: "A row of small CTA cards. Use for inline navigation shortcuts.",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "ctaCard",
          fields: [
            { name: "icon", title: "Icon (lucide name)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "string" },
            { name: "url", title: "URL", type: "string" },
            {
              name: "style",
              title: "Style",
              type: "string",
              options: { list: ["accent", "blue", "amber", "neutral"] },
              initialValue: "neutral",
            },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "CTA cards" }),
  },
});
