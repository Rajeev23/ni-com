import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Timer, TowerControl } from "lucide-react"

import {
  BlockGrid,
  CtaBand,
  HeroSection,
  PageContainer,
  ResourceGrid,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"
import {
  blogCards,
  corePages,
  customerCards,
  industryPages,
  productPages,
  useCasePages,
} from "@/lib/content/site"

export const metadata: Metadata = getBaseMetadata({
  title: corePages.homepage.title,
  description:
    "Neverinstall combines secure browser, DaaS, and sovereign infrastructure into one cloud-native platform.",
  path: "/",
})

export default function Page() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "The Sovereign Enterprise Platform",
          title: corePages.homepage.title,
          subtitle: corePages.homepage.subtitle,
          metric: corePages.homepage.metric,
          supportingCopy:
            "Neverinstall is one infrastructure platform that shows up as Secure Browser, DaaS, or Sovereign HCI depending on the workload, buyer, and control requirements.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See the Platform", href: "/platform" },
        }}
      />
      <BlockGrid
        title="Three product pillars"
        description="The homepage should route visitors to the right product, not force all three motions into one pitch."
        blocks={Object.values(productPages).map((page) => ({
          title: page.name,
          description: page.summary,
        }))}
      />
      <section className="border-b py-10">
        <PageContainer>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card/90 p-4 shadow-sm">
              <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Timer className="size-3.5" /> Restore Speed
              </p>
              <p className="mt-1 text-xl font-semibold">&lt; 1s JIT resume</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A clear proof point for DaaS buyers escaping slow legacy desktop
                stacks.
              </p>
            </div>
            <div className="rounded-2xl border bg-card/90 p-4 shadow-sm">
              <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <ShieldCheck className="size-3.5" /> Security Posture
              </p>
              <p className="mt-1 text-xl font-semibold">
                Isolation-first access
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A shared control model that spans browser sessions, workspaces,
                and sovereign infrastructure.
              </p>
            </div>
            <div className="rounded-2xl border bg-card/90 p-4 shadow-sm">
              <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <TowerControl className="size-3.5" /> Operating Model
              </p>
              <p className="mt-1 text-xl font-semibold">One control plane</p>
              <p className="mt-2 text-sm text-muted-foreground">
                One platform thesis connecting browser security, DaaS, and AI
                infrastructure.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>
      <BlockGrid
        title="Use cases that map to active buying intent"
        description="Choose the operational problem that matches your current rollout priority."
        blocks={Object.values(useCasePages)
          .slice(0, 6)
          .map((page) => ({
            title: page.name,
            description: page.summary,
          }))}
        columns={3}
      />
      <BlockGrid
        title="Why Neverinstall"
        description="Lead with outcomes first, then support them with technical credibility and platform leverage."
        blocks={[
          {
            title: "One platform, three routes to market",
            description:
              "The same underlying stack powers Secure Browser, DaaS, and Sovereign HCI instead of forcing buyers into unrelated products.",
          },
          {
            title: "Sovereignty-first operating model",
            description:
              "Keep stronger control over access, data boundaries, and deployment location across workforce and AI infrastructure use cases.",
          },
          {
            title: "Modern architecture over legacy baggage",
            description:
              "Position Neverinstall as the modern alternative to stitched-together browser stacks, legacy VDI, and hardware-tied private infrastructure.",
          },
        ]}
      />
      <section className="border-b py-14">
        <PageContainer>
          <div className="relative overflow-hidden rounded-3xl border bg-card p-8 shadow-sm">
            <div className="pointer-events-none absolute -top-20 right-0 size-56 rounded-full bg-primary/10 blur-3xl" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Replace fragmented stacks with one platform.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Start with workspace TCO today, then extend the conversation into
              AI infrastructure savings with the new HCI path.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/tco-calculator"
                className="inline-flex items-center gap-1 text-sm font-medium"
              >
                Open workspace TCO calculator{" "}
                <ArrowRight className="size-3.5" />
              </Link>
              <Link
                href="/ai-tco-calculator"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground"
              >
                Explore AI infrastructure TCO{" "}
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
      <section className="border-b py-12">
        <PageContainer>
          <div className="space-y-4">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Industry signal
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                The platform story should feel credible across regulated,
                distributed, and AI-heavy buyers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {Object.values(industryPages)
                .slice(0, 6)
                .map((page) => (
                  <Link
                    key={page.slug}
                    href={page.path}
                    className="rounded-full border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {page.name}
                  </Link>
                ))}
            </div>
          </div>
        </PageContainer>
      </section>
      <ResourceGrid
        title="Customer proof and reference points"
        description="Keep the homepage grounded with evidence from workforce, migration, and resilience use cases."
        cards={customerCards}
      />
      <ResourceGrid
        title="Latest resources"
        description="Comparison content, technical perspective, and bridge content across the three product surfaces."
        cards={blogCards}
      />
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "See Pricing", href: "/pricing" },
          { label: "Visit Trust Center", href: "/security" },
        ]}
      />
    </>
  )
}
