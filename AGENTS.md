# Project Codex Instructions

This repository is a Revvable powersports dealership prototype for a frontend take-home assessment. The output should demonstrate strong product judgment, tasteful frontend execution, and a disciplined AI-agentic workflow.

## Operating Mode

- The lead Codex orchestrator owns implementation decisions and file edits.
- Subagents may research, critique, review, and recommend, but they should not make conflicting edits.
- Use bounded fan-out/fan-in only when the work is separable and the result improves product quality.
- Keep the project small, inspectable, and Vercel-ready.
- Do not add backend scope.
- Do not overbuild.

## Coding Style

- Prefer small components, explicit names, early returns, and boring readable code.
- Keep data shapes simple and typed.
- Use mock inventory data for all dealership content.
- Keep files focused; avoid large catch-all components.
- Prefer straightforward React state for filtering and routing unless complexity proves otherwise.
- Do not introduce unnecessary state libraries, API layers, or build tooling.

## Frontend Expectations

- Build a premium rugged powersports dealership experience, not a generic SaaS interface.
- The three required pages are Home, SRP/inventory search results, and VDP/vehicle detail.
- Prioritize buyer intent: browse inventory, compare units, understand value, start financing, value a trade, and contact the dealer.
- Mobile behavior must be designed, not merely collapsed.
- Use imagery and layout to create outdoor/adventure energy without cheesy motorsports tropes.
- Make CTAs clear and useful: view inventory, check availability, get financed, value trade, call/text, schedule visit.

## Design Expectations

- Follow `DESIGN.md` as the visual contract.
- Keep typography confident and restrained.
- Use strong photography, disciplined spacing, and grounded color.
- Avoid purple/blue SaaS gradients, fake dashboards, decorative blobs, over-rounded cards, and generic AI-generated hero sections.
- Cards should feel like inventory tools, not floating marketing tiles.

## Documentation Expectations

- Keep `PLAN.md`, `PROGRESS.md`, `TODO.md`, and `LOGS.md` current as work progresses.
- Record meaningful verification commands and outcomes in `LOGS.md`.
- Keep `NOTES.md` as a natural first-person assessment writeup draft.
- Documentation should be concise, direct, and useful to the reviewer.

## Verification Rules

- Do not claim completion until `npm run build` passes.
- Run the narrowest useful check after each implementation phase.
- Before final handoff, verify:
  - Home, SRP, and VDP routes render.
  - Inventory filtering works.
  - Empty states are sensible.
  - Lead forms have basic accessible behavior.
  - Responsive layouts work on mobile and desktop.
  - Vercel build output is valid.

## Git Safety

- Do not use `git add .`.
- Keep unrelated files untouched.
- Do not rewrite user-authored configuration unless the task explicitly requires it.
