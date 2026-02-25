import { describe, it, expect, beforeEach } from "vitest";
import {
  checkRateLimit,
  resetRateLimitForTesting,
} from "@/lib/waitlist-rate-limit";

describe("waitlist rate limit", () => {
  beforeEach(() => {
    resetRateLimitForTesting();
  });

  it("should allow first 5 requests from same IP within window", () => {
    const ip = "192.168.1.1";
    let now = 0;
    for (let i = 0; i < 5; i++) {
      const result = checkRateLimit(ip, now);
      expect(result.allowed).toBe(true);
      now += 1000;
    }
  });

  it("should deny 6th request from same IP within same minute", () => {
    const ip = "192.168.1.1";
    let now = 0;
    for (let i = 0; i < 5; i++) {
      checkRateLimit(ip, now);
      now += 1000;
    }
    const result = checkRateLimit(ip, now);
    expect(result.allowed).toBe(false);
  });

  it("should allow request from same IP after window has passed", () => {
    const ip = "192.168.1.1";
    let now = 0;
    for (let i = 0; i < 5; i++) {
      checkRateLimit(ip, now);
      now += 1000;
    }
    const denied = checkRateLimit(ip, now);
    expect(denied.allowed).toBe(false);
    const afterWindow = 60_001;
    const result = checkRateLimit(ip, afterWindow);
    expect(result.allowed).toBe(true);
  });

  it("should treat different IPs independently", () => {
    let now = 0;
    for (let i = 0; i < 5; i++) {
      expect(checkRateLimit("1.2.3.4", now).allowed).toBe(true);
      now += 1000;
    }
    expect(checkRateLimit("1.2.3.4", now).allowed).toBe(false);
    expect(checkRateLimit("5.6.7.8", now).allowed).toBe(true);
  });

  it("should reset state when resetRateLimitForTesting is called", () => {
    const ip = "10.0.0.1";
    let now = 0;
    for (let i = 0; i < 5; i++) {
      checkRateLimit(ip, now);
      now += 1000;
    }
    expect(checkRateLimit(ip, now).allowed).toBe(false);
    resetRateLimitForTesting();
    expect(checkRateLimit(ip, now).allowed).toBe(true);
  });
});
