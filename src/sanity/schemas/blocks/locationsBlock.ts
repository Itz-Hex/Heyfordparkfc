import { defineType, defineField } from "sanity";

export default defineType({
  name: "locationsBlock",
  title: "Locations",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [
        {
          type: "object",
          name: "location",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "address", title: "Address", type: "text" },
            { name: "parking", title: "Parking notes", type: "text" },
            { name: "directionsUrl", title: "Directions URL", type: "string" },
            { name: "mapEmbedUrl", title: "Map embed URL", type: "string" },
            { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
          ],
          preview: { select: { title: "name", subtitle: "address" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Locations" }),
  },
});
