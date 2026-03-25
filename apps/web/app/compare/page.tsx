import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { comparePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Compare Neverinstall Alternatives",
  description:
    "Compare Neverinstall against Citrix, AVD, Island, Omnissa, and other alternatives.",
  path: "/compare",
})

export default function CompareIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Compare",
          title: "Find the right architecture fit",
          subtitle:
            "Compare Neverinstall against browser, workspace, and AI infrastructure alternatives with a more factual, buyer-friendly evaluation lens.",
          primaryCta: { label: "Run TCO Calculator", href: "/tco-calculator" },
          secondaryCta: { label: "Get a Demo", href: "/get-demo" },
        }}
      />
      <ResourceGrid
        title="Comparison pages"
        description="Use compare pages as commercial entry points for product, migration, and infrastructure decisions."
        cards={Object.values(comparePages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Start Free Trial", href: "/signup" },
          { label: "Calculate TCO", href: "/tco-calculator" },
        ]}
      />
    </>
  )
}
