import type { Block } from "payload"

export const CtaCardBlock: Block = {
  slug: "ctaCard",
  interfaceName: "CtaCardBlock",
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "buttonLabel", type: "text", required: true },
    { name: "buttonHref", type: "text", required: true },
  ],
}
