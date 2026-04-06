import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Clock } from "lucide-react"

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

const contactInfo = [
  {
    icon: <Mail className="size-4 text-indigo-400" />,
    label: "Email",
    value: "hello@neverinstall.com",
    href: "mailto:hello@neverinstall.com",
  },
  {
    icon: <MapPin className="size-4 text-sky-400" />,
    label: "Office",
    value: "Bengaluru, India",
  },
  {
    icon: <Clock className="size-4 text-emerald-400" />,
    label: "Response time",
    value: "Within one business day",
  },
]

export default function ContactPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Contact",
          title: "Talk to Neverinstall",
          subtitle:
            "Reach our sales, support, or partnerships team. Select an inquiry type below and we&apos;ll route your request to the right people.",
          primaryCta: { label: "Send Message", href: "#contact-form" },
          secondaryCta: { label: "Book a Demo", href: "/get-demo" },
        }}
      />
      <section className="border-b py-14" id="contact-form">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
            {/* Form */}
            <div className="max-w-2xl">
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-8 lg:w-64">
              {contactInfo.map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h3 className="text-sm text-muted-foreground">
                      {item.label}
                    </h3>
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-indigo-400 hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}

              <div
                aria-hidden
                className="h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-[size:6px_1px] bg-repeat-x opacity-20"
              />

              <div className="space-y-3">
                <h3 className="text-sm text-muted-foreground">Quick links</h3>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/security"
                    className="text-sm font-medium text-foreground hover:text-indigo-400 hover:underline"
                  >
                    Trust Center
                  </Link>
                  <Link
                    href="/docs"
                    className="text-sm font-medium text-foreground hover:text-indigo-400 hover:underline"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm font-medium text-foreground hover:text-indigo-400 hover:underline"
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
      <CtaBand
        headline="Looking for something else?"
        description="Explore the platform in a guided demo, start a free trial, or review our security posture."
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Start Trial", href: "/signup" },
          { label: "Security & Compliance", href: "/security" },
        ]}
      />
    </>
  )
}
