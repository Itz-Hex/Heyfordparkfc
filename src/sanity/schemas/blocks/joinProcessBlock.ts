import { defineType, defineField } from "sanity";

export default defineType({
  name: "joinProcessBlock",
  title: "Join — 4 Stage Process",
  type: "object",
  fields: [
    // 01 — Places
    defineField({ name: "placesNumber", title: "01 Number", type: "string", initialValue: "01" }),
    defineField({ name: "placesTitle", title: "01 Title", type: "string" }),
    defineField({ name: "placesBody", title: "01 Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "placesAgeGroups", title: "01 Age groups", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "placesWaitlistTitle", title: "01 Waitlist title", type: "string" }),
    defineField({ name: "placesWaitlistBody", title: "01 Waitlist body", type: "text" }),
    defineField({ name: "placesLinkLabel", title: "01 Link label", type: "string" }),
    defineField({ name: "placesLinkUrl", title: "01 Link URL", type: "string" }),
    // 02 — Training
    defineField({ name: "trainingNumber", title: "02 Number", type: "string", initialValue: "02" }),
    defineField({ name: "trainingTitle", title: "02 Title", type: "string" }),
    defineField({ name: "trainingBody", title: "02 Body", type: "text" }),
    defineField({
      name: "trainingTable",
      title: "02 Training table rows",
      type: "array",
      of: [
        {
          type: "object",
          name: "trainingRow",
          fields: [
            { name: "day", title: "Day", type: "string" },
            { name: "venue", title: "Venue", type: "string" },
            { name: "teams", title: "Teams", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "trainingLinkLabel", title: "02 Link label", type: "string" }),
    defineField({ name: "trainingLinkUrl", title: "02 Link URL", type: "string" }),
    // 03 — Cost
    defineField({ name: "costNumber", title: "03 Number", type: "string", initialValue: "03" }),
    defineField({ name: "costTitle", title: "03 Title", type: "string" }),
    defineField({
      name: "costTiers",
      title: "03 Cost tiers",
      type: "array",
      of: [
        {
          type: "object",
          name: "costTier",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "note", title: "Note", type: "string" },
          ],
        },
      ],
    }),
    // 04 — Register
    defineField({ name: "registerNumber", title: "04 Number", type: "string", initialValue: "04" }),
    defineField({ name: "registerTitle", title: "04 Title", type: "string" }),
    defineField({
      name: "registerSteps",
      title: "04 Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "registerStep",
          fields: [
            { name: "n", title: "Number", type: "number" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Join — 4 Stage Process" }) },
});
