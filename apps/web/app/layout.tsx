import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { GlobalSchema } from "@/components/marketing/global-schema"
import "@workspace/ui/globals.css"
import { SchemaScript } from "@/components/marketing/schema-script"
import { SiteShell } from "@/components/marketing/site-shell"
import { ThemeProvider } from "@/components/theme-provider"
import { seoSiteUrl } from "@/lib/seo/metadata"
import { organizationSchema } from "@/lib/seo/schema"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(seoSiteUrl),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SchemaScript schema={organizationSchema()} />
          <GlobalSchema />
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
