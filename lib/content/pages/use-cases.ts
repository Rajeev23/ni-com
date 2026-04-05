import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  checklistSection,
  defaultBottomCtas,
  demoCta,
  gridSection,
  relatedLink,
  statsSection,
  tcoCta,
} from "@/lib/content/shared"

function createUseCasePage(page: ContentPage): ContentPage {
  return {
    ...page,
    template: "useCase",
    bottomCtas: defaultBottomCtas("useCase"),
  }
}

export const useCasePages: Record<string, ContentPage> = {
  // ─── DaaS Lane ────────────────────────────────────────────────────────────

  "vdi-replacement": createUseCasePage({
    name: "VDI Replacement",
    slug: "vdi-replacement",
    path: "/solutions/use-case/vdi-replacement",
    template: "useCase",
    seo: {
      title: "Citrix Alternative for Enterprise VDI Replacement | Neverinstall",
      description:
        "Replace Citrix and VMware VDI with cloud desktops that deploy in days and cost 70% less. Windows & Linux on any cloud or on-prem. No Broadcom lock-in.",
    },
    summary:
      "Cloud desktops that replace Citrix and VMware VDI in days, not months, at a fraction of the cost.",
    hero: {
      eyebrow: "Use Case",
      title:
        "Replace Citrix and VMware with cloud desktops that deploy in days",
      subtitle:
        "Legacy VDI was already expensive and slow to run. Broadcom's 3–5x license increases made it untenable. Neverinstall gives you persistent Windows and Linux desktops that provision in days, restore in under a second, and run on any cloud or on-prem infrastructure.",
      metric: "Days to deploy. 70% lower cost.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall replace Citrix and VMware VDI?",
      "Neverinstall replaces legacy VDI with cloud-native desktop workspaces that provision in days rather than months, require no dedicated infrastructure team to operate, and deliver sub-second session restore across Windows and Linux. Customers have moved from Citrix and VMware AVD to Neverinstall and cut costs by 70% while reducing deployment timelines from quarters to weeks."
    ),
    sections: [
      gridSection({
        title: "Why the legacy VDI model is broken",
        description:
          "The problems were already there before Broadcom bought VMware. The licensing shock just made the decision unavoidable.",
        blocks: [
          {
            title: "Months to deploy",
            description:
              "Legacy VDI requires dedicated infra teams, hypervisor licensing, and months of integration work before a single user logs in.",
          },
          {
            title: "3–5x Broadcom cost increases",
            description:
              "Broadcom's acquisition of VMware forced enterprises into bundled suites at multiples of previous license costs, with no opt-out path.",
          },
          {
            title: "Citrix complexity tax",
            description:
              "Citrix Virtual Apps and Desktops demands specialist staff, NetScaler gateways, and constant tuning just to stay operational.",
          },
          {
            title: "Hardware refresh cycle",
            description:
              "On-prem VDI ties you to fixed hardware cycles. Scale-up means procurement. Scale-down means stranded CapEx.",
          },
          {
            title: "Session reliability gap",
            description:
              "Legacy VDI sessions that disconnect often take tens of seconds or minutes to restore, making the experience worse than a local machine.",
          },
          {
            title: "Forced bundling",
            description:
              "Both Broadcom and Citrix now require purchasing large software suites to access the specific VDI capability you actually need.",
          },
        ],
      }),
      statsSection({
        title: "What Neverinstall delivers instead",
        description:
          "A cloud-native replacement that removes every layer of the legacy stack while improving the user experience.",
        items: [
          {
            label: "Deployment timeline",
            value: "Days to weeks",
            detail:
              "No hypervisor layer, no dedicated infra team, no hardware procurement. Provision from a browser and go.",
          },
          {
            label: "Session restore",
            value: "Sub-second",
            detail:
              "Persistent workspaces resume from exactly where the user left off. No rebuild, no lost context.",
          },
          {
            label: "Cost reduction",
            value: "Up to 70%",
            detail:
              "Browser-first and mixed deployments regularly land at 70–80% lower total cost than Citrix or VMware equivalents.",
          },
        ],
      }),
      gridSection({
        title: "Customer stories",
        description:
          "Enterprises across verticals have replaced Citrix and VMware with Neverinstall in production.",
        columns: 2,
        blocks: [
          {
            title: "Indovance replaced Citrix",
            description:
              "Indovance, an AEC engineering firm, migrated off Citrix Virtual Apps and Desktops to Neverinstall without a hardware refresh or replatforming project.",
          },
          {
            title: "Porter chose Neverinstall over Microsoft AVD",
            description:
              "Porter evaluated Microsoft Azure Virtual Desktop and chose Neverinstall for faster deployment, simpler operations, and lower cost at scale.",
          },
        ],
      }),
      checklistSection({
        title: "Is Neverinstall the right VDI replacement for you?",
        description:
          "Organizations that get the fastest ROI from Neverinstall typically share one or more of these conditions.",
        items: [
          "Active Citrix or VMware license renewal in the next 12 months",
          "Broadcom licensing increase already received or anticipated",
          "Dedicated VDI infra team you want to eliminate or redeploy",
          "Remote or hybrid workforce that needs consistent desktop access",
          "Windows or Linux workloads that run inside a standard browser or desktop session",
          "Desire to move from CapEx hardware cycles to OpEx cloud model",
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Persistent Windows and Linux cloud desktops with sub-second session restore and central policy control.",
        "/products/daas"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Give third-party users controlled, time-bound desktop access without shipping hardware.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "TCO Calculator",
        "Model your cost savings against your current Citrix or VMware spend.",
        "/tco-calculator"
      ),
    ],
    faq: [
      {
        question:
          "Can Neverinstall replicate every Citrix feature before we migrate?",
        answer:
          "Most enterprise Citrix deployments use a fraction of available features. Neverinstall covers the core delivery model — persistent Windows and Linux desktops, policy control, session management, any-device access — and is adding capability continuously. The migration starts with a gap analysis against what you actually use, not a feature-for-feature checklist.",
      },
      {
        question: "Does the replacement require changing our cloud provider?",
        answer:
          "No. Neverinstall runs on the cloud or on-prem infrastructure you already use, including OCI, AWS, Azure, GCP, and private data centers. There is no forced migration to a Neverinstall-managed cloud.",
      },
      {
        question:
          "How long does a typical migration from Citrix or VMware take?",
        answer:
          "Most production deployments go live in days to weeks, not the months or quarters typical of legacy VDI projects. Indovance migrated off Citrix without a hardware refresh. Porter deployed and was operational faster than their Microsoft AVD evaluation timeline.",
      },
      {
        question: "What happens to our existing on-prem infrastructure?",
        answer:
          "Neverinstall can run on your existing on-prem hardware, so there is no stranded CapEx. You can also migrate incrementally — move user groups to cloud-hosted workspaces over time while keeping some workloads on-prem during the transition.",
      },
    ],
    bottomCtas: [],
  }),

  "remote-hybrid-work": createUseCasePage({
    name: "Remote & Hybrid Work",
    slug: "remote-hybrid-work",
    path: "/solutions/use-case/remote-hybrid-work",
    template: "useCase",
    seo: {
      title:
        "Secure Remote Work Without VPN or Hardware Shipping | Neverinstall",
      description:
        "Onboard remote employees in minutes with cloud workspaces on any device. No VPN, no laptop shipping, no endpoint data. Cut onboarding from weeks to minutes.",
    },
    summary:
      "Cloud workspaces for fast remote onboarding, any-device access, and zero VPN dependency.",
    hero: {
      eyebrow: "Use Case",
      title: "Stop shipping laptops. Start delivering workspaces.",
      subtitle:
        "Onboard remote employees in minutes with secure cloud workspaces that run on any device and keep data completely off the endpoint. No VPN. No hardware queue. No IT ticket to start work.",
      metric: "From 10 days to minutes",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support remote and hybrid work?",
      "Neverinstall replaces device-heavy remote access models with cloud workspaces that provision in minutes, persist across sessions, and run on almost any endpoint. Users get a consistent work environment from day one without IT shipping hardware or configuring VPN access."
    ),
    sections: [
      gridSection({
        title: "What breaks in the device-first model",
        description:
          "Remote work exposes the cost and fragility of building access around physical hardware.",
        blocks: [
          {
            title: "Slow onboarding",
            description:
              "Shipping, imaging, and configuring laptops adds days or weeks before a new hire can actually work.",
          },
          {
            title: "VPN friction and risk",
            description:
              "Network-centric access adds user friction, creates bottlenecks, and does not solve the underlying endpoint risk.",
          },
          {
            title: "Device failure stops work",
            description:
              "When a laptop breaks or is lost, the user is offline until a replacement arrives and is re-imaged.",
          },
        ],
      }),
      gridSection({
        title: "What changes with cloud workspaces",
        description:
          "Move the work environment off the device and into the cloud. The device becomes a screen.",
        columns: 4,
        blocks: [
          {
            title: "Minute-level provisioning",
            description:
              "Create a fully configured work environment in minutes from any browser, with no hardware required.",
          },
          {
            title: "Any-device access",
            description:
              "Users work from managed or personal devices. The workspace experience is identical regardless of endpoint.",
          },
          {
            title: "No VPN required",
            description:
              "Access is browser-native. There is no network tunnel to configure, maintain, or troubleshoot.",
          },
          {
            title: "Central policy control",
            description:
              "Manage data movement, session behavior, and access permissions from one place across your entire workforce.",
          },
        ],
      }),
      statsSection({
        title: "When to start with Desktop Workspaces vs Secure Browser",
        description:
          "Not every remote worker needs a full persistent desktop. Matching the product to the user type matters for cost and adoption.",
        items: [
          {
            label: "Desktop Workspaces",
            value: "Full application access",
            detail:
              "Engineers, power users, and anyone needing persistent Windows or Linux environments with local-performance feel.",
          },
          {
            label: "Secure Browser Workspaces",
            value: "Browser-first workflows",
            detail:
              "Support, operations, and knowledge workers who live primarily in SaaS and web apps. 70–80% lower cost per seat.",
          },
          {
            label: "Most enterprises need both",
            value: "One platform, two modes",
            detail:
              "Neverinstall delivers both from a single control plane so you are not managing two separate vendors.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Persistent Windows and Linux desktops for power users who need full application environments.",
        "/products/daas"
      ),
      relatedLink(
        "Secure BYOD",
        "Let employees work from personal devices without putting corporate data on the endpoint.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Onboard third-party users in minutes with time-bound, isolated workspace access.",
        "/solutions/use-case/contractor-vendor-access"
      ),
    ],
    faq: [
      {
        question: "Does every remote worker need a full Desktop Workspace?",
        answer:
          "No. Teams that work primarily in a browser — SaaS tools, internal portals, customer systems — are often better served by Secure Browser Workspaces at 70-80% lower cost per seat. Neverinstall helps you segment your workforce and assign the right workspace type to each user group.",
      },
      {
        question:
          "How does this compare to just giving everyone a VPN and a laptop?",
        answer:
          "VPN plus laptop is the slowest and most expensive remote access model. Laptops take days to weeks to procure, ship, and image. VPNs create network bottlenecks and do nothing to prevent data from accumulating on the endpoint. Cloud workspaces eliminate both — users access a full work environment from any browser in minutes.",
      },
      {
        question: "Can we onboard employees in different countries?",
        answer:
          "Yes. Because workspace provisioning is software-based, geographic location does not add delay. A new hire in Bangalore, Berlin, or Boston gets the same workspace in the same timeframe — minutes, not weeks of international shipping and customs.",
      },
    ],
    bottomCtas: [],
  }),

  "developer-workspaces": createUseCasePage({
    name: "Developer Workspaces",
    slug: "developer-workspaces",
    path: "/solutions/use-case/developer-workspaces",
    template: "useCase",
    seo: {
      title:
        "Secure Cloud Developer Environments for Enterprise Teams | Neverinstall",
      description:
        "Onboard developers in minutes with consistent Windows & Linux cloud environments. Code never touches the endpoint. Persistent state, sub-second restore.",
    },
    summary:
      "Consistent cloud developer environments that onboard fast, support Windows and Linux, and keep code off endpoints.",
    hero: {
      eyebrow: "Use Case",
      title: "Local performance. Cloud control.",
      subtitle:
        "Give developers ready-to-code environments with consistent toolchains, persistent state, and strong code protection. Onboard in minutes. Support contractors without exposing your codebase. Keep code off every endpoint.",
      metric: "Consistent dev environments in minutes",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why use Neverinstall for developer workspaces?",
      "Neverinstall gives engineering teams consistent cloud environments with Windows and Linux support, persistent state between sessions, and centralized code access controls. Onboarding drops from days to minutes and the risk of source code sprawl across personal endpoints is eliminated."
    ),
    sections: [
      gridSection({
        title: "What slows engineering teams down",
        description:
          "Developer productivity suffers when environments are inconsistent, tied to specific hardware, or difficult to replicate.",
        blocks: [
          {
            title: "Environment drift",
            description:
              "Local setup differences between team members cause hard-to-reproduce bugs and slow onboarding for every new hire.",
          },
          {
            title: "Hardware as a bottleneck",
            description:
              "High-spec laptops create procurement delays, support overhead, and single points of failure when a machine breaks.",
          },
          {
            title: "Code on uncontrolled endpoints",
            description:
              "Distributed engineering teams accumulate source code, credentials, and sensitive data on personal and contractor devices.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall changes for engineering",
        description:
          "Cloud workspaces built for development — not repurposed office desktops.",
        columns: 4,
        blocks: [
          {
            title: "Persistent environments",
            description:
              "State, tooling, and configuration survive session end. Developers pick up exactly where they left off.",
          },
          {
            title: "Windows and Linux",
            description:
              "Match real engineering toolchains. Support frontend, backend, and system development without compromise.",
          },
          {
            title: "Fast contractor onboarding",
            description:
              "Provision a secure, scoped development environment for external or offshore developers without handing over broad access.",
          },
          {
            title: "Code stays in the cloud",
            description:
              "Repos, credentials, and build artifacts never leave the controlled environment. Endpoint loss or theft exposes nothing.",
          },
        ],
      }),
      checklistSection({
        title: "Do your engineering teams have these problems?",
        description:
          "Cloud developer workspaces deliver the fastest ROI when your team faces these challenges.",
        items: [
          "Slow new-hire or contractor onboarding due to environment setup",
          "Inconsistent local environments causing reproducibility problems",
          "Source code on personal or contractor devices without strong controls",
          "Engineering teams spread across multiple geographies or time zones",
          "Mix of Windows and Linux requirements within the same team",
          "Security or compliance requirement to keep code off endpoints",
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Persistent Windows and Linux cloud desktops with sub-second session restore for engineering workflows.",
        "/products/daas"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Provision scoped, time-bound environments for external development teams without exposing your codebase.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Privileged User Access",
        "Add session recording and audit trails when developers access production systems or sensitive infrastructure.",
        "/solutions/use-case/privileged-user-access"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall replace every local development workflow?",
        answer:
          "Not necessarily. Local workflows can coexist for developers who need them. Neverinstall becomes the default secure path for contractors, regulated teams, and distributed engineering organizations where environment consistency, code protection, and fast onboarding matter most.",
      },
      {
        question:
          "What is the performance like compared to a high-spec local machine?",
        answer:
          "Cloud workspaces are configured to match the compute, memory, and storage profiles developers need. Sessions restore in under a second, so context switching is seamless. For teams currently on mid-range laptops, the cloud workspace often outperforms the local machine.",
      },
      {
        question: "Can we use our existing CI/CD pipelines and dev tools?",
        answer:
          "Yes. Neverinstall provides a full Windows or Linux desktop environment, so your existing IDEs, build tools, container runtimes, and CI/CD integrations work the same way they do locally. There is no proprietary toolchain to adopt.",
      },
    ],
    bottomCtas: [],
  }),

  "business-continuity": createUseCasePage({
    name: "Business Continuity",
    slug: "business-continuity",
    path: "/solutions/use-case/business-continuity",
    template: "useCase",
    seo: {
      title:
        "Business Continuity & Disaster Recovery Cloud Workspaces | Neverinstall",
      description:
        "Activate cloud workspaces in minutes during outages, ransomware, or device failures. No rebuild. No hardware dependency. Policy controls stay in force.",
    },
    summary:
      "Known-good cloud workspaces for rapid fallback during outages, ransomware events, and device failures.",
    hero: {
      eyebrow: "Use Case",
      title: "When systems fail, your work does not.",
      subtitle:
        "Switch teams into controlled cloud workspaces during outages, ransomware events, and device failures without rebuilding from scratch. The workspace is always there. Access is always available. Recovery is minutes, not days.",
      metric: "Outage to operational in minutes",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support business continuity?",
      "Neverinstall gives teams a controlled, known-good workspace environment that can activate immediately when offices, devices, or primary systems fail. Because work lives in the cloud rather than on the endpoint, device loss or ransomware on local infrastructure does not stop operations."
    ),
    sections: [
      gridSection({
        title: "Where endpoint dependence creates continuity risk",
        description:
          "Business continuity breaks down when work is tied to physical devices or specific local infrastructure.",
        blocks: [
          {
            title: "Device failure",
            description:
              "Users cannot work if access depends on a specific laptop. A broken machine means a stopped employee until replacement hardware arrives.",
          },
          {
            title: "Office or network disruption",
            description:
              "Physical-site events — floods, power failures, network outages — should not halt critical operations for entire teams.",
          },
          {
            title: "Ransomware and endpoint compromise",
            description:
              "When local devices or on-prem infrastructure are compromised, teams need a clean environment that is completely separate from affected systems.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall changes for continuity",
        description:
          "When the workspace lives in the cloud, continuity becomes a software problem rather than a hardware problem.",
        columns: 4,
        blocks: [
          {
            title: "Known-good environment",
            description:
              "Cloud workspaces are unaffected by endpoint ransomware, local hardware failure, or site disruptions.",
          },
          {
            title: "No device dependency",
            description:
              "Users access their workspace from any available device — a borrowed laptop, a phone, a shared terminal — without losing their environment.",
          },
          {
            title: "Policy continuity",
            description:
              "The same access controls, data movement restrictions, and security policies remain in force during a disruption.",
          },
          {
            title: "Standby economics",
            description:
              "Use cloud workspaces as a flexible continuity layer. No duplicate hardware to procure or maintain just for DR scenarios.",
          },
        ],
      }),
      statsSection({
        title: "Desktop and Browser Workspaces both serve continuity",
        description:
          "Different user types need different fallback environments. One platform covers both.",
        items: [
          {
            label: "Desktop Workspaces",
            value: "Full-environment fallback",
            detail:
              "Power users and developers need their full application environment to remain productive during a disruption.",
          },
          {
            label: "Secure Browser Workspaces",
            value: "Lightweight rapid activation",
            detail:
              "For browser-first workers, a Secure Browser session is active in seconds from any device anywhere.",
          },
          {
            label: "Both from one platform",
            value: "Single control plane",
            detail:
              "IT activates continuity for the right user segment without managing two separate vendors or toolsets.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Persistent cloud desktops that activate instantly when on-prem systems or devices are unavailable.",
        "/products/daas"
      ),
      relatedLink(
        "Secure BYOD",
        "Employees on personal devices during a disruption still need data to stay off the endpoint.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Privileged User Access",
        "Maintain audit trails and session controls during incident response operations.",
        "/solutions/use-case/privileged-user-access"
      ),
    ],
    faq: [
      {
        question:
          "Is this only relevant for formal disaster recovery programs?",
        answer:
          "No. Business continuity with Neverinstall also covers day-to-day resilience: laptop failures, office network outages, travel without a work machine, and rapid workforce scaling during unexpected demand. The same infrastructure handles routine resilience and formal DR scenarios.",
      },
      {
        question: "How fast can we activate workspaces during an incident?",
        answer:
          "Cloud workspaces are always available. There is no activation delay — users log in from any available device and their environment is ready. For organizations that keep standby workspaces pre-provisioned, the switch is immediate.",
      },
      {
        question:
          "Does this require maintaining a separate DR infrastructure?",
        answer:
          "No. Cloud workspaces serve as both the primary work environment and the continuity fallback. There is no duplicate hardware stack to procure, maintain, or test quarterly. The DR environment is the production environment.",
      },
    ],
    bottomCtas: [],
  }),

  // ─── Secure Browser Lane ──────────────────────────────────────────────────

  "contractor-vendor-access": createUseCasePage({
    name: "Contractor & Vendor Access",
    slug: "contractor-vendor-access",
    path: "/solutions/use-case/contractor-vendor-access",
    template: "useCase",
    seo: {
      title:
        "Secure Third-Party Contractor & Vendor Access | Neverinstall",
      description:
        "Provision isolated, time-bound workspaces for contractors in minutes. Session recording, instant offboarding, zero endpoint trust. No hardware required.",
    },
    summary:
      "Time-bound, isolated workspace access for third parties — provisioned in minutes, offboarded instantly.",
    hero: {
      eyebrow: "Use Case",
      title: "Onboard in minutes. Offboard instantly.",
      subtitle:
        "Give contractors and vendors secure, time-bound access to controlled workspaces without shipping hardware or trusting their devices. Session recording keeps every interaction auditable. When the engagement ends, access is gone in seconds.",
      metric: "Third-party access without endpoint trust",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall secure contractor and vendor access?",
      "Neverinstall gives third parties access to isolated workspace sessions with policy-enforced controls, session recording, and instant offboarding. No hardware is shipped. No endpoint is trusted. Access is created and revoked in software, so the IT overhead of onboarding and offboarding contractors drops to near zero."
    ),
    sections: [
      gridSection({
        title: "Where third-party access creates risk today",
        description:
          "The old model treats contractors like employees — with hardware, broad access, and messy offboarding.",
        blocks: [
          {
            title: "Hardware for temporary users",
            description:
              "Teams still procure and recover devices for short-term engagements, creating cost and logistics overhead.",
          },
          {
            title: "Incomplete offboarding",
            description:
              "Revoking access across tools, networks, and endpoints leaves gaps. Former contractors sometimes retain access for weeks.",
          },
          {
            title: "No visibility into sessions",
            description:
              "Third parties access sensitive systems from devices you do not control, with no audit trail of what was accessed or changed.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall changes",
        description:
          "Replace hardware and broad network access with isolated sessions, central policy, and instant revocation.",
        columns: 4,
        blocks: [
          {
            title: "Minutes to provision",
            description:
              "Create a scoped, time-bound workspace without hardware procurement or endpoint configuration.",
          },
          {
            title: "Instant offboarding",
            description:
              "Revoke the workspace and all associated access in seconds when the engagement ends.",
          },
          {
            title: "Isolated sessions",
            description:
              "Each third-party user runs in a clean, contained environment. No lateral movement between contractor sessions.",
          },
          {
            title: "Session recording",
            description:
              "Keep a full audit record of every contractor session for compliance, investigation, and forensic review.",
          },
        ],
      }),
      statsSection({
        title: "Browser or Desktop — match the access type to the work",
        description:
          "Most contractor access fits the Secure Browser model. Some workflows require a full desktop.",
        items: [
          {
            label: "Secure Browser Workspaces",
            value: "Typical contractor fit",
            detail:
              "Vendors accessing portals, dashboards, or SaaS tools. Faster to provision, lower cost, zero endpoint footprint.",
          },
          {
            label: "Desktop Workspaces",
            value: "Application-heavy contracts",
            detail:
              "Engineering vendors or consultants who need a full Windows or Linux environment with persistent tooling.",
          },
          {
            label: "One platform",
            value: "Same control plane",
            detail:
              "IT manages both access types through a single interface. No vendor sprawl for different contractor categories.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Enterprise Browser",
        "Isolated, policy-controlled browser sessions with DLP, clipboard restrictions, and session recording.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Privileged User Access",
        "Add forensic replay and deeper audit trails for contractors with admin-level access.",
        "/solutions/use-case/privileged-user-access"
      ),
      relatedLink(
        "VDI Replacement",
        "When contractors need a full Windows or Linux desktop, the same platform delivers it.",
        "/solutions/use-case/vdi-replacement"
      ),
    ],
    faq: [
      {
        question:
          "Can this work for large contractor pools — hundreds of concurrent users?",
        answer:
          "Yes. Access is created in software rather than through a hardware process, so scaling to large contractor cohorts does not require proportional IT effort. The model is the same for five vendors or five hundred.",
      },
      {
        question:
          "How does offboarding work when a contractor engagement ends?",
        answer:
          "The workspace and all associated access are revoked in seconds from a single control plane. There are no devices to recover, no VPN accounts to disable across systems, and no risk of residual access. The contractor's session data is retained for audit purposes but the access path is immediately closed.",
      },
      {
        question: "Can we restrict what contractors can access within the session?",
        answer:
          "Yes. Policy controls are granular — you can restrict clipboard copy/paste, block downloads, limit which URLs and applications are accessible, and enforce session time limits. Each contractor group can have distinct policies based on the sensitivity of their work.",
      },
    ],
    bottomCtas: [],
  }),

  "secure-byod": createUseCasePage({
    name: "Secure BYOD",
    slug: "secure-byod",
    path: "/solutions/use-case/secure-byod",
    template: "useCase",
    seo: {
      title:
        "Secure BYOD Access Without MDM or VPN | Neverinstall",
      description:
        "Enable BYOD without MDM enrollment or VPN. Enterprise data stays in the cloud session, never on the personal device. Policy controls at the session layer.",
    },
    summary:
      "BYOD access without data on personal devices, MDM enrollment, or VPN dependency.",
    hero: {
      eyebrow: "Use Case",
      title: "Let employees use any device. Without the risk.",
      subtitle:
        "Keep work inside a controlled session so personal devices stay personal and enterprise data stays protected. No MDM enrollment. No VPN client. No data on the device. Users get the flexibility they want and IT keeps the controls they need.",
      metric: "No MDM. No VPN. No compromise.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall make BYOD safer?",
      "Neverinstall keeps work inside browser-based sessions so enterprise data never reaches the personal device. There is nothing to install, no MDM profile to push, and no VPN to configure. Policy controls — clipboard restrictions, download blocking, session recording — are enforced at the session layer, not the device layer."
    ),
    sections: [
      gridSection({
        title: "Why BYOD becomes a security gap",
        description:
          "The problem is not that employees want to use personal devices. It is that the work and the data follow them onto those devices.",
        blocks: [
          {
            title: "Uncontrolled device posture",
            description:
              "Personal devices vary in patch level, antivirus coverage, and whether they are shared with family members.",
          },
          {
            title: "Employee resistance to MDM",
            description:
              "Staff push back against MDM profiles on personal machines because enrollment feels invasive and permanent.",
          },
          {
            title: "VPN does not solve the data problem",
            description:
              "Network tunnels let traffic through but do nothing to prevent local storage, screenshots, or data exfiltration from the endpoint.",
          },
        ],
      }),
      gridSection({
        title: "The session-layer BYOD model",
        description:
          "Move the security boundary from the device into the workspace. The device becomes a thin client.",
        columns: 4,
        blocks: [
          {
            title: "No data on the device",
            description:
              "Work happens inside a remote session. Files, credentials, and application data never land on the personal endpoint.",
          },
          {
            title: "Policy-led controls",
            description:
              "Enforce clipboard restrictions, download blocking, printing controls, and DLP at the session layer without touching the device.",
          },
          {
            title: "No installation required",
            description:
              "Users access the workspace through a browser. No MDM enrollment, no VPN client, no agent to install or maintain.",
          },
          {
            title: "Full session auditability",
            description:
              "Security teams get clear visibility into what happened inside every session — something fragmented BYOD tooling cannot provide.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Enterprise Browser",
        "Browser-based workspaces with DLP, clipboard control, and download blocking — no agent on the device.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Remote & Hybrid Work",
        "Full cloud desktops for power users who need more than browser-based access from personal devices.",
        "/solutions/use-case/remote-hybrid-work"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Apply the same zero-trust session model to external users on unmanaged devices.",
        "/solutions/use-case/contractor-vendor-access"
      ),
    ],
    faq: [
      {
        question:
          "Is the Secure Browser approach only for light browser-based work?",
        answer:
          "Secure Browser Workspaces cover the majority of BYOD use cases — SaaS, internal portals, customer systems, and web applications. When an employee on a personal device needs a full Windows or Linux desktop environment, that same user can be provisioned on Desktop Workspaces from the same platform.",
      },
      {
        question: "Do employees have to install anything on their personal device?",
        answer:
          "No. Access is through a standard web browser. There is no agent, no MDM profile, and no VPN client. This is what eliminates employee pushback — their personal device is never enrolled or modified.",
      },
      {
        question:
          "How do you prevent data leakage if the device itself is unmanaged?",
        answer:
          "All data stays inside the cloud session. Policy controls block clipboard copy to the local device, prevent file downloads, disable printing, and restrict screen capture. The personal device renders pixels but never stores enterprise data.",
      },
    ],
    bottomCtas: [],
  }),

  "privileged-user-access": createUseCasePage({
    name: "Privileged User Access",
    slug: "privileged-user-access",
    path: "/solutions/use-case/privileged-user-access",
    template: "useCase",
    seo: {
      title:
        "Privileged Access Management with Session Recording | Neverinstall",
      description:
        "Record and replay every privileged session. Isolate admin credentials from endpoints. Full audit trail for SOC 2, ISO 27001, and RBI compliance.",
    },
    summary:
      "Session-level controls, recording, and audit trails for admin and privileged user access to sensitive systems.",
    hero: {
      eyebrow: "Use Case",
      title: "Control privileged access without slowing operations",
      subtitle:
        "Give administrators and privileged users access to sensitive systems inside recorded, policy-controlled sessions. Every action is logged. Every session is replayable. Compliance and security teams get the audit trail they need without adding friction to the operations team.",
      metric: "Every privileged session recorded and replayable",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall handle privileged user access?",
      "Neverinstall delivers privileged access through isolated workspace sessions with full session recording, forensic replay capability, and a complete audit trail. Admins and IT users access sensitive systems without the session data ever reaching their endpoint, and every action is logged at the session layer without requiring a separate PAM appliance."
    ),
    sections: [
      gridSection({
        title: "Why privileged access is a persistent control problem",
        description:
          "Admin access creates outsized risk because the people who need it most are also the people who can do the most damage or make the most costly mistakes.",
        blocks: [
          {
            title: "No visibility into what admins do",
            description:
              "VPN-based access gives privileged users network reach without any session-layer audit of what they actually touched.",
          },
          {
            title: "Credentials on endpoints",
            description:
              "Admin credentials stored on laptops or personal devices create a persistent exfiltration risk.",
          },
          {
            title: "Compliance gaps",
            description:
              "Audit and compliance teams cannot reconstruct privileged sessions without purpose-built recording. Most orgs have the gap and hope nothing triggers an audit.",
          },
        ],
      }),
      gridSection({
        title: "What the session-based privileged access model provides",
        description:
          "Privileged work happens inside a controlled session, not through a wide-open network path.",
        columns: 4,
        blocks: [
          {
            title: "Session recording",
            description:
              "Capture every privileged session with full fidelity — keystrokes, screen activity, and application interactions.",
          },
          {
            title: "Forensic replay",
            description:
              "Replay any session for incident investigation, compliance review, or audit response without relying on logs alone.",
          },
          {
            title: "Audit trail",
            description:
              "Every access event, session start, session end, and policy violation is logged and exportable.",
          },
          {
            title: "Isolated from endpoint",
            description:
              "Admin credentials and sensitive system data stay inside the session. Nothing reaches the privileged user's device.",
          },
        ],
      }),
      checklistSection({
        title: "When privileged access controls become urgent",
        description:
          "Organizations deploy privileged access controls as a priority when facing any of these conditions.",
        items: [
          "Audit or compliance requirement for privileged session recording (SOC 2, ISO 27001, RBI, DPDP)",
          "Admin or IT users accessing production systems, databases, or cloud infrastructure",
          "Third-party managed service providers with admin access to your environment",
          "Incident investigation process that currently relies on incomplete logs",
          "Zero-trust initiative requiring session-layer controls for privileged paths",
          "Desire to eliminate VPN-based admin access to sensitive infrastructure",
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Enterprise Browser",
        "Browser-based sessions with built-in session recording, DLP, and policy enforcement for privileged workflows.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Extend privileged access controls to external admins and managed service providers.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Data Residency & Compliance",
        "Keep privileged session data within your jurisdiction for DPDP, RBI, and sovereignty requirements.",
        "/solutions/use-case/data-residency"
      ),
    ],
    faq: [
      {
        question: "Does this replace a dedicated PAM solution?",
        answer:
          "For many mid-market and enterprise teams, Neverinstall's session-layer controls cover the core PAM requirements — session recording, audit trail, access isolation — without the cost and complexity of a dedicated PAM appliance. For environments with existing PAM investments, Neverinstall adds the session-layer enforcement that PAM tools often lack.",
      },
      {
        question:
          "What compliance frameworks does the session recording satisfy?",
        answer:
          "Session recording and audit trails support SOC 2, ISO 27001, RBI guidelines, and DPDP Act requirements. Every session is captured with full fidelity and stored within your infrastructure, so the audit evidence is always available and always under your control.",
      },
      {
        question:
          "Can we apply different policies to different admin user groups?",
        answer:
          "Yes. Policy controls are role-based. A database administrator can have different session restrictions than a network engineer or a third-party MSP admin. Session recording, clipboard policies, and time-based access limits are configurable per user group.",
      },
    ],
    bottomCtas: [],
  }),

  "call-center-access": createUseCasePage({
    name: "Call Center & High-Volume Operations",
    slug: "call-center-access",
    path: "/solutions/use-case/call-center-access",
    template: "useCase",
    seo: {
      title:
        "Secure Call Center & BPO Workspaces with DLP | Neverinstall",
      description:
        "Shift-based clean sessions for call center agents. Central DLP, instant scaling, no hardware refresh. Used by Tally Solutions on OCI in production.",
    },
    summary:
      "Secure, scalable workspace access for call centers and high-volume operations with shift-based clean resets.",
    hero: {
      eyebrow: "Use Case",
      title: "Secure every agent session. Scale without limits.",
      subtitle:
        "Deliver consistent, policy-controlled workspace sessions to every call center agent at shift start. Clean resets between shifts prevent data carryover. Central policy covers every seat. Scale up or down without hardware procurement.",
      metric: "Shift-ready sessions. Instant scale.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall work for call center and high-volume operations?",
      "Neverinstall delivers browser-based workspace sessions to call center agents that reset cleanly between shifts, enforce DLP and access policies centrally, and scale up for high-demand periods without hardware procurement. Tally Solutions runs this model in production."
    ),
    sections: [
      gridSection({
        title: "What makes call center access hard to secure",
        description:
          "High-volume, shift-based operations create unique security and operations challenges that VDI and standard desktop management were not designed to handle efficiently.",
        blocks: [
          {
            title: "High seat turnover",
            description:
              "Agents share workstations across shifts. Data from one shift cannot carry over to the next, but manual cleanup is unreliable.",
          },
          {
            title: "Scale spikes are unpredictable",
            description:
              "Campaign launches, seasonal peaks, and business growth require fast capacity addition. Hardware cycles cannot keep up.",
          },
          {
            title: "Endpoint sprawl",
            description:
              "Thin clients, shared desktops, and BYOD devices create inconsistent security postures across the agent floor.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall delivers for operations teams",
        description:
          "Clean, fast, centrally controlled sessions that scale with the business.",
        columns: 4,
        blocks: [
          {
            title: "Shift-based clean resets",
            description:
              "Sessions start fresh each shift. No carryover of data, credentials, or browsing state between agents.",
          },
          {
            title: "Central policy enforcement",
            description:
              "DLP controls, clipboard restrictions, and access rules apply to every seat from a single management plane.",
          },
          {
            title: "Instant scaling",
            description:
              "Add hundreds of seats in hours without hardware procurement or imaging queues.",
          },
          {
            title: "Works on any endpoint",
            description:
              "Run on existing thin clients, shared PCs, or BYOD devices. No hardware refresh required to deploy.",
          },
        ],
      }),
      statsSection({
        title: "Tally Solutions — call center operations in production",
        description:
          "Tally Solutions uses Neverinstall for high-volume operations access across their customer-facing teams.",
        items: [
          {
            label: "Customer",
            value: "Tally Solutions",
            detail:
              "One of India's largest enterprise software companies, running operations access on Neverinstall deployed on Oracle Cloud Infrastructure.",
          },
          {
            label: "Deployment model",
            value: "On Oracle Cloud",
            detail:
              "Deployed on Oracle Cloud Infrastructure within Tally's own cloud tenancy.",
          },
          {
            label: "Result",
            value: "Secure, scalable operations",
            detail:
              "Policy-controlled sessions for high-volume operations teams with central management, DLP enforcement, and shift-based clean resets.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Enterprise Browser",
        "Browser-based agent sessions with DLP, clipboard restrictions, and shift-based clean resets built in.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Extend the same session controls to BPO vendors and outsourced operations teams.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "VDI Replacement",
        "When agents need full desktop applications beyond browser-based tools, deliver them from the same platform.",
        "/solutions/use-case/vdi-replacement"
      ),
    ],
    faq: [
      {
        question: "Does this work for BPO and outsourced operations teams?",
        answer:
          "Yes. The model maps directly to BPO operations where access needs to be provisioned quickly for large agent pools, controlled tightly to prevent data exfiltration, and cleaned between shifts or client engagements. Tally Solutions runs this model in production for their customer-facing operations on Oracle Cloud Infrastructure.",
      },
      {
        question: "How many agents can we scale to during peak periods?",
        answer:
          "Scaling is software-based, not hardware-based. Adding hundreds of agent seats takes hours, not the weeks required for hardware procurement and imaging. There is no practical ceiling — capacity scales with your cloud infrastructure allocation.",
      },
      {
        question:
          "What happens to session data when an agent's shift ends?",
        answer:
          "Sessions reset cleanly between shifts. No data, credentials, browsing history, or application state carries over to the next agent. This eliminates the risk of data leakage between shifts without relying on manual cleanup procedures.",
      },
    ],
    bottomCtas: [],
  }),

  // ─── Platform-Level ────────────────────────────────────────────────────────

  "data-residency": createUseCasePage({
    name: "Data Residency & Compliance",
    slug: "data-residency",
    path: "/solutions/use-case/data-residency",
    template: "useCase",
    seo: {
      title:
        "Data Residency & DPDP Compliance for Cloud Workspaces | Neverinstall",
      description:
        "Deploy workspaces on your infrastructure — OCI, AWS, Azure, on-prem, or air-gapped. No data leaves your boundary. Built for DPDP Act and RBI compliance.",
    },
    summary:
      "Workspace delivery that satisfies DPDP Act, RBI data localization, and enterprise data residency requirements across any deployment model.",
    hero: {
      eyebrow: "Use Case",
      title: "Your data never leaves your boundary",
      subtitle:
        "Neverinstall deploys on your infrastructure — OCI, AWS, Azure, GCP, on-prem, or air-gapped — so data never crosses a border you have not approved. Purpose-built for DPDP Act compliance, RBI data localization mandates, and enterprise data sovereignty requirements.",
      metric: "Any cloud. Any region. Full data control.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support data residency requirements?",
      "Neverinstall runs on the infrastructure you control — OCI, AWS, Azure, GCP, private cloud, or on-prem — with no data passing through Neverinstall-managed systems. For organizations under DPDP Act obligations, RBI data localization rules, or enterprise residency policies, this means the workspace platform itself does not create a compliance gap."
    ),
    sections: [
      gridSection({
        title: "The regulatory drivers",
        description:
          "Data residency is no longer optional in regulated industries. The regulatory pressure is compounding.",
        blocks: [
          {
            title: "DPDP Act",
            description:
              "India's Digital Personal Data Protection Act creates data localization obligations for personal data processing across sectors.",
          },
          {
            title: "RBI data localization",
            description:
              "The Reserve Bank of India requires payment system data to be stored exclusively in India, with no mirroring outside the country.",
          },
          {
            title: "Enterprise data sovereignty",
            description:
              "Global enterprises face board-level requirements to keep sensitive IP, financial data, and customer records within specific jurisdictions.",
          },
        ],
      }),
      statsSection({
        title: "Three deployment models — all data-sovereign",
        description:
          "Neverinstall does not require a managed cloud. You choose the deployment model that satisfies your residency requirements.",
        items: [
          {
            label: "Customer-owned cloud",
            value: "AWS, Azure, GCP, OCI",
            detail:
              "Deploy Neverinstall on your existing cloud tenancy. Data stays in your account, your region, and under your policies.",
          },
          {
            label: "Private cloud",
            value: "On-prem or co-location",
            detail:
              "Run the full workspace platform inside your own data center with no dependency on any public cloud service.",
          },
          {
            label: "Air-gapped deployment",
            value: "Disconnected environments",
            detail:
              "For defense, government, and critical infrastructure use cases requiring complete network isolation.",
          },
        ],
      }),
      gridSection({
        title: "How residency applies across both work modes",
        description:
          "Data residency is a platform-level property — it applies to both Desktop Workspaces and Secure Browser Workspaces from the same deployment.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces",
            description:
              "Windows and Linux desktops run entirely within your infrastructure boundary. User files, applications, and session data never leave the deployment region.",
          },
          {
            title: "Secure Browser Workspaces",
            description:
              "Browser sessions are isolated within your infrastructure. Web content and enterprise application data are rendered and discarded inside the boundary, not on the endpoint.",
          },
        ],
      }),
      checklistSection({
        title: "Does your organization need sovereign workspace deployment?",
        description:
          "Data residency requirements should be addressed before deployment architecture is finalized.",
        items: [
          "Organization subject to DPDP Act or RBI data localization requirements",
          "BFSI, healthcare, or government sector with sector-specific data handling rules",
          "Multi-national enterprise with jurisdiction-specific data sovereignty policies",
          "Existing cloud commitment to a specific provider or region for compliance purposes",
          "Air-gap or disconnected deployment requirement for security or operational reasons",
          "Third-party or contractor access where data must not leave the sovereign boundary",
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "Windows and Linux cloud desktops that run entirely within your data residency boundary.",
        "/products/daas"
      ),
      relatedLink(
        "Secure Enterprise Browser",
        "Browser sessions isolated within your infrastructure for teams that work primarily in web applications.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Privileged User Access",
        "Session recording and audit trails for regulated privileged access, all within your sovereign boundary.",
        "/solutions/use-case/privileged-user-access"
      ),
    ],
    faq: [
      {
        question:
          "Does Neverinstall store or process any customer data in its own infrastructure?",
        answer:
          "No. The Neverinstall platform runs entirely within the customer's chosen infrastructure. There is no data path through Neverinstall-managed systems, which is what makes it appropriate for DPDP, RBI, and enterprise sovereignty requirements.",
      },
      {
        question:
          "Can we start in the cloud and move to on-prem later if residency requirements change?",
        answer:
          "Yes. The platform architecture is deployment-agnostic. Customers can begin on a public cloud tenancy and migrate to on-prem or a different cloud provider without re-architecting the workspace layer.",
      },
      {
        question:
          "Which cloud providers and regions are supported?",
        answer:
          "Neverinstall deploys on AWS, Azure, GCP, and OCI in any region those providers offer, as well as on private cloud and on-prem infrastructure including co-location facilities and air-gapped environments. Indovance runs on Yotta/OCI infrastructure in India. The deployment region is your choice.",
      },
    ],
    bottomCtas: [],
  }),
}
