import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  ResourceGrid,
} from "@/components/marketing/sections"
import { customerCards } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Customer Stories | Neverinstall",
  description:
    "Customer stories from teams modernizing secure access with Neverinstall.",
  path: "/customers",
})

export default function CustomersPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Customers",
          title: "Stories from teams modernizing secure access",
          subtitle:
            "See how enterprises reduce complexity, improve policy consistency, and scale rollout confidence.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "View Pricing", href: "/pricing" },
        }}
      />
      <ResourceGrid
        title="Customer highlights"
        description="Outcome-focused examples across regulated and distributed organizations."
        cards={customerCards}
      />
      <CtaBand
        headline="See similar results for your team"
        description="Walk through a deployment scenario based on your industry, user mix, and current stack."
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Calculate TCO", href: "/tco-calculator" },
          { label: "Contact Sales", href: "/contact" },
        ]}
      />
    </>
  )
}
