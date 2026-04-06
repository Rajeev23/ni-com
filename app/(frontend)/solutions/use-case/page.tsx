import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { useCasePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Use Cases | Neverinstall",
  description:
    "Secure workspace solutions for remote work, BYOD, contractor access, and high-performance workloads.",
  path: "/solutions/use-case",
})

export default function UseCaseIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Use Cases",
          title: "Solve specific workspace challenges",
          subtitle:
            "Find the workflow page that matches the problem you need to solve first, from remote work to AI inference.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: {
            label: "View Industries",
            href: "/solutions/industry",
          },
        }}
      />
      <ResourceGrid
        title="All use cases"
        description="Find the deployment approach that matches your team's requirements, from remote access to GPU workloads."
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
