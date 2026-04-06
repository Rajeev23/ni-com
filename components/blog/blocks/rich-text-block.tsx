import type { RichTextBlock as RichTextBlockType } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

export function RichTextBlockComponent({ block }: { block: RichTextBlockType }) {
  if (!block.content) return null
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <RichText data={block.content} />
    </div>
  )
}
