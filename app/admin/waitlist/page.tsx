"use client";

import { useEffect, useState } from "react";
import type { WaitlistEntry } from "@/app/api/admin/waitlist/route";

function formatLocalDateTime(isoUtc: string): string {
  try {
    const date = new Date(isoUtc);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return isoUtc;
  }
}

export default function AdminWaitlistPage() {
  const [entries, setEntries] = useState<WaitlistEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/waitlist", { credentials: "include" })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status === 401 ? "Authentication required" : "Failed to load");
        }
        return res.json();
      })
      .then((data: WaitlistEntry[]) => {
        setEntries(data);
        setError(null);
      })
      .catch((e) => {
        setError(e instanceof Error ? e.message : "Failed to load");
        setEntries(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-6">רשימת המתנה</h1>
        <p className="text-muted">טוען...</p>
      </div>
    );
  }

  if (error !== null) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-6">רשימת המתנה</h1>
        <p className="text-alert" role="alert">
          {error}
        </p>
      </div>
    );
  }

  if (entries === null || entries.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-6">רשימת המתנה</h1>
        <p className="text-muted">אין רשומות עדיין.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-6">רשימת המתנה</h1>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/20">
        <table className="min-w-full text-right text-sm">
          <thead className="bg-slate-50 dark:bg-slate-900/50">
            <tr>
              <th className="px-4 py-3 font-semibold text-foreground">#</th>
              <th className="px-4 py-3 font-semibold text-foreground">שם מלא</th>
              <th className="px-4 py-3 font-semibold text-foreground">אימייל</th>
              <th className="px-4 py-3 font-semibold text-foreground">טלפון</th>
              <th className="px-4 py-3 font-semibold text-foreground">שיווק</th>
              <th className="px-4 py-3 font-semibold text-foreground">תאריך ושעה (מקומי)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-white/10">
            {entries.map((e) => (
              <tr
                key={e.id}
                className="bg-white dark:bg-slate-900/30 hover:bg-slate-50 dark:hover:bg-slate-800/30"
              >
                <td className="px-4 py-3 text-muted">{e.id}</td>
                <td className="px-4 py-3 text-foreground">{e.fullName}</td>
                <td className="px-4 py-3 text-foreground">{e.email}</td>
                <td className="px-4 py-3 text-foreground">{e.phone ?? "—"}</td>
                <td className="px-4 py-3 text-foreground">
                  {e.marketingOptIn ? "כן" : "לא"}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {formatLocalDateTime(e.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
