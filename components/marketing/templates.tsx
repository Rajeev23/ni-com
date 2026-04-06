import {
  AnswerCapsuleSection,
  CtaBand,
  FaqSection,
  HeroSection,
  ProductBridge,
  RelatedLinks,
  SectionRenderer,
} from "@/components/marketing/sections"
import {
  CompareCtaBand,
  CompareHero,
} from "@/components/marketing/compare-sections"
import type { ContentPage } from "@/lib/content/types"

// ---------------------------------------------------------------------------
// Product-pair cross-link bridge configuration
// Each product page advertises the other product as a complement.
// ---------------------------------------------------------------------------

const productBridges: Record<
  string,
  { headline: string; body: string; cta: { label: string; href: string } }
> = {
  daas: {
    headline: "Most enterprises need both work modes.",
    body: "Users who only need a browser shouldn't consume a full desktop seat. Neverinstall Secure Browser Workspaces runs on the same platform — same admin console, same identity stack — at 70–80% lower cost for browser-first contractors and BYOD users.",
    cta: {
      label: "Explore Secure Browser Workspaces",
      href: "/products/secure-browser",
    },
  },
  "secure-browser": {
    headline: "Some users will need a full desktop.",
    body: "When a contractor or employee outgrows the browser and needs a full Windows or Linux environment, Desktop Workspaces is one configuration away — on the same platform, with no new vendor or rollout.",
    cta: {
      label: "Explore Desktop Workspaces",
      href: "/products/daas",
    },
  },
}

// ---------------------------------------------------------------------------
// Template-specific CTA copy — avoids identical "Ready to evaluate?" on every page.
// ---------------------------------------------------------------------------

const ctaCopyByTemplate: Record<
  string,
  { headline: string; description: string }
> = {
  product: {
    headline: "See this product in action",
    description:
      "Book a guided walkthrough tailored to your user mix, deployment model, and security requirements.",
  },
  useCase: {
    headline: "Ready to solve this for your team?",
    description:
      "Walk through deployment options specific to this use case, or run a transparent cost comparison.",
  },
  industry: {
    headline: "Designed for your industry's requirements",
    description:
      "Schedule a session focused on the compliance, deployment, and operational needs of your sector.",
  },
  trust: {
    headline: "Need more detail for your security review?",
    description:
      "Reach out to our security team, review the platform architecture, or request specific documentation.",
  },
  compliance: {
    headline: "Questions about our compliance posture?",
    description:
      "Contact our team for detailed documentation, audit evidence, or to discuss specific regulatory requirements.",
  },
  platform: {
    headline: "Want to see the platform architecture first-hand?",
    description:
      "Book a technical deep-dive to understand how the control plane, scheduling, and policy engine work together.",
  },
}

// ---------------------------------------------------------------------------
// TemplatePage
// Generic renderer for any ContentPage — products, use cases, industries, etc.
// ---------------------------------------------------------------------------

export function TemplatePage({ page }: { page: ContentPage }) {
  const isCompare = page.template === "compare"
  const isProduct = page.template === "product"
  const bridge = isProduct ? productBridges[page.slug] : undefined
  const ctaCopy = ctaCopyByTemplate[page.template]

  return (
    <>
      {/* Hero */}
      {isCompare ? (
        <CompareHero hero={page.hero} />
      ) : (
        <HeroSection hero={page.hero} />
      )}

      {/* Quick-answer capsule */}
      <AnswerCapsuleSection capsule={page.answerCapsule} />

      {/* Dynamic content sections */}
      {page.sections.map((section) => (
        <SectionRenderer
          key={`${page.slug}-${section.kind}-${section.title}`}
          section={section}
          template={page.template}
        />
      ))}

      {/* Related links */}
      <RelatedLinks links={page.relatedLinks} />

      {/* FAQ */}
      <FaqSection faq={page.faq} />

      {/* Cross-linking bridge — product pages only */}
      {bridge ? <ProductBridge bridge={bridge} /> : null}

      {/* Bottom CTA band */}
      {isCompare ? (
        <CompareCtaBand ctas={page.bottomCtas} />
      ) : (
        <CtaBand
          ctas={page.bottomCtas}
          headline={ctaCopy?.headline}
          description={ctaCopy?.description}
        />
      )}
    </>
  )
}
