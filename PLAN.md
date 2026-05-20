# Implementation Plan

## Phase 0 - Operating Docs

- Create root operating docs for project direction, design rules, implementation plan, notes, progress, tasks, and logs.
- Run a bounded read-only planning review with four subagents.
- Synthesize recommendations into docs before app implementation begins.

Verification:

- Confirm the requested docs exist.
- Confirm no app implementation changes were made during this phase.

## Phase 1 - Project Skeleton

- Completed: Convert the default Vite scaffold into the prototype shell.
- Completed: Add React Router routes for `/`, `/inventory`, and `/inventory/:id`.
- Completed: Set up Tailwind usage and global design tokens.
- Completed: Add a small typed mock inventory dataset.
- Completed: Create a minimal layout with header, footer, and route outlet.
- Use a flat project structure:
  - `src/data/inventory.ts`
  - `src/types/inventory.ts`
  - `src/routes/HomePage.tsx`
  - `src/routes/InventoryPage.tsx`
  - `src/routes/VehicleDetailPage.tsx`
  - `src/components/layout/*`
  - `src/components/inventory/*`
  - `src/components/home/*`
  - `src/components/ui/*`
  - `src/lib/inventoryFilters.ts`
  - `src/lib/formatters.ts`
- Keep filtering logic out of page markup and avoid state libraries or backend-shaped abstractions.

Subagent use:

- Optional frontend architecture review before broad component extraction.

Verification:

- `npm run build`
- Route smoke checks in browser.
- Confirm default Vite starter content is removed.

## Phase 2 - Home Page

- Completed: Build a premium dealership home page.
- Completed: Include hero, category paths, featured inventory, financing/trade-in prompts, dealership trust cues, and contact/visit section.
- Completed: Use stock/placeholder imagery with consistent treatment.
- Completed: Put buyer paths above the fold: Shop Inventory, Get Pre-Qualified, Value My Trade, and Call/Text Dealer.
- Completed: Feature 3 real-looking units with price, category, condition, and availability.

Subagent use:

- Optional visual taste critique after first pass.

Verification:

- Desktop and mobile visual check.
- CTA links route correctly.
- `npm run build`

## Phase 3 - SRP / Inventory Search Results

- Completed: Build inventory listing page with client-side filters.
- Completed: Include category, condition, make, price, and usage-related filtering.
- Completed: Add sort, result count, active filter feedback, empty state, and mobile filter behavior.
- Completed: Link each card to the VDP.
- Completed: Include inline financing/trade prompts as helpful modules, not interruptions.

Subagent use:

- Optional QA review focused on filter correctness and mobile usability.

Verification:

- Filter combinations work.
- Empty state appears when expected.
- Keyboard basics work.
- `npm run build`

## Phase 4 - VDP / Vehicle Detail Page

- Completed: Build detail page for one inventory unit, with route support for all mock units.
- Completed: Include media, price, specs, availability, payment estimate, financing/trade CTAs, short lead form, and related units.
- Completed: Handle unknown unit IDs with a useful not-found state.
- Completed: Keep key actions visible early: Check Availability, Get Financing, Value Trade, and Call/Text.
- Completed: Include concrete specs such as category, condition, engine/displacement where relevant, mileage/hours, stock number, VIN placeholder, color, drivetrain, and location.

Subagent use:

- Optional product UX review focused on buyer intent and lead capture.

Verification:

- Valid VDP routes render.
- Invalid VDP route handles cleanly.
- Form fields are labeled and usable.
- `npm run build`

## Phase 5 - Polish And Review

- Tighten responsive spacing, typography, image behavior, and interaction states.
- Completed: Remove template leftovers.
- Update docs with what changed and what was verified.
- Run final review pass for accessibility, product quality, and deployment readiness.

Subagent use:

- Bounded reviewer pass only: visual taste, QA/accessibility, and architecture challenge.

Verification:

- `npm run build`
- Browser review of Home, SRP, and VDP on desktop and mobile widths.
- Confirm Vercel output directory is `dist`.
- Confirm keyboard access, visible focus, labeled fields, useful alt text, contrast, empty states, and no console errors during basic navigation.

## Phase 6 - Deploy Preparation

- Ensure README contains final setup and deploy notes.
- Finalize `NOTES.md` as the assessment writeup draft.
- Prepare concise submission summary with public URL, GitHub repo, and writeup once deployed.
- Completed: Add `vercel.json` SPA rewrite for direct route loads.

Verification:

- Clean git status review.
- Final build passes.
- Deployed URL works after Vercel deployment.
