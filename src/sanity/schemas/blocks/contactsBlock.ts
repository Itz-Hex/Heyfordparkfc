import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactsBlock",
  title: "Key contacts",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "object",
          name: "contact",
          fields: [
            { name: "role", title: "Role", type: "string" },
            { name: "name", title: "Name", type: "string" },
            { name: "email", title: "Email", type: "string" },
            { name: "phone", title: "Phone", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "role" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Key contacts" }),
  },
});
