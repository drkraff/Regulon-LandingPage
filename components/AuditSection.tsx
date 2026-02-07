"use client";

import { useState } from "react";
import { UploadArea } from "@/components/UploadArea";
import { ResultsPanel } from "@/components/ResultsPanel";
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
    <div>
      <UploadArea onFileSelect={handleFileSelect} />
      {isChecking && (
        <p className="mt-6 text-center text-white/80">Checking…</p>
      )}
      {result !== null && !isChecking && (
        <ResultsPanel result={result} />
      )}
    </div>
  );
}
