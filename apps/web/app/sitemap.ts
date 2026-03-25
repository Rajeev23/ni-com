import type { MetadataRoute } from "next"

import { allRoutePaths } from "@/lib/content/site"
import { seoSiteUrl } from "@/lib/seo/metadata"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return allRoutePaths.map((path) => ({
    url: `${seoSiteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
