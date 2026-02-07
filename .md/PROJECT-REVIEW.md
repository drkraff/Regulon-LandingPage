# Regulon Landing Page — Pre–Phase 3 Review

**Date:** February 2025  
**Purpose:** Snapshot of project standing before Phase 3 (Tool & Flow).

---

## 1. PRD Alignment

| Requirement | Status | Notes |
|-------------|--------|--------|
| **RTL + Hebrew** | ✅ | `dir="rtl"` and `lang="he"` on `<html>`; Heebo with Hebrew subset |
| **2026 palette** | ✅ | Primary (navy/blue), accent (lime/sage), alert (red) in `globals.css` |
| **CTA placement** | ✅ | Primary CTA (התחל בדיקת התאמה) in header on the “start” side for RTL |
| **Sections** | ✅ | Upload at top, Hero, Problem, Features, Trust, Social proof placeholder |
| **Nav & footer** | ✅ | Pricing, About, Contact, Accessibility, Privacy — all linked |
| **Legal stubs** | ✅ | Privacy, Accessibility, Pricing, About, Contact — “Coming soon” |
| **Language: Hebrew-only** | ⚠️ | **Body copy is still English** (placeholder). Nav/footer use Hebrew. PRD says Hebrew-only; consider a Hebrew copy pass or document as intentional until content is ready. |

---

## 2. Technical

- **Structure:** App at repo root; `app/`, `components/`, `public/`; design tokens in `globals.css`.
- **Header CTA:** Links to `/#audit` and works from any page; smooth scroll enabled.
- **No tests yet:** TDD rules suggest tests first; Phase 1/2 are mostly static. Consider adding a smoke test or starting tests in Phase 3 when we have upload/results logic.
- **Alert color:** `--alert` (Power Red) is defined but unused — ready for Phase 3 (e.g. validation errors).

---

## 3. Gaps / Optional Before Phase 3

1. **Skip link:** Add “Skip to main content” (or “Skip to upload”) for keyboard/screen-reader users. Quick a11y win before Phase 4 widget.
2. **README:** Add current phase status (Phases 1–2 done, Phase 3 next) so the repo is self-explanatory.
3. **Language:** Decide whether to keep English placeholders until Phase 3 is done or do a Hebrew placeholder pass now.

---

## 4. Recommendation

- **Change now:** Add skip link and README phase status (low risk, high clarity).
- **Decide:** Hebrew vs English body copy — either document “English placeholder until copy ready” or plan a short Hebrew pass.
- **No structural changes needed** before Phase 3; the upload block placeholder and section order are ready for the real tool and form.
