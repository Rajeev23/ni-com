# Payload CMS Blog Integration — Design Spec

## Overview

Replace the static TypeScript blog content (`lib/content/pages/blog.ts`) with Payload CMS embedded in the existing Next.js app. Non-technical authors get a block-based editor with custom components. All other marketing pages remain as static TypeScript content.

## Integration Model

Payload CMS runs inside the existing Next.js app — no separate service.

```
app/
├── (payload)/
│   └── admin/
│       └── [[...segments]]/
│           └── page.tsx          ← Payload admin UI (route group, no site shell)
│       └── importMap.js          ← Payload auto-generated import map
├── blog/
│   ├── page.tsx                  ← Blog index (queries Payload)
│   ├── [slug]/
│   │   └── page.tsx              ← Blog post (queries Payload)
│   └── category/
│       └── [slug]/
│           └── page.tsx          ← Category page (queries Payload)
├── api/[...payload]/
│   └── route.ts                  ← Payload REST/GraphQL API route
├── ...existing routes unchanged
collections/
├── posts.ts                      ← Posts collection schema
├── categories.ts                 ← Categories collection schema
├── authors.ts                    ← Authors collection schema
├── media.ts                      ← Media collection schema
├── index.ts                      ← Re-exports all collections
blocks/
├── rich-text.ts                  ← RichText block schema
├── callout.ts                    ← Callout block schema
├── comparison-table.ts           ← ComparisonTable block schema
├── stat-highlight.ts             ← StatHighlight block schema
├── image-block.ts                ← ImageBlock block schema
├── code-block.ts                 ← CodeBlock block schema
├── cta-card.ts                   ← CtaCard block schema
├── embed-block.ts                ← EmbedBlock block schema
├── quote-block.ts                ← QuoteBlock block schema
├── index.ts                      ← Re-exports all blocks
components/blog/
├── block-renderer.tsx            ← Switch component rendering blocks to React
├── blocks/
│   ├── rich-text-block.tsx       ← RichText frontend renderer
│   ├── callout-block.tsx         ← Callout frontend renderer
│   ├── comparison-table-block.tsx
│   ├── stat-highlight-block.tsx
│   ├── image-block.tsx
│   ├── code-block.tsx
│   ├── cta-card-block.tsx
│   ├── embed-block.tsx
│   └── quote-block.tsx
├── blog-hero.tsx                 ← Blog post hero (title, meta, cover image)
├── blog-card.tsx                 ← Card for blog index/category pages
payload.config.ts                 ← Root Payload config
```

## Data Model

### Posts Collection

| Field | Type | Notes |
|-------|------|-------|
| title | text | Required |
| slug | text | Auto-generated from title, unique, indexed |
| description | textarea | Short summary for cards and SEO meta |
| coverImage | upload → Media | Featured image |
| category | relationship → Categories | Single select |
| author | relationship → Authors | Single select |
| publishedAt | date | Controls display date, used for sort order |
| status | select: draft / published | Only published posts visible on frontend |
| content | blocks[] | Ordered array of content blocks (see Blocks section) |
| seo.title | text | Optional override for `<title>` tag |
| seo.description | textarea | Optional override for meta description |

**Hooks:**
- `beforeChange`: auto-generate slug from title if not manually set
- `beforeChange`: auto-calculate `readTime` from block content length

**Access control:**
- Public read (where status = published)
- Authenticated create/update/delete

### Categories Collection

| Field | Type | Notes |
|-------|------|-------|
| name | text | Required, e.g. "VDI Modernization" |
| slug | text | Auto-generated from name, unique |
| description | textarea | Category description |
| seo.title | text | SEO title for category page |
| seo.description | textarea | SEO description for category page |
| relatedPages | array | Array of { title: text, href: text } |

### Authors Collection

| Field | Type | Notes |
|-------|------|-------|
| name | text | Required, display name |
| role | text | e.g. "Head of Product" |
| avatar | upload → Media | Profile image |

### Media Collection

Payload's built-in upload collection, configured with:
- Storage: local disk (can migrate to R2 later via Payload cloud storage plugin)
- Alt text: required field
- Image sizes: thumbnail (400w), card (800w), hero (1600w) auto-generated

## Content Blocks

Each block has a Payload field schema (defines editor UI) and a React component (defines frontend rendering).

### RichText
- **Editor fields:** Lexical rich text editor (Payload default) — headings (h2-h4), bold, italic, links, ordered/unordered lists, inline images
- **Renders as:** Prose-styled HTML with Tailwind typography classes
- **Primary block** — most post content lives here

### Callout
- **Editor fields:** type (select: info / warning / tip / note), body (textarea)
- **Renders as:** Colored box with icon — blue/info, amber/warning, green/tip, gray/note

### ComparisonTable
- **Editor fields:** columns (array of 3 text fields), rows (array of { label, value1, value2 })
- **Renders as:** Reuses existing `TableSection` styles from `components/marketing/sections.tsx`

### StatHighlight
- **Editor fields:** title (text), items (array of { label, value, detail })
- **Renders as:** Reuses existing `StatsSection` styles from `components/marketing/sections.tsx`

### ImageBlock
- **Editor fields:** image (upload → Media), caption (text, optional), fullWidth (checkbox)
- **Renders as:** Responsive `<figure>` with `<figcaption>`, max-width constrained unless fullWidth

### CodeBlock
- **Editor fields:** language (select: common languages), code (code textarea)
- **Renders as:** Syntax-highlighted `<pre>` block with language badge

### CtaCard
- **Editor fields:** heading (text), description (textarea), buttonLabel (text), buttonHref (text)
- **Renders as:** Styled card with button, consistent with site CTA patterns

### EmbedBlock
- **Editor fields:** url (text), caption (text, optional)
- **Renders as:** Responsive iframe (YouTube, Loom auto-detected), fallback link for unsupported URLs

### QuoteBlock
- **Editor fields:** quote (textarea), attribution (text), role (text, optional)
- **Renders as:** Styled blockquote with attribution line

## Blog Page Changes

### `/blog` (index)

```tsx
// Queries Payload for published posts, ordered by publishedAt desc
const posts = await payload.find({
  collection: 'posts',
  where: { status: { equals: 'published' } },
  sort: '-publishedAt',
  limit: 20,
  depth: 1, // populates category and author
})
```

Renders using existing `HeroSection` + `ResourceGrid` pattern. Cards built from post title, description, slug, coverImage. Pagination added when post count exceeds page limit.

### `/blog/[slug]` (post)

```tsx
const result = await payload.find({
  collection: 'posts',
  where: {
    slug: { equals: slug },
    status: { equals: 'published' },
  },
  depth: 2,
})
const post = result.docs[0]
if (!post) notFound()
```

Renders: `BlogHero` (title, author, date, category, cover image) → `BlockRenderer` loop over `post.content` → `CtaBand`.

`BlockRenderer` is an exhaustive switch on `block.blockType`, same pattern as existing `SectionRenderer`.

### `/blog/category/[slug]` (category)

Queries category by slug, then queries posts filtered by that category. Same card layout as blog index with category-specific hero.

### `generateStaticParams`

All three routes use `payload.find()` to return slugs at build time for static generation.

### `generateMetadata`

Blog post metadata uses `post.seo.title ?? post.title` and `post.seo.description ?? post.description`, passed through existing `getBaseMetadata()`.

## Admin Panel

- Route: `/admin` inside `(payload)` route group — does not use `SiteShell` (header/footer)
- Auth: email/password, Payload built-in
- Roles:
  - **admin**: full access to all collections and Payload config
  - **editor**: create/edit/delete posts, manage media, read-only on categories and authors
- Live preview: configured so editors can preview draft posts rendered with the actual blog template
- Draft workflow: posts default to `status: draft`, must be explicitly set to `published`

## Payload Config

```ts
// payload.config.ts (simplified)
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Posts, Categories, Authors, Media } from './collections'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  admin: {
    user: 'users', // Payload's built-in users collection for admin auth
  },
  collections: [Posts, Categories, Authors, Media],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI },
  }),
  typescript: {
    outputFile: 'payload-types.ts', // auto-generated types
  },
})
```

## Database

- Adapter: `@payloadcms/db-postgres`
- Connection: new Postgres database, connection string via `DATABASE_URI` env var
- Payload auto-manages schema migrations — no manual SQL needed
- Tables auto-created on first run

## Dependencies to Add

```
payload                          — core CMS
@payloadcms/next                 — Next.js integration (admin routes, API routes)
@payloadcms/db-postgres          — Postgres adapter
@payloadcms/richtext-lexical     — Lexical rich text editor
@payloadcms/plugin-seo           — optional: SEO field group plugin
sharp                            — image processing (required by Payload for media)
```

## What Does NOT Change

- All non-blog marketing pages (products, compare, use-cases, industries, compliance, trust, platform, customers)
- `lib/content/` directory and all files except `pages/blog.ts` and `pages/blog-categories.ts`
- `lib/content/site.ts` — `blogCards` and `blogCategories` exports removed. Blog index/category pages query Payload directly. Any other page that referenced `blogCards` (e.g. `/resources`) will use an inline Payload query instead.
- `components/marketing/sections.tsx` — stays, some components reused by blog blocks
- `components/marketing/templates.tsx` — stays for non-blog template pages
- Root layout, theme, styling, animations — all untouched
- SEO utilities (`lib/seo/metadata.ts`, `lib/seo/schema.ts`) — reused as-is
- `next.config.mjs` — minor additions for Payload's webpack config via `withPayload()`

## Migration of Existing Blog Content

The 3 existing blog posts in `blog.ts` and 6 categories in `blog-categories.ts` will be seeded into Payload via a seed script (`lib/seed.ts`). After seeding is verified:
- `lib/content/pages/blog.ts` — deleted
- `lib/content/pages/blog-categories.ts` — deleted
- `blogCards` export in `site.ts` — removed or replaced with a server-side Payload query helper

## SEO Considerations

- Blog post pages: JSON-LD `Article` schema added (author, publishedAt, description)
- Category pages: keep existing SEO pattern with `getBaseMetadata()`
- Sitemap: `app/sitemap.ts` updated to query Payload for published post slugs + category slugs
- OpenGraph images: `opengraph-image.tsx` can be extended per-post using cover image
