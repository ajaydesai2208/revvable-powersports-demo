# Assessment Writeup Draft

## Which AI Tools I Used And How I Prompted Them

I used Codex CLI as the primary AI coding workflow. I worked as the lead orchestrator and kept implementation coordinated through one owner instead of letting agents independently rewrite the app.

I used bounded subagents for focused review: product UX, visual taste, frontend architecture, and QA/accessibility. I prompted them to return concise recommendations only, then folded the useful feedback back into the plan and docs before implementation.

## What Worked Well

The strongest part of the workflow was using agents as reviewers and pressure-testers instead of treating them as unsupervised implementers. That kept the project direction coherent while still getting faster product, design, architecture, and QA feedback.

The documentation-first pass also helped define what "done" means before writing UI code: three routes, useful inventory browsing, a credible VDP, mobile behavior, build verification, and Vercel readiness.

The best recommendations were specific to dealership buying behavior: keep inventory, price, availability, financing, trade-in, and contact paths visible instead of hiding them behind broad brand copy.

## What Did Not Work Well

The default Vite scaffold starts generic, so the first implementation pass has to remove template assumptions quickly. A dealership prototype needs inventory structure, buyer actions, and visual specificity from the start; otherwise it can drift into a polished but generic demo.

## Where I Stepped In Manually

I made the product calls manually: what the buyer should be able to do, which CTAs matter, how much filtering is enough for a take-home, and where to stop before overbuilding.

I also kept final implementation ownership centralized so the project stayed small, readable, and consistent.

## Improvements With More Time

With more time I would add richer inventory comparison, saved vehicles, payment calculator refinement, dealer hours/location data, and better lead-routing states. I would also replace placeholder imagery with dealership-specific photography and tune image crops by vehicle category.

## Suggested Widgets/Components And Why

- Inventory filter rail: helps buyers narrow category, condition, make, and price without feeling like they are using a generic ecommerce grid.
- Featured unit card: gives the home page a direct path into real inventory.
- Payment estimate module: supports financing intent without building a full finance workflow.
- Trade-in prompt: important for dealership lead generation and purchase readiness.
- Sticky mobile VDP actions: keeps check availability, call/text, and finance actions accessible.
- Short lead form: captures intent without creating friction.

## Product/Engineering Pushback For A Real Product

I would push for real inventory data contracts before building deeper UI. Powersports categories have different buyer signals: motorcycles often need mileage and trim, side-by-sides need hours and package details, watercraft need trailer and engine context. A real product should model those differences instead of flattening every unit into the same generic card.

I would also push to measure lead quality, not just form submissions. The best UI is the one that helps buyers take the next useful step and helps the dealer respond with enough context to close.

I would keep the first production slice focused on inventory discovery and high-intent leads before adding personalization, chat, or complex merchandising logic.
