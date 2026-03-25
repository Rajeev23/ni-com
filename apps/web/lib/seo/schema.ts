import type { ContentPage } from "@/lib/content/types"
import { seoSiteUrl } from "@/lib/seo/metadata"

function toAbsolute(path: string) {
  return `${seoSiteUrl}${path}`
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neverinstall",
    url: seoSiteUrl,
    logo: `${seoSiteUrl}/favicon.ico`,
    sameAs: ["https://www.linkedin.com/company/neverinstall"],
  }
}

export function breadcrumbSchema(path: string) {
  const cleanSegments = path.split("/").filter(Boolean)
  const listItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: toAbsolute("/"),
    },
    ...cleanSegments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: segment.replaceAll("-", " "),
      item: toAbsolute(`/${cleanSegments.slice(0, index + 1).join("/")}`),
    })),
  ]

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  }
}

export function faqSchema(page: ContentPage) {
  if (!page.faq?.length) {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

function getApplicationCategory(page: ContentPage) {
  switch (page.template) {
    case "product":
      return page.slug === "sovereign-hci"
        ? "DeveloperApplication"
        : "BusinessApplication"
    case "platform":
      return "DeveloperApplication"
    case "compare":
    case "core":
    case "industry":
    case "trust":
    case "useCase":
      return "BusinessApplication"
    default: {
      const exhaustiveCheck: never = page.template
      return exhaustiveCheck
    }
  }
}

export function productSchema(page: ContentPage) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: page.name,
    applicationCategory: getApplicationCategory(page),
    description: page.seo.description,
    url: toAbsolute(page.path),
  }
}
