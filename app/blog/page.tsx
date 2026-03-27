import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { blogCards } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Blog | Neverinstall",
  description:
    "Engineering, product, and thought leadership from Neverinstall.",
  path: "/blog",
})

export default function BlogPage() {
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
      <ResourceGrid
        title="Recent posts"
        description="Latest thinking from product, platform, and security teams."
        cards={blogCards}
      />
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
