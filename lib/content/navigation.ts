export type NavItem = {
  label: string
  href: string
  description?: string
}

export type NavGroup = {
  label: string
  href?: string
  featured?: NavItem[]
  columns?: Array<{
    title: string
    links: NavItem[]
  }>
}

export const primaryNavigation: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    featured: [
      {
        label: "Platform Technology",
        href: "/platform",
        description:
          "The shared infrastructure behind Secure Browser, DaaS, and Sovereign HCI.",
      },
    ],
  },
  {
    label: "Products",
    columns: [
      {
        title: "Products",
        links: [
          {
            label: "Secure Browser",
            href: "/products/secure-browser",
            description:
              "Zero-trust browsing with browser-native DLP and isolation.",
          },
          {
            label: "Desktop as a Service",
            href: "/products/daas",
            description:
              "Sub-second workspace restore with Windows and Linux support.",
          },
          {
            label: "Sovereign HCI",
            href: "/products/sovereign-hci",
            description:
              "Multi-vendor AI infrastructure with sovereign deployment options.",
          },
          {
            label: "Platform Technology",
            href: "/platform",
            description:
              "Understand the stack shared across all three products.",
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "By Use Case",
        links: [
          {
            label: "Remote & Hybrid Work",
            href: "/solutions/use-case/remote-hybrid-work",
          },
          {
            label: "Contractor & Vendor Access",
            href: "/solutions/use-case/contractor-vendor-access",
          },
          { label: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
          {
            label: "Developer Workspaces",
            href: "/solutions/use-case/developer-workspaces",
          },
          {
            label: "GPU / High-Performance",
            href: "/solutions/use-case/gpu-high-performance",
          },
          {
            label: "AI Inference Platform",
            href: "/solutions/use-case/ai-inference-platform",
          },
        ],
      },
      {
        title: "By Industry",
        links: [
          {
            label: "Financial Services",
            href: "/solutions/industry/financial-services",
          },
          { label: "IT Services", href: "/solutions/industry/it-services" },
          {
            label: "Government & Defense",
            href: "/solutions/industry/government-defense",
          },
          { label: "Healthcare", href: "/solutions/industry/healthcare" },
          {
            label: "AEC / Engineering",
            href: "/solutions/industry/aec-engineering",
          },
          {
            label: "AI-Native Companies",
            href: "/solutions/industry/ai-native",
          },
        ],
      },
    ],
  },
  {
    label: "Compare",
    columns: [
      {
        title: "DaaS / VDI",
        links: [
          { label: "vs Citrix", href: "/compare/vs-citrix" },
          {
            label: "vs Azure Virtual Desktop",
            href: "/compare/vs-azure-virtual-desktop",
          },
          { label: "vs VMware / Omnissa", href: "/compare/vs-omnissa" },
          { label: "vs Windows 365", href: "/compare/vs-windows-365" },
        ],
      },
      {
        title: "Secure Browser",
        links: [
          { label: "vs Island Browser", href: "/compare/vs-island" },
          { label: "vs Menlo Security", href: "/compare/vs-menlo" },
          {
            label: "vs Prisma Access Browser",
            href: "/compare/vs-prisma-access-browser",
          },
        ],
      },
      {
        title: "AI Infrastructure",
        links: [
          {
            label: "vs NVIDIA AI Enterprise",
            href: "/compare/vs-nvidia-ai-enterprise",
          },
          {
            label: "vs Nutanix GPT-in-a-Box",
            href: "/compare/vs-nutanix-gpt-in-a-box",
          },
          {
            label: "vs VMware Private AI",
            href: "/compare/vs-vmware-private-ai",
          },
          { label: "vs OpenShift AI", href: "/compare/vs-openshift-ai" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Resources",
        links: [
          { label: "Resources Hub", href: "/resources" },
          { label: "Blog", href: "/blog" },
          { label: "Customer Stories", href: "/customers" },
          { label: "Documentation", href: "/docs" },
          { label: "Trust Center", href: "/security" },
        ],
      },
    ],
  },
]

export const footerNavigation = [
  {
    title: "Platform",
    links: [
      { label: "Platform Technology", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
      { label: "AI Infrastructure TCO", href: "/ai-tco-calculator" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Secure Browser", href: "/products/secure-browser" },
      { label: "Desktop as a Service", href: "/products/daas" },
      { label: "Sovereign HCI", href: "/products/sovereign-hci" },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Remote & Hybrid Work",
        href: "/solutions/use-case/remote-hybrid-work",
      },
      { label: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
      {
        label: "Government & Defense",
        href: "/solutions/industry/government-defense",
      },
      {
        label: "AI Inference Platform",
        href: "/solutions/use-case/ai-inference-platform",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources Hub", href: "/resources" },
      { label: "Blog", href: "/blog" },
      { label: "Trust Center", href: "/security" },
      { label: "Contact", href: "/contact" },
      { label: "About", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
]
