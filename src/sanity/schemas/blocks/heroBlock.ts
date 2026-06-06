import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroBlock",
  title: "Hero",
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
      name: "backgroundImage",
      title: "Background image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctas",
      title: "Call-to-action buttons",
      type: "array",
      of: [
        {
          type: "object",
          name: "cta",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "sublabel", title: "Sub-label", type: "string" },
            { name: "url", title: "URL", type: "string" },
            {
              name: "style",
              title: "Style",
              type: "string",
              options: {
                list: ["primary", "secondary", "tertiary"],
              },
            },
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Hero",
      subtitle: subtitle || "Hero block",
    }),
  },
});
