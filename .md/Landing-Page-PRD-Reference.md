# Regulon Landing Page — PRD Reference

**Product:** Regulon — AI-powered Product File compliance for Israeli importers  
**Last updated:** February 2025  
**Purpose:** Single source of truth for landing page requirements and implementation decisions.

---

## 1. Project Overview

| Item | Detail |
|------|--------|
| **Goal** | High-converting, RTL-first landing page for Regulon |
| **Offer** | Free Product File / Code 65 readiness checker (validation tool) |
| **Context** | "What's Good for Europe Is Good for Israel" reform (2025/2026) — European standards for faster customs entry via Code 65 |
| **Target KPI** | Conversion to waitlist signup after user sees value from the tool |
| **Language** | Hebrew-only (RTL) |

---

## 2. Code 65 & Product Files (Background)

### What is Code 65?

- Customs declaration code for the **European Directives Track** ("VIP Lane").
- **Old way (Code 60):** Standard track — wait for SII testing.
- **New way (Code 65):** Declaration-based release — importer declares EU compliance and holds a Product File (Tik Mutzar) for audit. No physical testing at port, but higher legal liability.

### Product File documents required

| Document | Description |
|----------|-------------|
| EU Declaration of Conformity (DoC) | 1-page manufacturer document listing Directives (e.g., LVD, EMC, RoHS) |
| Test Reports | 50–200 page lab PDFs (e.g., TÜV, SGS) |
| Technical File | Circuit diagrams, photos, parts lists |
| Hebrew Labeling Draft | Sticker design for mandatory Hebrew markings |
| Evidence of Lawful Marketing | Invoices/screenshots proving product sold in EU |

### Tool behavior (Scanner)

1. User uploads a DoC (or Product File).
2. Tool checks: valid Directives, signature date, completeness.
3. Result: e.g., "Your DoC is valid for Code 65, but you're missing Hebrew Labeling draft and EMC Test Reports."

---

## 3. Technical Stack & SEO

| Item | Specification |
|------|---------------|
| **Framework** | Next.js (Server-Side Rendering) |
| **Performance** | LCP < 2.5s, INP < 200ms, CLS < 0.1 |
| **Hosting** | Israeli server (e.g., AWS me-central-1), response < 200ms |
| **Assets** | WebP or AVIF for images/icons |
| **Analytics** | Dedicated metrics page (restricted access) — track CTA clicks, form starts, form submits |

---

## 4. UI/UX: RTL & Design System

| Item | Requirement |
|------|-------------|
| **Direction** | `dir="rtl"`, `lang="he"` on `<html>` |
| **Typography** | Bi-directional text; Western numerals (1, 2, 3) remain LTR |
| **CTA placement** | Primary button top-left in header/hero (natural resting point for Hebrew readers) |
| **Color palette (2026)** | Primary: Digital Blue / Tech Navy; Accent: Salted Lime / Sage; Alert: Power Red |
| **Accessibility** | High-contrast text for B2B decision-makers |
| **Assets** | Build with generic design first; add logos/graphics later |

---

## 5. User Flow (CTA Flow)

```
Landing Page
    ↓
[Upload area] — "Drop your DoC or Product File here" (no signup)
    ↓
Client-side processing → Results shown
    ↓
[Results panel] — e.g., "Your DoC is valid for Code 65. Missing: Hebrew Labeling, EMC Test Reports."
    ↓
[Waitlist CTA] — Right below results, inline (no pop-up, no forced signup)
    ↓
[Form] — Full Name, Email, Phone (optional), Marketing opt-in checkbox (unchecked by default)
```

---

## 6. Lead Form Specification

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | Yes |
| Email | Email | Yes |
| Phone | Tel | No (optional) |
| Marketing opt-in | Checkbox | No — **unchecked by default** |

**Marketing checkbox label:** "Accept to receive news and marketing emails"

- User must actively check; default is unchecked.
- Separate from consent to join waitlist.

---

## 7. Data Handling & Privacy

| Item | Decision |
|------|----------|
| **Uploaded files** | Processed client-side only; **no storage** on servers |
| **Debugging** | Start without storage; add opt-in debug or error-reporting later if needed |
| **Lead data** | Stored for waitlist; follow Data Minimization (Amendment 13) |
| **DPO** | Include DPO/Privacy contact section in Privacy Policy (footer link) |

---

## 8. Section-by-Section Copy & Architecture

### I. Hero Section

- **Eyebrow:** "Automated Compliance for Israeli Importers"
- **Headline:** "Generate SII-Compliant Product Files in Minutes, Not Weeks"
- **Body:** Leverage the 'European Directives Track' (Code 65) to bypass physical testing. Automate your Hebrew labeling and compliance verification instantly.
- **CTA:** "Start Your Compliance Audit" (or "Check Your Product File Readiness")
- **Micro-proof:** "Compliant with Amendment 13 & IS 5568"

### II. The Problem (PAS Formula)

- Pain: 5–6 week lead times
- Agitation: Risk of fines, customs seizures, labeling errors under 2025/2026 regime
- Solve: Regulon's approach

### III. Features (Job-to-be-Done)

1. **Automated Product Files** — Generate legal documents required for SII
2. **Hebrew Labeling Engine** — Translate/adapt European labels to Israeli standards
3. **Family of Models Management** — Group related variations into a single file

### IV. Trust & Security

- Data isolation: "Cryptographic Tenancy" (ALE)
- Links: Accessibility Statement (IS 5568), Privacy Policy (Amendment 13)

### V. Social Proof

- Reserve space; no content yet (starting from scratch)

---

## 9. Legal & Compliance (IS 5568 & Amendment 13)

| Component | Requirement |
|-----------|-------------|
| **Accessibility widget** | Custom solution — font resizing, contrast toggle |
| **Lead form** | Data minimization; clear opt-in flows |
| **DPO disclosure** | Privacy Policy section with contact details |
| **Accessibility Statement** | Link in footer |
| **Privacy Policy** | Link in footer |

---

## 10. Navigation & Footer

**Pages/sections to include:**

- Pricing (no pricing content yet — validation phase)
- About
- Contact
- Accessibility Statement
- Privacy Policy
- DPO / Data Protection contact (via Privacy Policy)

---

## 11. Implementation Phases

### Phase 1: Foundation

- Next.js app with RTL support
- Design system: 2026 palette, typography, Hebrew fonts
- Basic layout and components

### Phase 2: Sections

1. Hero
2. Problem (PAS)
3. Features
4. Trust & Security
5. Social proof placeholder

### Phase 3: Tool & Flow

- Upload area (client-side processing)
- Results panel
- Waitlist CTA + form (inline, below results)

### Phase 4: Legal

- Accessibility widget (font resize, contrast)
- Privacy Policy, Accessibility Statement, DPO section

### Phase 5: Performance & Analytics

- Image optimization (WebP/AVIF)
- Metrics/dashboard page (restricted access)
- Core events: CTA clicks, form starts, form submits

---

## 12. Decisions Log

| Date | Decision |
|------|----------|
| Feb 2025 | Product name: Regulon |
| Feb 2025 | CTA flow: Anonymous upload → Results → Optional waitlist (inline) |
| Feb 2025 | Lead form: Name, Email, Phone (optional), Marketing opt-in unchecked by default |
| Feb 2025 | Data: Client-side processing only, no file storage |
| Feb 2025 | No pricing on landing page; focus on free Product File review |
| Feb 2025 | Hebrew-only; English later if needed |
| Feb 2025 | Accessibility: Custom widget (font + contrast) |
| Feb 2025 | Design: Generic first, graphics later |

---

## 13. References

- **Landing Page PRD** — `Landing Page PRD for Israeli SaaS.pdf`
- **Code 65 Explained** — `Israeli Import Reform_ Code 65 Explained.pdf`
