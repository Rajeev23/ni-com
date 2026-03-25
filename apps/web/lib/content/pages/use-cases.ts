import type { ContentPage } from "@/lib/content/types"

import {
  aiTcoCta,
  answerCapsule,
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
  "remote-hybrid-work": createUseCasePage({
    name: "Remote & Hybrid Work",
    slug: "remote-hybrid-work",
    path: "/solutions/use-case/remote-hybrid-work",
    template: "useCase",
    seo: {
      title: "Remote & Hybrid Work Solution - Neverinstall",
      description:
        "Secure remote and hybrid work without shipping laptops, relying on VPNs, or trusting unmanaged endpoints.",
    },
    summary:
      "Cloud workspaces for remote onboarding, secure access, and lower hardware overhead.",
    hero: {
      eyebrow: "Use Case",
      title: "Stop shipping laptops. Start delivering workspaces.",
      subtitle:
        "Onboard remote employees in minutes with secure cloud workspaces that run on any device and keep data off the endpoint.",
      metric: "From 10 days to minutes",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support remote and hybrid work?",
      "Neverinstall replaces device-heavy remote access models with secure cloud workspaces that can be provisioned quickly, governed centrally, and accessed from almost any endpoint."
    ),
    sections: [
      gridSection({
        title: "What breaks in the old model",
        description:
          "Remote work exposes the cost and fragility of device-first access models.",
        blocks: [
          {
            title: "Slow onboarding",
            description: "Shipping and configuring laptops slows every hire.",
          },
          {
            title: "VPN dependence",
            description:
              "Network-centric access adds friction without solving endpoint risk.",
          },
          {
            title: "Support overhead",
            description:
              "IT spends too much time on setup, troubleshooting, and recovery.",
          },
        ],
      }),
      gridSection({
        title: "Why this use case converts",
        description:
          "The value is immediate, measurable, and easy to validate in a pilot.",
        columns: 4,
        blocks: [
          {
            title: "Fast setup",
            description:
              "Provision work-ready environments in minutes instead of days.",
          },
          {
            title: "Any-device access",
            description:
              "Users work from managed or personal devices without local data sprawl.",
          },
          {
            title: "Central policy",
            description:
              "Control data movement, session behavior, and access centrally.",
          },
          {
            title: "Continuity ready",
            description:
              "Keep work moving when devices or offices become unavailable.",
          },
        ],
      }),
      statsSection({
        title: "Best adjacent pages",
        description:
          "This use case often expands into broader workforce and security journeys.",
        items: [
          {
            label: "Product fit",
            value: "DaaS",
            detail: "The core product surface for this motion.",
          },
          {
            label: "Security bridge",
            value: "Secure Browser",
            detail: "Especially for lighter or browser-centric user groups.",
          },
          {
            label: "Related ICP",
            value: "IT Services / BPO",
            detail: "Two of the strongest operationally similar segments.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "See the core product behind remote workspace delivery.",
        "/products/daas"
      ),
      relatedLink(
        "Secure BYOD",
        "Extend the same model to unmanaged employee devices.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "IT Services",
        "Explore a services-heavy industry version of the same problem.",
        "/solutions/industry/it-services"
      ),
    ],
    faq: [
      {
        question: "Does this use case always require full DaaS?",
        answer:
          "Not always. Teams that only need browser-based workflows may start with Secure Browser, while broader application access and persistent work typically map to DaaS.",
      },
    ],
    bottomCtas: [],
  }),
  "contractor-vendor-access": createUseCasePage({
    name: "Contractor & Vendor Access",
    slug: "contractor-vendor-access",
    path: "/solutions/use-case/contractor-vendor-access",
    template: "useCase",
    seo: {
      title: "Contractor & Vendor Access Solution - Neverinstall",
      description:
        "Provision secure, time-bound workspace access for contractors and vendors without shipping or trusting endpoint devices.",
    },
    summary:
      "Third-party access with central control, fast onboarding, and instant offboarding.",
    hero: {
      eyebrow: "Use Case",
      title: "Onboard in minutes. Offboard instantly.",
      subtitle:
        "Give contractors and vendors secure, time-bound access to controlled workspaces without shipping hardware or trusting their devices.",
      metric: "Third-party access without endpoint trust",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall secure third-party access?",
      "Neverinstall gives contractors and vendors secure, revocable workspace access inside isolated sessions so data stays controlled and access can be turned off instantly when work ends."
    ),
    sections: [
      gridSection({
        title: "Where third-party access creates risk",
        description: "The old model is expensive, slow, and hard to govern.",
        blocks: [
          {
            title: "Hardware for temporary users",
            description:
              "Teams still buy and recover devices for short-term access.",
          },
          {
            title: "Messy offboarding",
            description:
              "Revoking access across tools and endpoints leaves room for gaps.",
          },
          {
            title: "Data on unmanaged devices",
            description:
              "Third-party users often access sensitive systems from devices you do not control.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall changes",
        description:
          "Use central policy and isolated sessions instead of device trust.",
        columns: 4,
        blocks: [
          {
            title: "Fast access creation",
            description:
              "Create time-bound access without procurement or endpoint prep.",
          },
          {
            title: "Instant offboarding",
            description:
              "Turn off the workspace and access path when the engagement ends.",
          },
          {
            title: "Isolated sessions",
            description:
              "Run each user in a clean environment with reduced spillover risk.",
          },
          {
            title: "Audit visibility",
            description:
              "Keep session-level logging for accountability and investigations.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Browser",
        "Use browser-led access for lighter third-party workflows.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Desktop as a Service",
        "Use full workspace delivery when contractors need richer app environments.",
        "/products/daas"
      ),
      relatedLink(
        "Legal & Professional Services",
        "See a confidentiality-heavy version of this pattern.",
        "/solutions/industry/legal-professional-services"
      ),
    ],
    faq: [
      {
        question:
          "Can Neverinstall support short-term vendor projects and large contractor pools?",
        answer:
          "Yes. The model works for small partner cohorts and high-volume contractor onboarding because access is created in software rather than shipped through a hardware process.",
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
      title: "Secure BYOD Solution - Neverinstall",
      description:
        "Enable secure BYOD without forcing MDM, relying on VPNs, or storing data on personal devices.",
    },
    summary:
      "BYOD access without data on personal devices or heavy endpoint management.",
    hero: {
      eyebrow: "Use Case",
      title: "Let employees use any device. Without the risk.",
      subtitle:
        "Keep work inside a controlled session so personal devices stay personal and enterprise data stays protected.",
      metric: "No MDM. No VPN. No compromise.",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall make BYOD safer?",
      "Neverinstall removes local data dependency from the model by keeping work inside controlled sessions, letting teams support BYOD without accepting the usual level of endpoint risk."
    ),
    sections: [
      gridSection({
        title: "Why BYOD becomes a security gap",
        description:
          "The problem is not user preference. It is where the data and control live.",
        blocks: [
          {
            title: "Personal devices are inconsistent",
            description:
              "Patch level, security posture, and shared usage vary widely across endpoints.",
          },
          {
            title: "MDM creates pushback",
            description:
              "Employees often resist invasive controls on personal machines.",
          },
          {
            title: "VPNs do not solve endpoint risk",
            description:
              "Network access does not stop local storage or unsafe data movement.",
          },
        ],
      }),
      gridSection({
        title: "The controlled BYOD model",
        description:
          "Keep access flexible while moving security control into the workspace boundary.",
        columns: 4,
        blocks: [
          {
            title: "No data on the device",
            description:
              "The strongest BYOD improvement is removing the local data problem.",
          },
          {
            title: "Policy-led controls",
            description:
              "Control clipboard, download, printing, and session behavior centrally.",
          },
          {
            title: "Any-device access",
            description:
              "Users can work from personal laptops without a full managed-device project.",
          },
          {
            title: "Full session auditability",
            description:
              "Security teams get clearer visibility than they do with fragmented BYOD tooling.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Enterprise Browser",
        "Start with browser-first access for unmanaged endpoints.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Financial Services",
        "See a regulated-industry version of secure BYOD.",
        "/solutions/industry/financial-services"
      ),
      relatedLink(
        "Remote & Hybrid Work",
        "Expand from BYOD into full remote workspace delivery.",
        "/solutions/use-case/remote-hybrid-work"
      ),
    ],
    faq: [
      {
        question: "Is BYOD only relevant for browser-based work?",
        answer:
          "No. Browser-led access is a strong starting point, but teams can also use full workspaces when users need broader application environments without moving data onto personal devices.",
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
      title: "Developer Workspaces Solution - Neverinstall",
      description:
        "Standardize secure developer environments with fast onboarding, consistent tooling, and cloud-controlled code access.",
    },
    summary:
      "Consistent, controlled developer environments that reduce onboarding time and local machine dependence.",
    hero: {
      eyebrow: "Use Case",
      title: "Local performance. Cloud control.",
      subtitle:
        "Give developers ready-to-code environments with consistent setup, strong code protection, and access from almost any device.",
      metric: "Consistent dev environments in minutes",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why use Neverinstall for developer workspaces?",
      "Neverinstall gives engineering teams consistent environments, faster onboarding, and tighter control over code access without forcing every developer workflow onto a fragile legacy VDI stack."
    ),
    sections: [
      gridSection({
        title: "What slows engineering teams down",
        description:
          "Developer productivity suffers when environments are inconsistent or tied to specific hardware.",
        blocks: [
          {
            title: "Environment drift",
            description:
              "Teams lose time to inconsistent local setups and onboarding issues.",
          },
          {
            title: "Hardware dependence",
            description:
              "High-spec laptops become procurement bottlenecks and support burdens.",
          },
          {
            title: "Code on endpoints",
            description:
              "Distributed engineering raises the risk of source code sprawl across devices.",
          },
        ],
      }),
      gridSection({
        title: "Why the model works for engineering",
        description:
          "Neverinstall gives developers portability without flattening the environment into a generic remote desktop experience.",
        columns: 4,
        blocks: [
          {
            title: "Persistent environments",
            description:
              "Keep setup intact while still avoiding heavy local dependence.",
          },
          {
            title: "Windows and Linux support",
            description:
              "Match real engineering toolchains, not just generic office desktops.",
          },
          {
            title: "Contractor-ready access",
            description:
              "Support external or offshore developers without exposing code broadly.",
          },
          {
            title: "Cloud-controlled code path",
            description:
              "Reduce the spread of sensitive repos, data, and credentials onto endpoints.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "See the product surface that powers richer developer environments.",
        "/products/daas"
      ),
      relatedLink(
        "IT Services",
        "Explore the services-industry version of developer workspace standardization.",
        "/solutions/industry/it-services"
      ),
      relatedLink(
        "GPU / High-Performance",
        "Extend into heavier compute and graphics workloads.",
        "/solutions/use-case/gpu-high-performance"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall replace every local development workflow?",
        answer:
          "It is best used where teams need stronger control, faster onboarding, or centralized environments. Local workflows can still coexist where they make sense, but the page positions Neverinstall as the standard operating path for secure team environments.",
      },
    ],
    bottomCtas: [],
  }),
  "gpu-high-performance": createUseCasePage({
    name: "GPU / High-Performance Workloads",
    slug: "gpu-high-performance",
    path: "/solutions/use-case/gpu-high-performance",
    template: "useCase",
    seo: {
      title: "GPU & High-Performance Workloads Solution - Neverinstall",
      description:
        "Deliver GPU-backed workspaces for CAD, rendering, AI, and compute-heavy workflows without tying users to expensive hardware.",
    },
    summary:
      "GPU-enabled workspace delivery for heavy design, rendering, and compute use cases.",
    hero: {
      eyebrow: "Use Case",
      title: "High-end compute. Zero hardware lock-in.",
      subtitle:
        "Give users access to GPU-backed workspaces from low-end or portable devices while keeping models, code, and data in a controlled environment.",
      metric: "Heavy workloads without heavy hardware",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support GPU and high-performance workloads?",
      "Neverinstall supports GPU-backed workspaces for CAD, rendering, AI, and high-performance workflows so teams can deliver heavy compute from the cloud without tying work to expensive endpoint hardware."
    ),
    sections: [
      gridSection({
        title: "What this page is for",
        description:
          "This page is the bridge between workspace-delivered GPU access and the larger Sovereign HCI AI infrastructure story.",
        blocks: [
          {
            title: "Cloud-delivered GPU workspaces",
            description:
              "Best for designers, engineers, and teams that need heavy apps delivered to users.",
          },
          {
            title: "Centralized files and IP",
            description:
              "Keep models, code, and datasets inside the controlled environment.",
          },
          {
            title: "Flexible scaling",
            description:
              "Match compute to the project instead of buying fixed high-end hardware for every user.",
          },
        ],
      }),
      statsSection({
        title: "Message split to keep clear",
        description:
          "The site needs to separate two related but different GPU stories.",
        items: [
          {
            label: "DaaS GPU story",
            value: "User-facing workspaces",
            detail:
              "CAD, rendering, engineering, and AI-assisted developer environments.",
          },
          {
            label: "HCI GPU story",
            value: "Infrastructure control plane",
            detail:
              "Multi-vendor orchestration, inference serving, and sovereign deployment.",
          },
          {
            label: "Cross-link target",
            value: "Sovereign HCI",
            detail:
              "Use this page to route infrastructure buyers to the flagship HCI narrative.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "See the workspace product behind GPU-enabled desktop delivery.",
        "/products/daas"
      ),
      relatedLink(
        "Sovereign HCI",
        "Route infrastructure buyers to the AI platform story.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "AEC / Engineering",
        "See a CAD and design-heavy industry version of this motion.",
        "/solutions/industry/aec-engineering"
      ),
    ],
    faq: [
      {
        question: "When should a team move from this page to Sovereign HCI?",
        answer:
          "Move to Sovereign HCI when the buyer is evaluating infrastructure orchestration, inference serving, accelerator strategy, or sovereign on-prem deployment rather than end-user workspace delivery.",
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
      title: "Business Continuity Solution - Neverinstall",
      description:
        "Maintain secure operations during outages, ransomware events, and workplace disruptions with cloud workspaces ready to activate quickly.",
    },
    summary:
      "Known-good workspaces for recovery, continuity, and rapid fallback.",
    hero: {
      eyebrow: "Use Case",
      title: "When systems fail, your work does not.",
      subtitle:
        "Switch teams into controlled cloud workspaces during outages, ransomware events, and device failures without rebuilding from scratch.",
      metric: "Outage to operational in minutes",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support business continuity?",
      "Neverinstall gives teams a controlled fallback environment they can activate quickly when offices, devices, or primary systems fail, helping reduce downtime and restore a known-good workspace path."
    ),
    sections: [
      gridSection({
        title: "Why this matters",
        description:
          "Business continuity is one of the clearest moments when centralized work wins over endpoint dependence.",
        blocks: [
          {
            title: "Device failure",
            description:
              "Users cannot work if access depends on a specific laptop or local setup.",
          },
          {
            title: "Office or network disruption",
            description:
              "A physical-site issue should not eliminate the ability to keep work moving.",
          },
          {
            title: "Ransomware or compromise",
            description:
              "Teams need a clean environment that is separate from affected systems.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall changes",
        description:
          "Continuity gets stronger when workspaces are portable and centrally controlled.",
        columns: 4,
        blocks: [
          {
            title: "Known-good environment",
            description:
              "Shift users into controlled workspaces during incidents.",
          },
          {
            title: "No local dependency",
            description:
              "Keep work moving without relying on compromised or unavailable devices.",
          },
          {
            title: "Policy continuity",
            description:
              "Maintain the same access and data controls during recovery.",
          },
          {
            title: "Standby economics",
            description:
              "Use cloud workspaces as a flexible continuity layer rather than duplicated hardware.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Desktop as a Service",
        "See the product behind continuity-ready workspace delivery.",
        "/products/daas"
      ),
      relatedLink(
        "Trust Center",
        "Review the security and resilience posture behind the continuity story.",
        "/security"
      ),
      relatedLink(
        "Healthcare",
        "See a resilience-heavy industry narrative for continuity planning.",
        "/solutions/industry/healthcare"
      ),
    ],
    faq: [
      {
        question: "Is this only for disaster recovery programs?",
        answer:
          "No. It is also relevant for day-to-day resilience planning around outages, device failure, ransomware response, and emergency remote work scenarios.",
      },
    ],
    bottomCtas: [],
  }),
  "ai-inference-platform": createUseCasePage({
    name: "AI Inference Platform",
    slug: "ai-inference-platform",
    path: "/solutions/use-case/ai-inference-platform",
    template: "useCase",
    seo: {
      title: "AI Inference Platform for Enterprises - Neverinstall",
      description:
        "Multi-vendor GPU inference serving with KServe and vLLM, model lifecycle control, and a sovereign deployment path for enterprise AI workloads.",
    },
    summary:
      "Enterprise inference serving across GPU vendors with production controls.",
    hero: {
      eyebrow: "AI Use Case",
      title: "Run enterprise inference without vendor lock-in.",
      subtitle:
        "Serve production AI workloads across NVIDIA, AMD, and Intel with built-in orchestration, model lifecycle control, and sovereign deployment options.",
      metric: "Production inference from day one",
      primaryCta: demoCta,
      secondaryCta: aiTcoCta,
    },
    answerCapsule: answerCapsule(
      "What does Neverinstall provide for AI inference?",
      "Neverinstall provides a multi-vendor inference platform with orchestration, serving, policy control, and sovereign deployment options so enterprises can reach production without building the full stack themselves."
    ),
    sections: [
      gridSection({
        title: "Why inference buyers look for a platform",
        description:
          "Serving models reliably is now an infrastructure problem, not just an MLOps feature.",
        blocks: [
          {
            title: "Accelerator strategy is fragmented",
            description:
              "Teams need flexibility across GPU vendors and deployment environments.",
          },
          {
            title: "Serving needs production controls",
            description:
              "A/B rollout, autoscaling, and lifecycle governance are mandatory for real enterprise inference.",
          },
          {
            title: "Sovereignty is becoming a hard requirement",
            description:
              "More buyers need data and models to stay inside their jurisdiction or environment.",
          },
        ],
      }),
      gridSection({
        title: "Platform fit",
        description:
          "This page is the primary use-case expression of Sovereign HCI.",
        columns: 4,
        blocks: [
          {
            title: "Multi-vendor scheduling",
            description:
              "Route inference workloads across the most suitable accelerator pool.",
          },
          {
            title: "Built-in serving",
            description:
              "Use KServe and vLLM-style serving workflows without building everything yourself.",
          },
          {
            title: "Model lifecycle controls",
            description:
              "Manage rollout, versioning, and operational visibility for production workloads.",
          },
          {
            title: "Sovereign deployment",
            description:
              "Keep models, telemetry, and data paths inside your preferred environment.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Sovereign HCI",
        "See the full product narrative behind the inference platform use case.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "Compare vs NVIDIA AI Enterprise",
        "Review the flagship infrastructure comparison page.",
        "/compare/vs-nvidia-ai-enterprise"
      ),
      relatedLink(
        "AI-Native Companies",
        "See an industry version of this buyer journey.",
        "/solutions/industry/ai-native"
      ),
    ],
    faq: [
      {
        question: "Is this page aimed at application teams or platform teams?",
        answer:
          "Primarily platform and infrastructure teams. The copy is designed to show how Neverinstall reduces the work required to build and operate an enterprise inference layer.",
      },
    ],
    bottomCtas: [],
  }),
  "agentic-ai-infrastructure": createUseCasePage({
    name: "Agentic AI Infrastructure",
    slug: "agentic-ai-infrastructure",
    path: "/solutions/use-case/agentic-ai-infrastructure",
    template: "useCase",
    seo: {
      title: "Agentic AI Infrastructure - Neverinstall",
      description:
        "Run AI agents inside controlled sandboxed environments with policy, auditability, and sovereign deployment options.",
    },
    summary: "Secure execution boundaries for agentic AI workloads.",
    hero: {
      eyebrow: "AI Use Case",
      title: "AI agents need infrastructure, not just models.",
      subtitle:
        "Run agentic workloads inside controlled execution boundaries with auditability, policy enforcement, and faster operationalization.",
      metric: "Safer agent execution paths",
      primaryCta: demoCta,
      secondaryCta: aiTcoCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall's agentic AI infrastructure story?",
      "Neverinstall positions agentic AI as an infrastructure problem, combining isolated execution, observability, and policy control so enterprises can run AI agents more safely in production."
    ),
    sections: [
      gridSection({
        title: "Why agents change the infrastructure conversation",
        description:
          "Agents do more than generate tokens. They execute actions, access tools, and create new safety boundaries.",
        blocks: [
          {
            title: "Execution risk is higher",
            description:
              "Agents can run code, access systems, and trigger workflows that need stronger isolation.",
          },
          {
            title: "Auditability matters",
            description:
              "Security and compliance teams need visibility into what agents touched and why.",
          },
          {
            title: "Cloud-only sandbox vendors are narrow",
            description:
              "Many tools validate the category but do not solve for sovereign or on-prem requirements.",
          },
        ],
      }),
      gridSection({
        title: "What Neverinstall contributes",
        description:
          "The Neverinstall platform brings isolation and operational control into the agentic infrastructure layer.",
        columns: 4,
        blocks: [
          {
            title: "Sandboxed execution",
            description:
              "Use isolated runtime boundaries for higher-control agent tasks.",
          },
          {
            title: "Observability",
            description:
              "Keep audit trails and execution visibility across workloads.",
          },
          {
            title: "Policy control",
            description:
              "Apply governance to how agents run, not just what models they call.",
          },
          {
            title: "Sovereign deployment",
            description:
              "Support on-prem and high-control environments where agentic AI cannot live only in a public cloud.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Sovereign HCI",
        "See the product page behind the agentic AI narrative.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "Platform Technology",
        "Understand the shared primitives that enable sandboxing and control.",
        "/platform"
      ),
      relatedLink(
        "AI-Native Companies",
        "See an industry segment where agentic workflows are likely to appear early.",
        "/solutions/industry/ai-native"
      ),
    ],
    faq: [
      {
        question:
          "Is this page a thought-leadership use case or a productized capability page?",
        answer:
          "It is both. The page should feel forward-looking, but it still needs to show the concrete platform primitives that make the positioning credible.",
      },
    ],
    bottomCtas: [],
  }),
  "gpu-as-a-service": createUseCasePage({
    name: "GPU-as-a-Service",
    slug: "gpu-as-a-service",
    path: "/solutions/use-case/gpu-as-a-service",
    template: "useCase",
    seo: {
      title: "Internal GPU-as-a-Service - Neverinstall",
      description:
        "Create an internal GPU marketplace with quotas, tiers, and multi-vendor scheduling across enterprise accelerator pools.",
    },
    summary:
      "Internal GPU marketplace and chargeback model for enterprise infra teams.",
    hero: {
      eyebrow: "AI Use Case",
      title: "Turn idle accelerator pools into an internal cloud.",
      subtitle:
        "Create a quota-driven internal GPU service with chargeback, prioritization, and multi-vendor scheduling across enterprise teams.",
      metric: "Internal GPU marketplace",
      primaryCta: demoCta,
      secondaryCta: aiTcoCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support internal GPU-as-a-service?",
      "Neverinstall helps enterprises create an internal GPU marketplace with quotas, chargeback, and multi-vendor scheduling so accelerator capacity can be allocated like a shared cloud service."
    ),
    sections: [
      gridSection({
        title: "Why enterprises need an internal GPU market",
        description:
          "Accelerators are expensive, scarce, and often underutilized when managed as one-off infrastructure silos.",
        blocks: [
          {
            title: "Low utilization",
            description:
              "Teams reserve hardware that stays idle outside peak windows.",
          },
          {
            title: "No shared priority model",
            description:
              "Infrastructure teams lack a clear way to allocate scarce compute across competing groups.",
          },
          {
            title: "Chargeback is weak",
            description:
              "Without telemetry and governance, finance cannot see where GPU spend is actually going.",
          },
        ],
      }),
      gridSection({
        title: "What the platform provides",
        description:
          "This use case translates HCI capabilities into internal platform economics.",
        columns: 4,
        blocks: [
          {
            title: "Quota and tenancy controls",
            description:
              "Allocate accelerator pools across teams and projects.",
          },
          {
            title: "Priority tiers",
            description:
              "Support preemptible, premium, or reserved workload classes.",
          },
          {
            title: "Vendor choice",
            description:
              "Balance work across available accelerator vendors instead of forcing a single stack.",
          },
          {
            title: "Chargeback visibility",
            description:
              "Track workload usage and tie spend back to teams or business units.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Sovereign HCI",
        "See the underlying control plane for internal GPU service delivery.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "AI Inference Platform",
        "Compare a workload-serving use case with the internal marketplace layer.",
        "/solutions/use-case/ai-inference-platform"
      ),
      relatedLink(
        "AI TCO Calculator",
        "Start the commercial conversation with modeled infrastructure costs.",
        "/ai-tco-calculator"
      ),
    ],
    faq: [
      {
        question: "Is GPU-as-a-service only relevant for AI-native companies?",
        answer:
          "No. It is also relevant for established enterprises building internal platform teams that need to govern scarce accelerator capacity across multiple business units.",
      },
    ],
    bottomCtas: [],
  }),
  "ai-disaster-recovery": createUseCasePage({
    name: "AI Workload Migration & Disaster Recovery",
    slug: "ai-disaster-recovery",
    path: "/solutions/use-case/ai-disaster-recovery",
    template: "useCase",
    seo: {
      title: "AI Workload Migration & Disaster Recovery - Neverinstall",
      description:
        "Improve resilience and workload portability for AI infrastructure with cross-environment migration and recovery planning.",
    },
    summary: "Resilience and migration planning for AI infrastructure.",
    hero: {
      eyebrow: "AI Use Case",
      title: "Keep AI workloads resilient across failures and change.",
      subtitle:
        "Plan for migration, failover, and recovery in AI infrastructure environments where accelerators, models, and serving stacks cannot stay static.",
      metric: "AI resilience planning",
      primaryCta: demoCta,
      secondaryCta: aiTcoCta,
    },
    answerCapsule: answerCapsule(
      "Why does AI infrastructure need its own disaster recovery story?",
      "AI infrastructure recovery is different because it combines accelerator allocation, model serving, and large stateful workloads. Neverinstall positions its platform as a stronger foundation for resilience and migration planning."
    ),
    sections: [
      gridSection({
        title: "What makes AI DR harder",
        description: "Resilience for AI is not just another VM backup story.",
        blocks: [
          {
            title: "Accelerator dependency",
            description:
              "Recovery is constrained by where compatible compute is available.",
          },
          {
            title: "Large models and state",
            description:
              "Serving stacks, weights, and workload state make migration more complex.",
          },
          {
            title: "Operational pressure",
            description:
              "Platform teams need a controlled way to maintain service during outages or transitions.",
          },
        ],
      }),
      gridSection({
        title: "Neverinstall's angle",
        description:
          "The page should keep the story focused on platform resilience rather than promising impossible magic.",
        columns: 4,
        blocks: [
          {
            title: "Controlled migration path",
            description:
              "Move workloads with better policy and orchestration visibility.",
          },
          {
            title: "Shared platform primitives",
            description:
              "Use the same control plane for runtime, storage, and policy decisions.",
          },
          {
            title: "Sovereign deployment options",
            description:
              "Support recovery and portability in high-control environments.",
          },
          {
            title: "Buyer education",
            description:
              "Use the page to establish Neverinstall's authority on a still-emerging category.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Sovereign HCI",
        "See the platform product behind the resilience narrative.",
        "/products/sovereign-hci"
      ),
      relatedLink(
        "Government & Defense",
        "Review a sovereignty-heavy vertical where continuity and control matter deeply.",
        "/solutions/industry/government-defense"
      ),
      relatedLink(
        "Compare vs VMware Private AI",
        "Position Neverinstall against Broadcom-era private AI infrastructure choices.",
        "/compare/vs-vmware-private-ai"
      ),
    ],
    faq: [
      {
        question: "Is this page launch critical?",
        answer:
          "No. It is a roadmap page, but having it in the architecture helps the site scale into the larger AI infrastructure narrative without another IA rewrite.",
      },
    ],
    bottomCtas: [],
  }),
}
