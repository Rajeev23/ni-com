import type { Block } from "payload"

export const EmbedBlock: Block = {
  slug: "embed",
  interfaceName: "EmbedBlockType",
  fields: [
    {
      name: "url",
      type: "text",
      required: true,
      admin: { description: "YouTube, Loom, or other embeddable URL" },
    },
    { name: "caption", type: "text" },
  ],
}
