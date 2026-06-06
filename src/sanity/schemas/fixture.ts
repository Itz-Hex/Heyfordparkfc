import { defineType, defineField } from "sanity";

export default defineType({
  name: "fixture",
  title: "Fixture / Result",
  type: "document",
  fields: [
    defineField({ name: "date", title: "Date", type: "datetime" }),
    defineField({ name: "homeTeam", title: "Home team", type: "string" }),
    defineField({ name: "awayTeam", title: "Away team", type: "string" }),
    defineField({ name: "kickoff", title: "Kick-off", type: "string" }),
    defineField({ name: "venue", title: "Venue", type: "string" }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: { list: ["fixture", "result"] },
    }),
    defineField({ name: "score", title: "Score", type: "string" }),
    defineField({ name: "note", title: "Note", type: "string" }),
  ],
});
