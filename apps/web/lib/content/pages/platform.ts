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
      "This page exists to prove the platform thesis: the underlying infrastructure stack is the product, and each commercial surface is a route into that same system.",
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
        "This page should explain the stack as a cohesive system rather than a random list of infrastructure terms.",
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
    tableSection({
      title: "How each product uses the platform",
      description:
        "The platform page should clarify product distinctions without breaking the shared-architecture thesis.",
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
        "This route is both a technical credibility hub and an internal-linking bridge across the site.",
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
        "The homepage should route visitors quickly, while the platform page carries the deeper shared-infrastructure narrative for technical buyers, investors, and comparison traffic.",
    },
  ],
  bottomCtas: [demoCta, contactCta],
}
