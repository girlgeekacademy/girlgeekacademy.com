# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI commands (e.g. astro add, astro check)
```

Requires Node >=22.12.0.

## Architecture

This is an [Astro](https://astro.build) site (v6) using strict TypeScript. No UI framework (React, Vue, etc.) is configured yet — components are `.astro` files only.

- `src/pages/` — file-based routing; each `.astro` file becomes a URL route
- `src/layouts/` — shared HTML shell (`Layout.astro`) wrapping page content via `<slot />`
- `src/components/` — reusable Astro components
- `src/assets/` — images/SVGs processed by Astro's asset pipeline (import in components, not referenced by URL)
- `public/` — static assets served as-is (favicons, fonts, etc.)

Astro config is minimal (`astro.config.mjs`) — no integrations, adapters, or output mode set (defaults to static).
