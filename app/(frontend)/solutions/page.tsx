import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { industryPages, useCasePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title:
    "Solutions: Virtual Desktop Services by Use Case & Industry | Neverinstall",
  description:
    "Browse virtual desktop services and secure browser solutions by use case (VDI replacement, BYOD, contractors) and by industry—financial services, healthcare, manufacturing, and more.",
  path: "/solutions",
})

export default function SolutionsIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Solutions",
          title:
            "Virtual desktop services and secure browser workspaces—by scenario and sector",
          subtitle:
            "Choose a use case for hosted virtual desktops and secure browser sessions, or an industry page for compliance and deployment patterns that match your regulators and data residency needs.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See the Platform", href: "/platform" },
        }}
      />
      <ResourceGrid
        title="By use case"
        description="VDI replacement, remote work, BYOD, contractors, call centers, data residency, and more—each with hosted virtual desktop or secure browser paths."
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
