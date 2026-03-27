import type { Metadata } from "next"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

const calculatorCards = [
  {
    title: "NVIDIA AI Enterprise",
    label: "$4,500 / GPU / year",
    detail:
      "Best reference point for the NVIDIA software tax conversation in enterprise GPU environments.",
  },
  {
    title: "Neverinstall Sovereign HCI",
    label: "From $2,000 / accelerator / year",
    detail:
      "Multi-vendor orchestration, inference serving, sandboxing, and integrated HCI under one platform story.",
  },
  {
    title: "DIY open source stack",
    label: "Variable software + people cost",
    detail:
      "Lower software line items can still become high internal platform cost once orchestration, storage, networking, and operations are included.",
  },
]

export const metadata: Metadata = getBaseMetadata({
  title:
    "AI Infrastructure TCO Calculator - Compare vs NVIDIA, Nutanix, VMware - Neverinstall",
  description:
    "Explore modeled AI infrastructure economics across vendor tax, accelerator strategy, and platform operating assumptions.",
  path: "/ai-tco-calculator",
})

export default function AiTcoCalculatorPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "AI Infrastructure TCO",
          title: "See what your AI infrastructure stack is really costing you.",
          subtitle:
            "Start the commercial conversation around accelerator strategy, software tax, and platform assembly cost across NVIDIA AI Enterprise, Neverinstall, and DIY alternatives.",
          supportingCopy:
            "This first version is a guided TCO page rather than a full interactive calculator. It gives buyers a clear comparison frame now and leaves room for a richer model later.",
          primaryCta: { label: "Book an HCI Demo", href: "/get-demo" },
          secondaryCta: {
            label: "Compare vs NVIDIA AI Enterprise",
            href: "/compare/vs-nvidia-ai-enterprise",
          },
        }}
      />
      <section className="border-b py-14">
        <PageContainer>
          <div className="grid gap-4 md:grid-cols-3">
            {calculatorCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border bg-card/90 p-6 shadow-sm"
              >
                <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
                  Scenario
                </p>
                <h2 className="mt-3 text-lg font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm font-medium text-primary">
                  {card.label}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {card.detail}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
      <section className="border-b py-14">
        <PageContainer>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                What the model should capture
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>
                  Managed accelerator count and vendor mix across NVIDIA, AMD,
                  and Intel.
                </li>
                <li>
                  Software tax per accelerator versus platform pricing that
                  includes more of the stack.
                </li>
                <li>
                  DIY platform staffing, integration, and operations overhead.
                </li>
                <li>
                  Inference-serving, observability, and sandboxing requirements
                  that are often priced separately elsewhere.
                </li>
              </ul>
            </article>
            <article className="rounded-2xl border bg-card/90 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">
                How to use this page now
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Use this route as the commercial bridge from HCI compare pages
                into a pricing conversation. It is intentionally directional and
                should lead into a design-partner or sales-led evaluation.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>
                  Start with the NVIDIA comparison if software tax is the
                  trigger.
                </li>
                <li>
                  Use the Nutanix or VMware private AI compares when the buyer
                  is evaluating packaged private AI stacks.
                </li>
                <li>
                  Bring platform and sovereignty requirements into the same
                  conversation early.
                </li>
              </ul>
            </article>
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Book an AI Infrastructure Demo", href: "/get-demo" },
          { label: "See Sovereign HCI", href: "/products/sovereign-hci" },
          {
            label: "Compare vs NVIDIA",
            href: "/compare/vs-nvidia-ai-enterprise",
          },
        ]}
      />
    </>
  )
}
