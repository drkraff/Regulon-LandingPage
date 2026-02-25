import { NextResponse } from "next/server";
import { ensureWaitlistTable, getDbClient } from "@/lib/db";

export interface WaitlistEntry {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  marketingOptIn: boolean;
  createdAt: string;
}

export async function GET() {
  try {
    await ensureWaitlistTable();
    const client = getDbClient();
    const rs = await client.execute(
      "SELECT id, fullName, email, phone, marketingOptIn, createdAt FROM waitlist_signups ORDER BY createdAt DESC"
    );
    const rows: WaitlistEntry[] = rs.rows.map((row) => {
      const raw = String(row.createdAt);
      const iso = raw.includes("T")
        ? raw.endsWith("Z")
          ? raw
          : `${raw}Z`
        : `${raw.replace(" ", "T")}Z`;
      return {
        id: Number(row.id),
        fullName: String(row.fullName),
        email: String(row.email),
        phone: row.phone !== null ? String(row.phone) : null,
        marketingOptIn: Number(row.marketingOptIn) === 1,
        createdAt: iso,
      };
    });
    return NextResponse.json(rows);
  } catch (e) {
    console.error("Admin waitlist fetch failed:", e);
    return NextResponse.json(
      { error: "Could not load waitlist" },
      { status: 500 }
    );
  }
}
