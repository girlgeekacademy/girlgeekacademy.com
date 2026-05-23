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

## Design System

This website should always use the design system defined here: https://api.anthropic.com/v1/design/h/WVYmlFT49xx1vtfH84SmeQ

Before creating new pages, or components fetch this design file, read its readme, and implement using the relevant aspects of the design system.

## Architecture

This is an [Astro](https://astro.build) site (v6) using strict TypeScript. No UI framework (React, Vue, etc.) is configured yet — components are `.astro` files only.

- `src/pages/` — file-based routing; each `.astro` file becomes a URL route
- `src/layouts/` — shared HTML shell (`Layout.astro`) wrapping page content via `<slot />`
- `src/components/` — reusable Astro components
- `src/assets/` — images/SVGs processed by Astro's asset pipeline (import in components, not referenced by URL)
- `public/` — static assets served as-is (favicons, fonts, etc.)

Astro config is minimal (`astro.config.mjs`) — no integrations, adapters, or output mode set (defaults to static).

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which runs `npm run build` and rsyncs `./dist/` to `~/public_html_new/` on the webserver.

Configure these repository secrets under **Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|--------|---------|
| `DEPLOY_SSH_PRIVATE_KEY` | Full PEM private key for SSH auth (including `-----BEGIN ... KEY-----` lines) |
| `DEPLOY_SSH_KNOWN_HOSTS` | The output of `ssh-keyscan -H ${DEPLOY_SSH_HOST}` |

| Variable | Purpose |
|----------|---------|
| `DEPLOY_SSH_HOST` | Server hostname or IP |
| `DEPLOY_SSH_USER` | SSH login username |

The matching public key must be in the server's `~/.ssh/authorized_keys`. rsync uses `--delete` so the remote folder mirrors `./dist/` exactly.
