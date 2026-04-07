import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { corePages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"
import { cn } from "@/lib/utils"

export const metadata: Metadata = getBaseMetadata({
  title: corePages.pricing.title,
  description:
    "Pricing for Desktop Workspaces and Secure Browser Workspaces with enterprise support options.",
  path: "/pricing",
})

const browserPlans = [
  {
    label: "Standard",
    price: "$7",
    unit: "/ user / month",
    detail: "Zero-trust browsing with core policy and session controls.",
    features: [
      "Cloud-isolated browser sessions",
      "Basic DLP controls (clipboard, download)",
      "SSO / IdP integration",
      "Session timeout policies",
      "Standard support (email)",
    ],
  },
  {
    label: "Professional",
    price: "$12",
    unit: "/ user / month",
    recommended: true,
    detail:
      "Full DLP suite with session recording and advanced policy governance.",
    features: [
      "Everything in Standard",
      "Granular DLP: upload, print, watermark controls",
      "Forensic session recording with replay",
      "Conditional access policies",
      "Admin audit log",
      "Priority support",
    ],
  },
  {
    label: "Enterprise",
    price: "Custom",
    unit: "contact sales",
    detail:
      "Dedicated deployment, custom integrations, and enterprise SLAs for large-scale rollouts.",
    features: [
      "Everything in Professional",
      "Dedicated tenant isolation",
      "Custom IdP and SIEM integrations",
      "Deployment in your cloud (OCI / AWS / Azure)",
      "On-premises deployment option",
      "Dedicated account manager",
      "Enterprise SLA",
    ],
  },
]

const daasPlans = [
  {
    label: "Standard",
    price: "$15",
    unit: "/ user / month",
    detail:
      "CPU-oriented Windows and Linux desktops for general workforce use.",
    features: [
      "Windows and Linux environments",
      "Persistent and ephemeral sessions",
      "Sub-second session restore",
      "Any-device browser access",
      "Basic DLP and access policies",
      "Standard support (email)",
    ],
  },
  {
    label: "Professional",
    price: "$45",
    unit: "/ user / month",
    recommended: true,
    detail:
      "GPU-backed workstations for engineering, design, and power-user workflows.",
    features: [
      "Everything in Standard",
      "GPU-accelerated workstations",
      "Advanced session management",
      "Forensic session recording",
      "Custom image templates",
      "Admin audit log and API access",
      "Priority support",
    ],
  },
  {
    label: "Ultra",
    price: "$85",
    unit: "/ user / month",
    detail:
      "High-performance dedicated GPU environments for rendering, CAD, and AI workloads.",
    features: [
      "Everything in Professional",
      "Dedicated high-end GPU allocation",
      "Persistent storage with snapshots",
      "Multi-monitor and high-DPI support",
      "Custom networking and firewall rules",
      "Enterprise SLA",
    ],
  },
]

const tiers = [
  { value: "browser", name: "Secure Browser", plans: browserPlans },
  { value: "daas", name: "Desktop Workspaces", plans: daasPlans },
]

/* ------------------------------------------------------------------ */
/*  Feature comparator data                                           */
/* ------------------------------------------------------------------ */

type FeatureRow = { name: string; plans: [boolean, boolean, boolean] }

const browserComparatorPlans = ["Standard", "Professional", "Enterprise"]
const browserComparatorFeatures: FeatureRow[] = [
  { name: "Cloud-isolated browser sessions", plans: [true, true, true] },
  { name: "SSO / IdP integration", plans: [true, true, true] },
  { name: "Session timeout policies", plans: [true, true, true] },
  { name: "Clipboard & download DLP", plans: [true, true, true] },
  { name: "Upload, print, watermark controls", plans: [false, true, true] },
  { name: "Forensic session recording", plans: [false, true, true] },
  { name: "Conditional access policies", plans: [false, true, true] },
  { name: "Admin audit log", plans: [false, true, true] },
  { name: "Dedicated tenant isolation", plans: [false, false, true] },
  { name: "Custom SIEM integrations", plans: [false, false, true] },
  { name: "On-premises deployment", plans: [false, false, true] },
  { name: "Enterprise SLA", plans: [false, false, true] },
]

const daasComparatorPlans = ["Standard", "Professional", "Ultra"]
const daasComparatorFeatures: FeatureRow[] = [
  { name: "Windows & Linux environments", plans: [true, true, true] },
  { name: "Sub-second session restore", plans: [true, true, true] },
  { name: "Any-device browser access", plans: [true, true, true] },
  { name: "Persistent & ephemeral modes", plans: [true, true, true] },
  { name: "Basic DLP and access policies", plans: [true, true, true] },
  { name: "GPU-accelerated workstations", plans: [false, true, true] },
  { name: "Forensic session recording", plans: [false, true, true] },
  { name: "Custom image templates", plans: [false, true, true] },
  { name: "Admin audit log & API", plans: [false, true, true] },
  { name: "Dedicated high-end GPU", plans: [false, false, true] },
  { name: "Persistent storage with snapshots", plans: [false, false, true] },
  { name: "Multi-monitor / high-DPI", plans: [false, false, true] },
  { name: "Enterprise SLA", plans: [false, false, true] },
]

/* ------------------------------------------------------------------ */
/*  Indicator                                                         */
/* ------------------------------------------------------------------ */

function Indicator({ checked = false }: { checked?: boolean }) {
  return (
    <span
      className={cn(
        "flex size-5 items-center justify-center rounded-full font-sans text-xs font-semibold",
        checked
          ? "bg-emerald-500/10 text-emerald-600"
          : "bg-foreground/[0.065] text-foreground/40"
      )}
      aria-label={checked ? "Included" : "Not included"}
      role="img"
    >
      <span aria-hidden="true">{checked ? "✓" : "✗"}</span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Comparator table                                                  */
/* ------------------------------------------------------------------ */

function ComparatorTable({
  planNames,
  features,
}: {
  planNames: string[]
  features: FeatureRow[]
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="w-full text-sm">
        {/* Column header row */}
        <thead>
          <tr>
            <th
              scope="col"
              className="h-14 px-5 text-left font-medium text-foreground"
            >
              Features
            </th>
            {planNames.map((name, i) => (
              <th
                scope="col"
                key={name}
                className={cn(
                  "h-14 px-4 text-center font-medium text-foreground",
                  i === 1 && "bg-indigo-500/[0.04]"
                )}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span>{name}</span>
                  {i === 1 && (
                    <span className="text-[10px] font-normal tracking-wide text-indigo-500 uppercase">
                      Recommended
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {/* Feature rows */}
        <tbody>
          {features.map((feature) => (
            <tr key={feature.name} className="border-t">
              <th
                scope="row"
                className="h-12 px-5 text-left font-normal text-muted-foreground"
              >
                {feature.name}
              </th>
              {feature.plans.map((included, i) => (
                <td
                  key={i}
                  className={cn(
                    "h-12 px-4 text-center",
                    i === 1 && "bg-indigo-500/[0.04]"
                  )}
                >
                  <div className="flex justify-center">
                    <Indicator checked={included} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Comparator section (tabs wrapper)                                 */
/* ------------------------------------------------------------------ */

function ComparatorSection() {
  return (
    <section className="border-b py-14">
      <PageContainer>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-lg font-semibold tracking-tight">
            Compare plans at a glance
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            See exactly what&apos;s included in each tier so you can pick the
            right fit for your team.
          </p>

          <Tabs defaultValue="browser" className="mt-8 grid gap-6">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="browser">Secure Browser</TabsTrigger>
              <TabsTrigger value="daas">Desktop Workspaces</TabsTrigger>
            </TabsList>

            <TabsContent value="browser">
              <ComparatorTable
                planNames={browserComparatorPlans}
                features={browserComparatorFeatures}
              />
            </TabsContent>

            <TabsContent value="daas">
              <ComparatorTable
                planNames={daasComparatorPlans}
                features={daasComparatorFeatures}
              />
            </TabsContent>
          </Tabs>
        </div>
      </PageContainer>
    </section>
  )
}

function PlanCard({ plan }: { plan: (typeof browserPlans)[number] }) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
        plan.recommended
          ? "border-indigo-500/40 bg-card ring-1 ring-indigo-500/20"
          : "bg-card"
      }`}
    >
      {plan.recommended && (
        <Badge className="absolute -top-2.5 left-4 bg-indigo-500 text-white">
          Recommended
        </Badge>
      )}
      <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
        {plan.label}
      </p>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight">
          {plan.price}
        </span>
        <span className="text-sm text-muted-foreground">{plan.unit}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {plan.detail}
      </p>
      <div className="my-6 h-px bg-border" />
      <ul className="flex-1 space-y-2.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-indigo-500" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button
          asChild
          variant={plan.recommended ? "default" : "outline"}
          className="w-full"
        >
          <Link href={plan.price === "Custom" ? "/contact" : "/get-demo"}>
            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            <ArrowRight className="ml-1 size-3.5" />
          </Link>
        </Button>
      </div>
    </article>
  )
}

export default function PricingPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Pricing",
          title: "Transparent per-user pricing",
          subtitle:
            "Choose the work mode that fits each user segment. Both products are managed from a single platform — mix and match across your organization.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Calculate TCO", href: "/tco-calculator" },
        }}
      />

      {/* Pricing tiers */}
      <section className="border-b py-14">
        <PageContainer>
          <Tabs defaultValue="browser" className="grid gap-8">
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
                className="grid gap-5 md:grid-cols-3"
              >
                {tier.plans.map((plan) => (
                  <PlanCard key={plan.label} plan={plan} />
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </PageContainer>
      </section>

      {/* Deployment & packaging details */}
      <section className="border-b py-14">
        <PageContainer>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h3 className="text-sm font-semibold">All plans include</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Unified admin console",
                  "SSO and IdP integration",
                  "Session-level audit logging",
                  "Zero endpoint agent required",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h3 className="text-sm font-semibold">Deployment flexibility</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                All plans support Neverinstall-managed cloud. Customer cloud
                (OCI / AWS / Azure) and sovereign on-premises deployment are
                available on Enterprise plans or as add-ons.
              </p>
            </article>
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h3 className="text-sm font-semibold">Volume and annual terms</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Volume discounts are available for deployments over 100 users.
                Annual commitments reduce per-seat pricing further. Contact
                sales for custom packaging.
              </p>
            </article>
          </div>
        </PageContainer>
      </section>

      <ComparatorSection />

      <CtaBand
        headline="Need help choosing a plan?"
        description="Book a walkthrough and we'll model pricing for your specific headcount, deployment region, and user mix."
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Calculate TCO", href: "/tco-calculator" },
        ]}
      />
    </>
  )
}
