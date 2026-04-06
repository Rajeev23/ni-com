import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { industryPages, useCasePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Solutions | Neverinstall",
  description: "Explore Neverinstall solutions by use case and industry.",
  path: "/solutions",
})

export default function SolutionsIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Solutions",
          title: "Solutions by use case and industry",
          subtitle:
            "Match Neverinstall to the operational challenge or industry context your organization is facing today.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See the Platform", href: "/platform" },
        }}
      />
      <ResourceGrid
        title="By use case"
        description="Select the operating problem that best matches your rollout priority."
        cards={Object.values(useCasePages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
      <ResourceGrid
        title="By industry"
        description="Explore how Neverinstall meets the security and workspace needs of your industry."
        cards={Object.values(industryPages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Compare Alternatives", href: "/compare" },
          { label: "Calculate TCO", href: "/tco-calculator" },
        ]}
      />
    </>
  )
}
