/**
 * In-memory rate limiter for POST /api/waitlist: 5 requests per IP per minute.
 * Resets after 60 seconds. For serverless, each instance has its own state.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

interface WindowState {
  count: number;
  windowStart: number;
}

const store = new Map<string, WindowState>();

export interface RateLimitResult {
  allowed: boolean;
}

/**
 * Returns whether the request from this IP is allowed under the rate limit.
 * @param ip - Client IP (e.g. from x-forwarded-for or x-real-ip).
 * @param nowMs - Optional timestamp for tests; defaults to Date.now().
 */
export function checkRateLimit(
  ip: string,
  nowMs?: number
): RateLimitResult {
  const now = nowMs ?? Date.now();
  const key = ip.trim() || "unknown";
  const current = store.get(key);

  if (current === undefined) {
    store.set(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (now - current.windowStart >= WINDOW_MS) {
    store.set(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false };
  }

  current.count += 1;
  return { allowed: true };
}

/**
 * Clears rate limit state. For testing only; do not use in production code.
 */
export function resetRateLimitForTesting(): void {
  store.clear();
}
