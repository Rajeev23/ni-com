"use client"

import Link from "next/link"
import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"
import {
  ArrowRight,
  Check,
  X,
  Zap,
  Shield,
  Layers,
  MonitorCheck,
} from "lucide-react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { PageContainer } from "@/components/marketing/page-container"
import type {
  ContentPage,
  GridSection,
  TableSection,
} from "@/lib/content/types"

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** True when a value string is a clearly "yes" statement for Neverinstall */
function isPositive(value: string) {
  const lower = value.toLowerCase()
  return lower.startsWith("yes") || lower.startsWith("both")
}

/** True when a value string clearly denies a capability */
function isNegative(value: string) {
  const lower = value.toLowerCase()
  return lower.startsWith("no —") || lower.startsWith("no,")
}

// Stagger container / item variants reused throughout
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

// [0.4, 0, 0.2, 1] is the cubic-bezier equivalent of easeOut, always valid
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
}

// ─── Animated section wrapper ─────────────────────────────────────────────────

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Compare Hero ─────────────────────────────────────────────────────────────

export function CompareHero({ hero }: { hero: ContentPage["hero"] }) {
  return (
    <section className="relative overflow-hidden border-b py-16 sm:py-24">
      {/* Background gradient — slightly more vibrant than the generic hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.10_268/.40),transparent_38%),radial-gradient(circle_at_bottom_right,oklch(0.90_0.07_160/.30),transparent_34%)]" />

      <PageContainer>
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow badge — indigo-tinted to flag this as a comparison page */}
          <div className="flex items-center gap-3">
            <Badge className="border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-indigo-600 uppercase dark:text-indigo-400">
              {hero.eyebrow ?? "Compare"}
            </Badge>

            {/* Animated VS chip */}
            <motion.span
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.25,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="inline-flex size-7 items-center justify-center rounded-full bg-zinc-900 text-[0.65rem] font-black tracking-tight text-white select-none dark:bg-white dark:text-zinc-900"
            >
              VS
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          {hero.metric ? (
            <motion.p
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400"
            >
              <Zap className="size-3.5" />
              {hero.metric}
            </motion.p>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.28 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            {hero.secondaryCta ? (
              <Button asChild variant="outline" size="lg">
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            ) : null}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  )
}

// ─── Compare Table (TL;DR) ────────────────────────────────────────────────────

function TableRow({
  label,
  ni,
  alt,
  index,
}: {
  label: string
  ni: string
  alt: string
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <motion.tr
      variants={itemVariants}
      className={`border-b last:border-b-0 ${isEven ? "" : "bg-zinc-50/50 dark:bg-zinc-900/30"}`}
    >
      {/* Row label */}
      <td className="w-[200px] shrink-0 border-r px-5 py-4 align-top text-sm font-semibold text-foreground sm:w-[220px]">
        {label}
      </td>

      {/* Neverinstall column — highlighted */}
      <td className="border-r bg-indigo-50/60 px-5 py-4 align-top dark:bg-indigo-950/20">
        <div className="flex items-start gap-2.5">
          {isPositive(ni) ? (
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Check className="size-3" strokeWidth={3} />
            </span>
          ) : null}
          <p className="text-sm leading-relaxed text-foreground">{ni}</p>
        </div>
      </td>

      {/* Alternative column */}
      <td className="px-5 py-4 align-top">
        <div className="flex items-start gap-2.5">
          {isNegative(alt) ? (
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500 dark:text-red-400">
              <X className="size-3" strokeWidth={3} />
            </span>
          ) : null}
          <p className="text-sm leading-relaxed text-muted-foreground">{alt}</p>
        </div>
      </td>
    </motion.tr>
  )
}

export function CompareTableSection({
  title,
  description,
  columns,
  rows,
}: TableSection) {
  const ref = useRef<HTMLTableSectionElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const [, niLabel, altLabel] = columns

  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        {/* Section header */}
        <div className="mb-8 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto rounded-2xl border shadow-sm">
          <table className="min-w-full text-left">
            {/* Sticky header */}
            <thead>
              <tr className="border-b bg-card/95 backdrop-blur-sm">
                {/* Empty label cell */}
                <th className="w-[200px] border-r px-5 py-3.5 sm:w-[220px]" />

                {/* Neverinstall header — indigo band */}
                <th className="border-r bg-indigo-500/10 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-indigo-500 text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                      {niLabel}
                    </span>
                  </div>
                </th>

                {/* Alternative header */}
                <th className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full border border-zinc-300 text-zinc-400 dark:border-zinc-600">
                      <X className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {altLabel}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Animated body rows */}
            <motion.tbody
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {rows.map((row, i) => (
                <TableRow
                  key={row.label}
                  label={row.label}
                  ni={row.values[0]}
                  alt={row.values[1]}
                  index={i}
                />
              ))}
            </motion.tbody>
          </table>
        </div>
      </PageContainer>
    </section>
  )
}

// ─── "Where Neverinstall Wins" grid ─────────────────────────────────────────

export function CompareWinsGrid({ title, description, blocks }: GridSection) {
  const columnsClass = blocks.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"

  return (
    <section className="border-b bg-indigo-50/40 py-14 sm:py-16 dark:bg-indigo-950/10">
      <PageContainer>
        <AnimatedSection>
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8 max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                <Check className="size-4" strokeWidth={2.5} />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          </motion.div>

          {/* Cards */}
          <div className={`grid gap-4 ${columnsClass}`}>
            {blocks.map((block) => (
              <motion.div key={block.title} variants={itemVariants}>
                <Card className="group h-full rounded-2xl border-indigo-200/60 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-indigo-800/40 dark:bg-card/80">
                  <CardHeader className="pb-0">
                    <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Check className="size-4" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-base leading-snug">
                      {block.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {block.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </PageContainer>
    </section>
  )
}

// ─── "Where the Alternative is Credible" grid ────────────────────────────────

export function CompareCredibleGrid({
  title,
  description,
  blocks,
}: GridSection) {
  const columnsClass = blocks.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"

  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <AnimatedSection>
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-8 max-w-3xl space-y-3"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-zinc-200/80 text-zinc-500 dark:bg-zinc-700/60 dark:text-zinc-400">
                <Shield className="size-3.5" strokeWidth={2} />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            </div>
            <p className="text-sm text-muted-foreground sm:text-base">
              {description}
            </p>
          </motion.div>

          {/* Cards — neutral/muted to signal honest acknowledgment */}
          <div className={`grid gap-4 ${columnsClass}`}>
            {blocks.map((block) => (
              <motion.div key={block.title} variants={itemVariants}>
                <Card className="group h-full rounded-2xl bg-card/70 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader className="pb-0">
                    <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                      <Shield className="size-4" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-base leading-snug text-muted-foreground">
                      {block.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {block.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </PageContainer>
    </section>
  )
}

// ─── "The Bigger Picture" callout ────────────────────────────────────────────

const biggerPictureIcons: Record<string, React.ReactNode> = {
  "Desktop Workspaces (DaaS)": (
    <MonitorCheck className="size-5" strokeWidth={1.8} />
  ),
  "Secure Browser Workspaces": <Shield className="size-5" strokeWidth={1.8} />,
}

const biggerPictureLinks: Record<string, string> = {
  "Desktop Workspaces (DaaS)": "/products/daas",
  "Secure Browser Workspaces": "/products/secure-browser",
}

export function CompareBiggerPicture({
  title,
  description,
  blocks,
}: GridSection) {
  return (
    <section className="border-b py-14 sm:py-16">
      <PageContainer>
        <AnimatedSection>
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 via-white to-sky-50/60 p-8 shadow-sm sm:p-10 dark:border-indigo-800/40 dark:from-indigo-950/30 dark:via-card dark:to-sky-950/20"
          >
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-14 -right-14 size-52 rounded-full bg-indigo-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-sky-400/10 blur-3xl" />

            {/* Icon */}
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Layers className="size-5" strokeWidth={1.8} />
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {description}
            </p>

            {/* Two product cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {blocks.map((block) => {
                const icon = biggerPictureIcons[block.title]
                const href = biggerPictureLinks[block.title]

                return (
                  <motion.div key={block.title} variants={itemVariants}>
                    <Card className="group h-full rounded-xl border-indigo-100/80 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-indigo-900/50 dark:bg-card/70">
                      <CardHeader className="pb-0">
                        {icon ? (
                          <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                            {icon}
                          </div>
                        ) : null}
                        <CardTitle className="text-base leading-snug">
                          {block.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">
                          {block.description}
                        </CardDescription>
                        {href ? (
                          <Link
                            href={href}
                            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                          >
                            Learn more{" "}
                            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        ) : null}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatedSection>
      </PageContainer>
    </section>
  )
}

// ─── Compare CTA band ─────────────────────────────────────────────────────────

export function CompareCtaBand({ ctas }: { ctas: ContentPage["bottomCtas"] }) {
  return (
    <section className="py-14 sm:py-16">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 p-8 text-white shadow-xl shadow-indigo-500/20 sm:p-10 dark:border-indigo-700/40"
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 size-52 rounded-full bg-sky-300/15 blur-3xl" />

          <p className="text-xs font-semibold tracking-[0.16em] text-indigo-200 uppercase">
            Ready to compare?
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            See how Neverinstall stacks up in your environment.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-indigo-100 sm:text-base">
            Book a guided evaluation, launch a pilot, or build a transparent
            cost model against your current platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta, i) => (
              <Button
                key={cta.href}
                asChild
                variant={i === 0 ? "default" : "outline"}
                size="lg"
                className={
                  i === 0
                    ? "border-white/30 bg-white text-indigo-700 hover:bg-indigo-50"
                    : "border-white/30 text-white hover:bg-white/10"
                }
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </motion.div>
      </PageContainer>
    </section>
  )
}

// ─── Compare-aware SectionRenderer helper ────────────────────────────────────

/**
 * Maps a section's title to the visual variant to use when on a compare page.
 * The order of sections in comparePage() is fixed:
 *   0 – table    → CompareTableSection
 *   1 – grid     → CompareWinsGrid      ("Where Neverinstall wins")
 *   2 – grid     → CompareCredibleGrid  ("Where the alternative is credible")
 *   3 – grid     → CompareBiggerPicture ("The bigger picture")
 */
export function compareGridVariant(
  title: string
): "wins" | "credible" | "bigger" | null {
  const t = title.toLowerCase()
  if (t.includes("neverinstall wins")) return "wins"
  if (t.includes("alternative is credible")) return "credible"
  if (t.includes("bigger picture")) return "bigger"
  return null
}
