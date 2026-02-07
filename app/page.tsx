import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="audit" className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Check Your Product File Readiness
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Drop your DoC or Product File here. No signup required. Processing is done on your device.
          </p>
          <div className="mt-10 rounded-xl border-2 border-dashed border-white/40 bg-white/10 py-16 px-6">
            <p className="text-white/80">[Upload area — Phase 3]</p>
          </div>
        </div>
      </section>

      <section id="hero" className="border-b border-border bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-accent">
            Automated Compliance for Israeli Importers
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Generate SII-Compliant Product Files in Minutes, Not Weeks
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Leverage the European Directives Track (Code 65) to bypass physical testing. Automate your Hebrew labeling and compliance verification instantly.
          </p>
          <div className="mt-10">
            <Link
              href="#audit"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-bright"
            >
              Start Your Compliance Audit
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            Compliant with Amendment 13 &amp; IS 5568
          </p>
        </div>
      </section>

      <section id="problem" className="border-b border-border bg-foreground/5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            The Problem
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-primary">Pain</h3>
              <p className="mt-2 text-muted">5–6 week lead times for standard SII testing.</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Agitation</h3>
              <p className="mt-2 text-muted">Risk of fines, customs seizures, and labeling errors under the 2025/2026 regime.</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent">Solve</h3>
              <p className="mt-2 text-muted">Regulon&apos;s approach: Code 65 readiness and automated Product Files.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Features
          </h2>
          <ul className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="text-accent font-medium shrink-0">1.</span>
              <div>
                <strong className="text-foreground">Automated Product Files</strong>
                <p className="text-muted">Generate legal documents required for SII.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-medium shrink-0">2.</span>
              <div>
                <strong className="text-foreground">Hebrew Labeling Engine</strong>
                <p className="text-muted">Translate and adapt European labels to Israeli standards.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-accent font-medium shrink-0">3.</span>
              <div>
                <strong className="text-foreground">Family of Models Management</strong>
                <p className="text-muted">Group related product variations into a single file.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="trust" className="border-b border-border bg-foreground/5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Trust &amp; Security
          </h2>
          <p className="mt-4 text-muted">
            Data isolation with Cryptographic Tenancy (ALE). Your files are processed locally; we do not store uploaded documents.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/accessibility" className="font-medium text-primary-bright hover:underline">
              Accessibility Statement (IS 5568)
            </Link>
            <Link href="/privacy" className="font-medium text-primary-bright hover:underline">
              Privacy Policy (Amendment 13)
            </Link>
          </div>
        </div>
      </section>

      <section id="social-proof" className="border-b border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Social Proof
          </h2>
          <p className="mt-4 text-muted">
            [Placeholder — content coming later]
          </p>
        </div>
      </section>

    </>
  );
}
