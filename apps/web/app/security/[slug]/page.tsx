import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SchemaScript } from "@/components/marketing/schema-script"
import { TemplatePage } from "@/components/marketing/templates"
import { trustPages } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"
import { faqSchema } from "@/lib/seo/schema"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return Object.keys(trustPages).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const page = trustPages[slug]
  if (!page) {
    return {}
  }

  return getBaseMetadata({
    title: page.seo.title,
    description: page.seo.description,
    path: page.path,
  })
}

export default async function TrustDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const page = trustPages[slug]
  if (!page) {
    notFound()
  }

  const pageFaqSchema = faqSchema(page)

  return (
    <>
      {pageFaqSchema ? <SchemaScript schema={pageFaqSchema} /> : null}
      <TemplatePage page={page} />
    </>
  )
}
