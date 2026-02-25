import { Fragment } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const footerLinkClass =
  "text-sm text-muted-foreground font-medium transition-colors hover:text-primary";

export default function Footer() {
  const { brand, footer } = siteConfig;

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="material-icons-round text-white text-xl">
                  {brand.logoIcon}
                </span>
              </div>
              <span className="font-display font-bold text-xl text-[#0a1929]">
                {brand.siteName}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mb-6 font-medium">
              {footer.tagline}
            </p>
            <div className="flex gap-4">
              {footer.social.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="text-slate-500 hover:text-primary transition-colors"
                  aria-label={s.label}
                >
                  <span className="material-icons-round">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-[#0a1929] dark:text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
                {col.links.map((link, i) => (
                  <li key={`${col.title}-${link.label}-${i}`}>
                    {link.href.startsWith("/") ? (
                      <Link href={link.href} className={footerLinkClass}>
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className={footerLinkClass}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-right font-medium">
            {footer.bottom.copyright}
          </div>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
            {footer.bottom.links?.map((link, i) => (
              <Fragment key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
                {i < (footer.bottom.links?.length ?? 0) - 1 && (
                  <span className="text-slate-600 dark:text-slate-400">
                    אבטחת מידע
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
