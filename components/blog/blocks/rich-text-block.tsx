import type { RichTextBlock as RichTextBlockType } from "@/payload-types"
import { RichText } from "@payloadcms/richtext-lexical/react"

export function RichTextBlockComponent({
  block,
}: {
  block: RichTextBlockType
}) {
  if (!block.content) return null
  return (
    <div className="prose max-w-none prose-neutral dark:prose-invert">
      <RichText data={block.content} />
    </div>
  )
}
