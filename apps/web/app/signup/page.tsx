import type { Metadata } from "next"

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

export default function SignupPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Start Trial",
          title: "Launch your Neverinstall trial",
          subtitle:
            "Get access to platform capabilities with guided onboarding and pilot support for your team.",
          primaryCta: { label: "Start Trial", href: "#signup-form" },
          secondaryCta: { label: "Book a Demo", href: "/get-demo" },
        }}
      />
      <section className="border-b py-14" id="signup-form">
        <PageContainer>
          <div className="mx-auto max-w-2xl">
            <SignupForm />
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Calculate TCO", href: "/tco-calculator" },
          { label: "See Pricing", href: "/pricing" },
        ]}
      />
    </>
  )
}
