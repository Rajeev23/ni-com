# Neverinstall.com

Marketing site and content workspace for the Neverinstall web presence.

This repository contains the Next.js app for `neverinstall.com`, the shared UI package used by the site, and the workspace-level config used to build, lint, format, and typecheck the project. The current site direction reflects the newer Neverinstall platform story:

- `Secure Browser`
- `Desktop as a Service`
- `Sovereign HCI`

The site is structured around one shared platform narrative with product, solutions, comparison, pricing, and trust content layered on top.

## What Is In This Repo

- `apps/web`
  The main Next.js 16 marketing site.
- `packages/ui`
  Shared UI components, styles, and utility helpers used by the site.
- `packages/typescript-config`
  Shared TypeScript config presets for the workspace.
- `neverinstall-unified-strategy-v2.md`
  Canonical strategy document for sitemap, product positioning, and launch priorities.
- `Website Revamp/`
  Source copy and structure inputs for solutions and Trust Center pages.
- `neverinstall-ia-spec 327c7ebfc13f80eea8a6d00b346ff473.md`
  Earlier IA baseline used to bootstrap the site.

## Tech Stack

- `Next.js 16`
- `React 19`
- `pnpm` workspaces
- `Turborepo`
- `Tailwind CSS v4`
- local shared UI package in `packages/ui`
- `oxlint` for linting
- `oxfmt` for formatting

## Getting Started

Requirements:

- `Node.js >= 20`
- `pnpm 9`

Install dependencies:

```bash
pnpm install
```

Start the workspace in development mode:

```bash
pnpm dev
```

If you only want to work on the website app:

```bash
pnpm --filter web dev
```

## Common Commands

Run all workspace tasks:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm format
pnpm typecheck
```

Run commands only for the web app:

```bash
pnpm --filter web dev
pnpm --filter web build
pnpm --filter web lint
pnpm --filter web typecheck
```

## Site Architecture

The marketing app lives in `apps/web` and is organized around typed content modules instead of scattered copy in route files.

Key areas:

- `apps/web/app`
  App Router routes for homepage, products, solutions, compare pages, pricing, Trust Center, and supporting pages.
- `apps/web/lib/content`
  Central content model, navigation data, and page registries.
- `apps/web/components/marketing`
  Reusable sections, templates, nav shell, calculators, and marketing UI.
- `apps/web/lib/seo`
  Shared metadata and structured-data helpers.

Important content sources:

- `apps/web/lib/content/pages/products.ts`
- `apps/web/lib/content/pages/use-cases.ts`
- `apps/web/lib/content/pages/industries.ts`
- `apps/web/lib/content/pages/compares.ts`
- `apps/web/lib/content/pages/platform.ts`
- `apps/web/lib/content/pages/trust.ts`

## Content Source Of Truth

Use these documents when updating messaging or IA:

- `neverinstall-unified-strategy-v2.md`
  Canonical source for navigation, sitemap, launch tiers, and the product/platform narrative.
- `Website Revamp/`
  Copy bank for solutions, industry pages, and Trust Center content.

The implementation should follow the strategy first, with the revamp files supplying detailed copy and page-specific structure.

## Current Focus

The site has been moved away from generic starter content and now reflects:

- a first-class `/platform` page
- expanded solution and industry coverage
- AI infrastructure comparison pages
- a Trust Center rooted at `/security`
- split TCO paths for workspace and AI infrastructure conversations

## Notes For Contributors

- Keep imports at the top of files.
- Prefer updating typed content modules over hardcoding long-form marketing copy inside route components.
- Use the shared navigation/content registries in `apps/web/lib/content` as the source of truth for IA-related changes.
- If you add new dynamic content pages, make sure the route and metadata implementations follow the async `params` pattern required by Next.js 16.
