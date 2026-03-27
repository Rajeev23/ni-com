export type CtaLink = {
  label: string
  href: string
}

export type SeoData = {
  title: string
  description: string
}

export type HeroData = {
  eyebrow?: string
  title: string
  subtitle: string
  supportingCopy?: string
  metric?: string
  primaryCta: CtaLink
  secondaryCta?: CtaLink
}

export type SectionBlock = {
  title: string
  description: string
  bullets?: string[]
  metric?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type AnswerCapsule = {
  question: string
  answer: string
}

export type RelatedLink = {
  title: string
  description: string
  href: string
}

export type GridSection = {
  kind: "grid"
  title: string
  description: string
  columns?: 2 | 3 | 4
  blocks: SectionBlock[]
}

export type ChecklistSection = {
  kind: "checklist"
  title: string
  description: string
  items: string[]
}

export type StatsSection = {
  kind: "stats"
  title: string
  description: string
  items: Array<{
    label: string
    value: string
    detail: string
  }>
}

export type TableSection = {
  kind: "table"
  title: string
  description: string
  columns: [string, string, string]
  rows: Array<{
    label: string
    values: [string, string]
  }>
}

export type ContentSection =
  | GridSection
  | ChecklistSection
  | StatsSection
  | TableSection

export type PageTemplate =
  | "core"
  | "product"
  | "useCase"
  | "industry"
  | "compare"
  | "platform"
  | "trust"

export type ContentPage = {
  name: string
  slug: string
  path: string
  template: PageTemplate
  seo: SeoData
  summary: string
  hero: HeroData
  answerCapsule?: AnswerCapsule
  sections: ContentSection[]
  relatedLinks: RelatedLink[]
  faq?: FaqItem[]
  bottomCtas: CtaLink[]
}

export type ResourceCard = {
  title: string
  description: string
  href: string
}
