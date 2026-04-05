/**
 * sections.tsx
 *
 * All section renderers for TemplatePage.
 * Server-compatible by default — animated wrappers are imported from
 * motion-primitives.tsx which is "use client".
 */

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { cn } from "@/lib/utils"

import type {
  ContentSection,
  ContentPage,
  CtaLink,
  PageTemplate,
  ResourceCard,
  SectionBlock,
} from "@/lib/content/types"

import {
  AnimatedCheckIcon,
  FadeUpSection,
  HeroMotion,
  HeroMotionChild,
  StaggerChildren,
  StaggerItem,
  StatReveal,
} from "@/components/marketing/motion-primitives"

// compare-sections renderers — imported at top level so the module graph is
// static; Next.js respects the "use client" boundary they declare internally.
import {
  CompareTableSection,
  CompareWinsGrid,
  CompareCredibleGrid,
  CompareBiggerPicture,
} from "@/components/marketing/compare-sections"

function compareGridVariant(
  title: string
): "wins" | "credible" | "bigger" | null {
  const t = title.toLowerCase()
  if (t.includes("neverinstall wins")) return "wins"
  if (t.includes("alternative is credible")) return "credible"
  if (t.includes("bigger picture")) return "bigger"
  return null
}

// ---------------------------------------------------------------------------
// Layout helpers
// ---------------------------------------------------------------------------

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------

export function HeroSection({ hero }: { hero: ContentPage["hero"] }) {
  return (
    <section className="relative overflow-hidden border-b py-20 sm:py-28">
      {/* Multi-layer gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary radial: indigo top-left */}
        <div className="absolute -top-32 -left-32 size-[640px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_264/.22),transparent_70%)] blur-3xl" />
        {/* Secondary radial: teal bottom-right */}
        <div className="absolute -right-24 -bottom-24 size-[480px] rounded-full bg-[radial-gradient(circle,oklch(0.75_0.12_180/.18),transparent_70%)] blur-2xl" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0_0/.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0_0/.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <PageContainer>
        <HeroMotion className="max-w-4xl space-y-7">
          {hero.eyebrow ? (
            <HeroMotionChild>
              <Badge
                variant="outline"
                className="w-fit gap-1.5 border-indigo-500/30 bg-indigo-500/8 px-3 py-1 text-xs tracking-[0.14em] text-indigo-400 uppercase"
              >
                {hero.eyebrow}
              </Badge>
            </HeroMotionChild>
          ) : null}

          <HeroMotionChild>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
          </HeroMotionChild>

          <HeroMotionChild>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {hero.subtitle}
            </p>
          </HeroMotionChild>

          {hero.supportingCopy ? (
            <HeroMotionChild>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground/80 sm:text-base">
                {hero.supportingCopy}
              </p>
            </HeroMotionChild>
          ) : null}

          {hero.metric ? (
            <HeroMotionChild>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400">
                <Sparkles className="size-3.5 shrink-0" aria-hidden />
                {hero.metric}
              </span>
            </HeroMotionChild>
          ) : null}

          <HeroMotionChild className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild size="lg" className="h-10 px-5 text-sm">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            {hero.secondaryCta ? (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-10 px-5 text-sm"
              >
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            ) : null}
          </HeroMotionChild>
        </HeroMotion>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// AnswerCapsuleSection
// ---------------------------------------------------------------------------

export function AnswerCapsuleSection({
  capsule,
}: {
  capsule: ContentPage["answerCapsule"]
}) {
  if (!capsule) {
    return null
  }

  return (
    <section className="border-b py-12 sm:py-14">
      <PageContainer>
        <FadeUpSection>
          <div className="max-w-4xl rounded-2xl border border-indigo-500/15 bg-indigo-500/5 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-indigo-400 uppercase">
              Quick Answer
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
              {capsule.question}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {capsule.answer}
            </p>
          </div>
        </FadeUpSection>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// GridSection (kind: "grid")
// ---------------------------------------------------------------------------

function GridCardIcon() {
  return (
    <div className="mb-3 inline-flex size-8 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="size-3.5"
        aria-hidden="true"
      >
        <path
          d="M3 8l3.5 3.5L13 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function BlockGrid({
  title,
  description,
  blocks,
  columns = 3,
}: {
  title: string
  description: string
  blocks: SectionBlock[]
  columns?: 2 | 3 | 4
}) {
  const columnsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns]

  return (
    <section className="border-b py-14 sm:py-20">
      <PageContainer>
        <FadeUpSection className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        </FadeUpSection>

        <StaggerChildren className={cn("grid gap-4", columnsClass)}>
          {blocks.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="group h-full rounded-2xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/5">
                <CardHeader className="pb-0">
                  <GridCardIcon />
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <CardDescription className="text-sm leading-6">
                    {item.description}
                  </CardDescription>
                  {item.metric ? (
                    <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/8 px-3 py-1 text-xs font-medium text-indigo-400">
                      {item.metric}
                    </p>
                  ) : null}
                  {item.bullets?.length ? (
                    <ul className="mt-4 grid gap-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              className="size-2.5"
                              aria-hidden
                            >
                              <path
                                d="M3 8l3.5 3.5L13 4.5"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// ChecklistSection (kind: "checklist")
// ---------------------------------------------------------------------------

function ChecklistSection({
  title,
  description,
  items,
}: Extract<ContentSection, { kind: "checklist" }>) {
  return (
    <section className="border-b py-14 sm:py-20">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <FadeUpSection className="max-w-xl space-y-3 lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          </FadeUpSection>

          <Card className="rounded-2xl border-border/60 bg-card/80 shadow-sm">
            <CardContent className="p-6">
              <ul className="grid gap-4">
                {items.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <AnimatedCheckIcon delay={i * 0.07} />
                    <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// StatsSection (kind: "stats")
// ---------------------------------------------------------------------------

function StatsSection({
  title,
  description,
  items,
}: Extract<ContentSection, { kind: "stats" }>) {
  return (
    <section className="border-b py-14 sm:py-20">
      <PageContainer>
        <FadeUpSection className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        </FadeUpSection>

        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item, i) => (
            <StatReveal key={item.label} delay={i * 0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
                {/* Accent orb */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-8 size-32 rounded-full bg-indigo-500/8 blur-2xl"
                />
                <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </StatReveal>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// TableSection (kind: "table")
// ---------------------------------------------------------------------------

function TableSection({
  title,
  description,
  columns,
  rows,
}: Extract<ContentSection, { kind: "table" }>) {
  return (
    <section className="border-b py-14 sm:py-20">
      <PageContainer>
        <FadeUpSection className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-card/80 shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  {columns.map((col, i) => (
                    <th
                      key={col}
                      className={cn(
                        "px-5 py-4 text-xs font-semibold tracking-[0.1em] uppercase",
                        i === 1 ? "text-indigo-400" : "text-muted-foreground"
                      )}
                    >
                      {i === 1 ? (
                        <span className="inline-flex items-center gap-1.5">
                          {col}
                          <span className="rounded-full bg-indigo-500/15 px-1.5 py-px text-[10px] font-bold tracking-normal text-indigo-400 uppercase">
                            us
                          </span>
                        </span>
                      ) : (
                        col
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={cn(
                      "border-b border-border/40 last:border-b-0",
                      ri % 2 === 0 ? "bg-transparent" : "bg-muted/25"
                    )}
                  >
                    <td className="px-5 py-4 font-medium text-foreground">
                      {row.label}
                    </td>
                    {/* Neverinstall column — highlighted */}
                    <td className="bg-indigo-500/5 px-5 py-4 font-medium text-foreground">
                      <span className="flex items-center gap-1.5">
                        <span className="size-1.5 shrink-0 rounded-full bg-indigo-400" />
                        {row.values[0]}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {row.values[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUpSection>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// SectionRenderer — exhaustive switch across all ContentSection kinds.
// On compare pages the compare-sections renderers handle grid/table sections.
// ---------------------------------------------------------------------------

export function SectionRenderer({
  section,
  template,
}: {
  section: ContentSection
  template?: PageTemplate
}) {
  // Delegate compare-page sections to the dedicated compare renderers.
  if (template === "compare") {
    if (section.kind === "table") {
      return <CompareTableSection {...section} />
    }
    if (section.kind === "grid") {
      const variant = compareGridVariant(section.title)
      if (variant === "wins") return <CompareWinsGrid {...section} />
      if (variant === "credible") return <CompareCredibleGrid {...section} />
      if (variant === "bigger") return <CompareBiggerPicture {...section} />
      // fallthrough to generic grid for any unlabeled grid on compare pages
    }
  }

  switch (section.kind) {
    case "grid":
      return (
        <BlockGrid
          title={section.title}
          description={section.description}
          blocks={section.blocks}
          columns={section.columns}
        />
      )
    case "checklist":
      return <ChecklistSection {...section} />
    case "stats":
      return <StatsSection {...section} />
    case "table":
      return <TableSection {...section} />
    default: {
      const exhaustiveCheck: never = section
      return exhaustiveCheck
    }
  }
}

// ---------------------------------------------------------------------------
// RelatedLinks
// ---------------------------------------------------------------------------

export function RelatedLinks({
  links,
}: {
  links: ContentPage["relatedLinks"]
}) {
  return (
    <section className="border-b py-14 sm:py-20">
      <PageContainer>
        <FadeUpSection className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Related Solutions
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Continue your evaluation with adjacent use cases, products, and
            migration resources.
          </p>
        </FadeUpSection>

        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <StaggerItem key={link.href}>
              <Card className="group h-full rounded-2xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/5">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    {link.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    View page
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// FaqSection
// ---------------------------------------------------------------------------

export function FaqSection({ faq }: { faq: ContentPage["faq"] }) {
  if (!faq?.length) {
    return null
  }

  return (
    <section className="border-b py-14 sm:py-20">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start">
          <FadeUpSection className="lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Clear answers for evaluation, deployment planning, and security
              decision-making.
            </p>
          </FadeUpSection>

          <FadeUpSection delay={0.1}>
            <div className="rounded-2xl border border-border/60 bg-card/80 shadow-sm">
              <div className="p-4 sm:p-6">
                <Accordion type="single" collapsible>
                  {faq.map((item, i) => (
                    <AccordionItem key={item.question} value={`faq-${i}`}>
                      <AccordionTrigger className="text-sm leading-6 font-medium sm:text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </FadeUpSection>
        </div>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// ProductBridge — "Most enterprises need both" cross-linking callout.
// Rendered between FAQ and CtaBand only for product pages.
// ---------------------------------------------------------------------------

export type BridgeConfig = {
  headline: string
  body: string
  cta: {
    label: string
    href: string
  }
}

export function ProductBridge({ bridge }: { bridge: BridgeConfig }) {
  return (
    <section className="border-b py-12 sm:py-14">
      <PageContainer>
        <FadeUpSection>
          <div className="relative overflow-hidden rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-500/8 via-indigo-500/5 to-transparent p-6 shadow-sm sm:p-8">
            {/* Decorative blob */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-indigo-500/12 blur-3xl"
            />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold tracking-[0.14em] text-indigo-400 uppercase">
                  Platform advantage
                </p>
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {bridge.headline}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {bridge.body}
                </p>
              </div>
              <Button asChild className="shrink-0">
                <Link href={bridge.cta.href}>
                  {bridge.cta.label}
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeUpSection>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// CtaBand
// ---------------------------------------------------------------------------

export function CtaBand({ ctas }: { ctas: CtaLink[] }) {
  return (
    <section className="py-14 sm:py-20">
      <PageContainer>
        <FadeUpSection>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-12">
            {/* Background blobs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-indigo-500/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-indigo-500/6 blur-2xl"
            />

            <div className="relative max-w-xl space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to evaluate Neverinstall?
              </h2>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                Book a guided evaluation, launch a pilot, or run a transparent
                cost comparison with your current stack.
              </p>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-3">
              {ctas.map((cta, index) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={index === 0 ? "default" : "outline"}
                  size="lg"
                  className="h-10 px-5 text-sm"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </FadeUpSection>
      </PageContainer>
    </section>
  )
}

// ---------------------------------------------------------------------------
// ResourceGrid — used on blog/resource pages
// ---------------------------------------------------------------------------

export function ResourceGrid({
  title,
  description,
  cards,
}: {
  title: string
  description: string
  cards: ResourceCard[]
}) {
  return (
    <section className="py-14 sm:py-20">
      <PageContainer>
        <FadeUpSection className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            {description}
          </p>
        </FadeUpSection>

        <StaggerChildren className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <Card className="group h-full rounded-2xl border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/5">
                <CardHeader>
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-6">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  >
                    Read more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </PageContainer>
    </section>
  )
}
