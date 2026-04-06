"use client"
import { Beacon } from "@/components/ui/svgs/beacon"
import { Bolt } from "@/components/ui/svgs/bolt"
import { Cisco } from "@/components/ui/svgs/cisco"
import { Hulu } from "@/components/ui/svgs/hulu"
import { OpenAIFull } from "@/components/ui/svgs/open-ai"
import { Primevideo } from "@/components/ui/svgs/prime"
import { Stripe } from "@/components/ui/svgs/stripe"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Polars } from "@/components/ui/svgs/polars"
import { AnimatePresence, motion } from "motion/react"
import React, { useEffect, useState } from "react"
import { VercelFull } from "@/components/ui/svgs/vercel"
import { Spotify } from "@/components/ui/svgs/spotify"
import { PayPal } from "@/components/ui/svgs/paypal"
import { LeapWallet } from "@/components/ui/svgs/leap-wallet"

const aiLogos: React.ReactNode[] = [
  <OpenAIFull key="openai" height={24} width="auto" />,
  <Bolt key="bolt" height={20} width="auto" />,
  <Cisco key="cisco" height={32} width="auto" />,
  <Hulu key="hulu" height={22} width="auto" />,
  <Spotify key="spotify" height={24} width="auto" />,
]

const hostingLogos: React.ReactNode[] = [
  <Supabase key="supabase" height={24} width="auto" />,
  <Cisco key="cisco" height={32} width="auto" />,
  <Hulu key="hulu" height={22} width="auto" />,
  <Spotify key="spotify" height={24} width="auto" />,
  <VercelFull key="vercel" height={20} width="auto" />,
]

const paymentsLogos: React.ReactNode[] = [
  <Stripe key="stripe" height={24} width="auto" />,
  <PayPal key="paypal" height={24} width="auto" />,
  <LeapWallet key="leapwallet" height={24} width="auto" />,
  <Beacon key="beacon" height={20} width="auto" />,
  <Polars key="polars" height={24} width="auto" />,
]

const streamingLogos: React.ReactNode[] = [
  <Primevideo key="primevideo" height={28} width="auto" />,
  <Hulu key="hulu" height={22} width="auto" />,
  <Spotify key="spotify" height={24} width="auto" />,
  <Cisco key="cisco" height={32} width="auto" />,
  <Beacon key="beacon" height={20} width="auto" />,
]

type LogoGroup = "ai" | "hosting" | "payments" | "streaming"

const logos: { [key in LogoGroup]: React.ReactNode[] } = {
  ai: aiLogos,
  hosting: hostingLogos,
  payments: paymentsLogos,
  streaming: streamingLogos,
}

export default function LogoCloudTwo() {
  const [currentGroup, setCurrentGroup] = useState<LogoGroup>("ai")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev: LogoGroup) => {
        const groups = Object.keys(logos) as LogoGroup[]
        const currentIndex = groups.indexOf(prev)
        const nextIndex = (currentIndex + 1) % groups.length
        return groups[nextIndex] as LogoGroup
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center text-balance md:mb-16">
          <h2 className="text-4xl font-semibold">
            You&apos;re in good company
          </h2>
          <p
            data-current={currentGroup}
            className="mt-4 text-lg text-muted-foreground"
          >
            Neverinstall is trusted by leading teams from{" "}
            <span className="transition-colors duration-200 in-data-[current=ai]:text-foreground">
              Generative AI Companies,
            </span>{" "}
            <span className="transition-colors duration-200 in-data-[current=hosting]:text-foreground">
              Hosting Providers,
            </span>{" "}
            <span className="transition-colors duration-200 in-data-[current=payments]:text-foreground">
              Payments Providers,
            </span>{" "}
            <span className="transition-colors duration-200 in-data-[current=streaming]:text-foreground">
              Streaming Providers
            </span>
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-3 items-center gap-8 perspective-dramatic md:h-10 md:grid-cols-5">
          <AnimatePresence initial={false} mode="popLayout">
            {logos[currentGroup].map((logo, i) => (
              <motion.div
                key={`${currentGroup}-${i}`}
                className="flex items-center justify-center **:fill-foreground!"
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(6px)", scale: 0.5 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                {logo}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
