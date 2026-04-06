import type { CodeBlockType } from "@/payload-types"

export function CodeBlockComponent({ block }: { block: CodeBlockType }) {
  return (
    <div className="relative rounded-lg border bg-neutral-950 text-neutral-50">
      {block.language && block.language !== "plaintext" && (
        <div className="border-b border-neutral-800 px-4 py-2">
          <span className="text-xs font-medium text-neutral-400">
            {block.language}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm leading-relaxed">{block.code}</code>
      </pre>
    </div>
  )
}
