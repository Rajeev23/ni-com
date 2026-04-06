import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

import { SignupForm } from "@/components/marketing/forms"
import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Start Free Trial | Neverinstall",
  description:
    "Start your Neverinstall trial and evaluate secure browser and workspace capabilities.",
  path: "/signup",
})

const trialIncludes = [
  "Full access to Desktop Workspaces and Secure Browser",
  "Guided onboarding with a product expert",
  "Up to 10 user seats during the pilot",
  "Neverinstall-managed cloud deployment",
  "Admin console with policy controls",
  "No credit card required to start",
]

export default function SignupPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Start Trial",
          title: "Launch your Neverinstall pilot",
          subtitle:
            "Get hands-on access to the platform with guided onboarding and dedicated support for your evaluation team.",
          primaryCta: { label: "Start Trial", href: "#signup-form" },
          secondaryCta: { label: "Book a Demo", href: "/get-demo" },
        }}
      />
      <section className="border-b py-14" id="signup-form">
        <PageContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            {/* Trial details sidebar */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold">
                  What&apos;s included in the trial
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A 14-day pilot with full platform access, dedicated onboarding
                  support, and no commitment required.
                </p>
              </div>
              <ul className="space-y-3">
                {trialIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <SignupForm />
          </div>
        </PageContainer>
      </section>
      <CtaBand
        headline="Want a guided walkthrough first?"
        description="Book a demo to see the platform with an expert, or check pricing details before starting."
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Calculate TCO", href: "/tco-calculator" },
          { label: "See Pricing", href: "/pricing" },
        ]}
      />
    </>
  )
}
