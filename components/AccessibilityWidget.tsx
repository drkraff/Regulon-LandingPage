"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY_FONT = "regulon-a11y-font";
const STORAGE_KEY_CONTRAST = "regulon-a11y-contrast";

const FONT_STEPS = [100, 110, 125] as const;
type FontStep = (typeof FONT_STEPS)[number];

function getStoredFont(): FontStep {
  if (typeof window === "undefined") {
    return 100;
  }
  const v = window.localStorage.getItem(STORAGE_KEY_FONT);
  const n = v !== null ? Number.parseInt(v, 10) : NaN;
  return FONT_STEPS.includes(n as FontStep) ? (n as FontStep) : 100;
}

function getStoredContrast(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.localStorage.getItem(STORAGE_KEY_CONTRAST) === "1";
}

function applyToDocument(font: FontStep, contrast: boolean): void {
  if (typeof document === "undefined") {
    return;
  }
  const root = document.documentElement;
  root.setAttribute("data-font-size", String(font));
  root.setAttribute("data-contrast", contrast ? "high" : "normal");
}

function persistToStorage(font: FontStep, contrast: boolean): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY_FONT, String(font));
  window.localStorage.setItem(STORAGE_KEY_CONTRAST, contrast ? "1" : "0");
}

/**
 * Accessibility widget: font resize and high-contrast toggle.
 * Applies preferences to document and persists to localStorage.
 */
export function AccessibilityWidget() {
  const [fontPercent, setFontPercent] = useState<FontStep>(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const font = getStoredFont();
    const contrast = getStoredContrast();
    setFontPercent(font);
    setHighContrast(contrast);
    applyToDocument(font, contrast);
  }, []);

  useEffect(() => {
    applyToDocument(fontPercent, highContrast);
    persistToStorage(fontPercent, highContrast);
  }, [fontPercent, highContrast]);

  const increaseFont = useCallback(() => {
    const i = FONT_STEPS.indexOf(fontPercent);
    if (i < FONT_STEPS.length - 1) {
      const next = FONT_STEPS[i + 1];
      setFontPercent(next);
      applyToDocument(next, highContrast);
      persistToStorage(next, highContrast);
    }
  }, [fontPercent, highContrast]);

  const decreaseFont = useCallback(() => {
    const i = FONT_STEPS.indexOf(fontPercent);
    if (i > 0) {
      const next = FONT_STEPS[i - 1];
      setFontPercent(next);
      applyToDocument(next, highContrast);
      persistToStorage(next, highContrast);
    }
  }, [fontPercent, highContrast]);

  const toggleContrast = useCallback(() => {
    setHighContrast((prev) => {
      const next = !prev;
      applyToDocument(fontPercent, next);
      persistToStorage(fontPercent, next);
      return next;
    });
  }, [fontPercent]);

  return (
    <section
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-1 rounded-lg border border-border bg-background p-2 shadow-md"
      aria-label="נגישות"
    >
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={decreaseFont}
          className="rounded px-2 py-1 text-sm font-medium text-foreground hover:bg-foreground/10"
          aria-label="הקטן טקסט"
        >
          A-
        </button>
        <button
          type="button"
          onClick={increaseFont}
          className="rounded px-2 py-1 text-sm font-medium text-foreground hover:bg-foreground/10"
          aria-label="הגדל טקסט"
        >
          A+
        </button>
      </div>
      <button
        type="button"
        onClick={toggleContrast}
        className="rounded px-2 py-1 text-sm font-medium text-foreground hover:bg-foreground/10"
        aria-label="ניגודיות גבוהה"
        aria-pressed={highContrast}
      >
        ניגודיות
      </button>
    </section>
  );
}
