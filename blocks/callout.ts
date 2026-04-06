import type { Block } from "payload"

export const CalloutBlock: Block = {
  slug: "callout",
  interfaceName: "CalloutBlock",
  fields: [
    {
      name: "type",
      type: "select",
      defaultValue: "info",
      options: [
        { label: "Info", value: "info" },
        { label: "Warning", value: "warning" },
        { label: "Tip", value: "tip" },
        { label: "Note", value: "note" },
      ],
      required: true,
    },
    {
      name: "body",
      type: "textarea",
      required: true,
    },
  ],
}
