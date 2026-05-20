# Final Assessment Writeup

## 1. AI Tools Used And How I Prompted Them

I used Codex CLI as the primary implementation agent. I started by creating project-local operating docs: `AGENTS.md`, `DESIGN.md`, `PLAN.md`, `TODO.md`, `PROGRESS.md`, and `LOGS.md`. Those files gave the work a clear product direction, design contract, implementation plan, task list, and verification trail.

I used bounded read-only subagents for focused review passes: UX, visual design, product/conversion, code quality, and QA/accessibility. I prompted them to return ranked findings and smallest useful fixes. After each review, I made targeted implementation passes instead of letting agents randomly rewrite the app.

I also used ChatGPT image generation as visual exploration for the premium powersports direction. I treated the image as direction, not a spec: stronger hero attitude, amber/graphite blending, glassy rounded panels, and a more integrated RideFinder flow. I translated those ideas into the actual React/Tailwind implementation.

## 2. What Worked Well

The best part of the workflow was keeping AI work bounded. Subagents were useful as reviewers and critics, while the lead implementation stayed centralized and consistent.

The docs-first approach also helped. It forced clear decisions around the three pages, buyer intent, dealership credibility, mobile behavior, and verification before the UI grew.

The final product improved most when the reviews focused on real dealership behavior: inventory browsing, financing intent, trade-in paths, buyer confidence, and fast ways to contact the dealer.

## 3. What Did Not Work Well

The riskiest part was visual motion. A parallax idea looked good in theory but created layout overlap risk, so I cut it back and replaced it with safer reveal behavior, stronger surfaces, and better section rhythm.

The other challenge was imagery. Placeholder stock can weaken a powersports prototype quickly, so I replaced mismatched images with powersports-relevant media or intentional premium placeholders.

## 4. Where I Stepped In Manually

I made the product calls manually: which CTAs mattered, how much filtering was enough, how RideFinder should route into inventory, and where to stop before overbuilding.

I manually reviewed the browser experience, tightened scope, rejected risky parallax/overlap ideas, and kept the app shippable. Build, lint, route smoke checks, and manual browser QA were part of the workflow.

## 5. Improvements I Would Make With More Time

I would add real dealership inventory feeds, richer vehicle photography, better payment estimate logic, saved vehicles, dealer hours/location data, and stronger lead follow-up states.

I would also tune inventory cards by category. Motorcycles, ATVs, side-by-sides, and watercraft need different comparison details.

## 6. Widgets/Components I Would Suggest Adding And Why

- Payment calculator: helps buyers understand affordability before submitting a lead.
- Trade-in estimator: captures high-intent shoppers who already own a unit.
- Saved vehicles: supports comparison across categories and visits.
- Inventory comparison drawer: helps serious buyers compare specs, hours, mileage, and payment estimates.
- Mobile VDP action bar: keeps availability, financing, and contact actions easy to reach.
- Service appointment widget: powersports dealers often sell long-term ownership support, not just units.

## 7. What I Would Push Back On Or Do Differently In A Real Product

I would push for real inventory data contracts before building deeper merchandising UI. Powersports categories have different buyer signals, and a real product should model those differences instead of flattening every unit into one generic card.

I would also push to measure lead quality, not just form submissions. The goal is not more forms; it is better buyer context and faster dealer follow-up.

I would keep the first production slice focused on inventory discovery, high-intent leads, financing/trade paths, and trustworthy vehicle detail pages before adding chat, personalization, or complex AI features.
