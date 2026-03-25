# `@workspace/typescript-config`

Shared TypeScript configuration package for the Neverinstall workspace.

This package exists so the apps and internal packages in the monorepo can inherit the same compiler defaults without duplicating config in every project.

## What It Contains

- `base.json`
  Base TypeScript options shared across the workspace.
- `nextjs.json`
  TypeScript config preset for Next.js apps such as `apps/web`.
- `react-library.json`
  TypeScript config preset for shared React packages such as `packages/ui`.

## How It Is Used

Workspace packages extend these config files from their local `tsconfig.json`.

Examples:

- `apps/web/tsconfig.json` extends the Next.js preset.
- `packages/ui/tsconfig.json` extends the React library preset.

## Why This Package Exists

- Keep compiler settings consistent across the repo.
- Reduce copy-pasted TypeScript config.
- Make it easier to update shared compiler behavior in one place.

This is an internal workspace package and is not intended to be documented or maintained like a public npm package.
