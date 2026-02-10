---
Date: 2026-02-10
TaskRef: "Phase 4 — Accessibility widget (font resize, contrast toggle)"

Learnings:
- React 18 Strict Mode double-mounts in tests, causing getByRole to find multiple elements; scoping with getAllByRole()[0] and within(region).getByRole() fixes it.
- Accessibility widget: apply preferences via data-font-size and data-contrast on document.documentElement so a single place (globals.css) controls layout; persist in localStorage with keys regulon-a11y-font and regulon-a11y-contrast.

Difficulties:
- None.

Successes:
- TDD cycle: failing tests first, minimal AccessibilityWidget, then CSS and layout integration; all 16 tests pass.

Improvements_Identified_For_Consolidation:
- Test pattern: when testing components that may render multiple instances (e.g. Strict Mode), query within a scoped container (e.g. first region) to avoid "multiple elements" errors.
---
