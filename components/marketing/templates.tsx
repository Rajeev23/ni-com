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
// TemplatePage
// Generic renderer for any ContentPage — products, use cases, industries, etc.
// ---------------------------------------------------------------------------

export function TemplatePage({ page }: { page: ContentPage }) {
  const isCompare = page.template === "compare"
  const isProduct = page.template === "product"
  const bridge = isProduct ? productBridges[page.slug] : undefined

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
        <CtaBand ctas={page.bottomCtas} />
      )}
    </>
  )
}
