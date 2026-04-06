import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChatIllustration } from "@/components/ui/illustrations/chat-illustration"

export default function HeroSection() {
  return (
    <section className="bg-linear-to-b to-background pt-24 pb-36">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-4xl">
          <ChatIllustration />
        </div>
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-1 text-sm font-medium text-primary">
            Neverinstall
          </span>
          <h1 className="mt-4 text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
            AI-driven insights, seamless execution.
          </h1>
          <p className="mx-auto mt-4 mb-6 max-w-md text-lg text-balance text-muted-foreground">
            Replace legacy VDI with cloud-native desktops and secure browsers.
            One platform, any deployment.
          </p>

          <Button asChild>
            <Link href="#link">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
