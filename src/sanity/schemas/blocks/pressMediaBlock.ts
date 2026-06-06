import { defineType, defineField } from "sanity";

export default defineType({
  name: "pressMediaBlock",
  title: "Contact — Press & Media",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({ name: "contactName", title: "Contact name", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
    defineField({ name: "contactPhone", title: "Contact phone", type: "string" }),
  ],
  preview: { select: { title: "title" }, prepare: ({ title }) => ({ title: title || "Press & Media" }) },
});
