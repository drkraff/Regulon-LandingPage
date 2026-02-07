import Link from "next/link";

const navLinkClass =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-primary hover:text-primary-bright"
        >
          Regulon
        </Link>
        <nav className="flex items-center gap-6" aria-label="תפריט ראשי">
          <Link href="/pricing" className={navLinkClass}>
            מחירון
          </Link>
          <Link href="/about" className={navLinkClass}>
            אודות
          </Link>
          <Link href="/contact" className={navLinkClass}>
            צור קשר
          </Link>
          <Link
            href="/#audit"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-bright"
          >
            התחל בדיקת התאמה
          </Link>
        </nav>
      </div>
    </header>
  );
}
