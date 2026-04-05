import type { Metadata } from "next"
import Link from "next/link"

import {
  CtaBand,
  HeroSection,
  PageContainer,
  ResourceGrid,
} from "@/components/marketing/sections"
import { corePages, trustCenterCards } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: corePages.trust.title,
  description:
    "Security, privacy, compliance, architecture, and policy materials for Neverinstall.",
  path: "/security",
})

export default function SecurityPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Trust Center",
          title: "Security, privacy, and compliance in one place",
          subtitle:
            "Use the Neverinstall Trust Center to review architecture, privacy, compliance posture, and supporting policy materials before or during security review.",
          supportingCopy:
            "Everything your security team needs to evaluate Neverinstall — architecture details, compliance certifications, privacy practices, and supporting policy documents.",
          primaryCta: {
            label: "Talk to Security",
            href: "/security/security-contact",
          },
          secondaryCta: { label: "Read Docs", href: "/docs" },
        }}
      />
      <ResourceGrid
        title="Trust Center sections"
        description="Start with the core trust materials most security and procurement teams need first."
        cards={trustCenterCards}
      />
      <section className="border-b py-14">
        <PageContainer>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">For security review</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Use the Security, Privacy, Compliance, and Architecture pages to
                understand the public trust posture quickly.
              </p>
            </article>
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                For documentation requests
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Visit the policy and security contact pages to request reports,
                initiate a security review, or access detailed materials.
              </p>
            </article>
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h2 className="text-lg font-semibold">For product buyers</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The Trust Center provides detailed security, privacy, and
                compliance documentation to support your procurement review.
              </p>
            </article>
          </div>
          <div className="mt-8">
            <Link
              href="/platform"
              className="inline-flex items-center gap-1 text-sm font-medium"
            >
              See the platform architecture powering these security controls
            </Link>
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          {
            label: "Talk to Security Team",
            href: "/security/security-contact",
          },
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Platform Technology", href: "/platform" },
        ]}
      />
    </>
  )
}
