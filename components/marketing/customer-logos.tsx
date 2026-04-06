"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/button"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

/**
 * Customer logo components.
 * These render the company name in a styled text treatment.
 * Replace with actual SVGs when brand assets are available.
 */

function TallyLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.75, lineHeight: `${height}px` }}
      className="font-semibold tracking-tight whitespace-nowrap text-foreground"
    >
      Tally Solutions
    </span>
  )
}

function PorterLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.75, lineHeight: `${height}px` }}
      className="font-semibold tracking-tight whitespace-nowrap text-foreground"
    >
      Porter
    </span>
  )
}

function IndovanceLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.75, lineHeight: `${height}px` }}
      className="font-semibold tracking-tight whitespace-nowrap text-foreground"
    >
      Indovance
    </span>
  )
}

function AllianceLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.75, lineHeight: `${height}px` }}
      className="font-semibold tracking-tight whitespace-nowrap text-foreground"
    >
      Alliance Broadband
    </span>
  )
}

// Cloud partner logos
function OracleLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.65, lineHeight: `${height}px` }}
      className="font-bold tracking-wider whitespace-nowrap text-foreground/60 uppercase"
    >
      Oracle Cloud
    </span>
  )
}

function AWSLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.65, lineHeight: `${height}px` }}
      className="font-bold tracking-wider whitespace-nowrap text-foreground/60 uppercase"
    >
      AWS
    </span>
  )
}

function AzureLogo({ height = 24 }: { height?: number }) {
  return (
    <span
      style={{ fontSize: height * 0.65, lineHeight: `${height}px` }}
      className="font-bold tracking-wider whitespace-nowrap text-foreground/60 uppercase"
    >
      Azure
    </span>
  )
}

export function CustomerLogoCloud() {
  return (
    <section className="border-b bg-card/40 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Delivering workspaces at enterprises across logistics, financial
          software, engineering, and telecom
        </p>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
          />
          <InfiniteSlider
            speedOnHover={20}
            speed={40}
            gap={64}
            className="items-center"
          >
            <TallyLogo height={28} />
            <PorterLogo height={28} />
            <IndovanceLogo height={28} />
            <AllianceLogo height={28} />
            <OracleLogo height={28} />
            <AWSLogo height={28} />
            <AzureLogo height={28} />
          </InfiniteSlider>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="sm" asChild className="pr-2">
            <Link href="/customers">
              Read customer stories
              <ChevronRight className="size-3.5!" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
