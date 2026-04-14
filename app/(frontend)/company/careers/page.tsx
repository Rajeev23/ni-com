import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Cpu,
  Globe,
  Handshake,
  MapPin,
  Rocket,
  Shield,
  Users,
} from "lucide-react"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Careers: Virtual Desktop & Secure Browser Engineering | Neverinstall",
  description:
    "Careers at Neverinstall—engineering, product, and sales roles building secure cloud desktops and enterprise browser infrastructure. Bengaluru and remote roles.",
  path: "/company/careers",
})

// ---------------------------------------------------------------------------
// Why join data
// ---------------------------------------------------------------------------

const whyJoinBlocks = [
  {
    icon: <Cpu className="size-4 text-indigo-400" />,
    title: "Own meaningful systems",
    description:
      "Work across security, orchestration, and user experience in one integrated platform — not siloed micro-services.",
  },
  {
    icon: <Users className="size-4 text-sky-400" />,
    title: "Learn with expert peers",
    description:
      "Collaborate with engineers and operators who have deep enterprise infrastructure expertise and care about craft.",
  },
  {
    icon: <Rocket className="size-4 text-emerald-400" />,
    title: "Ship for real customers",
    description:
      "Build products used by teams in regulated and mission-critical environments — your work has visible impact from day one.",
  },
  {
    icon: <Shield className="size-4 text-amber-400" />,
    title: "Security as a first principle",
    description:
      "Every decision we make — from architecture to deployment — starts with the question: does this keep customer data safe?",
  },
  {
    icon: <Globe className="size-4 text-violet-400" />,
    title: "Global reach, local roots",
    description:
      "Headquartered in Bengaluru and serving enterprise customers worldwide. Remote-friendly roles available across functions.",
  },
  {
    icon: <Handshake className="size-4 text-rose-400" />,
    title: "Culture of ownership",
    description:
      "Small teams, minimal process overhead, and direct access to leadership. We trust people to make decisions and deliver.",
  },
]

// ---------------------------------------------------------------------------
// Open roles data
// ---------------------------------------------------------------------------

type Role = {
  title: string
  location: string
  type: string
}

type Department = {
  name: string
  roles: Role[]
}

const departments: Department[] = [
  {
    name: "Engineering",
    roles: [
      {
        title: "Senior Backend Engineer",
        location: "Bengaluru",
        type: "Full-time",
      },
      {
        title: "Full Stack Engineer",
        location: "Bengaluru",
        type: "Full-time",
      },
      {
        title: "Platform Engineer",
        location: "Bengaluru",
        type: "Full-time",
      },
      { title: "DevOps Engineer", location: "Remote", type: "Full-time" },
    ],
  },
  {
    name: "Product",
    roles: [
      { title: "Product Designer", location: "Bengaluru", type: "Full-time" },
      {
        title: "Technical Product Manager",
        location: "Bengaluru",
        type: "Full-time",
      },
    ],
  },
  {
    name: "Sales",
    roles: [
      {
        title: "Enterprise Account Executive",
        location: "Remote",
        type: "Full-time",
      },
      { title: "Solutions Engineer", location: "Remote", type: "Full-time" },
    ],
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CareersPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Careers",
          title:
            "Careers building virtual desktop services and secure browser products",
          subtitle:
            "Engineering, product, and go-to-market roles on a desktop-as-a-service and enterprise browser platform—shipping for regulated customers worldwide.",
          primaryCta: { label: "Contact Recruiting", href: "/contact" },
          secondaryCta: { label: "About Neverinstall", href: "/company/about" },
        }}
      />

      {/* Why join */}
      <section className="border-b py-14 sm:py-20">
        <PageContainer>
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why join Neverinstall
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Impactful problems, high technical ownership, and customer-facing
              outcomes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyJoinBlocks.map((block) => (
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

      {/* Open roles */}
      <section className="border-b py-14 sm:py-20">
        <PageContainer>
          <div className="mb-10 max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Open roles
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              We&apos;re hiring across engineering, product, and sales.
              Don&apos;t see a fit? Reach out anyway — we&apos;re always looking
              for exceptional people.
            </p>
          </div>

          <div className="space-y-10">
            {departments.map((dept) => (
              <div key={dept.name}>
                <h3 className="mb-4 text-sm font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  {dept.name}
                </h3>
                <div className="rounded-2xl border border-border/60 bg-card/80 shadow-sm">
                  {dept.roles.map((role, i) => (
                    <Link
                      key={role.title}
                      href="/contact"
                      className={`group flex items-center justify-between px-5 py-4 transition-colors hover:bg-muted/50 ${i !== dept.roles.length - 1 ? "border-b border-dashed border-border/60" : ""}`}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground sm:text-base">
                          {role.title}
                        </p>
                        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground sm:text-sm">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3 shrink-0" aria-hidden />
                            {role.location}
                          </span>
                          <span className="text-border">|</span>
                          <span>{role.type}</span>
                        </div>
                      </div>
                      <ArrowRight
                        className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-400 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBand
        headline="Interested? Let's talk."
        description="Reach out to our recruiting team, explore the product you'd be building, or read what we're thinking about."
        ctas={[
          { label: "Contact Recruiting", href: "/contact" },
          { label: "Get Product Demo", href: "/get-demo" },
          { label: "Read Blog", href: "/blog" },
        ]}
      />
    </>
  )
}
