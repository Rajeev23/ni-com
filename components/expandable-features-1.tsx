"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback, useRef } from "react"
import { useMedia } from "@/hooks/use-media"
import { MapIllustration } from "@/components/ui/illustrations/map-illustration"
import { Models4Illustration } from "@/components/ui/illustrations/models-4-illustrations"

const AUTOPLAY_DURATION = 7000

const features = [
  {
    title: "Smart email composition",
    description:
      "with AI-powered suggestions, templates, and seamless collaboration for faster communication.",
    ariaLabel: "extend smart email composition feature",
    image:
      "https://images.unsplash.com/photo-1684093024920-9d88aaa34a90?q=80&w=3030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "bg c1",
    illustration: <Models4Illustration />,
    illustrationClassName: "scale-80",
  },
  {
    title: "AI autocomplete",
    description:
      "that learns your writing style and provides context-aware suggestions to boost productivity.",
    ariaLabel: "extend AI autocomplete feature",
    image:
      "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
    imageAlt: "bg c3",
    illustration: <MapIllustration />,
    illustrationClassName: "pt-8",
  },
]

export default function ExpandableFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const [progressKey, setProgressKey] = useState(0)
  const [paused, setPaused] = useState(false)
  const isMd = useMedia("(min-width: 768px)")
  const activeIndex = isMd ? expandedIndex : 0
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (pausedRef.current) return
      setExpandedIndex((current) => (current + 1) % features.length)
      setProgressKey((k) => k + 1)
    }, AUTOPLAY_DURATION)
  }, [])

  useEffect(() => {
    if (!isMd) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    resetTimer()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [resetTimer, isMd])

  const handleSelect = (index: number) => {
    if (!isMd || index === activeIndex) return
    setExpandedIndex(index)
    setProgressKey((k) => k + 1)
    resetTimer()
  }

  const handleMouseEnter = (index: number) => {
    if (!isMd) return
    if (index === activeIndex) {
      pausedRef.current = true
      setPaused(true)
    }
  }

  const handleMouseLeave = (index: number) => {
    if (!isMd) return
    if (index === activeIndex) {
      pausedRef.current = false
      setPaused(false)
    }
  }

  return (
    <section className="@container bg-background py-24 max-lg:px-1">
      <style>{`
                @keyframes expandProgress {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
            `}</style>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 lg:mb-10">
          <h2 className="max-w-xs text-4xl font-semibold text-balance text-foreground">
            Powerful features for modern teams
          </h2>
        </div>

        <div
          className={cn(
            "grid gap-8 md:grid-cols-[1fr_1fr] md:gap-3 md:transition-[grid-template-columns] md:duration-500 md:ease-in-out",
            expandedIndex === 0 && "md:grid-cols-[2fr_1fr]",
            expandedIndex === 1 && "md:grid-cols-[1fr_2fr]"
          )}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-expanded={activeIndex === index}
              className="relative row-span-2 grid grid-rows-subgrid gap-4 text-left"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className={cn(
                  "relative flex h-96 items-center justify-center overflow-hidden rounded-2xl bg-card shadow-md shadow-black/2 before:absolute before:inset-0 before:rounded-2xl before:border before:border-foreground/7.5"
                )}
              >
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={980}
                  height={980}
                  className="absolute inset-0 size-full object-cover opacity-50 dark:opacity-25"
                />
                <div className={feature.illustrationClassName}>
                  {feature.illustration}
                </div>
              </div>
              <div>
                {isMd && (
                  <>
                    <button
                      className="absolute inset-0 cursor-pointer"
                      aria-label={feature.ariaLabel}
                      onClick={() => handleSelect(index)}
                      aria-expanded={activeIndex === index}
                    />

                    <div className="relative h-px bg-muted">
                      {activeIndex === index && (
                        <div
                          key={progressKey}
                          className="absolute inset-0 h-full origin-left rounded-full bg-linear-to-r to-foreground"
                          style={{
                            animation: `expandProgress ${AUTOPLAY_DURATION}ms linear forwards`,
                            animationPlayState: paused ? "paused" : "running",
                          }}
                        />
                      )}
                    </div>
                  </>
                )}

                <p className="text-balance text-muted-foreground md:mt-4 md:h-12 md:overflow-hidden">
                  <strong className="font-medium text-foreground">
                    {feature.title}
                  </strong>{" "}
                  <span className="md:not-in-data-[expanded=true]:opacity-0 md:not-in-data-[expanded=true]:blur-xs md:in-data-[expanded=true]:delay-300 md:in-data-[expanded=true]:duration-300">
                    {feature.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
