"use client"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import React from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  X,
  Monitor,
  Globe,
  Layers,
  ArrowLeftRight,
  Users,
  Lock,
  Code2,
  Database,
  BookOpen,
  MessageSquare,
  FileText,
  BadgeCheck,
  BriefcaseBusiness,
} from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FeatureLink {
  href: string
  name: string
  description?: string
  icon?: React.ReactElement
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

// ---------------------------------------------------------------------------
// Navigation data
// ---------------------------------------------------------------------------

const products: FeatureLink[] = [
  {
    href: "/products/daas",
    name: "Desktop Workspaces",
    description: "Full Windows and Linux desktops with sub-second restore.",
    icon: <Monitor className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "/products/secure-browser",
    name: "Secure Browser",
    description:
      "Isolated browser sessions with DLP controls and session recording.",
    icon: <Globe className="fill-sky-500/15 stroke-foreground" />,
  },
  {
    href: "/platform",
    name: "Platform Technology",
    description: "The shared stack powering both work modes.",
    icon: <Layers className="fill-violet-500/15 stroke-foreground" />,
  },
]

const useCases: FeatureLink[] = [
  {
    href: "/solutions/use-case/vdi-replacement",
    name: "VDI / Citrix Replacement",
    description: "Migrate off legacy VDI without the cost or complexity.",
    icon: <ArrowLeftRight className="fill-emerald-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/use-case/remote-hybrid-work",
    name: "Remote & Hybrid Work",
    description: "Productive workspaces from any device, anywhere.",
    icon: <Users className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/use-case/contractor-vendor-access",
    name: "Contractor & Vendor Access",
    description: "Secure, zero-trust access for third parties.",
    icon: <BriefcaseBusiness className="fill-amber-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/use-case/secure-byod",
    name: "Secure BYOD",
    description: "Corporate-grade security on personal devices.",
    icon: <Lock className="fill-pink-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/use-case/developer-workspaces",
    name: "Developer Workspaces",
    description: "High-performance cloud dev environments on demand.",
    icon: <Code2 className="fill-violet-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/use-case/data-residency",
    name: "Data Residency",
    description: "Keep data in-region to meet sovereignty requirements.",
    icon: <Database className="fill-teal-500/15 stroke-foreground" />,
  },
]

const industries: FeatureLink[] = [
  {
    href: "/solutions/industry/financial-services",
    name: "Financial Services",
  },
  { href: "/solutions/industry/it-services", name: "IT Services" },
  { href: "/solutions/industry/bpo-call-centers", name: "BPO & Call Centers" },
  { href: "/solutions/industry/healthcare", name: "Healthcare" },
  {
    href: "/solutions/industry/government-defense",
    name: "Government & Defense",
  },
  { href: "/solutions/industry/manufacturing", name: "Manufacturing" },
  { href: "/solutions/industry/education", name: "Education" },
]

const daasCompare: FeatureLink[] = [
  { href: "/compare/vs-citrix", name: "vs Citrix" },
  {
    href: "/compare/vs-azure-virtual-desktop",
    name: "vs Azure Virtual Desktop",
  },
  { href: "/compare/vs-omnissa", name: "vs VMware / Omnissa" },
  { href: "/compare/vs-windows-365", name: "vs Windows 365" },
  { href: "/compare/vs-aws-workspaces", name: "vs AWS WorkSpaces" },
]

const browserCompare: FeatureLink[] = [
  { href: "/compare/vs-island", name: "vs Island" },
  { href: "/compare/vs-menlo", name: "vs Menlo Security" },
  {
    href: "/compare/vs-prisma-access-browser",
    name: "vs Prisma Access Browser",
  },
]

const resources: FeatureLink[] = [
  {
    href: "/resources",
    name: "Resources Hub",
    description: "Guides, whitepapers, and tools for IT teams.",
    icon: <BookOpen className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "/blog",
    name: "Blog",
    description: "Product updates, insights, and industry analysis.",
    icon: <FileText className="fill-sky-500/15 stroke-foreground" />,
  },
  {
    href: "/customers",
    name: "Customer Stories",
    description: "How enterprises modernise with Neverinstall.",
    icon: <MessageSquare className="fill-violet-500/15 stroke-foreground" />,
  },
  {
    href: "/docs",
    name: "Documentation",
    description: "Deployment guides and API references.",
    icon: <FileText className="fill-zinc-500/15 stroke-foreground" />,
  },
  {
    href: "/security",
    name: "Trust Center",
    description: "Compliance, certifications, and security posture.",
    icon: <BadgeCheck className="fill-emerald-500/15 stroke-foreground" />,
  },
]

// ---------------------------------------------------------------------------
// Mobile nav tree
// ---------------------------------------------------------------------------

const mobileLinks: MobileLink[] = [
  { groupName: "Products", links: products },
  { groupName: "Solutions", links: [...useCases, ...industries] },
  { groupName: "Compare", links: [...daasCompare, ...browserCompare] },
  { name: "Pricing", href: "/pricing" },
  { groupName: "Resources", links: resources },
]

// ---------------------------------------------------------------------------
// Header component
// ---------------------------------------------------------------------------

export function HeroHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header
      role="banner"
      data-state={isMobileMenuOpen ? "active" : "inactive"}
      {...(isScrolled && { "data-scrolled": true })}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-50 h-18 border-transparent ring-1 ring-transparent transition-all duration-300",
          "in-data-scrolled:border-b in-data-scrolled:border-foreground/5 in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur",
          "max-lg:h-14 max-lg:overflow-hidden max-lg:border-b max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between lg:py-5">
            <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo uniColor className="h-10" />
              </Link>

              {isLarge && <NavMenu />}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                }
                className="relative z-20 -m-3 -mr-3.5 block cursor-pointer p-3 lg:hidden"
              >
                <Menu className="m-auto size-5 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {!isLarge && isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
            )}

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm">
                  <Link href="/get-demo">
                    <span>Get a Demo</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// ---------------------------------------------------------------------------
// Mobile Menu
// ---------------------------------------------------------------------------

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav role="navigation" className="w-full">
      <Accordion
        type="single"
        collapsible
        className="-mx-4 mt-0.5 space-y-0.5 **:hover:no-underline"
      >
        {mobileLinks.map((link, index) => {
          if (link.groupName && link.links) {
            return (
              <AccordionItem
                key={index}
                value={link.groupName}
                className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b before:border-border"
              >
                <AccordionTrigger className="flex items-center justify-between px-4 py-3 text-lg **:!font-normal data-[state=open]:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-base"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          }
          return null
        })}
      </Accordion>
      {mobileLinks.map((link, index) => {
        if (link.name && link.href) {
          return (
            <Link
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="group relative block border-0 border-b py-4 text-lg"
            >
              {link.name}
            </Link>
          )
        }
        return null
      })}

      <div className="mt-6 flex flex-col gap-3 pb-6">
        <Button asChild size="sm">
          <Link href="/get-demo" onClick={closeMenu}>
            Get a Demo
          </Link>
        </Button>
      </div>
    </nav>
  )
}

// ---------------------------------------------------------------------------
// Desktop Navigation Menu
// ---------------------------------------------------------------------------

const NavMenu = () => {
  return (
    <NavigationMenu className="[--viewport-outer-px:2rem] max-lg:hidden">
      <NavigationMenuList className="gap-3">
        {/* Products */}
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="min-w-lg p-4">
              <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                Products
              </span>
              <ul className="mt-2 space-y-2">
                {products.map((item, index) => (
                  <ListItem
                    key={index}
                    href={item.href}
                    title={item.name}
                    description={item.description}
                  >
                    {item.icon}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Solutions */}
        <NavigationMenuItem value="solutions">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full min-w-4xl grid-cols-[1fr_1fr] gap-4 divide-x divide-foreground/10 p-4">
              <div className="row-span-2 -mr-2 grid grid-rows-subgrid gap-1 pr-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  By Use Case
                </span>
                <ul className="mt-2 space-y-2">
                  {useCases.map((item, index) => (
                    <ListItem
                      key={index}
                      href={item.href}
                      title={item.name}
                      description={item.description}
                    >
                      {item.icon}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div className="row-span-2 grid grid-rows-subgrid gap-1 pl-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  By Industry
                </span>
                <ul className="mt-2">
                  {industries.map((item, index) => (
                    <NavigationMenuLink key={index} asChild>
                      <Link
                        href={item.href}
                        className="block rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Compare */}
        <NavigationMenuItem value="compare">
          <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-full min-w-md grid-cols-[1fr_1fr] gap-4 divide-x divide-foreground/10 p-4">
              <div className="row-span-2 -mr-2 grid grid-rows-subgrid gap-1 pr-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  DaaS / VDI
                </span>
                <ul className="mt-2">
                  {daasCompare.map((item, index) => (
                    <NavigationMenuLink key={index} asChild>
                      <Link
                        href={item.href}
                        className="block rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </div>
              <div className="row-span-2 grid grid-rows-subgrid gap-1 pl-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  Secure Browser
                </span>
                <ul className="mt-2">
                  {browserCompare.map((item, index) => (
                    <NavigationMenuLink key={index} asChild>
                      <Link
                        href={item.href}
                        className="block rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing */}
        <NavigationMenuItem value="pricing">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem value="resources">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="min-w-lg p-4">
              <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                Resources
              </span>
              <ul className="mt-2 space-y-2">
                {resources.map((item, index) => (
                  <ListItem
                    key={index}
                    href={item.href}
                    title={item.name}
                    description={item.description}
                  >
                    {item.icon}
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// ---------------------------------------------------------------------------
// Shared list item
// ---------------------------------------------------------------------------

function ListItem({
  title,
  description,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  description?: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="grid grid-cols-[auto_1fr] gap-2.5 p-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-muted/60 *:size-5">
            {children}
          </div>
          <div className="space-y-0.5">
            <div className="text-sm font-medium text-foreground">{title}</div>
            {description && (
              <p className="line-clamp-1 text-xs text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
