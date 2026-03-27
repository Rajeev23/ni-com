import Link from "next/link"
import { ArrowRight, CircleCheck, Sparkles } from "lucide-react"

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

import type {
  ContentSection,
  ContentPage,
  CtaLink,
  ResourceCard,
  SectionBlock,
} from "@/lib/content/types"

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export function HeroSection({ hero }: { hero: ContentPage["hero"] }) {
  return (
    <section className="relative border-b py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,oklch(0.82_0.06_254/.34),transparent_42%),radial-gradient(circle_at_bottom_right,oklch(0.92_0.05_180/.26),transparent_36%)]" />
      <PageContainer>
        <div className="max-w-4xl space-y-6">
          {hero.eyebrow ? (
            <Badge
              variant="outline"
              className="w-fit px-3 py-1 tracking-[0.16em] uppercase"
            >
              {hero.eyebrow}
            </Badge>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            {hero.subtitle}
          </p>
          {hero.supportingCopy ? (
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
              {hero.supportingCopy}
            </p>
          ) : null}
          {hero.metric ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="size-3.5" />
              {hero.metric}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            {hero.secondaryCta ? (
              <Button asChild variant="outline">
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

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
        <div className="max-w-4xl rounded-3xl border bg-card/90 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-medium tracking-[0.12em] text-primary uppercase">
            Quick Answer
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            {capsule.question}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            {capsule.answer}
          </p>
        </div>
      </PageContainer>
    </section>
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
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className={`grid gap-4 ${columnsClass}`}>
          {blocks.map((item) => (
            <Card
              key={item.title}
              className="group rounded-2xl bg-card/90 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardHeader className="pb-0">
                <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CircleCheck className="size-4" />
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
                {item.metric ? (
                  <p className="mt-4 text-sm font-medium text-foreground">
                    {item.metric}
                  </p>
                ) : null}
                {item.bullets?.length ? (
                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

function ChecklistSection({
  title,
  description,
  items,
}: Extract<ContentSection, { kind: "checklist" }>) {
  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
          <Card className="rounded-3xl bg-card/90 shadow-sm">
            <CardContent className="grid gap-3 p-6">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm text-muted-foreground sm:text-base"
                >
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </PageContainer>
    </section>
  )
}

function StatsSection({
  title,
  description,
  items,
}: Extract<ContentSection, { kind: "stats" }>) {
  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.label} className="rounded-2xl bg-card/90 shadow-sm">
              <CardHeader className="pb-3">
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-xl leading-tight">
                  {item.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

function TableSection({
  title,
  description,
  columns,
  rows,
}: Extract<ContentSection, { kind: "table" }>) {
  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="overflow-x-auto rounded-3xl border bg-card/90 shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-muted-foreground">
              <tr>
                {columns.map((column) => (
                  <th key={column} className="px-4 py-3 font-medium">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b last:border-b-0">
                  <td className="px-4 py-4 font-medium text-foreground">
                    {row.label}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    {row.values[0]}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">
                    {row.values[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageContainer>
    </section>
  )
}

export function SectionRenderer({ section }: { section: ContentSection }) {
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

export function RelatedLinks({
  links,
}: {
  links: ContentPage["relatedLinks"]
}) {
  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Related Solutions
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Continue your evaluation with adjacent use cases, products, and
            migration resources.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Card
              key={link.href}
              className="group rounded-2xl bg-card/90 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardHeader className="pb-0">
                <CardTitle>{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  href={link.href}
                >
                  View page <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export function FaqSection({ faq }: { faq: ContentPage["faq"] }) {
  if (!faq?.length) {
    return null
  }

  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Clear answers for evaluation, deployment planning, and security
            decision-making.
          </p>
        </div>
        <Card className="rounded-2xl bg-card/90 shadow-sm">
          <CardContent className="p-4">
            <Accordion type="single" collapsible>
              {faq.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </PageContainer>
    </section>
  )
}

export function CtaBand({ ctas }: { ctas: CtaLink[] }) {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="relative overflow-hidden rounded-3xl border bg-card p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-primary/10 blur-3xl" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to evaluate Neverinstall?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Book a guided evaluation, launch a pilot, or run a transparent cost
            comparison with your current stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta, index) => (
              <Button
                key={cta.href}
                asChild
                variant={index === 0 ? "default" : "outline"}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  )
}

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
    <section className="py-14 sm:py-16">
      <PageContainer>
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="group rounded-2xl bg-card/90 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardHeader className="pb-0">
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  href={card.href}
                >
                  Read more <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
