# Villa Sandemarie Project Instructions

## Project status
- Stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, lucide-react, clsx, tailwind-merge.
- Deploy target: Netlify.
- UI: shadcn-style primitives built locally in `src/components/ui/`. Do not leave components looking like stock shadcn demos.
- Current phase: homepage built. Routes (`/de-villa`, `/beschikbaarheid`, `/over-ons`, `/contact`) are still pending.

## Brand naming
- Visible working and public brand: `Villa Sandemarie`.
- Technical slug/package baseline: `villa-sandemarie`.

## Product goal
- Show clearly what the villa is.
- Build trust fast.
- Turn visits into booking intent.
- In phase 1, conversion means inquiry/request, not automated checkout.

## Hard scope boundaries
- Do not build an online payment system.
- Do not build fully automated direct booking.
- Do not build automatic invoice handling.
- Do build Airbnb iCal availability sync/read logic.
- Do build request/inquiry handling via Netlify Forms (form name: `inquiry`, lives in `src/components/sections/Booking.tsx`).
- The client manually approves requests, adds bookings to Airbnb, and sends invoices manually.
- If pricing is shown, frame it as a clear estimate/request context, not as a paid checkout.

## Sitemap
- Home (built — `src/app/page.tsx`)
- De Villa (pending standalone route; lives as homepage sections for now)
- Beschikbaarheid & Boeken (pending standalone route; inquiry form is on home)
- Over ons (pending standalone route; family bios on home)
- Contact (pending; covered via footer + WhatsApp)
- Curaçao section is on home; expand to `/curacao` SEO/GEO sub-pages once content quality supports it.

## Core content and positioning
- Villa for up to 11 guests, 5 bedrooms, 2 bathrooms + extra toilet, private pool.
- 180° view over Spaanse Water and Tafelberg.
- Location: Cas Grandi, vlak bij Jan Thiel.
- Target groups: families, friend groups, dive/snorkel groups, special trips, small teams.
- Tone: simple, clear, warm, honest, no marketing bullshit.
- Core feeling: space, ease, togetherness, local familiarity, family-run trust.

## Visual system
- Colors:
  - `#f2f0eb` background, `#2d4829` primary, `#59392e` warm accent, `#fee7a9` highlight, `#88a7b2` secondary, `#faf8f3` paper.
  - All exposed as Tailwind tokens via `@theme inline` in `src/app/globals.css`.
- Typography: `Fraunces` (display, variable axes via `next/font/google`) + `Inter` (sans). Wired in `src/lib/fonts.ts`.
- Client originally suggested Intro Rust / Baloo / Nunito; we chose Fraunces + Inter for warmer editorial-luxury feel and free licensing. Re-evaluate if client pushes back.
- Reference: dribbble.com/shots/26704227-Villanesia. Avoid stock-luxury-hotel look. Strong full-bleed imagery + video matters.

## Information architecture (homepage)
1. Hero (full-bleed video) → `Hero.tsx`
2. Intro / villa story → `Intro.tsx`
3. Voorzieningen (amenities grid with lucide icons) → `Amenities.tsx`
4. Indeling & kamers → `Rooms.tsx`
5. Outdoor / buitenleven → `Outdoor.tsx`
6. Galerij → `Gallery.tsx`
7. Voor wie (audiences) → `Audiences.tsx`
8. Over ons (familie) → `About.tsx`
9. Curaçao tips → `Curacao.tsx`
10. Beschikbaarheid + Netlify form → `Booking.tsx`
11. Footer → `Footer.tsx`

## Centralized data (single source of truth)
Update these — never hard-code copy/links/pricing in components:
- `src/lib/site.ts` — name, address, contact, socials, WhatsApp, Airbnb iCal, partners, nav.
- `src/lib/villa.ts` — facts, highlights, amenities (with icon name), rooms, outdoor, audiences, pricing.
- `src/lib/family.ts` — about-us intro + per-person bios.
- `src/lib/gallery.ts` — villa + Curaçao image lists with alt text.
- `src/lib/fonts.ts` — Google fonts wiring.

## SEO + GEO (mandatory, both, from day one)
SEO and Generative Engine Optimization are equally mandatory. Anything new on the site must serve both human visitors and LLM/AI search systems (ChatGPT search, Perplexity, Google AI Overviews, Bing Copilot, ClaudeBot).

What this concretely means for every page or section:
- Semantic HTML, real headings (`h1`/`h2`/`h3`), proper `alt`, internal anchors and links.
- Explicit place/context signals: Curaçao, Cas Grandi, Jan Thiel, Spaanse Water, Tafelberg, family villa, group stay.
- Self-contained, citation-ready passages: short factual paragraphs that answer one question (capacity, location, price, who-it's-for, how-to-book) and stand alone if pulled out of context.
- Structured data via `src/components/site/JsonLd.tsx`:
  - `LodgingBusiness` (always on home; mirror onto `/de-villa` when built).
  - `FAQPage` for the most common booking questions. Keep questions in sync with on-page content.
  - Add `BreadcrumbList` once sub-routes exist.
- `public/llms.txt` — keep up to date with key facts, pricing, contact, citation guidance. This file is the canonical brief for LLMs.
- `src/app/robots.ts` — explicitly allow `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`. Do not block AI crawlers unless the client asks.
- `src/app/sitemap.ts` — add new routes here as they ship.
- `metadata` in `src/app/layout.tsx` — `metadataBase`, openGraph, twitter, alternates, robots. Keep `description` factual and unique per route once we add sub-routes.
- Image filenames and `alt` text should be descriptive (no `IMG_5217.JPG` shipped to `/public`).

When adding content, ask: would a model citing this passage have everything it needs (entity, location, fact, source)? If not, add the missing context inline rather than relying on the surrounding page.

## Booking experience
- Availability source: Airbnb iCal (`site.airbnbIcal`).
- Inquiry handling: Netlify Forms, form name `inquiry`. Includes honeypot.
- UX: dates + guest count + contact + optional message → manual confirmation by family.
- Pricing model is centralized in `villa.pricing` (`nightlyFrom`, `extraGuest`, `taxRate`, `cleaningFee`, `deposit`, `baseGuests`, `bullets`, `notes`). Update there, never inline.

## Content sources
- Primary brief:
  - `content/WEBSITE Villa Sandemarie overview.docx`
  - `content/wetransfer_website-content-villa-sandemarie_2026-04-25_2319/Website/Tekst nieuwe website villa.docx`
- Media source folder is large. Never load it blindly.
- Selected assets are converted (ImageMagick, max 2000px, q80 webp) and committed to `public/media/{villa,curacao,about,home}/` with descriptive filenames. Add new assets the same way.
- Hero video stays as `.mp4` at `public/media/home/villa-sandemarie-hero.mp4`.

## Language strategy
- Current copy is Dutch-first. Structure data so EN expansion is straightforward (probably `next-intl` or simple `dictionaries/{nl,en}.ts` later).
- WhatsApp NL/EN links live in `site.whatsapp.nl` / `site.whatsapp.en`.

## Implementation constraints
- App Router. Server components by default; only `Header.tsx` is `"use client"` (scroll + mobile menu).
- Path alias: `@/*` → `src/*`.
- Next.js `16.2.4`. Verify framework-sensitive work against local docs in `node_modules/next/dist/docs/`.
- `lucide-react@1.11.0` ships icon names but **does not include brand icons** (Instagram/Facebook). We hand-roll those as inline SVG in `Footer.tsx`. Don't try to import them from lucide.
- Avoid Vercel-specific platform dependencies; deployment is Netlify.

## External links provided by the client
- Instagram: `https://www.instagram.com/villasandemarie`
- Facebook: `https://www.facebook.com/curacaovillasandemarie/`
- TikTok: `https://www.tiktok.com/@villasandemarie`
- WhatsApp NL/EN: see `site.whatsapp` in `src/lib/site.ts`.
- Airbnb iCal: `site.airbnbIcal`.
- Scuba Do partner: `site.partners.scubaDo`.

## Working style for future agents
- Stay close to the client brief. Do not invent luxury positioning or complicated booking logic.
- Prefer visible progress on real user-facing pages over abstract architecture.
- Solve SEO + GEO, trust, and conversion clarity early — never defer them.
- Choose clarity, warmth, and usability over cleverness.
- Keep `AGENTS.md` and `CLAUDE.md` in sync. If you update one, update the other in the same change.
- When assumptions, scope, design direction, content structure, or technical decisions change, update both files.
- Keep these files lean — under a few hundred lines each. Remove stale instructions, merge duplicates.
