import type { Metadata } from "next"

import {
  BlockGrid,
  CtaBand,
  HeroSection,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Documentation | Neverinstall",
  description:
    "External-facing documentation for Neverinstall products and workflows.",
  path: "/docs",
})

export default function DocsPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Docs",
          title: "Technical documentation",
          subtitle:
            "Explore product setup guides, architecture references, and operational playbooks.",
          primaryCta: {
            label: "Browse Product Pages",
            href: "/products/secure-browser",
          },
          secondaryCta: { label: "Contact Support", href: "/contact" },
        }}
      />
      <BlockGrid
        title="Documentation categories"
        description="Structured learning path from setup to operations."
        blocks={[
          {
            title: "Quickstart",
            description:
              "Deploy baseline environments and validate access in a pilot.",
          },
          {
            title: "Identity & policy",
            description:
              "Configure role mapping, access controls, and policy guardrails.",
          },
          {
            title: "Observability",
            description:
              "Set up telemetry, alerting, and governance reporting.",
          },
          {
            title: "Migration",
            description:
              "Plan cutover and coexistence with legacy workspace tooling.",
          },
        ]}
        columns={2}
      />
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "See Security", href: "/security" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  )
}
