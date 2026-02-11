const authorities = [
  { icon: "health_and_safety", name: "משרד הבריאות" },
  { icon: "architecture", name: "מכון התקנים" },
  { icon: "local_shipping", name: "רשות המסים - מכס" },
  { icon: "economy", name: "משרד הכלכלה" },
  { icon: "cell_tower", name: "משרד התקשורת" },
];

export function AuthoritiesCarousel() {
  return (
    <section className="border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-navy-900/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            עובדים בהתאמה מלאה לדרישות הרשויות
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {authorities.map((authority, index) => (
            <div
              key={`${authority.name}-${index}`}
              className="flex items-center gap-4 text-xl font-bold text-slate-600 dark:text-slate-400 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="material-icons-round text-3xl">{authority.icon}</span>
              <span className="whitespace-nowrap">{authority.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
