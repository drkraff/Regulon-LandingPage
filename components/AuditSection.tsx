"use client";

import { useState } from "react";
import { UploadArea } from "@/components/UploadArea";
import { ResultsPanel } from "@/components/ResultsPanel";
import { WaitlistBlock } from "@/components/WaitlistBlock";
import { stubCheckDoc } from "@/lib/stub-check-doc";
import type { AuditResult } from "@/lib/audit-types";

export function AuditSection() {
  const [result, setResult] = useState<AuditResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);

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
        <WaitlistBlock onSubmit={() => {}} />
      )}
    </div>
  );
}
