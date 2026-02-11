"use client";

const authorities = [
  { icon: "health_and_safety", name: "משרד הבריאות" },
  { icon: "architecture", name: "מכון התקנים" },
  { icon: "local_shipping", name: "רשות המסים - מכס" },
  { icon: "economy", name: "משרד הכלכלה" },
  { icon: "cell_tower", name: "משרד התקשורת" },
];

export function AuthoritiesCarousel() {
  return (
    <section className="border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-navy-900/50 py-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          עובדים בהתאמה מלאה לדרישות הרשויות
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll whitespace-nowrap flex items-center gap-16 py-2 px-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Render authorities 3 times for seamless loop */}
          {[...authorities, ...authorities, ...authorities].map((authority, index) => (
            <div
              key={`${authority.name}-${index}`}
              className="flex items-center gap-4 text-xl font-bold text-slate-600 dark:text-slate-400"
            >
              <span className="material-icons-round text-3xl">{authority.icon}</span>
              <span>{authority.name}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-navy-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-navy-900 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
