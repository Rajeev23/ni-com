import type { Metadata } from "next"

const siteUrl = "https://neverinstall.com"
const siteName = "Neverinstall"
const defaultOgImagePath = "/opengraph-image"
const defaultTwitterImagePath = "/twitter-image"

function toAbsolute(path: string) {
  return `${siteUrl}${path}`
}

export function getBaseMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: toAbsolute(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: toAbsolute(defaultOgImagePath),
          width: 1200,
          height: 630,
          alt: `${siteName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@neverinstall",
      creator: "@neverinstall",
      title,
      description,
      images: [toAbsolute(defaultTwitterImagePath)],
    },
  }
}

export const seoSiteUrl = siteUrl
