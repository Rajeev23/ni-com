import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { industryPages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Industries | Neverinstall",
  description:
    "Industry pages for BFSI, IT services, healthcare, government, and more.",
  path: "/solutions/industry",
})

export default function IndustryIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Industries",
          title: "Industry-specific secure workspace strategies",
          subtitle:
            "Map Neverinstall to the industry context where security, control, distributed access, or sovereign AI matter most.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See Use Cases", href: "/solutions/use-case" },
        }}
      />
      <ResourceGrid
        title="All industries"
        description="Industry pages connect buyer context, product fit, and use-case links in one place."
        cards={Object.values(industryPages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "View Pricing", href: "/pricing" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
    </>
  )
}
