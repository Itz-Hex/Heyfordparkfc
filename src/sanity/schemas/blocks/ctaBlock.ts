import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaBlock",
  title: "Call to action",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({ name: "ctaLabel", title: "Button label", type: "string" }),
    defineField({ name: "ctaUrl", title: "Button URL", type: "string" }),
    defineField({
      name: "style",
      title: "Style",
      type: "string",
      options: { list: ["light", "dark", "accent"] },
      initialValue: "accent",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "ctaLabel" },
    prepare: ({ title, subtitle }) => ({
      title: title || "CTA",
      subtitle: subtitle || "Call to action",
    }),
  },
});
