import type { ResourceCard } from "@/lib/content/types"

export type BlogPost = {
  slug: string
  title: string
  description: string
  summary: string
  publishedAt: string
  readTime: string
  sections: Array<{
    heading: string
    body: string
  }>
}

export const blogPosts: Record<string, BlogPost> = {
  "nvidia-ai-enterprise-cost-breakdown": {
    slug: "nvidia-ai-enterprise-cost-breakdown",
    title: "Why NVIDIA AI Enterprise Costs More Than It Looks",
    description:
      "A practical breakdown of NVIDIA software tax, infrastructure lock-in, and platform alternatives for enterprise AI teams.",
    summary:
      "NVIDIA AI Enterprise can be the right fit for NVIDIA-standardized organizations, but many teams underestimate the software premium and long-term lock-in effects. This guide outlines a fair evaluation model and where a multi-vendor approach changes economics.",
    publishedAt: "Mar 26, 2026",
    readTime: "7 min read",
    sections: [
      {
        heading: "Where costs expand beyond list pricing",
        body: "Most teams compare GPU hardware and overlook annual software uplift, support tiers, and the operational cost of narrowing to one accelerator strategy. Total cost should include software tax, procurement flexibility, and migration risk.",
      },
      {
        heading: "When NVIDIA-first is still a strong choice",
        body: "If your roadmap is intentionally NVIDIA-only and your organization has deep CUDA dependency, standardizing on NVIDIA AI Enterprise can reduce integration risk and speed early programs.",
      },
      {
        heading: "When multi-vendor strategy becomes a lever",
        body: "Enterprises that need sovereignty, budget flexibility, or phased hardware strategy often gain leverage from multi-vendor orchestration. That model helps avoid hard platform resets when pricing, supply, or policy conditions change.",
      },
    ],
  },
  "enterprise-browser-vs-daas": {
    slug: "enterprise-browser-vs-daas",
    title: "Enterprise Browser vs DaaS: Which Entry Point Is Right?",
    description:
      "How to choose between browser-first rollout and full workspace delivery based on risk, speed, and operating model.",
    summary:
      "Secure Browser and DaaS solve adjacent problems. Browser-first is usually the fastest wedge for unmanaged endpoints and contractor access, while DaaS is stronger for full desktop control and legacy VDI replacement.",
    publishedAt: "Mar 26, 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with the immediate constraint",
        body: "Choose Secure Browser first when the urgent issue is controlling web access from unmanaged devices. Choose DaaS first when users need full desktop environments, controlled compute, or migration away from legacy VDI.",
      },
      {
        heading: "Map by rollout friction",
        body: "Browser-first rollouts usually require less user change and can move faster. DaaS rollouts involve broader persona coverage but create a stronger foundation for persistent workspace governance.",
      },
      {
        heading: "Treat both as one platform journey",
        body: "The strongest programs avoid either-or framing. Teams often land browser controls first, then expand to DaaS for high-risk or high-value workloads that need deeper environment control.",
      },
    ],
  },
  "multi-vendor-gpu-orchestration": {
    slug: "multi-vendor-gpu-orchestration",
    title: "Multi-Vendor GPU Orchestration for Enterprise AI Platforms",
    description:
      "Design principles for scheduling, serving, and policy control across NVIDIA, AMD, and Intel environments.",
    summary:
      "Enterprise AI teams are moving from single-vendor assumptions toward mixed accelerator fleets. A multi-vendor control plane helps preserve negotiating leverage and align workloads to the best-fit hardware over time.",
    publishedAt: "Mar 26, 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "Scheduler policy must be workload-aware",
        body: "Not every workload needs top-end accelerators. Intelligent placement should route tasks by latency target, memory profile, and cost threshold rather than static hardware affinity.",
      },
      {
        heading: "Serving and observability cannot be afterthoughts",
        body: "Orchestration alone is not enough. Production deployments need integrated serving, telemetry, and policy controls so platform teams can maintain consistency across clusters and regions.",
      },
      {
        heading: "Sovereignty and procurement are now platform concerns",
        body: "Regulatory boundaries and supply variability make hardware optionality strategic. A software-defined control model gives enterprises more resilience against both policy shifts and supply constraints.",
      },
    ],
  },
}

export const blogCards: ResourceCard[] = Object.values(blogPosts).map(
  (post) => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
  })
)
