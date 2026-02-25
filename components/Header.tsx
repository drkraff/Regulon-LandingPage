import Link from "next/link";
import { ScrollToAuditLink } from "./ScrollToAuditLink";
import { siteConfig } from "@/lib/site-config";

const navLinkClass =
  "text-sm font-bold text-white transition-colors hover:text-white/90";

const ctaButtonClass =
  "bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-5 rounded-lg transition-all shadow-glow flex items-center gap-2 border border-primary-dark/20";

function isAuditCta(href: string): boolean {
  return href === "/#audit" || href.endsWith("#audit");
}

export default function Header() {
  const { brand, nav } = siteConfig;
  const cta = nav.primaryCta;

  return (
    <header className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <span
                className="material-icons-round text-white text-2xl"
                aria-hidden="true"
              >
                {brand.logoIcon}
              </span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-[#0a1929]">
              {brand.siteName}
            </span>
          </Link>
          <nav
            className="hidden md:flex flex-row-reverse gap-8 bg-primary rounded-lg px-5 py-2.5 shadow-glow"
            aria-label={nav.ariaLabel}
          >
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {isAuditCta(cta.href) ? (
              <ScrollToAuditLink className={ctaButtonClass}>
                <span>{cta.label}</span>
                <span className="material-icons-round text-sm transform rotate-180">
                  arrow_right_alt
                </span>
              </ScrollToAuditLink>
            ) : (
              <Link href={cta.href} className={ctaButtonClass}>
                <span>{cta.label}</span>
                <span className="material-icons-round text-sm transform rotate-180">
                  arrow_right_alt
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
