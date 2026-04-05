"use client"
import Link from "next/link"
import { Logo, LogoIcon } from "@/components/logo"
import { Button } from "@/components/ui/button"
import React from "react"
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
  Monitor,
  Globe,
  Layers,
  ArrowLeftRight,
  Users,
  Lock,
  Code2,
  Database,
  Building2,
  Stethoscope,
  Shield,
  Factory,
  GraduationCap,
  BookOpen,
  MessageSquare,
  FileText,
  BadgeCheck,
  Menu,
  X,
  BriefcaseBusiness,
  PhoneCall,
} from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FeatureLink {
  href: string
  name: string
  description?: string
  icon: React.ReactElement
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

// ---------------------------------------------------------------------------
// Navigation data — sourced from navigation.ts + brief icon mapping
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
    icon: <Building2 className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/industry/it-services",
    name: "IT Services",
    icon: <Layers className="fill-sky-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/industry/bpo-call-centers",
    name: "BPO & Call Centers",
    icon: <PhoneCall className="fill-emerald-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/industry/healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="fill-red-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/industry/government-defense",
    name: "Government & Defense",
    icon: <Shield className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/industry/manufacturing",
    name: "Manufacturing",
    icon: <Factory className="fill-orange-500/15 stroke-foreground" />,
  },
  {
    href: "/solutions/industry/education",
    name: "Education",
    icon: <GraduationCap className="fill-yellow-500/15 stroke-foreground" />,
  },
]

const daasCompare: FeatureLink[] = [
  {
    href: "/compare/vs-citrix",
    name: "vs Citrix",
    icon: <ArrowLeftRight className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "/compare/vs-azure-virtual-desktop",
    name: "vs Azure Virtual Desktop",
    icon: <ArrowLeftRight className="fill-sky-500/15 stroke-foreground" />,
  },
  {
    href: "/compare/vs-omnissa",
    name: "vs VMware / Omnissa",
    icon: <ArrowLeftRight className="fill-violet-500/15 stroke-foreground" />,
  },
  {
    href: "/compare/vs-windows-365",
    name: "vs Windows 365",
    icon: <ArrowLeftRight className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "/compare/vs-aws-workspaces",
    name: "vs AWS WorkSpaces",
    icon: <ArrowLeftRight className="fill-amber-500/15 stroke-foreground" />,
  },
]

const browserCompare: FeatureLink[] = [
  {
    href: "/compare/vs-island",
    name: "vs Island",
    icon: <ArrowLeftRight className="fill-emerald-500/15 stroke-foreground" />,
  },
  {
    href: "/compare/vs-menlo",
    name: "vs Menlo Security",
    icon: <ArrowLeftRight className="fill-teal-500/15 stroke-foreground" />,
  },
  {
    href: "/compare/vs-prisma-access-browser",
    name: "vs Prisma Access Browser",
    icon: <ArrowLeftRight className="fill-cyan-500/15 stroke-foreground" />,
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
  const isLarge = useMedia("(min-width: 64rem)")
  const [isScrolled, setIsScrolled] = React.useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 75)
  })

  return (
    <header
      role="banner"
      {...(isScrolled && { "data-scrolled": true })}
      data-state={isMobileMenuOpen ? "active" : "inactive"}
      className="bg-background"
    >
      <div
        className={cn(
          "relative",
          "not-in-data-scrolled:has-data-[state=open]:[--viewport-translate:-4rem]",
          !isLarge &&
            "fixed inset-x-0 top-0 z-50 h-16 overflow-hidden in-data-scrolled:border-b in-data-scrolled:border-foreground/5 in-data-scrolled:bg-card/50 in-data-scrolled:backdrop-blur",
          "max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-card/50 max-lg:in-data-[state=active]:backdrop-blur"
        )}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative flex flex-wrap items-center justify-between py-1.5 max-lg:not-in-data-[state=active]:h-16 lg:py-5">
            {/* Mobile top bar — logo + hamburger */}
            <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-b max-lg:in-data-[state=active]:border-foreground/5">
              <Link href="/" aria-label="home">
                <Logo uniColor className="h-5" />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-5 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {/* Desktop floating pill nav */}
            {isLarge && (
              <motion.div
                animate={{ width: "fit-content", gap: 8 }}
                className="fixed inset-x-0 z-50 mx-auto size-fit max-w-2xl rounded-xl bg-popover/50 py-1.5 pl-1.5 shadow-md ring-1 shadow-black/6.5 ring-border backdrop-blur-xl"
              >
                <div className="flex items-center">
                  <AnimatePresence>
                    {isScrolled && (
                      <motion.div
                        key="logo"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "3rem" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="relative before:absolute before:inset-y-1 before:right-2 before:w-0.5 before:rounded before:border-r before:border-background/75 before:bg-foreground/10"
                      >
                        <Link
                          href="/"
                          aria-label="home"
                          className="flex size-7 rounded-md hover:bg-foreground/5"
                        >
                          <LogoIcon className="m-auto size-4" />
                        </Link>
                      </motion.div>
                    )}

                    <div className="pr-1.5">
                      <NavMenu key="nav-menu" />
                    </div>

                    {isScrolled && (
                      <motion.div
                        key="cta-button"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="-my-1 overflow-hidden py-1 pr-0.5"
                      >
                        <Button asChild size="sm" className="mr-1 ml-2.5 h-7">
                          <Link href="/get-demo">
                            <span>Get a Demo</span>
                          </Link>
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* Mobile menu panel */}
            {!isLarge && isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Desktop right-side CTAs (visible before scroll) */}
            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
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
                          className="grid grid-cols-[auto_1fr] items-center gap-2.5 px-4 py-2"
                        >
                          <div
                            aria-hidden
                            className="flex items-center justify-center *:size-4"
                          >
                            {item.icon}
                          </div>
                          <div className="text-base">{item.name}</div>
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
    <NavigationMenu className="**:data-[slot=navigation-menu-viewport]:max-w-2xl **:data-[slot=navigation-menu-viewport]:min-w-lg **:data-[slot=navigation-menu-viewport]:translate-x-(--viewport-translate) **:data-[slot=navigation-menu-viewport]:transition-all max-lg:hidden">
      <NavigationMenuList className="gap-0 gap-1 **:data-[slot=navigation-menu-trigger]:h-7 **:data-[slot=navigation-menu-trigger]:px-3 **:data-[slot=navigation-menu-trigger]:text-sm **:data-[slot=navigation-menu-trigger]:text-foreground/75">
        {/* Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="w-full origin-top p-0">
            <div className="rounded-xl border border-foreground/5 border-transparent bg-card p-px pt-2 shadow ring-1 ring-foreground/5">
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Products
              </span>
              <ul className="mt-1 grid grid-cols-1">
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
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-full min-w-lg origin-top grid-cols-[1fr_1fr] gap-2 p-0">
            {/* By Use Case */}
            <div className="rounded-xl border border-foreground/5 border-transparent bg-card p-px pt-2 shadow ring-1 ring-foreground/5">
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                By Use Case
              </span>
              <ul className="mt-1">
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
            {/* By Industry */}
            <div className="p-0.5 pt-2">
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                By Industry
              </span>
              <ul className="mt-1">
                {industries.map((item, index) => (
                  <NavigationMenuLink key={index} asChild>
                    <Link
                      href={item.href}
                      className="grid grid-cols-[auto_1fr] items-center gap-2.5 rounded-md px-3 py-2 transition-colors hover:bg-accent"
                    >
                      <div
                        className="flex size-4 items-center justify-center *:size-4"
                        aria-hidden
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Compare */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Compare</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-full min-w-lg origin-top grid-cols-[1fr_1fr] gap-2 p-0">
            {/* DaaS / VDI column */}
            <div className="rounded-xl border border-foreground/5 border-transparent bg-card p-px pt-2 shadow ring-1 ring-foreground/5">
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                DaaS / VDI
              </span>
              <ul className="mt-1">
                {daasCompare.map((item, index) => (
                  <NavigationMenuLink key={index} asChild>
                    <Link
                      href={item.href}
                      className="grid grid-cols-[auto_1fr] items-center gap-2.5 rounded-md px-3 py-2 transition-colors hover:bg-accent"
                    >
                      <div
                        className="flex size-4 items-center justify-center *:size-4"
                        aria-hidden
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </div>
            {/* Secure Browser column */}
            <div className="p-0.5 pt-2">
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Secure Browser
              </span>
              <ul className="mt-1">
                {browserCompare.map((item, index) => (
                  <NavigationMenuLink key={index} asChild>
                    <Link
                      href={item.href}
                      className="grid grid-cols-[auto_1fr] items-center gap-2.5 rounded-md px-3 py-2 transition-colors hover:bg-accent"
                    >
                      <div
                        className="flex size-4 items-center justify-center *:size-4"
                        aria-hidden
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Pricing — direct link */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle({
              className: "text-foreground/75 h-7 px-3 text-sm",
            })}
          >
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Resources */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent className="w-full origin-top p-0">
            <div className="rounded-xl border border-foreground/5 border-transparent bg-card p-px pt-2 shadow ring-1 ring-foreground/5">
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Resources
              </span>
              <ul className="mt-1 grid grid-cols-1">
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
// Shared list item (with icon box, title, description)
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
          <div className="relative flex size-9 items-center justify-center rounded-lg border border-transparent bg-illustration shadow shadow-sm ring-1 ring-foreground/10 *:drop-shadow *:drop-shadow-black/6.5 before:absolute before:inset-0 before:rounded-lg before:bg-radial before:to-foreground/3">
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
