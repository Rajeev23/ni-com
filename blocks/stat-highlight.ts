import type { Block } from "payload"

export const StatHighlightBlock: Block = {
  slug: "statHighlight",
  interfaceName: "StatHighlightBlock",
  fields: [
    { name: "title", type: "text" },
    {
      name: "items",
      type: "array",
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "detail", type: "text" },
      ],
    },
  ],
}
