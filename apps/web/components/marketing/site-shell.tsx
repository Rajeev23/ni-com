"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

import { footerNavigation, primaryNavigation } from "@/lib/content/site"

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = isActivePath(pathname, href)

  return (
    <Link
      href={href}
      className={`inline-flex h-9 items-center rounded-full px-3 text-sm transition-colors ${
        isActive
          ? "bg-primary/10 text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  )
}

function MegaMenuColumns({
  columns,
}: {
  columns: NonNullable<(typeof primaryNavigation)[number]["columns"]>
}) {
  const totalColumns = Math.min(columns.length, 3)

  return (
    <div
      className={`grid gap-6 p-4 ${
        totalColumns === 1
          ? "w-88 grid-cols-1"
          : totalColumns === 2
            ? "w-136 md:grid-cols-2"
            : "w-4xl md:grid-cols-3"
      }`}
    >
      {columns.map((column) => (
        <div key={column.title} className="space-y-3">
          <p className="px-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {column.title}
          </p>
          <ul className="grid gap-1">
            {column.links.map((link) => (
              <li key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="block rounded-2xl px-3 py-2 transition-colors hover:bg-muted/80"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {link.label}
                    </div>
                    {link.description ? (
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {link.description}
                      </p>
                    ) : null}
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex" viewport={false}>
      <NavigationMenuList>
        {primaryNavigation.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.href && !item.columns?.length ? (
              <NavLink href={item.href} label={item.label} />
            ) : (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenuColumns columns={item.columns ?? []} />
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavLink href="/company/about" label="Company" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex h-9 cursor-pointer items-center gap-1 rounded-full border px-3 text-sm text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          Menu <ChevronDown className="size-4" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="md:hidden">
        <SheetHeader>
          <SheetTitle>Navigate Neverinstall</SheetTitle>
        </SheetHeader>
        <div className="grid gap-6 p-4">
          {primaryNavigation.map((item) => (
            <div key={item.label} className="space-y-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-3 py-2 text-sm font-medium ${
                    isActivePath(pathname, item.href)
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <p className="px-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {item.label}
                </p>
              )}
              {item.columns?.map((column) => (
                <div key={column.title} className="space-y-1">
                  <p className="px-3 text-xs text-muted-foreground">
                    {column.title}
                  </p>
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-2xl px-3 py-2 text-sm ${
                        isActivePath(pathname, link.href)
                          ? "bg-primary/10 text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className="space-y-2">
            <p className="px-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Company
            </p>
            <Link
              href="/company/about"
              className={`block rounded-2xl px-3 py-2 text-sm ${
                isActivePath(pathname, "/company/about")
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/company/careers"
              className={`block rounded-2xl px-3 py-2 text-sm ${
                isActivePath(pathname, "/company/careers")
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Careers
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <div className="border-b bg-linear-to-r from-primary/10 via-transparent to-primary/10 px-4 py-2 text-center text-xs text-muted-foreground">
        One platform for Secure Browser, DaaS, and Sovereign HCI
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/70">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary/15 text-primary">
              N
            </span>
            Neverinstall
          </Link>
          <DesktopNav />
          <div className="hidden items-center gap-2 md:flex">
            <Badge variant="outline">SOC 2 Ready</Badge>
            <Button asChild variant="ghost">
              <Link href="/signup">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/get-demo">
                Get Demo <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <MobileNav />
        </div>
      </header>
      <main className="relative overflow-x-clip">{children}</main>
      <footer className="border-t">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {footerNavigation.map((group) => (
            <div key={group.title} className="space-y-3">
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <div className="grid gap-2 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    className="hover:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <Link
                className="hover:text-foreground"
                href="/security/privacy-data-protection"
              >
                Privacy
              </Link>
              <Link
                className="hover:text-foreground"
                href="/security/compliance-certifications"
              >
                Compliance
              </Link>
              <Link
                className="hover:text-foreground"
                href="/security/policies-legal-documents"
              >
                Policies
              </Link>
              <Link
                className="hover:text-foreground"
                href="/security/security-contact"
              >
                Security Contact
              </Link>
            </div>
            <p>© 2026 Neverinstall</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
