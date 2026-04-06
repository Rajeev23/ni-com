import type { ImageBlockType, Media } from "@/payload-types"
import Image from "next/image"

export function ImageBlockComponent({ block }: { block: ImageBlockType }) {
  const image = block.image as Media | undefined
  if (!image || typeof image === "number") return null

  return (
    <figure className={block.fullWidth ? "w-full" : "mx-auto max-w-2xl"}>
      <Image
        src={image.url || ""}
        alt={image.alt}
        width={image.width || 800}
        height={image.height || 450}
        className="rounded-lg"
      />
      {block.caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
