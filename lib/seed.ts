import { getPayload } from "payload"
import config from "@payload-config"

const categories = [
  {
    name: "VDI Modernization",
    slug: "vdi-modernization",
    description:
      "Guides, analysis, and best practices for migrating off legacy VDI platforms like Citrix and VMware.",
    seo: {
      title:
        "VDI Modernization Guide: Citrix & VMware Migration | Neverinstall",
      description:
        "Plan your Citrix or VMware migration with real TCO comparisons and DaaS deployment guides.",
    },
    relatedPages: [
      { title: "Desktop Workspaces (DaaS)", href: "/products/daas" },
      { title: "VDI Replacement", href: "/solutions/use-case/vdi-replacement" },
      { title: "Neverinstall vs. Citrix", href: "/compare/vs-citrix" },
    ],
  },
  {
    name: "Enterprise Security",
    slug: "enterprise-security",
    description:
      "Enterprise security perspectives on session isolation, zero-trust access, and endpoint protection.",
    seo: {
      title:
        "Enterprise Security: Session Isolation & Zero Trust | Neverinstall",
      description:
        "Eliminate endpoint risk with session isolation and zero-trust access.",
    },
    relatedPages: [
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
      { title: "Trust & Security", href: "/security" },
      { title: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
    ],
  },
  {
    name: "Secure Browsing",
    slug: "secure-browsing",
    description:
      "Enterprise browser security, browser isolation, DLP controls, and the future of browser-first work.",
    seo: {
      title:
        "Secure Enterprise Browser: Isolation & DLP Controls | Neverinstall",
      description:
        "Compare enterprise browser architectures, DLP enforcement models, and browser isolation approaches.",
    },
    relatedPages: [
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
      { title: "Neverinstall vs. Island", href: "/compare/vs-island" },
      {
        title: "Contractor & Vendor Access",
        href: "/solutions/use-case/contractor-vendor-access",
      },
    ],
  },
  {
    name: "BYOD & Contractor Access",
    slug: "byod-contractor-access",
    description:
      "Securing bring-your-own-device programs and third-party contractor access without endpoint trust.",
    seo: {
      title: "Secure BYOD & Contractor Access Without MDM | Neverinstall",
      description:
        "Secure BYOD and contractor access without MDM or endpoint agents.",
    },
    relatedPages: [
      { title: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
      {
        title: "Contractor & Vendor Access",
        href: "/solutions/use-case/contractor-vendor-access",
      },
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
    ],
  },
  {
    name: "Data Residency & Compliance",
    slug: "data-residency-compliance",
    description:
      "Navigating data residency requirements, compliance frameworks, and sovereign deployment models.",
    seo: {
      title:
        "Data Residency & Compliance for Regulated Industries | Neverinstall",
      description:
        "Navigate data residency mandates with sovereign on-prem and in-region cloud deployment.",
    },
    relatedPages: [
      { title: "Data Residency", href: "/solutions/use-case/data-residency" },
      {
        title: "Financial Services",
        href: "/solutions/industry/financial-services",
      },
      {
        title: "Government & Defense",
        href: "/solutions/industry/government-defense",
      },
    ],
  },
  {
    name: "Remote Work",
    slug: "remote-work",
    description:
      "Remote and hybrid work strategies, workspace delivery, and the end of device-dependent access models.",
    seo: {
      title:
        "Remote Work: Secure Workspace Delivery & Continuity | Neverinstall",
      description:
        "Deliver secure desktops and browsers to any device, anywhere.",
    },
    relatedPages: [
      {
        title: "Remote & Hybrid Work",
        href: "/solutions/use-case/remote-hybrid-work",
      },
      { title: "Desktop Workspaces (DaaS)", href: "/products/daas" },
      {
        title: "Business Continuity",
        href: "/solutions/use-case/business-continuity",
      },
    ],
  },
]

const posts = [
  {
    title: "Why Enterprises Are Replacing Citrix in 2026 — and What Comes Next",
    slug: "why-enterprises-are-leaving-citrix",
    description:
      "Citrix costs are up 3-5x post-acquisition. See what drives replacement and how cloud-native DaaS cuts TCO and deployment time.",
    publishedAt: "2026-03-26",
    status: "published" as const,
    content: [
      {
        blockType: "richText" as const,
        content: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Broadcom's acquisition of VMware and ongoing Citrix restructuring have created the largest forced migration event in enterprise desktops in a decade. This guide breaks down what is actually driving replacement decisions and what a modern alternative looks like.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "The cost problem is now impossible to ignore",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Legacy VDI was already expensive. With 3-5x license cost increases and forced bundling, the economics have shifted from manageable overhead to active budget drain. Enterprises are running real TCO comparisons for the first time in years.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Complexity was tolerable — until it was not",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Dedicated infrastructure teams, months-long rollouts, and consultant-heavy change management were accepted costs when there were no credible alternatives. Cloud-native DaaS platforms now deploy in days, not months, with simpler operations.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "What a modern replacement actually looks like",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The strongest alternatives combine sub-second session restore, Windows and Linux support, persistent and ephemeral modes, and flexible deployment across managed cloud, customer cloud, or on-premises. The key differentiator is whether the platform also covers browser-first users at 70-80% lower cost.",
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  },
  {
    title: "Enterprise Browser vs DaaS: How to Choose the Right Starting Point",
    slug: "enterprise-browser-vs-daas",
    description:
      "Start with Secure Browser for fast BYOD rollout or DaaS for full desktop control. A decision framework based on risk and speed.",
    publishedAt: "2026-03-26",
    status: "published" as const,
    content: [
      {
        blockType: "richText" as const,
        content: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Secure Browser and DaaS solve related but different problems. Browser-first is usually the fastest path for unmanaged endpoints and contractor access, while DaaS is stronger for full desktop control and legacy VDI replacement.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Start with the immediate constraint",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Choose Secure Browser first when the urgent issue is controlling web access from unmanaged devices. Choose DaaS first when users need full desktop environments, controlled compute, or migration away from legacy VDI.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  { type: "text", text: "Map by rollout friction", version: 1 },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Browser-first rollouts usually require less user change and can move faster. DaaS rollouts cover more user types but create a stronger foundation for persistent workspace governance.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Plan for both from the start",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The strongest programs avoid either-or thinking. Teams often deploy browser controls first, then expand to DaaS for high-risk or high-value workloads that need deeper environment control.",
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  },
  {
    title: "BYOD Without MDM: Session-Based Access Replaces Device Management",
    slug: "byod-without-mdm",
    description:
      "Drop MDM for BYOD. Session-based workspaces keep data off personal devices while giving employees full device choice.",
    publishedAt: "2026-03-26",
    status: "published" as const,
    content: [
      {
        blockType: "richText" as const,
        content: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "MDM-based BYOD programs create friction with employees, limit device choice, and still leave data on endpoints. Session-based access through secure browser workspaces removes the device from the trust equation entirely.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "The MDM bargain is breaking down",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Employees resist invasive controls on personal devices. IT teams spend disproportionate time managing diverse hardware. And despite all the effort, data still lands on endpoints that the organization does not fully control.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Session-based access changes the equation",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "When work runs inside an isolated browser session, the device becomes a display. No data on the endpoint means no data to lose. DLP controls like clipboard, download, upload, and print restrictions are enforced at the session level.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "One platform scales with your needs",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Organizations that start with secure browser sessions for BYOD users often find that the same platform extends naturally to contractor access, call center operations, and eventually full desktop delivery for power users.",
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  },
]

async function seed() {
  const payload = await getPayload({ config })

  console.log("Seeding categories...")
  for (const cat of categories) {
    const existing = await payload.find({
      collection: "categories",
      where: { slug: { equals: cat.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`  Category "${cat.name}" already exists, skipping.`)
      continue
    }
    await payload.create({ collection: "categories", data: cat })
    console.log(`  Created category: ${cat.name}`)
  }

  console.log("Seeding posts...")
  for (const post of posts) {
    const existing = await payload.find({
      collection: "posts",
      where: { slug: { equals: post.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`  Post "${post.title}" already exists, skipping.`)
      continue
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await payload.create({ collection: "posts", data: post as any })
    console.log(`  Created post: ${post.title}`)
  }

  console.log("Seed complete.")
  process.exit(0)
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
