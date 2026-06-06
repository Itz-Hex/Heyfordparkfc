import { defineType, defineField } from "sanity";

export default defineType({
  name: "committeeMember",
  title: "Committee member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  preview: { select: { title: "name", subtitle: "role" } },
});
