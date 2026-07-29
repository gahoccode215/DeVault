# Current Feature

<!-- Feature name and short description -->

## Status

<!-- Not started | In Progress | Completed -->

## Goal

<!-- Goals and requirements -->

## Notes

<!-- Any extra notes -->

## History

<!-- Keep this updated. Earliest to latest -->

- 2026-07-29: Initial Next.js 16 + Tailwind CSS v4 project setup committed (`chore:initial next.js and tailwind setup`) and pushed to `origin/main` at https://github.com/gahoccode215/DeVault.git.
- 2026-07-29: Completed Dashboard UI Phase 1 — ShadCN initialized (button, input), dark mode default, `/dashboard` route with layout, TopBar (logo, centered search, New Item button top-right) and Sidebar/Main placeholders. Build and lint pass.
- 2026-07-30: Completed Dashboard UI Phase 2 — collapsible Sidebar (desktop collapse rail + mobile drawer via new DashboardShell), item type links to /items/TYPE, Favorite/Recent collections lists, user avatar area with collapse toggle, TopBar menu button to open the mobile drawer. Added `isFavorite`/`updatedAt` to mock `Collection` data to support favorites/recents. Fixed a circular `--font-sans` CSS var in globals.css so the Geist font actually applies, and replaced emoji item-type icons with lucide-react icons. Build and lint pass.
- 2026-07-30: Completed Dashboard UI Phase 3 — main dashboard area with a StatsOverview (items/collections/favorite items/favorite collections counts), Recent Collections grid, Pinned Items and Recent Items sections built on a shared ItemCard/CollectionCard. Added shadcn Dialog + the `shiki` package so code items render with real VS Code Dark+ syntax highlighting and open a full-text popup on click. Fixed `<body>` using `min-h-full` instead of `h-full` in layout.tsx, which let the whole page scroll instead of just `<main>` and dragged the sidebar's footer out of view. Reworked the Sidebar's Favorite/Recent Collections into collapsible sections (Recent collapsed by default) with tighter spacing and a thin scrollbar fallback, and gave favorite stars the same amber styling used elsewhere. Build and lint pass.
