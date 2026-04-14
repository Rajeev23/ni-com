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
  title:
    "DaaS TCO Calculator: Virtual Desktop Cost vs Citrix & AVD | Neverinstall",
  description:
    "Compare 3-year virtual desktop and DaaS TCO vs Citrix, Azure Virtual Desktop, and Omnissa. Model your stack, regions, and browser vs desktop mix—results in minutes.",
  path: "/tco-calculator",
})

export default function TcoCalculatorPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "TCO Calculator",
          title:
            "Virtual desktop TCO: compare DaaS vs Citrix, AVD, and Omnissa",
          subtitle:
            "Model 3-year desktop-as-a-service and secure browser costs against legacy VDI and browser point tools—by region, headcount, and workload mix.",
          supportingCopy:
            "Directional savings for Desktop Workspaces and Secure Browser Workspaces; validate with your procurement data.",
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
                Inputs cover per-seat virtual desktop and DaaS software,
                endpoint and browser security layers, and network access costs.
                Regional multipliers reflect deployment and operations
                differences for cloud PC and VDI comparisons.
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
        headline="Want to validate these numbers with an expert?"
        description="Book a session to walk through your TCO model with the Neverinstall team and get deployment-specific pricing."
        ctas={[
          { label: "Talk through your numbers", href: "/get-demo" },
          { label: "View Pricing", href: "/pricing" },
        ]}
      />
    </>
  )
}
