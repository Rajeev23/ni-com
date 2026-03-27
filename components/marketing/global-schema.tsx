"use client"

import { usePathname } from "next/navigation"

import { breadcrumbSchema } from "@/lib/seo/schema"

export function GlobalSchema() {
  const pathname = usePathname()

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema(pathname)),
      }}
    />
  )
}
