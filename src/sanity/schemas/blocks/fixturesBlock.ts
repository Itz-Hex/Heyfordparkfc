import { defineType, defineField } from "sanity";

export default defineType({
  name: "fixturesBlock",
  title: "Fixtures & results",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      options: { list: ["upcoming", "recent", "both"] },
      initialValue: "both",
    }),
    defineField({
      name: "limit",
      title: "Max items per column",
      type: "number",
      initialValue: 6,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "mode" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Fixtures",
      subtitle: subtitle || "Fixtures and results",
    }),
  },
});
