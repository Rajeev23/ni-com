import type { ContentPage, SectionBlock } from "@/lib/content/types"

import {
  answerCapsule,
  defaultBottomCtas,
  demoCta,
  gridSection,
  relatedLink,
  tableSection,
  tcoCta,
} from "@/lib/content/shared"

type CompareArgs = {
  slug: string
  title: string
  description: string
  summary: string
  subtitle: string
  differentiator: string
  strengths: SectionBlock[]
  neverinstallWins: SectionBlock[]
  tldr: {
    corePositioning: [string, string]
    operatingModel: [string, string]
    bestFit: [string, string]
    bothModes: [string, string]
  }
  biggerPicture: {
    description: string
    blocks: [SectionBlock, SectionBlock]
  }
  relatedLinks: ContentPage["relatedLinks"]
  faq: NonNullable<ContentPage["faq"]>
}

function comparePage({
  slug,
  title,
  description,
  summary,
  subtitle,
  differentiator,
  strengths,
  neverinstallWins,
  tldr,
  biggerPicture,
  relatedLinks,
  faq,
}: CompareArgs): ContentPage {
  return {
    name: title,
    slug,
    path: `/compare/${slug}`,
    template: "compare",
    seo: {
      title,
      description,
    },
    summary,
    hero: {
      eyebrow: "Compare",
      title,
      subtitle,
      metric: differentiator,
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      `How is Neverinstall different from ${title.replace("Neverinstall vs ", "")}?`,
      `${summary} ${differentiator}`
    ),
    sections: [
      tableSection({
        title: "TL;DR summary",
        description:
          "A side-by-side summary of fit, risk, and long-term operating model.",
        columns: ["Topic", "Neverinstall", "Alternative"],
        rows: [
          {
            label: "Core positioning",
            values: tldr.corePositioning,
          },
          {
            label: "Operating model",
            values: tldr.operatingModel,
          },
          {
            label: "Best fit",
            values: tldr.bestFit,
          },
          {
            label: "Both desktop AND browser",
            values: tldr.bothModes,
          },
        ],
      }),
      gridSection({
        title: "Where Neverinstall wins",
        description:
          "These are the conditions where Neverinstall typically delivers better outcomes.",
        columns: 3,
        blocks: neverinstallWins,
      }),
      gridSection({
        title: "Where the alternative is credible",
        description:
          "Every platform has strengths. Here is where the alternative delivers genuine value.",
        columns: 3,
        blocks: strengths,
      }),
      gridSection({
        title: "The bigger picture: most enterprises need both work modes",
        description: biggerPicture.description,
        columns: 2,
        blocks: biggerPicture.blocks,
      }),
    ],
    relatedLinks,
    faq,
    bottomCtas: defaultBottomCtas("compare"),
  }
}

export const comparePages: Record<string, ContentPage> = {
  // ─── DaaS Comparisons ────────────────────────────────────────────────────────

  "vs-citrix": comparePage({
    slug: "vs-citrix",
    title:
      "Neverinstall vs Citrix: Modern VDI Alternative with Sub-Second Restore",
    description:
      "Replacing Citrix? Compare Neverinstall's cloud-native DaaS against Citrix Virtual Apps and Desktops — deployment in days vs months, sub-second session restore, and 70-80% lower cost for browser-first users. See how Indovance made the switch.",
    summary:
      "Neverinstall is the cloud-native DaaS alternative for teams who want faster rollout, dramatically lower cost for browser-first users, and a single platform that covers both desktop and browser work modes — without Citrix's years of accumulated operational complexity.",
    subtitle:
      "Citrix deployments take months and Broadcom-era licensing has increased costs 3-5x. Neverinstall deploys in days, restores sessions in under a second, and delivers browser workspaces at 70-80% lower cost per seat.",
    differentiator:
      "Sub-second session restore and days-to-deploy — Citrix offers neither",
    tldr: {
      corePositioning: [
        "One cloud-native platform for both desktop and browser workspaces — deployed on managed cloud, your cloud, or fully on-prem. No multi-year infrastructure buildout required.",
        "The incumbent VDI leader with 30+ years of enterprise history. Deep product breadth, but carrying Broadcom-era licensing disruption and significant operational complexity.",
      ],
      operatingModel: [
        "Deploy in days to weeks with a lean IT team. Sub-second session restore eliminates the reconnect lag Citrix users know too well. Browser workspaces included at 70-80% lower cost per seat.",
        "Requires months of planning and dedicated Citrix administration expertise. Rich feature set, but operational overhead is high and growing under the new licensing model.",
      ],
      bestFit: [
        "Teams replacing Citrix after Broadcom-era price increases, or modernizing VDI for faster deployment, lower cost browser workspaces, and sovereign on-prem options.",
        "Large enterprises with deep Citrix institutional knowledge, extensive StoreFront/NetScaler investment, and no immediate urgency to change licensing terms.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one platform and control plane, at dramatically different price points per seat.",
        "Citrix offers a separate enterprise browser product (Citrix Enterprise Browser), but it is not unified with the VDI control plane and requires separate procurement.",
      ],
    },
    strengths: [
      {
        title:
          "Deep enterprise history and installed base across thousands of large organizations",
        description:
          "Citrix has been in the VDI market for over 30 years. For organizations with decades of Citrix investment, the switching cost is real — not just licensing, but staff training, integrations, and operational muscle memory.",
        icon: "Building2",
      },
      {
        title:
          "Extensive ecosystem of integrations, ISV certifications, and channel partners",
        description:
          "The Citrix partner and ISV ecosystem is larger than any other VDI vendor's. If your organization depends on third-party tools that are certified specifically for Citrix, that ecosystem depth has genuine value.",
        icon: "Layers",
      },
      {
        title:
          "Familiar operational model for IT teams with years of Citrix administration experience",
        description:
          "Many IT teams have built their careers around Citrix administration. That institutional knowledge is a real asset — retraining staff on a new platform has a cost, even when the new platform is simpler.",
        icon: "Users",
      },
    ],
    neverinstallWins: [
      {
        title:
          "Deployment in days to weeks, not the months Citrix typically requires",
        description:
          "Citrix deployments commonly run 3-6 months with dedicated project teams. Neverinstall's cloud-native architecture eliminates the StoreFront, NetScaler, and hypervisor layer buildout — customers like Indovance went live in days.",
        icon: "Zap",
      },
      {
        title:
          "Sub-second session restore vs Citrix's multi-second reconnect lag",
        description:
          "Citrix session reconnection typically takes 5-15 seconds depending on infrastructure load and session persistence configuration. Neverinstall restores sessions in under a second — no other DaaS vendor matches this.",
        icon: "Clock",
      },
      {
        title:
          "70-80% lower cost for browser-first users who do not need a full VDI seat",
        description:
          "Citrix prices every user as a full VDI seat regardless of workload. Neverinstall's Secure Browser Workspaces serve contractors, vendors, and light-access users at a fraction of the per-seat cost — without a separate product.",
        icon: "DollarSign",
      },
      {
        title:
          "Both desktop AND browser workspaces from one platform — no second product needed",
        description:
          "Citrix requires a separate enterprise browser product for browser-only users. Neverinstall delivers both work modes from a single control plane with unified policy, identity, and DLP — one vendor, one contract, one admin experience.",
        icon: "Layers",
      },
      {
        title:
          "Sovereign on-prem deployment without Broadcom-era licensing constraints",
        description:
          "Citrix on-prem licensing has become significantly more expensive and restrictive post-Broadcom. Neverinstall offers sovereign on-prem deployment with straightforward licensing — no forced cloud migration or bundled upsells.",
        icon: "Building2",
      },
    ],
    biggerPicture: {
      description:
        "Citrix customers often discover that 40-60% of their user base only needs browser access — but every user is paying for a full VDI seat. Splitting the workload across desktop and browser workspaces on one platform eliminates that waste.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for power users and employees who need native applications, GPU workloads, or multi-monitor setups. Sub-second restore means no more Citrix reconnect lag.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access for contractors, vendors, and BYOD users who are currently over-provisioned on Citrix full-desktop seats. 70-80% lower cost per seat with full DLP controls.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Explore the full Desktop Workspaces product capabilities.",
        "/products/daas"
      ),
      relatedLink(
        "TCO Calculator",
        "Model your 3-year workspace cost vs Citrix in detail.",
        "/tco-calculator"
      ),
      relatedLink(
        "BPO & Call Centers",
        "See how contact centers replace Citrix at scale with Neverinstall.",
        "/solutions/industry/bpo-call-centers"
      ),
    ],
    faq: [
      {
        question: "Why are so many enterprises replacing Citrix right now?",
        answer:
          "Broadcom's acquisition disrupted the broader virtualization ecosystem, triggering 3-5x licensing cost increases for many Citrix customers. Combined with Citrix's historical deployment complexity — 3-6 months is typical — enterprises are actively seeking modern alternatives that deploy faster, cost less, and do not carry legacy architectural debt.",
      },
      {
        question:
          "Does Neverinstall require replacing all Citrix infrastructure at once?",
        answer:
          "No. Neverinstall can be deployed alongside existing Citrix infrastructure for a phased migration. Many customers start with a specific team, department, or use case — like moving browser-first contractors off expensive Citrix seats — and expand from there.",
      },
      {
        question:
          "How does Neverinstall handle users who need both full desktops and browser access?",
        answer:
          "Both modes run on the same Neverinstall platform. Employees get Desktop Workspaces while contractors and lighter-access users get Secure Browser Workspaces — under a single policy model and control plane, at significantly different price points. With Citrix, you would need a separate enterprise browser product.",
      },
      {
        question: "Which customers have replaced Citrix with Neverinstall?",
        answer:
          "Indovance, a mid-market engineering services firm, replaced their Citrix environment and went live with Neverinstall in days — not the months their Citrix deployment originally took. They reported faster session performance, simpler administration, and lower per-seat costs.",
      },
    ],
  }),

  "vs-azure-virtual-desktop": comparePage({
    slug: "vs-azure-virtual-desktop",
    title:
      "Neverinstall vs Azure Virtual Desktop: Multi-Cloud DaaS Without Azure Lock-In",
    description:
      "Compare Neverinstall and Azure Virtual Desktop (AVD) on cloud lock-in, browser workspace support, sovereign on-prem deployment, and multi-cloud flexibility. AVD ties you to Azure — Neverinstall does not.",
    summary:
      "Neverinstall is the DaaS alternative for organizations that need desktop and browser workspace delivery without Azure dependency, with sovereign deployment options and a multi-cloud architecture that AVD cannot offer.",
    subtitle:
      "Azure Virtual Desktop ties your entire workspace strategy to a single cloud provider. Neverinstall deploys on Azure, AWS, OCI, or fully on-prem — and includes browser workspaces AVD does not offer.",
    differentiator: "Deploy on any cloud or on-prem — AVD runs only on Azure",
    tldr: {
      corePositioning: [
        "Multi-cloud DaaS platform with both desktop and browser workspaces. Deploy on managed cloud, customer cloud (Azure, AWS, or OCI), or sovereign on-prem — all from one control plane.",
        "Microsoft's native virtual desktop service, deeply integrated with Azure. Strong Azure ecosystem fit, but inherently tied to Azure infrastructure with no multi-cloud or on-prem option.",
      ],
      operatingModel: [
        "Cloud-agnostic deployment with sub-second session restore. No Azure consumption metering surprises. Browser workspaces included for lighter-access users at 70-80% lower per-seat cost.",
        "Consumption-based Azure pricing that can be unpredictable at scale. Desktop-only delivery — browser workspaces require a separate vendor. On-prem is not an option.",
      ],
      bestFit: [
        "Teams with multi-cloud strategies, data residency requirements outside Azure regions, or a need for browser workspaces alongside desktops — without Azure lock-in.",
        "Organizations fully committed to the Microsoft/Azure ecosystem with no multi-cloud requirements and no need for browser workspaces or sovereign on-prem deployment.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one platform. Most enterprises discover 40-60% of users only need browser access.",
        "No. AVD delivers desktops only. Browser workspace users require a separate vendor, separate procurement, and separate policy management.",
      ],
    },
    strengths: [
      {
        title:
          "Deep Azure ecosystem integration with native Entra ID, Intune, and Microsoft 365 tie-ins",
        description:
          "AVD's integration with the broader Microsoft stack is seamless — if your organization has standardized on Azure, Entra ID, and Intune, AVD slots in with minimal identity and management friction.",
        icon: "Layers",
      },
      {
        title:
          "Natural fit for organizations already fully committed to Azure infrastructure spend",
        description:
          "If your enterprise has an existing Azure EA or MACC commitment, AVD can draw from that spend pool. For teams with no multi-cloud strategy, keeping desktops inside Azure simplifies procurement.",
        icon: "Cloud",
      },
      {
        title:
          "Familiar Microsoft procurement and support model with established licensing paths",
        description:
          "Microsoft's enterprise sales and licensing model is well-understood by IT procurement teams. AVD can be bundled with existing Microsoft agreements, which reduces procurement friction for Microsoft-centric shops.",
        icon: "FileText",
      },
    ],
    neverinstallWins: [
      {
        title: "No Azure lock-in — deploy on OCI, AWS, Azure, or fully on-prem",
        description:
          "AVD requires Azure infrastructure for every session. Neverinstall supports multiple cloud providers and sovereign on-prem deployment, so your workspace strategy is not captive to a single provider's pricing decisions or regional availability.",
        icon: "Server",
      },
      {
        title: "Browser workspace mode included — AVD delivers desktops only",
        description:
          "AVD has no browser workspace offering. Contractors, vendors, and BYOD users who only need browser access must be provisioned as full desktop seats or handled by a separate vendor. Neverinstall serves them at 70-80% lower cost per seat.",
        icon: "Globe",
      },
      {
        title:
          "Sovereign on-prem deployment for regulated and air-gapped environments",
        description:
          "AVD is a cloud-only service with no on-prem option. For government, defense, financial services, and healthcare organizations that require data to remain on-premises, AVD is simply not viable. Neverinstall deploys fully on-prem.",
        icon: "Building2",
      },
      {
        title:
          "Predictable pricing without Azure consumption metering surprises",
        description:
          "AVD's consumption-based pricing model can produce unexpected costs at scale, especially when session hosts auto-scale during peak periods. Neverinstall offers predictable per-seat pricing without infrastructure consumption variables.",
        icon: "DollarSign",
      },
    ],
    biggerPicture: {
      description:
        "AVD customers often realize they are paying full desktop seat prices for users who only need a browser. Moving those users to Secure Browser Workspaces on the same platform cuts costs dramatically — without adding a second vendor.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for employees and power users — deployable on Azure, AWS, OCI, or on-prem. Sub-second restore and no Azure consumption lock-in.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access for contractors, vendors, and BYOD users who do not need a full AVD desktop. 70-80% lower cost per seat, with full DLP controls and no Azure dependency.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Explore the full Desktop Workspaces product capabilities.",
        "/products/daas"
      ),
      relatedLink(
        "Financial Services",
        "Explore a residency-sensitive industry where multi-cloud flexibility is a key requirement.",
        "/solutions/industry/financial-services"
      ),
      relatedLink(
        "TCO Calculator",
        "Model the cost comparison between AVD and Neverinstall.",
        "/tco-calculator"
      ),
    ],
    faq: [
      {
        question: "Why does Azure lock-in matter for workspace strategy?",
        answer:
          "Azure lock-in means your workspace pricing, regional availability, and feature roadmap are all controlled by a single provider. If Azure raises prices, limits regions, or deprecates features, you have no alternative. Multi-cloud deployment ensures negotiating leverage and operational flexibility.",
      },
      {
        question: "Does Neverinstall integrate with Azure Active Directory?",
        answer:
          "Yes. Neverinstall supports Azure AD and Entra ID for identity and authentication. Customers can deploy Neverinstall workspaces without replacing their existing Microsoft identity infrastructure — the comparison is about workspace delivery, not identity.",
      },
      {
        question:
          "Can AVD customers migrate to Neverinstall without leaving Azure?",
        answer:
          "Yes. Neverinstall's customer-cloud deployment model runs inside your existing Azure tenancy. You can migrate AVD workloads to Neverinstall while keeping data in Azure — and later expand to other clouds or on-prem if needed.",
      },
    ],
  }),

  "vs-omnissa": comparePage({
    slug: "vs-omnissa",
    title:
      "Neverinstall vs VMware Horizon (Omnissa): Escape Broadcom-Era Pricing",
    description:
      "Compare Neverinstall and VMware Horizon (now Omnissa) on Broadcom-era 3-5x pricing increases, migration complexity, deployment speed, and browser workspace support. A modern alternative for Horizon customers.",
    summary:
      "Neverinstall is the modern alternative for organizations looking to escape Broadcom-era pricing increases, VMware operational complexity, and a VDI stack that does not include browser workspaces natively.",
    subtitle:
      "Broadcom's acquisition drove 3-5x license increases across the VMware Horizon installed base. Neverinstall replaces Horizon complexity with cloud-native architecture, sub-second restore, and browser workspaces — at a predictable price.",
    differentiator:
      "Predictable pricing and cloud-native simplicity vs Broadcom's 3-5x license shock",
    tldr: {
      corePositioning: [
        "Cloud-native DaaS with both desktop and browser workspaces. Three deployment models — managed cloud, customer cloud, or sovereign on-prem — with no forced bundling or acquisition-era pricing surprises.",
        "The enterprise VDI incumbent now operating as Omnissa after Broadcom's acquisition. Deep feature set, but carrying 3-5x pricing increases and an uncertain product roadmap under new ownership.",
      ],
      operatingModel: [
        "Deploy in days to weeks with a lean team. Sub-second session restore. Browser workspaces included at 70-80% lower cost for lighter-access users. No vSphere or vCenter dependency.",
        "Requires significant VMware infrastructure (vSphere, vCenter, Connection Server) and specialized administration. Broadcom has consolidated licensing into expensive bundles that force customers to pay for unused components.",
      ],
      bestFit: [
        "VMware Horizon customers facing Broadcom renewal shock, teams migrating off VMware infrastructure, or organizations that need browser workspaces alongside desktops without a separate product.",
        "Organizations with massive VMware estates where the cost of migration exceeds the Broadcom price increase — at least in the short term — and where IT staff are deeply specialized in Horizon administration.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one platform and control plane. No need for a second vendor for browser-only users.",
        "No. Horizon/Omnissa delivers desktops only. Browser workspaces require a separate product, adding vendor complexity and cost.",
      ],
    },
    strengths: [
      {
        title:
          "Massive installed base familiarity across enterprise VMware estates",
        description:
          "VMware Horizon is deployed across thousands of enterprises. For organizations with large VMware estates, the staff expertise and operational playbooks are deeply embedded — that is a real migration barrier, even when pricing becomes painful.",
        icon: "Building2",
      },
      {
        title:
          "Deep VMware ecosystem integrations — vSphere, NSX, vSAN, Workspace ONE",
        description:
          "Horizon's integration with the broader VMware stack (vSphere, NSX, vSAN, Workspace ONE) is tight and mature. If your organization has invested heavily in these components, Horizon fits natively in ways a cloud-native platform must integrate into.",
        icon: "Layers",
      },
      {
        title:
          "Fit for organizations where migration cost still exceeds Broadcom's price increase",
        description:
          "For some very large enterprises, the total cost of migrating off Horizon — including retraining, re-integration, and operational disruption — may still exceed the Broadcom price increase in the short term. The math changes over a 3-year horizon, but the short-term calculus is real.",
        icon: "DollarSign",
      },
    ],
    neverinstallWins: [
      {
        title:
          "No Broadcom-era 3-5x license increases — predictable pricing without acquisition baggage",
        description:
          "Broadcom's licensing changes have increased costs 3-5x for many Horizon customers, often by bundling components they do not need. Neverinstall's pricing is transparent and predictable, with no forced bundles or acquisition-driven price shocks.",
        icon: "DollarSign",
      },
      {
        title:
          "Simpler cloud-native architecture replaces Horizon's server-side complexity",
        description:
          "Horizon requires vSphere, vCenter, Connection Server, UAG, and often App Volumes and DEM. Neverinstall eliminates this multi-component server-side stack with a cloud-native architecture that deploys in days — not the months a Horizon environment takes.",
        icon: "Cloud",
      },
      {
        title: "Browser workspaces included — Horizon has no equivalent",
        description:
          "Horizon delivers desktops only. Contractors, vendors, and browser-first users either get over-provisioned with a full desktop seat or require a separate product. Neverinstall's Secure Browser Workspaces serve them at 70-80% lower cost on the same platform.",
        icon: "Globe",
      },
      {
        title: "Days-to-weeks deployment vs months for Horizon migrations",
        description:
          "VMware Horizon deployments are notoriously complex and time-consuming, often requiring 3-6 months of planning and infrastructure buildout. Neverinstall's cloud-native model eliminates the hypervisor and connection broker layers, cutting deployment time to days.",
        icon: "Zap",
      },
      {
        title:
          "Sovereign on-prem deployment without VMware infrastructure dependency",
        description:
          "Neverinstall deploys on-prem without requiring vSphere, vCenter, or any VMware component. For organizations exiting the VMware ecosystem entirely, this means sovereign deployment without residual VMware licensing obligations.",
        icon: "Building2",
      },
    ],
    biggerPicture: {
      description:
        "Many Horizon customers discover the Broadcom price increase is the trigger, but the real opportunity is rationalizing desktop vs browser workload types. Splitting users across both work modes on one platform reduces per-seat costs far beyond the licensing savings alone.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for power users — replacing Horizon's server-side complexity with cloud-native delivery. Sub-second restore, no vSphere dependency, no Connection Server overhead.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access for the 40-60% of Horizon users who are over-provisioned on full desktop seats. 70-80% lower per-seat cost, same platform, same policy model — no second vendor.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "See the full Desktop Workspaces capabilities.",
        "/products/daas"
      ),
      relatedLink(
        "TCO Calculator",
        "Model the 3-year cost of migrating from VMware Horizon.",
        "/tco-calculator"
      ),
      relatedLink(
        "Business Continuity",
        "How cloud workspaces keep teams operational during outages and infrastructure failures.",
        "/solutions/use-case/business-continuity"
      ),
    ],
    faq: [
      {
        question:
          "Why is Omnissa still strategically important to compare against?",
        answer:
          "VMware Horizon is one of the largest VDI installed bases in the enterprise. Broadcom's acquisition disrupted pricing and licensing across that base, and the creation of Omnissa as a separate entity has added uncertainty about the product roadmap. These factors are driving active migration decisions at scale.",
      },
      {
        question:
          "Can Neverinstall replace VMware Horizon in an existing data center?",
        answer:
          "Yes. Neverinstall's sovereign on-prem deployment option supports existing data center infrastructure without requiring any VMware components. Customers can migrate Horizon workloads to Neverinstall without moving to public cloud — and without residual VMware licensing costs.",
      },
      {
        question:
          "How does the Broadcom pricing situation affect this comparison?",
        answer:
          "Broadcom has consolidated VMware licensing into large bundles and increased prices 3-5x for many customers. This means organizations are paying significantly more for the same Horizon capabilities — and often for bundled components they do not use. Neverinstall offers a clean pricing model without forced bundling.",
      },
    ],
  }),

  "vs-windows-365": comparePage({
    slug: "vs-windows-365",
    title: "Neverinstall vs Windows 365: Beyond Cloud PC's Simplicity Ceiling",
    description:
      "Compare Neverinstall and Windows 365 (Cloud PC) on multi-OS support, sovereign deployment, browser workspaces, Linux support, and policy control depth. Where Cloud PC's simplicity becomes a limitation.",
    summary:
      "Neverinstall offers broader control, multi-OS support including Linux, sovereign deployment flexibility, and a browser workspace mode that Cloud PC does not include — all on one platform.",
    subtitle:
      "Windows 365 is simple to explain but limited in practice — no Linux, no sovereign deployment, no browser workspaces, and no multi-cloud. Neverinstall delivers what Cloud PC cannot.",
    differentiator:
      "Multi-OS desktops, browser workspaces, and sovereign deployment — Cloud PC offers none of these",
    tldr: {
      corePositioning: [
        "Full-featured DaaS with both desktop and browser workspaces. Multi-OS support including Linux. Three deployment models — managed cloud, customer cloud, or sovereign on-prem.",
        "Microsoft's simplified Cloud PC offering. Extremely easy to procure for Microsoft-standardized teams, but Windows-only, Azure-only, desktop-only, and cloud-only.",
      ],
      operatingModel: [
        "Deploy across OS types with sub-second session restore. Browser workspaces included at 70-80% lower cost for lighter-access users. Sovereign on-prem for regulated environments.",
        "Fixed per-user pricing with simple provisioning. However: Windows only, no Linux support, no browser workspace mode, Azure-bound with no on-prem option, and limited policy customization.",
      ],
      bestFit: [
        "Teams needing Linux desktops, browser workspaces for contractors, sovereign on-prem deployment, or deeper policy controls than Cloud PC provides — without vendor lock-in.",
        "Small to mid-size teams that are 100% Windows, 100% Azure, have no sovereign deployment needs, no browser workspace requirements, and value procurement simplicity above all else.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces (Windows and Linux) and Secure Browser Workspaces from one platform. Contractors and light-access users cost 70-80% less per seat.",
        "No. Windows 365 delivers Windows desktops only. No browser workspace mode, no Linux — users who only need browser access get a full (and expensive) Cloud PC seat.",
      ],
    },
    strengths: [
      {
        title:
          "Exceptional messaging simplicity — Cloud PC is easy to explain, procure, and set up",
        description:
          "Windows 365 is one of the simplest DaaS products to buy and deploy. For teams that value speed-to-first-session above everything else and have no complex requirements, that simplicity is a genuine advantage.",
        icon: "Sparkles",
      },
      {
        title:
          "Strong fit when the entire organization is standardized on Microsoft 365 and Azure",
        description:
          "If every user is on Windows, every app is a Microsoft 365 app, and every infrastructure decision goes through Azure, Windows 365 is the path of least resistance. The integration with Intune and Entra ID is seamless within that stack.",
        icon: "Layers",
      },
      {
        title:
          "Predictable per-user pricing with familiar Microsoft procurement paths",
        description:
          "Cloud PC's fixed monthly per-user price is easy to budget for, and it can be bundled into existing Microsoft enterprise agreements. For teams optimizing for procurement simplicity over capability, this matters.",
        icon: "DollarSign",
      },
    ],
    neverinstallWins: [
      {
        title:
          "Browser workspace mode included — Windows 365 delivers desktops only",
        description:
          "Cloud PC provisions every user as a full Windows desktop, even if they only need browser access. Neverinstall's Secure Browser Workspaces serve contractors and light-access users at 70-80% lower cost — eliminating the waste of over-provisioning every user as a Cloud PC seat.",
        icon: "Globe",
      },
      {
        title: "Multi-OS support including Linux — Cloud PC is Windows-only",
        description:
          "Windows 365 cannot deliver Linux desktops. Development teams, data engineering groups, and organizations with mixed-OS requirements need a platform that supports more than Windows. Neverinstall delivers both Windows and Linux desktops.",
        icon: "Monitor",
      },
      {
        title:
          "Sovereign on-prem deployment — Cloud PC is Azure-bound with no on-prem option",
        description:
          "Windows 365 runs only on Azure with no path to on-prem deployment. For government, defense, financial services, and healthcare organizations with data sovereignty or air-gap requirements, Cloud PC is not viable. Neverinstall deploys fully on-prem.",
        icon: "Building2",
      },
      {
        title:
          "Deeper policy controls and session management for regulated environments",
        description:
          "Cloud PC's policy model is limited to what Intune provides, which is designed for device management rather than workspace-level session control. Neverinstall offers granular DLP, session recording, clipboard controls, and file transfer policies that regulated industries require.",
        icon: "Settings",
      },
    ],
    biggerPicture: {
      description:
        "Cloud PC's simplicity ceiling becomes visible when teams need Linux, browser workspaces, sovereign deployment, or deeper policy controls. Neverinstall handles all of these from one platform — instead of adding point solutions around Cloud PC's gaps.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for employees and power users — Windows and Linux. Sub-second restore, multi-cloud deployment, and policy depth that goes far beyond what Cloud PC and Intune can offer.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access for the contractors, vendors, and BYOD users that Cloud PC serves with expensive full-desktop seats. 70-80% lower cost per seat with the same DLP controls and policy model.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "See the full Desktop Workspaces capabilities.",
        "/products/daas"
      ),
      relatedLink(
        "Government & Defense",
        "Sovereign workspace delivery for agencies and defense contractors with strict data residency mandates.",
        "/solutions/industry/government-defense"
      ),
      relatedLink(
        "TCO Calculator",
        "Review the cost model compared to Windows 365 per-user pricing.",
        "/tco-calculator"
      ),
    ],
    faq: [
      {
        question: "When is Windows 365 the better choice?",
        answer:
          "Windows 365 wins on simplicity for Microsoft-standardized environments with no complex requirements. The differences emerge when you need browser workspaces, Linux support, sovereign deployment, or deeper policy controls — capabilities Cloud PC cannot match regardless of pricing tier.",
      },
      {
        question: "Does Neverinstall work alongside Microsoft 365?",
        answer:
          "Yes. Neverinstall workspaces integrate with Microsoft identity (Entra ID) and can run Microsoft 365 applications. The comparison is about workspace delivery platform choice, not replacement of productivity applications.",
      },
      {
        question: "When does Cloud PC's simplicity become a limitation?",
        answer:
          "The moment you need Linux desktops, browser workspaces for contractors, sovereign on-prem deployment, multi-cloud flexibility, or policy controls beyond what Intune provides. Cloud PC has no upgrade path for these requirements — you need a different platform.",
      },
    ],
  }),

  "vs-aws-workspaces": comparePage({
    slug: "vs-aws-workspaces",
    title:
      "Neverinstall vs Amazon WorkSpaces: Multi-Cloud DaaS Without AWS Lock-In",
    description:
      "Compare Neverinstall and Amazon WorkSpaces on AWS provider lock-in, browser workspace support, sovereign on-prem deployment, and platform breadth. Deploy desktops and browser workspaces without being captive to AWS.",
    summary:
      "Neverinstall offers a multi-cloud platform that includes browser workspaces, sovereign on-prem deployment, and a broader secure-work capability set — without being captive to AWS infrastructure and pricing.",
    subtitle:
      "Amazon WorkSpaces ties your desktop strategy to AWS. Neverinstall deploys on AWS, Azure, OCI, or fully on-prem — and adds browser workspaces, sub-second restore, and sovereign deployment that WorkSpaces cannot offer.",
    differentiator:
      "Desktop and browser workspaces on any cloud or on-prem — WorkSpaces is AWS-only and desktop-only",
    tldr: {
      corePositioning: [
        "Multi-cloud DaaS platform with both desktop and browser workspaces. Deploy on managed cloud, customer cloud (AWS, Azure, OCI), or sovereign on-prem — all from one control plane.",
        "AWS-native desktop delivery service. Simple to provision inside an existing AWS account, but inherently tied to AWS infrastructure with no multi-cloud, on-prem, or browser workspace option.",
      ],
      operatingModel: [
        "Cloud-agnostic deployment with sub-second session restore. Browser workspaces included for lighter-access users at 70-80% lower cost. No AWS consumption billing surprises.",
        "Hourly or monthly billing inside AWS. Desktop-only delivery with no browser workspace mode. Limited policy controls compared to purpose-built DaaS platforms. No on-prem deployment path.",
      ],
      bestFit: [
        "Teams with multi-cloud or hybrid-cloud strategies, organizations needing browser workspaces alongside desktops, or regulated industries requiring sovereign on-prem deployment.",
        "Small teams already fully committed to AWS infrastructure with simple desktop requirements, no browser workspace needs, and no data residency constraints beyond AWS regions.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one platform. Contractors and light-access users cost 70-80% less per seat than a full desktop.",
        "No. WorkSpaces delivers desktops only. AWS offers WorkSpaces Web (recently renamed WorkSpaces Secure Browser), but it is a separate service with a separate console, separate billing, and separate policy model.",
      ],
    },
    strengths: [
      {
        title:
          "Strong ecosystem fit for organizations already committed to AWS infrastructure",
        description:
          "If your enterprise runs on AWS and all infrastructure procurement flows through an AWS account, WorkSpaces is easy to spin up inside that existing relationship. VPC integration, AWS Directory Service, and IAM tie-ins are native.",
        icon: "Cloud",
      },
      {
        title:
          "Simple provider-native procurement through existing AWS contracts and EDPs",
        description:
          "WorkSpaces spend can draw from existing AWS Enterprise Discount Programs (EDPs) and consolidated billing. For AWS-first organizations, this reduces procurement friction compared to onboarding a new vendor.",
        icon: "FileText",
      },
      {
        title: "Broad regional availability across the AWS global footprint",
        description:
          "AWS operates regions worldwide, and WorkSpaces is available in most of them. For organizations that need desktops in specific AWS regions where they already have infrastructure, this regional coverage has value.",
        icon: "Globe",
      },
    ],
    neverinstallWins: [
      {
        title: "No AWS lock-in — deploy on OCI, AWS, Azure, or fully on-prem",
        description:
          "WorkSpaces is captive to AWS infrastructure. If AWS raises prices, limits features, or lacks a region you need, you have no alternative. Neverinstall's multi-cloud architecture means you can deploy on any major cloud provider or on-prem — with the freedom to move between them.",
        icon: "Server",
      },
      {
        title: "Browser workspace mode included — WorkSpaces is desktop-only",
        description:
          "WorkSpaces provisions every user as a full desktop, even contractors who only need browser access. AWS does offer WorkSpaces Secure Browser, but it is a separate service with separate management. Neverinstall delivers both modes from one platform at 70-80% lower cost for browser-only users.",
        icon: "Globe",
      },
      {
        title:
          "Sovereign on-prem deployment for regulated or air-gapped environments",
        description:
          "WorkSpaces has no on-prem deployment option. For government, defense, and financial services organizations that require data to remain in their own data centers, WorkSpaces is not viable. Neverinstall deploys fully on-prem with the same feature set.",
        icon: "Building2",
      },
      {
        title: "Deeper DLP, session recording, and policy controls built in",
        description:
          "WorkSpaces offers basic session management but lacks the depth of DLP, session recording, clipboard controls, and file transfer policies that regulated industries require. Neverinstall provides these natively across both desktop and browser workspaces — no AWS add-on services needed.",
        icon: "Shield",
      },
    ],
    biggerPicture: {
      description:
        "WorkSpaces customers often find themselves paying full desktop prices for contractors and light-access users who only need a browser. Adding WorkSpaces Secure Browser means managing a separate AWS service. Neverinstall delivers both modes from one platform.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for employees and power users — deployable on AWS, Azure, OCI, or on-prem. Sub-second restore, no AWS lock-in, and policy depth beyond what native WorkSpaces offers.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access for contractors, vendors, and BYOD users — without provisioning expensive WorkSpaces desktop bundles. 70-80% lower cost per seat, unified with desktop policy and management.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Explore the full Desktop Workspaces product capabilities.",
        "/products/daas"
      ),
      relatedLink(
        "Financial Services",
        "Workspace delivery for regulated financial institutions with data residency requirements.",
        "/solutions/industry/financial-services"
      ),
      relatedLink(
        "TCO Calculator",
        "Compare the cost model against AWS WorkSpaces pricing.",
        "/tco-calculator"
      ),
    ],
    faq: [
      {
        question: "Is this comparison mainly about cost?",
        answer:
          "Cost matters, but the more important differentiators are provider lock-in risk, the absence of unified browser workspaces, and the lack of sovereign on-prem deployment. AWS WorkSpaces pricing is competitive for simple use cases, but the platform scope is narrow compared to Neverinstall.",
      },
      {
        question: "Can Neverinstall run inside an existing AWS environment?",
        answer:
          "Yes. Neverinstall's customer-cloud deployment model runs inside your existing AWS tenancy. You can migrate WorkSpaces users to Neverinstall while keeping data inside your AWS environment — and later expand to other clouds or on-prem if needed.",
      },
      {
        question:
          "What about AWS WorkSpaces Secure Browser — does that close the gap?",
        answer:
          "Partially. AWS offers WorkSpaces Secure Browser (formerly WorkSpaces Web) as a separate service, but it has its own console, billing, and policy model. It is not a unified platform with WorkSpaces desktops. Neverinstall delivers both modes from one control plane with shared policy and identity.",
      },
    ],
  }),

  // ─── Secure Browser Comparisons ──────────────────────────────────────────────

  "vs-island": comparePage({
    slug: "vs-island",
    title:
      "Neverinstall vs Island: Enterprise Browser Plus Full Desktop Workspaces",
    description:
      "Compare Neverinstall and Island enterprise browser across desktop workspace support, sovereign deployment, and platform breadth. Island cannot give users a desktop when they need one — Neverinstall can.",
    summary:
      "Neverinstall delivers both enterprise browser workspaces and full desktop workspaces from a single platform — with sovereign deployment included. Island is a strong standalone browser, but it cannot give users a desktop when they need one.",
    subtitle:
      "Island leads the enterprise browser category — but when a user needs a full desktop, Island has no answer. Neverinstall delivers both browser and desktop workspaces from one platform, with sovereign deployment Island cannot match.",
    differentiator:
      "Browser security plus full desktop workspaces — Island is browser-only with no desktop path",
    tldr: {
      corePositioning: [
        "One platform for both Secure Browser Workspaces and full Desktop Workspaces. Three deployment models — managed cloud, customer cloud, or sovereign on-prem. Unified policy, DLP, and session recording across both modes.",
        "Enterprise browser category leader with strong standalone browser security. Purpose-built for browser-only access, but no desktop workspace capability and no path to adding one.",
      ],
      operatingModel: [
        "Deploy browser workspaces immediately, add desktop workspaces when users need more — no second vendor, no second policy model. Sovereign on-prem available for regulated environments.",
        "Deploy the enterprise browser for browser-only use cases. When a user needs a desktop, procure and manage a separate VDI/DaaS product from a different vendor with a different control plane.",
      ],
      bestFit: [
        "Organizations where some users need browser access and others need full desktops — or where browser-first users may eventually need desktop capabilities. One platform covers both without vendor sprawl.",
        "Organizations with a purely browser-only access requirement, no desktop needs today or anticipated, and no sovereign deployment constraints.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one platform and control plane. Users can move between modes as their needs change.",
        "No. Island is browser-only. When a user needs a full desktop — native applications, multi-monitor, GPU workloads — Island has no answer. You need a second vendor.",
      ],
    },
    strengths: [
      {
        title:
          "Clear enterprise browser category leadership with strong market narrative",
        description:
          "Island created the enterprise browser category and has built strong market recognition. For organizations evaluating browser-only solutions with no desktop requirement today or in the future, Island's category focus is a genuine advantage.",
        icon: "Globe",
      },
      {
        title:
          "Purpose-built browser security architecture with deep Chromium customization",
        description:
          "Island's browser is a deeply customized Chromium build, purpose-engineered for enterprise security. The depth of browser-level controls — watermarking, paste restrictions, screenshot prevention — reflects a team that has focused exclusively on the browser surface.",
        icon: "Shield",
      },
      {
        title:
          "Strong fit for organizations solving a pure browser-access problem with no desktop requirement",
        description:
          "If your organization needs secure browser access and nothing more — no desktops, no sovereign deployment, no multi-mode users — Island is a credible, category-leading choice. The comparison only sharpens when users need more than a browser.",
        icon: "Lock",
      },
    ],
    neverinstallWins: [
      {
        title:
          "Full desktop workspaces included — Island cannot deliver a desktop when users need one",
        description:
          "This is the architectural gap that defines the comparison. When a contractor needs to run a native application, when a developer needs a multi-monitor desktop, or when an employee needs GPU-accelerated software — Island has no answer. Neverinstall delivers full desktops from the same platform.",
        icon: "Monitor",
      },
      {
        title:
          "One platform for both work modes — no second vendor when needs expand",
        description:
          "Organizations that start with browser-only access often discover that 20-40% of users eventually need a desktop. With Island, that means procuring a separate VDI/DaaS platform. With Neverinstall, you enable desktop workspaces on the same platform — same policy, same identity, same admin.",
        icon: "Layers",
      },
      {
        title:
          "Sovereign on-prem deployment for regulated environments — Island has no equivalent",
        description:
          "Island operates as a cloud-delivered browser with no sovereign on-prem deployment model. For government, defense, healthcare, and financial services organizations that require data to remain on-premises, Island is not viable. Neverinstall deploys fully on-prem.",
        icon: "Building2",
      },
      {
        title:
          "Unified DLP, session recording, and policy controls across both browser and desktop",
        description:
          "Island's DLP and policy controls apply only to the browser. Neverinstall enforces the same policy model across both browser and desktop workspaces — clipboard controls, file transfer restrictions, session recording, and watermarking work identically in both modes.",
        icon: "Settings",
      },
    ],
    biggerPicture: {
      description:
        "The enterprise browser market is growing, but most enterprises discover they need both browser and desktop access. Buying Island for the browser and a VDI vendor for desktops doubles cost, complexity, and policy fragmentation. One platform for both modes is the simpler path.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for the users Island cannot serve — power users, developers, employees who need native applications. Sub-second restore, sovereign deployment, and the same policy model as browser workspaces.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access that competes directly with Island's core offering — with the added advantage of unified management alongside desktop workspaces, sovereign deployment, and 70-80% lower cost than provisioning these users as full desktop seats.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Secure Browser Workspaces",
        "Explore the full Secure Browser Workspaces product capabilities.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Desktop as a Service",
        "Full persistent and non-persistent desktops for users who need more than a browser.",
        "/products/daas"
      ),
      relatedLink(
        "Secure BYOD",
        "Secure employee access from personal devices without MDM or VPN.",
        "/solutions/use-case/secure-byod"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall claim Island is weak at browser security?",
        answer:
          "No. Island is a strong enterprise browser. The comparison is architectural and strategic: Island is a category specialist, while Neverinstall uses the browser as one surface of a broader platform that also delivers full desktop workspaces. When a user needs a desktop, Island has no answer.",
      },
      {
        question:
          "What happens when a contractor or employee needs more than browser access?",
        answer:
          "With Island, you need a second platform — a separate VDI/DaaS vendor with its own procurement, policy model, identity integration, and admin experience. With Neverinstall, the same user can move between Secure Browser Workspaces and Desktop Workspaces under a single policy model and control plane.",
      },
      {
        question:
          "Does Neverinstall support sovereign deployment for browser workspaces?",
        answer:
          "Yes. Secure Browser Workspaces can deploy on-premises or in a customer cloud tenancy, the same as Desktop Workspaces. Island does not offer a comparable sovereign deployment model — the browser is cloud-delivered with no on-prem option.",
      },
    ],
  }),

  "vs-menlo": comparePage({
    slug: "vs-menlo",
    title: "Neverinstall vs Menlo Security: Beyond Remote Browser Isolation",
    description:
      "Compare Neverinstall and Menlo Security across platform breadth, desktop workspaces, DLP, session recording, and sovereign deployment. Where RBI is a feature, not a platform.",
    summary:
      "Neverinstall goes beyond remote browser isolation to deliver full desktop workspaces, native DLP, session recording, and sovereign deployment — all from a single product, where Menlo Security covers only the browser isolation layer.",
    subtitle:
      "Menlo Security pioneered remote browser isolation, but RBI is a single security control — not a workspace platform. Neverinstall delivers browser workspaces, full desktops, DLP, session recording, and sovereign deployment from one product.",
    differentiator:
      "A complete workspace platform — not just a remote browser isolation layer",
    tldr: {
      corePositioning: [
        "Unified workspace platform with Secure Browser Workspaces and full Desktop Workspaces. Native DLP, session recording, and policy controls across both modes. Three deployment models including sovereign on-prem.",
        "Remote browser isolation specialist with mature cloud-based RBI architecture. Strong at isolating web threats, but scope is limited to browser isolation — no desktop workspaces, no sovereign deployment, no native DLP beyond the browser layer.",
      ],
      operatingModel: [
        "Deploy browser workspaces with full DLP and session recording included. Add desktop workspaces when users need more. Sovereign on-prem available for regulated environments. Sub-second session restore.",
        "Deploy RBI to isolate web-borne threats in the browser. DLP and session controls are limited to the isolation layer. No desktop workspace capability. No on-prem deployment option.",
      ],
      bestFit: [
        "Teams that need browser security as part of a broader workspace strategy — including desktop workspaces, unified DLP, session recording, and sovereign deployment in one platform.",
        "Security teams focused narrowly on web threat isolation who have already solved the desktop workspace problem with a separate vendor and have no sovereign deployment requirement.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one platform. Unified policy, DLP, and session recording across both work modes.",
        "No. Menlo delivers browser isolation only. Desktop workspaces, native DLP, and session recording across desktop sessions are outside Menlo's product scope entirely.",
      ],
    },
    strengths: [
      {
        title:
          "Strong RBI credibility with a mature, battle-tested isolation architecture",
        description:
          "Menlo has been doing remote browser isolation longer than most competitors. Their isolation engine is mature and well-regarded by security teams who specifically need web threat isolation as a control — that technical depth in the isolation layer is real.",
        icon: "Shield",
      },
      {
        title:
          "Established category recognition among security teams evaluating RBI specifically",
        description:
          "When CISOs and security architects evaluate remote browser isolation, Menlo is consistently on the shortlist. That category awareness and brand trust within the security community is a genuine competitive asset.",
        icon: "BadgeCheck",
      },
      {
        title:
          "Clean security posture for teams that only need web threat isolation and nothing more",
        description:
          "If your requirement is specifically and only to isolate web-borne threats in the browser — no desktop workspaces, no sovereign deployment, no unified DLP across work modes — Menlo's focused RBI approach does that job well without the overhead of a broader platform.",
        icon: "Lock",
      },
    ],
    neverinstallWins: [
      {
        title:
          "Full desktop workspaces included — Menlo is browser isolation only",
        description:
          "Menlo's architecture ends at the browser. When users need native applications, multi-monitor setups, or GPU workloads, Menlo cannot help. Neverinstall delivers full desktop workspaces from the same platform — the browser is one surface, not the whole product.",
        icon: "Monitor",
      },
      {
        title:
          "Native DLP and session recording across both browser and desktop work modes",
        description:
          "Menlo's DLP controls are limited to the browser isolation layer. Neverinstall enforces DLP — clipboard controls, file transfer restrictions, upload/download policies, and full session recording — natively across both browser and desktop workspaces. No separate DLP product required.",
        icon: "Eye",
      },
      {
        title:
          "Sovereign on-prem deployment — Menlo is cloud-delivered with no on-prem model",
        description:
          "Menlo operates as a cloud-delivered isolation service with no on-prem deployment option. For government, defense, healthcare, and financial services organizations with data sovereignty requirements, Menlo is not viable. Neverinstall deploys fully on-prem.",
        icon: "Building2",
      },
      {
        title:
          "One platform for both work modes — reducing the vendor stack for secure access",
        description:
          "Organizations evaluating browser isolation often discover they also need desktop workspaces, unified DLP, and session recording — which means adding more vendors alongside Menlo. Neverinstall consolidates browser workspaces, desktop workspaces, DLP, and session recording into one platform, reducing vendor complexity.",
        icon: "Layers",
      },
    ],
    biggerPicture: {
      description:
        "Remote browser isolation is a valuable security control, but it solves one problem. Most enterprises need both browser security and desktop workspaces. Buying Menlo for RBI and a separate DaaS vendor for desktops creates fragmented policy and doubled vendor management.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops for users who need more than browser isolation — power users, developers, and employees who need native applications. Sub-second restore, sovereign deployment, and unified policy with browser workspaces.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access that goes beyond Menlo's isolation approach — with native DLP, session recording, and the ability to scale into desktop workspaces when users need more. 70-80% lower cost than provisioning full desktop seats for browser-only users.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Secure Browser Workspaces",
        "Explore the full Secure Browser Workspaces product capabilities.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Secure BYOD",
        "See how organizations that start with browser security expand into broader workspace needs.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Trust Center",
        "Review security, privacy, compliance, and architecture documentation.",
        "/security"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall dismiss remote browser isolation?",
        answer:
          "No. RBI is a legitimate security control. The difference is that RBI is one capability inside a larger secure-work platform rather than a complete solution. Menlo does isolation well, but when organizations need desktop workspaces, unified DLP, session recording, or sovereign deployment, Menlo's scope is too narrow.",
      },
      {
        question: "How does Neverinstall handle DLP compared to Menlo?",
        answer:
          "Neverinstall enforces DLP natively across both browser and desktop work modes — covering clipboard controls, file download restrictions, upload policies, and session recording — without requiring a separate DLP product alongside the isolation layer. Menlo's DLP is scoped to the browser isolation surface only.",
      },
      {
        question: "When would Menlo be the right choice over Neverinstall?",
        answer:
          "When the requirement is strictly web threat isolation, you already have a separate DaaS platform for desktop users, you have no sovereign deployment requirement, and you do not need DLP or session recording across desktop sessions. In that narrow scope, Menlo's focused RBI approach is credible.",
      },
    ],
  }),

  "vs-prisma-access-browser": comparePage({
    slug: "vs-prisma-access-browser",
    title:
      "Neverinstall vs Prisma Access Browser: Standalone Platform vs SASE Bundle Add-On",
    description:
      "Compare Neverinstall and Palo Alto Prisma Access Browser on standalone value, SASE dependency, desktop workspace support, and sovereign deployment. When the browser is an add-on vs a platform.",
    summary:
      "Neverinstall delivers standalone platform value that does not depend on a SASE bundle to make the economics work — plus full desktop workspaces and sovereign deployment that Prisma Access Browser cannot provide.",
    subtitle:
      "Prisma Access Browser is a SASE bundle add-on — its value depends on an existing Palo Alto relationship. Neverinstall is a standalone platform with desktop workspaces, browser workspaces, and sovereign deployment that works regardless of your network security stack.",
    differentiator:
      "Standalone platform value vs a browser that only makes sense inside a Palo Alto SASE bundle",
    tldr: {
      corePositioning: [
        "Standalone workspace platform with both Secure Browser Workspaces and full Desktop Workspaces. Works independently of your network security vendor. Three deployment models including sovereign on-prem.",
        "Enterprise browser offered as part of Palo Alto's Prisma Access SASE suite. Value proposition is strongest when bundled with existing Prisma investments — limited standalone justification outside the Palo Alto ecosystem.",
      ],
      operatingModel: [
        "Deploy independently of your SASE or network security vendor. Browser and desktop workspaces from one platform with native DLP, session recording, and sovereign on-prem deployment. Sub-second session restore.",
        "Deploy inside the Prisma Access SASE framework. Browser-only delivery with no desktop workspace mode. Value and economics are tied to the broader Palo Alto relationship — standalone pricing is less competitive.",
      ],
      bestFit: [
        "Teams evaluating enterprise browser security independently of their SASE vendor, or organizations that need both browser and desktop workspaces with sovereign deployment from one platform.",
        "Existing Palo Alto Prisma Access customers who want to add browser security to their SASE bundle and have no desktop workspace need, no sovereign deployment requirement, and no urgency to avoid vendor concentration.",
      ],
      bothModes: [
        "Yes — Desktop Workspaces and Secure Browser Workspaces from one standalone platform. No dependency on a SASE or network security vendor.",
        "No. Prisma Access Browser is browser-only. Desktop workspaces require a separate vendor, separate procurement, and separate management — adding to the multi-vendor complexity Palo Alto's bundling strategy is supposed to reduce.",
      ],
    },
    strengths: [
      {
        title:
          "Strong fit for existing Palo Alto Prisma customers already inside the SASE estate",
        description:
          "If your organization has already invested in Prisma Access for SASE, adding the browser module is operationally simple and contractually convenient. The integration with Prisma's policy engine and the unified Palo Alto management console is genuine value for existing customers.",
        icon: "Layers",
      },
      {
        title:
          "Bundle economics make the browser feel low-cost inside an existing SASE commitment",
        description:
          "Palo Alto often includes or discounts Prisma Access Browser as part of broader SASE deals. For customers who are already paying for Prisma Access, the incremental cost of adding the browser can be very low — even if standalone pricing would not be competitive.",
        icon: "DollarSign",
      },
      {
        title:
          "Brand credibility from one of the largest enterprise security platforms in the market",
        description:
          "Palo Alto Networks is a well-known, publicly traded security company. For risk-averse organizations that default to large platform vendors, the brand trust and perceived stability of Palo Alto is a factor in procurement decisions — especially in large enterprise deals.",
        icon: "Building2",
      },
    ],
    neverinstallWins: [
      {
        title:
          "Standalone value without SASE bundle dependency — works with any network security stack",
        description:
          "Prisma Access Browser's economics depend on an existing Palo Alto SASE relationship. Without that relationship, the browser is hard to justify on its own. Neverinstall delivers full platform value independently — it works with Palo Alto, Zscaler, Cloudflare, or no SASE vendor at all.",
        icon: "Sparkles",
      },
      {
        title:
          "Full desktop workspaces included — Prisma Access Browser is browser-only",
        description:
          "Prisma Access Browser delivers browser security only. When users need native applications, multi-monitor desktops, or GPU workloads, Palo Alto has no workspace answer. Neverinstall delivers both browser and desktop workspaces from one platform — the SASE vendor does not need to be your workspace vendor.",
        icon: "Monitor",
      },
      {
        title:
          "Sovereign on-prem deployment for regulated environments — SASE-bundled products cannot reach",
        description:
          "Prisma Access Browser is cloud-delivered through Palo Alto's SASE infrastructure with no on-prem option. For government, defense, and financial services organizations with sovereign deployment requirements, a SASE-bundled browser is not viable. Neverinstall deploys fully on-prem.",
        icon: "Building2",
      },
      {
        title:
          "Cleaner TCO for organizations not already inside the Palo Alto ecosystem",
        description:
          "For organizations that are not existing Palo Alto customers, Prisma Access Browser's pricing is not competitive on a standalone basis. Neverinstall's platform pricing is transparent and does not depend on bundling with a network security purchase to make the economics work.",
        icon: "DollarSign",
      },
    ],
    biggerPicture: {
      description:
        "SASE vendors are adding enterprise browsers as bundle add-ons, but browser security should not be captive to your network security vendor. Neverinstall delivers browser and desktop workspaces as a standalone platform — your SASE choice stays independent of your workspace choice.",
      blocks: [
        {
          title: "Desktop Workspaces (DaaS)",
          description:
            "Full persistent or non-persistent desktops that Prisma Access Browser cannot deliver — for power users, developers, and employees who need native applications. Sub-second restore, sovereign deployment, and no SASE vendor dependency.",
          icon: "Monitor",
        },
        {
          title: "Secure Browser Workspaces",
          description:
            "Browser-based access that competes with Prisma Access Browser's core offering — but as a standalone product with its own value, not a bundle add-on. Native DLP, session recording, and the ability to scale into desktop workspaces when users need more.",
          icon: "Globe",
        },
      ],
    },
    relatedLinks: [
      relatedLink(
        "Secure Browser Workspaces",
        "Explore the full Secure Browser Workspaces product capabilities.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Desktop as a Service",
        "Full persistent and non-persistent desktops for users who need more than a browser.",
        "/products/daas"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "See how enterprises secure third-party contractor and vendor access.",
        "/solutions/use-case/contractor-vendor-access"
      ),
    ],
    faq: [
      {
        question: "Why choose Neverinstall over Prisma Access Browser?",
        answer:
          "Because most teams want enterprise browser security evaluated on its own merits — not as a SASE bundle add-on where the value depends on an existing Palo Alto relationship. Neverinstall delivers standalone browser and desktop workspaces with sovereign deployment, regardless of your network security vendor.",
      },
      {
        question:
          "Does Neverinstall integrate with Palo Alto or SASE environments?",
        answer:
          "Yes. Neverinstall works alongside existing SASE or network security infrastructure, including Palo Alto. The comparison is about workspace delivery platform choice being independent of network security vendor choice — not about replacing your SASE stack.",
      },
      {
        question: "Can Neverinstall replace Prisma Access Browser entirely?",
        answer:
          "For the browser workspace use case, yes. Neverinstall delivers the same browser security controls — DLP, session recording, policy enforcement, unmanaged device access — plus full desktop workspaces and sovereign deployment, as a standalone platform that does not require a SASE bundle to justify the economics.",
      },
    ],
  }),
}
