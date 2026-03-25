import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  contactCta,
  defaultBottomCtas,
  docsCta,
  gridSection,
  relatedLink,
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
      title: "Security - Neverinstall Trust Center",
      description:
        "Security architecture, zero-trust access, endpoint isolation, logging, and shared-responsibility guidance for Neverinstall.",
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
          "The strongest security message on the site is architectural, not fear-driven.",
        blocks: [
          {
            title: "No data on endpoints",
            description:
              "Keep applications and data inside the controlled environment instead of local devices.",
          },
          {
            title: "Zero-trust access",
            description:
              "Authenticate and authorize every session based on identity and policy.",
          },
          {
            title: "Session isolation",
            description:
              "Separate users and workloads more clearly than traditional endpoint-centric models.",
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
          },
          {
            title: "Data movement controls",
            description:
              "Downloads, printing, clipboard, and file transfer restrictions when needed.",
          },
          {
            title: "Logging and audit",
            description:
              "Session visibility, user activity context, and evidence for investigations.",
          },
          {
            title: "Incident readiness",
            description:
              "Containment and response are easier when the workspace boundary is already centralized.",
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
      title: "Privacy & Data Protection - Neverinstall Trust Center",
      description:
        "Learn how Neverinstall handles data residency, data ownership, access controls, and privacy-by-design principles.",
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
          "The privacy story is strongest when tied directly to the platform architecture.",
        blocks: [
          {
            title: "Data stays in the workspace",
            description:
              "Applications, files, and processing remain inside the controlled environment.",
          },
          {
            title: "Centralized access controls",
            description:
              "Identity, policy, and role definitions govern who can access what.",
          },
          {
            title: "Controlled movement",
            description:
              "Limit downloads, clipboard, sharing, and transfer paths as needed.",
          },
        ],
      }),
      tableSection({
        title: "Privacy posture",
        description:
          "The site should make the shared-responsibility model easy to understand.",
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
        "Return to the broader security architecture view.",
        "/security/security"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall claim ownership over customer data?",
        answer:
          "No. The trust content should be explicit that customers retain ownership and define governance choices while Neverinstall provides the platform and control mechanisms.",
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
      title: "Compliance & Certifications - Neverinstall Trust Center",
      description:
        "Overview of Neverinstall's compliance posture, regional alignment, and documentation practices for regulated environments.",
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
      "Neverinstall is positioned as compliance-ready through its centralized control model, auditability, and regional deployment flexibility, while certification language should remain precise about what is currently attested versus in progress."
    ),
    sections: [
      gridSection({
        title: "How Neverinstall supports regulated work",
        description:
          "The page should emphasize controls and operational readiness, not just badge collection.",
        blocks: [
          {
            title: "Centralized audit visibility",
            description:
              "Logging, activity context, and policy evidence are easier to manage from one control layer.",
          },
          {
            title: "Reduced endpoint exposure",
            description:
              "Keeping work off endpoints lowers the surface area compliance teams must reason about.",
          },
          {
            title: "Regional alignment",
            description:
              "Support data and workload placement choices required by local regimes and customer expectations.",
          },
        ],
      }),
      tableSection({
        title: "Certification language guidance",
        description: "This page must stay legally careful and explicit.",
        columns: ["Topic", "Site language", "Notes"],
        rows: [
          {
            label: "SOC 2 Type II",
            values: [
              "Use only if current and attested.",
              "Otherwise describe status as in progress without implying completed certification.",
            ],
          },
          {
            label: "ISO 27001",
            values: [
              "Use only if current and attested.",
              "Avoid overclaiming if the process is not complete.",
            ],
          },
          {
            label: "Regional regulations",
            values: [
              "Frame as support or alignment where appropriate.",
              "Do not imply formal certification for frameworks that are not certifications.",
            ],
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Privacy & Data Protection",
        "Connect compliance outcomes to the data control model.",
        "/security/privacy-data-protection"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Review policy and report references available to customers.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "See the architecture layer behind the compliance narrative.",
        "/security/infrastructure-architecture"
      ),
    ],
    faq: [
      {
        question:
          "Why is the certification language more careful than the marketing copy?",
        answer:
          "Because Trust Center content needs to be precise, reviewable, and defensible. It should clarify control posture without implying an attestation that does not exist yet.",
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
      title: "Infrastructure & Architecture - Neverinstall Trust Center",
      description:
        "Infrastructure architecture, deployment flexibility, data residency, and control plane design for Neverinstall.",
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
          "The trust-facing architecture page should stay readable while still sounding technically credible.",
        blocks: [
          {
            title: "Centralized workspaces",
            description:
              "Applications, data, and compute remain inside the controlled environment.",
          },
          {
            title: "Browser-access model",
            description:
              "Users reach work through secure access paths rather than thick local dependencies.",
          },
          {
            title: "Regional deployment control",
            description:
              "Teams can align infrastructure placement with business and regulatory needs.",
          },
        ],
      }),
      gridSection({
        title: "Operational architecture benefits",
        description:
          "This page should explain why the architectural model lowers risk and simplifies control.",
        columns: 4,
        blocks: [
          {
            title: "Reduced endpoint dependency",
            description:
              "The device becomes less central to the trust boundary.",
          },
          {
            title: "Policy-led control",
            description:
              "Access, data movement, and visibility are handled centrally.",
          },
          {
            title: "Resilience options",
            description:
              "A centralized model makes continuity and failover planning easier to reason about.",
          },
          {
            title: "Provider flexibility",
            description:
              "Neverinstall can support cloud, hybrid, and sovereignty-driven deployment needs.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "See the higher-level security posture built on this architecture.",
        "/security/security"
      ),
      relatedLink(
        "Platform Technology",
        "Review the product-facing platform narrative behind the trust architecture.",
        "/platform"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "See how the architecture shapes the data model.",
        "/security/privacy-data-protection"
      ),
    ],
    faq: [
      {
        question: "Is this page the same as the product platform page?",
        answer:
          "No. The platform page tells the product and architecture story for buyers, while this page focuses on the same design choices through a trust, governance, and risk lens.",
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
      title: "Policies & Legal Documents - Neverinstall Trust Center",
      description:
        "Overview of legal, privacy, data, and security policy documents associated with Neverinstall.",
    },
    summary:
      "Document inventory page for policies, legal terms, and compliance reports.",
    hero: {
      eyebrow: "Trust Center",
      title: "Policies, terms, and supporting documentation.",
      subtitle:
        "Use this page as the index for legal, privacy, security, and compliance documents referenced throughout the site and Trust Center.",
      metric: "Clear document inventory",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    answerCapsule: answerCapsule(
      "What documents are available in the Trust Center?",
      "The Trust Center should provide a clear index of privacy, legal, security, and data-handling documents, plus a controlled path for requesting sensitive reports when appropriate."
    ),
    sections: [
      gridSection({
        title: "Document categories",
        description: "This page is an index first, not a marketing narrative.",
        blocks: [
          {
            title: "Privacy and data terms",
            description:
              "Privacy policy, DPA, subprocessor list, and data retention references.",
          },
          {
            title: "Service terms",
            description:
              "Terms of service, acceptable use policy, and related contractual materials.",
          },
          {
            title: "Security policy documents",
            description:
              "Security policy, vulnerability disclosure policy, and incident-response references.",
          },
        ],
      }),
      tableSection({
        title: "Report access model",
        description:
          "Some documents can be public while others should be shared through a controlled request path.",
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
              "Provide via docs or sales-assisted trust workflows.",
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
      title: "Security Features - Neverinstall Trust Center",
      description:
        "Overview of the core security features and controls available across the Neverinstall platform.",
    },
    summary: "Short-form trust page for product security features.",
    hero: {
      eyebrow: "Trust Center",
      title: "Core security controls across the platform.",
      subtitle:
        "This page summarizes the key product-level controls buyers ask for most often during security review.",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    sections: [
      gridSection({
        title: "Key controls",
        description:
          "This page is intentionally lightweight until deeper product-security documentation is published.",
        blocks: [
          {
            title: "Access controls",
            description:
              "Identity-led access, role-aware permissions, and policy enforcement.",
          },
          {
            title: "Session controls",
            description: "Restrictions on data movement and session behavior.",
          },
          {
            title: "Audit visibility",
            description:
              "Logging and evidence helpful for security operations and compliance workflows.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "Review the broader security architecture story.",
        "/security/security"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "See the architecture lens behind these controls.",
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
        question: "Why is this page lighter than the others?",
        answer:
          "The source material for Security Features is still thin, so this route acts as a concise summary page while the deeper trust pages carry most of the narrative weight.",
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
      title: "Incident Response - Neverinstall Trust Center",
      description:
        "High-level overview of Neverinstall incident-response readiness, notification approach, and trust workflows.",
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
          "This page stays intentionally high level until formal IR documents are published.",
        blocks: [
          {
            title: "Centralized visibility",
            description:
              "A controlled environment helps reduce fragmentation during investigation and containment.",
          },
          {
            title: "Defined workflows",
            description:
              "The site should communicate that response procedures and customer notification paths exist.",
          },
          {
            title: "Follow-up and remediation",
            description:
              "Post-incident analysis and control improvement remain part of the trust narrative.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Security",
        "See the broader security posture behind response readiness.",
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
          "No. This page is a public overview. More detailed incident-response documentation should be shared through the appropriate trust review workflow when available.",
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
      title: "Security Contact - Neverinstall Trust Center",
      description:
        "Contact route for security reviews, trust documentation requests, and responsible disclosure workflows.",
    },
    summary: "Security contact and review request page.",
    hero: {
      eyebrow: "Trust Center",
      title: "Talk to the team about trust and security review.",
      subtitle:
        "Use this route for security documentation requests, trust review questions, and coordinated follow-up on responsible disclosure or architecture review.",
      primaryCta: contactCta,
      secondaryCta: docsCta,
    },
    sections: [
      gridSection({
        title: "Best uses for this route",
        description: "Keep the route practical and review-oriented.",
        blocks: [
          {
            title: "Security questionnaire support",
            description:
              "Route trust review and questionnaire conversations efficiently.",
          },
          {
            title: "Documentation requests",
            description:
              "Provide a clear path for requesting reports or deeper architecture materials.",
          },
          {
            title: "Responsible disclosure",
            description:
              "Direct security findings and follow-up conversations into an appropriate channel.",
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
        question: "Should this route replace the normal contact page?",
        answer:
          "No. This page is specifically for trust and security workflows, while the main contact route continues to handle general commercial and support outreach.",
      },
    ],
    bottomCtas: [],
  }),
}
