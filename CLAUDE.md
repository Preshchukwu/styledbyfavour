# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 16.2.9** (App Router) with **React 19** — this is NOT Next.js 14/15. APIs and conventions may differ from training data. Check `node_modules/next/dist/docs/` before using unfamiliar APIs.
- **Tailwind CSS v4** — configured entirely via `app/globals.css` using `@theme {}`. There is no `tailwind.config.ts`. Custom utilities go in `@layer utilities {}`.
- **TypeScript** with strict mode, path alias `@/*` maps to project root.

## Commands

```bash
npm run dev      # start dev server (localhost:3000) — restart required after next.config.ts changes
npm run build    # production build
npm run lint     # ESLint
npx tsc --noEmit # type-check without building
```

## Architecture

Single-page marketing site. `app/page.tsx` is the only route — it imports and sequences 10 section components. No routing, no API routes, no state management beyond component-level React state.

### Font system

Fonts are loaded in `app/layout.tsx` via `next/font/google` with CSS variable output:
- `--font-cormorant` → Cormorant Garamond (display/headings)
- `--font-jost` → Jost (body)

Both variables are applied to `<html>`. In CSS/components, use them as:
- `font-display` class (defined in `@layer utilities`) → Cormorant Garamond
- Body inherits Jost from `@layer base` on `body`

### Tailwind v4 colour tokens

Defined in `app/globals.css` under `@theme {}`. Use as standard utility classes:

| Class | Hex |
|---|---|
| `text-plum` / `bg-plum` | `#3b0764` — primary brand, headings |
| `text-plum-mid` / `bg-plum-mid` | `#6d28d9` — hover states |
| `text-violet` / `bg-violet` | `#a855f7` — accents, labels |
| `text-violet-light` | `#d8b4fe` — light text on dark backgrounds |
| `bg-lavender` | `#f5f0ff` — section tints |
| `bg-offwhite` | `#faf8ff` — alternate section backgrounds |
| `text-muted` | `#6b6075` — body copy, captions |
| `border-rule` / `bg-rule` | `#e8e0f5` — dividers |

### Scroll reveal

`components/ScrollReveal.tsx` is a `'use client'` wrapper that adds `.revealed` to `.reveal` elements via IntersectionObserver. The CSS for `.reveal` / `.revealed` lives in `globals.css`. Pass `delay` (ms) for stagger effects. Accepts an optional `style` prop.

### Client components

Only two components use `'use client'`:
- `Nav.tsx` — scroll listener (transparent → white on scroll), mobile hamburger state
- `ScrollReveal.tsx` — IntersectionObserver

All other components are server components.

### External images

`next/image` is used for all images. `res.cloudinary.com` is whitelisted in `next.config.ts`. Adding a new external image domain requires updating `remotePatterns` there **and restarting the dev server**.

### SEO / Schema

- All metadata (title, OG, Twitter, robots) is exported from `app/layout.tsx` via Next.js `Metadata` type.
- JSON-LD `LocalBusiness` schema is injected via `<script type="application/ld+json">` in the layout `<head>`. The schema object lives in `lib/schema.ts`.
- `public/robots.txt` and `public/sitemap.xml` are static files (update the domain if the production URL changes from `styledbyfavour.com`).

### Contact details

Email: `favournwachukwub490@gmail.com` · Phone: `(629) 468-4836` / `tel:6294684836`
These appear in Nav, Hero, Booking, and Footer — search before editing.
