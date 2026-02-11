import Link from "next/link";
import { AuditSection } from "@/components/AuditSection";
import { ScrollToAuditLink } from "@/components/ScrollToAuditLink";
import { HeroDashboard } from "@/components/HeroDashboard";
import { FloatingCards } from "@/components/FloatingCards";
import { SupportButton } from "@/components/SupportButton";
import { AuthoritiesCarousel } from "@/components/AuthoritiesCarousel";

export default function Home() {
  return (
    <>
      <section id="audit" className="bg-primary py-16 text-white sm:py-20 pt-32">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Check Your Product File Readiness
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Drop your DoC or Product File here. No signup required. Processing is done on your device.
          </p>
          <div className="mt-10">
            <AuditSection />
          </div>
        </div>
      </section>

      <section id="hero" className="relative pt-32 pb-16 lg:pt-48 lg:pb-16 overflow-hidden border-b border-border bg-background-light">
        <div className="absolute inset-0 z-0 bg-pattern pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-16 lg:mb-0 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent text-slate-800 dark:text-accent mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-bold tracking-wide">מוכן לרפורמת 2026</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-black leading-tight mb-6">
                <span className="text-white dark:text-white" style={{ textShadow: '2px 2px 4px rgba(10, 25, 41, 0.3), 0 0 8px rgba(10, 25, 41, 0.2)' }}>אוטומציה מלאה של </span>
                <span className="text-primary">
                  תיקי מוצר
                </span>
                <span className="text-white dark:text-white" style={{ textShadow: '2px 2px 4px rgba(10, 25, 41, 0.3), 0 0 8px rgba(10, 25, 41, 0.2)' }}> ורגולציה</span>
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed font-medium">
                הפלטפורמה הראשונה בישראל המייצרת הצהרות תאימות ומנהלת את תהליכי היבוא שלך באופן אוטומטי בעזרת בינה מלאכותית מתקדמת.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ScrollToAuditLink className="bg-[#0a1929] dark:bg-white text-white dark:text-[#0a1929] hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2">
                  התחל ניסיון חינם
                  <span className="material-icons-round transform rotate-180">arrow_right_alt</span>
                </ScrollToAuditLink>
                <a
                  href="#"
                  className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white hover:border-primary hover:text-primary font-bold py-4 px-8 rounded-xl transition-all flex justify-center items-center gap-2 backdrop-blur-sm"
                >
                  <span className="material-icons-round text-primary">play_circle</span>
                  צפה בהדגמה
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <span className="material-icons-round text-accent-dark dark:text-accent text-lg">check_circle</span>
                  <span>ללא כרטיס אשראי</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-icons-round text-accent-dark dark:text-accent text-lg">check_circle</span>
                  <span>תאימות לתקן ישראלי</span>
                </div>
              </div>
            </div>
            <div className="relative perspective-container h-[500px] flex items-center justify-center lg:justify-end">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/30 via-navy-900/10 to-transparent blur-3xl rounded-full opacity-60"></div>
              <HeroDashboard />
              <FloatingCards />
            </div>
          </div>
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

      <AuthoritiesCarousel />

      <section id="features" className="py-20 relative bg-white dark:bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-black text-[#0a1929] dark:text-white mb-4">
              כל מה שצריך ליבוא בטוח ומהיר
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium">
              מערכת Regulon מרכזת את כל דרישות הרגולציה תחת קורת גג אחת, עם טכנולוגיה שחוסכת זמן ומצמצמת טעויות אנוש.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto gap-6">
            <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white dark:bg-navy-800 rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 border border-slate-100 dark:border-white/5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-round text-3xl">document_scanner</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a1929] dark:text-white mb-3">חילוץ נתונים חכם</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-8 font-medium">
                  המנוע שלנו קורא מסמכי PDF ותמונות, מזהה אוטומטית פרמטרים קריטיים ובונה את תיק המוצר ללא התערבות ידנית.
                </p>
                <div className="bg-white dark:bg-navy-800 rounded-lg p-4 shadow-inner border border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-mono">
                    <span>Scanning: CERT_102.pdf</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[98%] rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/30 w-full h-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="bg-accent/20 dark:bg-accent/10 text-slate-800 dark:text-accent border border-accent/30 text-xs px-2 py-1 rounded font-bold">דגם: A450</span>
                    <span className="bg-accent/20 dark:bg-accent/10 text-slate-800 dark:text-accent border border-accent/30 text-xs px-2 py-1 rounded font-bold">יצרן: TechCorp</span>
                    <span className="bg-accent/20 dark:bg-accent/10 text-slate-800 dark:text-accent border border-accent/30 text-xs px-2 py-1 rounded font-bold">תאריך: 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-[#0a1929] text-white rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between h-full border border-[#11263c] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-navy-900 transition-colors">
                  <span className="material-icons-round text-accent group-hover:text-[#0a1929]">label</span>
                </div>
                <h3 className="text-xl font-bold mb-2">תוויות בעברית</h3>
                <p className="text-sm text-slate-300 mb-4 font-medium">יצירת מדבקות תקן מוכנות להדפסה בלחיצה אחת.</p>
              </div>
              <div className="relative z-10 bg-white text-[#0a1929] p-3 rounded text-[10px] font-mono leading-tight shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform origin-bottom-left border-l-4 border-primary">
                <div className="font-bold border-b border-black pb-1 mb-1">יבואן: רגולון בע&quot;מ</div>
                <div>כתובת: הברזל 10, ת&quot;א</div>
                <div>ארץ ייצור: סין</div>
                <div className="mt-1 flex justify-between items-end">
                  <span className="text-[8px]">דגם 445</span>
                  <span className="material-icons-round text-base">qr_code_2</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center mb-4 border border-orange-100 dark:border-orange-900/30 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <span className="material-icons-round">lock_person</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a1929] dark:text-white mb-2">כספת רגולטורית</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">אחסון מאובטח ל-7 שנים לפי דרישות המכס והתקנים.</p>
            </div>
            <div className="md:col-span-1 lg:col-span-1 row-span-1 bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-glow mb-4 group-hover:scale-110 transition-transform">
                <span className="font-bold text-lg">2026</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a1929] dark:text-white mb-2">מוכנות לרפורמה</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">המערכת מתעדכנת אוטומטית עם כל שינוי חקיקה חדש.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-1 row-span-1 bg-white dark:bg-background-dark border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm flex flex-col justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-black text-primary group-hover:text-primary-dark transition-colors">15K+</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">תיקים אושרו</div>
                </div>
                <span className="material-icons-round text-slate-300 text-4xl group-hover:text-accent transition-colors">inventory_2</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-accent h-1.5 rounded-full shadow-glow-accent transition-all duration-1000 group-hover:w-[95%]" style={{ width: "85%" }}></div>
              </div>
              <div className="mt-2 text-xs text-slate-600 dark:text-slate-400 text-left font-semibold" dir="ltr">85% Faster processing</div>
            </div>
          </div>
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
            <Link href="/accessibility" className="font-medium text-primary hover:underline">
              הצהרת נגישות (IS 5568)
            </Link>
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              מדיניות פרטיות (תיקון 13)
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

      <SupportButton />
    </>
  );
}
