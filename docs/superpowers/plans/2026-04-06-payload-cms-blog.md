# Payload CMS Blog Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace static TypeScript blog content with Payload CMS embedded in the Next.js app, giving non-technical authors a block-based editor for composing blog posts with custom components.

**Architecture:** Payload CMS v3 runs inside the existing Next.js app. Collections (Posts, Categories, Authors, Media) define the data model. Content blocks (RichText, Callout, ComparisonTable, etc.) give authors structured building blocks. Blog pages query Payload's local API at build/request time. Admin panel lives at `/admin`.

**Tech Stack:** Payload CMS 3.x, @payloadcms/db-postgres, @payloadcms/richtext-lexical, @payloadcms/next, sharp

---

## Task 1: Install Dependencies & Scaffold Payload Config

**Files:**

- Modify: `package.json`
- Modify: `next.config.mjs`
- Modify: `tsconfig.json`
- Create: `payload.config.ts`
- Create: `.env.example` (document required env vars)

- [ ] **Step 1: Install Payload and its adapters**

```bash
pnpm add payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical sharp
```

- [ ] **Step 2: Add `@payload-config` path alias to `tsconfig.json`**

In `tsconfig.json`, add to `compilerOptions.paths`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@payload-config": ["./payload.config.ts"]
    }
  }
}
```

- [ ] **Step 3: Wrap next.config.mjs with withPayload**

```js
import { withPayload } from "@payloadcms/next/withPayload"

const cloudflareImageHost = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGE_HOSTNAME

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
        pathname: "/**",
      },
      ...(cloudflareImageHost
        ? [
            {
              protocol: "https",
              hostname: cloudflareImageHost,
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
  async redirects() {
    // ...existing redirects unchanged
    return [
      {
        source: "/browser",
        destination: "/products/secure-browser",
        permanent: true,
      },
      { source: "/daas", destination: "/products/daas", permanent: true },
      {
        source: "/hci",
        destination: "/products/sovereign-hci",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/products/sovereign-hci",
        permanent: true,
      },
      {
        source: "/gpu",
        destination: "/solutions/use-case/ai-inference-platform",
        permanent: true,
      },
      { source: "/tco", destination: "/tco-calculator", permanent: true },
      {
        source: "/nvidia",
        destination: "/compare/vs-nvidia-ai-enterprise",
        permanent: true,
      },
      {
        source: "/nutanix",
        destination: "/compare/vs-nutanix-gpt-in-a-box",
        permanent: true,
      },
      { source: "/tech", destination: "/platform", permanent: true },
      {
        source: "/government",
        destination: "/solutions/industry/government-defense",
        permanent: true,
      },
      { source: "/demo", destination: "/get-demo", permanent: true },
      {
        source: "/privacy",
        destination: "/security/privacy-data-protection",
        permanent: true,
      },
      {
        source: "/cookie-policy",
        destination: "/security/cookie-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/security/terms-conditions",
        permanent: true,
      },
      {
        source: "/toc",
        destination: "/security/terms-conditions",
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
```

- [ ] **Step 4: Create minimal `payload.config.ts`**

Start with just the Users collection (Payload built-in for admin auth). Collections will be added in subsequent tasks.

```ts
// payload.config.ts
import path from "path"
import { fileURLToPath } from "url"
import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "CHANGE-ME-IN-PRODUCTION",
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: "users",
      auth: true,
      admin: { useAsTitle: "email" },
      fields: [],
    },
  ],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || "" },
  }),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
```

- [ ] **Step 5: Create `.env.example`**

```
DATABASE_URI=postgresql://user:password@localhost:5432/neverinstall_cms
PAYLOAD_SECRET=your-secret-key-at-least-32-chars
```

- [ ] **Step 6: Commit**

```bash
git add package.json pnpm-lock.yaml tsconfig.json next.config.mjs payload.config.ts .env.example
git commit -m "chore: install Payload CMS and scaffold config"
```

---

## Task 2: Set Up Payload Admin & API Routes

**Files:**

- Create: `app/(payload)/admin/[[...segments]]/page.tsx`
- Create: `app/(payload)/admin/importMap.js`
- Create: `app/(payload)/layout.tsx`
- Create: `app/(payload)/api/[...segments]/route.ts`
- Create: `app/(payload)/custom.scss` (empty — required by Payload)

- [ ] **Step 1: Create the Payload layout**

This layout renders Payload's root layout without your site shell (header/footer).

```tsx
// app/(payload)/layout.tsx
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { ServerFunctionClient } from "payload"

import config from "@payload-config"
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts"
import React from "react"

import "./custom.scss"
import { importMap } from "./admin/importMap.js"

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  "use server"
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout
    config={config}
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
)

export default Layout
```

- [ ] **Step 2: Create the admin catch-all page**

```tsx
// app/(payload)/admin/[[...segments]]/page.tsx
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from "next"

import config from "@payload-config"
import { generatePageMetadata, RootPage } from "@payloadcms/next/views"
import { importMap } from "../importMap.js"

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({
  params,
  searchParams,
}: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, importMap, params, searchParams })

export default Page
```

- [ ] **Step 3: Create the import map placeholder**

```js
// app/(payload)/admin/importMap.js
// This file will be auto-generated by Payload on first run.
// Start with an empty export so the build doesn't fail.
export const importMap = {}
```

- [ ] **Step 4: Create the custom.scss file**

```scss
// app/(payload)/custom.scss
// Payload requires this file to exist. Add admin CSS overrides here.
```

- [ ] **Step 5: Create the API route handler**

```ts
// app/(payload)/api/[...segments]/route.ts
/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from "@payload-config"
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from "@payloadcms/next/routes"

export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const PUT = REST_PUT(config)
export const OPTIONS = REST_OPTIONS(config)
```

- [ ] **Step 6: Verify the app builds and admin panel loads**

```bash
# Ensure DATABASE_URI and PAYLOAD_SECRET are set in .env.local
pnpm dev
```

Open `http://localhost:3000/admin` — you should see the Payload setup screen to create the first admin user. Verify the rest of the site (homepage, `/products/daas`, etc.) still renders normally.

- [ ] **Step 7: Commit**

```bash
git add "app/(payload)"
git commit -m "feat: add Payload admin panel and API routes"
```

---

## Task 3: Define Media Collection

**Files:**

- Create: `collections/media.ts`

- [ ] **Step 1: Create the Media collection**

```ts
// collections/media.ts
import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticDir: "media",
    imageSizes: [
      { name: "thumbnail", width: 400, height: undefined, position: "centre" },
      { name: "card", width: 800, height: undefined, position: "centre" },
      { name: "hero", width: 1600, height: undefined, position: "centre" },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
}
```

- [ ] **Step 2: Register Media in payload.config.ts**

Replace the inline `users` collection and add Media:

```ts
// payload.config.ts — update imports and collections array
import { Media } from './collections/media'

// In buildConfig:
collections: [
  {
    slug: 'users',
    auth: true,
    admin: { useAsTitle: 'email' },
    fields: [],
  },
  Media,
],
```

- [ ] **Step 3: Add `media/` to `.gitignore`**

Append to `.gitignore`:

```
media/
```

- [ ] **Step 4: Verify** — run `pnpm dev`, go to `/admin`, confirm Media collection appears in sidebar. Upload a test image. Confirm thumbnail/card/hero sizes are generated.

- [ ] **Step 5: Commit**

```bash
git add collections/media.ts payload.config.ts .gitignore
git commit -m "feat: add Media collection with image sizes"
```

---

## Task 4: Define Authors Collection

**Files:**

- Create: `collections/authors.ts`
- Modify: `payload.config.ts`

- [ ] **Step 1: Create the Authors collection**

```ts
// collections/authors.ts
import type { CollectionConfig } from "payload"

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
  ],
}
```

- [ ] **Step 2: Register in payload.config.ts**

Add `import { Authors } from './collections/authors'` and add `Authors` to the collections array.

- [ ] **Step 3: Verify** — run `pnpm dev`, confirm Authors appears in admin, create a test author.

- [ ] **Step 4: Commit**

```bash
git add collections/authors.ts payload.config.ts
git commit -m "feat: add Authors collection"
```

---

## Task 5: Define Categories Collection

**Files:**

- Create: `collections/categories.ts`
- Modify: `payload.config.ts`

- [ ] **Step 1: Create the Categories collection**

```ts
// collections/categories.ts
import type { CollectionConfig } from "payload"

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          "URL-friendly identifier. Auto-generated from name if left blank.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => {
            if (!value && siblingData?.name) {
              return siblingData.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
            }
            return value
          },
        ],
      },
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "seo",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
    },
    {
      name: "relatedPages",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
  ],
}
```

- [ ] **Step 2: Register in payload.config.ts**

Add `import { Categories } from './collections/categories'` and add `Categories` to the collections array.

- [ ] **Step 3: Verify** — run `pnpm dev`, confirm Categories appears in admin, create a test category.

- [ ] **Step 4: Commit**

```bash
git add collections/categories.ts payload.config.ts
git commit -m "feat: add Categories collection"
```

---

## Task 6: Define Content Blocks

**Files:**

- Create: `blocks/rich-text.ts`
- Create: `blocks/callout.ts`
- Create: `blocks/comparison-table.ts`
- Create: `blocks/stat-highlight.ts`
- Create: `blocks/image-block.ts`
- Create: `blocks/code-block.ts`
- Create: `blocks/cta-card.ts`
- Create: `blocks/embed-block.ts`
- Create: `blocks/quote-block.ts`
- Create: `blocks/index.ts`

- [ ] **Step 1: Create RichText block**

```ts
// blocks/rich-text.ts
import type { Block } from "payload"

export const RichTextBlock: Block = {
  slug: "richText",
  interfaceName: "RichTextBlock",
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
}
```

- [ ] **Step 2: Create Callout block**

```ts
// blocks/callout.ts
import type { Block } from "payload"

export const CalloutBlock: Block = {
  slug: "callout",
  interfaceName: "CalloutBlock",
  fields: [
    {
      name: "type",
      type: "select",
      defaultValue: "info",
      options: [
        { label: "Info", value: "info" },
        { label: "Warning", value: "warning" },
        { label: "Tip", value: "tip" },
        { label: "Note", value: "note" },
      ],
      required: true,
    },
    {
      name: "body",
      type: "textarea",
      required: true,
    },
  ],
}
```

- [ ] **Step 3: Create ComparisonTable block**

```ts
// blocks/comparison-table.ts
import type { Block } from "payload"

export const ComparisonTableBlock: Block = {
  slug: "comparisonTable",
  interfaceName: "ComparisonTableBlock",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "columns",
      type: "group",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          admin: { description: 'Row label column header (e.g. "Feature")' },
        },
        {
          name: "columnOne",
          type: "text",
          required: true,
          admin: { description: "First comparison column header" },
        },
        {
          name: "columnTwo",
          type: "text",
          required: true,
          admin: { description: "Second comparison column header" },
        },
      ],
    },
    {
      name: "rows",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "valueOne", type: "text", required: true },
        { name: "valueTwo", type: "text", required: true },
      ],
    },
  ],
}
```

- [ ] **Step 4: Create StatHighlight block**

```ts
// blocks/stat-highlight.ts
import type { Block } from "payload"

export const StatHighlightBlock: Block = {
  slug: "statHighlight",
  interfaceName: "StatHighlightBlock",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "items",
      type: "array",
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
        { name: "detail", type: "text" },
      ],
    },
  ],
}
```

- [ ] **Step 5: Create ImageBlock**

```ts
// blocks/image-block.ts
import type { Block } from "payload"

export const ImageBlock: Block = {
  slug: "image",
  interfaceName: "ImageBlockType",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "caption",
      type: "text",
    },
    {
      name: "fullWidth",
      type: "checkbox",
      defaultValue: false,
    },
  ],
}
```

- [ ] **Step 6: Create CodeBlock**

```ts
// blocks/code-block.ts
import type { Block } from "payload"

export const CodeBlock: Block = {
  slug: "code",
  interfaceName: "CodeBlockType",
  fields: [
    {
      name: "language",
      type: "select",
      defaultValue: "plaintext",
      options: [
        { label: "Plain Text", value: "plaintext" },
        { label: "TypeScript", value: "typescript" },
        { label: "JavaScript", value: "javascript" },
        { label: "Python", value: "python" },
        { label: "Bash", value: "bash" },
        { label: "JSON", value: "json" },
        { label: "YAML", value: "yaml" },
        { label: "CSS", value: "css" },
        { label: "HTML", value: "html" },
        { label: "SQL", value: "sql" },
        { label: "Go", value: "go" },
      ],
    },
    {
      name: "code",
      type: "code",
      required: true,
    },
  ],
}
```

- [ ] **Step 7: Create CtaCard block**

```ts
// blocks/cta-card.ts
import type { Block } from "payload"

export const CtaCardBlock: Block = {
  slug: "ctaCard",
  interfaceName: "CtaCardBlock",
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "buttonLabel",
      type: "text",
      required: true,
    },
    {
      name: "buttonHref",
      type: "text",
      required: true,
    },
  ],
}
```

- [ ] **Step 8: Create EmbedBlock**

```ts
// blocks/embed-block.ts
import type { Block } from "payload"

export const EmbedBlock: Block = {
  slug: "embed",
  interfaceName: "EmbedBlockType",
  fields: [
    {
      name: "url",
      type: "text",
      required: true,
      admin: {
        description: "YouTube, Loom, or other embeddable URL",
      },
    },
    {
      name: "caption",
      type: "text",
    },
  ],
}
```

- [ ] **Step 9: Create QuoteBlock**

```ts
// blocks/quote-block.ts
import type { Block } from "payload"

export const QuoteBlock: Block = {
  slug: "quote",
  interfaceName: "QuoteBlockType",
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "attribution",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
    },
  ],
}
```

- [ ] **Step 10: Create blocks index**

```ts
// blocks/index.ts
export { RichTextBlock } from "./rich-text"
export { CalloutBlock } from "./callout"
export { ComparisonTableBlock } from "./comparison-table"
export { StatHighlightBlock } from "./stat-highlight"
export { ImageBlock } from "./image-block"
export { CodeBlock } from "./code-block"
export { CtaCardBlock } from "./cta-card"
export { EmbedBlock } from "./embed-block"
export { QuoteBlock } from "./quote-block"
```

- [ ] **Step 11: Commit**

```bash
git add blocks/
git commit -m "feat: define all content blocks for blog posts"
```

---

## Task 7: Define Posts Collection

**Files:**

- Create: `collections/posts.ts`
- Create: `collections/index.ts`
- Modify: `payload.config.ts`

- [ ] **Step 1: Create the Posts collection**

```ts
// collections/posts.ts
import type { CollectionConfig } from "payload"

import {
  RichTextBlock,
  CalloutBlock,
  ComparisonTableBlock,
  StatHighlightBlock,
  ImageBlock,
  CodeBlock,
  CtaCardBlock,
  EmbedBlock,
  QuoteBlock,
} from "../blocks"

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "publishedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          "URL-friendly identifier. Auto-generated from title if left blank.",
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => {
            if (!value && siblingData?.title) {
              return siblingData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
            }
            return value
          },
        ],
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Short summary shown on blog cards and in SEO meta.",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "MMM d, yyyy",
        },
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      required: true,
    },
    {
      name: "content",
      type: "blocks",
      blocks: [
        RichTextBlock,
        CalloutBlock,
        ComparisonTableBlock,
        StatHighlightBlock,
        ImageBlock,
        CodeBlock,
        CtaCardBlock,
        EmbedBlock,
        QuoteBlock,
      ],
    },
    {
      name: "seo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          admin: {
            description: "Optional. Overrides post title in <title> tag.",
          },
        },
        {
          name: "description",
          type: "textarea",
          admin: {
            description: "Optional. Overrides post description in meta tag.",
          },
        },
      ],
    },
  ],
}
```

- [ ] **Step 2: Create collections index**

```ts
// collections/index.ts
export { Media } from "./media"
export { Authors } from "./authors"
export { Categories } from "./categories"
export { Posts } from "./posts"
```

- [ ] **Step 3: Update payload.config.ts to use all collections**

```ts
// payload.config.ts
import path from "path"
import { fileURLToPath } from "url"
import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { Media, Authors, Categories, Posts } from "./collections"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "CHANGE-ME-IN-PRODUCTION",
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    {
      slug: "users",
      auth: true,
      admin: { useAsTitle: "email" },
      fields: [],
    },
    Media,
    Authors,
    Categories,
    Posts,
  ],
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || "" },
  }),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
})
```

- [ ] **Step 4: Verify** — run `pnpm dev`, open `/admin`. Confirm all 5 collections appear: Users, Media, Authors, Categories, Posts. Create a test post — verify the block picker shows all 9 block types. Add a RichText block, a Callout, and save. Verify the post appears in the list.

- [ ] **Step 5: Commit**

```bash
git add collections/ payload.config.ts
git commit -m "feat: add Posts collection with all content blocks"
```

---

## Task 8: Build Block Renderer Components

**Files:**

- Create: `components/blog/blocks/rich-text-block.tsx`
- Create: `components/blog/blocks/callout-block.tsx`
- Create: `components/blog/blocks/comparison-table-block.tsx`
- Create: `components/blog/blocks/stat-highlight-block.tsx`
- Create: `components/blog/blocks/image-block-component.tsx`
- Create: `components/blog/blocks/code-block-component.tsx`
- Create: `components/blog/blocks/cta-card-block.tsx`
- Create: `components/blog/blocks/embed-block-component.tsx`
- Create: `components/blog/blocks/quote-block-component.tsx`
- Create: `components/blog/block-renderer.tsx`

Note: These components use types from the auto-generated `payload-types.ts`. Run `pnpm dev` once before this task so that file exists.

- [ ] **Step 1: Create RichText block renderer**

Payload's Lexical editor outputs serialized JSON. Use `@payloadcms/richtext-lexical/react` to render it.

```tsx
// components/blog/blocks/rich-text-block.tsx
import type { RichTextBlock as RichTextBlockType } from "@/payload-types"
import { RichText } from "@payloadcms/richtext-lexical/react"

export function RichTextBlockComponent({
  block,
}: {
  block: RichTextBlockType
}) {
  if (!block.content) return null
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <RichText data={block.content} />
    </div>
  )
}
```

Note: You will need `@tailwindcss/typography` for the `prose` classes. Install it:

```bash
pnpm add @tailwindcss/typography
```

Then add to `styles/globals.css`:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@plugin "@tailwindcss/typography";
```

- [ ] **Step 2: Create Callout block renderer**

```tsx
// components/blog/blocks/callout-block.tsx
import type { CalloutBlock } from "@/payload-types"

const calloutStyles = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-900 dark:text-blue-200",
    label: "Info",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-900 dark:text-amber-200",
    label: "Warning",
  },
  tip: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-900 dark:text-green-200",
    label: "Tip",
  },
  note: {
    bg: "bg-neutral-50 dark:bg-neutral-900/30",
    border: "border-neutral-200 dark:border-neutral-700",
    text: "text-neutral-900 dark:text-neutral-200",
    label: "Note",
  },
} as const

export function CalloutBlockComponent({ block }: { block: CalloutBlock }) {
  const style = calloutStyles[block.type] || calloutStyles.info
  return (
    <aside className={`rounded-lg border p-4 ${style.bg} ${style.border}`}>
      <p
        className={`text-xs font-semibold uppercase tracking-wider ${style.text}`}
      >
        {style.label}
      </p>
      <p className={`mt-1 text-sm leading-relaxed ${style.text}`}>
        {block.body}
      </p>
    </aside>
  )
}
```

- [ ] **Step 3: Create ComparisonTable block renderer**

Reuses styling from the existing `TableSection` in `components/marketing/sections.tsx`.

```tsx
// components/blog/blocks/comparison-table-block.tsx
import type { ComparisonTableBlock } from "@/payload-types"

export function ComparisonTableBlockComponent({
  block,
}: {
  block: ComparisonTableBlock
}) {
  const { columns, rows, title, description } = block
  if (!columns || !rows) return null

  return (
    <div className="space-y-3">
      {title && (
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      )}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium">
                {columns.label}
              </th>
              <th className="px-4 py-3 text-left font-medium">
                {columns.columnOne}
              </th>
              <th className="px-4 py-3 text-left font-medium text-primary">
                {columns.columnTwo}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.id || i} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{row.label}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {row.valueOne}
                </td>
                <td className="px-4 py-3">{row.valueTwo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create StatHighlight block renderer**

```tsx
// components/blog/blocks/stat-highlight-block.tsx
import type { StatHighlightBlock } from "@/payload-types"

export function StatHighlightBlockComponent({
  block,
}: {
  block: StatHighlightBlock
}) {
  if (!block.items?.length) return null
  return (
    <div className="space-y-3">
      {block.title && (
        <h3 className="text-lg font-semibold tracking-tight">{block.title}</h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item, i) => (
          <div key={item.id || i} className="rounded-lg border bg-card p-5">
            <p className="text-3xl font-bold tracking-tight">{item.value}</p>
            <p className="mt-1 text-sm font-medium">{item.label}</p>
            {item.detail && (
              <p className="mt-1 text-xs text-muted-foreground">
                {item.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Create ImageBlock renderer**

```tsx
// components/blog/blocks/image-block-component.tsx
import type { ImageBlockType, Media } from "@/payload-types"
import Image from "next/image"

export function ImageBlockComponent({ block }: { block: ImageBlockType }) {
  const image = block.image as Media | undefined
  if (!image || typeof image === "number") return null

  return (
    <figure className={block.fullWidth ? "w-full" : "mx-auto max-w-2xl"}>
      <Image
        src={image.url || ""}
        alt={image.alt}
        width={image.width || 800}
        height={image.height || 450}
        className="rounded-lg"
      />
      {block.caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
```

- [ ] **Step 6: Create CodeBlock renderer**

```tsx
// components/blog/blocks/code-block-component.tsx
import type { CodeBlockType } from "@/payload-types"

export function CodeBlockComponent({ block }: { block: CodeBlockType }) {
  return (
    <div className="relative rounded-lg border bg-neutral-950 text-neutral-50">
      {block.language && block.language !== "plaintext" && (
        <div className="border-b border-neutral-800 px-4 py-2">
          <span className="text-xs font-medium text-neutral-400">
            {block.language}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="text-sm leading-relaxed">{block.code}</code>
      </pre>
    </div>
  )
}
```

- [ ] **Step 7: Create CtaCard block renderer**

```tsx
// components/blog/blocks/cta-card-block.tsx
import type { CtaCardBlock } from "@/payload-types"
import Link from "next/link"

export function CtaCardBlockComponent({ block }: { block: CtaCardBlock }) {
  return (
    <div className="rounded-lg border bg-muted/30 p-6">
      <h3 className="text-lg font-semibold tracking-tight">{block.heading}</h3>
      {block.description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {block.description}
        </p>
      )}
      <Link
        href={block.buttonHref}
        className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        {block.buttonLabel}
      </Link>
    </div>
  )
}
```

- [ ] **Step 8: Create EmbedBlock renderer**

```tsx
// components/blog/blocks/embed-block-component.tsx
import type { EmbedBlockType } from "@/payload-types"

function getEmbedUrl(url: string): string | null {
  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  )
  if (ytMatch) return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`

  // Loom
  const loomMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/)
  if (loomMatch) return `https://www.loom.com/embed/${loomMatch[1]}`

  return null
}

export function EmbedBlockComponent({ block }: { block: EmbedBlockType }) {
  const embedUrl = getEmbedUrl(block.url)

  if (!embedUrl) {
    return (
      <a
        href={block.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        {block.caption || block.url}
      </a>
    )
  }

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <iframe
          src={embedUrl}
          title={block.caption || "Embedded content"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {block.caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {block.caption}
        </figcaption>
      )}
    </figure>
  )
}
```

- [ ] **Step 9: Create QuoteBlock renderer**

```tsx
// components/blog/blocks/quote-block-component.tsx
import type { QuoteBlockType } from "@/payload-types"

export function QuoteBlockComponent({ block }: { block: QuoteBlockType }) {
  return (
    <blockquote className="border-l-4 border-primary pl-6">
      <p className="text-lg italic leading-relaxed text-foreground">
        {block.quote}
      </p>
      <footer className="mt-3 text-sm text-muted-foreground">
        — {block.attribution}
        {block.role && <span>, {block.role}</span>}
      </footer>
    </blockquote>
  )
}
```

- [ ] **Step 10: Create the BlockRenderer switch component**

```tsx
// components/blog/block-renderer.tsx
import type { Post } from "@/payload-types"
import { RichTextBlockComponent } from "./blocks/rich-text-block"
import { CalloutBlockComponent } from "./blocks/callout-block"
import { ComparisonTableBlockComponent } from "./blocks/comparison-table-block"
import { StatHighlightBlockComponent } from "./blocks/stat-highlight-block"
import { ImageBlockComponent } from "./blocks/image-block-component"
import { CodeBlockComponent } from "./blocks/code-block-component"
import { CtaCardBlockComponent } from "./blocks/cta-card-block"
import { EmbedBlockComponent } from "./blocks/embed-block-component"
import { QuoteBlockComponent } from "./blocks/quote-block-component"

type ContentBlock = NonNullable<Post["content"]>[number]

export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.blockType) {
    case "richText":
      return <RichTextBlockComponent block={block} />
    case "callout":
      return <CalloutBlockComponent block={block} />
    case "comparisonTable":
      return <ComparisonTableBlockComponent block={block} />
    case "statHighlight":
      return <StatHighlightBlockComponent block={block} />
    case "image":
      return <ImageBlockComponent block={block} />
    case "code":
      return <CodeBlockComponent block={block} />
    case "ctaCard":
      return <CtaCardBlockComponent block={block} />
    case "embed":
      return <EmbedBlockComponent block={block} />
    case "quote":
      return <QuoteBlockComponent block={block} />
    default:
      return null
  }
}
```

- [ ] **Step 11: Verify** — run `pnpm build` (or `pnpm dev`) and confirm no type errors. The generated `payload-types.ts` should provide types for all block unions.

- [ ] **Step 12: Commit**

```bash
git add components/blog/ styles/globals.css package.json pnpm-lock.yaml
git commit -m "feat: add block renderer components for blog posts"
```

---

## Task 9: Create BlogHero and BlogCard Components

**Files:**

- Create: `components/blog/blog-hero.tsx`
- Create: `components/blog/blog-card.tsx`

- [ ] **Step 1: Create BlogHero**

```tsx
// components/blog/blog-hero.tsx
import type { Post, Media, Author, Category } from "@/payload-types"
import Image from "next/image"
import Link from "next/link"
import { PageContainer } from "@/components/marketing/sections"

export function BlogHero({ post }: { post: Post }) {
  const author = post.author as Author | null | undefined
  const category = post.category as Category | null | undefined
  const cover = post.coverImage as Media | null | undefined

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null

  return (
    <section className="border-b py-14 md:py-20">
      <PageContainer>
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            {category && (
              <>
                <span>/</span>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="hover:text-foreground"
                >
                  {category.name}
                </Link>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {author && <span>{author.name}</span>}
            {author && publishedDate && <span>·</span>}
            {publishedDate && <span>{publishedDate}</span>}
          </div>
          {cover && typeof cover !== "number" && cover.url && (
            <Image
              src={cover.url}
              alt={cover.alt}
              width={cover.width || 1200}
              height={cover.height || 630}
              className="rounded-lg"
              priority
            />
          )}
        </div>
      </PageContainer>
    </section>
  )
}
```

- [ ] **Step 2: Create BlogCard**

```tsx
// components/blog/blog-card.tsx
import type { Post, Category } from "@/payload-types"
import Link from "next/link"

export function BlogCard({ post }: { post: Post }) {
  const category = post.category as Category | null | undefined

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-lg border bg-card p-6 transition-colors hover:bg-muted/50"
    >
      {category && (
        <span className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          {category.name}
        </span>
      )}
      <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {post.description}
      </p>
      {publishedDate && (
        <span className="mt-auto pt-4 text-xs text-muted-foreground">
          {publishedDate}
        </span>
      )}
    </Link>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add components/blog/blog-hero.tsx components/blog/blog-card.tsx
git commit -m "feat: add BlogHero and BlogCard components"
```

---

## Task 10: Update Blog Post Page (`/blog/[slug]`)

**Files:**

- Modify: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Rewrite the blog post page to query Payload**

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import config from "@payload-config"

import { CtaBand, PageContainer } from "@/components/marketing/sections"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlockRenderer } from "@/components/blog/block-renderer"
import { getBaseMetadata } from "@/lib/seo/metadata"

type Params = { slug: string }

async function getPost(slug: string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      status: { equals: "published" },
    },
    depth: 2,
    limit: 1,
  })
  return result.docs[0] || null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    limit: 1000,
    select: { slug: true },
  })
  return posts.docs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return getBaseMetadata({
    title: `${post.seo?.title || post.title} | Neverinstall`,
    description: post.seo?.description || post.description,
    path: `/blog/${post.slug}`,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <BlogHero post={post} />
      <section className="border-b py-14">
        <PageContainer>
          <article className="mx-auto max-w-3xl space-y-8">
            {post.content?.map((block) => (
              <BlockRenderer key={block.id} block={block} />
            ))}
          </article>
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Get a Demo", href: "/get-demo" },
          { label: "Compare Alternatives", href: "/compare" },
          { label: "Explore Resources", href: "/resources" },
        ]}
      />
    </>
  )
}
```

- [ ] **Step 2: Verify** — create a test post in `/admin` with a few blocks (RichText + Callout + StatHighlight), set status to published. Visit `/blog/<slug>` and confirm it renders with the correct layout.

- [ ] **Step 3: Commit**

```bash
git add app/blog/[slug]/page.tsx
git commit -m "feat: blog post page now queries Payload CMS"
```

---

## Task 11: Update Blog Index Page (`/blog`)

**Files:**

- Modify: `app/blog/page.tsx`

- [ ] **Step 1: Rewrite the blog index to query Payload**

```tsx
// app/blog/page.tsx
import type { Metadata } from "next"
import { getPayload } from "payload"
import config from "@payload-config"

import {
  CtaBand,
  HeroSection,
  PageContainer,
} from "@/components/marketing/sections"
import { BlogCard } from "@/components/blog/blog-card"
import { getBaseMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = getBaseMetadata({
  title: "Blog | Neverinstall",
  description:
    "Engineering, product, and thought leadership from Neverinstall.",
  path: "/blog",
})

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 20,
    depth: 1,
  })

  return (
    <>
      <HeroSection
        hero={{
          eyebrow: "Blog",
          title: "Insights for modern enterprise computing",
          subtitle:
            "Read research, architecture patterns, and practical guidance for secure browser and DaaS adoption.",
          primaryCta: { label: "View Resources", href: "/resources" },
          secondaryCta: { label: "Get Demo", href: "/get-demo" },
        }}
      />
      <section className="border-b py-14">
        <PageContainer>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Recent posts
            </h2>
            <p className="text-sm text-muted-foreground">
              Latest thinking from product, platform, and security teams.
            </p>
          </div>
          {posts.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-muted-foreground">
              No posts yet. Check back soon.
            </p>
          )}
        </PageContainer>
      </section>
      <CtaBand
        ctas={[
          { label: "Book a Demo", href: "/get-demo" },
          { label: "Compare Alternatives", href: "/compare" },
          { label: "Read Docs", href: "/docs" },
        ]}
      />
    </>
  )
}
```

- [ ] **Step 2: Verify** — visit `/blog`, confirm published posts appear as cards. Confirm draft posts do not appear.

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: blog index now queries Payload CMS"
```

---

## Task 12: Update Blog Category Page (`/blog/category/[slug]`)

**Files:**

- Modify: `app/blog/category/[slug]/page.tsx`

- [ ] **Step 1: Rewrite the category page to query Payload**

```tsx
// app/blog/category/[slug]/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPayload } from "payload"
import config from "@payload-config"

import { PageContainer } from "@/components/marketing/sections"
import { BlogCard } from "@/components/blog/blog-card"
import { getBaseMetadata } from "@/lib/seo/metadata"
import type { Category } from "@/payload-types"

type Params = { slug: string }

async function getCategory(slug: string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "categories",
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return result.docs[0] || null
}

async function getCategoryPosts(categoryId: number | string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: "posts",
    where: {
      category: { equals: categoryId },
      status: { equals: "published" },
    },
    sort: "-publishedAt",
    depth: 1,
    limit: 50,
  })
  return result.docs
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const categories = await payload.find({
    collection: "categories",
    limit: 100,
    select: { slug: true },
  })
  return categories.docs.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) return {}

  return getBaseMetadata({
    title: category.seo?.title || `${category.name} | Neverinstall Blog`,
    description: category.seo?.description || category.description || "",
    path: `/blog/category/${slug}`,
  })
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) notFound()

  const posts = await getCategoryPosts(category.id)

  return (
    <section className="py-14 md:py-20">
      <PageContainer>
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span>/</span>
            <span>{category.name}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-3 text-lg text-muted-foreground">
              {category.description}
            </p>
          )}

          {posts.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-sm text-muted-foreground">
              No posts in this category yet.
            </p>
          )}

          {category.relatedPages && category.relatedPages.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-semibold">Related resources</h2>
              <ul className="mt-4 space-y-2">
                {category.relatedPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-primary underline-offset-2 hover:underline"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  )
}
```

- [ ] **Step 2: Verify** — create a category and assign a post to it in admin. Visit `/blog/category/<slug>`, confirm the category page renders with filtered posts and related pages.

- [ ] **Step 3: Commit**

```bash
git add app/blog/category/[slug]/page.tsx
git commit -m "feat: blog category page now queries Payload CMS"
```

---

## Task 13: Clean Up Static Blog Content & Update Site Imports

**Files:**

- Modify: `lib/content/site.ts` — remove blog imports and exports
- Delete: `lib/content/pages/blog.ts`
- Delete: `lib/content/pages/blog-categories.ts`
- Modify: `app/sitemap.ts` — query Payload for blog routes

- [ ] **Step 1: Remove blog imports and exports from `lib/content/site.ts`**

Remove these imports:

```ts
import { blogPosts, blogCards } from "@/lib/content/pages/blog"
import { blogCategories } from "@/lib/content/pages/blog-categories"
```

Remove from the re-export block:

```ts
blogCards,
blogCategories,
```

In `allRoutePaths`, remove the blog-related lines:

```ts
"/blog/category",
...Object.keys(blogCategories).map((slug) => `/blog/category/${slug}`),
"/blog",
...Object.values(blogPosts).map((post) => `/blog/${post.slug}`),
```

Replace them with just the static routes (dynamic blog routes will come from the sitemap update):

```ts
"/blog",
"/blog/category",
```

- [ ] **Step 2: Delete the old static blog content files**

```bash
rm lib/content/pages/blog.ts lib/content/pages/blog-categories.ts
```

- [ ] **Step 3: Update `app/sitemap.ts` to include Payload blog routes**

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next"
import { getPayload } from "payload"
import config from "@payload-config"

import { allRoutePaths } from "@/lib/content/site"
import { seoSiteUrl } from "@/lib/seo/metadata"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  // Static routes from content config
  const staticRoutes: MetadataRoute.Sitemap = allRoutePaths.map((path) => ({
    url: `${seoSiteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))

  // Dynamic blog routes from Payload
  const payload = await getPayload({ config })

  const [posts, categories] = await Promise.all([
    payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      limit: 1000,
      select: { slug: true, updatedAt: true },
    }),
    payload.find({
      collection: "categories",
      limit: 100,
      select: { slug: true, updatedAt: true },
    }),
  ])

  const blogRoutes: MetadataRoute.Sitemap = posts.docs.map((post) => ({
    url: `${seoSiteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = categories.docs.map((cat) => ({
    url: `${seoSiteUrl}/blog/category/${cat.slug}`,
    lastModified: new Date(cat.updatedAt),
    changeFrequency: "weekly",
    priority: 0.5,
  }))

  return [...staticRoutes, ...blogRoutes, ...categoryRoutes]
}
```

- [ ] **Step 4: Verify** — run `pnpm build` or `pnpm dev`. Confirm no import errors. Visit `/blog`, `/blog/<slug>`, `/blog/category/<slug>` — all should work. Visit `/sitemap.xml` — confirm blog routes appear.

- [ ] **Step 5: Commit**

```bash
git add lib/content/site.ts app/sitemap.ts
git rm lib/content/pages/blog.ts lib/content/pages/blog-categories.ts
git commit -m "feat: remove static blog content, update sitemap to query Payload"
```

---

## Task 14: Seed Existing Blog Content

**Files:**

- Create: `lib/seed.ts`

- [ ] **Step 1: Create the seed script**

This migrates the 3 existing blog posts and 6 categories into Payload.

```ts
// lib/seed.ts
import { getPayload } from "payload"
import config from "@payload-config"

const categories = [
  {
    name: "VDI Modernization",
    slug: "vdi-modernization",
    description:
      "Guides, analysis, and best practices for migrating off legacy VDI platforms like Citrix and VMware.",
    seo: {
      title:
        "VDI Modernization Guide: Citrix & VMware Migration | Neverinstall",
      description:
        "Plan your Citrix or VMware migration with real TCO comparisons and DaaS deployment guides.",
    },
    relatedPages: [
      { title: "Desktop Workspaces (DaaS)", href: "/products/daas" },
      { title: "VDI Replacement", href: "/solutions/use-case/vdi-replacement" },
      { title: "Neverinstall vs. Citrix", href: "/compare/vs-citrix" },
    ],
  },
  {
    name: "Enterprise Security",
    slug: "enterprise-security",
    description:
      "Enterprise security perspectives on session isolation, zero-trust access, and endpoint protection.",
    seo: {
      title:
        "Enterprise Security: Session Isolation & Zero Trust | Neverinstall",
      description:
        "Eliminate endpoint risk with session isolation and zero-trust access.",
    },
    relatedPages: [
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
      { title: "Trust & Security", href: "/security" },
      { title: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
    ],
  },
  {
    name: "Secure Browsing",
    slug: "secure-browsing",
    description:
      "Enterprise browser security, browser isolation, DLP controls, and the future of browser-first work.",
    seo: {
      title:
        "Secure Enterprise Browser: Isolation & DLP Controls | Neverinstall",
      description:
        "Compare enterprise browser architectures, DLP enforcement models, and browser isolation approaches.",
    },
    relatedPages: [
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
      { title: "Neverinstall vs. Island", href: "/compare/vs-island" },
      {
        title: "Contractor & Vendor Access",
        href: "/solutions/use-case/contractor-vendor-access",
      },
    ],
  },
  {
    name: "BYOD & Contractor Access",
    slug: "byod-contractor-access",
    description:
      "Securing bring-your-own-device programs and third-party contractor access without endpoint trust.",
    seo: {
      title: "Secure BYOD & Contractor Access Without MDM | Neverinstall",
      description:
        "Secure BYOD and contractor access without MDM or endpoint agents.",
    },
    relatedPages: [
      { title: "Secure BYOD", href: "/solutions/use-case/secure-byod" },
      {
        title: "Contractor & Vendor Access",
        href: "/solutions/use-case/contractor-vendor-access",
      },
      { title: "Secure Browser Workspaces", href: "/products/secure-browser" },
    ],
  },
  {
    name: "Data Residency & Compliance",
    slug: "data-residency-compliance",
    description:
      "Navigating data residency requirements, compliance frameworks, and sovereign deployment models.",
    seo: {
      title:
        "Data Residency & Compliance for Regulated Industries | Neverinstall",
      description:
        "Navigate data residency mandates with sovereign on-prem and in-region cloud deployment.",
    },
    relatedPages: [
      { title: "Data Residency", href: "/solutions/use-case/data-residency" },
      {
        title: "Financial Services",
        href: "/solutions/industry/financial-services",
      },
      {
        title: "Government & Defense",
        href: "/solutions/industry/government-defense",
      },
    ],
  },
  {
    name: "Remote Work",
    slug: "remote-work",
    description:
      "Remote and hybrid work strategies, workspace delivery, and the end of device-dependent access models.",
    seo: {
      title:
        "Remote Work: Secure Workspace Delivery & Continuity | Neverinstall",
      description:
        "Deliver secure desktops and browsers to any device, anywhere.",
    },
    relatedPages: [
      {
        title: "Remote & Hybrid Work",
        href: "/solutions/use-case/remote-hybrid-work",
      },
      { title: "Desktop Workspaces (DaaS)", href: "/products/daas" },
      {
        title: "Business Continuity",
        href: "/solutions/use-case/business-continuity",
      },
    ],
  },
]

const posts = [
  {
    title: "Why Enterprises Are Replacing Citrix in 2026 — and What Comes Next",
    slug: "why-enterprises-are-leaving-citrix",
    description:
      "Citrix costs are up 3-5x post-acquisition. See what drives replacement and how cloud-native DaaS cuts TCO and deployment time.",
    publishedAt: "2026-03-26",
    status: "published" as const,
    content: [
      {
        blockType: "richText" as const,
        content: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Broadcom's acquisition of VMware and ongoing Citrix restructuring have created the largest forced migration event in enterprise desktops in a decade. This guide breaks down what is actually driving replacement decisions and what a modern alternative looks like.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "The cost problem is now impossible to ignore",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Legacy VDI was already expensive. With 3-5x license cost increases and forced bundling, the economics have shifted from manageable overhead to active budget drain. Enterprises are running real TCO comparisons for the first time in years.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Complexity was tolerable — until it was not",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Dedicated infrastructure teams, months-long rollouts, and consultant-heavy change management were accepted costs when there were no credible alternatives. Cloud-native DaaS platforms now deploy in days, not months, with simpler operations.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "What a modern replacement actually looks like",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The strongest alternatives combine sub-second session restore, Windows and Linux support, persistent and ephemeral modes, and flexible deployment across managed cloud, customer cloud, or on-premises. The key differentiator is whether the platform also covers browser-first users at 70-80% lower cost.",
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  },
  {
    title: "Enterprise Browser vs DaaS: How to Choose the Right Starting Point",
    slug: "enterprise-browser-vs-daas",
    description:
      "Start with Secure Browser for fast BYOD rollout or DaaS for full desktop control. A decision framework based on risk and speed.",
    publishedAt: "2026-03-26",
    status: "published" as const,
    content: [
      {
        blockType: "richText" as const,
        content: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Secure Browser and DaaS solve related but different problems. Browser-first is usually the fastest path for unmanaged endpoints and contractor access, while DaaS is stronger for full desktop control and legacy VDI replacement.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Start with the immediate constraint",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Choose Secure Browser first when the urgent issue is controlling web access from unmanaged devices. Choose DaaS first when users need full desktop environments, controlled compute, or migration away from legacy VDI.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  { type: "text", text: "Map by rollout friction", version: 1 },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Browser-first rollouts usually require less user change and can move faster. DaaS rollouts cover more user types but create a stronger foundation for persistent workspace governance.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Plan for both from the start",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "The strongest programs avoid either-or thinking. Teams often deploy browser controls first, then expand to DaaS for high-risk or high-value workloads that need deeper environment control.",
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  },
  {
    title: "BYOD Without MDM: Session-Based Access Replaces Device Management",
    slug: "byod-without-mdm",
    description:
      "Drop MDM for BYOD. Session-based workspaces keep data off personal devices while giving employees full device choice.",
    publishedAt: "2026-03-26",
    status: "published" as const,
    content: [
      {
        blockType: "richText" as const,
        content: {
          root: {
            type: "root",
            children: [
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "MDM-based BYOD programs create friction with employees, limit device choice, and still leave data on endpoints. Session-based access through secure browser workspaces removes the device from the trust equation entirely.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "The MDM bargain is breaking down",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Employees resist invasive controls on personal devices. IT teams spend disproportionate time managing diverse hardware. And despite all the effort, data still lands on endpoints that the organization does not fully control.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "Session-based access changes the equation",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "When work runs inside an isolated browser session, the device becomes a display. No data on the endpoint means no data to lose. DLP controls like clipboard, download, upload, and print restrictions are enforced at the session level.",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "heading",
                tag: "h2",
                children: [
                  {
                    type: "text",
                    text: "One platform scales with your needs",
                    version: 1,
                  },
                ],
                version: 1,
              },
              {
                type: "paragraph",
                children: [
                  {
                    type: "text",
                    text: "Organizations that start with secure browser sessions for BYOD users often find that the same platform extends naturally to contractor access, call center operations, and eventually full desktop delivery for power users.",
                    version: 1,
                  },
                ],
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            version: 1,
          },
        },
      },
    ],
  },
]

async function seed() {
  const payload = await getPayload({ config })

  console.log("Seeding categories...")
  const categoryMap: Record<string, number | string> = {}
  for (const cat of categories) {
    const existing = await payload.find({
      collection: "categories",
      where: { slug: { equals: cat.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      categoryMap[cat.slug] = existing.docs[0].id
      console.log(`  Category "${cat.name}" already exists, skipping.`)
      continue
    }
    const created = await payload.create({
      collection: "categories",
      data: cat,
    })
    categoryMap[cat.slug] = created.id
    console.log(`  Created category: ${cat.name}`)
  }

  console.log("Seeding posts...")
  for (const post of posts) {
    const existing = await payload.find({
      collection: "posts",
      where: { slug: { equals: post.slug } },
      limit: 1,
    })
    if (existing.docs.length > 0) {
      console.log(`  Post "${post.title}" already exists, skipping.`)
      continue
    }
    await payload.create({
      collection: "posts",
      data: post,
    })
    console.log(`  Created post: ${post.title}`)
  }

  console.log("Seed complete.")
  process.exit(0)
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
```

- [ ] **Step 2: Add a seed script to package.json**

Add to `scripts`:

```json
"seed": "tsx lib/seed.ts"
```

Install tsx as a dev dependency:

```bash
pnpm add -D tsx
```

- [ ] **Step 3: Run the seed script**

```bash
# Ensure DATABASE_URI and PAYLOAD_SECRET are set
pnpm seed
```

Expected output:

```
Seeding categories...
  Created category: VDI Modernization
  Created category: Enterprise Security
  ...
Seeding posts...
  Created post: Why Enterprises Are Replacing Citrix in 2026 — and What Comes Next
  Created post: Enterprise Browser vs DaaS: How to Choose the Right Starting Point
  Created post: BYOD Without MDM: Session-Based Access Replaces Device Management
Seed complete.
```

- [ ] **Step 4: Verify** — visit `/blog` and confirm all 3 posts appear. Click through to each post and confirm content renders via the RichText block.

- [ ] **Step 5: Commit**

```bash
git add lib/seed.ts package.json pnpm-lock.yaml
git commit -m "feat: add seed script to migrate existing blog content to Payload"
```

---

## Task 15: Final Verification & Cleanup

**Files:**

- Possibly modify: various files if type errors or build issues arise

- [ ] **Step 1: Run a full build**

```bash
pnpm build
```

Fix any type errors or build issues. Common issues to watch for:

- `payload-types.ts` not generated: run `pnpm dev` once first so Payload generates it
- Import paths for `@payload-config`: ensure tsconfig path alias is correct
- `sharp` module issues: ensure it's installed correctly

- [ ] **Step 2: Run the linter**

```bash
pnpm lint
```

Fix any lint issues in new files.

- [ ] **Step 3: Run typecheck**

```bash
pnpm typecheck
```

Fix any type errors.

- [ ] **Step 4: Manual smoke test**

Verify these routes all work:

- `/` — homepage unchanged
- `/admin` — Payload admin panel loads, can log in
- `/blog` — shows seeded posts as cards
- `/blog/why-enterprises-are-leaving-citrix` — full post renders with blocks
- `/blog/category/vdi-modernization` — category page with posts (if any are assigned)
- `/products/daas` — unchanged marketing page
- `/compare/vs-citrix` — unchanged comparison page
- `/sitemap.xml` — includes blog routes

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "chore: fix build issues and finalize Payload CMS integration"
```
