import type { Post } from '@/payload-types'
import { RichTextBlockComponent } from './blocks/rich-text-block'
import { CalloutBlockComponent } from './blocks/callout-block'
import { ComparisonTableBlockComponent } from './blocks/comparison-table-block'
import { StatHighlightBlockComponent } from './blocks/stat-highlight-block'
import { ImageBlockComponent } from './blocks/image-block-component'
import { CodeBlockComponent } from './blocks/code-block-component'
import { CtaCardBlockComponent } from './blocks/cta-card-block'
import { EmbedBlockComponent } from './blocks/embed-block-component'
import { QuoteBlockComponent } from './blocks/quote-block-component'

type ContentBlock = NonNullable<Post['content']>[number]

export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.blockType) {
    case 'richText':
      return <RichTextBlockComponent block={block} />
    case 'callout':
      return <CalloutBlockComponent block={block} />
    case 'comparisonTable':
      return <ComparisonTableBlockComponent block={block} />
    case 'statHighlight':
      return <StatHighlightBlockComponent block={block} />
    case 'image':
      return <ImageBlockComponent block={block} />
    case 'code':
      return <CodeBlockComponent block={block} />
    case 'ctaCard':
      return <CtaCardBlockComponent block={block} />
    case 'embed':
      return <EmbedBlockComponent block={block} />
    case 'quote':
      return <QuoteBlockComponent block={block} />
    default:
      return null
  }
}
