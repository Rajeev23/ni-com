import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'image',
  interfaceName: 'ImageBlockType',
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', type: 'text' },
    { name: 'fullWidth', type: 'checkbox', defaultValue: false },
  ],
}
