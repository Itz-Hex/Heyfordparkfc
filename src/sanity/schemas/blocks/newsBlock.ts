import { defineType, defineField } from "sanity";

export default defineType({
  name: "newsBlock",
  title: "News strip",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: { list: ["strip", "featured", "grid"] },
      initialValue: "strip",
    }),
    defineField({ name: "limit", title: "Articles to show", type: "number", initialValue: 3 }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "variant" },
    prepare: ({ title, subtitle }) => ({
      title: title || "News",
      subtitle: subtitle || "News block",
    }),
  },
});
