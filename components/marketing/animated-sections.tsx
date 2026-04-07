"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useInView, type Variants } from "motion/react"
import {
  Monitor,
  Globe,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Shield,
  DollarSign,
  Clock,
  Server,
  Cloud,
  Building2,
  BadgeCheck,
} from "lucide-react"

import { Button } from "@/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

// ─── Utility ──────────────────────────────────────────────────────────────────

const EASE = "easeOut" as const

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.1 },
  }),
}

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      variants={fadeUpVariants}
    >
      {children}
    </motion.div>
  )
}

// ─── 1. HERO ─────────────────────────────────────────────────────────────────

export function HeroAnimated() {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  }

  return (
    <section className="relative overflow-hidden border-b py-20 sm:py-28 lg:py-36">
      {/* background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/8 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 47px,hsl(var(--border)) 47px,hsl(var(--border)) 48px),repeating-linear-gradient(90deg,transparent,transparent 47px,hsl(var(--border)) 47px,hsl(var(--border)) 48px)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium tracking-wide text-indigo-400">
              <BadgeCheck className="size-3.5" />
              The modern Citrix and VMware replacement
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            One Platform.{" "}
            <span className="text-indigo-500">Two Work Modes.</span> Any
            Deployment.
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Replace Citrix and VMware with a cloud-native platform that delivers
            secure Desktop Workspaces and Secure Browser Workspaces from a
            single control plane — at 70–80% lower cost, deployed in days.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="h-10 px-5 text-sm font-medium">
              <Link href="/get-demo">Get a Demo</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 px-5 text-sm font-medium"
            >
              <Link href="/pricing">
                See Pricing <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 2. PROOF BAR ─────────────────────────────────────────────────────────────

const proofStats = [
  {
    value: "< 1s",
    label: "Session restore",
    icon: <Zap className="size-4 text-indigo-400" />,
  },
  {
    value: "70–80%",
    label: "Cost reduction",
    icon: <DollarSign className="size-4 text-sky-400" />,
  },
  {
    value: "Days",
    label: "Time to deploy",
    icon: <Clock className="size-4 text-emerald-400" />,
  },
  {
    value: "Zero",
    label: "Data on endpoints",
    icon: <Shield className="size-4 text-violet-400" />,
  },
]

export function ProofBar() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="border-b bg-card/40">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
          {proofStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="flex flex-col gap-1.5 px-6 py-8"
            >
              <div className="flex items-center gap-2">
                {stat.icon}
                <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 3. TWO WORK MODES ────────────────────────────────────────────────────────

const desktopBullets = [
  "Sub-second session restore — no other platform does this",
  "Windows & Linux persistent and ephemeral environments",
  "GPU-backed workstations for engineering and rendering",
]

const browserBullets = [
  "Isolated cloud sessions — zero endpoint trust",
  "Granular DLP: copy/paste, downloads, printing, watermarks",
  "No agent install — works on any BYOD or contractor device",
]

export function TwoWorkModes() {
  return (
    <section className="border-b py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-3 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Platform
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Two work modes. One platform.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Match the work mode to the user. Most enterprises need both — and
            Neverinstall manages both from a single control plane.
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Desktop Workspaces */}
          <FadeUp delay={0.1}>
            <Card className="relative overflow-hidden rounded-2xl border bg-card/90 shadow-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-indigo-500/10 blur-2xl"
              />
              <CardHeader className="pb-4">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-indigo-500/10">
                  <Monitor className="size-5 text-indigo-500" />
                </div>
                <CardTitle className="text-lg">Desktop Workspaces</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Full Windows and Linux environment delivery — the modern
                  replacement for Citrix and VMware Horizon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {desktopBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/products/daas"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-400"
                  >
                    Explore Desktop Workspaces
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeUp>

          {/* Secure Browser Workspaces */}
          <FadeUp delay={0.2}>
            <Card className="relative overflow-hidden rounded-2xl border bg-card/90 shadow-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-sky-500/10 blur-2xl"
              />
              <CardHeader className="pb-4">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-sky-500/10">
                  <Globe className="size-5 text-sky-500" />
                </div>
                <CardTitle className="text-lg">
                  Secure Browser Workspaces
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  Cloud-isolated browser sessions with full DLP controls for
                  contractors, BYOD, and unmanaged devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {browserBullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky-500" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/products/secure-browser"
                    className="inline-flex items-center gap-1 text-sm font-medium text-sky-500 transition-colors hover:text-sky-400"
                  >
                    Explore Secure Browser Workspaces
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── 4. DEPLOYMENT FLEXIBILITY ────────────────────────────────────────────────

const deploymentModels = [
  {
    icon: <Cloud className="size-6 text-indigo-500" />,
    iconBg: "bg-indigo-500/10",
    title: "Neverinstall-Managed Cloud",
    tag: "Fastest to production",
    tagColor: "text-indigo-400",
    bullets: [
      "Zero infrastructure to operate",
      "Provision workspaces in hours",
      "Neverinstall manages the full stack",
    ],
  },
  {
    icon: <Server className="size-6 text-sky-500" />,
    iconBg: "bg-sky-500/10",
    title: "Customer Cloud (OCI / AWS / Azure)",
    tag: "Data residency & compliance",
    tagColor: "text-sky-400",
    bullets: [
      "Deploy inside your own cloud tenancy",
      "Data never leaves your environment",
      "Leverage existing cloud commitments",
    ],
  },
  {
    icon: <Building2 className="size-6 text-violet-500" />,
    iconBg: "bg-violet-500/10",
    title: "Sovereign On-Premises",
    tag: "Air-gapped & regulated",
    tagColor: "text-violet-400",
    bullets: [
      "Full deployment on your hardware",
      "No external connectivity required",
      "Meets strictest data sovereignty rules",
    ],
  },
]

export function DeploymentFlexibility() {
  return (
    <section className="border-b py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-3 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Deployment
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Deploy anywhere. Same platform.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Deployment model is a configuration choice — not a product change.
            All three models run the same Desktop Workspaces and Secure Browser
            Workspaces stack.
          </p>
        </FadeUp>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {deploymentModels.map((model, i) => (
            <FadeUp key={model.title} delay={i * 0.12}>
              <Card className="h-full rounded-2xl bg-card/90 shadow-sm">
                <CardHeader className="pb-3">
                  <div
                    className={`mb-3 flex size-12 items-center justify-center rounded-xl ${model.iconBg}`}
                  >
                    {model.icon}
                  </div>
                  <p className={`text-xs font-medium ${model.tagColor}`}>
                    {model.tag}
                  </p>
                  <CardTitle className="mt-1 text-base leading-snug">
                    {model.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 6. COMPETITIVE MATRIX ────────────────────────────────────────────────────

type MatrixValue = "full" | "partial" | "none" | string

const matrixCapabilities = [
  "Full OS desktop delivery",
  "Secure browser sessions (no agent)",
  "Sub-second session restore",
  "Deployment time",
  "Unified admin console",
  "Deployment model choice",
  "Cost for browser-first users",
]

const matrixData: {
  label: string
  highlight?: boolean
  values: MatrixValue[]
}[] = [
  {
    label: "Legacy VDI (Citrix / VMware)",
    values: [
      "full",
      "none",
      "none",
      "Months",
      "none",
      "partial",
      "Full VDI cost",
    ],
  },
  {
    label: "Browser-Only (Island)",
    values: ["none", "partial", "none", "Days", "none", "none", "Low"],
  },
  {
    label: "Hyperscaler DaaS (AVD / W365)",
    values: [
      "full",
      "none",
      "none",
      "Weeks",
      "partial",
      "partial",
      "Full VDI cost",
    ],
  },
  {
    label: "Neverinstall",
    highlight: true,
    values: ["full", "full", "full", "Days", "full", "full", "70–80% lower"],
  },
]

function MatrixCell({
  value,
  highlight,
}: {
  value: MatrixValue
  highlight?: boolean
}) {
  if (value === "full") {
    return (
      <span
        className={`flex size-6 items-center justify-center rounded-full ${highlight ? "bg-indigo-500/20" : "bg-emerald-500/10"}`}
      >
        <CheckCircle2
          className={`size-3.5 ${highlight ? "text-indigo-400" : "text-emerald-500"}`}
        />
      </span>
    )
  }
  if (value === "partial") {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-amber-500/10">
        <span className="text-xs font-bold text-amber-500">~</span>
      </span>
    )
  }
  if (value === "none") {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-foreground/5">
        <XCircle className="size-3.5 text-muted-foreground/50" />
      </span>
    )
  }
  return (
    <span
      className={`text-xs font-medium ${highlight ? "text-indigo-400" : "text-muted-foreground"}`}
    >
      {value}
    </span>
  )
}

export function CompetitiveMatrix() {
  return (
    <section className="border-b py-20 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-3 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Comparison
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            How Neverinstall stacks up.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            No other platform delivers both full OS desktop delivery and
            agentless secure browser workspaces from a single control plane.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mt-12">
          <div className="overflow-x-auto rounded-2xl border bg-card/50 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="w-52 px-5 py-4 font-medium text-muted-foreground">
                    Capability
                  </th>
                  {matrixData.map((col) => (
                    <th
                      key={col.label}
                      className={`px-4 py-4 text-center text-xs font-medium ${col.highlight ? "text-indigo-400" : "text-muted-foreground"}`}
                    >
                      {col.highlight ? (
                        <span className="inline-flex flex-col items-center gap-1">
                          <span className="inline-block rounded-full bg-indigo-500/15 px-2 py-0.5 text-indigo-400">
                            Neverinstall
                          </span>
                        </span>
                      ) : (
                        col.label
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrixCapabilities.map((cap, ri) => (
                  <tr
                    key={cap}
                    className="border-b transition-colors last:border-b-0 hover:bg-muted/20"
                  >
                    <td className="px-5 py-3.5 text-xs font-medium text-foreground sm:text-sm">
                      {cap}
                    </td>
                    {matrixData.map((col) => (
                      <td
                        key={col.label}
                        className={`px-4 py-3.5 text-center ${col.highlight ? "bg-indigo-500/5" : ""}`}
                      >
                        <div className="flex justify-center">
                          <MatrixCell
                            value={col.values[ri] ?? "none"}
                            highlight={!!col.highlight}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── 7. CUSTOMER LOGOS + PROOF ────────────────────────────────────────────────

const customerProof = [
  {
    name: "Tally Solutions",
    tag: "Cloud Desktops",
    tagColor: "text-sky-400 bg-sky-500/10",
    detail:
      "Delivers Tally's flagship product to enterprise end users through secure cloud desktops on OCI — no endpoint dependencies.",
    outcome: "Live on Oracle Cloud",
  },
  {
    name: "Porter",
    tag: "Logistics",
    tagColor: "text-emerald-400 bg-emerald-500/10",
    detail:
      "Chose Neverinstall over Microsoft AVD after evaluating both on deployment speed, cost, and session performance for operations teams.",
    outcome: "Selected over Azure Virtual Desktop",
  },
  {
    name: "Indovance",
    tag: "Engineering",
    tagColor: "text-amber-400 bg-amber-500/10",
    detail:
      "Replaced legacy Citrix VDI with Desktop Workspaces — eliminating licensing costs, consultant dependency, and months-long upgrade cycles.",
    outcome: "Full Citrix migration complete",
  },
  {
    name: "Alliance Broadband",
    tag: "Telecom",
    tagColor: "text-violet-400 bg-violet-500/10",
    detail:
      "Bundles cloud desktops as a value-added service for broadband subscribers — turning workspace delivery into a revenue line.",
    outcome: "New subscriber offering launched",
  },
]

export function CustomerProof() {
  return (
    <section className="border-b py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-3 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Customers
          </div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Real deployments. Verifiable outcomes.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Neverinstall is in production with enterprise teams replacing
            Citrix, outperforming alternatives in head-to-head evaluations, and
            deploying across cloud and on-premises.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {customerProof.map((customer, i) => (
            <FadeUp key={customer.name} delay={i * 0.1}>
              <Card className="h-full rounded-2xl bg-card/90 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm font-semibold">
                      {customer.name}
                    </CardTitle>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${customer.tagColor}`}
                    >
                      {customer.tag}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {customer.detail}
                  </p>
                  <p className="mt-3 text-xs font-medium text-foreground">
                    {customer.outcome}
                  </p>
                </CardContent>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 8. FINAL CTA ─────────────────────────────────────────────────────────────

export function FinalCta() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border bg-card p-10 shadow-lg sm:p-14"
        >
          {/* background glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-sky-500/8 blur-3xl" />
          </div>

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                See it in action.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Book a 30-minute evaluation or start a pilot in your own
                environment — same day.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-10 px-5 text-sm font-medium"
              >
                <Link href="/get-demo">Get a Demo</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-10 px-5 text-sm font-medium"
              >
                <Link href="/tco-calculator">
                  TCO Calculator <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
