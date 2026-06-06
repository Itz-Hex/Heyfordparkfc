import { defineType, defineField } from "sanity";

export default defineType({
  name: "findUsBlock",
  title: "Contact — When you'll find us",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [
        {
          type: "object",
          name: "scheduleRow",
          fields: [
            { name: "day", title: "Day", type: "string" },
            { name: "hours", title: "Hours", type: "string" },
            { name: "note", title: "Note", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "When you'll find us" }) },
});
