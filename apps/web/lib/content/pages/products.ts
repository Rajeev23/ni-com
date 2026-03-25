import type { ContentPage } from "@/lib/content/types"

import {
  aiTcoCta,
  answerCapsule,
  defaultBottomCtas,
  demoCta,
  gridSection,
  pricingCta,
  relatedLink,
  statsSection,
  tableSection,
  tcoCta,
  trustCta,
} from "@/lib/content/shared"

export const productPages: Record<string, ContentPage> = {
  "secure-browser": {
    name: "Secure Enterprise Browser",
    slug: "secure-browser",
    path: "/products/secure-browser",
    template: "product",
    seo: {
      title:
        "Secure Enterprise Browser - Zero-Trust Browsing, No Agent - Neverinstall",
      description:
        "Secure enterprise browser with browser-native isolation, DLP controls, and zero-trust access without managing another endpoint agent.",
    },
    summary:
      "Zero-trust browsing with browser-native DLP, session isolation, and policy controls for unmanaged devices, contractors, and BYOD.",
    hero: {
      eyebrow: "Neverinstall Secure Browser",
      title: "Secure enterprise browsing without another agent",
      subtitle:
        "Browser-native isolation, download controls, and policy-first access for employees, contractors, and unmanaged devices.",
      supportingCopy:
        "Use the browser people already understand, while moving policy, inspection, and data protection into a controlled execution boundary.",
      metric: "Zero-trust browsing. No agent required.",
      primaryCta: demoCta,
      secondaryCta: pricingCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall Secure Browser?",
      "Neverinstall Secure Browser is a browser-delivered secure access layer that keeps enterprise activity inside a controlled environment, enforces browser DLP policies, and eliminates the need to trust unmanaged endpoints."
    ),
    sections: [
      gridSection({
        title: "Why teams replace legacy browser security",
        description:
          "Most browser security stacks bolt policy onto endpoints, extensions, and VPN-era controls that are hard to scale cleanly.",
        blocks: [
          {
            title: "Too many agents and extensions",
            description:
              "Security teams end up layering endpoint controls, browser extensions, RBI, and network policy just to secure common web workflows.",
          },
          {
            title: "Unmanaged devices stay risky",
            description:
              "Contractors, BYOD users, and third parties still access sensitive data from devices you cannot fully trust or govern.",
          },
          {
            title: "Policies fragment across tools",
            description:
              "Clipboard, download, session, and access policies are spread across products, which makes audits and operations messy.",
          },
        ],
      }),
      gridSection({
        title: "Capability pillars",
        description:
          "The secure browser product is designed to reduce endpoint trust while keeping rollout simple.",
        columns: 4,
        blocks: [
          {
            title: "Session isolation by default",
            description:
              "Run work inside isolated browser sessions so sensitive activity stays separate from the local endpoint.",
          },
          {
            title: "Browser-native DLP controls",
            description:
              "Restrict downloads, printing, clipboard, USB, and file movement with centrally managed policies.",
          },
          {
            title: "Zero-trust access",
            description:
              "Authenticate every session and enforce access based on identity, role, and policy instead of network location.",
          },
          {
            title: "Fast rollout for unmanaged devices",
            description:
              "Support contractors and BYOD without shipping hardware or asking IT to manage another full endpoint stack.",
          },
        ],
      }),
      gridSection({
        title: "How the browser product fits the platform",
        description:
          "The browser is one of three product surfaces built on the same underlying control plane.",
        blocks: [
          {
            title: "Central policy and identity",
            description:
              "Access policy, role mapping, and audit controls are managed centrally instead of configured per device.",
          },
          {
            title: "Isolation boundary for web work",
            description:
              "User activity runs inside an isolated runtime with logging, policy enforcement, and reduced local data exposure.",
          },
          {
            title: "Cross-product expansion path",
            description:
              "Teams can start with browser security, then extend into secure workspaces or sovereign infrastructure as use cases grow.",
          },
        ],
      }),
      tableSection({
        title: "Progressive disclosure for buyers",
        description:
          "Lead with business outcomes, then show the technical controls that make them possible.",
        columns: ["Layer", "Outcome", "Technical proof"],
        rows: [
          {
            label: "Security teams",
            values: [
              "Reduce data movement risk on unmanaged devices.",
              "Clipboard, download, printing, and session controls enforced centrally.",
            ],
          },
          {
            label: "IT operations",
            values: [
              "Roll out secure access faster with less endpoint overhead.",
              "No additional agent lifecycle to deploy, patch, or troubleshoot.",
            ],
          },
          {
            label: "Business users",
            values: [
              "Keep familiar browser workflows without heavy friction.",
              "Policy sits behind the session, not in a pile of user-side tools.",
            ],
          },
        ],
      }),
      statsSection({
        title: "Best-fit motions",
        description:
          "This product wins where endpoint trust is low and rollout speed matters.",
        items: [
          {
            label: "Primary buyers",
            value: "CISO / IT security",
            detail:
              "Especially where unmanaged or third-party access is growing.",
          },
          {
            label: "Fastest time to value",
            value: "BYOD + contractors",
            detail:
              "The strongest wedge is removing device trust from the equation.",
          },
          {
            label: "Natural expansion",
            value: "DaaS + Trust Center",
            detail:
              "Secure browsing often leads into broader workspace modernization.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure BYOD",
        "See the browser-first path for unmanaged employee devices.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Use secure sessions for third-party users without shipping hardware.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Compare vs Island Browser",
        "Understand the difference between browser-only positioning and the broader platform model.",
        "/compare/vs-island"
      ),
    ],
    faq: [
      {
        question: "When should a team choose the Secure Browser product first?",
        answer:
          "Start with Secure Browser when the immediate problem is protecting web access on unmanaged endpoints, contractors, or BYOD devices without introducing another endpoint agent.",
      },
      {
        question:
          "Does Neverinstall Secure Browser replace every desktop workflow?",
        answer:
          "Not by itself. It handles browser-based and web application access first, and the broader platform can extend into full DaaS or sovereign infrastructure when teams need richer workspace isolation.",
      },
      {
        question:
          "How is it different from bundling browser policy into a SASE stack?",
        answer:
          "The Neverinstall approach is platform-led rather than bundle-led. The browser product stands on its own, but it also shares architecture, policy, and expansion paths with DaaS and Sovereign HCI.",
      },
    ],
    bottomCtas: defaultBottomCtas("product"),
  },
  daas: {
    name: "Desktop as a Service",
    slug: "daas",
    path: "/products/daas",
    template: "product",
    seo: {
      title:
        "Desktop as a Service - Sub-Second Workspace Restore, OCI-Native - Neverinstall",
      description:
        "Cloud-native DaaS with sub-second workspace restore, policy-driven access, Windows and Linux support, and OCI-native flexibility.",
    },
    summary:
      "Secure cloud desktops with sub-second restore, Windows and Linux support, and a rollout model built for remote teams, developers, and GPU-enabled work.",
    hero: {
      eyebrow: "Neverinstall DaaS",
      title: "Cloud desktops built for speed, not legacy VDI drag",
      subtitle:
        "Deliver secure Windows and Linux workspaces with sub-second restore, policy controls, and OCI-native deployment flexibility.",
      supportingCopy:
        "Neverinstall DaaS is designed for teams escaping complex VDI stacks, shipping delays, and slow onboarding while keeping enterprise controls intact.",
      metric: "Sub-second workspace restore",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall DaaS?",
      "Neverinstall DaaS is a cloud-native desktop platform that delivers controlled Windows and Linux workspaces with fast restore, policy-driven access, and a rollout model built for modern distributed teams."
    ),
    sections: [
      gridSection({
        title: "Why teams move off legacy VDI",
        description:
          "Legacy desktop stacks were built for a different operating model: fixed devices, long rollout cycles, and expensive complexity.",
        blocks: [
          {
            title: "Provisioning takes too long",
            description:
              "Shipping devices, imaging laptops, and configuring secure access slows down onboarding and recovery.",
          },
          {
            title: "VDI complexity keeps growing",
            description:
              "Too many teams are still carrying VDI-era infrastructure, licensing overhead, and consultant-heavy change management.",
          },
          {
            title: "Policy and performance trade off",
            description:
              "Older stacks force teams to choose between security, speed, and a usable end-user experience.",
          },
        ],
      }),
      gridSection({
        title: "Capability pillars",
        description:
          "Neverinstall DaaS is designed to simplify the operating model while improving the user experience.",
        columns: 4,
        blocks: [
          {
            title: "Sub-second restore",
            description:
              "Resume workspaces quickly so users get back to productive states without long rehydration or rebuild cycles.",
          },
          {
            title: "Windows and Linux support",
            description:
              "Run the environments different teams need, from standard office workflows to developer workstations.",
          },
          {
            title: "Persistent and ephemeral modes",
            description:
              "Support shift-based operations, clean-room sessions, or persistent developer environments within one platform.",
          },
          {
            title: "OCI-native and region-aware",
            description:
              "Align deployment location, data residency, and commercial flexibility with how modern enterprises actually buy and operate cloud infrastructure.",
          },
        ],
      }),
      gridSection({
        title: "How it works",
        description:
          "The DaaS product uses shared platform primitives but packages them for workspace delivery and operations teams.",
        blocks: [
          {
            title: "Central workspace control plane",
            description:
              "Provision, secure, and govern workspaces from a unified control layer instead of stitching together desktop, identity, and network tools.",
          },
          {
            title: "Isolation and policy enforcement",
            description:
              "Each workspace runs with isolation boundaries and role-based controls for access, data movement, and session behavior.",
          },
          {
            title: "Migration-friendly rollout",
            description:
              "Pilot by cohort, benchmark user experience, and expand without forcing a big-bang rip-and-replace migration.",
          },
        ],
      }),
      statsSection({
        title: "Where DaaS lands best",
        description:
          "The strongest DaaS motions combine speed, security, and hardware simplification.",
        items: [
          {
            label: "High-intent searches",
            value: "Citrix / VMware alternatives",
            detail:
              "The strategy positions DaaS around displacement and modern architecture.",
          },
          {
            label: "Fastest customer proof",
            value: "Remote work + contractors",
            detail:
              "Onboarding and access speed are easy to measure and easy to sell.",
          },
          {
            label: "Expansion motion",
            value: "Developer + GPU workspaces",
            detail:
              "DaaS creates the bridge into higher-value engineering and performance workloads.",
          },
        ],
      }),
      tableSection({
        title: "Messaging ladder",
        description:
          "Use outcome-first copy on the page, then layer in technical credibility for evaluators.",
        columns: ["Audience", "Primary message", "Proof point"],
        rows: [
          {
            label: "IT leadership",
            values: [
              "Replace complex legacy VDI with a simpler operating model.",
              "Cloud-native architecture with faster rollout and less infrastructure drag.",
            ],
          },
          {
            label: "Security teams",
            values: [
              "Keep data and policy in controlled workspaces instead of endpoints.",
              "Role-based controls, auditable sessions, and isolated environments.",
            ],
          },
          {
            label: "End users",
            values: [
              "Get a fast, consistent environment from any device.",
              "Sub-second restore and better continuity during device or office disruptions.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Remote & Hybrid Work",
        "See the core DaaS use case for remote onboarding and secure access.",
        "/solutions/use-case/remote-hybrid-work"
      ),
      relatedLink(
        "Developer Workspaces",
        "Use DaaS as the bridge into secure engineering environments.",
        "/solutions/use-case/developer-workspaces"
      ),
      relatedLink(
        "Compare vs Citrix",
        "Review architecture, migration, and TCO positioning side by side.",
        "/compare/vs-citrix"
      ),
    ],
    faq: [
      {
        question: "Who should evaluate Neverinstall DaaS first?",
        answer:
          "DaaS is the right entry point for teams modernizing remote work, replacing legacy VDI, or standardizing workspace access across distributed employees and contractors.",
      },
      {
        question: "How does Neverinstall position against legacy VDI?",
        answer:
          "The product is positioned around a cloud-native operating model, faster restore, simpler rollout, and lower operational drag compared with legacy Citrix or VMware-era stacks.",
      },
      {
        question: "Can DaaS support heavier workloads?",
        answer:
          "Yes. DaaS covers standard desktop delivery first, then extends into developer and GPU-backed workspaces, while Sovereign HCI takes over for larger AI infrastructure and on-prem acceleration needs.",
      },
    ],
    bottomCtas: defaultBottomCtas("product"),
  },
  "sovereign-hci": {
    name: "Sovereign HCI",
    slug: "sovereign-hci",
    path: "/products/sovereign-hci",
    template: "product",
    seo: {
      title:
        "Sovereign HCI - Multi-Vendor AI Infrastructure Platform - Neverinstall",
      description:
        "Multi-vendor AI infrastructure platform for sovereign, on-prem, and high-control environments with GPU orchestration, inference serving, and agentic sandboxing.",
    },
    summary:
      "Multi-vendor AI infrastructure for sovereign and on-prem environments, combining GPU orchestration, inference serving, sandboxing, and full-stack HCI under one control plane.",
    hero: {
      eyebrow: "Neverinstall Sovereign HCI",
      title: "The AI infrastructure platform enterprises pay more for",
      subtitle:
        "Multi-vendor GPU orchestration across NVIDIA, AMD, and Intel. Built-in inference serving. Agentic sandboxing. General compute HCI included.",
      supportingCopy:
        "Neverinstall positions Sovereign HCI as the premium control plane for enterprises that want sovereign deployment, developer-first operations, and freedom from vendor lock-in.",
      metric: "Multi-vendor AI infrastructure. No NVIDIA tax.",
      primaryCta: demoCta,
      secondaryCta: aiTcoCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall Sovereign HCI?",
      "Neverinstall Sovereign HCI is a multi-vendor AI infrastructure platform for on-prem and sovereign environments, combining GPU orchestration, inference serving, secure sandboxing, and integrated HCI under one control plane."
    ),
    sections: [
      gridSection({
        title: "Why the market is broken",
        description:
          "Current enterprise AI infrastructure choices force buyers into vendor taxes, bolt-on architectures, or long DIY build cycles.",
        blocks: [
          {
            title: "NVIDIA lock-in is expensive",
            description:
              "Too many platforms inherit the NVIDIA AI Enterprise tax even when customers already own the underlying hardware.",
          },
          {
            title: "General HCI vendors bolt AI on later",
            description:
              "Legacy infrastructure vendors add AI features as an extension of older virtualization stacks rather than designing for GPU-first operations.",
          },
          {
            title: "DIY open source takes too long",
            description:
              "Building GPU scheduling, observability, storage, networking, and serving from scratch can consume a platform team for months.",
          },
        ],
      }),
      gridSection({
        title: "Capability pillars",
        description:
          "Sovereign HCI is the flagship expression of the Neverinstall platform and carries the heaviest technical story on the site.",
        columns: 4,
        blocks: [
          {
            title: "Multi-vendor GPU orchestration",
            description:
              "Schedule workloads across NVIDIA, AMD, and Intel accelerators from one control plane and route work to the best-value hardware.",
          },
          {
            title: "Inference serving built in",
            description:
              "Use KServe and vLLM integration for model serving, lifecycle management, canary rollout, and autoscaling.",
          },
          {
            title: "Agentic workload sandboxing",
            description:
              "Run AI agents inside isolated Firecracker-style boundaries with auditability, policy control, and safer execution paths.",
          },
          {
            title: "Sovereignty by architecture",
            description:
              "Keep workloads inside your jurisdiction with VM isolation, air-gap capable deployment patterns, and enterprise control surfaces.",
          },
        ],
      }),
      gridSection({
        title: "How the platform stacks up",
        description:
          "The HCI page should prove that Neverinstall is not three startups in a trench coat, but one shared infrastructure platform with multiple go-to-market surfaces.",
        blocks: [
          {
            title: "Platform primitives",
            description:
              "KubeVirt virtualization, scheduler intelligence, storage, networking, sandboxing, checkpointing, and observability share one architectural foundation.",
          },
          {
            title: "AI services layer",
            description:
              "Inference serving, model lifecycle, GPU telemetry, and policy controls sit on top of the shared infrastructure stack.",
          },
          {
            title: "Enterprise operating layer",
            description:
              "Chargeback, multi-tenancy, RBAC, audit, and design-partner deployment support make the platform practical for real enterprise rollout.",
          },
        ],
      }),
      tableSection({
        title: "Feature to outcome ladder",
        description:
          "This page should move from technical credibility to commercial differentiation without flattening either.",
        columns: ["Capability", "Buyer benefit", "Business outcome"],
        rows: [
          {
            label: "Multi-vendor GPU scheduling",
            values: [
              "Avoid accelerator lock-in and use the best-value silicon for the job.",
              "Reduce AI infrastructure cost versus NVIDIA-only procurement patterns.",
            ],
          },
          {
            label: "GPU checkpointing and sandboxing",
            values: [
              "Resume complex workloads safely and run autonomous workloads under tighter control.",
              "Improve utilization while making agentic execution more production-ready.",
            ],
          },
          {
            label: "Built-in inference serving",
            values: [
              "Reach production inference sooner without stitching together multiple serving layers.",
              "Accelerate time to business value for internal AI platform teams.",
            ],
          },
        ],
      }),
      statsSection({
        title: "Primary buying motions",
        description:
          "Sovereign HCI is positioned against AI infrastructure incumbents, not just generic private cloud products.",
        items: [
          {
            label: "Primary comparison",
            value: "NVIDIA AI Enterprise",
            detail:
              "The flagship displacement motion is multi-vendor control without the annual GPU tax.",
          },
          {
            label: "Secondary comparison",
            value: "Nutanix / VMware / OpenShift AI",
            detail:
              "The narrative emphasizes full-stack HCI plus serving and sandboxing, not software-only orchestration.",
          },
          {
            label: "Best-fit buyers",
            value: "CTO / ML platform / infra",
            detail:
              "Especially teams facing sovereignty, cost, or accelerator strategy constraints.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Platform Technology",
        "See the shared infrastructure story behind all three Neverinstall products.",
        "/platform"
      ),
      relatedLink(
        "AI Inference Platform",
        "Explore the primary use case page for enterprise inference workloads.",
        "/solutions/use-case/ai-inference-platform"
      ),
      relatedLink(
        "Compare vs NVIDIA AI Enterprise",
        "Review the core HCI displacement motion and TCO story.",
        "/compare/vs-nvidia-ai-enterprise"
      ),
    ],
    faq: [
      {
        question: "Is Sovereign HCI only for NVIDIA environments?",
        answer:
          "No. The product is explicitly positioned around multi-vendor orchestration across NVIDIA, AMD, and Intel so infrastructure teams can avoid single-vendor lock-in.",
      },
      {
        question:
          "Why does the site frame Sovereign HCI differently from legacy private cloud?",
        answer:
          "Because the product is no longer pitched as generic KubeVirt private cloud. It is positioned as a premium AI infrastructure platform with integrated orchestration, serving, and secure sandboxing.",
      },
      {
        question:
          "How does Sovereign HCI relate to the other Neverinstall products?",
        answer:
          "It is built on the same platform primitives as Secure Browser and DaaS, but it exposes the deepest technical layer and addresses a different buyer and budget tier.",
      },
    ],
    bottomCtas: [demoCta, aiTcoCta, trustCta],
  },
}
