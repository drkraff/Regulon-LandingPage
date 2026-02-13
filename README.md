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

## Summary & next phase

**What we have:** Hebrew-only RTL landing page with hero, problem, features, trust, and social-proof placeholder; upload area (client-side); stub DoC check and results panel; waitlist CTA and form (name, email, phone, marketing opt-in) inline below results; accessibility widget (font resize 100/110/125%, high-contrast toggle, persisted); full Privacy Policy and Accessibility Statement pages plus DPO section (placeholders to fill); skip link and legal links in footer. Tests for upload, results, waitlist, and accessibility widget.

**Next phase (Phase 5 — Performance & analytics):** Image optimization (WebP/AVIF), metrics/dashboard page (restricted), core events (CTA clicks, form starts, form submits). Alternative: backend for waitlist storage.

## Requirements

Single source of truth for requirements and implementation decisions:

- [.md/Landing-Page-PRD-Reference.md](.md/Landing-Page-PRD-Reference.md)

## Waitlist backend (Turso) — what you need to do

The waitlist form saves signups to a **Turso** database. Turso is a hosted SQLite service (free tier). You do **not** install Turso on your computer; you only create a database in the cloud and put two values into a file.

### 1. Register (free)

- Go to **[https://turso.tech](https://turso.tech)** and sign up (e.g. with GitHub or email).
- No payment required for the free tier.

### 2. Create a database and get credentials

**Option A — Using the Turso website**

1. Log in at [https://turso.tech](https://turso.tech).
2. Create a new database (e.g. name it `regulon-waitlist`).
3. In the dashboard, find your database’s **URL** (looks like `https://xxxxx-xxx.turso.io`) and create an **auth token**. Copy both.

**Option B — Using the Turso CLI (optional)**

1. Install the CLI: [Turso CLI install](https://docs.turso.tech/cli/install).
2. Log in: `turso auth login`.
3. Create the DB: `turso db create regulon-waitlist`.
4. Get the URL: `turso db show regulon-waitlist --url`.
5. Create a token: `turso db tokens create regulon-waitlist`. Copy the token.

### 3. Put the credentials in your project

1. In the project root, copy the example env file:
   ```bash
   copy .env.example .env.local
   ```
   (On macOS/Linux: `cp .env.example .env.local`.)

2. Open **`.env.local`** and set:

   - **TURSO_DATABASE_URL** = the database URL (e.g. `https://xxxxx-xxx.turso.io`).
   - **TURSO_AUTH_TOKEN** = the token you copied.
   - **ADMIN_USERNAME** = any username you choose (for viewing the waitlist in the browser).
   - **ADMIN_PASSWORD** = any password you choose.

3. Save the file. Do **not** commit `.env.local` (it is in `.gitignore`).

The app will create the `waitlist_signups` table automatically the first time someone submits the form. To view signups, open `http://localhost:3000/admin/waitlist` in your browser and enter the same ADMIN_USERNAME and ADMIN_PASSWORD when prompted. (Dates are shown in your local timezone.)

---

## Local development (after setup)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

Proprietary — Regulon.
