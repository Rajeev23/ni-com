import type { ContentPage } from "@/lib/content/types"

import {
  answerCapsule,
  contactCta,
  demoCta,
  gridSection,
  relatedLink,
  statsSection,
  trustCta,
} from "@/lib/content/shared"

function compliancePage(page: ContentPage): ContentPage {
  return {
    ...page,
    template: "compliance",
    bottomCtas: [contactCta, demoCta, trustCta],
  }
}

export const compliancePages: Record<string, ContentPage> = {
  "soc-2": compliancePage({
    name: "SOC 2 Type II",
    slug: "soc-2",
    path: "/compliance/soc-2",
    template: "compliance",
    seo: {
      title:
        "SOC 2 Compliant Virtual Desktop & Enterprise Browser | Neverinstall",
      description:
        "Meet SOC 2 Type II trust criteria with session isolation, audit logging, and DLP controls. Deploy on managed cloud, your cloud, or on-prem.",
    },
    summary:
      "How Neverinstall maps to SOC 2 trust service criteria for organizations pursuing or maintaining SOC 2 Type II.",
    hero: {
      eyebrow: "Compliance",
      title: "SOC 2 Type II — built into the control model.",
      subtitle:
        "SOC 2 requires demonstrated controls across security, availability, confidentiality, processing integrity, and privacy. Neverinstall centralizes the access governance, session controls, and audit logging that evidence-based SOC 2 reviews depend on.",
      metric: "Centralized controls. Auditable sessions.",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support SOC 2 compliance?",
      "Neverinstall supports SOC 2 readiness by keeping work inside controlled environments, centralizing access governance and policy enforcement, generating session-level audit logs, and enabling the organizational controls that auditors review during SOC 2 Type II assessment."
    ),
    sections: [
      gridSection({
        title: "What SOC 2 requires",
        description:
          "The SOC 2 Trust Service Criteria define the controls an auditor will test. Access, availability, confidentiality, and security are the most common areas examined.",
        blocks: [
          {
            title: "Access control (CC6)",
            description:
              "Logical access to systems must be restricted to authorized users through defined role and policy mechanisms, with documented provisioning and de-provisioning.",
            icon: "Lock",
          },
          {
            title: "Audit and monitoring (CC7)",
            description:
              "Systems must generate logs that capture user activity, access events, and anomalies, with defined review and retention processes.",
            icon: "Eye",
          },
          {
            title: "Confidentiality and data movement",
            description:
              "Confidential data must be protected from unauthorized access or exfiltration through controls that limit how data is copied, transferred, or exported.",
            icon: "Shield",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall's architecture reduces the evidence burden for SOC 2 by centralizing the controls auditors look for most.",
        columns: 3,
        blocks: [
          {
            title: "Centralized access governance",
            description:
              "Role-based policies and centrally managed identity controls define and enforce who can access which workspaces, reducing fragmented access management.",
            icon: "Users",
          },
          {
            title: "Session isolation",
            description:
              "Each user session runs in a dedicated environment, limiting lateral movement and reducing the blast radius of a compromised account.",
            icon: "Shield",
          },
          {
            title: "Audit logging",
            description:
              "Session-level activity, access events, and policy changes generate evidence that supports auditor review and internal compliance workflows.",
            icon: "Eye",
          },
          {
            title: "DLP controls",
            description:
              "Clipboard restrictions, download controls, and print restrictions limit data exfiltration paths — a key confidentiality control auditors test.",
            icon: "Lock",
          },
          {
            title: "No data on endpoints",
            description:
              "Work and data remain inside the controlled environment, shrinking the attack surface auditors must reason about during CC6 and CC7 review.",
            icon: "Monitor",
          },
          {
            title: "Session recording",
            description:
              "Optional session recording provides deeper audit evidence for high-risk roles, contractor access, or privileged operations.",
            icon: "Eye",
          },
        ],
      }),
      statsSection({
        title: "Deployment model alignment",
        description:
          "Managed cloud suits most SOC 2 use cases. Organizations with stricter data isolation requirements can use customer cloud or sovereign on-prem.",
        items: [
          {
            label: "Managed Cloud",
            value: "Fastest path",
            detail:
              "Neverinstall-managed cloud deployments provide ready access controls and logging without infrastructure overhead.",
          },
          {
            label: "Customer Cloud (OCI/AWS/Azure)",
            value: "Your environment",
            detail:
              "Deploy inside your own cloud account for tighter infrastructure control while preserving the centralized workspace model.",
          },
          {
            label: "Sovereign On-Prem",
            value: "Full isolation",
            detail:
              "Run entirely on your own infrastructure for maximum data isolation and compliance boundary control.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Compliance & Certifications",
        "Review the Trust Center compliance posture and attestation language.",
        "/security/compliance-certifications"
      ),
      relatedLink(
        "Security",
        "See the security architecture that underpins the SOC 2 control model.",
        "/security/security"
      ),
      relatedLink(
        "Remote & Hybrid Work",
        "See how Neverinstall supports compliant remote and contractor access.",
        "/solutions/use-case/remote-hybrid-work"
      ),
    ],
    faq: [
      {
        question: "Is Neverinstall SOC 2 Type II certified?",
        answer:
          "Neverinstall is pursuing SOC 2 Type II attestation. The platform's centralized controls, session logging, and access governance are designed to support the trust service criteria examiners review. Contact us for current attestation status.",
      },
      {
        question: "How does session isolation help SOC 2 audits?",
        answer:
          "Session isolation reduces the scope of what auditors must assess by keeping user workloads separate and centrally governed. It provides cleaner evidence boundaries for CC6 access control and CC7 monitoring criteria.",
      },
    ],
    bottomCtas: [],
  }),

  hipaa: compliancePage({
    name: "HIPAA",
    slug: "hipaa",
    path: "/compliance/hipaa",
    template: "compliance",
    seo: {
      title: "HIPAA Compliant Virtual Desktop & Secure Browser | Neverinstall",
      description:
        "Protect ePHI with session isolation, DLP controls, and audit trails. BAA available. Deploy on managed cloud, your cloud, or on-prem.",
    },
    summary:
      "How Neverinstall supports HIPAA-compliant operations for healthcare organizations handling electronic protected health information.",
    hero: {
      eyebrow: "Compliance",
      title: "HIPAA-ready workspaces for healthcare.",
      subtitle:
        "HIPAA requires strong access controls, audit trails, and physical and technical safeguards for ePHI. Neverinstall keeps patient data inside controlled environments, centralizes access governance, and generates the audit evidence healthcare organizations need.",
      metric: "ePHI stays inside the controlled environment",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support HIPAA compliance?",
      "Neverinstall supports HIPAA safeguards by keeping ePHI access inside controlled workspace environments, enforcing role-based access controls, generating session-level audit logs, restricting data movement off endpoints, and supporting BAA agreements for covered entities and business associates."
    ),
    sections: [
      gridSection({
        title: "What HIPAA requires",
        description:
          "The HIPAA Security Rule mandates administrative, physical, and technical safeguards that protect ePHI from unauthorized access, disclosure, or loss.",
        blocks: [
          {
            title: "Access controls (§164.312(a))",
            description:
              "Unique user identification, emergency access procedures, and automatic logoff are required. Each user must have verifiable, auditable access to ePHI systems.",
            icon: "Fingerprint",
          },
          {
            title: "Audit controls (§164.312(b))",
            description:
              "Covered entities must implement hardware, software, and procedural mechanisms that record and examine access to ePHI-containing systems.",
            icon: "Eye",
          },
          {
            title: "Transmission security (§164.312(e))",
            description:
              "ePHI transmitted over networks must be protected through encryption or equivalent safeguards that prevent unauthorized interception.",
            icon: "Lock",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall provides the technical safeguard layer healthcare organizations need to demonstrate HIPAA compliance controls.",
        columns: 3,
        blocks: [
          {
            title: "Role-based access to ePHI workspaces",
            description:
              "Centrally define which roles can access which clinical or administrative workspaces, with identity-led enforcement and documented provisioning.",
            icon: "Users",
          },
          {
            title: "Session audit logs",
            description:
              "Activity and access events are logged at the session level, providing the audit trail required by §164.312(b) for ePHI system access.",
            icon: "Eye",
          },
          {
            title: "No ePHI on endpoints",
            description:
              "Patient data stays inside the controlled workspace environment and never reaches local device storage, addressing a major HIPAA physical safeguard gap.",
            icon: "Shield",
          },
          {
            title: "DLP and data movement controls",
            description:
              "Restrict downloads, clipboard transfers, and printing to limit unauthorized ePHI exfiltration paths.",
            icon: "Lock",
          },
          {
            title: "Session isolation",
            description:
              "Each clinician or administrator accesses work in an isolated environment, reducing cross-session exposure risk.",
            icon: "Layers",
          },
          {
            title: "BAA availability",
            description:
              "Neverinstall can execute Business Associate Agreements with covered entities and business associates handling ePHI. Contact us to initiate.",
            icon: "FileText",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for healthcare",
        description:
          "Healthcare organizations with strict data residency or infrastructure control requirements can deploy Neverinstall in customer cloud or on-prem configurations.",
        items: [
          {
            label: "Managed Cloud",
            value: "Fastest deployment",
            detail:
              "Suitable for healthcare organizations that rely on Neverinstall's managed environment with BAA in place.",
          },
          {
            label: "Customer Cloud (OCI/AWS/Azure)",
            value: "Your infrastructure",
            detail:
              "Deploy on your own HIPAA-eligible cloud infrastructure for tighter control over where ePHI workloads run.",
          },
          {
            label: "Sovereign On-Prem",
            value: "Maximum control",
            detail:
              "On-prem deployment for health systems or government health agencies with strict data sovereignty requirements.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Healthcare Industry",
        "See how Neverinstall supports healthcare organizations more broadly.",
        "/solutions/industry/healthcare"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "Review the data control model behind HIPAA safeguard alignment.",
        "/security/privacy-data-protection"
      ),
      relatedLink(
        "Security",
        "See the security architecture that supports HIPAA technical safeguards.",
        "/security/security"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall sign BAAs with healthcare customers?",
        answer:
          "Yes. Neverinstall can execute Business Associate Agreements with covered entities and business associates that handle ePHI through the platform. Contact us to begin the BAA process.",
      },
      {
        question:
          "Does keeping data off endpoints address HIPAA physical safeguards?",
        answer:
          "It materially reduces the scope. When ePHI never reaches local device storage, the physical safeguard risk profile for endpoints shrinks significantly. It does not eliminate all physical safeguard obligations, but it reduces the hardest-to-control exposure.",
      },
    ],
    bottomCtas: [],
  }),

  gdpr: compliancePage({
    name: "GDPR",
    slug: "gdpr",
    path: "/compliance/gdpr",
    template: "compliance",
    seo: {
      title:
        "GDPR Compliant Virtual Desktop & Enterprise Browser | Neverinstall",
      description:
        "Keep EU personal data in-region with sovereign deployment, DPA support, and zero data on endpoints. Book a demo to see GDPR controls.",
    },
    summary:
      "How Neverinstall supports GDPR-aligned operations for organizations processing EU personal data.",
    hero: {
      eyebrow: "Compliance",
      title: "GDPR-aligned workspaces for EU data.",
      subtitle:
        "GDPR requires lawful processing, data minimization, residency control, and demonstrated technical safeguards. Neverinstall's sovereign and customer-cloud deployment options give organizations control over where EU personal data is processed and stored.",
      metric: "Data residency. Controller authority. Privacy by design.",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support GDPR compliance?",
      "Neverinstall supports GDPR alignment through regional deployment flexibility that keeps EU personal data within defined boundaries, data processing agreements, central access and audit controls, and an architecture that prevents personal data from spreading to uncontrolled endpoints."
    ),
    sections: [
      gridSection({
        title: "What GDPR requires",
        description:
          "The GDPR's core obligations govern how personal data is collected, processed, stored, and transferred — with significant accountability for controllers and processors.",
        blocks: [
          {
            title: "Data residency and transfer restrictions",
            description:
              "Personal data on EU residents must not be transferred to third countries without adequate safeguards. Controllers must know where data lives and have documented transfer mechanisms.",
            icon: "Globe",
          },
          {
            title: "Technical and organizational measures (Article 32)",
            description:
              "Controllers and processors must implement appropriate technical measures to ensure data security, including access control, pseudonymization, and resilience.",
            icon: "Shield",
          },
          {
            title: "Accountability and processor obligations",
            description:
              "Organizations must document processing activities, appoint a DPO where required, and execute Data Processing Agreements with processors.",
            icon: "FileText",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall reduces GDPR risk by keeping personal data within controlled, regionally defined environments and providing the governance layer that controllers need.",
        columns: 3,
        blocks: [
          {
            title: "EU and regional deployment",
            description:
              "Deploy Neverinstall workspaces on EU-region cloud infrastructure or customer-controlled environments to keep personal data within required boundaries.",
            icon: "Globe",
          },
          {
            title: "No data on endpoints",
            description:
              "Personal data remains inside the workspace environment and never persists on user devices — reducing the controller's exposure surface for Article 32 purposes.",
            icon: "Shield",
          },
          {
            title: "Centralized access control",
            description:
              "Define and enforce data access policies centrally so only authorized roles process personal data in any given workspace.",
            icon: "Users",
          },
          {
            title: "Audit logging",
            description:
              "Session and access logs provide the accountability evidence that GDPR compliance programs require.",
            icon: "Eye",
          },
          {
            title: "Data Processing Agreement",
            description:
              "Neverinstall executes DPAs with customers as required under Article 28, documenting processor obligations and sub-processor management.",
            icon: "FileText",
          },
          {
            title: "Sovereign on-prem deployment",
            description:
              "For organizations with strict data sovereignty requirements, Neverinstall supports fully on-prem deployment where all processing occurs inside customer-controlled infrastructure.",
            icon: "Building2",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for GDPR",
        description:
          "GDPR compliance depends on knowing where data lives. Neverinstall gives organizations the deployment flexibility to keep that answer clear.",
        items: [
          {
            label: "Customer Cloud (EU region)",
            value: "Preferred for GDPR",
            detail:
              "Deploy on your own AWS EU, Azure EU, or OCI EU cloud account to maintain clear data residency while using the full Neverinstall platform.",
          },
          {
            label: "Sovereign On-Prem",
            value: "Strict sovereignty",
            detail:
              "Full on-prem deployment for organizations that cannot use public cloud for any personal data processing.",
          },
          {
            label: "Managed Cloud",
            value: "DPA required",
            detail:
              "Available with DPA in place. Data residency region selection supported within Neverinstall-managed infrastructure.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Privacy & Data Protection",
        "Review the data control architecture behind GDPR alignment.",
        "/security/privacy-data-protection"
      ),
      relatedLink(
        "Policies & Legal Documents",
        "Find the DPA and sub-processor documentation.",
        "/security/policies-legal-documents"
      ),
      relatedLink(
        "DPDP Act",
        "See how the same sovereign deployment model supports India's DPDP Act.",
        "/compliance/dpdp-act"
      ),
    ],
    faq: [
      {
        question: "Does Neverinstall act as a data processor under GDPR?",
        answer:
          "Yes. When organizations use Neverinstall to process personal data of EU residents, Neverinstall acts as a data processor and can execute a Data Processing Agreement under Article 28. Contact us to initiate.",
      },
      {
        question:
          "Does the sovereign on-prem deployment keep all data inside the EU?",
        answer:
          "Yes. With sovereign on-prem deployment, all processing occurs on customer-controlled infrastructure with no data leaving to Neverinstall-managed systems.",
      },
    ],
    bottomCtas: [],
  }),

  "dpdp-act": compliancePage({
    name: "DPDP Act",
    slug: "dpdp-act",
    path: "/compliance/dpdp-act",
    template: "compliance",
    seo: {
      title:
        "DPDP Act Compliant Virtual Desktop & Enterprise Browser | Neverinstall",
      description:
        "Meet India's DPDP Act with in-country deployment, data localization, and centralized access controls. No personal data on endpoints.",
    },
    summary:
      "How Neverinstall supports alignment with India's Digital Personal Data Protection Act through data localization and sovereign deployment.",
    hero: {
      eyebrow: "Compliance",
      title: "DPDP Act-aligned workspaces for Indian data.",
      subtitle:
        "India's Digital Personal Data Protection Act introduces new obligations around consent, data localization, and cross-border transfer. Neverinstall's on-prem and customer-cloud deployment models give Indian organizations control over where personal data is processed.",
      metric: "Data stays in India. Your control.",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support DPDP Act compliance?",
      "Neverinstall supports DPDP Act alignment by enabling data localization through sovereign on-prem and in-country cloud deployment, keeping personal data off user endpoints, and providing the centralized access governance and audit controls that DPDP compliance programs require."
    ),
    sections: [
      gridSection({
        title: "What the DPDP Act requires",
        description:
          "India's Digital Personal Data Protection Act 2023 establishes obligations for data fiduciaries and data processors handling digital personal data of Indian residents.",
        blocks: [
          {
            title: "Consent and purpose limitation",
            description:
              "Data fiduciaries must collect personal data only for specified, lawful purposes with verifiable consent and must not use data beyond those purposes.",
            icon: "FileText",
          },
          {
            title: "Data localization implications",
            description:
              "The DPDP Act empowers the Central Government to restrict cross-border transfer of personal data to certain countries. Organizations must be prepared to localize data when required.",
            icon: "Database",
          },
          {
            title: "Security safeguards and breach notification",
            description:
              "Data fiduciaries must implement reasonable security safeguards and notify the Data Protection Board and affected individuals in the event of a personal data breach.",
            icon: "AlertTriangle",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall's deployment flexibility and centralized control model directly address the data governance and localization demands of the DPDP Act.",
        columns: 3,
        blocks: [
          {
            title: "In-country deployment",
            description:
              "Deploy Neverinstall on Indian cloud regions (OCI India, AWS Mumbai, Azure India) or on customer-owned data center infrastructure to keep personal data within India.",
            icon: "Globe",
          },
          {
            title: "Sovereign on-prem for strict localization",
            description:
              "For organizations that need complete data sovereignty, the on-prem deployment model ensures no personal data leaves customer-controlled infrastructure.",
            icon: "Building2",
          },
          {
            title: "No data on endpoints",
            description:
              "Work stays inside the controlled workspace — personal data never persists on user devices, reducing the risk of cross-border exposure through device loss or sync.",
            icon: "Shield",
          },
          {
            title: "Centralized access governance",
            description:
              "Define who can process which personal data through central policy, supporting the purpose limitation and access accountability the DPDP Act requires.",
            icon: "Users",
          },
          {
            title: "Audit logging",
            description:
              "Session-level logs provide evidence of who accessed what personal data and when — supporting breach investigation and accountability reporting.",
            icon: "Eye",
          },
          {
            title: "DLP controls",
            description:
              "Restrict clipboard, download, and file transfer paths to limit how personal data moves outside the governed workspace.",
            icon: "Lock",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for DPDP Act",
        description:
          "Indian organizations subject to DPDP Act localization rules should use in-country customer cloud or sovereign on-prem deployment.",
        items: [
          {
            label: "Sovereign On-Prem",
            value: "Strictest localization",
            detail:
              "All processing on customer-owned Indian infrastructure. No data leaves the organization's environment.",
          },
          {
            label: "Customer Cloud (India region)",
            value: "Cloud with control",
            detail:
              "Deploy on OCI Mumbai, AWS Mumbai, or Azure India within your own cloud account for localization with cloud economics.",
          },
          {
            label: "Managed Cloud",
            value: "With DPA",
            detail:
              "Available in India-region configurations with appropriate data processing terms in place.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "RBI Data Localization",
        "See how the same model supports RBI's payment data localization requirements.",
        "/compliance/rbi-data-localization"
      ),
      relatedLink(
        "Financial Services",
        "See how Neverinstall serves Indian financial services organizations.",
        "/solutions/industry/financial-services"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "Review the data control model behind localization and access governance.",
        "/security/privacy-data-protection"
      ),
    ],
    faq: [
      {
        question: "Is Neverinstall certified under the DPDP Act?",
        answer:
          "The DPDP Act does not create a certification scheme analogous to SOC 2 or ISO 27001. Neverinstall's platform supports the technical safeguards — data localization, access controls, audit logging — that DPDP compliance programs require.",
      },
      {
        question:
          "How does sovereign on-prem help with DPDP cross-border transfer restrictions?",
        answer:
          "When Neverinstall is deployed entirely on customer-owned Indian infrastructure, no personal data flows to Neverinstall-managed systems. This gives organizations complete control over cross-border data movement for the workspace layer.",
      },
    ],
    bottomCtas: [],
  }),

  "rbi-data-localization": compliancePage({
    name: "RBI Data Localization",
    slug: "rbi-data-localization",
    path: "/compliance/rbi-data-localization",
    template: "compliance",
    seo: {
      title: "RBI Data Localization Compliant Virtual Desktop | Neverinstall",
      description:
        "Keep payment data in India with sovereign on-prem or in-country cloud deployment. Session isolation and audit logs for RBI compliance.",
    },
    summary:
      "How Neverinstall supports Reserve Bank of India data localization mandates for payment system operators.",
    hero: {
      eyebrow: "Compliance",
      title: "RBI data localization — payment data stays in India.",
      subtitle:
        "The Reserve Bank of India requires that payment system data be stored only in India. Neverinstall's sovereign on-prem and in-country cloud deployment models give payment operators and financial institutions full localization control for their workspace infrastructure.",
      metric: "Payment data stays in India",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support RBI data localization compliance?",
      "Neverinstall supports RBI data localization by enabling sovereign on-prem and in-country customer-cloud deployments where all payment system data and workspace processing stays within Indian infrastructure, with no data flowing to offshore environments."
    ),
    sections: [
      gridSection({
        title: "What RBI data localization requires",
        description:
          "The RBI's 2018 circular mandates that all data related to payment systems operated in India be stored only on systems physically located in India.",
        blocks: [
          {
            title: "Exclusive storage in India",
            description:
              "Payment system operators must ensure that all transaction, settlement, and system data related to domestic payment activities is stored on servers physically located within India.",
            icon: "Database",
          },
          {
            title: "No offshore mirroring without approval",
            description:
              "Foreign copies or mirrors of payment data are restricted. Processing that takes data outside India requires explicit RBI approval.",
            icon: "Lock",
          },
          {
            title: "Audit and reporting obligations",
            description:
              "Payment operators must submit a systems audit report certifying compliance with data localization requirements and maintain audit trails to demonstrate adherence.",
            icon: "BadgeCheck",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall's deployment architecture directly supports RBI localization requirements for financial institutions building or modernizing payment operations.",
        columns: 3,
        blocks: [
          {
            title: "Sovereign on-prem deployment",
            description:
              "Run Neverinstall entirely on customer-owned servers in India. All workspace processing, session data, and logs remain on infrastructure the organization controls.",
            icon: "Building2",
          },
          {
            title: "In-country customer cloud",
            description:
              "Deploy on AWS Mumbai, OCI Mumbai, or Azure India within your own cloud account to meet localization requirements while using cloud infrastructure.",
            icon: "Cloud",
          },
          {
            title: "No data on endpoints",
            description:
              "Payment data processed in workspace sessions never reaches user endpoint devices, preventing accidental cross-border exposure through device sync or loss.",
            icon: "Shield",
          },
          {
            title: "Session isolation for payment workflows",
            description:
              "Payment operations run in isolated workspace sessions, reducing cross-contamination risk and providing cleaner audit boundaries.",
            icon: "Layers",
          },
          {
            title: "Session recording and audit logs",
            description:
              "Detailed session logs and optional recording provide the audit evidence needed for the RBI's systems audit reporting requirement.",
            icon: "Eye",
          },
          {
            title: "DLP controls",
            description:
              "Restrict data movement from payment workspaces to prevent unauthorized transfer of transaction data outside governed environments.",
            icon: "Lock",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for RBI localization",
        description:
          "RBI compliance requires Indian-soil deployment. Sovereign on-prem is the strongest alignment; in-country customer cloud is the cloud-native alternative.",
        items: [
          {
            label: "Sovereign On-Prem",
            value: "Full compliance",
            detail:
              "All workspace infrastructure on customer-owned Indian data center servers. Zero offshore data flow.",
          },
          {
            label: "Customer Cloud (India region)",
            value: "Strong alignment",
            detail:
              "Deploy on your own AWS Mumbai, OCI Mumbai, or Azure India account for cloud deployment within Indian borders.",
          },
          {
            label: "Managed Cloud",
            value: "Not recommended",
            detail:
              "Managed cloud may not satisfy RBI's exclusive-storage-in-India requirement without specific configuration review.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "DPDP Act",
        "See how the same deployment model supports India's Digital Personal Data Protection Act.",
        "/compliance/dpdp-act"
      ),
      relatedLink(
        "Financial Services",
        "See how Neverinstall serves financial services organizations.",
        "/solutions/industry/financial-services"
      ),
      relatedLink(
        "Privacy & Data Protection",
        "Understand the data control model behind localization architecture.",
        "/security/privacy-data-protection"
      ),
    ],
    faq: [
      {
        question:
          "Does Neverinstall's on-prem deployment satisfy the RBI's India-only storage requirement?",
        answer:
          "Sovereign on-prem deployment runs entirely on customer-owned infrastructure within India, with no data flowing to Neverinstall-managed systems outside India. This architecture is designed to support exclusive in-India storage. Organizations should validate configuration specifics with their compliance and legal teams.",
      },
      {
        question:
          "Can Neverinstall support both RBI localization and DPDP Act requirements simultaneously?",
        answer:
          "Yes. The sovereign on-prem and in-country customer-cloud deployment models support both frameworks by ensuring all data remains within Indian infrastructure boundaries.",
      },
    ],
    bottomCtas: [],
  }),

  "iso-27001": compliancePage({
    name: "ISO 27001",
    slug: "iso-27001",
    path: "/compliance/iso-27001",
    template: "compliance",
    seo: {
      title:
        "ISO 27001 Compliant Virtual Desktop & Enterprise Browser | Neverinstall",
      description:
        "Reduce ISMS scope with centralized access governance, Annex A control mapping, and audit logging. Deploy on cloud or on-prem.",
    },
    summary:
      "How Neverinstall's architecture maps to ISO 27001 information security management system requirements.",
    hero: {
      eyebrow: "Compliance",
      title: "ISO 27001-aligned information security management.",
      subtitle:
        "ISO 27001 requires a documented Information Security Management System (ISMS) with continuous improvement, risk assessment, and a defined control set. Neverinstall's centralized control model directly supports Annex A access and audit controls.",
      metric: "Centralized ISMS control coverage",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support ISO 27001 compliance?",
      "Neverinstall supports ISO 27001 by providing a centralized control layer that maps to Annex A access control, cryptography, operations security, and audit requirements — reducing the number of distributed systems and endpoints that must be individually addressed in an ISMS scope."
    ),
    sections: [
      gridSection({
        title: "What ISO 27001 requires",
        description:
          "ISO 27001 defines an ISMS framework requiring risk assessment, documented controls, continuous improvement, and management commitment across 14 Annex A control domains.",
        blocks: [
          {
            title: "Access control (A.9)",
            description:
              "User access must be managed through a formal provisioning process with role-based privileges, regular review, and documented de-provisioning procedures.",
            icon: "Users",
          },
          {
            title: "Operations security (A.12)",
            description:
              "Malware controls, logging, monitoring, and vulnerability management are required. Log retention and review procedures must be formally documented.",
            icon: "Eye",
          },
          {
            title: "Supplier relationships (A.15)",
            description:
              "Organizations must manage information security in supplier and service provider relationships, with contractual obligations and regular assessment.",
            icon: "FileText",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall's centralized workspace architecture reduces ISMS scope complexity and provides Annex A control evidence in the areas auditors most commonly test.",
        columns: 3,
        blocks: [
          {
            title: "Centralized access governance (A.9)",
            description:
              "Role-based policies, identity-led access, and documented provisioning workflows support formal access control procedures required by Annex A.9.",
            icon: "Users",
          },
          {
            title: "Session and audit logging (A.12.4)",
            description:
              "Session-level activity logs and configurable retention provide the monitoring and log review evidence ISO 27001 Operations Security requires.",
            icon: "Eye",
          },
          {
            title: "Reduced endpoint scope",
            description:
              "When work stays inside controlled workspace environments, the number of endpoints in ISMS scope shrinks — simplifying risk assessment and control coverage.",
            icon: "Monitor",
          },
          {
            title: "DLP and data movement controls",
            description:
              "Clipboard, download, and transfer controls address data handling requirements across multiple Annex A domains including A.8 (asset management) and A.13 (communications).",
            icon: "Lock",
          },
          {
            title: "Session isolation",
            description:
              "Logical separation between user workspaces supports the separation of duties and isolation principles embedded in ISO 27001 access and operations controls.",
            icon: "Layers",
          },
          {
            title: "Supplier security documentation",
            description:
              "Neverinstall provides trust documentation, DPAs, and security review materials that support customer ISMS supplier management (A.15) obligations.",
            icon: "FileText",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for ISO 27001",
        description:
          "ISO 27001 does not mandate a deployment model — it requires demonstrable control. All three Neverinstall deployment options can be included in an ISMS.",
        items: [
          {
            label: "Managed Cloud",
            value: "Shared responsibility",
            detail:
              "Managed cloud with Neverinstall's trust documentation supporting your ISMS supplier management obligations.",
          },
          {
            label: "Customer Cloud",
            value: "Customer controls",
            detail:
              "Deploy in your own cloud account for greater infrastructure control in your ISMS scope definition.",
          },
          {
            label: "Sovereign On-Prem",
            value: "Full ISMS scope",
            detail:
              "On-prem deployment brings workspace infrastructure fully within your ISMS boundary.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Compliance & Certifications",
        "Review the Trust Center attestation guidance and current certification posture.",
        "/security/compliance-certifications"
      ),
      relatedLink(
        "Security",
        "See the security architecture that underpins ISO 27001 Annex A control coverage.",
        "/security/security"
      ),
      relatedLink(
        "SOC 2",
        "See how the same control model maps to SOC 2 trust service criteria.",
        "/compliance/soc-2"
      ),
    ],
    faq: [
      {
        question: "Is Neverinstall ISO 27001 certified?",
        answer:
          "Neverinstall is pursuing ISO 27001 certification. The platform's centralized access governance, audit logging, and session controls are designed to support the Annex A requirements examiners assess. Contact us for current certification status.",
      },
      {
        question: "How does reducing endpoint scope help ISO 27001 audits?",
        answer:
          "ISMS scope decisions materially affect audit complexity. When work stays inside centrally controlled workspace environments, organizations can more easily define, document, and demonstrate controls rather than managing each endpoint individually.",
      },
    ],
    bottomCtas: [],
  }),

  "nist-800-53": compliancePage({
    name: "NIST 800-53",
    slug: "nist-800-53",
    path: "/compliance/nist-800-53",
    template: "compliance",
    seo: {
      title:
        "NIST 800-53 Compliant Virtual Desktop & Enterprise Browser | Neverinstall",
      description:
        "Map AC, AU, SC, CM, and IA control families with session isolation and centralized audit. Deploy on GovCloud or sovereign on-prem.",
    },
    summary:
      "How Neverinstall maps to NIST SP 800-53 security control families for federal and regulated enterprise environments.",
    hero: {
      eyebrow: "Compliance",
      title: "NIST 800-53 control alignment for federal environments.",
      subtitle:
        "NIST SP 800-53 defines the security and privacy control catalog used by federal agencies and increasingly by enterprise organizations. Neverinstall's centralized architecture addresses the access control, audit, and system protection families directly.",
      metric: "Control families covered at the architecture layer",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "How does Neverinstall support NIST 800-53 compliance?",
      "Neverinstall supports NIST 800-53 control families by providing centralized access control (AC), comprehensive audit and accountability (AU), system and communications protection (SC), and configuration management (CM) capabilities through a workspace architecture that keeps work inside governed environments."
    ),
    sections: [
      gridSection({
        title: "What NIST 800-53 requires",
        description:
          "NIST SP 800-53 Rev 5 organizes security controls into 20 families. The families most relevant to workspace infrastructure are AC, AU, SC, CM, and IA.",
        blocks: [
          {
            title: "Access Control (AC)",
            description:
              "Establish access policies, manage user accounts, enforce least privilege, and control remote access. AC-2 (account management) and AC-17 (remote access) are among the most examined.",
            icon: "Lock",
          },
          {
            title: "Audit and Accountability (AU)",
            description:
              "Create and maintain audit logs of security-relevant events, protect audit information, and review logs regularly. AU-2 (event logging) and AU-9 (audit record protection) are core requirements.",
            icon: "Eye",
          },
          {
            title: "System and Communications Protection (SC)",
            description:
              "Protect system boundaries, implement network segmentation, and use cryptographic controls. SC-7 (boundary protection) and SC-28 (protection of information at rest) are frequently assessed.",
            icon: "Shield",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall helps",
        description:
          "Neverinstall's workspace architecture directly implements or supports key NIST 800-53 control families at the infrastructure layer.",
        columns: 3,
        blocks: [
          {
            title: "Access control (AC family)",
            description:
              "Identity-led access, role-based permissions, session timeout, and remote access governance address AC-2, AC-3, AC-17, and related controls.",
            icon: "Users",
          },
          {
            title: "Audit logging (AU family)",
            description:
              "Session-level audit logs capture security-relevant events and access activity, supporting AU-2 event logging and AU-12 audit record generation requirements.",
            icon: "Eye",
          },
          {
            title: "System protection (SC family)",
            description:
              "Session isolation and workspace boundary enforcement address SC-7 boundary protection. Data-off-endpoints reduces SC-28 at-rest exposure on user devices.",
            icon: "Shield",
          },
          {
            title: "Configuration management (CM family)",
            description:
              "Centralized workspace provisioning and policy enforcement support documented baseline configurations and change management controls.",
            icon: "Settings",
          },
          {
            title: "Identification and authentication (IA family)",
            description:
              "Identity-based access enforcement and integration with enterprise identity providers support IA-2 user identification and IA-5 authenticator management.",
            icon: "Fingerprint",
          },
          {
            title: "Session recording",
            description:
              "Optional session recording provides deeper AU-family evidence for privileged access and high-sensitivity roles, supporting auditor review workflows.",
            icon: "Eye",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for NIST 800-53",
        description:
          "Federal and regulated organizations often require customer-controlled or on-prem deployment to satisfy FISMA authorization boundary requirements.",
        items: [
          {
            label: "Sovereign On-Prem",
            value: "FedRAMP-ready boundary",
            detail:
              "Full on-prem deployment keeps the authorization boundary under agency or organization control — the strongest posture for FISMA-governed systems.",
          },
          {
            label: "Customer Cloud",
            value: "ATO support",
            detail:
              "Deploy inside your GovCloud or authorized commercial cloud account with clear boundary definition for NIST assessment.",
          },
          {
            label: "Managed Cloud",
            value: "For enterprise",
            detail:
              "Suitable for non-federal enterprises using NIST 800-53 as a best-practice framework rather than a FISMA mandate.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "FedRAMP",
        "See Neverinstall's planned FedRAMP pursuit roadmap.",
        "/compliance/fedramp"
      ),
      relatedLink(
        "Security",
        "Review the security architecture behind NIST 800-53 control coverage.",
        "/security/security"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "See the infrastructure model that supports system boundary and protection controls.",
        "/security/infrastructure-architecture"
      ),
    ],
    faq: [
      {
        question:
          "Does Neverinstall map to all 20 NIST 800-53 control families?",
        answer:
          "Neverinstall's architecture most directly addresses the AC, AU, SC, CM, and IA control families. A full control mapping document is available for organizations conducting formal NIST-based assessments. Contact us to request it.",
      },
      {
        question: "Can Neverinstall be used in a FISMA-authorized system?",
        answer:
          "Organizations pursuing FISMA authorization using sovereign on-prem or customer-cloud deployment can include the Neverinstall workspace layer within their authorization boundary. FedRAMP authorization is a planned future pursuit.",
      },
    ],
    bottomCtas: [],
  }),

  fedramp: compliancePage({
    name: "FedRAMP",
    slug: "fedramp",
    path: "/compliance/fedramp",
    template: "compliance",
    seo: {
      title:
        "FedRAMP-Ready Virtual Desktop for Federal Agencies | Neverinstall",
      description:
        "FedRAMP authorization in progress. Deploy now on sovereign on-prem or GovCloud with NIST 800-53 control alignment. Talk to our team.",
    },
    summary:
      "Neverinstall's planned FedRAMP pursuit and current FedRAMP-ready architectural posture for federal agency evaluators.",
    hero: {
      eyebrow: "Compliance",
      title: "FedRAMP-ready architecture. Authorization planned.",
      subtitle:
        "Neverinstall has not yet received FedRAMP authorization, but is actively building toward it. Our sovereign on-prem deployment model, NIST 800-53 control alignment, and audit-ready architecture are designed to support the FedRAMP assessment process.",
      metric: "FedRAMP authorization in progress",
      primaryCta: contactCta,
      secondaryCta: trustCta,
    },
    answerCapsule: answerCapsule(
      "Is Neverinstall FedRAMP authorized?",
      "Neverinstall is not currently FedRAMP authorized. We are actively pursuing FedRAMP authorization and have designed the platform's sovereign deployment model and NIST 800-53 control coverage to align with FedRAMP requirements. Federal agencies can engage us now to discuss the roadmap and evaluate our current posture."
    ),
    sections: [
      gridSection({
        title: "What FedRAMP requires",
        description:
          "FedRAMP is the U.S. federal government's standardized approach to cloud security assessment, authorization, and continuous monitoring based on NIST SP 800-53.",
        blocks: [
          {
            title: "NIST 800-53 control implementation",
            description:
              "FedRAMP requires cloud service providers to implement and document NIST 800-53 controls at the Low, Moderate, or High baseline depending on the data sensitivity.",
            icon: "BadgeCheck",
          },
          {
            title: "Third-party assessment (3PAO)",
            description:
              "An accredited Third Party Assessment Organization must independently assess and validate the CSP's control implementation before authorization is granted.",
            icon: "Users",
          },
          {
            title: "Continuous monitoring",
            description:
              "FedRAMP-authorized systems must maintain ongoing compliance through regular vulnerability scanning, POA&M management, and annual assessments.",
            icon: "Eye",
          },
        ],
      }),
      gridSection({
        title: "Neverinstall's current posture",
        description:
          "While FedRAMP authorization is not yet complete, the platform's architecture is deliberately aligned with the requirements federal agencies care about most.",
        columns: 3,
        blocks: [
          {
            title: "NIST 800-53 control alignment",
            description:
              "Neverinstall's access control, audit logging, session isolation, and boundary protection capabilities map to the core NIST 800-53 control families FedRAMP assesses.",
            icon: "BadgeCheck",
          },
          {
            title: "Sovereign on-prem deployment",
            description:
              "The on-prem deployment model allows federal agencies or contractors to run Neverinstall inside their own authorization boundary while FedRAMP authorization progresses.",
            icon: "Building2",
          },
          {
            title: "Audit-ready evidence",
            description:
              "Session logs, access governance documentation, and architecture materials are structured to support the evidence requirements of a FedRAMP assessment.",
            icon: "FileText",
          },
          {
            title: "No data on endpoints",
            description:
              "Data-off-endpoints architecture reduces the attack surface and simplifies the scope of FIPS-validated cryptography requirements for data at rest.",
            icon: "Shield",
          },
          {
            title: "Session isolation and recording",
            description:
              "Strong session boundary controls and optional recording support Privileged Access Management and continuous monitoring requirements.",
            icon: "Eye",
          },
          {
            title: "Active pursuit — not a claimed certification",
            description:
              "Neverinstall is actively working toward FedRAMP authorization. We do not currently hold a FedRAMP authorization. Federal agencies should evaluate on current posture and roadmap.",
            icon: "Clock",
          },
        ],
      }),
      statsSection({
        title: "Deployment model for federal agencies",
        description:
          "Federal agencies and contractors evaluating Neverinstall today should use sovereign on-prem or customer cloud deployments to maintain their own authorization boundaries.",
        items: [
          {
            label: "Sovereign On-Prem",
            value: "Recommended now",
            detail:
              "Deploy inside the agency's or contractor's own authorization boundary while FedRAMP authorization is pursued. Full infrastructure control.",
          },
          {
            label: "Customer Cloud (GovCloud)",
            value: "ATO-compatible",
            detail:
              "Deploy on AWS GovCloud or Azure Government within your account to maintain a clear boundary for existing FISMA ATOs.",
          },
          {
            label: "FedRAMP Marketplace",
            value: "In progress",
            detail:
              "Neverinstall intends to pursue FedRAMP Marketplace listing. Contact us to be notified when authorization is achieved.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "NIST 800-53",
        "Review the NIST 800-53 control family alignment underlying FedRAMP requirements.",
        "/compliance/nist-800-53"
      ),
      relatedLink(
        "Infrastructure & Architecture",
        "See the architecture designed to support federal authorization boundaries.",
        "/security/infrastructure-architecture"
      ),
      relatedLink(
        "Security",
        "Review the security architecture that forms the FedRAMP-ready control foundation.",
        "/security/security"
      ),
    ],
    faq: [
      {
        question:
          "Can federal agencies use Neverinstall before FedRAMP authorization?",
        answer:
          "Federal agencies can deploy Neverinstall using a sovereign on-prem or customer GovCloud deployment within their own Authorization to Operate (ATO) boundary. This is a recognized path for using cloud-native tools before FedRAMP authorization is achieved.",
      },
      {
        question: "When will Neverinstall achieve FedRAMP authorization?",
        answer:
          "We are actively pursuing FedRAMP authorization. Timeline depends on the assessment process. Contact us to discuss the roadmap and receive updates when milestones are reached. We will not claim authorization until it is formally granted.",
      },
    ],
    bottomCtas: [],
  }),
}
