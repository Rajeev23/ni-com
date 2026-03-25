import type { ContentPage, ResourceCard } from "@/lib/content/types"

import { footerNavigation, primaryNavigation } from "@/lib/content/navigation"
import { comparePages } from "@/lib/content/pages/compares"
import { industryPages } from "@/lib/content/pages/industries"
import { platformPage } from "@/lib/content/pages/platform"
import { productPages } from "@/lib/content/pages/products"
import { trustPages } from "@/lib/content/pages/trust"
import { useCasePages } from "@/lib/content/pages/use-cases"

export { primaryNavigation, footerNavigation }
export {
  comparePages,
  industryPages,
  platformPage,
  productPages,
  trustPages,
  useCasePages,
}

export const corePages = {
  homepage: {
    title: "Secure Enterprise AI Workspaces - Neverinstall",
    subtitle:
      "One platform spanning secure browser delivery, cloud workspaces, and sovereign AI infrastructure.",
    metric: "One platform. Three products.",
  },
  pricing: {
    title: "Pricing - Secure Browser, DaaS & Sovereign HCI - Neverinstall",
    subtitle:
      "Compare product-aligned pricing for browser security, workspace delivery, and sovereign AI infrastructure.",
  },
  resources: {
    title: "Resources Hub | Neverinstall",
    subtitle:
      "Explore technical guides, comparison content, trust resources, and customer stories across the Neverinstall platform.",
  },
  trust: {
    title: "Trust Center | Neverinstall",
    subtitle:
      "Security, privacy, compliance, architecture, and policy materials for Neverinstall buyers and customers.",
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
      "Understand the shared infrastructure behind Neverinstall Secure Browser, DaaS, and Sovereign HCI.",
    href: "/platform",
  },
  {
    title: "Neverinstall Trust Center",
    description:
      "Review security, privacy, compliance, and architecture guidance for trust reviews.",
    href: "/security",
  },
  {
    title: "AI Infrastructure TCO Calculator",
    description:
      "Start the pricing conversation around multi-vendor AI infrastructure and vendor lock-in avoidance.",
    href: "/ai-tco-calculator",
  },
]

export const blogCards: ResourceCard[] = [
  {
    title: "Why NVIDIA AI Enterprise Costs More Than It Looks",
    description:
      "Educational content supporting the flagship HCI comparison and TCO story.",
    href: "/blog",
  },
  {
    title: "Enterprise Browser vs DaaS",
    description:
      "Bridge content connecting secure browser and workspace buying journeys.",
    href: "/blog",
  },
  {
    title: "Multi-Vendor GPU Orchestration",
    description:
      "Thought leadership for AI infrastructure buyers evaluating beyond NVIDIA-only stacks.",
    href: "/blog",
  },
]

export const customerCards: ResourceCard[] = [
  {
    title: "Fintech scales secure BYOD in 6 weeks",
    description:
      "A financial services team standardized secure contractor and BYOD access.",
    href: "/customers",
  },
  {
    title: "IT services firm modernizes legacy VDI operations",
    description:
      "How migration phases reduced complexity while improving policy control.",
    href: "/customers",
  },
  {
    title: "Global delivery team improves recovery readiness",
    description:
      "Business continuity workflows with role-based workspace policies.",
    href: "/customers",
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
      "Trust-facing view of deployment, control, and architecture design.",
    href: "/security/infrastructure-architecture",
  },
  {
    title: "Policies & Legal Documents",
    description:
      "Document inventory for policies, reports, and supporting trust materials.",
    href: "/security/policies-legal-documents",
  },
]

export const allContentPages: ContentPage[] = [
  ...Object.values(productPages),
  ...Object.values(useCasePages),
  ...Object.values(industryPages),
  ...Object.values(comparePages),
  platformPage,
  ...Object.values(trustPages),
]

export const allRoutePaths = [
  "/",
  "/platform",
  "/pricing",
  "/tco-calculator",
  "/ai-tco-calculator",
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
  "/resources",
  "/blog",
  "/customers",
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
      "Neverinstall unifies secure browser, DaaS, and sovereign AI infrastructure into one platform.",
  },
  "/platform": {
    title: platformPage.seo.title,
    description: platformPage.seo.description,
  },
  "/pricing": {
    title: corePages.pricing.title,
    description:
      "Compare pricing across Secure Browser, DaaS, and Sovereign HCI offerings.",
  },
  "/tco-calculator": {
    title:
      "DaaS TCO Calculator - Compare vs Citrix, AVD, Omnissa | Neverinstall",
    description:
      "Model 3-year workspace cost and compare current stack against Neverinstall.",
  },
  "/ai-tco-calculator": {
    title:
      "AI Infrastructure TCO Calculator - Compare vs NVIDIA, Nutanix, VMware - Neverinstall",
    description:
      "Model AI infrastructure cost across software tax, accelerator strategy, and platform operating assumptions.",
  },
  "/get-demo": {
    title: "Book a Demo | Neverinstall",
    description:
      "Speak with Neverinstall to evaluate Secure Browser, DaaS, and Sovereign HCI.",
  },
  "/signup": {
    title: "Start Free Trial | Neverinstall",
    description: "Start your Neverinstall trial with guided onboarding.",
  },
  "/resources": {
    title: "Resources | Neverinstall",
    description:
      "Browse Neverinstall guides, stories, and technical resources.",
  },
  "/blog": {
    title: "Blog | Neverinstall",
    description:
      "Engineering, product, and thought leadership from Neverinstall.",
  },
  "/customers": {
    title: "Customer Stories | Neverinstall",
    description:
      "See how enterprise teams modernize secure access with Neverinstall.",
  },
  "/security": {
    title: corePages.trust.title,
    description:
      "Review security, privacy, compliance, infrastructure, and policy materials in the Neverinstall Trust Center.",
  },
  "/docs": {
    title: "Documentation | Neverinstall",
    description:
      "Find documentation for secure browser, DaaS, and sovereign HCI workflows.",
  },
  "/company/about": {
    title: "About Neverinstall",
    description: "Our mission, platform vision, and operating principles.",
  },
  "/company/careers": {
    title: "Careers | Neverinstall",
    description:
      "Join Neverinstall and help build sovereign enterprise computing.",
  },
  "/contact": {
    title: "Contact Neverinstall",
    description: "Reach sales, support, and partnerships teams.",
  },
}
