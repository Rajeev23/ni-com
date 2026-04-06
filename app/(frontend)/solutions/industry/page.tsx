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
    "Secure workspace solutions for BFSI, IT services, healthcare, government, and more.",
  path: "/solutions/industry",
})

export default function IndustryIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Industries",
          title: "Secure workspaces built for your industry",
          subtitle:
            "Map Neverinstall to the industry context where security, control, and distributed access matter most.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See Use Cases", href: "/solutions/use-case" },
        }}
      />
      <ResourceGrid
        title="All industries"
        description="See how organizations in your industry use Neverinstall to meet security, compliance, and access requirements."
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
