import { defineType, defineField } from "sanity";

export default defineType({
  name: "tabbedContentBlock",
  title: "Tabbed content",
  type: "object",
  description: "Sidebar tabs (e.g. Welfare, First Aid, Documents, Sponsorship on Club Info).",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        {
          type: "object",
          name: "tab",
          fields: [
            { name: "key", title: "Key", type: "string", description: 'Stable identifier, e.g. "welfare"' },
            { name: "label", title: "Label", type: "string" },
            { name: "icon", title: "Icon (lucide name)", type: "string" },
            {
              name: "body",
              title: "Body",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
          preview: { select: { title: "label", subtitle: "key" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Tabbed content" }),
  },
});
