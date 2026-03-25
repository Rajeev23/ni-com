import type {
  AnswerCapsule,
  ChecklistSection,
  ContentPage,
  CtaLink,
  GridSection,
  RelatedLink,
  StatsSection,
  TableSection,
} from "@/lib/content/types"

export const demoCta: CtaLink = { label: "Get a Demo", href: "/get-demo" }
export const signupCta: CtaLink = { label: "Start Free Trial", href: "/signup" }
export const pricingCta: CtaLink = { label: "See Pricing", href: "/pricing" }
export const tcoCta: CtaLink = {
  label: "Calculate TCO",
  href: "/tco-calculator",
}
export const aiTcoCta: CtaLink = {
  label: "AI Infrastructure TCO",
  href: "/ai-tco-calculator",
}
export const docsCta: CtaLink = { label: "Read Docs", href: "/docs" }
export const contactCta: CtaLink = { label: "Contact Us", href: "/contact" }
export const trustCta: CtaLink = {
  label: "Visit Trust Center",
  href: "/security",
}

export function answerCapsule(question: string, answer: string): AnswerCapsule {
  return { question, answer }
}

export function gridSection({
  title,
  description,
  columns = 3,
  blocks,
}: Omit<GridSection, "kind">): GridSection {
  return {
    kind: "grid",
    title,
    description,
    columns,
    blocks,
  }
}

export function checklistSection({
  title,
  description,
  items,
}: Omit<ChecklistSection, "kind">): ChecklistSection {
  return {
    kind: "checklist",
    title,
    description,
    items,
  }
}

export function statsSection({
  title,
  description,
  items,
}: Omit<StatsSection, "kind">): StatsSection {
  return {
    kind: "stats",
    title,
    description,
    items,
  }
}

export function tableSection({
  title,
  description,
  columns,
  rows,
}: Omit<TableSection, "kind">): TableSection {
  return {
    kind: "table",
    title,
    description,
    columns,
    rows,
  }
}

export function relatedLink(
  title: string,
  description: string,
  href: string
): RelatedLink {
  return {
    title,
    description,
    href,
  }
}

export function defaultBottomCtas(
  template: ContentPage["template"]
): CtaLink[] {
  if (template === "compare") {
    return [demoCta, tcoCta, contactCta]
  }

  if (template === "trust") {
    return [contactCta, docsCta, demoCta]
  }

  return [demoCta, signupCta, tcoCta]
}
