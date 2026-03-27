import type { Metadata } from "next"

import { ContactForm } from "@/components/marketing/forms"
import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Contact Neverinstall",
  description:
    "Contact sales, support, and partnerships teams at Neverinstall.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Contact",
          title: "Talk to Neverinstall",
          subtitle:
            "Reach our sales, support, or partnerships team and we will route your request immediately.",
          primaryCta: { label: "Send Message", href: "#contact-form" },
          secondaryCta: { label: "Book a Demo", href: "/get-demo" },
        }}
      />
      <section className="border-b py-14" id="contact-form">
        <PageContainer>
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Start Trial", href: "/signup" },
          { label: "Security & Compliance", href: "/security" },
        ]}
      />
    </>
  )
}
