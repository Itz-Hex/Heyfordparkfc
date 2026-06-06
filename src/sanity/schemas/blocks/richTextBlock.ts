import { defineType, defineField } from "sanity";

export default defineType({
  name: "richTextBlock",
  title: "Rich text section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      options: { list: ["white", "neutral", "dark", "accent"] },
      initialValue: "white",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Rich text",
      subtitle: subtitle || "Rich text section",
    }),
  },
});
