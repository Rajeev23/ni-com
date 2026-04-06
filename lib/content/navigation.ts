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
    label: "Products",
    columns: [
      {
        title: "Products",
        links: [
          {
            label: "Desktop Workspaces",
            href: "/products/daas",
            description:
              "Full Windows and Linux desktops with sub-second restore.",
          },
          {
            label: "Secure Browser",
            href: "/products/secure-browser",
            description:
              "Isolated browser sessions with DLP controls and session recording.",
          },
          {
            label: "Platform Technology",
            href: "/platform",
            description: "The shared stack behind both work modes.",
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
            label: "VDI / Citrix Replacement",
            href: "/solutions/use-case/vdi-replacement",
          },
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
            label: "Data Residency",
            href: "/solutions/use-case/data-residency",
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
            label: "BPO & Call Centers",
            href: "/solutions/industry/bpo-call-centers",
          },
          { label: "Healthcare", href: "/solutions/industry/healthcare" },
          {
            label: "Government & Defense",
            href: "/solutions/industry/government-defense",
          },
          {
            label: "Manufacturing",
            href: "/solutions/industry/manufacturing",
          },
          { label: "Education", href: "/solutions/industry/education" },
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
          { label: "vs AWS WorkSpaces", href: "/compare/vs-aws-workspaces" },
        ],
      },
      {
        title: "Secure Browser",
        links: [
          { label: "vs Island", href: "/compare/vs-island" },
          { label: "vs Menlo Security", href: "/compare/vs-menlo" },
          {
            label: "vs Prisma Access Browser",
            href: "/compare/vs-prisma-access-browser",
          },
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
      { label: "TCO Calculator", href: "/tco-calculator" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Desktop Workspaces", href: "/products/daas" },
      { label: "Secure Browser", href: "/products/secure-browser" },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "VDI / Citrix Replacement",
        href: "/solutions/use-case/vdi-replacement",
      },
      {
        label: "Contractor & Vendor Access",
        href: "/solutions/use-case/contractor-vendor-access",
      },
      { label: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
      {
        label: "Government & Defense",
        href: "/solutions/industry/government-defense",
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
