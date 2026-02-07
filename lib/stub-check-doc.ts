import type { AuditResult } from "./audit-types";

/**
 * Stub validator for Phase 3: returns a fixed result for any PDF.
 * Replace with real client-side DoC parsing later.
 */
export async function stubCheckDoc(_file: File): Promise<AuditResult> {
  const missing = ["Hebrew Labeling", "EMC Test Reports"];
  return {
    valid: missing.length === 0,
    message:
      "Your DoC is not fully ready for Code 65. Missing: Hebrew Labeling, EMC Test Reports.",
    missing,
  };
}
