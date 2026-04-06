import type { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'quote',
  interfaceName: 'QuoteBlockType',
  fields: [
    { name: 'quote', type: 'textarea', required: true },
    { name: 'attribution', type: 'text', required: true },
    { name: 'role', type: 'text' },
  ],
}
