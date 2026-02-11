import Link from "next/link";

const footerLinkClass =
  "text-sm text-muted-foreground font-medium transition-colors hover:text-primary";

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md">
                <span className="material-icons-round text-white text-xl">shield</span>
              </div>
              <span className="font-display font-bold text-xl text-[#0a1929] dark:text-white">
                Regulon
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs mb-6 font-medium">
              פלטפורמת ה-SaaS המובילה בישראל לניהול רגולציה, יבוא ותקינה. אנחנו הופכים בירוקרטיה ליתרון תחרותי.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-500 hover:text-primary transition-colors"
                aria-label="פייסבוק"
              >
                <span className="material-icons-round">facebook</span>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-primary transition-colors"
                aria-label="יוטיוב"
              >
                <span className="material-icons-round">smart_display</span>
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-primary transition-colors"
                aria-label="אימייל"
              >
                <span className="material-icons-round">email</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[#0a1929] dark:text-white mb-4">מוצר</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <Link href="/pricing" className={footerLinkClass}>
                  מחירון
                </Link>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  אינטגרציות
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  עדכוני גרסה
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#0a1929] dark:text-white mb-4">משאבים</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a href="#" className={footerLinkClass}>
                  בלוג רגולציה
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  מדריכי יבוא
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  מרכז עזרה
                </a>
              </li>
              <li>
                <a href="#" className={footerLinkClass}>
                  API למפתחים
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#0a1929] dark:text-white mb-4">חברה</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <Link href="/about" className={footerLinkClass}>
                  אודותינו
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  צור קשר
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={footerLinkClass}>
                  הצהרת נגישות
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={footerLinkClass}>
                  מדיניות פרטיות
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-right font-medium">
            © 2024 Regulon Ltd. כל הזכויות שמורות. תל אביב, ישראל.
          </div>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <Link href="/privacy" className="hover:text-primary">
              מדיניות פרטיות
            </Link>
            <span className="text-slate-600 dark:text-slate-400">
              אבטחת מידע
            </span>
            <Link href="/accessibility" className="hover:text-primary">
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
