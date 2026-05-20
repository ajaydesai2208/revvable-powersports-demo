# Revvable Powersports Dealership Prototype

A frontend-only powersports dealership prototype built for Revvable's AI-Augmented Front-End Developer take-home assessment.

The site presents a premium dark dealership experience for buyers shopping motorcycles, ATVs, side-by-sides, and watercraft. It uses mock inventory data, client-side filtering, and static frontend routing so it can deploy cleanly on Vercel.

## Routes

- `/` - Home page with cinematic dealership positioning, category paths, RideFinder, featured inventory, buyer tools, and trust cues.
- `/inventory` - Search results page with filters, sorting, active filter state, empty states, and inventory cards.
- `/inventory/:id` - Vehicle detail page with media, specs, payment context, related inventory, CTA intent, and lead capture.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Vercel

## Local Setup

```bash
npm install
npm run dev
npm run build
npm run lint
```

## AI Workflow

I built this with Codex CLI as the primary implementation workflow. The project used local planning docs such as `AGENTS.md`, `DESIGN.md`, `PLAN.md`, `TODO.md`, `PROGRESS.md`, and `LOGS.md`, plus bounded read-only review passes for UX, visual direction, product/conversion, code quality, and QA. Implementation stayed coordinated through one lead agent instead of letting agents make conflicting edits.
