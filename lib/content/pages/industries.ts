import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  defaultBottomCtas,
  demoCta,
  gridSection,
  relatedLink,
  statsSection,
  tcoCta,
} from "@/lib/content/shared"

function industryPage(page: ContentPage): ContentPage {
  return {
    ...page,
    template: "industry",
    bottomCtas: defaultBottomCtas("industry"),
  }
}

export const industryPages: Record<string, ContentPage> = {
  "financial-services": industryPage({
    name: "Financial Services",
    slug: "financial-services",
    path: "/solutions/industry/financial-services",
    template: "industry",
    seo: {
      title:
        "AI Infrastructure & Secure Workspaces for Financial Services - Neverinstall",
      description:
        "Secure browser, DaaS, and sovereign AI infrastructure patterns for banks, insurers, fintechs, and regulated financial teams.",
    },
    summary:
      "Regulated workspace and sovereign AI infrastructure narrative for BFSI buyers.",
    hero: {
      eyebrow: "Industry",
      title:
        "Secure access for regulated work. Without slowing the business down.",
      subtitle:
        "Support employees, contractors, and regulated AI workloads with centralized control, strong auditability, and cleaner data boundaries.",
      metric: "Endpoint risk becomes regulatory risk",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit financial services?",
      "Neverinstall gives financial institutions a controlled environment for employee, contractor, and increasingly AI-driven workflows while reducing endpoint exposure, improving auditability, and supporting regional data requirements."
    ),
    sections: [
      gridSection({
        title: "What the industry needs",
        description:
          "Connect workforce security, third-party risk, and sovereign AI into one operating model.",
        blocks: [
          {
            title: "Controlled user access",
            description:
              "Banks and fintechs need stronger control over employees, vendors, and outsourced teams.",
          },
          {
            title: "Regional data handling",
            description:
              "Cross-border operations create residency and regulatory pressure.",
          },
          {
            title: "AI governance is rising",
            description:
              "Risk models and inference workflows increasingly require the same control posture as traditional workloads.",
          },
        ],
      }),
      gridSection({
        title: "Relevant product fit",
        description:
          "Financial services is one of the clearest examples of the three-product platform story.",
        columns: 3,
        blocks: [
          {
            title: "Secure Browser",
            description:
              "Protect browser-based access, contractors, and unmanaged endpoints.",
          },
          {
            title: "DaaS",
            description:
              "Standardize secure workspaces for employees and third parties.",
          },
          {
            title: "Sovereign HCI",
            description:
              "Extend the same control posture to sovereign AI inference and high-control infrastructure.",
          },
        ],
      }),
      statsSection({
        title: "Regional credibility anchors",
        description:
          "This vertical benefits from explicit regulatory context rather than generic compliance language.",
        items: [
          {
            label: "India",
            value: "DPDP + RBI context",
            detail:
              "Use residency, resilience, and third-party control language.",
          },
          {
            label: "Singapore",
            value: "MAS TRM + PDPA",
            detail:
              "Tie platform controls to operational resilience and access governance.",
          },
          {
            label: "US / UK / AU",
            value: "GLBA, NYDFS, FCA, APRA",
            detail:
              "Frame Neverinstall as a cleaner control environment for regulated operations.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure BYOD",
        "See the endpoint-control side of the regulated access story.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "AI Inference Platform",
        "Route AI infrastructure buyers to the sovereign inference narrative.",
        "/solutions/use-case/ai-inference-platform"
      ),
      relatedLink(
        "Trust Center",
        "Review the security, privacy, and compliance posture behind the BFSI story.",
        "/security"
      ),
    ],
    faq: [
      {
        question: "Does this page cover both workforce and AI use cases?",
        answer:
          "Yes. Financial services is a core segment where Secure Browser, DaaS, and Sovereign HCI are evaluated together rather than as isolated products.",
      },
    ],
    bottomCtas: [],
  }),
  "it-services": industryPage({
    name: "IT Services",
    slug: "it-services",
    path: "/solutions/industry/it-services",
    template: "industry",
    seo: {
      title: "Secure Developer Workspaces for IT Services - Neverinstall",
      description:
        "Secure developer and delivery environments for IT services teams working across clients, contractors, and distributed engineering organizations.",
    },
    summary:
      "Developer-heavy services narrative for workspace delivery and code control.",
    hero: {
      eyebrow: "Industry",
      title: "Ship code, not laptops.",
      subtitle:
        "Standardize secure developer environments across employees, contractors, and client-facing delivery teams without slowing onboarding or exposing code broadly.",
      metric: "Developer onboarding without device drag",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why is Neverinstall a fit for IT services?",
      "Neverinstall helps IT services firms standardize developer environments, reduce contractor risk, and deliver client work without tying productivity to hardware procurement or fragile local setups."
    ),
    sections: [
      gridSection({
        title: "What services firms struggle with",
        description:
          "The industry mixes fast onboarding, client security expectations, and distributed engineering.",
        blocks: [
          {
            title: "Environment inconsistency",
            description:
              "Projects lose time when every team starts from a slightly different local machine.",
          },
          {
            title: "Contractor-heavy delivery",
            description:
              "External developers and offshore teams increase code and access risk.",
          },
          {
            title: "Procurement bottlenecks",
            description:
              "High-spec laptops and secure setup flows slow client-facing delivery.",
          },
        ],
      }),
      gridSection({
        title: "Best product fit",
        description:
          "This vertical is a strong DaaS entry point with security and HCI expansion potential.",
        columns: 3,
        blocks: [
          {
            title: "DaaS",
            description:
              "Primary fit for workspace delivery and developer onboarding.",
          },
          {
            title: "Secure Browser",
            description:
              "Useful for lighter contractor and vendor access paths.",
          },
          {
            title: "Sovereign HCI",
            description:
              "Future fit for firms building higher-order AI platform services.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Developer Workspaces",
        "See the most direct use-case page for services engineering teams.",
        "/solutions/use-case/developer-workspaces"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Add stronger control for short-term or third-party contributors.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Desktop as a Service",
        "Review the product page behind the services delivery story.",
        "/products/daas"
      ),
    ],
    faq: [
      {
        question: "Is this industry page mostly about developers?",
        answer:
          "Yes. That is the clearest story in the revamp source material, and it is one of the strongest reasons for IT services firms to adopt Neverinstall quickly.",
      },
    ],
    bottomCtas: [],
  }),
  "bpo-call-centers": industryPage({
    name: "BPO & Call Centers",
    slug: "bpo-call-centers",
    path: "/solutions/industry/bpo-call-centers",
    template: "industry",
    seo: {
      title: "Secure Workspaces for BPO & Call Centers - Neverinstall",
      description:
        "Scale secure agent environments for BPO and contact center operations with clean shift handovers and lower device overhead.",
    },
    summary:
      "High-volume shift-based workspace delivery for contact center operations.",
    hero: {
      eyebrow: "Industry",
      title: "Scale seats instantly. Keep every session secure.",
      subtitle:
        "Support thousands of agents with clean shift resets, centralized controls, and lower hardware overhead across distributed operations.",
      metric: "Shift-based workspaces at scale",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit BPO and call center operations?",
      "Neverinstall gives high-volume operations a cleaner workspace model with fast onboarding, shift-based reset patterns, and centralized controls that reduce data leakage risk across large agent populations."
    ),
    sections: [
      gridSection({
        title: "Operational pain points",
        description:
          "The contact-center model amplifies cost, support, and data handling issues.",
        blocks: [
          {
            title: "Seat churn",
            description:
              "New agents and changing programs create nonstop provisioning demand.",
          },
          {
            title: "Shift handover risk",
            description:
              "Shared or reused devices increase spillover risk between users.",
          },
          {
            title: "Legacy VDI drag",
            description:
              "Older stacks add latency, cost, and operational burden at scale.",
          },
        ],
      }),
      gridSection({
        title: "Why the Neverinstall model fits",
        description:
          "The clean-room reset pattern is especially compelling in BPO and call center environments.",
        columns: 4,
        blocks: [
          {
            title: "Non-persistent sessions",
            description: "Give every shift a clean starting point.",
          },
          {
            title: "Low-end device compatibility",
            description: "Reduce dependence on expensive endpoint hardware.",
          },
          {
            title: "Centralized control",
            description:
              "Enforce download, clipboard, and access restrictions consistently.",
          },
          {
            title: "Usage-based economics",
            description:
              "Align platform cost more closely to active work rather than permanent seat overbuild.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Remote & Hybrid Work",
        "See the broader workspace-delivery motion behind distributed operations.",
        "/solutions/use-case/remote-hybrid-work"
      ),
      relatedLink(
        "Desktop as a Service",
        "Review the product narrative for large workspace fleets.",
        "/products/daas"
      ),
      relatedLink(
        "Business Continuity",
        "Extend the same model into resilience and fallback planning.",
        "/solutions/use-case/business-continuity"
      ),
    ],
    faq: [
      {
        question: "Why is this vertical different from generic remote work?",
        answer:
          "Because shift resets, high seat volumes, and sensitive customer data create a more operationally intense environment than typical hybrid work programs.",
      },
    ],
    bottomCtas: [],
  }),
  "digital-natives": industryPage({
    name: "Digital Natives",
    slug: "digital-natives",
    path: "/solutions/industry/digital-natives",
    template: "industry",
    seo: {
      title: "Secure Workspaces for Digital Natives - Neverinstall",
      description:
        "Support fast-growing digital businesses with secure onboarding, contractor access, and global team infrastructure that does not depend on hardware logistics.",
    },
    summary:
      "Fast-growth team onboarding, contractor access, and distributed scaling narrative.",
    hero: {
      eyebrow: "Industry",
      title: "Scale your team, not your hardware.",
      subtitle:
        "Support global hiring, contractors, and distributed work without letting device logistics define your operating model.",
      metric: "Hire anywhere. Work instantly.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit digital-native companies?",
      "Neverinstall helps fast-growing companies onboard employees and contractors quickly, reduce device logistics, and keep access controlled as teams scale across regions."
    ),
    sections: [
      gridSection({
        title: "Growth-stage pain points",
        description:
          "Fast growth creates infrastructure strain before companies have mature IT footprints everywhere.",
        blocks: [
          {
            title: "Global hiring friction",
            description:
              "Teams expand across countries faster than device and access processes can keep up.",
          },
          {
            title: "Contractor-heavy execution",
            description:
              "Growth often depends on a mix of employees, vendors, and external contributors.",
          },
          {
            title: "Cost sensitivity",
            description:
              "Hardware, shipping, and idle infrastructure create drag at startup and scale-up stages alike.",
          },
        ],
      }),
      statsSection({
        title: "Best-fit product path",
        description:
          "Digital natives often start with workforce enablement and expand from there.",
        items: [
          {
            label: "Primary product",
            value: "DaaS",
            detail: "The fastest path for distributed employee onboarding.",
          },
          {
            label: "Security wedge",
            value: "Secure Browser",
            detail:
              "Use it where full desktops are unnecessary or unmanaged access is the main issue.",
          },
          {
            label: "Future expansion",
            value: "AI-Native / HCI",
            detail:
              "As the company builds internal AI platform needs, Sovereign HCI becomes relevant.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Remote & Hybrid Work",
        "See the broad workforce delivery motion.",
        "/solutions/use-case/remote-hybrid-work"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Add strong third-party controls for external contributors.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "AI-Native Companies",
        "Explore the deeper infrastructure story for AI-heavy teams.",
        "/solutions/industry/ai-native"
      ),
    ],
    faq: [
      {
        question: "Why differentiate digital natives from AI-native companies?",
        answer:
          "Digital natives describes the broader SaaS and startup audience, while AI-native companies are a narrower infrastructure-heavy segment that maps more directly to Sovereign HCI.",
      },
    ],
    bottomCtas: [],
  }),
  healthcare: industryPage({
    name: "Healthcare",
    slug: "healthcare",
    path: "/solutions/industry/healthcare",
    template: "industry",
    seo: {
      title: "Secure Workspaces & Sovereign AI for Healthcare - Neverinstall",
      description:
        "Secure clinician access, resilient workspaces, and controlled AI infrastructure patterns for healthcare organizations handling sensitive patient data.",
    },
    summary:
      "Clinical mobility, patient data control, and emerging healthcare AI infrastructure narrative.",
    hero: {
      eyebrow: "Industry",
      title: "Secure access to patient data, wherever care happens.",
      subtitle:
        "Support clinicians, staff, and healthcare AI workloads with centralized control, strong auditability, and resilient workspace access.",
      metric: "Patient data stays controlled",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit healthcare?",
      "Neverinstall helps healthcare organizations centralize access to sensitive systems, reduce endpoint data exposure, and extend the same control model into resilience and emerging on-prem AI workflows."
    ),
    sections: [
      gridSection({
        title: "Healthcare access challenges",
        description:
          "Clinical work is mobile, time-sensitive, and deeply data-sensitive.",
        blocks: [
          {
            title: "Shared and unmanaged devices",
            description:
              "Clinicians often move across terminals and locations faster than traditional security models can follow.",
          },
          {
            title: "Resilience pressure",
            description:
              "Ransomware and outages directly affect care delivery, not just office productivity.",
          },
          {
            title: "Emerging AI governance",
            description:
              "Healthcare organizations increasingly want controlled environments for medical AI inference and sensitive data handling.",
          },
        ],
      }),
      gridSection({
        title: "Product fit",
        description:
          "Healthcare needs both immediate workspace control and a path to more sovereign infrastructure.",
        columns: 3,
        blocks: [
          {
            title: "DaaS",
            description:
              "Support clinical mobility and controlled workstation access.",
          },
          {
            title: "Secure Browser",
            description:
              "Protect browser-centric access on shared or lighter endpoints.",
          },
          {
            title: "Sovereign HCI",
            description:
              "Support on-prem or high-control AI inference patterns for sensitive healthcare workloads.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Business Continuity",
        "See how the platform supports resilient operations during disruption.",
        "/solutions/use-case/business-continuity"
      ),
      relatedLink(
        "AI Inference Platform",
        "Explore the healthcare-relevant sovereign inference story.",
        "/solutions/use-case/ai-inference-platform"
      ),
      relatedLink(
        "Trust Center",
        "Review security, privacy, and compliance posture for sensitive workloads.",
        "/security"
      ),
    ],
    faq: [
      {
        question: "Why mention AI on a healthcare page?",
        answer:
          "Healthcare teams increasingly evaluate controlled medical AI and inference workflows alongside workforce access, especially in regulated or on-prem environments.",
      },
    ],
    bottomCtas: [],
  }),
  "aec-engineering": industryPage({
    name: "AEC / Engineering",
    slug: "aec-engineering",
    path: "/solutions/industry/aec-engineering",
    template: "industry",
    seo: {
      title: "GPU Workspaces for AEC & Engineering - Neverinstall",
      description:
        "Deliver secure GPU-backed design workspaces for architecture, engineering, and construction teams without workstation lock-in.",
    },
    summary:
      "Design and engineering workloads delivered through GPU-backed cloud workspaces.",
    hero: {
      eyebrow: "Industry",
      title: "Run heavy design workloads. Anywhere.",
      subtitle:
        "Support architects and engineers with GPU-backed workspaces for modeling, rendering, and collaboration without tying work to fixed hardware.",
      metric: "Heavy workloads. No heavy hardware.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit AEC and engineering teams?",
      "Neverinstall gives AEC and engineering teams GPU-backed cloud workspaces so they can run demanding design tools from more flexible devices while keeping models and IP inside a controlled environment."
    ),
    sections: [
      gridSection({
        title: "Why this vertical maps cleanly",
        description:
          "AEC combines high-performance computing needs with sensitive design IP and distributed collaboration.",
        blocks: [
          {
            title: "Expensive workstations",
            description:
              "Design-heavy teams often overbuy hardware to guarantee local performance.",
          },
          {
            title: "Site and office mobility",
            description:
              "Users need the same environment across job sites, offices, and home setups.",
          },
          {
            title: "IP protection",
            description:
              "Design files and models should stay inside controlled environments instead of unmanaged devices.",
          },
        ],
      }),
      gridSection({
        title: "Best-fit product path",
        description:
          "This is primarily a GPU-enabled workspace story with a path into deeper infrastructure where needed.",
        columns: 3,
        blocks: [
          {
            title: "DaaS",
            description:
              "Primary product for GPU-backed design workspace delivery.",
          },
          {
            title: "Secure Browser",
            description:
              "Complementary for lighter access and collaborator workflows.",
          },
          {
            title: "Sovereign HCI",
            description:
              "A future path for teams with deeper internal AI or acceleration infrastructure needs.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "GPU / High-Performance",
        "See the direct use-case page for heavier workspace delivery.",
        "/solutions/use-case/gpu-high-performance"
      ),
      relatedLink(
        "Desktop as a Service",
        "Review the product page behind design workspace delivery.",
        "/products/daas"
      ),
      relatedLink(
        "Developer Workspaces",
        "See a similar motion for engineering software teams.",
        "/solutions/use-case/developer-workspaces"
      ),
    ],
    faq: [
      {
        question: "Is this page focused on workspaces or infrastructure?",
        answer:
          "Primarily workspaces. It leads with delivered compute for end users and links to Sovereign HCI when buyers shift into platform orchestration.",
      },
    ],
    bottomCtas: [],
  }),
  "legal-professional-services": industryPage({
    name: "Legal & Professional Services",
    slug: "legal-professional-services",
    path: "/solutions/industry/legal-professional-services",
    template: "industry",
    seo: {
      title:
        "Secure Workspaces for Legal & Professional Services - Neverinstall",
      description:
        "Protect client confidentiality with matter-based workspace isolation, controlled third-party access, and stronger document governance.",
    },
    summary:
      "Matter-based workspace control for client-sensitive professional services.",
    hero: {
      eyebrow: "Industry",
      title: "Work on sensitive matters, without exposing them.",
      subtitle:
        "Support lawyers, advisors, and external collaborators in controlled matter-based environments where documents stay inside the workspace boundary.",
      metric: "One workspace per matter",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit legal and professional services?",
      "Neverinstall helps legal and professional services teams isolate sensitive work by matter or client, reduce data movement risk, and govern external collaboration more cleanly."
    ),
    sections: [
      gridSection({
        title: "Why this vertical responds well",
        description:
          "Confidentiality and external collaboration make control boundaries especially visible here.",
        blocks: [
          {
            title: "Client confidentiality",
            description:
              "Sensitive documents often move across too many unmanaged devices and tools.",
          },
          {
            title: "Matter-based separation",
            description:
              "Teams need cleaner isolation across clients and projects.",
          },
          {
            title: "External collaborators",
            description:
              "Outside counsel, consultants, and partners increase governance complexity.",
          },
        ],
      }),
      gridSection({
        title: "Product fit",
        description:
          "This industry combines secure access control with confidential workspace delivery.",
        columns: 3,
        blocks: [
          {
            title: "Secure Browser",
            description:
              "Useful for web-based collaboration and document system access.",
          },
          {
            title: "DaaS",
            description:
              "Primary fit for matter-based environments and fuller document workflows.",
          },
          {
            title: "Trust Center",
            description:
              "Important supporting proof because legal buyers respond strongly to governance posture.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Contractor & Vendor Access",
        "See a closely related third-party access motion.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Secure Browser",
        "Review browser-led control for lighter legal workflows.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Trust Center",
        "Review privacy, compliance, and policy materials.",
        "/security"
      ),
    ],
    faq: [
      {
        question: "Why use matter-based language on this page?",
        answer:
          "Because it mirrors how legal teams naturally organize sensitive work and makes the isolation model easier for buyers to understand quickly.",
      },
    ],
    bottomCtas: [],
  }),
  government: industryPage({
    name: "Government",
    slug: "government",
    path: "/solutions/industry/government",
    template: "industry",
    seo: {
      title: "Secure Workspaces for Government - Neverinstall",
      description:
        "Secure workspace access for government teams with centralized control, data sovereignty support, and resilience-focused operations.",
    },
    summary:
      "Legacy government route preserved for compatibility while guiding buyers to the expanded Government & Defense narrative.",
    hero: {
      eyebrow: "Industry",
      title: "Secure access to government systems, without exposing data.",
      subtitle:
        "Support public-sector access, resilience, and data sovereignty with centralized control and reduced endpoint risk.",
      metric: "Public-sector access with stronger control",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "What is the purpose of the `/government` page?",
      "The legacy government route preserves the original URL while routing public-sector buyers into the newer Government & Defense narrative and the broader sovereign infrastructure story."
    ),
    sections: [
      gridSection({
        title: "Compatibility route",
        description:
          "This route remains available for continuity while the broader narrative lives on Government & Defense.",
        blocks: [
          {
            title: "Public-sector access",
            description: "Secure access for distributed users and agencies.",
          },
          {
            title: "Sovereignty",
            description: "Keep data within jurisdictional boundaries.",
          },
          {
            title: "Resilience",
            description: "Maintain controlled operations during disruption.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Government & Defense",
        "See the expanded sovereign and defense-oriented industry page.",
        "/solutions/industry/government-defense"
      ),
      relatedLink(
        "Sovereign HCI",
        "Review the flagship infrastructure product for sovereign deployments.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "Trust Center",
        "Review security and compliance posture.",
        "/security"
      ),
    ],
    faq: [
      {
        question:
          "Should public-sector buyers use this page or Government & Defense?",
        answer:
          "Government & Defense is the primary destination for new evaluations, while this route preserves continuity for existing links.",
      },
    ],
    bottomCtas: [],
  }),
  "government-defense": industryPage({
    name: "Government & Defense",
    slug: "government-defense",
    path: "/solutions/industry/government-defense",
    template: "industry",
    seo: {
      title: "Government & Defense AI Infrastructure - Neverinstall",
      description:
        "Sovereign AI infrastructure, secure workspaces, and high-control deployment patterns for government and defense organizations.",
    },
    summary:
      "Primary public-sector industry page for sovereign infrastructure and controlled operations.",
    hero: {
      eyebrow: "Industry",
      title:
        "Sovereign infrastructure for high-control public-sector environments.",
      subtitle:
        "Support secure work, data sovereignty, and controlled AI infrastructure for agencies and defense-adjacent teams that cannot accept vendor lock-in or jurisdictional ambiguity.",
      metric: "Sovereignty-first deployment posture",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit government and defense environments?",
      "Neverinstall gives public-sector organizations a sovereignty-first platform story that combines secure user access, centralized policy, and a path to controlled AI infrastructure in high-assurance environments."
    ),
    sections: [
      gridSection({
        title: "Why this page matters strategically",
        description:
          "Government and defense is one of the strongest vertical expressions of the new Sovereign HCI positioning.",
        blocks: [
          {
            title: "Data sovereignty",
            description:
              "Public-sector teams need tight control over where workloads and data live.",
          },
          {
            title: "Operational resilience",
            description:
              "Continuity and recoverability matter alongside security.",
          },
          {
            title: "AI infrastructure control",
            description:
              "High-assurance buyers need a credible on-prem and air-gap ready infrastructure story.",
          },
        ],
      }),
      gridSection({
        title: "Product fit",
        description:
          "This vertical spans both workforce access and deeper infrastructure requirements.",
        columns: 3,
        blocks: [
          {
            title: "Secure Browser",
            description:
              "Use for controlled browser access on unmanaged or distributed endpoints.",
          },
          {
            title: "DaaS",
            description:
              "Use for secure workspace delivery across agencies, teams, and contractors.",
          },
          {
            title: "Sovereign HCI",
            description:
              "Use for sovereign AI infrastructure, acceleration, and high-control deployment.",
          },
        ],
      }),
      statsSection({
        title: "Why buyers care",
        description:
          "Sovereignty-led messaging with practical control, compliance, and resilience outcomes.",
        items: [
          {
            label: "Control priority",
            value: "Jurisdiction + access",
            detail:
              "Data location and policy control are as important as performance.",
          },
          {
            label: "Expansion path",
            value: "Workspaces to AI infra",
            detail:
              "Show how one platform supports both secure user access and infrastructure evolution.",
          },
          {
            label: "Core differentiator",
            value: "Sovereign architecture",
            detail:
              "The strongest wedge is controlled deployment without single-vendor lock-in.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Sovereign HCI",
        "See the flagship sovereign AI infrastructure product page.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "AI Inference Platform",
        "Explore the use-case page for sovereign model serving.",
        "/solutions/use-case/ai-inference-platform"
      ),
      relatedLink(
        "Compare vs VMware Private AI",
        "Position Neverinstall against legacy private AI stack buyers.",
        "/compare/vs-vmware-private-ai"
      ),
    ],
    faq: [
      {
        question:
          "Why is Government & Defense separate from the original Government page?",
        answer:
          "It gives public-sector buyers a clearer sovereignty and AI infrastructure narrative while keeping the original route compatible.",
      },
    ],
    bottomCtas: [],
  }),
  manufacturing: industryPage({
    name: "Manufacturing & Industrial",
    slug: "manufacturing",
    path: "/solutions/industry/manufacturing",
    template: "industry",
    seo: {
      title: "Manufacturing & Industrial AI Infrastructure - Neverinstall",
      description:
        "Controlled workspaces and sovereign AI infrastructure patterns for manufacturing, industrial data, and edge-adjacent operations.",
    },
    summary:
      "Industrial and manufacturing vertical for distributed operations and sovereign AI.",
    hero: {
      eyebrow: "Industry",
      title: "Bring secure access and industrial AI under one control plane.",
      subtitle:
        "Support distributed engineering, plant-adjacent operations, and emerging inference workloads with stronger control over data, access, and infrastructure placement.",
      metric: "Industrial control with modern delivery",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit manufacturing and industrial teams?",
      "Neverinstall helps industrial organizations centralize sensitive workloads, support distributed engineering access, and build a stronger path toward controlled on-prem or edge-adjacent AI operations."
    ),
    sections: [
      gridSection({
        title: "Why this vertical exists in the new IA",
        description:
          "Manufacturing extends the sovereignty and distributed-compute narrative into industrial environments.",
        blocks: [
          {
            title: "Distributed engineering access",
            description:
              "Teams need controlled access across sites, plants, and external partners.",
          },
          {
            title: "Sensitive operational data",
            description:
              "Industrial data often cannot be treated like generic SaaS data.",
          },
          {
            title: "Emerging AI at the edge",
            description:
              "Inference and computer vision use cases increasingly need controlled local infrastructure options.",
          },
        ],
      }),
      gridSection({
        title: "Product fit",
        description:
          "Manufacturing is a bridge vertical between traditional workspaces and sovereign AI infrastructure.",
        columns: 3,
        blocks: [
          {
            title: "DaaS",
            description:
              "Support engineering and operations users with controlled workspaces.",
          },
          {
            title: "Secure Browser",
            description:
              "Protect lighter access paths for distributed and external users.",
          },
          {
            title: "Sovereign HCI",
            description:
              "Support higher-control industrial inference and acceleration needs.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "GPU / High-Performance",
        "See the heavier compute use case that often appears in industrial environments.",
        "/solutions/use-case/gpu-high-performance"
      ),
      relatedLink(
        "Sovereign HCI",
        "Explore the platform product for industrial AI infrastructure.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "AI Inference Platform",
        "Connect the vertical story to enterprise inference operations.",
        "/solutions/use-case/ai-inference-platform"
      ),
    ],
    faq: [
      {
        question: "Is this page launch critical?",
        answer:
          "Not for day-one launch. It is a Tier 2 page that still improves coverage and keeps IA expansion clean.",
      },
    ],
    bottomCtas: [],
  }),
  "ai-native": industryPage({
    name: "AI-Native Companies",
    slug: "ai-native",
    path: "/solutions/industry/ai-native",
    template: "industry",
    seo: {
      title: "AI Infrastructure for AI-Native Companies - Neverinstall",
      description:
        "Multi-vendor GPU orchestration, inference serving, and controlled AI infrastructure for AI-native companies and ML platform teams.",
    },
    summary:
      "AI-native segment page centered on platform control and accelerator planning.",
    hero: {
      eyebrow: "Industry",
      title: "Build the AI platform you actually want to own.",
      subtitle:
        "Give ML platform teams multi-vendor scheduling, production inference, and a sovereign-friendly control plane instead of stitching together another fragile stack.",
      metric: "Platform-led AI operations",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall fit AI-native companies?",
      "Neverinstall gives AI-native companies a stronger infrastructure control plane for orchestrating accelerators, serving models, and managing platform economics without locking themselves into one vendor's software tax."
    ),
    sections: [
      gridSection({
        title: "Why this segment matters",
        description:
          "AI-native buyers are among the most technically sophisticated audiences on the site.",
        blocks: [
          {
            title: "Accelerator strategy matters",
            description:
              "They feel the pain of lock-in, utilization, and scheduling more acutely than general buyers.",
          },
          {
            title: "Serving is a core competency",
            description:
              "Inference and platform economics are central to the business, not side concerns.",
          },
          {
            title: "Developer-first credibility matters",
            description:
              "The site needs strong technical specificity to earn trust with this audience.",
          },
        ],
      }),
      gridSection({
        title: "Best-fit product path",
        description:
          "This is a Sovereign HCI-led audience with direct ties into the major AI use-case pages.",
        columns: 3,
        blocks: [
          {
            title: "Sovereign HCI",
            description: "Primary product for platform teams and infra buyers.",
          },
          {
            title: "AI Inference Platform",
            description: "Primary use-case page for serving workloads.",
          },
          {
            title: "GPU-as-a-Service",
            description:
              "Primary internal-platform operating model for scarce accelerator pools.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Sovereign HCI",
        "See the flagship product for AI-native infra teams.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "AI Inference Platform",
        "Explore the production serving narrative.",
        "/solutions/use-case/ai-inference-platform"
      ),
      relatedLink(
        "Compare vs NVIDIA AI Enterprise",
        "Review the core displacement motion for AI platform buyers.",
        "/compare/vs-nvidia-ai-enterprise"
      ),
    ],
    faq: [
      {
        question: "Why include AI-native companies as an industry page?",
        answer:
          "It serves ML platform teams, research groups, and AI-heavy buyers whose evaluation paths differ from general enterprise audiences.",
      },
    ],
    bottomCtas: [],
  }),
}
