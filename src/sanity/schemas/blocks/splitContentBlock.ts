import { defineType, defineField } from "sanity";

export default defineType({
  name: "splitContentBlock",
  title: "Split content (text + icon cards)",
  type: "object",
  description:
    'Two-column layout. Left: eyebrow, title, body, optional badge and link. Right: icon cards. Used for the "About the club" intro.',
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
      name: "badge",
      title: "Badge",
      type: "object",
      fields: [
        { name: "icon", title: "Icon (lucide name)", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "subtitle", title: "Subtitle", type: "string" },
      ],
    }),
    defineField({ name: "ctaLabel", title: "Link label", type: "string" }),
    defineField({ name: "ctaUrl", title: "Link URL", type: "string" }),
    defineField({
      name: "cards",
      title: "Icon cards (right column)",
      type: "array",
      of: [
        {
          type: "object",
          name: "iconCard",
          fields: [
            { name: "icon", title: "Icon (lucide name)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
          preview: { select: { title: "title", subtitle: "icon" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Split content",
      subtitle: subtitle || "Text + icon cards",
    }),
  },
});
