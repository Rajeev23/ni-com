import { Shield } from "lucide-react"
import Link from "next/link"

import { Logo } from "@/components/logo"
import { footerNavigation } from "@/lib/content/navigation"

export default function FooterSection() {
  return (
    <footer role="contentinfo" className="bg-background py-8 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="space-y-6 md:col-span-2 md:space-y-12">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo uniColor />
            </Link>

            <p className="text-sm text-balance text-muted-foreground">
              Secure enterprise desktops and browsers for cloud and sovereign
              environments.
            </p>

            {/* Social links */}
            <div className="-ml-3 flex items-center">
              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/neverinstall"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neverinstall on LinkedIn"
                className="inline-flex items-center justify-center p-3 text-muted-foreground transition-colors duration-[var(--transition-base,200ms)] hover:text-primary"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  />
                </svg>
              </Link>
              {/* X / Twitter */}
              <Link
                href="https://x.com/neverinstall"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neverinstall on X"
                className="inline-flex items-center justify-center p-3 text-muted-foreground transition-colors duration-[var(--transition-base,200ms)] hover:text-primary"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    fill="currentColor"
                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Nav columns — driven by footerNavigation from navigation.ts */}
          <div className="col-span-3 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {footerNavigation.map((group, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{group.title}</span>
                <div className="flex flex-wrap gap-4 sm:flex-col">
                  {group.links.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block text-muted-foreground transition-colors duration-[var(--transition-fast,150ms)] hover:text-primary"
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden
          className="h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[6px_1px] bg-repeat-x opacity-25"
        />

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>
              © {new Date().getFullYear()} Neverinstall, Inc. All rights
              reserved.
            </span>
            <Link
              href="/security/privacy-data-protection"
              className="transition-colors duration-[var(--transition-fast,150ms)] hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="/security/terms-conditions"
              className="transition-colors duration-[var(--transition-fast,150ms)] hover:text-primary"
            >
              Terms
            </Link>
          </div>

          <Link
            href="/security"
            className="flex items-center gap-2 rounded-full border border-transparent bg-card py-1 pr-4 pl-2 text-sm text-muted-foreground shadow ring-1 ring-foreground/5 transition-colors hover:text-primary"
          >
            <Shield className="size-3.5" />
            Trust Center
          </Link>
        </div>
      </div>
    </footer>
  )
}
