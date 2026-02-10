# Regulon Landing Page

Landing page for **Regulon** — AI-powered Product File compliance for Israeli importers (Code 65 / European Directives Track).

## Overview

- **Offer:** Free Product File / Code 65 readiness checker (upload DoC → client-side validation → results → optional waitlist).
- **Stack:** Next.js (SSR), Hebrew-only, RTL.
- **Repo:** [github.com/drkraff/Regulon-LandingPage](https://github.com/drkraff/Regulon-LandingPage)

## Current status

- **Phase 1 done:** Foundation (RTL, design system, Heebo), basic layout and components.
- **Phase 2 done:** Hero, Problem, Features, Trust, Social proof placeholder; nav & footer; legal stub pages; skip link (דלג לתוכן הראשי).
- **Phase 3 — Done:** Upload area, stub check + results panel, waitlist CTA + form (inline below results).
- **Phase 4 — Done:** Accessibility widget, Privacy Policy, Accessibility Statement, DPO section. Next: Phase 5 (performance & analytics) or backend for waitlist.

**Before launch:** Fill all placeholders in `/privacy` and `/accessibility` (company name, address, contact and DPO email, accessibility contact). Search for `[` in those files.

## Requirements

Single source of truth for requirements and implementation decisions:

- [.md/Landing-Page-PRD-Reference.md](.md/Landing-Page-PRD-Reference.md)

## Local development (after setup)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

Proprietary — Regulon.
