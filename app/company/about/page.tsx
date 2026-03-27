import type { Metadata } from "next"

import {
  BlockGrid,
  CtaBand,
  HeroSection,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "About Neverinstall",
  description:
    "Company story, leadership, and platform vision for sovereign enterprise computing.",
  path: "/company/about",
})

export default function AboutPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Company",
          title: "Enterprise computing, re-architected",
          subtitle:
            "Neverinstall helps organizations modernize secure access and AI infrastructure with a cloud-native platform built for control, speed, and sovereignty.",
          supportingCopy:
            "Headquartered in Bengaluru with production-hardened platform infrastructure refined over five years.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Careers", href: "/company/careers" },
        }}
      />
      <BlockGrid
        title="Our story"
        description="From virtual desktop origins to a full secure enterprise platform spanning browser, workspaces, and sovereign AI infrastructure."
        blocks={[
          {
            title: "Built in production first",
            description:
              "Our core scheduler, checkpointing, and policy model were shaped by years of real customer workloads before this platform narrative reached the market.",
          },
          {
            title: "One platform, three products",
            description:
              "Secure Browser, DaaS, and Sovereign HCI are commercial surfaces built on one shared control plane.",
          },
          {
            title: "Sovereignty as design principle",
            description:
              "We design for regional control, regulated operations, and enterprise-grade auditability from day one.",
          },
        ]}
      />
      <BlockGrid
        title="Leadership"
        description="Experienced operators across enterprise software, cloud platforms, and go-to-market execution."
        blocks={[
          {
            title: "Ram Pasala - CEO",
            description:
              "Leads product and company direction focused on secure enterprise platform execution.",
          },
          {
            title: "Lakshman Pasala - CTO",
            description:
              "Drives platform architecture across security, workspace delivery, and sovereign infrastructure controls.",
          },
          {
            title: "Ramesh Gopal Krishna - CRO",
            description:
              "25+ years across Microsoft, Meta, and Salesforce leading enterprise revenue growth.",
          },
        ]}
      />
      <BlockGrid
        title="Backed for the next phase"
        description="Neverinstall is backed by Equirus InnovateX and focused on expanding enterprise adoption."
        blocks={[
          {
            title: "Investor support",
            description:
              "Equirus InnovateX participated in our February 2026 seed round.",
          },
          {
            title: "Enterprise focus",
            description:
              "We prioritize high-control industries and distributed organizations with strict security and governance needs.",
          },
          {
            title: "What we value",
            description:
              "Technical rigor, plainspoken communication, and customer outcomes over feature theater.",
          },
        ]}
      />
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Join Us", href: "/company/careers" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  )
}
