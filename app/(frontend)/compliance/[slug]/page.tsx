import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SchemaScript } from "@/components/marketing/schema-script"
import { TemplatePage } from "@/components/marketing/templates"
import { compliancePages } from "@/lib/content/pages/compliance"
import { getBaseMetadata } from "@/lib/seo/metadata"
import { faqSchema } from "@/lib/seo/schema"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return Object.keys(compliancePages).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const page = compliancePages[slug]
  if (!page) {
    return {}
  }

  return getBaseMetadata({
    title: page.seo.title,
    description: page.seo.description,
    path: page.path,
  })
}

export default async function ComplianceDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const page = compliancePages[slug]
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
