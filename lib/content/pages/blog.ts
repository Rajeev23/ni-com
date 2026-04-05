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
  "why-enterprises-are-leaving-citrix": {
    slug: "why-enterprises-are-leaving-citrix",
    title: "Why Enterprises Are Replacing Citrix in 2026 — and What Comes Next",
    description:
      "Citrix costs are up 3-5x post-acquisition. See what drives replacement and how cloud-native DaaS cuts TCO and deployment time.",
    summary:
      "Broadcom's acquisition of VMware and ongoing Citrix restructuring have created the largest forced migration event in enterprise desktops in a decade. This guide breaks down what is actually driving replacement decisions and what a modern alternative looks like.",
    publishedAt: "Mar 26, 2026",
    readTime: "7 min read",
    sections: [
      {
        heading: "The cost problem is now impossible to ignore",
        body: "Legacy VDI was already expensive. With 3-5x license cost increases and forced bundling, the economics have shifted from manageable overhead to active budget drain. Enterprises are running real TCO comparisons for the first time in years.",
      },
      {
        heading: "Complexity was tolerable — until it was not",
        body: "Dedicated infrastructure teams, months-long rollouts, and consultant-heavy change management were accepted costs when there were no credible alternatives. Cloud-native DaaS platforms now deploy in days, not months, with simpler operations.",
      },
      {
        heading: "What a modern replacement actually looks like",
        body: "The strongest alternatives combine sub-second session restore, Windows and Linux support, persistent and ephemeral modes, and flexible deployment across managed cloud, customer cloud, or on-premises. The key differentiator is whether the platform also covers browser-first users at 70-80% lower cost.",
      },
    ],
  },
  "enterprise-browser-vs-daas": {
    slug: "enterprise-browser-vs-daas",
    title:
      "Enterprise Browser vs DaaS: How to Choose the Right Starting Point",
    description:
      "Start with Secure Browser for fast BYOD rollout or DaaS for full desktop control. A decision framework based on risk and speed.",
    summary:
      "Secure Browser and DaaS solve related but different problems. Browser-first is usually the fastest path for unmanaged endpoints and contractor access, while DaaS is stronger for full desktop control and legacy VDI replacement.",
    publishedAt: "Mar 26, 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with the immediate constraint",
        body: "Choose Secure Browser first when the urgent issue is controlling web access from unmanaged devices. Choose DaaS first when users need full desktop environments, controlled compute, or migration away from legacy VDI.",
      },
      {
        heading: "Map by rollout friction",
        body: "Browser-first rollouts usually require less user change and can move faster. DaaS rollouts cover more user types but create a stronger foundation for persistent workspace governance.",
      },
      {
        heading: "Plan for both from the start",
        body: "The strongest programs avoid either-or thinking. Teams often deploy browser controls first, then expand to DaaS for high-risk or high-value workloads that need deeper environment control.",
      },
    ],
  },
  "byod-without-mdm": {
    slug: "byod-without-mdm",
    title:
      "BYOD Without MDM: Session-Based Access Replaces Device Management",
    description:
      "Drop MDM for BYOD. Session-based workspaces keep data off personal devices while giving employees full device choice.",
    summary:
      "MDM-based BYOD programs create friction with employees, limit device choice, and still leave data on endpoints. Session-based access through secure browser workspaces removes the device from the trust equation entirely.",
    publishedAt: "Mar 26, 2026",
    readTime: "5 min read",
    sections: [
      {
        heading: "The MDM bargain is breaking down",
        body: "Employees resist invasive controls on personal devices. IT teams spend disproportionate time managing diverse hardware. And despite all the effort, data still lands on endpoints that the organization does not fully control.",
      },
      {
        heading: "Session-based access changes the equation",
        body: "When work runs inside an isolated browser session, the device becomes a display. No data on the endpoint means no data to lose. DLP controls like clipboard, download, upload, and print restrictions are enforced at the session level.",
      },
      {
        heading: "One platform scales with your needs",
        body: "Organizations that start with secure browser sessions for BYOD users often find that the same platform extends naturally to contractor access, call center operations, and eventually full desktop delivery for power users.",
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
