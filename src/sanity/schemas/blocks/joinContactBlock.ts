import { defineType, defineField } from "sanity";

export default defineType({
  name: "joinContactBlock",
  title: "Join — Form + Contact",
  type: "object",
  fields: [
    defineField({ name: "formTitle", title: "Form title", type: "string" }),
    defineField({ name: "formSubtitle", title: "Form subtitle", type: "string" }),
    defineField({ name: "submitLabel", title: "Submit label", type: "string" }),
    defineField({ name: "successMessage", title: "Success message", type: "string" }),
    defineField({ name: "successSub", title: "Success sub", type: "string" }),
    defineField({ name: "sidebarEyebrow", title: "Sidebar eyebrow", type: "string" }),
    defineField({ name: "sidebarTitle", title: "Sidebar title", type: "string" }),
    defineField({ name: "sidebarBody", title: "Sidebar body", type: "text" }),
    defineField({
      name: "sidebarOptions",
      title: "Sidebar options",
      type: "array",
      of: [
        {
          type: "object",
          name: "sidebarOption",
          fields: [
            { name: "icon", title: "Icon (lucide)", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Join — Form + Contact" }) },
});
