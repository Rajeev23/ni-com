import type { Metadata } from "next"
import { CheckCircle2, Clock, Shield, Users } from "lucide-react"

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

const proofPoints = [
  {
    icon: <Clock className="size-4 text-indigo-400" />,
    text: "30-minute guided session tailored to your use case",
  },
  {
    icon: <Users className="size-4 text-sky-400" />,
    text: "Live with teams at Tally, Porter, Indovance, and more",
  },
  {
    icon: <Shield className="size-4 text-emerald-400" />,
    text: "No agent install — see it running in your browser",
  },
  {
    icon: <CheckCircle2 className="size-4 text-violet-400" />,
    text: "Same-day pilot setup available after demo",
  },
]

export default function GetDemoPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Get Demo",
          title: "See Neverinstall in action",
          subtitle:
            "Share your use case, current stack, and rollout goals. We'll tailor the walkthrough to cover Desktop Workspaces, Secure Browser, or both.",
          primaryCta: { label: "Submit Request", href: "#demo-form" },
          secondaryCta: { label: "See Pricing", href: "/pricing" },
        }}
      />
      <section className="border-b py-14" id="demo-form">
        <PageContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            {/* Social proof sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold">What to expect</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A product expert will walk through the platform based on your
                  deployment scenario — whether you&apos;re replacing Citrix,
                  securing BYOD contractors, or evaluating both work modes.
                </p>
              </div>
              <ul className="space-y-4">
                {proofPoints.map((point) => (
                  <li key={point.text} className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                      {point.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                <p className="text-xs font-medium text-indigo-400">
                  Typical response time
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We respond within one business day and can schedule demos
                  same-week for most time zones.
                </p>
              </div>
            </div>

            {/* Form */}
            <DemoForm />
          </div>
        </PageContainer>
      </section>
      <CtaBand
        headline="Prefer to explore on your own?"
        description="Start a free trial with guided onboarding, or model your cost comparison first."
        ctas={[
          { label: "Start Free Trial", href: "/signup" },
          { label: "Calculate TCO", href: "/tco-calculator" },
        ]}
      />
    </>
  )
}
