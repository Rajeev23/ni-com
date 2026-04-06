import type { Metadata } from "next"
import Image from "next/image"
import {
  Layers,
  Monitor,
  Shield,
  Landmark,
  Target,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "About Neverinstall",
  description:
    "Company story, leadership, and platform vision for secure enterprise workspaces.",
  path: "/company/about",
})

const storyBlocks = [
  {
    icon: <Layers className="size-4 text-indigo-400" />,
    title: "Built in production first",
    description:
      "Our core scheduler, checkpointing, and policy model were shaped by years of real customer workloads before the platform launched publicly.",
  },
  {
    icon: <Monitor className="size-4 text-sky-400" />,
    title: "One platform, two work modes",
    description:
      "Desktop Workspaces and Secure Browser Workspaces are two products built on one shared control plane.",
  },
  {
    icon: <Shield className="size-4 text-emerald-400" />,
    title: "Control as design principle",
    description:
      "We design for regional control, regulated operations, and enterprise-grade auditability from day one.",
  },
]

const CDN =
  "https://neverinstall.com/cdn-cgi/imagedelivery/AvFws3zK3WPu5k1TtWLA1A"

const leaders = [
  {
    name: "Ram Pasala",
    role: "Co-Founder, CEO",
    image: `${CDN}/about-ram-final.svg/public`,
    decoratorColors: "from-indigo-400 via-sky-400 to-violet-500",
    description:
      "Leads product strategy and company direction. Focused on building a secure workspace platform that enterprise IT teams actually want to deploy.",
  },
  {
    name: "Lakshman Pasala",
    role: "Co-Founder, CTO",
    image: `${CDN}/about-lakshman-final.svg/public`,
    decoratorColors: "from-sky-400 via-cyan-400 to-emerald-500",
    description:
      "Drives platform architecture — from the scheduling engine and session checkpointing to the deployment infrastructure that runs across cloud and on-prem.",
  },
  {
    name: "Ramesh Gopal Krishna",
    role: "CRO",
    image: "",
    decoratorColors: "from-violet-400 via-purple-400 to-rose-500",
    description:
      "25+ years leading enterprise revenue growth at Microsoft, Meta, and Salesforce. Bringing Neverinstall to regulated industries and global accounts.",
  },
]

const backedBlocks = [
  {
    icon: <Landmark className="size-4 text-amber-400" />,
    title: "Equirus InnovateX seed round",
    description:
      "February 2026 seed investment to expand enterprise adoption and platform capabilities.",
  },
  {
    icon: <Target className="size-4 text-emerald-400" />,
    title: "Enterprise-first focus",
    description:
      "We prioritize high-control industries and distributed organizations with strict security and governance needs.",
  },
  {
    icon: <MessageSquare className="size-4 text-sky-400" />,
    title: "What we value",
    description:
      "Technical rigor, plainspoken communication, and customer outcomes over feature theater.",
  },
]

export default function AboutPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Company",
          title: "Replacing legacy VDI — from the ground up",
          subtitle:
            "Neverinstall helps organizations modernize secure access with cloud-native desktops and browsers built for control, speed, and deployment flexibility.",
          supportingCopy:
            "Headquartered in Bengaluru with production-hardened platform infrastructure refined over five years.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Careers", href: "/company/careers" },
        }}
      />

      {/* Our Story */}
      <section className="border-b py-14 sm:py-20">
        <PageContainer>
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our story
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              From virtual desktop origins to a full secure enterprise platform
              spanning browser and workspace delivery.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {storyBlocks.map((block) => (
              <Card
                key={block.title}
                className="rounded-2xl border-border/60 bg-card/80 shadow-sm"
              >
                <CardHeader className="pb-2">
                  <div className="mb-2 flex size-8 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10">
                    {block.icon}
                  </div>
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    {block.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-6">
                    {block.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Leadership */}
      <section className="border-b py-14 sm:py-20">
        <PageContainer>
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Leadership
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Experienced operators across enterprise software, cloud platforms,
              and global sales.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <div key={leader.name} className="group text-center">
                <div className="relative mx-auto mb-4 size-28">
                  <div
                    className={cn(
                      "absolute -inset-1 rounded-full bg-gradient-to-br opacity-60 blur-sm transition-opacity group-hover:opacity-100",
                      leader.decoratorColors
                    )}
                  />
                  <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <span className="text-2xl font-bold text-muted-foreground">
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-semibold">{leader.name}</h3>
                <p className="text-xs text-muted-foreground">{leader.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Backed */}
      <section className="border-b py-14 sm:py-20">
        <PageContainer>
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Backed for the next phase
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Neverinstall is backed by Equirus InnovateX and focused on
              expanding enterprise adoption.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {backedBlocks.map((block) => (
              <Card
                key={block.title}
                className="rounded-2xl border-border/60 bg-card/80 shadow-sm"
              >
                <CardHeader className="pb-2">
                  <div className="mb-2 flex size-8 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                    {block.icon}
                  </div>
                  <CardTitle className="text-sm font-semibold sm:text-base">
                    {block.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-6">
                    {block.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBand
        headline="Work with us or see what we've built"
        description="Explore the platform in a guided session, check open roles, or reach out directly."
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Join Us", href: "/company/careers" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  )
}
