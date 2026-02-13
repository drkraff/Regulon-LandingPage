"use client";

import { useState } from "react";
import { UploadArea } from "@/components/UploadArea";
import { ResultsPanel } from "@/components/ResultsPanel";
import { WaitlistBlock } from "@/components/WaitlistBlock";
import type { WaitlistFormData } from "@/components/WaitlistBlock";
import { stubCheckDoc } from "@/lib/stub-check-doc";
import type { AuditResult } from "@/lib/audit-types";

type WaitlistSubmitStatus = "idle" | "loading" | "success" | "error";

export function AuditSection() {
  const [result, setResult] = useState<AuditResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [waitlistStatus, setWaitlistStatus] = useState<WaitlistSubmitStatus>("idle");
  const [waitlistError, setWaitlistError] = useState<string | null>(null);

  const handleWaitlistSubmit = async (data: WaitlistFormData) => {
    setWaitlistStatus("loading");
    setWaitlistError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone ?? "",
          marketingOptIn: data.marketingOptIn,
          fax: data.fax ?? "",
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        setWaitlistError(
          typeof j.error === "string" ? j.error : "Something went wrong"
        );
        setWaitlistStatus("error");
        return;
      }
      setWaitlistStatus("success");
    } catch {
      setWaitlistError("Network error");
      setWaitlistStatus("error");
    }
  };

  const handleFileSelect = async (file: File | null) => {
    if (file === null) {
      setResult(null);
      return;
    }
    setIsChecking(true);
    setResult(null);
    try {
      const auditResult = await stubCheckDoc(file);
      setResult(auditResult);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="space-y-6">
      <UploadArea onFileSelect={handleFileSelect} />
      {isChecking && (
        <div className="glass-panel rounded-xl shadow-glass-sm p-6 border border-slate-200 dark:border-white/20">
          <div className="flex items-center justify-center gap-3">
            <span className="material-icons-round text-primary animate-spin">settings</span>
            <p className="text-base font-bold text-[#0a1929] dark:text-white">
              בודק את הקובץ...
            </p>
          </div>
        </div>
      )}
      {result !== null && !isChecking && (
        <ResultsPanel result={result} />
      )}
      {!isChecking && result === null && (
        <>
          {waitlistStatus === "success" ? (
            <section
              aria-label="תודה על ההצטרפות"
              className="mt-8 rounded-xl p-6 border border-slate-200 dark:border-white/20 bg-white dark:bg-slate-900 shadow-md"
              dir="rtl"
            >
              <p className="text-lg font-medium text-slate-900 dark:text-slate-100 text-right">
                תודה! נרשמת בהצלחה לרשימת המתנה.
              </p>
            </section>
          ) : (
            <>
              <WaitlistBlock
                onSubmit={handleWaitlistSubmit}
                isSubmitting={waitlistStatus === "loading"}
              />
              {waitlistStatus === "error" && waitlistError !== null && (
                <p
                  className="mt-2 text-sm text-alert text-right"
                  role="alert"
                >
                  {waitlistError}
                </p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
