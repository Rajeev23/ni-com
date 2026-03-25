import type { Metadata } from "next"

import {
  BlockGrid,
  CtaBand,
  HeroSection,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "About Neverinstall",
  description:
    "Mission and platform vision for sovereign enterprise computing.",
  path: "/company/about",
})

export default function AboutPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Company",
          title: "Enterprise computing, re-architected",
          subtitle:
            "Neverinstall helps organizations modernize secure access with cloud-native platform design and sovereignty controls.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Careers", href: "/company/careers" },
        }}
      />
      <BlockGrid
        title="Our mission"
        description="Build secure, usable, and sovereign enterprise computing infrastructure."
        blocks={[
          {
            title: "Technically authoritative",
            description:
              "We build with deep systems and security discipline, not surface-level feature parity.",
          },
          {
            title: "Plainspoken",
            description:
              "We explain complex architecture in practical language that supports buying decisions.",
          },
          {
            title: "Forward-looking",
            description:
              "We design for modern threat models and distributed work, not legacy assumptions.",
          },
        ]}
      />
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Join Us", href: "/company/careers" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  )
}
