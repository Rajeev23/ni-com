import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { useCasePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title:
    "Use Cases: Virtual Desktop & Secure Browser Workspaces | Neverinstall",
  description:
    "Virtual desktop services and secure browser use cases: VDI replacement, remote and hybrid work, BYOD, contractors, call centers, data residency, and privileged access—same platform.",
  path: "/solutions/use-case",
})

export default function UseCaseIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Use Cases",
          title:
            "Virtual desktop services and secure browser workspaces by scenario",
          subtitle:
            "Pick the use case that matches your rollout—from hosted virtual desktops and VDI replacement to BYOD, contractors, call centers, and data residency. One platform; desktop and browser modes.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: {
            label: "View Industries",
            href: "/solutions/industry",
          },
        }}
      />
      <ResourceGrid
        title="All use cases"
        description="Hosted virtual desktops, secure browser sessions, and compliance-aligned deployment patterns—mapped to how teams actually work."
        cards={Object.values(useCasePages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
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
