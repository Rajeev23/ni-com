import type { Metadata } from "next"
import { getPayload } from "payload"
import config from "@payload-config"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { BlogCard } from "@/components/blog/blog-card"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Blog | Neverinstall",
  description:
    "Engineering, product, and thought leadership from Neverinstall.",
  path: "/blog",
})

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 20,
    depth: 1,
  })

  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Blog",
          title: "Insights for modern enterprise computing",
          subtitle:
            "Read research, architecture patterns, and practical guidance for secure browser and DaaS adoption.",
          primaryCta: { label: "View Resources", href: "/resources" },
          secondaryCta: { label: "Get Demo", href: "/get-demo" },
        }}
      />
      <section className="border-b py-14">
        <PageContainer>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recent posts
            </h2>
            <p className="text-sm text-muted-foreground">
              Latest thinking from product, platform, and security teams.
            </p>
          </div>
          {posts.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-muted-foreground">
              No posts yet. Check back soon.
            </p>
          )}
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Compare Alternatives", href: "/compare" },
          { label: "Read Docs", href: "/docs" },
        ]}
      />
    </>
  )
}
