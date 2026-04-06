import type { Block } from 'payload'

export const ComparisonTableBlock: Block = {
  slug: 'comparisonTable',
  interfaceName: 'ComparisonTableBlock',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'columns',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true, admin: { description: 'Row label column header (e.g. "Feature")' } },
        { name: 'columnOne', type: 'text', required: true, admin: { description: 'First comparison column header' } },
        { name: 'columnTwo', type: 'text', required: true, admin: { description: 'Second comparison column header' } },
      ],
    },
    {
      name: 'rows',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'valueOne', type: 'text', required: true },
        { name: 'valueTwo', type: 'text', required: true },
      ],
    },
  ],
}
