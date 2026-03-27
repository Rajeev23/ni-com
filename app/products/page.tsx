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
    "Explore Neverinstall secure browser, DaaS, and sovereign HCI products.",
  path: "/products",
})

export default function ProductsIndexPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Products",
          title: "Three product surfaces. One platform underneath.",
          subtitle:
            "Choose Secure Browser, DaaS, or Sovereign HCI based on the workload, buyer, and control requirement while keeping the shared platform story intact.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See the Platform", href: "/platform" },
        }}
      />
      <ResourceGrid
        title="Product portfolio"
        description="Each product solves a different buyer problem while sharing one infrastructure and control model."
        cards={Object.values(productPages).map((page) => ({
          title: page.name,
          description: page.summary,
          href: page.path,
        }))}
      />
      <ResourceGrid
        title="Why the platform page matters"
        description="Use the platform route to explain the shared architecture without overloading every product page."
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
