import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactDetailsBlock",
  title: "Contact — Form + Key Contacts",
  type: "object",
  fields: [
    defineField({ name: "formTitle", title: "Form title", type: "string" }),
    defineField({ name: "subjectOptions", title: "Subject options", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "submitLabel", title: "Submit label", type: "string" }),
    defineField({ name: "contactsTitle", title: "Contacts title", type: "string" }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactRow",
          fields: [
            { name: "role", title: "Role", type: "string" },
            { name: "name", title: "Name", type: "string" },
            { name: "email", title: "Email", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "followTitle", title: "Follow title", type: "string" }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          name: "social",
          fields: [
            { name: "platform", title: "Platform (lucide icon name)", type: "string" },
            { name: "url", title: "URL", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact — Form + Contacts" }) },
});
