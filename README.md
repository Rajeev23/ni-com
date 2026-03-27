# Neverinstall.com

Marketing site and content codebase for the Neverinstall web presence.

This repository contains a single Next.js app for `neverinstall.com` with local components, styles, and typed content modules. The current site direction reflects the newer Neverinstall platform story:

- `Secure Browser`
- `Desktop as a Service`
- `Sovereign HCI`

The site is structured around one shared platform narrative with product, solutions, comparison, pricing, and trust content layered on top.

## What Is In This Repo

- `app`
  App Router routes for homepage, products, solutions, compare pages, pricing, Trust Center, and supporting pages.
- `components`
  Reusable UI + marketing sections, templates, nav shell, calculators, and shared UI primitives.
- `lib/content`
  Central content model, navigation data, and page registries.
- `lib/seo`
  Shared metadata and structured-data helpers.

## Tech Stack

- `Next.js 16`
- `React 19`
- `Tailwind CSS v4`
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

Start development:

```bash
pnpm dev
```

## Common Commands

```bash
pnpm dev
pnpm build
pnpm lint
pnpm format
pnpm typecheck
```

## Site Architecture

The app is organized around typed content modules instead of scattered copy in route files.

Important content sources:

- `lib/content/pages/products.ts`
- `lib/content/pages/use-cases.ts`
- `lib/content/pages/industries.ts`
- `lib/content/pages/compares.ts`
- `lib/content/pages/platform.ts`
- `lib/content/pages/trust.ts`

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
- Use the shared navigation/content registries in `lib/content` as the source of truth for IA-related changes.
- If you add new dynamic content pages, make sure the route and metadata implementations follow the async `params` pattern required by Next.js 16.
