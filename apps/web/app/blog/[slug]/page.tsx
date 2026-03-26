import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { blogPosts } from "@/lib/content/pages/blog"
import { getBaseMetadata } from "@/lib/seo/metadata"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) {
    return {}
  }

  return getBaseMetadata({
    title: `${post.title} | Neverinstall`,
    description: post.description,
    path: `/blog/${post.slug}`,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = blogPosts[slug]
  if (!post) {
    notFound()
  }

  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Blog",
          title: post.title,
          subtitle: post.description,
          supportingCopy: `${post.publishedAt} · ${post.readTime}`,
          primaryCta: { label: "Book a Demo", href: "/get-demo" },
          secondaryCta: { label: "Back to Blog", href: "/blog" },
        }}
      />
      <section className="border-b py-14">
        <PageContainer>
          <article className="mx-auto max-w-3xl space-y-8">
            <p className="text-base text-muted-foreground">{post.summary}</p>
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.body}
                </p>
              </section>
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
