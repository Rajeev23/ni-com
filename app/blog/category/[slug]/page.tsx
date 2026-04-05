import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { blogCategories } from "@/lib/content/pages/blog-categories"
import { getBaseMetadata } from "@/lib/seo/metadata"

type Params = {
  slug: string
}

export function generateStaticParams() {
  return Object.keys(blogCategories).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const category = blogCategories[slug]
  if (!category) {
    return {}
  }

  return getBaseMetadata({
    title: category.seo.title,
    description: category.seo.description,
    path: `/blog/category/${slug}`,
  })
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const category = blogCategories[slug]
  if (!category) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-3 text-sm font-medium tracking-widest text-neutral-500 uppercase">
        Blog Category
      </p>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900">
        {category.name}
      </h1>
      <p className="mb-12 text-lg text-neutral-600">{category.description}</p>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-neutral-800">
          Related resources
        </h2>
        <ul className="space-y-2">
          {category.relatedPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="text-blue-600 underline-offset-2 hover:underline"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-sm text-neutral-400">More content coming soon.</p>
    </main>
  )
}
