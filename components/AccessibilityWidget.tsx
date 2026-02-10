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
  try {
    const v = window.localStorage.getItem(STORAGE_KEY_FONT);
    const n = v !== null ? Number.parseInt(v, 10) : NaN;
    return FONT_STEPS.includes(n as FontStep) ? (n as FontStep) : 100;
  } catch {
    return 100;
  }
}

function getStoredContrast(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  try {
    return window.localStorage.getItem(STORAGE_KEY_CONTRAST) === "1";
  } catch {
    return false;
  }
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
  try {
    window.localStorage.setItem(STORAGE_KEY_FONT, String(font));
    window.localStorage.setItem(STORAGE_KEY_CONTRAST, contrast ? "1" : "0");
  } catch {
    // localStorage unavailable (private mode, quota, disabled)
  }
}

const buttonClass =
  "rounded px-2 py-1 text-sm font-medium text-foreground hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background";

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
      setFontPercent(FONT_STEPS[i + 1]);
    }
  }, [fontPercent]);

  const decreaseFont = useCallback(() => {
    const i = FONT_STEPS.indexOf(fontPercent);
    if (i > 0) {
      setFontPercent(FONT_STEPS[i - 1]);
    }
  }, [fontPercent]);

  const toggleContrast = useCallback(() => {
    setHighContrast((prev) => !prev);
  }, []);

  return (
    <section
      className="fixed bottom-6 right-4 z-50 flex flex-col gap-1 rounded-lg border border-border bg-background p-2 shadow-md"
      aria-label="נגישות"
    >
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={decreaseFont}
          className={buttonClass}
          aria-label="הקטן טקסט"
        >
          A-
        </button>
        <button
          type="button"
          onClick={increaseFont}
          className={buttonClass}
          aria-label="הגדל טקסט"
        >
          A+
        </button>
      </div>
      <button
        type="button"
        onClick={toggleContrast}
        className={buttonClass}
        aria-label="ניגודיות גבוהה"
        aria-pressed={highContrast}
      >
        ניגודיות
      </button>
    </section>
  );
}
