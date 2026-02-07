"use client";

import type { AuditResult } from "@/lib/audit-types";

export interface ResultsPanelProps {
  result: AuditResult;
}

export function ResultsPanel({ result }: ResultsPanelProps) {
  const isError = !result.valid;
  return (
    <section
      aria-label="Results"
      className={`mt-6 rounded-xl border px-6 py-4 ${
        isError
          ? "border-alert bg-alert/10 text-alert"
          : "border-accent bg-accent/10 text-foreground"
      }`}
    >
      <p className="font-medium">{result.message}</p>
    </section>
  );
}
