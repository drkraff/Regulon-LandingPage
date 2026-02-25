import { describe, it, expect, beforeEach, vi } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "@/app/api/waitlist/route";
import { resetRateLimitForTesting } from "@/lib/waitlist-rate-limit";

vi.mock("@/lib/db", () => ({
  ensureWaitlistTable: vi.fn().mockResolvedValue(undefined),
  getDbClient: vi.fn().mockReturnValue({
    execute: vi.fn().mockResolvedValue({ rows: [] }),
  }),
}));

const validBody = {
  fullName: "Test User",
  email: "test@example.com",
  phone: "",
  marketingOptIn: false,
  fax: "",
};

function createRequest(ip = "203.0.113.1"): NextRequest {
  return new NextRequest("http://localhost:3000/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(validBody),
  });
}

describe("POST /api/waitlist rate limiting", () => {
  beforeEach(() => {
    resetRateLimitForTesting();
  });

  it("should return 429 on 6th request from same IP within one minute", async () => {
    const ip = "198.51.100.1";
    for (let i = 0; i < 5; i++) {
      const res = await POST(createRequest(ip));
      expect(res.status).toBe(201);
    }
    const sixth = await POST(createRequest(ip));
    expect(sixth.status).toBe(429);
    const data = await sixth.json();
    expect(data).toHaveProperty("error");
    expect(typeof data.error).toBe("string");
  });

  it("should allow 5 requests from same IP", async () => {
    const ip = "192.0.2.1";
    for (let i = 0; i < 5; i++) {
      const res = await POST(createRequest(ip));
      expect(res.status).toBe(201);
    }
  });
});
