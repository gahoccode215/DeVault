# Current Feature

Dashboard UI Phase 2 — sidebar navigation, favorites/recents, user area (2 of 3 dashboard UI phases). Full spec: @context/features/dashboard-phase-2-spec.md

## Status

Completed

## Goal

Build out the dashboard sidebar (phase 2 of 3), using the existing screenshot reference and the mock data file — no database yet, import mock data directly.

Requirements:
- Collapsible sidebar
- Items/types with links to /items/TYPE (e.g. /items/snippets)
- Favorite collections
- Most recent collections
- User avatar area at the bottom
- Drawer icon to open/close sidebar
- Always a drawer on mobile view

## Notes

References:
- @context/screenshots/dashboard-ui-main.png
- @context/project-overview.md
- @src/lib/mock-data.ts
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-3-spec.md

## History

<!-- Keep this updated. Earliest to latest -->

- 2026-07-29: Initial Next.js 16 + Tailwind CSS v4 project setup committed (`chore:initial next.js and tailwind setup`) and pushed to `origin/main` at https://github.com/gahoccode215/DeVault.git.
- 2026-07-29: Completed Dashboard UI Phase 1 — ShadCN initialized (button, input), dark mode default, `/dashboard` route with layout, TopBar (logo, centered search, New Item button top-right) and Sidebar/Main placeholders. Build and lint pass.
- 2026-07-30: Completed Dashboard UI Phase 2 — collapsible Sidebar (desktop collapse rail + mobile drawer via new DashboardShell), item type links to /items/TYPE, Favorite/Recent collections lists, user avatar area with collapse toggle, TopBar menu button to open the mobile drawer. Added `isFavorite`/`updatedAt` to mock `Collection` data to support favorites/recents. Fixed a circular `--font-sans` CSS var in globals.css so the Geist font actually applies, and replaced emoji item-type icons with lucide-react icons. Build and lint pass.
