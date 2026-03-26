import type { Metadata } from "next"
import Link from "next/link"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"
import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { corePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: corePages.pricing.title,
  description:
    "Pricing for secure browser, DaaS, and sovereign HCI with enterprise support options.",
  path: "/pricing",
})

const tiers = [
  {
    value: "browser",
    name: "Secure Browser",
    plans: [
      {
        label: "Standard",
        price: "$7 / user / month",
        detail: "Zero-trust browsing with core policy controls.",
      },
      {
        label: "Professional",
        price: "$12 / user / month",
        detail: "Adds richer DLP controls and broader enterprise governance.",
      },
      {
        label: "Enterprise",
        price: "$20 / user / month",
        detail: "For larger deployments and deeper operational requirements.",
      },
    ],
  },
  {
    value: "daas",
    name: "Desktop as a Service",
    plans: [
      {
        label: "Standard",
        price: "$15 / user / month",
        detail: "CPU-oriented desktop delivery for broader workforce rollouts.",
      },
      {
        label: "Professional",
        price: "$45 / user / month",
        detail:
          "Adds stronger GPU-backed workspace support for heavier user groups.",
      },
      {
        label: "Ultra",
        price: "$85 / user / month",
        detail: "For higher-performance and premium desktop use cases.",
      },
    ],
  },
  {
    value: "hci",
    name: "Sovereign HCI",
    plans: [
      {
        label: "Starter",
        price: "Design partner pricing",
        detail:
          "For early sovereign AI infrastructure engagements and platform design programs.",
      },
      {
        label: "Standard",
        price: "From $2,000 / accelerator / year",
        detail:
          "Multi-vendor orchestration and integrated HCI for production AI infrastructure.",
      },
      {
        label: "Enterprise",
        price: "From $3,500 / accelerator / year",
        detail:
          "Adds deeper inference, sandboxing, and premium support expectations.",
      },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Pricing",
          title: corePages.pricing.title,
          subtitle: corePages.pricing.subtitle,
          supportingCopy:
            "Choose pricing by buyer motion: browser security, cloud workspaces, or sovereign AI infrastructure.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Calculate TCO", href: "/tco-calculator" },
        }}
      />
      <section className="border-b py-10">
        <PageContainer>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border bg-card/90 p-5 shadow-sm">
              <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                Secure Browser model
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                From $7 / user / month
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tiered per-user pricing for browser isolation, policy controls,
                and enterprise governance.
              </p>
            </article>
            <article className="rounded-2xl border bg-card/90 p-5 shadow-sm">
              <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                DaaS model
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                From $15-$85 / user / month
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tiered workspace pricing for Windows/Linux support, persistent
                or ephemeral sessions, and optional GPU-backed user cohorts.
              </p>
            </article>
            <article className="rounded-2xl border bg-card/90 p-5 shadow-sm">
              <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                Sovereign HCI model
              </p>
              <h2 className="mt-2 text-lg font-semibold">
                From $2,000 / accelerator / year
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Accelerator-based pricing for multi-vendor orchestration,
                integrated serving, and platform control in sovereign AI
                deployments.
              </p>
            </article>
          </div>
        </PageContainer>
      </section>
      <section className="border-b py-14">
        <PageContainer>
          <Tabs defaultValue="browser" className="grid gap-6">
            <TabsList className="w-full justify-start">
              {tiers.map((tier) => (
                <TabsTrigger key={tier.value} value={tier.value}>
                  {tier.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {tiers.map((tier) => (
              <TabsContent
                key={tier.value}
                value={tier.value}
                className="grid gap-4 md:grid-cols-3"
              >
                {tier.plans.map((plan) => (
                  <article
                    key={plan.label}
                    className="rounded-2xl border bg-card p-6 shadow-sm"
                  >
                    <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                      {plan.label}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold">{plan.price}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.detail}
                    </p>
                    <Link
                      className="mt-4 inline-flex text-sm font-medium"
                      href={
                        tier.value === "hci"
                          ? "/ai-tco-calculator"
                          : "/get-demo"
                      }
                    >
                      {tier.value === "hci"
                        ? "Explore AI infrastructure pricing →"
                        : "Request pricing details →"}
                    </Link>
                  </article>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </PageContainer>
      </section>
      <section className="border-b py-14">
        <PageContainer>
          <div className="rounded-2xl border bg-card/90 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              How to evaluate these pricing models
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              Secure Browser and DaaS use more conventional per-user packaging.
              Sovereign HCI is priced per managed accelerator because the buyer,
              budget, and operating model are fundamentally different.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              For AI infrastructure buyers, compare bundled platform value and
              multi-vendor flexibility against software-only licensing models.
            </p>
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Calculate TCO", href: "/tco-calculator" },
          { label: "AI Infrastructure TCO", href: "/ai-tco-calculator" },
        ]}
      />
    </>
  )
}
