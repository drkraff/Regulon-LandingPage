/**
 * Result of a client-side Code 65 / Product File readiness check.
 */
export interface AuditResult {
  /** Whether the DoC/file is valid for Code 65. */
  valid: boolean;
  /** Human-readable summary (e.g. "Your DoC is not fully ready for Code 65. Missing: Hebrew Labeling, EMC Test Reports."). */
  message: string;
  /** Optional list of missing items when not fully ready. */
  missing?: string[];
}
