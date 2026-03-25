import type { Metadata } from "next"

import { DemoForm } from "@/components/marketing/forms"
import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Book a Demo | Neverinstall",
  description:
    "Talk to Neverinstall experts and design a secure browser and DaaS evaluation plan.",
  path: "/get-demo",
})

export default function GetDemoPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Get Demo",
          title: "Book a guided Neverinstall demo",
          subtitle:
            "Share your use case, current stack, and rollout goals across Secure Browser, DaaS, or Sovereign HCI. We will tailor the walkthrough to the right product surface.",
          supportingCopy:
            "All major CTAs should converge here so the site can route browser, workspace, and AI infrastructure buyers into one evaluation entry point.",
          primaryCta: { label: "Submit Request", href: "#demo-form" },
          secondaryCta: { label: "See Pricing", href: "/pricing" },
        }}
      />
      <section className="border-b py-14" id="demo-form">
        <PageContainer>
          <div className="mx-auto max-w-2xl">
            <DemoForm />
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Start Free Trial", href: "/signup" },
          { label: "Calculate TCO", href: "/tco-calculator" },
          { label: "AI Infrastructure TCO", href: "/ai-tco-calculator" },
        ]}
      />
    </>
  )
}
