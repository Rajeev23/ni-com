import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { platformPage, productPages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Products | Neverinstall",
  description:
    "Explore Neverinstall Desktop Workspaces and Secure Browser Workspaces.",
  path: "/products",
})

export default function ProductsIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Products",
          title: "Two work modes. One platform underneath.",
          subtitle:
            "Choose Desktop Workspaces or Secure Browser Workspaces based on your workload, team, and control requirements — both run on the same platform.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See the Platform", href: "/platform" },
        }}
      />
      <ResourceGrid
        title="Product portfolio"
        description="Each product addresses a different workload while sharing one infrastructure and control model."
        cards={Object.values(productPages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
      <ResourceGrid
        title="Shared platform architecture"
        description="Learn how one control plane powers both Desktop Workspaces and Secure Browser Workspaces."
        cards={[
          {
            title: platformPage.name,
            description: platformPage.summary,
            href: platformPage.path,
          },
        ]}
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
