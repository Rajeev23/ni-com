import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  contactCta,
  demoCta,
  gridSection,
  pricingCta,
  relatedLink,
  statsSection,
  tableSection,
} from "@/lib/content/shared"

export const platformPage: ContentPage = {
  name: "Platform",
  slug: "platform",
  path: "/platform",
  template: "platform",
  seo: {
    title:
      "Neverinstall Platform - Cloud Desktops and Secure Browsers from One Control Plane",
    description:
      "Replace Citrix, VMware, and standalone enterprise browsers with one platform. Desktop Workspaces and Secure Browser Workspaces share a single admin console, unified policy, and three deployment models — managed cloud, customer cloud, or on-prem.",
  },
  summary:
    "One platform that replaces both legacy VDI and standalone enterprise browsers. Desktop Workspaces and Secure Browser Workspaces share a single admin console, unified policy engine, and deploy across managed cloud, customer cloud (OCI/AWS/Azure), or sovereign on-prem.",
  hero: {
    eyebrow: "Platform",
    title: "One Platform. Two Work Modes. Any Deployment.",
    subtitle:
      "Stop paying Citrix prices for desktop users and buying a separate enterprise browser for everyone else. Neverinstall delivers both from one control plane.",
    supportingCopy:
      "Some users need a full Windows or Linux desktop. Others work entirely in the browser. Today that means two vendors, two consoles, two policy systems. Neverinstall collapses it into one platform — same admin console, same policies, three deployment models from managed cloud to sovereign on-prem. Tally, Porter, Indovance, and Alliance Broadband already run on it.",
    metric: "One control plane. Desktop and browser. Cloud to on-prem.",
    primaryCta: demoCta,
    secondaryCta: contactCta,
  },
  answerCapsule: answerCapsule(
    "What is the Neverinstall platform?",
    "Neverinstall is the single platform that replaces both legacy VDI (Citrix, VMware) and standalone enterprise browsers (Island, Talon). It delivers Desktop Workspaces and Secure Browser Workspaces from one control plane with unified policy, session isolation, sub-second restore, and three deployment models — managed cloud, customer cloud (OCI/AWS/Azure), and sovereign on-premises."
  ),
  sections: [
    gridSection({
      title: "Why one platform matters",
      description:
        "Most enterprises end up buying Citrix or VMware for desktops and Island or Talon for browser security. That means two admin consoles, two policy engines, two audit trails, and two vendor relationships. Neverinstall collapses that into a single control plane.",
      blocks: [
        {
          title: "Unified admin console",
          description:
            "Provision desktop and browser workspaces, set DLP rules, manage user groups, and investigate incidents from one interface. No toggling between a Citrix console and an Island dashboard.",
        },
        {
          title: "Consistent policy across work modes",
          description:
            "Copy/paste restrictions, download controls, session recording, and access rules are defined once and enforced identically across desktop and browser workspaces. Configuration does not drift between two separate products.",
        },
        {
          title: "Single audit trail",
          description:
            "Your SOC works from one log. Whether the incident involved a developer's persistent Linux desktop or a contractor's ephemeral browser session, the forensic record is in the same system — not split across vendors.",
        },
      ],
    }),
    tableSection({
      title: "Two work modes — right-size every user",
      description:
        "Power users and developers get full desktops. Contractors and BYOD users get isolated browser sessions at 70-80% lower cost. Both run on the same platform, managed from the same console.",
      columns: [
        "Capability",
        "Desktop Workspaces",
        "Secure Browser Workspaces",
      ],
      rows: [
        {
          label: "What users get",
          values: [
            "Full Windows or Linux desktop environment",
            "Isolated cloud browser session",
          ],
        },
        {
          label: "Best fit",
          values: [
            "Employees who need a full OS, developers, power users",
            "Contractors, BYOD users, browser-first workflows",
          ],
        },
        {
          label: "Session restore",
          values: ["Sub-second restore", "Sub-second restore"],
        },
        {
          label: "DLP controls",
          values: [
            "Copy/paste, download, print, file movement, USB",
            "Copy/paste, download, upload, print, watermark",
          ],
        },
        {
          label: "Session recording",
          values: [
            "Full session recording",
            "Full session recording with forensic replay",
          ],
        },
        {
          label: "Endpoint agent required",
          values: ["No", "No"],
        },
        {
          label: "Persistent environments",
          values: [
            "Yes — persistent and ephemeral modes",
            "Ephemeral by default",
          ],
        },
        {
          label: "Cost vs legacy VDI",
          values: [
            "Predictable per-seat pricing — no 3-5x Broadcom-era renewal surprises",
            "70-80% lower than full desktop VDI for browser-first users",
          ],
        },
      ],
    }),
    gridSection({
      title: "Deploy anywhere — cloud, your cloud, or your data center",
      description:
        "Deployment model is a configuration choice, not a product change. All three options run the same platform with the same capabilities. No feature gaps between managed cloud and on-prem.",
      blocks: [
        {
          title: "Neverinstall-managed cloud",
          description:
            "Fastest path to production. Neverinstall operates the infrastructure; you provision workspaces, set policies, and onboard users. Alliance Broadband went live this way in days, not months.",
          metric: "Days to production",
        },
        {
          title: "Customer cloud (OCI, AWS, Azure)",
          description:
            "Deploy inside your own cloud tenancy for data residency, compliance, or existing cloud spend commitments. Tally Solutions runs on Oracle Cloud Infrastructure — their data never leaves their tenancy.",
          metric: "Your cloud, your data tenancy",
        },
        {
          title: "Sovereign on-premises",
          description:
            "For regulated industries, government customers, or air-gapped environments. The full platform runs in your data center — not a stripped-down version, the same product with the same admin console.",
          metric: "Air-gap capable",
        },
      ],
    }),
    statsSection({
      title: "The numbers IT leaders ask about first",
      description:
        "Validated in production with customers including Tally Solutions, Porter, Indovance, and Alliance Broadband.",
      items: [
        {
          label: "Deployment time",
          value: "Days to weeks",
          detail:
            "From initial setup to production workspaces. Citrix and VMware rollouts typically take months of consultant-heavy project work. Neverinstall deployments go live in days.",
        },
        {
          label: "Session restore speed",
          value: "Sub-second",
          detail:
            "Users resume interrupted sessions instantly — no waiting for environment reconstruction. Validated across both desktop and browser work modes in production.",
        },
        {
          label: "Cost for browser-first users",
          value: "70-80% lower",
          detail:
            "Stop paying full Citrix or VMware per-seat pricing for users who never leave the browser. Secure Browser Workspaces delivers the same security controls at a fraction of the desktop VDI cost.",
        },
      ],
    }),
  ],
  relatedLinks: [
    relatedLink(
      "Desktop Workspaces",
      "Replace Citrix or VMware with cloud desktops that deploy in days. Sub-second session restore, Windows and Linux, persistent and ephemeral modes.",
      "/products/daas"
    ),
    relatedLink(
      "Secure Browser Workspaces",
      "Secure contractors, BYOD, and unmanaged devices at 70-80% lower cost than full desktop VDI. No endpoint agent required.",
      "/products/secure-browser"
    ),
    relatedLink(
      "Pricing",
      "Predictable per-seat pricing for both work modes across all deployment models — no Broadcom-style renewal surprises.",
      "/pricing"
    ),
  ],
  faq: [
    {
      question:
        "Do I need both Desktop Workspaces and Secure Browser Workspaces?",
      answer:
        "Most enterprises do. Developers and power users need full Windows or Linux desktops. Contractors, BYOD employees, and call center staff work entirely in the browser. Without both work modes, you either overpay by giving everyone a desktop seat or leave browser-first users unsecured. The platform lets you right-size each user from one console — desktop users get desktops, browser users get isolated browser sessions at 70-80% lower cost.",
    },
    {
      question: "What does 'sovereign on-premises' mean in practice?",
      answer:
        "It means the full Neverinstall platform — not a limited version — runs inside your own data center. Your data never leaves your infrastructure. This matters for regulated industries, government customers, and organizations in jurisdictions with strict data residency laws. You get the same admin console, the same policy engine, and the same session performance as the cloud deployment.",
    },
    {
      question:
        "How is this different from buying Citrix and an enterprise browser separately?",
      answer:
        "Buying Citrix (or VMware) plus Island (or Talon) means two admin consoles, two policy systems, two support contracts, and twice the integration work. When a contractor needs to go from browser access to a full desktop, that is a new procurement cycle. With Neverinstall, it is a policy change in the same console — takes minutes, not weeks.",
    },
  ],
  bottomCtas: [demoCta, pricingCta, contactCta],
}
