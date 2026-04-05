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
        "DPDP & GLBA Compliant Virtual Desktops for Financial Services | Neverinstall",
      description:
        "Secure virtual desktops and browser workspaces for banks, insurers, and fintechs. Meet DPDP Act, RBI data localization, GLBA, SOX, and NYDFS requirements with sovereign deployment options.",
    },
    summary:
      "Regulated workspace delivery for BFSI institutions — data residency under DPDP and RBI, third-party risk controls for vendor and contractor access, and Citrix-class desktop replacement at lower TCO.",
    hero: {
      eyebrow: "Financial Services",
      title:
        "Every audit finding starts at an unmanaged endpoint. Eliminate the surface.",
      subtitle:
        "Banks, NBFCs, and insurers face tightening mandates from DPDP Act, RBI outsourcing guidelines, and GLBA — all while onboarding more third-party vendors. Neverinstall centralizes regulated workloads inside auditable workspace boundaries so data never touches an uncontrolled device.",
      metric:
        "Porter chose Neverinstall over Microsoft for secure workspace delivery",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do regulated financial institutions choose Neverinstall?",
      "Financial institutions need workspace infrastructure that satisfies RBI data localization norms, DPDP Act consent and storage requirements, GLBA safeguards, and SOX audit trails — without the per-seat cost of legacy Citrix. Neverinstall delivers full desktops for trading floors and operations teams alongside browser-only access for vendor auditors and outsourced processors, all governed by a single policy engine with complete session-level audit logging."
    ),
    sections: [
      gridSection({
        title: "Regulatory and operational pressure points in BFSI",
        description:
          "Financial services firms face a unique combination of tightening compliance mandates, expanding third-party ecosystems, and aging VDI infrastructure that cannot keep pace.",
        blocks: [
          {
            title: "RBI and DPDP data localization mandates",
            description:
              "RBI outsourcing guidelines require that customer data processing stays within India. The DPDP Act adds consent-based data handling and storage locality rules. Every workspace session must enforce jurisdictional boundaries at the infrastructure level.",
          },
          {
            title: "Third-party vendor and BPO processor risk",
            description:
              "Banks outsource claims processing, KYC verification, and loan servicing to vendors who access core banking data from unmanaged endpoints — creating the exposure RBI and GLBA auditors flag first.",
          },
          {
            title: "Citrix and legacy VDI cost at BFSI scale",
            description:
              "Large banks run 5,000-50,000 Citrix seats with per-user licensing, dedicated StoreFront infrastructure, and multi-month upgrade cycles. The operational cost per seat makes digital transformation budgets impossible.",
          },
        ],
      }),
      gridSection({
        title: "Desktop Workspaces for operations teams, Browser Workspaces for vendors",
        description:
          "Trading desks and operations floors need persistent desktops with full application stacks. Third-party processors and audit firms need controlled browser access with no local data footprint.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces for employees and analysts",
            description:
              "Persistent desktops for treasury, risk, and operations teams running Bloomberg terminals, core banking thick clients, and Excel-heavy financial models. Sub-second session restore keeps trading floors operational during infrastructure events. Deploy on OCI, AWS, or on-premises to meet RBI data localization requirements.",
          },
          {
            title: "Secure Browser Workspaces for vendors and processors",
            description:
              "Browser-only access for BPO processors, KYC vendors, audit firms, and contract staff. No agent install on vendor devices, clipboard and download restrictions enforced by policy, full session recording for GLBA and SOX audit evidence. 70-80% lower cost per seat than provisioning a full desktop for every vendor user.",
          },
        ],
      }),
      statsSection({
        title: "Deployed in regulated financial environments",
        description:
          "Neverinstall is in production at financial services organizations operating under Indian and global regulatory frameworks.",
        items: [
          {
            label: "Customer",
            value: "Porter",
            detail:
              "Porter, a logistics and financial services company, chose Neverinstall over Microsoft for secure workspace delivery across distributed operations teams.",
          },
          {
            label: "India compliance",
            value: "DPDP Act + RBI Guidelines",
            detail:
              "Sovereign deployment on OCI or on-premises satisfies RBI outsourcing data localization and DPDP Act storage requirements without architectural workarounds.",
          },
          {
            label: "Global compliance",
            value: "GLBA + SOX + NYDFS 23 NYCRR 500",
            detail:
              "Session-level audit trails, centralized DLP enforcement, and zero-data-on-endpoint architecture map directly to GLBA safeguard rules, SOX IT controls, and NYDFS cybersecurity requirements.",
          },
        ],
      }),
      gridSection({
        title: "Deployment models for data residency compliance",
        description:
          "RBI data localization, DPDP Act, and cross-border banking regulations dictate where workloads run. Neverinstall supports every model without changing the control surface.",
        columns: 3,
        blocks: [
          {
            title: "Managed cloud",
            description:
              "Fastest path to production for fintechs and digital lenders. Neverinstall manages infrastructure in region-specific data centers while the institution retains full policy control.",
          },
          {
            title: "Customer cloud (OCI, AWS, Azure)",
            description:
              "Deploy inside your own cloud tenancy — the preferred model for banks meeting RBI outsourcing guidelines. Available on Oracle Cloud Infrastructure for Oracle-aligned institutions.",
          },
          {
            title: "On-premises deployment",
            description:
              "Full deployment inside bank-owned data centers for institutions with board-level mandates on data sovereignty or air-gap requirements for core banking workloads.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Neverinstall vs Citrix",
        "Side-by-side comparison for banks replacing Citrix XenDesktop with a cloud-native alternative.",
        "/compare/vs-citrix"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "How financial institutions control BPO processor and audit firm access without provisioning full desktops.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Trust Center",
        "SOC 2 Type II, encryption standards, and data handling practices for regulated workloads.",
        "/security"
      ),
    ],
    faq: [
      {
        question:
          "How does Neverinstall help banks meet RBI data localization requirements?",
        answer:
          "Customer cloud and on-premises deployment options keep all workspace data — session state, application data, and user files — inside India-based infrastructure. The RBI outsourcing framework requires that customer data processing remains within Indian jurisdiction, and Neverinstall's OCI and on-prem deployment models satisfy this without routing any data through external regions.",
      },
      {
        question:
          "Can vendor and BPO teams access core banking applications without installing agents on their devices?",
        answer:
          "Yes. Secure Browser Workspaces provide agentless, browser-only access with enforced DLP controls including clipboard restrictions, download blocking, and watermarked session recording. Vendor devices never store bank data locally, which directly addresses the third-party access risks flagged in GLBA safeguard rules and RBI outsourcing guidelines.",
      },
      {
        question:
          "What audit evidence does Neverinstall provide for SOX and GLBA compliance?",
        answer:
          "Every workspace session generates timestamped audit logs covering user authentication, application access, file operations, and session duration. Session recording captures full visual evidence of user activity. These records map to SOX IT general controls and GLBA safeguard requirements for access monitoring and data handling oversight.",
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
      title:
        "Secure Developer Workspaces & Contractor Onboarding for IT Services | Neverinstall",
      description:
        "Provision pre-configured developer desktops in minutes, isolate client environments, and onboard offshore contractors without shipping laptops. SOC 2 compliant DaaS and secure browser access for IT services firms.",
    },
    summary:
      "Pre-configured developer desktops and isolated client environments for IT services firms. Eliminate hardware procurement delays, enforce client-level IP isolation, and onboard offshore contractors in minutes instead of weeks.",
    hero: {
      eyebrow: "IT Services & Outsourcing",
      title:
        "Your next project starts in minutes, not after procurement ships a laptop.",
      subtitle:
        "IT services margins depend on fast ramp-up and tight IP controls across client engagements. Neverinstall provisions pre-configured developer desktops with client-specific toolchains, isolates code at the project level, and onboards offshore contractors through browser-only access — no hardware logistics, no local code exposure.",
      metric: "Onboard a developer in 15 minutes, not 2 weeks",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do IT services firms switch to Neverinstall?",
      "Services firms lose billable days to hardware procurement, environment setup, and contractor onboarding. Neverinstall eliminates all three: golden-image developer desktops spin up in minutes with the right IDE, SDK, and VPN pre-configured per client engagement. Offshore and contract developers access code through browser workspaces with clipboard restrictions and zero local storage. When a project ends, deprovision the workspace — no laptop return logistics, no data wipe procedures, no residual IP risk."
    ),
    sections: [
      gridSection({
        title: "What slows IT services delivery and erodes margin",
        description:
          "The services delivery model creates compounding friction from hardware dependencies, environment drift, and client IP exposure across distributed teams.",
        blocks: [
          {
            title: "Hardware procurement delays kill project ramp-up",
            description:
              "Every new engagement or staffing change triggers laptop procurement, imaging, shipping, and secure configuration. A 50-person project ramp takes weeks before a single line of code ships — burning margin and client patience.",
          },
          {
            title: "Client IP leaks through offshore and contractor endpoints",
            description:
              "SOW terms require IP isolation, but offshore developers and subcontractors access client code from personal or shared machines. One unmanaged endpoint storing a client repo creates contractual and legal exposure that no NDA covers.",
          },
          {
            title: "Environment drift across projects and geographies",
            description:
              "Different OS versions, SDK configurations, and local dependency states across team machines create 'works on my machine' bugs that consume senior engineering time and delay client deliverables.",
          },
        ],
      }),
      gridSection({
        title: "Developer desktops for delivery teams, browser access for contractors",
        description:
          "Core engineering teams need full development environments with GPU and build tooling. Short-term contractors and client-side collaborators need controlled access without a device relationship.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces for developers and project teams",
            description:
              "Golden-image desktops pre-loaded with client-specific IDEs, SDKs, container runtimes, and VPN configurations. Spin up 50 identical environments for a new engagement in one API call. Developers get consistent builds, IT gets centralized patching, and project managers get instant ramp-up without procurement tickets.",
          },
          {
            title: "Secure Browser Workspaces for contractors and offshore teams",
            description:
              "Browser-only access for subcontracted developers, QA testers, and client reviewers. Code never leaves the workspace — clipboard, download, and screen-capture restrictions enforce client IP boundaries. No agent install on contractor devices, no MDM enrollment, no laptop shipping. 70-80% lower cost per seat than provisioning a full desktop.",
          },
        ],
      }),
      gridSection({
        title: "How Neverinstall changes IT services economics",
        description:
          "Every improvement directly impacts billable utilization, hardware CapEx, and client security compliance.",
        columns: 4,
        blocks: [
          {
            title: "Minutes to first commit",
            description:
              "Pre-configured developer desktops eliminate the multi-day onboarding cycle. New team members write code on day one instead of waiting for hardware and environment setup.",
          },
          {
            title: "Client-level environment isolation",
            description:
              "Workspace policies, network rules, and access controls are scoped per client engagement. No cross-contamination between projects even when the same developer works across accounts.",
          },
          {
            title: "Zero IP on unmanaged endpoints",
            description:
              "Source code, build artifacts, and client data never reach a local filesystem. DLP enforcement at the platform level satisfies the IP isolation clauses in enterprise SOWs and MSAs.",
          },
          {
            title: "Elastic project scaling",
            description:
              "Add 30 seats for a sprint surge and deprovision them when the phase ends. No hardware return logistics, no asset tracking, no data wipe procedures.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Developer Workspaces",
        "Pre-configured development environments with IDE, SDK, and build tooling ready on first login.",
        "/solutions/use-case/developer-workspaces"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Browser-only workspace access for offshore developers and subcontractors with enforced IP isolation.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Desktop as a Service",
        "Full DaaS product capabilities for large-scale developer workspace fleets.",
        "/products/daas"
      ),
    ],
    faq: [
      {
        question:
          "Can we create different workspace templates for different client engagements?",
        answer:
          "Yes. Each client engagement can have its own golden image with pre-configured IDEs, SDKs, VPN settings, and access policies. When you onboard a developer to a project, they get the exact environment that engagement requires — no manual setup, no configuration drift across the team.",
      },
      {
        question:
          "How does Neverinstall handle IP isolation when one developer works across multiple client projects?",
        answer:
          "Workspace policies enforce strict isolation at the project level. A developer switching between client engagements gets separate workspace sessions with independent network rules, file systems, and access controls. No data carries between client environments, satisfying the IP segregation requirements in enterprise master service agreements.",
      },
      {
        question:
          "What happens to workspace data when a contractor's engagement ends?",
        answer:
          "Deprovisioning a workspace permanently destroys all local session data, cached files, and environment state. There is no laptop to recall, no hard drive to wipe, and no residual client IP on any device. Deprovisioning is instant and auditable.",
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
      title:
        "Virtual Desktops for BPO & Call Centers — Shift Resets, Thin Client Support | Neverinstall",
      description:
        "Non-persistent desktops with clean shift resets for contact center agents. Run CRM and telephony on thin clients, enforce DLP across thousands of seats, and cut VDI costs 70-80% vs Citrix.",
    },
    summary:
      "High-volume, shift-based workspace delivery purpose-built for BPO and contact center operations. Non-persistent sessions with clean resets, thin-client compatibility, and centralized DLP across thousands of agent seats. Tally Solutions runs this in production on Oracle Cloud Infrastructure.",
    hero: {
      eyebrow: "BPO & Contact Centers",
      title:
        "3,000 agents. Three shifts. Zero data left behind between handovers.",
      subtitle:
        "Contact centers run on tight margins with high agent turnover, shared workstations, and client data flowing through every seat. Neverinstall delivers non-persistent desktops that reset cleanly at every shift boundary, run CRM and telephony stacks on thin clients, and enforce DLP policies across your entire agent population — at a fraction of Citrix per-seat cost.",
      metric:
        "Tally Solutions runs Neverinstall at scale across OCI-hosted operations",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do BPO operators choose Neverinstall over legacy VDI?",
      "BPO margins depend on cost per seat, speed of provisioning, and client data protection across shift-based workforces. Neverinstall replaces Citrix and VMware with non-persistent desktops that reset at every shift boundary — no residual customer data between agents, no expensive endpoint hardware, no multi-month VDI rollouts. Tally Solutions runs Neverinstall in production on OCI for their customer-facing operations teams, proving the model at contact-center scale."
    ),
    sections: [
      gridSection({
        title: "What breaks in contact center operations at scale",
        description:
          "The combination of high seat counts, constant agent turnover, shift-based schedules, and client data sensitivity creates operational challenges that generic workspace solutions cannot address.",
        blocks: [
          {
            title: "Agent churn outpaces provisioning capacity",
            description:
              "BPO operations onboard new agent cohorts weekly for campaign launches, seasonal surges, and attrition backfill. Manual desktop provisioning and imaging cannot keep pace — every delay is unbillable seat time and missed SLA commitments to clients.",
          },
          {
            title: "Shift handovers leak client data between agents",
            description:
              "When Agent B logs into the same workstation Agent A used last shift, cached credentials, browser history, CRM session tokens, and clipboard data from the previous session create data spillover. This is a PCI DSS and client contractual violation waiting to happen.",
          },
          {
            title: "Citrix per-seat licensing erodes BPO margins",
            description:
              "Legacy VDI stacks charge per named user or concurrent user with add-on licensing for NetScaler, StoreFront, and Provisioning Services. At 3,000-10,000 seats, the licensing cost alone consumes margin that should fund operations.",
          },
        ],
      }),
      gridSection({
        title: "Non-persistent desktops for agents, browser access for supervisors",
        description:
          "Agents running CRM, telephony, and client applications need full desktop sessions with clean shift resets. Supervisors and QA teams monitoring dashboards need lightweight browser access.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces for contact center agents",
            description:
              "Non-persistent desktop sessions pre-loaded with CRM (Salesforce, Zoho, Freshdesk), telephony clients (Genesys, Five9, Avaya), and client-specific application stacks. Every shift starts from a clean golden image. When the agent logs out, the session is destroyed — no cached data, no residual credentials, no carryover between shifts. Runs on existing thin clients and low-end hardware.",
          },
          {
            title: "Secure Browser Workspaces for supervisors and QA",
            description:
              "Browser-only access for team leads monitoring dashboards, QA analysts reviewing call recordings, and client stakeholders accessing reporting portals. No full desktop license needed. Clipboard and download restrictions prevent data extraction. 70-80% lower cost per seat than a full agent desktop — the right economics for users who only touch web applications.",
          },
        ],
      }),
      gridSection({
        title: "Built for contact center operational patterns",
        description:
          "Every capability maps to a specific BPO operational requirement — shift management, hardware economics, data protection, and scaling velocity.",
        columns: 4,
        blocks: [
          {
            title: "Clean shift resets",
            description:
              "Non-persistent sessions destroy all user data at shift end. The next agent gets a pristine environment — no cached credentials, no clipboard remnants, no browser history from the previous shift.",
          },
          {
            title: "Thin client and commodity hardware",
            description:
              "All compute runs server-side. Agent endpoints only stream the session, so existing thin clients, refurbished PCs, and low-cost Chromebooks become fully capable agent workstations.",
          },
          {
            title: "Centralized DLP across all seats",
            description:
              "USB blocking, clipboard restrictions, download prevention, and screen-capture controls enforce client data protection policies uniformly across every agent session — no endpoint-level configuration needed.",
          },
          {
            title: "Provision 500 seats in an afternoon",
            description:
              "New campaign launches and seasonal ramps no longer wait for hardware procurement and imaging. Template-based provisioning scales agent seat counts in hours, not weeks.",
          },
        ],
      }),
      statsSection({
        title: "In production at contact center scale",
        description:
          "Neverinstall is deployed in high-volume BPO operations handling thousands of concurrent agent sessions.",
        items: [
          {
            label: "Customer",
            value: "Tally Solutions",
            detail:
              "Tally Solutions runs Neverinstall at scale for their customer-facing operations workforce, deployed on Oracle Cloud Infrastructure.",
          },
          {
            label: "Cost reduction",
            value: "70-80% lower per-seat cost",
            detail:
              "Browser-first supervisor and QA seats cost 70-80% less than full desktop licenses. Agent desktops also cost significantly less than equivalent Citrix XenDesktop seats due to eliminated per-user licensing.",
          },
          {
            label: "Deployment velocity",
            value: "Production in days",
            detail:
              "Typical BPO deployments reach production-ready state in days to weeks, compared to the 3-6 month timelines for legacy Citrix or VMware Horizon rollouts.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Neverinstall vs Citrix",
        "Head-to-head comparison for BPO operators evaluating Citrix XenDesktop replacement.",
        "/compare/vs-citrix"
      ),
      relatedLink(
        "Desktop as a Service",
        "Full DaaS capabilities for large non-persistent desktop fleets at contact center scale.",
        "/products/daas"
      ),
      relatedLink(
        "Business Continuity",
        "Keep agent operations running during site outages with instant failover to alternate locations.",
        "/solutions/use-case/business-continuity"
      ),
    ],
    faq: [
      {
        question:
          "How does the non-persistent session model handle shift handovers?",
        answer:
          "When an agent ends their shift and logs out, the entire desktop session is destroyed — including cached credentials, browser state, CRM session tokens, clipboard history, and any temporary files. The next agent on that shift gets a freshly provisioned session from a clean golden image. This eliminates the data spillover risk that occurs when agents share physical workstations across shifts.",
      },
      {
        question:
          "Can Neverinstall run on the thin clients and low-end PCs we already have deployed?",
        answer:
          "Yes. All compute and application processing runs server-side in the cloud or your data center. Agent endpoints only need to stream the session, so existing thin clients, older PCs, and even Chromebooks work as fully capable agent workstations. This eliminates the endpoint hardware refresh cycles that BPO operators typically budget for every 3-4 years.",
      },
      {
        question:
          "How does Neverinstall handle rapid scaling for new campaign launches?",
        answer:
          "Template-based provisioning lets operations teams spin up hundreds of pre-configured agent desktops from a golden image in hours. When the campaign ends or scales down, those seats are deprovisioned instantly. You pay for active usage, not permanently allocated seat licenses — aligning infrastructure cost to actual operational demand.",
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
      title:
        "HIPAA Compliant Virtual Desktops for Healthcare & Hospital Systems | Neverinstall",
      description:
        "HIPAA-compliant virtual desktops and secure browser access for clinicians, nurses, and healthcare staff. Zero PHI on shared workstations, EHR access from any device, and ransomware-resilient infrastructure for hospital systems.",
    },
    summary:
      "HIPAA-compliant workspace delivery for healthcare organizations — zero PHI on shared workstations, instant clinician roaming across care locations, EHR and PACS access from any device, and ransomware-resilient infrastructure that recovers clinical operations in seconds.",
    hero: {
      eyebrow: "Healthcare",
      title:
        "A nurse logs in at three workstations per shift. PHI should never persist on any of them.",
      subtitle:
        "Healthcare runs on shared terminals, roaming clinicians, and legacy EHR systems that were never designed for modern endpoint diversity. Neverinstall delivers HIPAA-compliant virtual desktops where PHI stays inside the workspace boundary — not on the shared COW, the nurse station terminal, or the physician's personal tablet.",
      metric: "Zero PHI on endpoints, sub-second session restore for care continuity",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do healthcare organizations choose Neverinstall for HIPAA compliance?",
      "HIPAA Security Rule requires access controls, audit trails, and transmission security for ePHI — but hospital environments run on shared workstations, roaming clinicians, and BYOD devices that make endpoint-level compliance nearly impossible. Neverinstall centralizes EHR, PACS, and clinical applications inside workspace boundaries where PHI never reaches the local device. Non-persistent sessions reset at every login, session recording provides audit evidence for HIPAA compliance officers, and sub-second restore keeps clinical workflows running through ransomware events and infrastructure failures."
    ),
    sections: [
      gridSection({
        title: "Why traditional endpoint management fails in clinical settings",
        description:
          "Healthcare workflows create a uniquely hostile environment for endpoint security: shared devices, roaming users, legacy clinical applications, and life-critical uptime requirements that no other industry faces simultaneously.",
        blocks: [
          {
            title: "Shared workstations expose PHI between clinicians",
            description:
              "Nurses, physicians, and allied health staff share COWs (computers on wheels), nurse station terminals, and exam room PCs across shifts. Cached EHR sessions, browser credentials, and clipboard data from the previous user create HIPAA violations that endpoint management tools cannot prevent at clinical pace.",
          },
          {
            title: "HIPAA Security Rule demands technical safeguards at every access point",
            description:
              "The Security Rule requires unique user identification, automatic logoff, encryption, and audit controls for ePHI access. When clinicians access Epic, Cerner, or Meditech from shared devices and personal tablets, every access point becomes a compliance surface that IT must monitor and control.",
          },
          {
            title: "Ransomware shuts down clinical operations for days",
            description:
              "Hospital ransomware attacks disable EHR access, divert ambulances, and force paper-based workflows. Traditional recovery takes 3-7 days of downtime. Clinical operations need infrastructure that can restore access to patient systems in seconds, not through backup tape restoration.",
          },
        ],
      }),
      gridSection({
        title: "Clinical desktops for care teams, browser access for administrative staff",
        description:
          "Clinicians running EHR thick clients and diagnostic imaging need full desktop sessions with instant roaming. Administrative staff, telehealth coordinators, and billing teams need controlled browser access to web-based portals.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces for clinicians and clinical staff",
            description:
              "Non-persistent desktop sessions for physicians, nurses, and allied health staff accessing Epic, Cerner, Meditech, or PACS imaging systems. Each login provisions a fresh session with the clinician's profile and application state. When they walk to the next workstation, the session follows. When they log off, PHI is destroyed from the endpoint. Sub-second restore keeps clinical workflows running through infrastructure events.",
          },
          {
            title: "Secure Browser Workspaces for administration and telehealth",
            description:
              "Browser-only access for billing specialists, medical coders, telehealth coordinators, and contract staff accessing web-based patient portals, scheduling systems, and claims management platforms. No PHI on the local device, clipboard and download restrictions enforced by policy, and full session recording for HIPAA audit evidence. 70-80% lower cost than provisioning a full clinical desktop for administrative users.",
          },
        ],
      }),
      gridSection({
        title: "Deployment models for healthcare data residency and compliance",
        description:
          "Where PHI is processed and stored determines your HIPAA compliance posture. Neverinstall supports every deployment model health systems require.",
        columns: 3,
        blocks: [
          {
            title: "Managed cloud with BAA",
            description:
              "Fastest deployment for clinics and ambulatory networks. Neverinstall manages HIPAA-aligned infrastructure with a Business Associate Agreement and customer-controlled access policies.",
          },
          {
            title: "Customer cloud (AWS, Azure, OCI)",
            description:
              "Deploy inside your health system's own HIPAA-eligible cloud tenancy. PHI processing stays within your infrastructure boundary and your existing cloud BAA.",
          },
          {
            title: "On-premises for hospital data centers",
            description:
              "Full on-premises deployment for large hospital systems and health networks with board-level mandates on data locality or air-gap requirements for clinical workloads.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Business Continuity",
        "How Neverinstall keeps clinical systems accessible during ransomware events with sub-second session restore.",
        "/solutions/use-case/business-continuity"
      ),
      relatedLink(
        "Secure BYOD",
        "Let clinicians access EHR systems from personal tablets and phones without PHI touching the device.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Trust Center",
        "Security architecture, encryption standards, and compliance certifications for healthcare workloads.",
        "/security"
      ),
    ],
    faq: [
      {
        question:
          "How does Neverinstall address HIPAA Security Rule requirements for shared workstations?",
        answer:
          "Non-persistent desktop sessions enforce unique user identification at every login, automatically destroy PHI from the endpoint at logoff, and generate timestamped audit logs for every access event. Clinicians moving between shared COWs, nurse stations, and exam room terminals get fresh sessions each time — no cached credentials, no residual patient data, no clipboard carryover from the previous user. This directly addresses the access control and audit trail requirements in the HIPAA Security Rule.",
      },
      {
        question:
          "Can clinicians roam between workstations without losing their EHR session?",
        answer:
          "Yes. Desktop Workspaces support session persistence across locations. A clinician can lock their session at one workstation and resume it at another within seconds. The EHR application state, open patient charts, and workflow context follow the clinician — but PHI never persists on any physical endpoint.",
      },
      {
        question:
          "How quickly can clinical operations recover from a ransomware attack with Neverinstall?",
        answer:
          "Because clinical applications and data run inside centralized workspace infrastructure rather than on individual endpoints, a ransomware event affecting local devices does not disable clinical access. Clinicians can resume EHR access from any unaffected endpoint with sub-second session restore. The attack surface is the endpoint display — not the clinical data or application stack.",
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
      title:
        "Sovereign Virtual Desktops for Government & Defense — Air-Gap, On-Prem, FedRAMP Ready | Neverinstall",
      description:
        "Data sovereign virtual desktops and secure browser access for government agencies and defense contractors. On-premises, air-gapped, and GovCloud deployment with FedRAMP-readiness on the roadmap. No vendor cloud dependency.",
    },
    summary:
      "Sovereignty-first workspace infrastructure for government agencies and defense contractors. Full on-premises and air-gapped deployment with no vendor cloud dependency, NIST 800-53 aligned controls, and FedRAMP authorization on the product roadmap.",
    hero: {
      eyebrow: "Government & Defense",
      title:
        "Classified work requires infrastructure where no vendor sees the data. Not even us.",
      subtitle:
        "Government agencies and defense contractors cannot route workspace traffic through vendor-managed cloud infrastructure. Neverinstall deploys entirely on-premises or inside GovCloud tenancies — the full control plane and data plane run inside your security boundary, with air-gap support for classified environments and NIST 800-53 aligned access controls.",
      metric: "Full sovereign deployment with zero vendor data access",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do government and defense organizations need sovereign workspace infrastructure?",
      "Most commercial DaaS platforms route session data through vendor-managed infrastructure — disqualifying them for ITAR-controlled work, classified environments, and agencies with NIST 800-53 High baselines. Neverinstall is architecturally different: the entire platform — control plane, session orchestration, and data plane — deploys inside your data center, your GovCloud tenancy, or an air-gapped enclave. No telemetry leaves your boundary. Both full desktops for analysts and browser-only access for inter-agency collaborators run on the same sovereign infrastructure."
    ),
    sections: [
      gridSection({
        title: "Requirements that eliminate most commercial vendors",
        description:
          "Government and defense procurement has hard technical requirements around data sovereignty, operational independence, and supply chain risk that generic DaaS vendors cannot meet.",
        blocks: [
          {
            title: "Data sovereignty under FISMA, ITAR, and national security directives",
            description:
              "FISMA requires that federal information systems operate within authorized boundaries. ITAR prohibits foreign access to defense articles. National security directives mandate jurisdictional control over classified workloads. Any workspace platform that routes data through shared commercial infrastructure fails these requirements at the architecture level.",
          },
          {
            title: "Operational independence during contested environments",
            description:
              "Military and intelligence operations require systems that continue functioning when commercial cloud connectivity is degraded or denied. Workspace infrastructure must operate independently of internet-dependent vendor services — including licensing servers, update channels, and management consoles.",
          },
          {
            title: "Supply chain and vendor trust boundaries",
            description:
              "NIST 800-161 supply chain risk management and Zero Trust Architecture (NIST 800-207) require that agencies control who can access infrastructure components. Vendor-managed platforms create trust boundary violations that security assessors flag during ATO reviews.",
          },
        ],
      }),
      gridSection({
        title: "Analyst desktops and inter-agency browser access on sovereign infrastructure",
        description:
          "Agency analysts running classified applications need full desktop sessions. Contractors, inter-agency partners, and temporary staff need controlled browser access — all deployed inside your security boundary.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces for agency personnel and analysts",
            description:
              "Full desktop environments for intelligence analysts, program managers, and operations staff running thick-client applications, GIS tools, and data analysis platforms. Centralized policy enforcement, session recording for insider threat programs, and sub-second restore for operational continuity. Deployed entirely on-premises or in AWS GovCloud / Azure Government with no data egress to vendor infrastructure.",
          },
          {
            title: "Secure Browser Workspaces for contractors and inter-agency access",
            description:
              "Browser-only access for defense contractors, inter-agency collaborators, and temporary personnel who need controlled entry to specific web applications without a full desktop footprint. No agent on contractor devices, enforced DLP controls, and complete session audit trails — all running on the same sovereign infrastructure as full desktops.",
          },
        ],
      }),
      gridSection({
        title: "Deployment models for sovereign and classified environments",
        description:
          "Government workspace infrastructure must run where the mission requires — from GovCloud tenancies to fully air-gapped enclaves.",
        columns: 3,
        blocks: [
          {
            title: "GovCloud deployment (AWS, Azure, OCI)",
            description:
              "Deploy inside your agency's FedRAMP-authorized cloud tenancy on AWS GovCloud, Azure Government, or OCI Government. Neverinstall operates within your existing ATO boundary without introducing new external data flows.",
          },
          {
            title: "On-premises in agency data centers",
            description:
              "Full deployment inside government-owned data centers with no external connectivity requirements for platform operation. The control plane, session orchestration, and data plane all run on infrastructure your agency physically controls.",
          },
          {
            title: "Air-gapped and SCIF-ready",
            description:
              "Architecture supports fully disconnected operation for classified environments. No license call-home, no telemetry egress, no update dependency on external servers. Designed for SCIF and compartmented facility deployment.",
          },
        ],
      }),
      statsSection({
        title: "Compliance alignment and certification roadmap",
        description:
          "Neverinstall is building toward the compliance certifications that government procurement requires, with architecture that already supports the underlying technical controls.",
        items: [
          {
            label: "Current posture",
            value: "NIST 800-53 aligned controls",
            detail:
              "Platform access controls, audit logging, session management, and encryption align to NIST 800-53 control families including AC, AU, SC, and SI. Formal FedRAMP authorization is on the product roadmap.",
          },
          {
            label: "Architecture advantage",
            value: "Zero vendor data access",
            detail:
              "In on-premises and air-gapped deployments, Neverinstall has no access to customer data, session content, or telemetry. This eliminates the vendor trust boundary concerns that complicate ATO assessments for SaaS-delivered platforms.",
          },
          {
            label: "Deployment independence",
            value: "No internet dependency for operation",
            detail:
              "The platform operates without external connectivity for licensing, updates, or management. This supports mission-critical environments where commercial internet access is unavailable or denied.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Browser Workspaces",
        "Controlled browser access for defense contractors and inter-agency collaborators on sovereign infrastructure.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Desktop as a Service",
        "Full DaaS capabilities for agency-wide workspace delivery with on-premises and GovCloud deployment.",
        "/products/daas"
      ),
      relatedLink(
        "Trust Center",
        "Security architecture, encryption standards, and compliance certifications for sovereign deployments.",
        "/security"
      ),
    ],
    faq: [
      {
        question:
          "Can Neverinstall deploy in a SCIF or fully air-gapped classified environment?",
        answer:
          "Yes. The entire Neverinstall platform — control plane, session orchestration, and data plane — runs inside your physical infrastructure boundary with no external connectivity requirements. There is no license call-home, no telemetry egress, and no update dependency on internet-connected servers. The architecture is designed for SCIF, compartmented facility, and air-gapped enclave deployment.",
      },
      {
        question:
          "What is Neverinstall's FedRAMP status?",
        answer:
          "FedRAMP authorization is on the Neverinstall product roadmap. The platform architecture already aligns to NIST 800-53 control families required for FedRAMP — including access control (AC), audit and accountability (AU), system and communications protection (SC), and system and information integrity (SI). For current deployments, agencies can assess the platform within their own ATO boundary using on-premises or GovCloud deployment.",
      },
      {
        question:
          "How does Neverinstall handle contractor access in defense environments without installing agents on contractor devices?",
        answer:
          "Secure Browser Workspaces provide agentless, browser-only access that runs entirely on sovereign infrastructure. Defense contractors access specific web applications through a controlled browser session with enforced DLP controls — clipboard restrictions, download prevention, watermarked session recording, and complete audit trails. No data reaches the contractor's device, and no agent or MDM enrollment is required on contractor-owned hardware.",
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
      title:
        "Virtual Desktops for Manufacturing — CAD, PLM & Plant-Floor Access | Neverinstall",
      description:
        "GPU-accelerated virtual desktops for CAD, PLM, and engineering teams across manufacturing plants. Citrix replacement, secure partner access, and on-prem deployment for OT-sensitive environments.",
    },
    summary:
      "GPU-accelerated engineering desktops for CAD and PLM workloads, secure partner access for supply chain collaborators, and on-premises deployment for plant environments where OT data cannot leave the facility. Indovance is a production customer replacing Citrix.",
    hero: {
      eyebrow: "Manufacturing & Industrial",
      title:
        "Your engineers run SolidWorks across three continents. The IP should never leave your network.",
      subtitle:
        "Manufacturing engineering teams need GPU-accelerated desktops for CAD, PLM, and simulation tools — but distributing those workloads across plant sites, corporate offices, and partner locations creates IP exposure that Citrix was never architected to solve at modern scale. Neverinstall centralizes engineering workloads where design files, process data, and operational IP stay inside your infrastructure boundary. Indovance replaced Citrix with Neverinstall for their distributed engineering operations.",
      metric:
        "Indovance replaced Citrix with Neverinstall for distributed engineering access",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do manufacturing organizations replace Citrix with Neverinstall?",
      "Manufacturing engineering runs on GPU-heavy applications — SolidWorks, AutoCAD, Siemens NX, PTC Creo — that require expensive workstation hardware at every engineer's desk. Citrix can virtualize these workloads but at prohibitive per-seat licensing cost and with multi-month deployment timelines. Neverinstall delivers GPU-accelerated desktops that run CAD and PLM tools at full performance, with on-premises deployment for plant environments where ITAR, trade secret, or OT-network isolation requirements prohibit cloud-hosted engineering data. Indovance, a manufacturing services firm, moved from Citrix to Neverinstall for their engineering workforce."
    ),
    sections: [
      gridSection({
        title: "What breaks in manufacturing IT at multi-site scale",
        description:
          "Manufacturing organizations operate across plants, corporate offices, partner sites, and contractor locations — each with different network conditions, security requirements, and hardware constraints.",
        blocks: [
          {
            title: "Engineering workstations tied to physical locations",
            description:
              "CAD and PLM applications require GPU-accelerated hardware that costs $3,000-8,000 per workstation. Engineers at remote plants, home offices, or partner sites cannot access design tools without shipping expensive hardware or accepting degraded performance over VPN.",
          },
          {
            title: "Design IP and process data exposure across partner networks",
            description:
              "Supply chain partners, contract manufacturers, and maintenance vendors need access to engineering drawings, BOMs, and process specifications — but every file shared outside your network is IP that can be copied, forwarded, or stored on unmanaged devices. ITAR-controlled designs add export compliance risk to every external access point.",
          },
          {
            title: "Citrix licensing costs scale faster than engineering headcount",
            description:
              "Legacy Citrix environments require per-user licensing, StoreFront infrastructure, GPU pass-through configuration, and dedicated admin teams. At 500+ engineering seats across multiple plants, the total cost of Citrix ownership exceeds the cost of the engineering workstations it was supposed to replace.",
          },
        ],
      }),
      gridSection({
        title: "GPU desktops for engineers, browser access for supply chain partners",
        description:
          "Engineering teams running SolidWorks and Siemens NX need full GPU-accelerated desktops. Supply chain partners reviewing drawings and BOMs need controlled browser access with zero local data footprint.",
        columns: 2,
        blocks: [
          {
            title: "Desktop Workspaces for engineers and operations teams",
            description:
              "GPU-accelerated desktop environments for mechanical engineers, electrical designers, and manufacturing operations teams running SolidWorks, AutoCAD, Siemens NX, PTC Creo, and PLM systems like Teamcenter and Windchill. Full workstation performance without physical workstation hardware. Deploy on-premises at plant sites or in your cloud tenancy to keep design files, simulation data, and process IP inside your infrastructure boundary.",
          },
          {
            title: "Secure Browser Workspaces for partners and contractors",
            description:
              "Browser-only access for contract manufacturers reviewing engineering drawings, maintenance vendors accessing equipment documentation, and supply chain partners checking BOM specifications. No design files download to partner devices. Clipboard restrictions, watermarked sessions, and download prevention enforce IP containment without requiring MDM on partner hardware. 70-80% lower cost than provisioning a full engineering desktop for every external collaborator.",
          },
        ],
      }),
      gridSection({
        title: "Deployment models for plant environments and OT network isolation",
        description:
          "Manufacturing data residency requirements range from corporate cloud policies to plant-level OT network isolation and ITAR export control. Neverinstall supports every model.",
        columns: 3,
        blocks: [
          {
            title: "Managed cloud for corporate engineering",
            description:
              "Fastest deployment for corporate engineering teams and design centers without plant-level data restrictions. GPU-accelerated instances on managed infrastructure with full policy control.",
          },
          {
            title: "Customer cloud (OCI, AWS, Azure)",
            description:
              "Deploy in your own cloud tenancy for engineering organizations that require data residency within specific regions. GPU instance types matched to CAD and simulation workload requirements.",
          },
          {
            title: "On-premises at plant sites",
            description:
              "Full on-prem deployment for manufacturing facilities where engineering data, process specifications, or ITAR-controlled designs must remain on the plant network with no external connectivity.",
          },
        ],
      }),
      statsSection({
        title: "In production at manufacturing organizations",
        description:
          "Neverinstall is deployed in manufacturing environments handling engineering workloads, partner collaboration, and multi-site operations.",
        items: [
          {
            label: "Customer",
            value: "Indovance",
            detail:
              "Indovance, a manufacturing engineering services firm, replaced their Citrix deployment with Neverinstall for distributed engineering access across their operations teams — reducing per-seat cost and eliminating multi-month VDI upgrade cycles.",
          },
          {
            label: "Citrix replacement",
            value: "Lower TCO, faster deployment",
            detail:
              "Manufacturing organizations replacing Citrix with Neverinstall see significant per-seat cost reduction by eliminating Citrix per-user licensing, StoreFront infrastructure, and dedicated VDI admin overhead.",
          },
          {
            label: "GPU workload support",
            value: "Full CAD and PLM performance",
            detail:
              "GPU-accelerated Desktop Workspaces run SolidWorks, AutoCAD, Siemens NX, and other engineering applications at full workstation performance — accessible from any device at any plant or office location.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Neverinstall vs Citrix",
        "Side-by-side comparison for manufacturing teams replacing Citrix for engineering workspace delivery.",
        "/compare/vs-citrix"
      ),
      relatedLink(
        "Contractor & Vendor Access",
        "Controlled browser access for supply chain partners and maintenance contractors without exposing design IP.",
        "/solutions/use-case/contractor-vendor-access"
      ),
      relatedLink(
        "Desktop as a Service",
        "GPU-accelerated DaaS capabilities for engineering workspace fleets across manufacturing sites.",
        "/products/daas"
      ),
    ],
    faq: [
      {
        question:
          "Can Neverinstall run GPU-accelerated CAD applications like SolidWorks and Siemens NX at full performance?",
        answer:
          "Yes. Desktop Workspaces support GPU-accelerated compute configurations that deliver full workstation performance for CAD, PLM, simulation, and rendering applications. Engineers get the same SolidWorks or Siemens NX experience they would have on a $6,000 physical workstation — accessible from any device at any plant, office, or home location.",
      },
      {
        question:
          "How does Neverinstall prevent engineering IP from reaching partner and contractor devices?",
        answer:
          "Secure Browser Workspaces give supply chain partners and contractors controlled access to engineering drawings, BOMs, and specifications through a browser session with enforced DLP policies. Download prevention, clipboard restrictions, and watermarked session recording ensure that design files never reach the partner's local device. When the session ends, no engineering data persists outside your infrastructure.",
      },
      {
        question:
          "Can Neverinstall deploy on-premises at plant sites with OT network isolation?",
        answer:
          "Yes. Full on-premises deployment places the entire Neverinstall platform inside your plant network. Engineering data, process specifications, and ITAR-controlled designs never route through external infrastructure. The platform operates independently within the facility network boundary, supporting OT-adjacent deployment where engineering workloads must be isolated from internet-connected systems.",
      },
    ],
    bottomCtas: [],
  }),

  education: industryPage({
    name: "Education",
    slug: "education",
    path: "/solutions/industry/education",
    template: "industry",
    seo: {
      title:
        "FERPA Compliant Virtual Desktops & BYOD Access for Education | Neverinstall",
      description:
        "FERPA-compliant virtual labs and BYOD student access for universities and K-12 districts. Replace physical computer labs, support Chromebooks and personal devices, and protect student records without MDM enrollment.",
    },
    summary:
      "FERPA-compliant virtual workspace delivery for higher education and K-12 — replace physical computer labs with cloud-hosted virtual labs, support BYOD students on Chromebooks and personal devices without MDM, and give faculty standardized research environments with licensed software access from any campus or remote location.",
    hero: {
      eyebrow: "Education",
      title:
        "15,000 students bring their own devices. Your lab software should work on all of them.",
      subtitle:
        "Universities and K-12 districts spend millions maintaining physical computer labs, managing device refresh cycles, and trying to enforce FERPA protections across student-owned Chromebooks, iPads, and personal laptops. Neverinstall replaces physical labs with virtual workspaces that run licensed software in the browser, give every student a clean session on any device, and keep student education records inside FERPA-compliant workspace boundaries.",
      metric:
        "Virtual labs on any device, zero student data on unmanaged endpoints",
      primaryCta: demoCta,
      secondaryCta: tcoCta,
    },
    answerCapsule: answerCapsule(
      "Why do universities and school districts choose Neverinstall?",
      "Education IT faces a uniquely impossible combination: FERPA requires protecting student education records at every access point, but students bring unmanaged Chromebooks and personal devices that IT cannot control. Physical computer labs cost $500,000+ per refresh cycle and sit empty 60% of the time. Neverinstall delivers virtual computer labs where students access MATLAB, Adobe Creative Suite, AutoCAD, and specialized courseware through a browser on any device — no MDM, no agent install, no device requirements. Faculty and researchers get persistent desktops with licensed software access from any campus, home, or conference location."
    ),
    sections: [
      gridSection({
        title: "Why traditional IT models break in education",
        description:
          "Education institutions face FERPA compliance obligations, massive BYOD populations, and shrinking IT budgets — a combination that makes traditional endpoint management and physical computer labs unsustainable.",
        blocks: [
          {
            title: "BYOD students on unmanaged devices defeat endpoint security",
            description:
              "Students access SIS portals, LMS platforms, and research databases from personal Chromebooks, iPads, Windows laptops, and phones. MDM enrollment is impractical for student-owned devices. Every unmanaged access point is a FERPA exposure surface where student education records can be cached, screenshotted, or stored on devices IT does not control.",
          },
          {
            title: "Physical computer labs cost $500K+ per refresh and sit empty most of the day",
            description:
              "A 50-seat computer lab with licensed engineering or creative software costs $250,000-500,000 per hardware refresh cycle. Labs run at peak utilization only during class hours and finals week — the rest of the time, the investment sits idle. Students who need lab software outside class hours have no access.",
          },
          {
            title: "FERPA compliance across decentralized access points",
            description:
              "FERPA requires institutions to protect student education records wherever they are accessed. When a student accesses their academic records from a coffee shop laptop or a shared dorm-room Chromebook, the institution bears responsibility for that data. Traditional VPN-only access does not prevent local storage, clipboard copying, or screenshot capture of student data.",
          },
        ],
      }),
      gridSection({
        title: "Virtual labs for students, persistent desktops for faculty and researchers",
        description:
          "Students need browser-based access to lab software on any device without installation. Faculty and graduate researchers need persistent desktop environments with licensed tools and research data access.",
        columns: 2,
        blocks: [
          {
            title: "Secure Browser Workspaces for student virtual labs",
            description:
              "Students access MATLAB, Adobe Creative Suite, AutoCAD, SPSS, and specialized courseware through a browser session — from Chromebooks, personal laptops, iPads, or library terminals. No software installation on student devices, no license management per device, and no MDM enrollment. Non-persistent sessions reset between students so no academic records, research data, or login credentials persist on shared or personal devices. 70-80% lower cost per student than provisioning full virtual desktops.",
          },
          {
            title: "Desktop Workspaces for faculty, staff, and graduate researchers",
            description:
              "Persistent desktop environments for professors running statistical analysis packages, graduate researchers accessing IRB-approved datasets, and IT staff managing campus systems. Licensed software (SAS, Stata, NVivo, specialized research tools) is available from any campus, home, or conference location. Research data and student records stay inside the workspace boundary — faculty can work from any device without transferring sensitive files to personal laptops.",
          },
        ],
      }),
      gridSection({
        title: "Why Neverinstall fits the education budget and compliance model",
        description:
          "Education institutions evaluate on cost per student, FERPA compliance posture, speed to deploy before the next semester, and ability to work with the devices students already own.",
        columns: 4,
        blocks: [
          {
            title: "Deploy before next semester",
            description:
              "Virtual lab environments deploy in weeks, not the multi-semester rollout timeline of traditional VDI. Plan in spring, deploy over summer, and go live for fall enrollment.",
          },
          {
            title: "70-80% lower cost than full VDI per student",
            description:
              "Browser-based virtual lab seats cost a fraction of full desktop licenses. Match the cost model to actual usage — students who only need lab software during class hours do not need permanent desktop allocations.",
          },
          {
            title: "Works on every student-owned device",
            description:
              "Chromebooks, iPads, Windows laptops, Mac laptops, and Linux devices all access virtual labs through a standard browser. No MDM, no agent, no device requirements — eliminating the equity gap between students who can afford expensive hardware and those who cannot.",
          },
          {
            title: "Clean session resets between students",
            description:
              "Non-persistent lab sessions destroy all student data at logout — no cached credentials, no downloaded files, no research data from the previous user. Critical for shared library terminals and open-access lab stations.",
          },
        ],
      }),
    ],
    relatedLinks: [
      relatedLink(
        "Secure Browser Workspaces",
        "Browser-based virtual lab access for BYOD student populations on any device.",
        "/products/secure-browser"
      ),
      relatedLink(
        "Secure BYOD",
        "How institutions protect student data when students bring unmanaged personal devices.",
        "/solutions/use-case/secure-byod"
      ),
      relatedLink(
        "Desktop as a Service",
        "Persistent virtual desktops for faculty, staff, and graduate researchers with licensed software.",
        "/products/daas"
      ),
    ],
    faq: [
      {
        question:
          "How does Neverinstall help institutions meet FERPA requirements for student data protection?",
        answer:
          "FERPA requires institutions to protect student education records at every access point. Neverinstall centralizes access to SIS portals, LMS platforms, and academic systems inside workspace boundaries where student data never reaches the local device. Non-persistent sessions destroy all session data at logout, access controls enforce authentication per session, and audit logs record every access event. This directly addresses FERPA's requirement to protect education records from unauthorized disclosure — even when students access systems from personal, unmanaged devices.",
      },
      {
        question:
          "Can students access virtual labs from Chromebooks, iPads, and personal laptops?",
        answer:
          "Yes. Secure Browser Workspaces run in any modern browser — Chrome, Safari, Firefox, Edge — with no agent install, no software download, and no MDM enrollment. Students on $200 Chromebooks get the same virtual lab experience as students on $2,000 MacBooks. This eliminates the hardware equity gap and the institutional burden of managing student-owned devices.",
      },
      {
        question:
          "How does the virtual lab model compare to maintaining physical computer labs?",
        answer:
          "A 50-seat physical lab costs $250,000-500,000 per hardware refresh cycle, requires dedicated space, and is available only during building hours. Virtual labs on Neverinstall cost 70-80% less per student, are accessible 24/7 from any device and location, scale elastically for finals week and peak enrollment, and eliminate hardware procurement and maintenance entirely. Students can access MATLAB or AutoCAD at 2 AM from their dorm room instead of waiting for lab hours.",
      },
      {
        question:
          "Can faculty and researchers access licensed software like SAS, Stata, or MATLAB from home?",
        answer:
          "Yes. Desktop Workspaces give faculty and graduate researchers persistent environments with institutionally licensed software accessible from any location. Research data and student records stay inside the workspace — faculty do not need to copy datasets to personal laptops to work remotely. License management is centralized on the workspace infrastructure rather than distributed across individual faculty devices.",
      },
    ],
    bottomCtas: [],
  }),
}
