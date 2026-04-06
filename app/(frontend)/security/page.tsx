import type { Metadata } from "next"
import Link from "next/link"
import { Shield, FileText, ShoppingCart, ArrowRight } from "lucide-react"

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

const audienceCards = [
  {
    icon: <Shield className="size-5 text-indigo-400" />,
    title: "For security review",
    description:
      "Start with the Security, Privacy, and Compliance pages to build your trust evaluation. Request detailed reports through the contact form.",
    cta: { label: "Security overview", href: "/security/security" },
  },
  {
    icon: <FileText className="size-5 text-sky-400" />,
    title: "For documentation requests",
    description:
      "Need SOC 2 reports, penetration test summaries, or architecture diagrams? Contact our security team to request specific documents.",
    cta: { label: "Contact our team", href: "/contact" },
  },
  {
    icon: <ShoppingCart className="size-5 text-emerald-400" />,
    title: "For procurement review",
    description:
      "Review terms, privacy practices, and compliance posture to support your vendor assessment and purchasing decision.",
    cta: { label: "Terms & conditions", href: "/security/terms-conditions" },
  },
]

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
          primaryCta: { label: "Contact Security Team", href: "/contact" },
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
          <div className="grid gap-5 md:grid-cols-3">
            {audienceCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border bg-card/90 p-6 shadow-sm"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-border/60 bg-muted/50">
                  {card.icon}
                </div>
                <h2 className="text-base font-semibold">{card.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {card.description}
                </p>
                <Link
                  href={card.cta.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  {card.cta.label}
                  <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/platform"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              See the platform architecture powering these security controls
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </PageContainer>
      </section>
      <CtaBand
        headline="Need more detail for your security review?"
        description="Reach out to our security team directly, schedule a technical walkthrough, or review the platform architecture."
        ctas={[
          { label: "Contact Security Team", href: "/contact" },
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Platform Technology", href: "/platform" },
        ]}
      />
    </>
  )
}
