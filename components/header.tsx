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
import { Menu, X, ArrowRight } from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FeatureLink {
  href: string
  name: string
  description?: string
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

const features: FeatureLink[] = [
  {
    href: "/products/secure-browser",
    name: "Secure Browser",
    description: "Zero-trust browsing with browser-native DLP and isolation",
  },
  {
    href: "/products/daas",
    name: "Desktop as a Service",
    description: "Sub-second workspace restore with Windows and Linux support",
  },
  {
    href: "/products/sovereign-hci",
    name: "Sovereign HCI",
    description:
      "Multi-vendor AI infrastructure with sovereign deployment options",
  },
  {
    href: "/platform",
    name: "Platform Technology",
    description: "Shared infrastructure behind all Neverinstall products",
  },
]

const useCases: FeatureLink[] = [
  {
    href: "/solutions/use-case/remote-hybrid-work",
    name: "Remote & Hybrid Work",
    description: "Secure, high-performance workspaces from anywhere",
  },
  {
    href: "/solutions/use-case/contractor-vendor-access",
    name: "Contractor & Vendor Access",
    description: "Controlled third-party access without endpoint risk",
  },
  {
    href: "/solutions/use-case/secure-byod",
    name: "Secure BYOD",
    description: "Bring-your-own-device access with enterprise controls",
  },
  {
    href: "/solutions/use-case/ai-inference-platform",
    name: "AI Inference Platform",
    description: "Deploy sovereign AI stacks across multi-vendor hardware",
  },
]

const contentLinks: FeatureLink[] = [
  {
    name: "Resources Hub",
    href: "/resources",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  { name: "Customer Stories", href: "/customers" },
  { name: "Documentation", href: "/docs" },
  { name: "Trust Center", href: "/security" },
]

const mobileLinks: MobileLink[] = [
  {
    groupName: "Product",
    links: features,
  },
  {
    groupName: "Solutions",
    links: useCases,
  },
  {
    groupName: "Resources",
    links: contentLinks,
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Company", href: "/company/about" },
]

export default function HeaderEight() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <header
        role="banner"
        data-state={isMobileMenuOpen ? "active" : "inactive"}
        {...(isScrolled && { "data-scrolled": true })}
      >
        <div
          className={cn(
            "fixed inset-x-0 top-0 z-50 in-data-scrolled:border-b in-data-scrolled:bg-background/50 in-data-scrolled:backdrop-blur",
            !isLarge && "h-14 overflow-hidden border-b",
            isMobileMenuOpen && "h-screen bg-background/75 backdrop-blur"
          )}
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-12">
            <div className="relative flex flex-wrap items-center justify-between lg:py-3">
              <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2"
                >
                  <Logo uniColor />
                </Link>

                {isLarge && <NavMenu />}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={
                    isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                  }
                  className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="m-auto size-5 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </button>
              </div>

              {!isLarge && isMobileMenuOpen && (
                <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
              )}

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-full pr-2.5"
                  >
                    <Link href="/signup">
                      <span>Sign In</span>
                      <span className="flex size-5 rounded-full bg-card shadow-xs ring-1 ring-border *:m-auto *:size-3!">
                        <ArrowRight className="size-4" />
                      </span>
                    </Link>
                  </Button>
                  <Button asChild className="rounded-full">
                    <Link href="/get-demo">Get Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

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
                className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b"
              >
                <AccordionTrigger className="flex items-center justify-between px-4 py-3 text-lg **:font-normal! data-[state=open]:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <Link
                          href={feature.href}
                          onClick={closeMenu}
                          className="block rounded-lg px-4 py-3 text-lg hover:bg-foreground/5"
                        >
                          {feature.name}
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
    </nav>
  )
}

const NavMenu = () => {
  return (
    <NavigationMenu className="data-[slot=navigation-menu-viewport]:top-1 **:data-[slot=navigation-menu-viewport]:left-5 **:data-[slot=navigation-menu-viewport]:rounded-3xl **:data-[slot=navigation-menu-viewport]:bg-card not-dark:**:data-[slot=navigation-menu-viewport]:shadow-foreground/5 max-lg:hidden">
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="grid min-w-3xl grid-cols-3 divide-x p-1">
            <div className="col-span-2 p-3">
              <span className="ml-4 text-xs font-medium text-muted-foreground">
                Features
              </span>
              <ul className="mt-2 grid grid-cols-2">
                {features.map((feature, index) => (
                  <ListItem
                    key={index}
                    href={feature.href}
                    title={feature.name}
                    description={feature.description}
                  />
                ))}
              </ul>
            </div>
            <div className="p-3">
              <span className="ml-4 text-xs font-medium text-muted-foreground">
                Agents Workflow
              </span>
              <ul className="mt-2">
                {useCases.map((useCase, index) => (
                  <ListItem
                    key={index}
                    href={useCase.href}
                    title={useCase.name}
                    description={useCase.description}
                  />
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="grid min-w-lg grid-cols-2 divide-x p-1">
            <div className="p-3">
              <span className="ml-4 text-xs font-medium text-muted-foreground">
                Use Cases
              </span>
              <ul className="mt-2">
                {useCases.map((useCase, index) => (
                  <ListItem
                    key={index}
                    href={useCase.href}
                    title={useCase.name}
                    description={useCase.description}
                  />
                ))}
              </ul>
            </div>
            <div className="p-3">
              <span className="ml-4 text-xs font-medium text-muted-foreground">
                Content
              </span>
              <ul className="mt-2">
                {contentLinks.map((content, index) => (
                  <NavigationMenuLink key={index} asChild>
                    <Link href={content.href} className="px-3">
                      <div className="text-sm font-medium text-foreground">
                        {content.name}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/pricing">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/company/about">Company</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
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
        <Link href={href} className="gap-0 px-4">
          <div className="text-sm font-medium text-foreground">{title}</div>
          <p className="line-clamp-1 text-sm text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
