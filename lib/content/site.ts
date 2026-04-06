import type { ContentPage, ResourceCard } from "@/lib/content/types"

import { compliancePages } from "@/lib/content/pages/compliance"
import { footerNavigation, primaryNavigation } from "@/lib/content/navigation"
import { comparePages } from "@/lib/content/pages/compares"
import { customerStories, customerCards } from "@/lib/content/pages/customers"
import { industryPages } from "@/lib/content/pages/industries"
import { platformPage } from "@/lib/content/pages/platform"
import { productPages } from "@/lib/content/pages/products"
import { trustPages } from "@/lib/content/pages/trust"
import { useCasePages } from "@/lib/content/pages/use-cases"

export { primaryNavigation, footerNavigation }
export {
  comparePages,
  compliancePages,
  customerCards,
  industryPages,
  platformPage,
  productPages,
  trustPages,
  useCasePages,
}

export const corePages = {
  homepage: {
    title:
      "Virtual Desktop & Secure Enterprise Browser Platform | Neverinstall",
    subtitle:
      "One platform. Two work modes. Any deployment. Replace legacy VDI with modern desktops and secure browsers.",
    metric:
      "Live in production with enterprise customers across logistics, financial software, engineering, and telecom.",
  },
  pricing: {
    title:
      "DaaS & Secure Browser Pricing: Cloud, On-Prem, Hybrid | Neverinstall",
    subtitle:
      "Compare pricing for Desktop Workspaces and Secure Browser Workspaces across deployment models.",
  },
  resources: {
    title: "Resources: Guides, Comparisons & Customer Stories | Neverinstall",
    subtitle:
      "Explore technical guides, comparison content, trust resources, and customer stories across the Neverinstall platform.",
  },
  trust: {
    title: "Trust Center: Security, Privacy & Compliance | Neverinstall",
    subtitle:
      "Security, privacy, compliance, architecture, and policy materials for teams evaluating or using Neverinstall.",
  },
  platform: {
    title: platformPage.seo.title,
    subtitle: platformPage.hero.subtitle,
  },
}

export const resourceCards: ResourceCard[] = [
  {
    title: "Platform Technology Overview",
    description:
      "Understand the shared infrastructure behind Desktop Workspaces and Secure Browser Workspaces.",
    href: "/platform",
  },
  {
    title: "Neverinstall Trust Center",
    description:
      "Review security, privacy, compliance, and architecture guidance for trust reviews.",
    href: "/security",
  },
  {
    title: "TCO Calculator",
    description:
      "Model 3-year workspace cost and compare your current VDI stack against Neverinstall.",
    href: "/tco-calculator",
  },
]

export const trustCenterCards: ResourceCard[] = [
  {
    title: "Security",
    description:
      "Architectural security posture, session isolation, zero-trust access, and logging.",
    href: "/security/security",
  },
  {
    title: "Privacy & Data Protection",
    description:
      "Data residency, ownership, retention, and privacy-by-design guidance.",
    href: "/security/privacy-data-protection",
  },
  {
    title: "Compliance & Certifications",
    description:
      "Compliance-ready control model with careful attestation language.",
    href: "/security/compliance-certifications",
  },
  {
    title: "Infrastructure & Architecture",
    description:
      "Deployment, control, and architecture design for security and governance review.",
    href: "/security/infrastructure-architecture",
  },
  {
    title: "Policies & Legal Documents",
    description:
      "Document inventory for policies, reports, and supporting trust materials.",
    href: "/security/policies-legal-documents",
  },
  {
    title: "Cookie Policy",
    description:
      "Cookie categories, usage purpose, and preference controls for website visitors.",
    href: "/security/cookie-policy",
  },
  {
    title: "Terms & Conditions",
    description:
      "Service terms, acceptable use conditions, and legal context for procurement review.",
    href: "/security/terms-conditions",
  },
]

export const allContentPages: ContentPage[] = [
  ...Object.values(productPages),
  ...Object.values(useCasePages),
  ...Object.values(industryPages),
  ...Object.values(comparePages),
  ...Object.values(compliancePages),
  platformPage,
  ...Object.values(trustPages),
]

export const allRoutePaths = [
  "/",
  "/platform",
  "/pricing",
  "/tco-calculator",
  "/get-demo",
  "/signup",
  "/products",
  ...Object.values(productPages).map((page) => page.path),
  "/solutions",
  "/solutions/use-case",
  ...Object.values(useCasePages).map((page) => page.path),
  "/solutions/industry",
  ...Object.values(industryPages).map((page) => page.path),
  "/compare",
  ...Object.values(comparePages).map((page) => page.path),
  "/compliance",
  ...Object.values(compliancePages).map((page) => page.path),
  "/blog",
  "/blog/category",
  "/resources",
  "/customers",
  ...Object.values(customerStories).map((story) => `/customers/${story.slug}`),
  "/security",
  ...Object.values(trustPages).map((page) => page.path),
  "/docs",
  "/company/about",
  "/company/careers",
  "/contact",
] as const

export const staticRouteSeo: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: corePages.homepage.title,
    description:
      "Replace Citrix and legacy VDI with cloud-native desktops and secure browsers. Deploy on managed cloud, your cloud, or on-prem.",
  },
  "/platform": {
    title: platformPage.seo.title,
    description: platformPage.seo.description,
  },
  "/pricing": {
    title: corePages.pricing.title,
    description:
      "Compare DaaS and Secure Browser workspace pricing across managed cloud, customer cloud, and on-prem. Start with a free trial.",
  },
  "/tco-calculator": {
    title:
      "DaaS TCO Calculator: Compare vs Citrix, AVD & Omnissa | Neverinstall",
    description:
      "Model your 3-year workspace TCO and compare Citrix, AVD, or Omnissa costs against Neverinstall DaaS. Get results in minutes.",
  },
  "/get-demo": {
    title: "Book a Demo: Virtual Desktop & Secure Browser | Neverinstall",
    description:
      "See Desktop Workspaces and Secure Browser Workspaces in action. Get a personalized demo with deployment and compliance guidance.",
  },
  "/signup": {
    title: "Start Free Trial: Desktop & Browser Workspaces | Neverinstall",
    description:
      "Try Neverinstall Desktop Workspaces and Secure Browser free. Guided onboarding, instant provisioning, no infrastructure required.",
  },
  "/resources": {
    title: "Resources: Guides, Comparisons & Customer Stories | Neverinstall",
    description:
      "Technical guides, VDI migration playbooks, compliance resources, and customer stories. Find what you need to evaluate Neverinstall.",
  },
  "/blog": {
    title: "Blog: VDI Modernization, Enterprise Security & DaaS | Neverinstall",
    description:
      "Insights on VDI replacement, enterprise browser security, BYOD without MDM, and cloud-native workspace delivery. Read the latest.",
  },
  "/customers": {
    title: "Customer Stories: VDI Replacement & Secure BYOD | Neverinstall",
    description:
      "See how enterprises cut onboarding time, reduced VDI costs, and secured BYOD access with Neverinstall. Read real deployment outcomes.",
  },
  ...Object.fromEntries(
    Object.values(customerStories).map((story) => [
      `/customers/${story.slug}`,
      {
        title: `${story.title} | Neverinstall`,
        description: story.description,
      },
    ])
  ),
  "/security": {
    title: corePages.trust.title,
    description:
      "Session isolation, zero-trust access, compliance controls, and audit evidence. Review Neverinstall's full security and trust posture.",
  },
  "/docs": {
    title: "Documentation: Desktop Workspaces & Secure Browser | Neverinstall",
    description:
      "Setup guides, API references, and admin docs for Desktop Workspaces and Secure Browser Workspaces. Get started in minutes.",
  },
  "/company/about": {
    title: "About Neverinstall: Secure Desktop & Browser Workspaces",
    description:
      "Neverinstall delivers DaaS and Secure Browser workspaces for regulated enterprises. Learn about our mission, team, and platform vision.",
  },
  "/company/careers": {
    title: "Careers: Build the Future of Secure Workspaces | Neverinstall",
    description:
      "Join Neverinstall and help enterprises replace legacy VDI with modern, secure workspace delivery. See open roles and apply today.",
  },
  "/contact": {
    title: "Contact Neverinstall: Sales, Support & Partnerships",
    description:
      "Talk to our team about Desktop Workspaces, Secure Browser, pricing, or deployment options. We respond within one business day.",
  },
}
