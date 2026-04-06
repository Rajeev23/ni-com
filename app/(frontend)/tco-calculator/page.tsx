import type { Metadata } from "next"

import { TcoReportForm } from "@/components/marketing/forms"
import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { TcoCalculatorPanel } from "@/components/marketing/tco-calculator"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "DaaS TCO Calculator - Compare vs Citrix, AVD, Omnissa | Neverinstall",
  description:
    "Model your current stack and compare 3-year cost against Neverinstall scenarios.",
  path: "/tco-calculator",
})

export default function TcoCalculatorPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "TCO Calculator",
          title: "See what your current stack really costs",
          subtitle:
            "Compare your assembled stack against Neverinstall in transparent 3-year scenarios by region and use case.",
          supportingCopy:
            "This calculator covers Desktop Workspaces and Secure Browser Workspaces.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "See Pricing", href: "/pricing" },
        }}
      />
      <section className="border-b py-14">
        <PageContainer>
          <TcoCalculatorPanel />
        </PageContainer>
      </section>
      <section className="border-b py-14">
        <PageContainer>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border bg-card p-6">
              <h2 className="text-xl font-semibold">Methodology</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Model inputs include per-seat software assumptions for VDI,
                endpoint controls, browser security tools, and network access
                layers. Regional multipliers reflect deployment and operations
                differences.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Scenarios calculated over 36 months.</li>
                <li>
                  Pricing estimates are directional and should be validated with
                  procurement data.
                </li>
                <li>
                  OCI credits toggle reflects committed cloud spend impact.
                </li>
              </ul>
            </article>
            <div>
              <h2 className="mb-3 text-xl font-semibold">
                Get the full report
              </h2>
              <TcoReportForm />
            </div>
          </div>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Talk through your numbers", href: "/get-demo" },
          { label: "View Pricing", href: "/pricing" },
        ]}
      />
    </>
  )
}
