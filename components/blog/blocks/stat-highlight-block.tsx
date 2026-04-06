import type { StatHighlightBlock } from "@/payload-types"

export function StatHighlightBlockComponent({
  block,
}: {
  block: StatHighlightBlock
}) {
  if (!block.items?.length) return null
  return (
    <div className="space-y-3">
      {block.title && (
        <h3 className="text-lg font-semibold tracking-tight">{block.title}</h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item, i) => (
          <div key={item.id || i} className="rounded-lg border bg-card p-5">
            <p className="text-3xl font-bold tracking-tight">{item.value}</p>
            <p className="mt-1 text-sm font-medium">{item.label}</p>
            {item.detail && (
              <p className="mt-1 text-xs text-muted-foreground">
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
