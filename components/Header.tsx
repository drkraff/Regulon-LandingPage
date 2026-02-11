import Link from "next/link";
import { ScrollToAuditLink } from "./ScrollToAuditLink";

const navLinkClass =
  "text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors hover:text-primary";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="material-icons-round text-white text-2xl">shield</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-[#0a1929] dark:text-white">
              Regulon
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8 space-x-reverse" aria-label="תפריט ראשי">
            <Link href="/pricing" className={navLinkClass}>
              תמחור
            </Link>
            <Link href="/about" className={navLinkClass}>
              אודות
            </Link>
            <Link href="/contact" className={navLinkClass}>
              צור קשר
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ScrollToAuditLink
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-5 rounded-lg transition-all shadow-glow flex items-center gap-2 border border-primary-dark/20"
            >
              <span>נסה בחינם</span>
              <span className="material-icons-round text-sm transform rotate-180">arrow_right_alt</span>
            </ScrollToAuditLink>
          </div>
        </div>
      </div>
    </header>
  );
}
