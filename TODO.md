# TODO

## Current

- Run one manual browser pass at desktop and mobile widths before deployment.
- Prepare Vercel deployment and final submission summary.

## Final Review Fixes

### Completed Deploy Blockers

- Completed: Added an explicit wildcard route for unknown app paths.
- Completed: Improved lead form accessibility with required fields, field-associated errors, `aria-invalid`, `aria-describedby`, labeled controls, and an announced success state.
- Completed: Made VDP CTAs carry inquiry intent into the lead form for availability, financing, payment estimate, trade-in, and walkaround requests.

### Completed Product And Accessibility Fixes

- Completed: Fixed header Financing and Trade-In nav semantics so they route to buyer tools instead of fake phone links.
- Completed: Made Home category links preserve buyer intent with inventory category query params.
- Completed: Synced SRP filters and sort to URL search params.
- Completed: Made Clear Filters reset sort by clearing the SRP query state.
- Completed: Added stronger SRP card comparison data: stock number and location.
- Completed: Added a compact VDP buyer confidence block near the lead form.

### Remaining Nice-To-Haves

- Replace or adjust the Home hero image so powersports inventory is visible, not just generic terrain.
  - Smallest fix: use a vehicle-forward trail/showroom image and keep the full-bleed treatment.
- Restyle the hero proof cards so they feel dealership-specific instead of SaaS feature tiles.
  - Smallest fix: turn them into a compact "Today at Summit Ridge" availability/status rail.
- Strengthen CTA hierarchy.
  - Smallest fix: keep one clear primary action per context and make VDP secondary actions visually quieter.
- Improve mobile buyer flow.
  - Smallest fix: add a compact SRP filters/results toggle and a VDP near-sticky action area for call/text, availability, and financing.
- Reduce unsafe select casts in `InventoryFilters`.
  - Smallest fix: use typed option arrays or typed setters for select values.

## Next Implementation Prompt

- Run a visual browser review for Home, SRP, and VDP at mobile and desktop widths.
- Fix only visible spacing, hierarchy, or interaction issues found in that pass.
- Deploy to Vercel and prepare the final assessment writeup.

## Later

- Add richer inventory imagery and category-specific visual cues.
- Extend `Button` typing for future needs such as `aria-label`, `disabled`, `target`, and `rel`.
- Track field-specific lead form errors if the form grows beyond the prototype.
- Prepare Vercel deployment.
