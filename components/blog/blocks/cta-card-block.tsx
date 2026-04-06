import type { CtaCardBlock } from '@/payload-types'
import Link from 'next/link'

export function CtaCardBlockComponent({ block }: { block: CtaCardBlock }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-6">
      <h3 className="text-lg font-semibold tracking-tight">{block.heading}</h3>
      {block.description && <p className="mt-2 text-sm text-muted-foreground">{block.description}</p>}
      <Link
        href={block.buttonHref}
        className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        {block.buttonLabel}
      </Link>
    </div>
  )
}
