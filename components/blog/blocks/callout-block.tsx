import type { CalloutBlock } from "@/payload-types"

const calloutStyles = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-200",
    label: "Info",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-200",
    label: "Warning",
  },
  tip: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-900 dark:text-green-200",
    label: "Tip",
  },
  note: {
    bg: "bg-neutral-50 dark:bg-neutral-900/30",
    border: "border-neutral-200 dark:border-neutral-700",
    text: "text-neutral-900 dark:text-neutral-200",
    label: "Note",
  },
} as const

export function CalloutBlockComponent({ block }: { block: CalloutBlock }) {
  const style = calloutStyles[block.type] || calloutStyles.info
  return (
    <aside className={`rounded-lg border p-4 ${style.bg} ${style.border}`}>
      <p
        className={`text-xs font-semibold tracking-wider uppercase ${style.text}`}
      >
        {style.label}
      </p>
      <p className={`mt-1 text-sm leading-relaxed ${style.text}`}>
        {block.body}
      </p>
    </aside>
  )
}
