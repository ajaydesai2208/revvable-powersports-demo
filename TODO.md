# TODO

## Current

- Run one manual browser pass at desktop and mobile widths before deployment.
- Prepare Vercel deployment and final submission summary.

## Final Smooth UX Pass

### Completed

- Completed: Removed aggressive negative-margin overlap between Hero, CategoryStrip, and RideFinder.
- Completed: Removed scroll-driven parallax transforms that could cause section collisions.
- Completed: Added a lightweight `RevealOnScroll` component using `IntersectionObserver`.
- Completed: Applied smooth reveal behavior to CategoryStrip, RideFinder, featured inventory, buyer tools, trust strip, and inventory cards.
- Completed: Preserved terrain cards as real SRP query links and clarified filtered-inventory microcopy.
- Completed: Verified `npm run lint`, `npm run build`, and HTTP smoke checks for required routes.

### Still Worth Manual Review

- Confirm Home desktop and mobile have no section overlap.
- Confirm reveal timing feels smooth and not distracting.
- Confirm reduced-motion mode shows content immediately.

## Signature Polish V2

### Completed

- Completed: Used the generated mockup as visual direction without copying its navigation or adding new scope.
- Completed: Integrated Hero, CategoryStrip, and RideFinder into a shared Home depth flow with amber/graphite blending.
- Completed: Refined Hero atmosphere with stronger cinematic glow, depth overlay, and softer transition into the Home flow.
- Completed: Redesigned RideFinder into the signature rounded terrain-selection panel with real SRP query links, a decorative step rail, terrain cards, and a buyer-facing flow.
- Completed: Added CSS-only depth layers and progressive view-timeline enhancement with reduced-motion fallback.
- Completed: Softened buttons, badges, category bridge, inventory cards, VDP media, and premium placeholder surfaces.
- Completed: Added a small SRP active-filter context line for RideFinder handoffs.
- Completed: Verified `npm run lint`, `npm run build`, and HTTP smoke checks for required routes.

### Still Worth Manual Review

- Confirm the mockup-inspired Home composition feels premium at desktop and does not crowd mobile.
- Confirm RideFinder terrain cards have enough image/placeholder contrast in real browser rendering.
- Confirm the optional view-timeline enhancement feels subtle in supported browsers.

## Image Cleanup Correction

### Completed

- Completed: Replaced clearly mismatched non-powersports inventory URLs with controlled premium dark category placeholders.
- Completed: Added stable placeholder rendering for SRP cards and VDP hero media when an inventory item has no suitable powersports image.
- Completed: Kept motorcycle inventory imagery where it already matches the unit category.
- Completed: Lazy-loaded non-hero inventory card images.
- Completed: Improved localized dark-theme metadata contrast in inventory cards, VDP price metadata, and vehicle specs.
- Completed: Lightly tightened Ride Finder vertical height while preserving the section, query links, keyboard-accessible links, and CSS-only reduced-motion-compatible motion.
- Completed: Verified `npm run lint`, `npm run build`, and HTTP smoke checks for required routes.

### Still Worth Manual Review

- Confirm category placeholders look intentional in SRP, featured inventory, related inventory, and VDP media at desktop and mobile widths.
- Confirm the remaining motorcycle remote images load and crop well.

## Signature Ride Finder Polish

### Completed

- Completed: Added a Home page Ride Finder / Terrain Drop section after the category strip and before featured inventory.
- Completed: Added terrain buyer-intent links for Trail, Street, Water, Utility, and New Arrival using supported SRP query params.
- Completed: Added a compact cinematic preview panel with existing powersports imagery, dealership signals, CSS-only depth, and reduced-motion compatibility.
- Completed: Kept the feature frontend-only, dependency-free, and accessible through real links with visible focus states.
- Completed: Verified `npm run lint`, `npm run build`, and HTTP smoke checks for the new inventory query routes.

### Still Worth Manual Review

- Confirm the Ride Finder visual crop, chip wrapping, and motion feel polished in a real browser at mobile and desktop widths.
- Confirm the new section adds a memorable moment without pushing featured inventory too far down the Home page.

## Dark Premium Polish

### Completed

- Completed: Updated `DESIGN.md` with the dark premium visual contract and token guidance.
- Completed: Shifted the app baseline from light dealership UI to black/graphite/asphalt surfaces with amber accents.
- Completed: Reworked primary and secondary buttons into sharper machine-like CTAs with visible focus states.
- Completed: Replaced the terrain-only hero with vehicle-forward imagery and CSS-only cinematic depth.
- Completed: Restyled hero proof points into dark dealer-status panels.
- Completed: Darkened category strip, buyer tools, featured inventory, SRP, VDP, cards, filters, lead form, empty states, and footer.
- Completed: Added premium panel treatments, amber edge accents, stronger card hover states, and dealership-specific buyer-tool copy.
- Completed: Updated VDP payment language to include tax/title/fees and approval caveat.

### Still Worth Manual Review

- Confirm dark-theme contrast in real browser across Home, SRP, VDP, empty states, and lead success/errors.
- Confirm remote imagery loads and crops well at desktop and mobile widths.
- Confirm CSS-only motion feels subtle and reduced-motion fallback is acceptable.

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
