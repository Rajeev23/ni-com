import type { Metadata } from "next"

import {
  BlockGrid,
  CtaBand,
  HeroSection,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Careers | Neverinstall",
  description:
    "Join Neverinstall and help build secure enterprise workspace products.",
  path: "/company/careers",
})

export default function CareersPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Careers",
          title: "Build the future of secure enterprise computing",
          subtitle:
            "Join a team focused on modern browser security, cloud desktops, and enterprise deployment infrastructure.",
          primaryCta: { label: "Contact Recruiting", href: "/contact" },
          secondaryCta: { label: "About Neverinstall", href: "/company/about" },
        }}
      />
      <BlockGrid
        title="Why join"
        description="Impactful problems, high technical ownership, and customer-facing outcomes."
        blocks={[
          {
            title: "Own meaningful systems",
            description:
              "Work across security, orchestration, and user experience in one integrated platform.",
          },
          {
            title: "Learn with expert peers",
            description:
              "Collaborate with engineers and operators with deep enterprise infrastructure expertise.",
          },
          {
            title: "Ship for real customers",
            description:
              "Build products used by teams in regulated and mission-critical environments.",
          },
        ]}
      />
      <CtaBand
        ctas={[
          { label: "Contact Recruiting", href: "/contact" },
          { label: "Get Product Demo", href: "/get-demo" },
          { label: "Read Blog", href: "/blog" },
        ]}
      />
    </>
  )
}
