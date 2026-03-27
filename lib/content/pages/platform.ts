import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  contactCta,
  demoCta,
  gridSection,
  relatedLink,
  statsSection,
  tableSection,
} from "@/lib/content/shared"

export const platformPage: ContentPage = {
  name: "Platform Technology",
  slug: "platform",
  path: "/platform",
  template: "platform",
  seo: {
    title: "Platform Technology - The Infrastructure Behind Neverinstall",
    description:
      "Explore the shared infrastructure primitives behind Neverinstall Secure Browser, DaaS, and Sovereign HCI.",
  },
  summary:
    "Shared platform story connecting scheduling, checkpointing, observability, sandboxing, virtualization, storage, and networking across all three products.",
  hero: {
    eyebrow: "Platform",
    title:
      "One platform. Three products. Five years of production-hardened infrastructure.",
    subtitle:
      "The Neverinstall platform is the shared control plane behind secure browser delivery, cloud workspaces, and sovereign AI infrastructure.",
    supportingCopy:
      "A single architecture delivers policy, performance, and operational control across browser security, workspaces, and sovereign AI infrastructure.",
    metric: "One infrastructure platform, three GTM surfaces",
    primaryCta: demoCta,
    secondaryCta: contactCta,
  },
  answerCapsule: answerCapsule(
    "What is the Neverinstall platform?",
    "The Neverinstall platform is the shared infrastructure layer behind Secure Browser, DaaS, and Sovereign HCI, combining scheduling, isolation, storage, networking, observability, and policy controls into one system."
  ),
  sections: [
    gridSection({
      title: "Core platform primitives",
      description:
        "A cohesive stack that combines performance, security, and governance in one operating layer.",
      columns: 4,
      blocks: [
        {
          title: "Scheduler intelligence",
          description:
            "Workload placement logic tuned for multi-tenant sessions, workspaces, and accelerator-aware environments.",
        },
        {
          title: "Checkpointing and restore",
          description:
            "Resume environments and workloads faster without forcing full rebuild cycles.",
        },
        {
          title: "Observability",
          description:
            "Use deep telemetry and audit visibility to support operations, chargeback, and security workflows.",
        },
        {
          title: "Isolation and virtualization",
          description:
            "Combine VM and sandbox-style boundaries for stronger runtime control across workloads.",
        },
        {
          title: "Storage and replication",
          description:
            "Keep stateful environments practical across users, regions, and resilience requirements.",
        },
        {
          title: "Networking and policy",
          description:
            "Control traffic and boundaries across sessions, users, and environments.",
        },
        {
          title: "GPU integration",
          description:
            "Support accelerator-aware orchestration for both delivered workspaces and infrastructure workloads.",
        },
        {
          title: "Enterprise operating layer",
          description:
            "Expose RBAC, tenancy, and governance controls that make the platform viable for real organizations.",
        },
      ],
    }),
    gridSection({
      title: "Technical proof points",
      description:
        "Production metrics that show how the platform performs under real enterprise workloads.",
      blocks: [
        {
          title: "Sub-second workspace recovery",
          description:
            "JIT checkpoint restore commonly resumes user workspaces in under one second for validated desktop workflows.",
        },
        {
          title: "Security controls at runtime",
          description:
            "eBPF-driven control paths and pre-encryption inspection support policy enforcement without depending on endpoint trust.",
        },
        {
          title: "Low-overhead delivery",
          description:
            "Interactive sessions are tuned for low latency and modest CPU overhead in browser and workspace delivery paths.",
        },
      ],
    }),
    tableSection({
      title: "How each product uses the platform",
      description:
        "Each product has a distinct buyer motion while sharing core infrastructure primitives.",
      columns: ["Product", "Primary motion", "Platform usage"],
      rows: [
        {
          label: "Secure Browser",
          values: [
            "Protect browser-based access on unmanaged or risky endpoints.",
            "Uses shared policy, isolation, networking, and audit primitives.",
          ],
        },
        {
          label: "DaaS",
          values: [
            "Deliver full workspaces with better speed, control, and rollout economics.",
            "Uses shared virtualization, checkpointing, storage, and control-plane capabilities.",
          ],
        },
        {
          label: "Sovereign HCI",
          values: [
            "Run multi-vendor AI infrastructure with stronger control and sovereignty.",
            "Uses the deepest layer of scheduling, accelerators, serving, storage, networking, and sandboxing.",
          ],
        },
      ],
    }),
    statsSection({
      title: "Why the platform page matters",
      description:
        "Technical buyers can validate architecture depth before moving into product and comparison evaluation.",
      items: [
        {
          label: "Investor narrative",
          value: "Shared platform leverage",
          detail: "One infrastructure investment, multiple product surfaces.",
        },
        {
          label: "Technical buyer value",
          value: "Architecture clarity",
          detail: "Explain the stack without overloading every product page.",
        },
        {
          label: "SEO role",
          value: "Cross-cluster hub",
          detail:
            "Link products, compare pages, trust content, and technical resources together.",
        },
      ],
    }),
  ],
  relatedLinks: [
    relatedLink(
      "Secure Enterprise Browser",
      "See how the platform shows up in browser security.",
      "/products/secure-browser"
    ),
    relatedLink(
      "Desktop as a Service",
      "See how the same primitives become fast cloud workspaces.",
      "/products/daas"
    ),
    relatedLink(
      "Sovereign HCI",
      "See the deepest product expression of the shared platform.",
      "/products/sovereign-hci"
    ),
  ],
  faq: [
    {
      question: "Why is the platform page separate from the homepage?",
      answer:
        "The homepage helps teams find the right entry point quickly, while the platform page provides deeper architecture detail for technical and procurement evaluation.",
    },
  ],
  bottomCtas: [demoCta, contactCta],
}
