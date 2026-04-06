import type { ComparisonTableBlock } from '@/payload-types'

export function ComparisonTableBlockComponent({ block }: { block: ComparisonTableBlock }) {
  const { columns, rows, title, description } = block
  if (!columns || !rows) return null

  return (
    <div className="space-y-3">
      {title && <h3 className="text-lg font-semibold tracking-tight">{title}</h3>}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">{columns.label}</th>
              <th className="px-4 py-3 text-left font-medium">{columns.columnOne}</th>
              <th className="px-4 py-3 text-left font-medium text-primary">{columns.columnTwo}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id || i} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{row.label}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.valueOne}</td>
                <td className="px-4 py-3">{row.valueTwo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
