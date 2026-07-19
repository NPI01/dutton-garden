# Dandyland — Asset Guide

Where each supplied asset goes, and what still needs to be provided. Drop files
at the paths below and reference them from the matching `lib/content/*` data
file. Until then, the interface shows elegant placeholders — nothing breaks.

## Already supplied ✓

| Asset | Location | Used by |
| --- | --- | --- |
| Hero film (720p, ~52s) | `public/videos/dandyland-intro.mp4` | The Gate (`app/page.tsx`) |
| Video poster (auto-extracted) | `public/videos/poster.jpg` | Gate fallback, Studio window, Garden threshold |
| GC Vank display font | `public/fonts/GCVank.ttf` (+ `.otf`) | `app/fonts.ts` |
| 46 flower paintings | `public/flower-images/` | Garden Walk, Paintings › The Garden |
| App icons (generated) | `public/icon-192.png`, `icon-512.png` | PWA manifest |

## Still needed

Create the folders under `public/` and add files; then wire them into the noted
data file (or replace the relevant `AssetPlaceholder`).

| Expected asset | Suggested path | Wire into |
| --- | --- | --- |
| Portrait of Dan | `public/art-images/dan/portrait.jpg` | `lib/content/sections.ts` (`dan`) |
| Studio & property photos | `public/art-images/dandyland/` | `sections.ts` (`dandyland`) |
| Ballads of the Barefoot Mind — 12 paintings + frames + detail crops | `public/art-images/ballads/` | `app/paintings/ballads` |
| General paintings, early work, figures/legends, recent | `public/art-images/paintings/<series>/` | paintings subsections |
| Sculpture photographs (+ process) | `public/art-images/sculpture/` | `sections.ts` (`sculpture`) |
| Opera / performance photos (Stone Man, Secret Commonwealth) | `public/art-images/stage/` | stage subsections |
| Costume / set designs, programs, posters | `public/art-images/stage/documents/` | stage |
| Ballad audio recordings | `public/audio/ballads/` | `lib/content/types.ts` `AudioTrack` |
| Ambient / performance video | `public/videos/` | stage `VideoAsset` |
| Archival materials (documents, press) | `public/art-images/archive/` | `archive` |

## Notes

- **Do not use stock photography.** Missing assets stay as placeholders.
- Filenames with spaces are fine but get URL-encoded in `lib/content/flowers.ts`;
  prefer hyphenated names for new files.
- Large video/full-res art is intentionally **not** service-worker cached
  (`public/sw.js`) to respect device storage.
- Replace the auto-extracted `poster.jpg` with a hand-picked frame if desired:
  `ffmpeg -ss 3 -i videos/dandyland-intro.mp4 -frames:v 1 -q:v 3 videos/poster.jpg`.
