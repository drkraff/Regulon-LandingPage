import { NextRequest, NextResponse } from "next/server";
import { waitlistRequestBodySchema } from "@/lib/waitlist-schema";
import { ensureWaitlistTable, getDbClient } from "@/lib/db";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = waitlistRequestBodySchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message = Object.values(first).flat().join(" ") || "Validation failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { fullName, email, phone, marketingOptIn, fax } = parsed.data;

  if (fax !== undefined && fax.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const phoneVal = phone === "" ? null : phone;

  try {
    await ensureWaitlistTable();
    const client = getDbClient();
    await client.execute({
      sql: `INSERT INTO waitlist_signups (fullName, email, phone, marketingOptIn)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(email) DO UPDATE SET
              fullName = excluded.fullName,
              phone = excluded.phone,
              marketingOptIn = excluded.marketingOptIn`,
      args: [fullName, email, phoneVal ?? null, marketingOptIn ? 1 : 0],
    });
  } catch (e) {
    console.error("Waitlist insert failed:", e);
    return NextResponse.json(
      { error: "Could not save signup" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
