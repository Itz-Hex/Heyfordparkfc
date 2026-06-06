import { defineType, defineField } from "sanity";

export default defineType({
  name: "pageHeroBlock",
  title: "Page hero (compact)",
  type: "object",
  description: "Compact subpage header — eyebrow + title + description. No background image.",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: { list: ["white", "neutral", "dark"] },
      initialValue: "white",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Page hero",
      subtitle: subtitle || "Compact hero",
    }),
  },
});
