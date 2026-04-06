import type { QuoteBlockType } from "@/payload-types"

export function QuoteBlockComponent({ block }: { block: QuoteBlockType }) {
  return (
    <blockquote className="border-l-4 border-primary pl-6">
      <p className="text-lg leading-relaxed text-foreground italic">
        {block.quote}
      </p>
      <footer className="mt-3 text-sm text-muted-foreground">
        — {block.attribution}
        {block.role && <span>, {block.role}</span>}
      </footer>
    </blockquote>
  )
}
