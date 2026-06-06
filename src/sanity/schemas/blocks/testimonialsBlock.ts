import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialsBlock",
  title: "Testimonials",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        {
          type: "object",
          name: "testimonial",
          fields: [
            { name: "quote", title: "Quote", type: "text" },
            { name: "author", title: "Author", type: "string" },
            { name: "role", title: "Role / context", type: "string" },
            { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
          ],
          preview: { select: { title: "author", subtitle: "quote" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Testimonials" }),
  },
});
