import type { EmbedBlockType } from "@/payload-types"

function getEmbedUrl(url: string): string | null {
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  )
  if (ytMatch) return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`
  const loomMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/)
  if (loomMatch) return `https://www.loom.com/embed/${loomMatch[1]}`
  return null
}

export function EmbedBlockComponent({ block }: { block: EmbedBlockType }) {
  const embedUrl = getEmbedUrl(block.url)

  if (!embedUrl) {
    return (
      <a
        href={block.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        {block.caption || block.url}
      </a>
    )
  }

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <iframe
          src={embedUrl}
          title={block.caption || "Embedded content"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {block.caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
