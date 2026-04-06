import type { Metadata } from "next"

import { SchemaScript } from "@/components/marketing/schema-script"
import { TemplatePage } from "@/components/marketing/templates"
import { platformPage } from "@/lib/content/site"
import { getBaseMetadata } from "@/lib/seo/metadata"
import { faqSchema, productSchema } from "@/lib/seo/schema"

export const metadata: Metadata = getBaseMetadata({
  title: platformPage.seo.title,
  description: platformPage.seo.description,
  path: platformPage.path,
})

export default function PlatformPage() {
  const pageFaqSchema = faqSchema(platformPage)

  return (
    <>
      <SchemaScript schema={productSchema(platformPage)} />
      {pageFaqSchema ? <SchemaScript schema={pageFaqSchema} /> : null}
      <TemplatePage page={platformPage} />
    </>
  )
}
