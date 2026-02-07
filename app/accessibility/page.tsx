import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות | Regulon",
};

export default function AccessibilityPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">הצהרת נגישות</h1>
        <p className="mt-6 text-muted">Content coming soon. Compliant with IS 5568.</p>
      </div>
    </section>
  );
}
