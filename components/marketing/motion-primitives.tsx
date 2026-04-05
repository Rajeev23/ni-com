"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Shared animation variants
// ---------------------------------------------------------------------------

const easeCubic: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeCubic, delay },
  }),
} as const

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" as const, delay },
  }),
} as const

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeCubic, delay },
  }),
} as const

// ---------------------------------------------------------------------------
// FadeUpSection — fades+slides up once in view
// ---------------------------------------------------------------------------

export function FadeUpSection({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-60px 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// StaggerChildren — staggers direct children reveals
// ---------------------------------------------------------------------------

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

export function StaggerChildren({
  children,
  className,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  once?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-60px 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// StaggerItem — individual item inside StaggerChildren
// ---------------------------------------------------------------------------

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// CheckItem — check icon animates in with a pop
// ---------------------------------------------------------------------------

const checkVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 18, delay },
  }),
} as const

export function AnimatedCheckIcon({ delay = 0 }: { delay?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" })

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      variants={checkVariants}
      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500"
    >
      {/* inline SVG so we don't need lucide import in the client bundle chunk */}
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="size-3"
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
    </motion.span>
  )
}

// ---------------------------------------------------------------------------
// StatCounter — large number that counts up on reveal
// ---------------------------------------------------------------------------

export function StatReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      variants={scaleIn}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// HeroMotion — wraps the hero content; animates on mount (not on scroll)
// ---------------------------------------------------------------------------

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeCubic },
  },
}

export function HeroMotion({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HeroMotionChild({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={heroChild} className={className}>
      {children}
    </motion.div>
  )
}
