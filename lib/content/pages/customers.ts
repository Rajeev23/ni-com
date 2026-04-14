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
  tally: {
    slug: "tally",
    title: "Tally Solutions delivers cloud desktops on Oracle Cloud",
    description:
      "Tally Solutions uses Neverinstall Desktop Workspaces to deliver their flagship accounting product to enterprise end users through secure cloud desktops on OCI.",
    industry: "Enterprise Software",
    outcome: "Live on Oracle Cloud Infrastructure",
    summary:
      "Tally Solutions needed a way to deliver their desktop accounting application to enterprise customers without endpoint dependencies. They deployed Desktop Workspaces on Oracle Cloud Infrastructure, giving users instant access to Tally through any browser while keeping all data within their OCI tenancy.",
    highlights: [
      "Deployed Tally as a cloud desktop service on Oracle Cloud Infrastructure.",
      "Zero endpoint dependencies — users access Tally through any browser.",
      "Data residency maintained within the customer's OCI tenancy.",
    ],
  },
  porter: {
    slug: "porter",
    title: "Porter chose Neverinstall over Azure Virtual Desktop",
    description:
      "After evaluating Neverinstall against Microsoft AVD and Windows 365, Porter selected Neverinstall for faster deployment and better session performance.",
    industry: "Logistics",
    outcome: "Selected over Azure Virtual Desktop",
    summary:
      "Porter's operations teams needed reliable virtual desktops with fast session restore. They evaluated Neverinstall head-to-head against Azure Virtual Desktop and Windows 365, ultimately choosing Neverinstall for superior deployment speed, lower operational overhead, and better session restore performance.",
    highlights: [
      "Evaluated Neverinstall against Azure Virtual Desktop and Windows 365.",
      "Chose Neverinstall for deployment speed and session restore performance.",
      "Reduced desktop provisioning time for operations teams.",
    ],
  },
  indovance: {
    slug: "indovance",
    title: "Indovance completed a full Citrix rip-and-replace",
    description:
      "Indovance migrated off Citrix Virtual Apps and Desktops entirely, eliminating consultant dependency and cutting licensing costs.",
    industry: "Engineering Services",
    outcome: "Full Citrix migration complete",
    summary:
      "Indovance was running Citrix Virtual Apps and Desktops for their engineering teams but faced compounding costs from licensing, consultants, and months-long upgrade cycles. They migrated completely to Neverinstall Desktop Workspaces, going live in weeks instead of the quarter-long timeline Citrix required.",
    highlights: [
      "Replaced Citrix Virtual Apps and Desktops entirely.",
      "Eliminated consultant dependency and multi-quarter upgrade cycles.",
      "Went live with Desktop Workspaces in weeks, not months.",
    ],
  },
  "alliance-broadband": {
    slug: "alliance-broadband",
    title: "Alliance Broadband: cloud desktops for subscribers",
    description:
      "Alliance Broadband bundles Neverinstall cloud desktops as a value-added service for their broadband subscribers, creating a new revenue line.",
    industry: "Telecom",
    outcome: "New subscriber offering launched",
    summary:
      "Alliance Broadband saw an opportunity to differentiate their broadband service by bundling cloud desktops for subscribers. Using Neverinstall Desktop Workspaces, they launched a cloud desktop offering that turns workspace delivery into a recurring revenue line for their telecom business.",
    highlights: [
      "Launched cloud desktops as a value-added broadband service.",
      "Turned workspace delivery into a new subscriber revenue line.",
      "Leveraged Neverinstall infrastructure without building their own VDI stack.",
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
