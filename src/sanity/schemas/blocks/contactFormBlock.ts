import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactFormBlock",
  title: "Contact form",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "subjects",
      title: "Subject options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "submitLabel", title: "Submit button label", type: "string", initialValue: "Send message" }),
    defineField({ name: "successMessage", title: "Success message", type: "text" }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Contact form" }),
  },
});
