# DevVault

A developer knowledge hub for snippets, commands, prompts, notes, files, images, links and custom types.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md


## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`)

There is no test suite configured in this project yet.

## Architecture

- Next.js 16 App Router project (`src/app`), React 19, TypeScript, Tailwind CSS v4.
- Path alias `@/*` resolves to `src/*` (see `tsconfig.json`).
- `src/app/layout.tsx` is the root layout. It loads Geist Sans/Mono via `next/font/google` and exposes them as CSS variables (`--font-geist-sans`, `--font-geist-mono`) consumed by Tailwind's `@theme inline` in `globals.css`.
- `src/app/globals.css` only imports Tailwind (`@import "tailwindcss"`) — no custom reset or theme tokens are layered on top; add any global styles here deliberately.
- `src/app/page.tsx` is the home page.
- ESLint is configured via `eslint-config-next` (`core-web-vitals` + `typescript` rulesets) using the flat config format.
