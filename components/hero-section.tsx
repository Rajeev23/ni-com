"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroHeader } from "@/components/header"
import { ArrowUp, Globe, Play, Plus, Sparkle } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { Spotify } from "@/components/ui/svgs/spotify"
import { Hulu } from "@/components/ui/svgs/hulu"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Beacon } from "@/components/ui/svgs/beacon"

export default function HeroSection() {
  const { scrollY } = useScroll()
  const parallaxFactor = 0.25
  const y = useTransform(scrollY, [0, 500], [0, 500 * parallaxFactor], {
    clamp: false,
  })

  return (
    <>
      <HeroHeader />
      <main role="main" className="overflow-hidden bg-background">
        <section>
          <div className="relative pt-24 pb-36 lg:pt-16">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="text-center">
                <h1 className="mx-auto mt-8 max-w-xl text-4xl font-semibold text-balance md:text-5xl">
                  Powerful Analytics for Smarter Decisions
                </h1>
                <p className="mx-auto mt-4 mb-8 max-w-xl text-lg text-balance text-muted-foreground">
                  With Tailark&apos;s personal AI, get your projects to the
                  finish line faster and with no context switching.
                </p>

                <div className="flex items-center justify-center gap-3 max-sm:flex-col">
                  <Button asChild>
                    <Link href="#link">
                      <span className="text-nowrap">Start Using</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild variant="outline" className="pl-3.5">
                    <Link href="#link">
                      <Play className="!size-3 fill-foreground" />
                      <span className="text-nowrap">Watch Video</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative mt-6 overflow-hidden pb-12 max-md:px-6">
              <div className="absolute inset-0 mx-auto mask-radial-to-65% lg:w-2/3 dark:hidden">
                <motion.img
                  style={{ y }}
                  className="mx-auto size-full origin-top object-cover mix-blend-multiply"
                  src="https://images.unsplash.com/photo-1740516367183-90f0b6094907?q=80&w=2300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="background"
                />
              </div>

              <div className="absolute inset-0 mx-auto mask-radial-to-65% not-dark:hidden lg:w-2/3">
                <motion.img
                  style={{ y }}
                  className="mx-auto size-full origin-top object-cover mix-blend-multiply"
                  src="https://images.unsplash.com/photo-1653919492307-6191a10280f4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="background"
                />
              </div>
              <div className="pb-12">
                <div
                  aria-hidden
                  className="m-auto max-w-sm translate-y-12 rounded-2xl border border-transparent bg-card/75 p-6 shadow-xl ring-1 shadow-black/6.5 ring-border backdrop-blur-3xl"
                >
                  <div className="flex gap-1">
                    <div className="size-2 rounded-full bg-foreground/10" />
                    <div className="size-2 rounded-full bg-foreground/10" />
                    <div className="size-2 rounded-full bg-foreground/10" />
                  </div>

                  <div className="mt-6 text-center">
                    <div className="flex justify-center gap-1">
                      <div className="relative flex size-5 items-center justify-center rounded-full border border-background bg-linear-to-b from-purple-300 to-indigo-600 shadow-md ring-1 shadow-black/20 ring-black/10 dark:border-0 dark:inset-shadow-2xs dark:inset-ring dark:shadow-white/10 dark:ring-black/50 dark:inset-shadow-white/25 dark:inset-ring-white/25">
                        <div className="absolute inset-1 aspect-square rounded-full border border-white/35 bg-black/15"></div>
                        <div className="absolute inset-px aspect-square rounded-full border border-dashed border-white/25"></div>
                        <Sparkle className="size-3 fill-white stroke-white drop-shadow-sm" />
                      </div>
                      <span className="text-[15px] font-medium">Mist AI</span>
                    </div>
                    <p className="mx-auto mt-3 max-w-40 leading-tight text-balance text-foreground/75">
                      Your Personnal AI When it really matters
                    </p>
                    <div className="inline-flex h-0.5 w-20 border-b border-background bg-foreground/10"></div>
                  </div>

                  <div className="mt-4 mb-8 space-y-6">
                    <div className="ml-auto w-fit max-w-3/4">
                      <p className="mb-2 rounded-t-2xl rounded-l-2xl rounded-br border border-foreground/5 bg-foreground/5 p-4 text-sm">
                        Mollitia rerum est quisquam nobis ut cumque, dolore
                        earum a voluptate esse. Illo, rerum esse?
                      </p>
                      <span className="block text-right text-xs text-muted-foreground">
                        Now
                      </span>
                    </div>
                    <div className="w-fit max-w-3/4">
                      <Sparkle className="size-4 fill-white stroke-white drop-shadow-md" />
                      <p className="mt-2 text-sm">
                        Mollitia rerum est quisquam nobis ut cumque, dolore
                        earum a voluptate esse. Illo, rerum esse?
                      </p>
                    </div>
                  </div>

                  <div className="-mx-3 -mb-3 space-y-3 rounded-lg bg-foreground/5 p-3">
                    <div className="text-sm text-muted-foreground">
                      Ask Anything
                    </div>

                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-7 rounded-2xl bg-transparent shadow-none"
                        >
                          <Plus />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-7 rounded-2xl bg-transparent shadow-none"
                        >
                          <Globe />
                        </Button>
                      </div>

                      <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-foreground text-background"
                      >
                        <ArrowUp strokeWidth={2} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-5xl px-6 text-center">
              <p className="text-sm text-muted-foreground">
                Trusted by teams at
              </p>
              <div className="mx-auto mt-6 flex w-full max-w-lg flex-wrap items-center justify-center gap-8 *:w-fit **:fill-foreground lg:justify-between">
                <Hulu height={20} width="auto" />

                <Spotify height={26} width="auto" />
                <Supabase height={24} width="auto" />
                <Beacon height={20} width="auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
