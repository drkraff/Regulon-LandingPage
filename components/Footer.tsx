import Link from "next/link";

const footerLinkClass =
  "text-sm text-muted transition-colors hover:text-foreground";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground/5">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Regulon — התאמת תיקי מוצר ו־Code 65 ליבואנים בישראל
          </p>
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
            aria-label="קישורי תחתית"
          >
            <Link href="/pricing" className={footerLinkClass}>
              מחירון
            </Link>
            <Link href="/about" className={footerLinkClass}>
              אודות
            </Link>
            <Link href="/contact" className={footerLinkClass}>
              צור קשר
            </Link>
            <Link href="/accessibility" className={footerLinkClass}>
              הצהרת נגישות
            </Link>
            <Link href="/privacy" className={footerLinkClass}>
              מדיניות פרטיות
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
