import { defineType, defineField } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "blurb", title: "Blurb", type: "text" }),
    defineField({ name: "manager", title: "Manager", type: "string" }),
    defineField({ name: "trainingDay", title: "Training day", type: "string" }),
    defineField({ name: "trainingTime", title: "Training time", type: "string" }),
    defineField({ name: "trainingVenue", title: "Training venue", type: "string" }),
    defineField({ name: "matchDay", title: "Match day", type: "string" }),
    defineField({ name: "league", title: "League", type: "string" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "sponsors",
      title: "Sponsors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "sponsor" }] }],
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
