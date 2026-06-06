import { defineType, defineField } from "sanity";

export default defineType({
  name: "sponsorsBlock",
  title: "Sponsors grid",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "sponsors",
      title: "Sponsors",
      type: "array",
      description: "Leave empty to show all sponsors.",
      of: [{ type: "reference", to: [{ type: "sponsor" }] }],
    }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "string" }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Sponsors grid" }),
  },
});
