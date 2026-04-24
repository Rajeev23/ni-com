import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import config from "@payload-config"

import { CtaBand, PageContainer } from "@/components/marketing/sections"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlockRenderer } from "@/components/blog/block-renderer"
import { getBaseMetadata } from "@/lib/seo/metadata"

type Params = { slug: string }

export const dynamic = "force-dynamic"

async function getPost(slug: string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    depth: 2,
    limit: 1,
  })
  return result.docs[0] || null
}

export async function generateStaticParams() {
  if (!process.env.DATABASE_URI) {
    return []
  }

  try {
    const payload = await getPayload({ config })
    const posts = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      limit: 1000,
      select: { slug: true },
    })
    return posts.docs.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return getBaseMetadata({
    title: `${post.seo?.title || post.title} | Neverinstall`,
    description: post.seo?.description || post.description,
    path: `/blog/${post.slug}`,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <BlogHero post={post} />
      <section className="border-b py-14">
        <PageContainer>
          <article className="mx-auto max-w-3xl space-y-8">
            {post.content?.map((block) => (
              <BlockRenderer key={block.id} block={block} />
            ))}
          </article>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Compare Alternatives", href: "/compare" },
          { label: "Explore Resources", href: "/resources" },
        ]}
      />
    </>
  )
}
