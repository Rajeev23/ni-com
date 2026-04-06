import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

import { PageContainer } from '@/components/marketing/sections'
import { BlogCard } from '@/components/blog/blog-card'
import { getBaseMetadata } from '@/lib/seo/metadata'

type Params = { slug: string }

async function getCategory(slug: string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'categories',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return result.docs[0] || null
}

async function getCategoryPosts(categoryId: number | string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'posts',
    where: {
      category: { equals: categoryId },
      status: { equals: 'published' },
    },
    sort: '-publishedAt',
    depth: 1,
    limit: 50,
  })
  return result.docs
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
    select: { slug: true },
  })
  return categories.docs.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) return {}

  return getBaseMetadata({
    title: category.seo?.title || `${category.name} | Neverinstall Blog`,
    description: category.seo?.description || category.description || '',
    path: `/blog/category/${slug}`,
  })
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) notFound()

  const posts = await getCategoryPosts(category.id)

  return (
    <section className="py-14 md:py-20">
      <PageContainer>
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span>{category.name}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-3 text-lg text-muted-foreground">{category.description}</p>
          )}

          {posts.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-muted-foreground">No posts in this category yet.</p>
          )}

          {category.relatedPages && category.relatedPages.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-semibold">Related resources</h2>
              <ul className="mt-4 space-y-2">
                {category.relatedPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-primary underline-offset-2 hover:underline">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  )
}
