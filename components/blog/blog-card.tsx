import type { Post, Category } from "@/payload-types"
import Link from "next/link"

export function BlogCard({ post }: { post: Post }) {
  const category = post.category as Category | null | undefined

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50"
    >
      {category && (
        <span className="mb-2 text-xs font-medium tracking-wider text-primary uppercase">
          {category.name}
        </span>
      )}
      <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {post.description}
      </p>
      {publishedDate && (
        <span className="mt-auto pt-4 text-xs text-muted-foreground">
          {publishedDate}
        </span>
      )}
    </Link>
  )
}
