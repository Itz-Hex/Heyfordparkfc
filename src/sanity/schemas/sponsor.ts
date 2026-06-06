import { defineType, defineField } from "sanity";

export default defineType({
  name: "sponsor",
  title: "Sponsor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
  ],
});
