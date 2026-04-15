import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  contactCta,
  defaultBottomCtas,
  docsCta,
  gridSection,
  relatedLink,
  statsSection,
  tableSection,
  trustCta,
} from "@/lib/content/shared"

function trustPage(page: ContentPage): ContentPage {
  return {
    ...page,
    template: "trust",
    bottomCtas: defaultBottomCtas("trust"),
  }
}

export const trustPages: Record<string, ContentPage> = {
  security: trustPage({
    name: "Security",
    slug: "security",
    path: "/security/security",
    template: "trust",
    seo: {
      title:
        "Security Architecture: Zero Trust & Session Isolation | Neverinstall",
      description:
        "Zero-trust access, session isolation, and centralized DLP controls. See how Neverinstall keeps data off endpoints by design.",
    },
    summary: "Detailed security page for the Trust Center.",
    hero: {
      eyebrow: "Trust Center",
      title: "Security built into the architecture, not added later.",
      subtitle:
        "Neverinstall keeps work inside controlled environments, reduces endpoint data exposure, and centralizes policy, logging, and access control.",
      metric: "No data on endpoints",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall approach security?",
      "Neverinstall approaches security architecturally by keeping work inside controlled environments, enforcing policy centrally, reducing endpoint data exposure, and making sessions more auditable."
    ),
    sections: [
      gridSection({
        title: "Security by design",
        description:
          "Neverinstall's security model is architectural. Work stays inside controlled environments, policy is enforced centrally, and endpoints never hold sensitive data.",
        blocks: [
          {
            title: "No data on endpoints",
            description:
              "Keep applications and data inside the controlled environment instead of local devices.",
            icon: "Shield",
          },
          {
            title: "Zero-trust access",
            description:
              "Authenticate and authorize every session based on identity and policy.",
            icon: "Fingerprint",
          },
          {
            title: "Session isolation",
            description:
              "Separate users and workloads more clearly than traditional endpoint-centric models.",
            icon: "Lock",
          },
        ],
      }),
      gridSection({
        title: "Control layers",
        description:
          "Use central policy, observability, and runtime boundaries to support enterprise security workflows.",
        columns: 4,
        blocks: [
          {
            title: "Access control",
            description:
              "Role-based policies and conditional restrictions for who can do what.",
            icon: "Users",
          },
          {
            title: "Data movement controls",
            description:
              "Downloads, printing, clipboard, and file transfer restrictions when needed.",
            icon: "Lock",
          },
          {
            title: "Logging and audit",
            description:
              "Session visibility, user activity context, and evidence for investigations.",
            icon: "Eye",
          },
          {
            title: "Incident readiness",
            description:
              "Containment and response are easier when the workspace boundary is already centralized.",
            icon: "AlertTriangle",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Privacy & Data Protection",
        "See how the same model supports data control and residency.",
        "/security/privacy-data-protection"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "Review the architecture layer that underpins the control model.",
        "/security/infrastructure-architecture"
      ),
      relatedLink(
        "Security Contact",
        "Talk to the team about documentation or review requests.",
        "/security/security-contact"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall rely on endpoint trust to secure work?",
        answer:
          "The platform reduces the need to trust endpoints by keeping more of the workload, data, and control path inside centrally governed environments.",
      },
    ],
    bottomCtas: [],
  }),
  "privacy-data-protection": trustPage({
    name: "Privacy & Data Protection",
    slug: "privacy-data-protection",
    path: "/security/privacy-data-protection",
    template: "trust",
    seo: {
      title:
        "Privacy & Data Protection: Residency & Access Controls | Neverinstall",
      description:
        "Control where data lives with regional deployment, centralized access policies, and zero data on endpoints. Review our privacy model.",
    },
    summary: "Detailed privacy and data protection page.",
    hero: {
      eyebrow: "Trust Center",
      title: "Your data stays in your control.",
      subtitle:
        "Neverinstall is designed to keep customer data centralized, policy-governed, and off user endpoints while supporting regional deployment needs.",
      metric: "Your data. Your region. Your control.",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall handle privacy and data protection?",
      "Neverinstall keeps data inside controlled environments, gives customers authority over access and retention policy, and supports regional deployment options that align with privacy and sovereignty requirements."
    ),
    sections: [
      gridSection({
        title: "Data protection principles",
        description:
          "Privacy outcomes are strongest when anchored to concrete architecture controls.",
        blocks: [
          {
            title: "Data stays in the workspace",
            description:
              "Applications, files, and processing remain inside the controlled environment.",
            icon: "Database",
          },
          {
            title: "Centralized access controls",
            description:
              "Identity, policy, and role definitions govern who can access what.",
            icon: "Users",
          },
          {
            title: "Controlled movement",
            description:
              "Limit downloads, clipboard, sharing, and transfer paths as needed.",
            icon: "Lock",
          },
        ],
      }),
      tableSection({
        title: "Privacy posture",
        description:
          "A clear shared-responsibility model for governance, access, and retention.",
        columns: ["Area", "Neverinstall", "Customer"],
        rows: [
          {
            label: "Data protection",
            values: [
              "Provides the controlled environment and data movement controls.",
              "Defines governance, classification, and policy decisions.",
            ],
          },
          {
            label: "Residency",
            values: [
              "Supports regional deployment options.",
              "Chooses where workloads and data need to live.",
            ],
          },
          {
            label: "Retention",
            values: [
              "Supports configurable controls and cleanup paths.",
              "Owns retention and deletion policy decisions.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Compliance & Certifications",
        "See how the control model maps to regulated environments.",
        "/security/compliance-certifications"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Review the list of privacy, data, and policy documents.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Security",
        "Review the security architecture, session isolation, and zero-trust access model.",
        "/security/security"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall claim ownership over customer data?",
        answer:
          "No. Customers retain ownership and governance authority, while Neverinstall provides the control mechanisms and enforcement layer.",
      },
    ],
    bottomCtas: [],
  }),
  "compliance-certifications": trustPage({
    name: "Compliance & Certifications",
    slug: "compliance-certifications",
    path: "/security/compliance-certifications",
    template: "trust",
    seo: {
      title:
        "Compliance & Certifications: SOC 2, ISO 27001 & More | Neverinstall",
      description:
        "Compliance-ready controls for SOC 2, ISO 27001, HIPAA, and GDPR. Precise attestation language and auditable workspace architecture.",
    },
    summary:
      "Compliance alignment and attestation guidance for the Trust Center.",
    hero: {
      eyebrow: "Trust Center",
      title: "Built for regulated environments.",
      subtitle:
        "Neverinstall pairs centralized controls with auditable access patterns to support organizations operating under strong compliance and regional governance requirements.",
      metric: "Compliance-ready control model",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "What is Neverinstall's compliance posture?",
      "Neverinstall supports compliance-ready operations through centralized controls, auditable workflows, and regional deployment flexibility while keeping certification language precise and current."
    ),
    sections: [
      gridSection({
        title: "How Neverinstall supports regulated work",
        description:
          "Operational controls and evidence quality matter more than badge-only messaging.",
        blocks: [
          {
            title: "Centralized audit visibility",
            description:
              "Logging, activity context, and policy evidence are easier to manage from one control layer.",
            icon: "Eye",
          },
          {
            title: "Reduced endpoint exposure",
            description:
              "Keeping work off endpoints lowers the surface area compliance teams must reason about.",
            icon: "Shield",
          },
          {
            title: "Regional alignment",
            description:
              "Support data and workload placement choices required by local regimes and customer expectations.",
            icon: "Globe",
          },
        ],
      }),
      tableSection({
        title: "Certification status",
        description:
          "Precise language that reflects current attestations without overclaiming.",
        columns: ["Framework", "Status", "Details"],
        rows: [
          {
            label: "SOC 2 Type II",
            values: [
              "Current attestation status available on request.",
              "Contact us for the latest report or timeline if assessment is in progress.",
            ],
          },
          {
            label: "ISO 27001",
            values: [
              "Current certification status available on request.",
              "Contact us for the latest certificate or timeline if certification is in progress.",
            ],
          },
          {
            label: "Regional regulations",
            values: [
              "Alignment supported through platform controls.",
              "Neverinstall supports compliance with regional frameworks through deployment flexibility and control architecture, not through framework-specific certifications.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Privacy & Data Protection",
        "Review data residency, access controls, and privacy-by-design practices.",
        "/security/privacy-data-protection"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Review policy and report references available to customers.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "See how deployment, control, and architecture design support compliance requirements.",
        "/security/infrastructure-architecture"
      ),
    ],
    faq: [
      {
        question:
          "Why does the Trust Center use careful language around certifications?",
        answer:
          "Compliance claims must be precise, reviewable, and defensible so your security and legal teams can assess our control posture without ambiguity.",
      },
    ],
    bottomCtas: [],
  }),
  "infrastructure-architecture": trustPage({
    name: "Infrastructure & Architecture",
    slug: "infrastructure-architecture",
    path: "/security/infrastructure-architecture",
    template: "trust",
    seo: {
      title:
        "Infrastructure & Architecture: Cloud, On-Prem, Hybrid | Neverinstall",
      description:
        "Centralized workspaces with flexible deployment across managed cloud, customer cloud, or sovereign on-prem. Review our architecture.",
    },
    summary:
      "Trust-focused architecture page bridging security and platform design.",
    hero: {
      eyebrow: "Trust Center",
      title: "Built in the cloud. Secured at the core.",
      subtitle:
        "Neverinstall separates where work happens from where users access it, then layers policy, control, and observability around that model.",
      metric: "Work happens in the environment, not on devices",
      primaryCta: trustCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "How is Neverinstall architected?",
      "Neverinstall keeps work inside controlled cloud or sovereign environments, lets users access it through managed session boundaries, and centralizes policy, visibility, and deployment control."
    ),
    sections: [
      gridSection({
        title: "Architecture overview",
        description:
          "How Neverinstall separates work execution from device access and centralizes control.",
        blocks: [
          {
            title: "Centralized workspaces",
            description:
              "Applications, data, and compute remain inside the controlled environment.",
            icon: "Cloud",
          },
          {
            title: "Browser-access model",
            description:
              "Users reach work through secure access paths rather than thick local dependencies.",
            icon: "Globe",
          },
          {
            title: "Regional deployment control",
            description:
              "Teams can align infrastructure placement with business and regulatory needs.",
            icon: "Server",
          },
        ],
      }),
      gridSection({
        title: "Operational architecture benefits",
        description:
          "How architecture choices reduce risk and simplify governance operations.",
        columns: 4,
        blocks: [
          {
            title: "Reduced endpoint dependency",
            description:
              "The device becomes less central to the trust boundary.",
            icon: "Monitor",
          },
          {
            title: "Policy-led control",
            description:
              "Access, data movement, and visibility are handled centrally.",
            icon: "Settings",
          },
          {
            title: "Resilience options",
            description:
              "A centralized model makes continuity and failover planning easier to reason about.",
            icon: "Shield",
          },
          {
            title: "Provider flexibility",
            description:
              "Neverinstall can support cloud, hybrid, and sovereignty-driven deployment needs.",
            icon: "Layers",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "Review the security posture, session isolation, and zero-trust access model.",
        "/security/security"
      ),
      relatedLink(
        "Platform Technology",
        "Review the platform capabilities and deployment options.",
        "/platform"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "Review data residency, ownership, and privacy controls.",
        "/security/privacy-data-protection"
      ),
    ],
    faq: [
      {
        question: "How does this relate to the platform overview?",
        answer:
          "The platform page covers product capabilities and deployment options. This page examines the same architecture through a trust, governance, and risk lens — the view your security and compliance teams need during evaluation.",
      },
    ],
    bottomCtas: [],
  }),
  "policies-legal-documents": trustPage({
    name: "Policies & Legal Documents",
    slug: "policies-legal-documents",
    path: "/security/policies-legal-documents",
    template: "trust",
    seo: {
      title: "Policies & Legal Documents: DPA, Privacy & Terms | Neverinstall",
      description:
        "Access privacy policies, DPAs, security reports, and legal terms. Request sensitive trust documents through our security contact page.",
    },
    summary:
      "Document inventory page for policies, legal terms, and compliance reports.",
    hero: {
      eyebrow: "Trust Center",
      title: "Policies, terms, and supporting documentation.",
      subtitle:
        "Find privacy policies, legal terms, security reports, and compliance documents in one place.",
      metric: "All trust and legal documents, one location",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "What documents are available in the Trust Center?",
      "The Trust Center provides a clear index of privacy, legal, security, and data-handling documents plus a controlled request path for sensitive reports."
    ),
    sections: [
      gridSection({
        title: "Document categories",
        description:
          "An index designed to help legal, security, and procurement teams find the right documents quickly.",
        blocks: [
          {
            title: "Privacy and data terms",
            description:
              "Privacy policy, DPA, subprocessor list, and data retention references.",
            icon: "FileText",
          },
          {
            title: "Service terms",
            description:
              "Terms of service, acceptable use policy, and related contractual materials.",
            icon: "FileText",
          },
          {
            title: "Security policy documents",
            description:
              "Security policy, vulnerability disclosure policy, and incident-response references.",
            icon: "Shield",
          },
        ],
      }),
      tableSection({
        title: "Report access model",
        description:
          "Public-facing policies stay open, while sensitive reports follow controlled sharing workflows.",
        columns: ["Category", "Example", "Access pattern"],
        rows: [
          {
            label: "Public policy",
            values: [
              "Privacy policy, terms, AUP",
              "Link directly when published.",
            ],
          },
          {
            label: "Customer-facing trust documents",
            values: [
              "Security whitepaper, architecture summary",
              "Available in documentation or on request through your account team.",
            ],
          },
          {
            label: "Sensitive reports",
            values: [
              "SOC report, pen test summary",
              "Available on request under the appropriate process.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Compliance & Certifications",
        "See how documents relate to the compliance posture.",
        "/security/compliance-certifications"
      ),
      relatedLink(
        "Security Contact",
        "Use the trust contact path for document requests.",
        "/security/security-contact"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "Review the data model before diving into the document set.",
        "/security/privacy-data-protection"
      ),
    ],
    faq: [
      {
        question: "Why are some compliance reports request-only?",
        answer:
          "Because more sensitive trust documents are often shared through a controlled review process rather than published openly on a marketing site.",
      },
    ],
    bottomCtas: [],
  }),
  "security-features": trustPage({
    name: "Security Features",
    slug: "security-features",
    path: "/security/security-features",
    template: "trust",
    seo: {
      title:
        "Security Features: Access, Session & Audit Controls | Neverinstall",
      description:
        "Identity-led access, session-level DLP, and audit logging across Desktop Workspaces and Secure Browser. Start your security review.",
    },
    summary: "Short-form trust page for product security features.",
    hero: {
      eyebrow: "Trust Center",
      title: "Core security controls across the platform.",
      subtitle:
        "A summary of the key product-level security controls most commonly reviewed during security evaluation.",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    sections: [
      gridSection({
        title: "Key controls",
        description:
          "A concise control overview for teams beginning technical security review.",
        blocks: [
          {
            title: "Access controls",
            description:
              "Identity-led access, role-aware permissions, and policy enforcement.",
            icon: "Lock",
          },
          {
            title: "Session controls",
            description: "Restrictions on data movement and session behavior.",
            icon: "Settings",
          },
          {
            title: "Audit visibility",
            description:
              "Logging and evidence helpful for security operations and compliance workflows.",
            icon: "Eye",
          },
        ],
      }),
      statsSection({
        title: "Continue your security review",
        description:
          "Expand beyond this summary with architecture, infrastructure, and policy depth.",
        items: [
          {
            label: "Architecture",
            value: "Security",
            detail:
              "Zero-trust model and session isolation on the main Security page.",
          },
          {
            label: "Evidence",
            value: "Compliance",
            detail:
              "Certifications and attestation index under Compliance & Certifications.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "Review the full security architecture and control model.",
        "/security/security"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "Review the infrastructure and architecture that underpin these controls.",
        "/security/infrastructure-architecture"
      ),
      relatedLink(
        "Security Contact",
        "Request deeper security review materials.",
        "/security/security-contact"
      ),
    ],
    faq: [
      {
        question: "Where can I find deeper security documentation?",
        answer:
          "This page provides a concise control overview. For deeper technical detail, visit the Security, Infrastructure & Architecture, or Compliance & Certifications pages in the Trust Center.",
      },
    ],
    bottomCtas: [],
  }),
  "incident-response": trustPage({
    name: "Incident Response",
    slug: "incident-response",
    path: "/security/incident-response",
    template: "trust",
    seo: {
      title:
        "Incident Response: Containment & Notification Readiness | Neverinstall",
      description:
        "Centralized workspace containment, defined notification workflows, and post-incident remediation. Review our response posture.",
    },
    summary:
      "Lightweight incident-response overview page for the Trust Center.",
    hero: {
      eyebrow: "Trust Center",
      title: "Prepared for incidents before they happen.",
      subtitle:
        "The Neverinstall Trust Center describes a centralized environment where containment, visibility, and communication workflows are easier to manage.",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    sections: [
      gridSection({
        title: "Response posture",
        description:
          "A high-level view of response readiness and customer communication practices.",
        blocks: [
          {
            title: "Centralized visibility",
            description:
              "A controlled environment helps reduce fragmentation during investigation and containment.",
            icon: "Eye",
          },
          {
            title: "Defined workflows",
            description:
              "Defined response procedures and customer notification workflows support predictable incident handling.",
            icon: "FileText",
          },
          {
            title: "Follow-up and remediation",
            description:
              "Post-incident analysis and control improvement are part of our response process.",
            icon: "Shield",
          },
        ],
      }),
      statsSection({
        title: "Related Trust Center resources",
        description:
          "Pair this overview with architecture detail and official contact paths.",
        items: [
          {
            label: "Control model",
            value: "Security",
            detail: "How isolation and policy enforcement support containment.",
          },
          {
            label: "Engagement",
            value: "Contact",
            detail:
              "Security Contact for questionnaires and disclosure coordination.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "Review the security architecture and control model that supports response readiness.",
        "/security/security"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Use the policy index for incident-related document requests.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Security Contact",
        "Reach the team for security-specific outreach.",
        "/security/security-contact"
      ),
    ],
    faq: [
      {
        question: "Is this a full incident-response policy?",
        answer:
          "No. This is a public overview. More detailed incident-response documentation is available on request. Contact our security team for access.",
      },
    ],
    bottomCtas: [],
  }),
  "security-contact": trustPage({
    name: "Security Contact",
    slug: "security-contact",
    path: "/security/security-contact",
    template: "trust",
    seo: {
      title: "Security Contact: Trust Reviews & Disclosure | Neverinstall",
      description:
        "Request security questionnaire support, trust documentation, or report responsible disclosures. Reach our security team directly.",
    },
    summary: "Security contact and review request page.",
    hero: {
      eyebrow: "Trust Center",
      title: "Talk to the team about trust and security review.",
      subtitle:
        "Reach our security team for documentation requests, trust review questions, responsible disclosure, or architecture review.",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    sections: [
      gridSection({
        title: "How to engage our security team",
        description: "Common reasons to reach out through this channel.",
        blocks: [
          {
            title: "Security questionnaire support",
            description:
              "Submit security questionnaires or schedule a trust review call with our team.",
            icon: "FileText",
          },
          {
            title: "Documentation requests",
            description:
              "Request SOC reports, architecture summaries, pen test results, or other trust materials.",
            icon: "BadgeCheck",
          },
          {
            title: "Responsible disclosure",
            description:
              "Report security vulnerabilities or coordinate follow-up on disclosed findings.",
            icon: "AlertTriangle",
          },
        ],
      }),
      statsSection({
        title: "After you reach out",
        description:
          "Typical follow-ups from security and procurement teams using this channel.",
        items: [
          {
            label: "Documentation",
            value: "Tailored",
            detail:
              "SOC summaries, architecture decks, and FAQs shared under NDA when needed.",
          },
          {
            label: "Architecture",
            value: "Deep dive",
            detail:
              "Infrastructure & Architecture for deployment and data-flow questions.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "Start with the main security page before requesting deeper materials.",
        "/security/security"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Review the available document inventory first.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Compliance & Certifications",
        "See the public posture before beginning a detailed review.",
        "/security/compliance-certifications"
      ),
    ],
    faq: [
      {
        question: "Is this the same as the general contact page?",
        answer:
          "No. This page is specifically for trust and security inquiries, while the general contact page handles commercial and support requests.",
      },
    ],
    bottomCtas: [],
  }),
  "cookie-policy": trustPage({
    name: "Cookie Policy",
    slug: "cookie-policy",
    path: "/security/cookie-policy",
    template: "trust",
    seo: {
      title: "Cookie Policy: Categories & Preference Controls | Neverinstall",
      description:
        "Essential, preference, and analytics cookies explained. Control your cookie settings and review our retention and notice practices.",
    },
    summary: "Cookie categories, controls, and retention guidance.",
    hero: {
      eyebrow: "Trust Center",
      title: "Cookie and tracking transparency.",
      subtitle:
        "This policy explains what cookies we use, why we use them, and how you can control cookie preferences while evaluating Neverinstall.",
      metric: "Clear cookie categories and controls",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "What cookies does Neverinstall use?",
      "Neverinstall uses essential cookies for core site operation and may use analytics or preference cookies to improve experience, with controls for visitor choice where required."
    ),
    sections: [
      gridSection({
        title: "Cookie categories",
        description:
          "A simple model that legal, security, and privacy reviewers can validate quickly.",
        blocks: [
          {
            title: "Essential cookies",
            description:
              "Required for security, session continuity, and core website functionality.",
            icon: "Lock",
          },
          {
            title: "Preference cookies",
            description:
              "Remember user selections such as display preferences when enabled.",
            icon: "Settings",
          },
          {
            title: "Analytics cookies",
            description:
              "Help us understand page usage patterns so we can improve content and navigation.",
            icon: "Eye",
          },
        ],
      }),
      tableSection({
        title: "Cookie handling model",
        description:
          "High-level ownership for controls, retention, and notice responsibilities.",
        columns: ["Area", "Neverinstall", "Visitor or customer admin"],
        rows: [
          {
            label: "Essential behavior",
            values: [
              "Maintains secure and reliable baseline website operation.",
              "Can disable non-essential categories where controls are offered.",
            ],
          },
          {
            label: "Preference and analytics",
            values: [
              "Documents purpose and retention assumptions for each category.",
              "Chooses cookie settings according to local policy requirements.",
            ],
          },
          {
            label: "Policy updates",
            values: [
              "Publishes updates to this policy when cookie practices change materially.",
              "Reviews updates during trust and legal evaluations.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Privacy & Data Protection",
        "Review the broader data model behind privacy commitments.",
        "/security/privacy-data-protection"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Use the legal index to locate related policy documents.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Security Contact",
        "Route legal or trust clarifications through the security contact path.",
        "/security/security-contact"
      ),
    ],
    faq: [
      {
        question: "Can visitors opt out of non-essential cookies?",
        answer:
          "Where applicable, yes. Non-essential cookie controls should be available based on site configuration and regional requirements.",
      },
    ],
    bottomCtas: [],
  }),
  "terms-conditions": trustPage({
    name: "Terms & Conditions",
    slug: "terms-conditions",
    path: "/security/terms-conditions",
    template: "trust",
    seo: {
      title: "Terms & Conditions: Service Usage & Legal Terms | Neverinstall",
      description:
        "Review service terms, acceptable use policies, and legal context for procurement. Contact us with deeper questions through the security contact page.",
    },
    summary: "Terms overview and contract navigation for evaluators.",
    hero: {
      eyebrow: "Trust Center",
      title: "Service terms and usage conditions.",
      subtitle:
        "Review service terms, acceptable use expectations, and legal context for procurement and compliance evaluation.",
      metric: "Service terms, usage conditions, and legal context",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "Where should evaluators start with legal terms?",
      "Start here for website and service usage conditions, then move to negotiated agreements and request-specific legal documents through the Trust Center."
    ),
    sections: [
      gridSection({
        title: "Terms structure",
        description:
          "A practical legal overview for procurement, security, and business stakeholders.",
        blocks: [
          {
            title: "Service usage boundaries",
            description:
              "Defines acceptable use expectations and baseline conditions for platform access.",
            icon: "FileText",
          },
          {
            title: "Commercial alignment",
            description:
              "Clarifies when public terms apply versus customer-specific contractual agreements.",
            icon: "Users",
          },
          {
            title: "Legal change management",
            description:
              "Describes how material updates are communicated and where current terms are published.",
            icon: "Settings",
          },
        ],
      }),
      tableSection({
        title: "Legal review workflow",
        description:
          "Use this model to route legal and trust requests during procurement.",
        columns: ["Question type", "Start here", "Next step"],
        rows: [
          {
            label: "General terms and AUP",
            values: [
              "Review public terms pages linked from this page.",
              "Raise legal clarifications through your account or sales contact.",
            ],
          },
          {
            label: "Security and compliance artifacts",
            values: [
              "Review Trust Center summaries and document inventory.",
              "Request deeper materials through your account team or the security contact page.",
            ],
          },
          {
            label: "Negotiated contract language",
            values: [
              "Start with these public terms as baseline context.",
              "Finalize language through formal procurement and legal channels.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Policies & Legal Documents",
        "Review the full trust and legal document inventory.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Cookie Policy",
        "See data collection and tracking details for web surfaces.",
        "/security/cookie-policy"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "Connect terms review to the privacy and data control model.",
        "/security/privacy-data-protection"
      ),
    ],
    faq: [
      {
        question: "Is this page a substitute for signed customer contracts?",
        answer:
          "No. This page provides public legal context. Signed commercial agreements and negotiated terms govern customer deployments.",
      },
    ],
    bottomCtas: [],
  }),
}
