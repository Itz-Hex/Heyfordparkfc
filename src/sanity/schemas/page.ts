import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        'Unique identifier like "home", "about", "join", "contact", "club-info", "locations"',
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            { name: "key", title: "Key", type: "string", description: 'e.g. "hero", "valuesIntro"' },
            { name: "heading", title: "Heading", type: "string" },
            { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
          ],
          preview: { select: { title: "key", subtitle: "heading" } },
        },
      ],
    }),
  ],
});
