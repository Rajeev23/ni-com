import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Settings,
  Eye,
  ArrowLeftRight,
} from "lucide-react"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Documentation | Neverinstall",
  description:
    "Setup guides, architecture references, and admin documentation for Neverinstall Desktop Workspaces and Secure Browser.",
  path: "/docs",
})

const categories = [
  {
    icon: <BookOpen className="size-5 text-indigo-400" />,
    title: "Quickstart",
    description:
      "Deploy baseline environments and validate access for your pilot team.",
    links: [
      { label: "Secure Browser setup", href: "/products/secure-browser" },
      { label: "Desktop Workspaces setup", href: "/products/daas" },
    ],
  },
  {
    icon: <Settings className="size-5 text-sky-400" />,
    title: "Identity & Policy",
    description:
      "Configure SSO integration, role-based access, and DLP policy rules.",
    links: [
      { label: "Platform architecture", href: "/platform" },
      { label: "Trust center", href: "/security" },
    ],
  },
  {
    icon: <Eye className="size-5 text-emerald-400" />,
    title: "Observability",
    description:
      "Set up session logging, audit trails, and governance reporting.",
    links: [
      {
        label: "Compliance overview",
        href: "/security/compliance-certifications",
      },
    ],
  },
  {
    icon: <ArrowLeftRight className="size-5 text-violet-400" />,
    title: "Migration",
    description:
      "Plan cutover from Citrix, VMware, or AVD with coexistence guides.",
    links: [
      { label: "Compare vs Citrix", href: "/compare/vs-citrix" },
      { label: "Compare vs AVD", href: "/compare/vs-azure-virtual-desktop" },
    ],
  },
]

export default function DocsPage() {
  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Documentation",
          title: "Technical documentation",
          subtitle:
            "Explore product setup guides, architecture references, and operational playbooks for Desktop Workspaces and Secure Browser.",
          primaryCta: { label: "Get a Demo", href: "/get-demo" },
          secondaryCta: { label: "Contact Support", href: "/contact" },
        }}
      />

      <section className="border-b py-14 sm:py-20">
        <PageContainer>
          <div className="mb-4 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-amber-400">
                Full documentation portal coming soon.
              </span>{" "}
              In the meantime, use the resources below or{" "}
              <Link
                href="/contact"
                className="font-medium text-foreground underline underline-offset-2"
              >
                contact our team
              </Link>{" "}
              for specific setup guidance.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((cat) => (
              <article
                key={cat.title}
                className="rounded-2xl border bg-card/80 p-6 shadow-sm"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-border/60 bg-muted/50">
                  {cat.icon}
                </div>
                <h3 className="text-base font-semibold">{cat.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {cat.description}
                </p>
                {cat.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {cat.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                      >
                        {link.label}
                        <ArrowRight className="size-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <CtaBand
        headline="Need hands-on help?"
        description="Book a guided session for deployment planning, or reach out to support for specific technical questions."
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "See Security", href: "/security" },
          { label: "Contact Support", href: "/contact" },
        ]}
      />
    </>
  )
}
