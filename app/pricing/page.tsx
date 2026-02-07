import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מחירון | Regulon",
};

export default function PricingPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">מחירון</h1>
        <p className="mt-6 text-muted">Content coming soon. Validation phase — no pricing on landing yet.</p>
      </div>
    </section>
  );
}
