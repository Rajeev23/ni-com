import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { GlobalSchema } from "@/components/marketing/global-schema"
import "@/styles/globals.css"
import { SchemaScript } from "@/components/marketing/schema-script"
import { SiteShell } from "@/components/marketing/site-shell"
import { ThemeProvider } from "@/components/theme-provider"
import { PostHogProvider } from "@/components/analytics/posthog-provider"
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/analytics/google-tag-manager"
import { GoogleAnalytics } from "@/components/analytics/gtag"
import { LinkedInInsight } from "@/components/analytics/linkedin-insight"
import { MicrosoftClarity } from "@/components/analytics/clarity"
import { MdbPixel } from "@/components/analytics/mdb-pixel"
import { Intercom } from "@/components/analytics/intercom"
import { seoSiteUrl } from "@/lib/seo/metadata"
import { organizationSchema } from "@/lib/seo/schema"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(seoSiteUrl),
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Neverinstall",
    "msapplication-TileColor": "#0a0a0a",
  },
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
      <head>
        <GoogleTagManager />
        <GoogleAnalytics />
        <LinkedInInsight />
        <MicrosoftClarity />
        <MdbPixel />
      </head>
      <body>
        <GoogleTagManagerNoscript />
        <SchemaScript schema={organizationSchema()} />
        <GlobalSchema />
        <PostHogProvider>
          <ThemeProvider>
            <SiteShell>{children}</SiteShell>
          </ThemeProvider>
        </PostHogProvider>
        <Intercom />
      </body>
    </html>
  )
}
