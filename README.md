# Revvable Powersports Dealership Demo

A polished three-page powersports dealership prototype for Revvable's AI-Augmented Front-End Developer take-home assessment.

The prototype will present a premium, rugged dealership experience for serious powersports buyers. It is intentionally small and shippable: a home page, a search results page for inventory browsing, and a vehicle detail page for one unit.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router
- Mock inventory data
- Client-side filtering
- Vercel-ready static deployment

## Planned Routes

- `/` - Dealership home page with brand positioning, featured inventory, buyer actions, and trust cues.
- `/inventory` - SRP/search results page with inventory cards, filters, sorting, empty states, and mobile-friendly browsing.
- `/inventory/:id` - VDP/vehicle detail page with media, specs, price, availability, financing/trade-in CTAs, and lead capture.

## Current Prototype

- Home page for Summit Ridge Powersports with premium rugged positioning, category paths, featured inventory, buyer tools, and dealership trust cues.
- SRP with typed mock inventory, client-side filtering, sorting, active filter feedback, result counts, and empty state.
- VDP with selected unit details, media, specs, payment estimate, related inventory, mock lead form, and invalid-unit handling.
- Vercel SPA rewrite configuration in `vercel.json` for direct route loads.

## Local Setup

```bash
npm install
npm run dev
```

## Build And Preview

```bash
npm run build
npm run preview
```

## Deployment

The app is intended for Vercel deployment as a Vite static frontend.

Expected deployment command:

```bash
npm run build
```

Expected output directory:

```bash
dist
```

## AI Workflow

Codex CLI is the primary AI coding workflow for this project. The work is organized through a bounded lead-orchestrator model: the lead agent owns implementation, while scoped subagents are used for research, critique, planning review, and QA challenge without creating conflicting edits.
