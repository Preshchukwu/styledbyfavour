<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Recent changes (session 2 — 2026-06-23)

### New: Gallery section (`components/Gallery.tsx`)
- Server component — no `'use client'` needed
- 8 images in a uniform 4-column grid (2-column on mobile)
- Each tile: `height: 55vw` mobile, `height: 360px` desktop (explicit heights required — `aspect-ratio` and `height: auto` collapse to 0 with `next/image fill`)
- Ken Burns animation via CSS classes `gallery-kb-1` through `gallery-kb-5` (defined in `globals.css`), assigned by `(index % 5) + 1`
- Inserted in `app/page.tsx` between `<Services />` and `<Quote />`
- To swap an image: change the `src` string in the `IMAGES` array — no other changes needed

### Modified: `app/globals.css`
- Added `.gallery-grid` and `.gallery-tile` CSS
- Added 5 Ken Burns keyframes (`kb1`–`kb5`) and animation classes (`gallery-kb-1`–`gallery-kb-5`) with `infinite alternate` for seamless looping
- Added `prefers-reduced-motion` overrides for all gallery animations

### Modified: `components/Nav.tsx`
- "Book Now" (desktop + mobile drawer) now links to `#book` instead of `mailto:`
- `window.history.scrollRestoration = 'manual'` added to `useEffect` so page always loads at top on refresh
- Mobile drawer "Book Now" closes the menu on click

### Modified: `components/Hero.tsx`
- "Book Your Appointment" now links to `#book` instead of `mailto:`

### Modified: `components/Booking.tsx`
- Added WhatsApp CTA button alongside Email and Call: `https://wa.me/16294684836`
- Uses inline SVG WhatsApp icon with `currentColor` (inherits brand plum colour)
- Opens in new tab with `target="_blank" rel="noopener noreferrer"`

## Critical CSS note
`next/image` with `fill` generates `position: absolute; inset: 0; height: 100%; width: 100%`.
The parent **must have an explicit `height`** (px or vw) — not `height: auto`, not `aspect-ratio` alone.
Without an explicit height, the container collapses to 0 and images are invisible.
