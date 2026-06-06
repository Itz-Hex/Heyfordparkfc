import { defineType, defineField } from "sanity";

export default defineType({
  name: "safeClubBlock",
  title: "Club Info — Safe & Welcoming",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "safeCard",
          fields: [
            { name: "icon", title: "Icon (lucide)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "Safe & Welcoming Club" }) },
});
