import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import { allRoutePaths } from '@/lib/content/site'
import { seoSiteUrl } from '@/lib/seo/metadata'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = allRoutePaths.map((path) => ({
    url: `${seoSiteUrl}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))

  const payload = await getPayload({ config })

  const [posts, categories] = await Promise.all([
    payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      limit: 1000,
      select: { slug: true, updatedAt: true },
    }),
    payload.find({
      collection: 'categories',
      limit: 100,
      select: { slug: true, updatedAt: true },
    }),
  ])

  const blogRoutes: MetadataRoute.Sitemap = posts.docs.map((post) => ({
    url: `${seoSiteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = categories.docs.map((cat) => ({
    url: `${seoSiteUrl}/blog/category/${cat.slug}`,
    lastModified: new Date(cat.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes]
}
