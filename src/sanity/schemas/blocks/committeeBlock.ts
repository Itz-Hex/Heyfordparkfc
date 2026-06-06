import { defineType, defineField } from "sanity";

export default defineType({
  name: "committeeBlock",
  title: "Committee",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      description: "Leave empty to show all committee members.",
      of: [{ type: "reference", to: [{ type: "committeeMember" }] }],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Committee" }),
  },
});
