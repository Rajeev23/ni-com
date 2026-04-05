export type BlogCategory = {
  slug: string
  name: string
  description: string
  seo: {
    title: string
    description: string
  }
  relatedPages: Array<{ title: string; href: string }>
}

export const blogCategories: Record<string, BlogCategory> = {
  "vdi-modernization": {
    slug: "vdi-modernization",
    name: "VDI Modernization",
    description:
      "Guides, analysis, and best practices for migrating off legacy VDI platforms like Citrix and VMware.",
    seo: {
      title:
        "VDI Modernization Guide: Citrix & VMware Migration | Neverinstall",
      description:
        "Plan your Citrix or VMware migration with real TCO comparisons and DaaS deployment guides. Reduce VDI cost and complexity.",
    },
    relatedPages: [
      { title: "Desktop Workspaces (DaaS)", href: "/products/daas" },
      { title: "VDI Replacement", href: "/solutions/use-case/vdi-replacement" },
      { title: "Neverinstall vs. Citrix", href: "/compare/vs-citrix" },
    ],
  },
  "enterprise-security": {
    slug: "enterprise-security",
    name: "Enterprise Security",
    description:
      "Enterprise security perspectives on session isolation, zero-trust access, and endpoint protection.",
    seo: {
      title:
        "Enterprise Security: Session Isolation & Zero Trust | Neverinstall",
      description:
        "Eliminate endpoint risk with session isolation and zero-trust access. Practical security strategies for distributed enterprise teams.",
    },
    relatedPages: [
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
      { title: "Trust & Security", href: "/security" },
      { title: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
    ],
  },
  "secure-browsing": {
    slug: "secure-browsing",
    name: "Secure Browsing",
    description:
      "Enterprise browser security, browser isolation, DLP controls, and the future of browser-first work.",
    seo: {
      title:
        "Secure Enterprise Browser: Isolation & DLP Controls | Neverinstall",
      description:
        "Compare enterprise browser architectures, DLP enforcement models, and browser isolation approaches. See how Neverinstall differs.",
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
  "byod-contractor-access": {
    slug: "byod-contractor-access",
    name: "BYOD & Contractor Access",
    description:
      "Securing bring-your-own-device programs and third-party contractor access without endpoint trust.",
    seo: {
      title:
        "Secure BYOD & Contractor Access Without MDM | Neverinstall",
      description:
        "Secure BYOD and contractor access without MDM or endpoint agents. Session-based controls keep data off personal devices.",
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
  "data-residency-compliance": {
    slug: "data-residency-compliance",
    name: "Data Residency & Compliance",
    description:
      "Navigating data residency requirements, compliance frameworks, and sovereign deployment models.",
    seo: {
      title:
        "Data Residency & Compliance for Regulated Industries | Neverinstall",
      description:
        "Navigate data residency mandates with sovereign on-prem and in-region cloud deployment. Guides for GDPR, DPDP Act, and RBI.",
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
  "remote-work": {
    slug: "remote-work",
    name: "Remote Work",
    description:
      "Remote and hybrid work strategies, workspace delivery, and the end of device-dependent access models.",
    seo: {
      title:
        "Remote Work: Secure Workspace Delivery & Continuity | Neverinstall",
      description:
        "Deliver secure desktops and browsers to any device, anywhere. Guides on workspace delivery, hybrid access, and business continuity.",
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
}
