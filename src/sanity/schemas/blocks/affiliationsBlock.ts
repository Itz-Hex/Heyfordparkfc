import { defineType, defineField } from "sanity";

export default defineType({
  name: "affiliationsBlock",
  title: "Club Info — Affiliations & Partners",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "partners",
      title: "Partners",
      type: "array",
      of: [
        {
          type: "object",
          name: "partner",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "role", title: "Role", type: "string" },
            { name: "url", title: "URL", type: "string" },
            { name: "logoIcon", title: "Logo icon (lucide)", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "Affiliations & Partners" }) },
});
