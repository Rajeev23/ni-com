import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { customerStories } from "@/lib/content/pages/customers"
import { getBaseMetadata } from "@/lib/seo/metadata"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return Object.keys(customerStories).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const story = customerStories[slug]
  if (!story) {
    return {}
  }

  return getBaseMetadata({
    title: `${story.title} | Neverinstall`,
    description: story.description,
    path: `/customers/${story.slug}`,
  })
}

export default async function CustomerStoryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const story = customerStories[slug]
  if (!story) {
    notFound()
  }

  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Customer Story",
          title: story.title,
          subtitle: story.description,
          supportingCopy: `${story.industry} · ${story.outcome}`,
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Back to Customers", href: "/customers" },
        }}
      />
      <section className="border-b py-14">
        <PageContainer>
          <article className="mx-auto max-w-3xl space-y-6">
            <p className="text-base text-muted-foreground">{story.summary}</p>
            <div className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Key outcomes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {story.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Calculate TCO", href: "/tco-calculator" },
          { label: "Contact Sales", href: "/contact" },
        ]}
      />
    </>
  )
}
