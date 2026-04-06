import type { Post, Media, Author, Category } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { PageContainer } from '@/components/marketing/sections'

export function BlogHero({ post }: { post: Post }) {
  const author = post.author as Author | null | undefined
  const category = post.category as Category | null | undefined
  const cover = post.coverImage as Media | null | undefined

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null

  return (
    <section className="border-b py-14 md:py-20">
      <PageContainer>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            {category && (
              <>
                <span>/</span>
                <Link href={`/blog/category/${category.slug}`} className="hover:text-foreground">
                  {category.name}
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {author && <span>{author.name}</span>}
            {author && publishedDate && <span>·</span>}
            {publishedDate && <span>{publishedDate}</span>}
          </div>
          {cover && typeof cover !== 'number' && cover.url && (
            <Image
              src={cover.url}
              alt={cover.alt}
              width={cover.width || 1200}
              height={cover.height || 630}
              className="rounded-lg"
              priority
            />
          )}
        </div>
      </PageContainer>
    </section>
  )
}
