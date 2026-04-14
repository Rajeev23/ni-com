import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  defaultBottomCtas,
  demoCta,
  gridSection,
  pricingCta,
  relatedLink,
  statsSection,
  tableSection,
  tcoCta,
} from "@/lib/content/shared"

export const productPages: Record<string, ContentPage> = {
  "secure-browser": {
    name: "Secure Browser Workspaces",
    slug: "secure-browser",
    path: "/products/secure-browser",
    template: "product",
    seo: {
      title:
        "Secure Browser Workspace: Enterprise Browser Security | Neverinstall",
      description:
        "Enterprise browser security with cloud-isolated sessions, DLP, and forensic replay for BYOD and contractors. Secure virtual desktop–class controls without endpoint agents—70–80% less than full VDI.",
    },
    summary:
      "Enterprise browser security: isolated secure browser workspaces with DLP, session replay, and zero endpoint trust for contractors and BYOD—delivering secure virtual desktop–class isolation at 70–80% lower cost than full desktop VDI.",
    hero: {
      eyebrow: "Neverinstall Secure Browser Workspaces",
      title:
        "Enterprise browser security with secure virtual desktop–class isolation",
      subtitle:
        "Cloud-isolated enterprise browser sessions with granular DLP and forensic replay for contractors, BYOD users, and unmanaged devices—no agent install, no MDM, full browser security policy control.",
      supportingCopy:
        "Most enterprise work is browser-delivered. Neverinstall moves execution into the cloud session so you get enterprise browser security and secure virtual desktop–grade isolation without touching the endpoint.",
      metric: "70-80% lower cost than full desktop VDI for browser-first users",
      primaryCta: demoCta,
      secondaryCta: pricingCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall Secure Browser Workspaces?",
      "Neverinstall Secure Browser Workspaces is an enterprise browser platform that delivers isolated cloud browser sessions with DLP, forensic replay, and zero endpoint trust—browser security and secure virtual desktop–class session isolation for contractors, BYOD, and unmanaged devices at a fraction of full VDI cost."
    ),
    sections: [
      gridSection({
        title: "Enterprise browser security gaps on unmanaged devices and BYOD",
        description:
          "Contractors, vendors, and BYOD users access sensitive data from devices IT cannot govern. Existing approaches either ship hardware that takes weeks to arrive, deploy agents onto devices you do not own, or accept the risk and hope nothing leaks.",
        blocks: [
          {
            title: "You cannot agent your way out of BYOD",
            description:
              "Endpoint agents require managed devices. Contractors and third parties bring their own hardware. Asking them to install corporate software creates compliance friction and rarely works.",
            icon: "Lock",
          },
          {
            title: "Full VDI is too expensive for browser-only work",
            description:
              "Provisioning a full Windows desktop for a user who only needs web applications costs 3-5x more than it should. Most enterprises are paying Citrix or VMware per-seat pricing for workflows that never leave the browser.",
            icon: "DollarSign",
          },
          {
            title: "Audit trails are incomplete or missing",
            description:
              "When a data leak happens on an unmanaged device, the forensic record is often gone with the device. Security teams need session-level evidence, not network logs.",
            icon: "Eye",
          },
        ],
      }),
      gridSection({
        title:
          "How secure browser workspaces deliver enterprise browser security",
        description:
          "Policy enforcement moves from the endpoint to the cloud browser session. If a device can run a browser, it is covered — no agent, no MDM, no hardware swap.",
        columns: 4,
        blocks: [
          {
            title: "Isolated sessions",
            description:
              "Every browser session runs inside a controlled cloud environment. Sensitive activity never touches the local device, clipboard data stays scoped to the session, and the endpoint is not trusted.",
            icon: "Shield",
          },
          {
            title: "Granular DLP controls",
            description:
              "Enforce copy/paste restrictions, block file downloads and uploads, disable printing, restrict USB, and apply visual watermarks — all configured centrally, not per device.",
            icon: "Settings",
          },
          {
            title: "Session recording and forensic replay",
            description:
              "Record every session with full replay capability. When a security incident involves a contractor or unmanaged device, you have the complete forensic record, not a gap in your audit trail.",
            icon: "Eye",
          },
          {
            title: "Zero endpoint trust",
            description:
              "Authentication and policy enforcement happen at the session boundary. There is no agent to deploy, no MDM enrollment to chase, and no assumption that the device is clean.",
            icon: "Fingerprint",
          },
        ],
      }),
      gridSection({
        title: "Not a point product — part of the Neverinstall platform",
        description:
          "Unlike Island, which is browser-only, Secure Browser Workspaces shares a control plane with Desktop Workspaces. One console, one policy engine, one audit trail — not two vendors duct-taped together.",
        blocks: [
          {
            title: "Unified policy management",
            description:
              "Define DLP rules, access policies, and session behavior once. They apply to browser workspaces and desktop workspaces identically — no configuration drift between two separate products.",
            icon: "Layers",
          },
          {
            title: "Single identity and audit layer",
            description:
              "One IdP integration, one audit log, one place for your SOC to investigate incidents. Whether the session was a full desktop or a browser workspace, the forensic record is in the same system.",
            icon: "Users",
          },
          {
            title: "Upgrade a user to a full desktop in minutes",
            description:
              "When a contractor needs more than a browser — say, a local IDE or a legacy Windows app — flip them to Desktop Workspaces from the same admin console. No new procurement, no re-onboarding, no second vendor.",
            icon: "Monitor",
          },
        ],
      }),
      tableSection({
        title: "Secure Browser Workspaces vs Island Browser",
        description:
          "Island sells a standalone enterprise browser. Neverinstall delivers browser workspaces and full desktop workspaces from the same platform — so you never hit a ceiling when users need more than a browser.",
        columns: ["Capability", "Neverinstall", "Island Browser"],
        rows: [
          {
            label: "Isolated session execution",
            values: ["Cloud-isolated sessions", "Browser process isolation"],
          },
          {
            label: "DLP controls",
            values: [
              "Copy/paste, download, upload, print, watermark",
              "Copy/paste, download, print",
            ],
          },
          {
            label: "Session recording and forensic replay",
            values: ["Full session recording with replay", "Limited"],
          },
          {
            label: "Full desktop delivery (same vendor)",
            values: ["Yes — Desktop Workspaces on same platform", "No"],
          },
          {
            label: "Deployment models",
            values: [
              "Managed cloud, customer cloud (OCI/AWS/Azure), sovereign on-prem",
              "SaaS only",
            ],
          },
          {
            label: "Admin console",
            values: ["Shared with Desktop Workspaces", "Browser-only console"],
          },
        ],
      }),
      statsSection({
        title: "Built for low-trust endpoints and browser-first work",
        description:
          "Contractors on personal laptops, BYOD employees, third-party vendors accessing your SaaS apps — any scenario where you cannot trust the device but the work lives in the browser.",
        items: [
          {
            label: "Cost vs full VDI",
            value: "70-80% lower",
            detail:
              "For users whose work stays in the browser, Secure Browser Workspaces delivers the security outcome at a fraction of the desktop VDI cost.",
          },
          {
            label: "Who benefits most",
            value: "Security and IT teams",
            detail:
              "Security and IT leaders responsible for third-party access — the ones fielding audit findings about unmanaged devices and contractor data exposure.",
          },
          {
            label: "Fastest time to value",
            value: "Contractors and BYOD",
            detail:
              "No hardware to ship, no agent to deploy. Users get a secure session from any device in the same day.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop Workspaces",
        "When users need a full Windows or Linux environment, the same platform delivers it.",
        "/products/daas"
      ),
      relatedLink(
        "Secure BYOD",
        "See the browser-first path for unmanaged employee and contractor devices.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Compare vs Island Browser",
        "Why a platform that delivers both desktops and browsers beats a browser-only product — with deployment, DLP, and pricing compared head to head.",
        "/compare/vs-island"
      ),
    ],
    faq: [
      {
        question:
          "When should a team choose Secure Browser Workspaces over Desktop Workspaces?",
        answer:
          "Choose Secure Browser Workspaces when the user population is primarily browser-first — contractors, BYOD employees, or third-party vendors who access SaaS applications and internal web tools but rarely need a full OS environment. It delivers the security outcome at 70-80% lower cost than provisioning a full desktop.",
      },
      {
        question: "How is this different from a SASE or SWG approach?",
        answer:
          "SASE and SWG inspect traffic at the network layer. Neverinstall Secure Browser Workspaces moves execution into the cloud session, so DLP controls, copy/paste restrictions, and session recording happen inside the browser environment — not at a network choke point that can be bypassed.",
      },
      {
        question: "How does Neverinstall compare to Island Browser?",
        answer:
          "Island is a browser-only product — it cannot deliver a full desktop when a user needs one. Neverinstall gives you browser workspaces and desktop workspaces on the same platform with the same admin console and the same policies. When a contractor outgrows browser access and needs a Windows environment, that is a policy change, not a new vendor procurement.",
      },
      {
        question: "What deployment models are available?",
        answer:
          "Three options: Neverinstall-managed cloud for the fastest deployment, customer cloud on OCI, AWS, or Azure for teams that need to keep data inside their own tenancy, and sovereign on-premises for regulated industries or air-gapped environments.",
      },
      {
        question: "Does Secure Browser Workspaces require an endpoint agent?",
        answer:
          "No. The user opens a browser, authenticates, and their session runs in the cloud. There is nothing to install on the device, which is why it works for contractors and BYOD scenarios where you cannot mandate software installs.",
      },
    ],
    bottomCtas: defaultBottomCtas("product"),
  },
  daas: {
    name: "Desktop Workspaces",
    slug: "daas",
    path: "/products/daas",
    template: "product",
    seo: {
      title: "Desktop as a Service (DaaS): Cloud Desktops & VDI | Neverinstall",
      description:
        "Desktop as a service (DaaS) with hosted virtual desktops and cloud PCs. Replace Citrix or VMware VDI with sub-second session restore, Windows and Linux, managed cloud or on-prem—deploy in days, not months.",
    },
    summary:
      "Desktop as a service (DaaS) and hosted virtual desktops that replace legacy VDI: sub-second restore, Windows and Linux cloud desktops, and rollout in days—not months—across managed cloud, customer cloud, or on-premises.",
    hero: {
      eyebrow: "Neverinstall Desktop Workspaces",
      title:
        "Desktop as a service: cloud desktops that replace legacy Citrix and VMware VDI",
      subtitle:
        "Hosted virtual desktops and cloud PCs with sub-second session restore, Windows and Linux support, and rollout measured in days—not the months typical of Citrix and VMware Horizon.",
      supportingCopy:
        "Broadcom’s VMware acquisition drove 3–5x licensing jumps; Citrix stacks stay heavy to run. This desktop-as-a-service path delivers a predictable virtual desktop platform migration without a six-month project.",
      metric: "Sub-second session restore. Days to deploy, not months.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall Desktop Workspaces?",
      "Neverinstall Desktop Workspaces is desktop as a service (DaaS): a cloud-native VDI replacement that delivers secure hosted virtual desktops—Windows and Linux cloud desktops with sub-second restore, persistent or ephemeral modes, and deployment on managed cloud, customer cloud, or sovereign on-premises."
    ),
    sections: [
      gridSection({
        title:
          "Why enterprises adopt desktop as a service instead of legacy VDI",
        description:
          "Citrix and VMware dominated for years; Broadcom changed VMware economics. Teams on legacy VDI now face licensing spikes, slow rollouts, and mounting pressure to move to a modern virtual desktop platform.",
        blocks: [
          {
            title: "Broadcom's acquisition made VMware unaffordable",
            description:
              "Broadcom's VMware acquisition drove 3-5x licensing cost increases for existing customers. Teams that built their infrastructure around VMware Horizon are repricing multi-year renewals they cannot absorb.",
            icon: "DollarSign",
          },
          {
            title: "Citrix complexity has a cost of its own",
            description:
              "Citrix environments require consultant-heavy change management, long deployment cycles, and a support overhead that grows with scale. Most teams are running versions that lag behind by years.",
            icon: "AlertTriangle",
          },
          {
            title: "Deployment still takes months",
            description:
              "Legacy VDI rollouts involve hardware procurement, image management, network configuration, and testing cycles that stretch across quarters. Teams that need to onboard fast cannot wait.",
            icon: "Clock",
          },
        ],
      }),
      gridSection({
        title:
          "Hosted virtual desktops and cloud PC capabilities without legacy VDI overhead",
        description:
          "Everything Citrix and VMware deliver—persistent cloud desktops, session isolation, DLP, multi-OS support—without consultant-heavy deployments, months-long rollouts, or unpredictable licensing.",
        columns: 4,
        blocks: [
          {
            title: "Sub-second session restore",
            description:
              "Resume workspaces in under one second for validated desktop workflows. Users recover from interruptions without rebuilding context, and IT does not field complaints about session lag.",
            icon: "Zap",
          },
          {
            title: "Windows and Linux support",
            description:
              "Deliver standard Windows desktops for office workflows and Linux environments for developers on the same platform, managed through the same admin console.",
            icon: "Monitor",
          },
          {
            title: "Persistent and ephemeral modes",
            description:
              "Support persistent developer environments, clean-room ephemeral sessions for shift workers or contractors, and everything in between — configured per user group, not per deployment.",
            icon: "Layers",
          },
          {
            title: "Any-device access",
            description:
              "Users access their desktop from any device with a browser. No managed endpoint required, no VPN dependency, no hardware to ship before someone can start work.",
            icon: "Globe",
          },
        ],
      }),
      gridSection({
        title:
          "Deploy cloud desktops anywhere—three models, one virtual desktop platform",
        description:
          "Deployment model is a configuration choice, not a product change. The same desktop-as-a-service platform runs across managed cloud, your cloud, and sovereign on-premises.",
        blocks: [
          {
            title: "Neverinstall-managed cloud",
            description:
              "Fastest path to production. Neverinstall operates the infrastructure. Customers provision workspaces, set policies, and onboard users without managing the underlying stack.",
            icon: "Cloud",
          },
          {
            title: "Customer cloud (OCI, AWS, Azure)",
            description:
              "Deploy inside your own cloud tenancy for data residency, compliance, or existing cloud commitments. Tally Solutions runs Desktop Workspaces on Oracle Cloud Infrastructure — their users get cloud desktops without data leaving the Tally tenancy.",
            icon: "Server",
          },
          {
            title: "Sovereign on-premises",
            description:
              "For regulated industries, air-gapped environments, or organizations with strict data sovereignty requirements, Desktop Workspaces deploys on-premises without losing platform capabilities.",
            icon: "Building2",
          },
        ],
      }),
      tableSection({
        title: "Desktop Workspaces vs legacy VDI",
        description:
          "A direct comparison for IT leaders evaluating migration from Citrix or VMware Horizon.",
        columns: ["Capability", "Neverinstall", "Citrix / VMware"],
        rows: [
          {
            label: "Deployment time",
            values: ["Days to weeks", "Months"],
          },
          {
            label: "Session restore speed",
            values: ["Sub-second (validated)", "Minutes in most deployments"],
          },
          {
            label: "Licensing cost trajectory",
            values: [
              "Predictable per-seat pricing",
              "3-5x increases post-Broadcom acquisition",
            ],
          },
          {
            label: "Deployment models",
            values: [
              "Managed cloud, customer cloud, sovereign on-prem",
              "On-prem or select cloud (complex setup)",
            ],
          },
          {
            label: "Browser-first users",
            values: [
              "Secure Browser Workspaces at 70-80% lower cost on same platform",
              "Full VDI seat cost regardless of usage",
            ],
          },
          {
            label: "Admin console",
            values: [
              "Shared with Secure Browser Workspaces",
              "Separate product, separate console",
            ],
          },
        ],
      }),
      statsSection({
        title: "Customer results",
        description:
          "Desktop Workspaces has replaced legacy VDI at enterprises that evaluated multiple alternatives before choosing Neverinstall.",
        items: [
          {
            label: "Porter",
            value: "Chose Neverinstall over AVD",
            detail:
              "Porter evaluated Neverinstall against Azure Virtual Desktop and Windows 365, then chose Neverinstall for faster deployment and better session restore performance.",
          },
          {
            label: "Citrix replacement (Indovance)",
            value: "Full Citrix rip-and-replace",
            detail:
              "Indovance migrated off Citrix Virtual Apps and Desktops entirely — eliminating the consultant dependency, cutting licensing costs, and going live in weeks instead of the quarter-long upgrade cycles Citrix required.",
          },
          {
            label: "For browser-first users",
            value: "70-80% lower cost",
            detail:
              "Users who work primarily in the browser do not need a full desktop seat. The same platform delivers Secure Browser Workspaces at a fraction of the cost.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Browser Workspaces",
        "For browser-first users, the same platform delivers isolated sessions at 70-80% lower cost than a full desktop seat.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Compare vs Citrix",
        "Deployment time, licensing cost, and migration path for teams replacing Citrix Virtual Apps and Desktops — including what Indovance learned doing the switch.",
        "/compare/vs-citrix"
      ),
      relatedLink(
        "Remote and Hybrid Work",
        "How distributed teams use Desktop Workspaces to onboard remote employees in hours instead of waiting weeks for shipped hardware.",
        "/solutions/use-case/remote-hybrid-work"
      ),
    ],
    faq: [
      {
        question:
          "Is this a direct replacement for Citrix Virtual Apps and Desktops?",
        answer:
          "Yes. Desktop Workspaces replaces Citrix Virtual Apps and Desktops and VMware Horizon. Indovance did a full Citrix rip-and-replace and went live in weeks. You get persistent and ephemeral Windows and Linux desktops, the same DLP and session controls enterprise IT requires, and predictable per-seat pricing instead of Broadcom-era cost surprises.",
      },
      {
        question: "How long does a typical migration take?",
        answer:
          "Most deployments reach production in days to weeks rather than the months typical of Citrix or VMware rollouts. The approach is cohort-based — migrate a pilot group, benchmark performance and user experience, then expand without a big-bang cutover.",
      },
      {
        question: "Which deployment model should we choose?",
        answer:
          "If speed is the priority, Neverinstall-managed cloud gets you to production in days. If you have data residency requirements or existing cloud spend commitments, deploy in your own OCI, AWS, or Azure tenancy — Tally Solutions runs this way on OCI. For regulated industries or air-gapped environments, sovereign on-premises runs the full platform in your data center.",
      },
      {
        question: "What about users who only need browser access?",
        answer:
          "The same platform includes Secure Browser Workspaces for users whose workflows are entirely browser-based. You do not need to provision a full desktop seat for those users — the cost savings are typically 70-80% compared to a full VDI seat, and both work modes are managed from the same admin console.",
      },
      {
        question: "Does Desktop Workspaces support GPU-accelerated workloads?",
        answer:
          "Yes. Desktop Workspaces supports GPU-backed environments for engineering workstations, rendering workflows, and other performance-intensive use cases. Deployment model determines whether GPUs come from Neverinstall's managed infrastructure or your own cloud or on-premises hardware.",
      },
    ],
    bottomCtas: defaultBottomCtas("product"),
  },
}
