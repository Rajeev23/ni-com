import type { ResourceCard } from "@/lib/content/types"

export type CustomerStory = {
  slug: string
  title: string
  description: string
  industry: string
  outcome: string
  summary: string
  highlights: string[]
}

export const customerStories: Record<string, CustomerStory> = {
  "fintech-secure-byod-rollout": {
    slug: "fintech-secure-byod-rollout",
    title: "Fintech team scaled secure BYOD in six weeks",
    description:
      "A regulated financial services team standardized secure contractor and BYOD access without adding endpoint agents.",
    industry: "Financial Services",
    outcome: "41% faster onboarding for external users",
    summary:
      "The customer needed to onboard contractors quickly while reducing endpoint trust. They deployed a browser-first motion with centralized data movement policies and expanded to controlled workspaces for high-risk roles.",
    highlights: [
      "Reduced contractor onboarding time from 10 days to under 6 days.",
      "Applied one policy model for downloads, clipboard, and session controls.",
      "Passed internal access-control review without expanding endpoint tooling.",
    ],
  },
  "it-services-vdi-modernization": {
    slug: "it-services-vdi-modernization",
    title: "IT services firm modernized legacy VDI operations",
    description:
      "A distributed delivery organization replaced a complex VDI stack with phased cloud-native DaaS rollouts.",
    industry: "IT Services",
    outcome: "33% lower 3-year projected workspace TCO",
    summary:
      "The team moved in cohorts rather than a single migration event. They prioritized helpdesk-heavy personas first, then expanded to developer and partner workflows after proving user experience and policy consistency.",
    highlights: [
      "Cut ticket volume related to desktop provisioning and session failures.",
      "Improved recovery readiness with fast environment restore paths.",
      "Created a clear migration runway away from legacy VDI dependencies.",
    ],
  },
  "global-delivery-resilience-playbook": {
    slug: "global-delivery-resilience-playbook",
    title: "Global delivery team strengthened recovery readiness",
    description:
      "A cross-region operations team improved continuity planning with role-based workspace policies and centralized control.",
    industry: "Global Services",
    outcome: "Recovered critical workflows in under one hour during drills",
    summary:
      "The organization needed continuity options for high-variance operating conditions. They standardized workspace templates, added role-based access policies, and validated failover procedures through quarterly simulations.",
    highlights: [
      "Built role-specific recovery runbooks across three regions.",
      "Improved audit evidence collection for resilience controls.",
      "Reduced dependence on physical office and endpoint recovery workflows.",
    ],
  },
}

export const customerCards: ResourceCard[] = Object.values(customerStories).map(
  (story) => ({
    title: story.title,
    description: story.description,
    href: `/customers/${story.slug}`,
  })
)
