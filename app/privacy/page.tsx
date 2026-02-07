import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | Regulon",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground">מדיניות פרטיות</h1>
        <p className="mt-6 text-muted">Content coming soon. DPO / Data Protection contact will be included here.</p>
      </div>
    </section>
  );
}
