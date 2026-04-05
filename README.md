# Neverinstall.com

Marketing site and content codebase for the Neverinstall web presence.

This repository contains a single Next.js app for `neverinstall.com`. The site reflects the current platform positioning:

- `Desktop Workspaces` — Full Windows/Linux cloud desktops replacing legacy VDI
- `Secure Browser Workspaces` — Isolated browser sessions for contractors, BYOD, and web access

One platform, two work modes, any deployment (managed cloud, customer cloud, sovereign on-prem).

## What Is In This Repo

- `app`
  App Router routes for homepage, products, solutions, compare pages, pricing, compliance, Trust Center, and supporting pages.
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
- `shadcn/ui` (radix-nova style) + Tailark Pro blocks
- `motion` (Framer Motion 12) for animations
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
- `lib/content/pages/compliance.ts`
- `lib/content/pages/trust.ts`
- `lib/content/pages/blog.ts`
- `lib/content/pages/blog-categories.ts`

## Current Focus

The site reflects a content strategy pivot (April 2026) focusing on:

- DaaS as the VDI replacement wedge (Citrix/VMware migration)
- Secure Browser as the expansion adjacency (contractor/BYOD access)
- Compliance pages for SEO (SOC 2, HIPAA, GDPR, DPDP Act, etc.)
- Blog category hubs for topical authority
- Comparison pages against DaaS competitors (Citrix, AVD, VMware, W365, AWS) and browser competitors (Island, Menlo, Prisma)
- Trust Center at `/security`

## Notes For Contributors

- Keep imports at the top of files.
- Prefer updating typed content modules over hardcoding long-form marketing copy inside route components.
- Use the shared navigation/content registries in `lib/content` as the source of truth for IA-related changes.
- If you add new dynamic content pages, make sure the route and metadata implementations follow the async `params` pattern required by Next.js 16.
- No references to Sovereign HCI, AI infrastructure, GPU orchestration, or inference serving. These have been removed from the positioning.
