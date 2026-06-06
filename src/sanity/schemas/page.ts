import { defineType, defineField } from "sanity";

const blockTypes = [
  "heroBlock",
  "richTextBlock",
  "statsBlock",
  "timelineBlock",
  "valuesBlock",
  "ctaBlock",
  "sponsorsBlock",
  "teamsBlock",
  "fixturesBlock",
  "newsBlock",
  "locationsBlock",
  "committeeBlock",
  "faqBlock",
  "contactFormBlock",
  "contactsBlock",
  "documentsBlock",
  "feesBlock",
  "stepsBlock",
  "galleryBlock",
  "tabbedContentBlock",
];

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      description:
        'Unique identifier like "home", "about", "join", "contact", "club-info", "locations", "teams", "news".',
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
    }),
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: blockTypes.map((type) => ({ type })),
    }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
