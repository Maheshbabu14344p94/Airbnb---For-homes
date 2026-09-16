# PlayPower Labs — Premium Airbnb Clone

A desktop-first React + Vite + TypeScript implementation of the PlayPower Labs Airbnb take-home assignment. The supplied premium hero prompt is used as **visual direction** — not as copied content: pill navigation, cinematic photography, rounded surfaces, depth, soft shadows, and polished micro-interactions are adapted to the Airbnb listing experience.

The assignment itself remains the source of truth for scope: Listing Page, Photo Tour, and Lightbox. The reference brief requires visual/behavioral fidelity, keyboard navigation, accessibility, a production-scale architecture diagram, and AI workflow/config files.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- hls.js utility
- React Router DOM
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
npm run preview
```

## Premium UI direction

- Floating pill-style glass navigation
- Editorial typography and compact metadata chips
- Large rounded architectural/property gallery
- Landing-page 3D home viewer with drag-to-rotate motion and a two-sided 360° flip effect
- Layered shadows and depth rather than flat cards
- Motion-aware gallery and overlay transitions
- Premium booking card with glass treatment, float animation, and drag/tilt depth
- Photo Tour cards with lift/scale micro-interactions and layered depth
- Clean neutral canvas with Airbnb red accents

The supplied prosthetics hero copy/video are intentionally not used; they are unrelated to the assignment and were treated only as a style reference.

## Required assignment views

1. **Listing Page** — complete property presentation with hero gallery, listing details, amenities, description, reviews, location/host content and booking card.
2. **Photo Tour** — full-screen gallery with category filtering and animated image cards.
3. **Lightbox** — single-photo viewer with previous/next controls, `ArrowLeft`, `ArrowRight`, `Escape`, image counter and scroll locking.

## Submission assets

- `docs/architecture.svg` — production-scale vacation-rental marketplace architecture
- `docs/architecture.png` — rendered diagram
- `PROMPTS.md` — AI-assisted development prompt sequence
- `.agents/subagents/qa-reviewer.md` — QA sub-agent configuration
- `.agents/skills/frontend-review.md` — visual/accessibility review workflow

## Originality

The implementation is original React/TypeScript code written from the supplied assignment requirements and screenshots. It does not lift the reference site's codebase. Public image CDN URLs are used for sample property photography so the repository remains lightweight.
