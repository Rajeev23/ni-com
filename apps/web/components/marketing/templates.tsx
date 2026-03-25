import {
  AnswerCapsuleSection,
  CtaBand,
  FaqSection,
  HeroSection,
  RelatedLinks,
  SectionRenderer,
} from "@/components/marketing/sections"
import type { ContentPage } from "@/lib/content/types"

export function TemplatePage({ page }: { page: ContentPage }) {
  return (
    <>
      <HeroSection hero={page.hero} />
      <AnswerCapsuleSection capsule={page.answerCapsule} />
      {page.sections.map((section) => (
        <SectionRenderer
          key={`${page.slug}-${section.kind}-${section.title}`}
          section={section}
        />
      ))}
      <RelatedLinks links={page.relatedLinks} />
      <FaqSection faq={page.faq} />
      <CtaBand ctas={page.bottomCtas} />
    </>
  )
}
