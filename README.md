# Dandyland

The imaginative country of Kentucky artist **Dan Dutton** — a progressive web
app where painting, ballads, stage works, sculpture, gardens, animals, and the
family land form one continuous artistic world.

The visitor journey has three stages:

1. **The Gate** (`/`) — a full-screen film of Dandyland; the title and an
   invitation to _"Take A Walk Through The Garden."_
2. **The Garden Walk** (`/garden`) — a scroll-driven passage through Dan's
   flower paintings, ending at the studio.
3. **The Studio** (`/studio`) — the main hub, staged as Dan's workspace, opening
   onto every section.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for the design system
- **Framer Motion** for interface animation
- **next/font** — local **GC Vank** display face + **Spectral** (body) + **Caveat** (hand)
- **next/image** for optimized imagery
- PWA: web manifest, service worker, offline page, installable icons

> The previous build used an unused `three` / `tone` / `react-spring` stack and a
> broken light/dark "garden" theme system; both were removed. Older `*.md` notes
> in the repo root (WILD-GARDEN, NIGHT-MODE, THEME-\*, CURRENT-STATUS, FIXES,
> IMAGE-FIX) describe that earlier "Garden" app and are superseded by this file.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

Type-check: `npx tsc --noEmit`.

## Project structure

```
app/
  page.tsx                 The Gate (immersive, no chrome)
  garden/                  The Garden Walk (immersive)
  studio/                  The Studio hub
  paintings/               index + /garden gallery + subsections
  ballads/ stage/ sculpture/ dandyland/ dan/ archive/   section landings
  almanac/ available-work/ contact/                     supporting pages
  layout.tsx, fonts.ts, globals.css, icon.tsx, apple-icon.tsx, not-found.tsx
components/
  site-chrome, navigation, footer, sound-toggle, pwa-installer
  gate (in page.tsx), garden/garden-walk, studio/studio-hub
  section/ (page-header, section-landing, subsection-stub)
  gallery/painting-gallery, media/ (frame, asset-placeholder)
  motion/reveal, contact-form
contexts/sound-context.tsx
lib/
  site.ts                  identity + navigation config
  content/                 typed content (see below)
public/
  videos/ fonts/ flower-images/ art-images/  manifest.json sw.js offline.html
```

## Editing content

All content is data-driven and typed (`lib/content/types.ts`) so a CMS can be
layered on later without touching the interface.

| To change… | Edit |
| --- | --- |
| Navigation, site name/tagline | `lib/site.ts` |
| Section landing copy & subsections | `lib/content/sections.ts` |
| Studio doorways (objects → sections) | `lib/content/studio.ts` |
| Flower paintings shown in gallery/walk | `lib/content/flowers.ts` |
| Almanac (journal) entries | `lib/content/almanac.ts` |
| Content types (Artwork, Ballad, StageWork…) | `lib/content/types.ts` |

Adding a real image: drop the file in `public/…`, then reference its path in the
relevant data file. Any `MediaImage` with `placeholder: true` (or a missing
`image`) renders an elegant `AssetPlaceholder` instead — so the layout never
breaks while assets are still being gathered.

## Asset conventions

See **`docs/ASSETS.md`** for the full list of expected assets and where each one
goes. Supplied so far: the hero video, the GC Vank font, and 46 flower paintings.

## Design & technical decisions

- **Palette is the real place.** Colors come from Dandyland itself — clay-pink
  stucco, butter-yellow trim, green roof, moss, fieldstone, faded sky — plus the
  flower reds/golds/blues of the paintings as accents. No neon, no glassmorphism.
- **Immersive vs. chrome.** `components/site-chrome.tsx` hides the nav/footer on
  `/` and `/garden` (listed in `lib/site.ts` `IMMERSIVE_ROUTES`).
- **Accessibility is built in.** Skip link, keyboard-navigable lightbox, focus
  rings, an accessible wayfinding list mirroring the Studio's interactive
  objects, honeypot + validated contact form, and full `prefers-reduced-motion`
  fallbacks (the Garden Walk becomes crossfades; incidental animation is
  neutralized globally in `globals.css`).
- **Performance.** The hero video is `preload="metadata"` with a poster; the
  service worker deliberately does **not** cache large video or full-res
  artwork; images use `next/image` responsive sizing.
- **Contact form** validates client-side but is not yet wired to a backend —
  connect `onSubmit` in `components/contact-form.tsx` to an API route or email
  service to deliver messages.
