"use client";

export function FloatingCards() {
  return (
    <>
      <div className="absolute -right-12 bottom-12 z-20 floating-card bg-white dark:bg-navy-800 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-white/10 w-56 transform rotate-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-500 uppercase">ROI חישוב מהיר</span>
          <span className="material-icons-round text-accent text-base">savings</span>
        </div>
        <div className="flex items-end gap-1 mb-1">
          <span className="text-3xl font-black text-[#0a1929] dark:text-white">85%</span>
          <span className="text-sm font-bold text-accent-dark dark:text-accent mb-1.5">חיסכון</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-white/10 h-1.5 rounded-full mb-2">
          <div className="bg-accent h-1.5 rounded-full w-[85%]"></div>
        </div>
        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
          צמצום זמן טיפול בתיק מ-5 ימים ל-4 שעות
        </div>
      </div>
      <div className="absolute -right-8 top-10 floating-card bg-white dark:bg-navy-800 p-3 rounded-lg shadow-xl border border-slate-200 dark:border-white/10 z-20 w-48">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 dark:bg-accent/10 flex items-center justify-center text-accent-dark dark:text-accent">
            <span className="material-icons-round text-sm">g_translate</span>
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">תרגום תווית</div>
            <div className="text-[10px] text-slate-600 font-medium">הושלם (0.4 שניות)</div>
          </div>
        </div>
      </div>
      <div className="absolute -left-6 bottom-20 floating-card-delayed bg-navy-900 dark:bg-black text-white p-3 rounded-lg shadow-xl border border-slate-700 z-20">
        <div className="flex items-center gap-2">
          <span className="material-icons-round text-accent text-sm">verified_user</span>
          <div className="text-xs font-bold">תאימות 100%</div>
        </div>
      </div>
    </>
  );
}
