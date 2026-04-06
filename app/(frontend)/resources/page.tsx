import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { corePages, resourceCards } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: corePages.resources.title,
  description:
    "Neverinstall resources hub for guides, stories, and security content.",
  path: "/resources",
})

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Resources",
          title: corePages.resources.title,
          subtitle: corePages.resources.subtitle,
          primaryCta: { label: "Explore Blog", href: "/blog" },
          secondaryCta: { label: "Visit Trust Center", href: "/security" },
        }}
      />
      <ResourceGrid
        title="Featured resources"
        description="Guides, customer stories, and security materials to help you evaluate Neverinstall."
        cards={resourceCards}
      />
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Read Docs", href: "/docs" },
          { label: "Customer Stories", href: "/customers" },
        ]}
      />
    </>
  )
}
