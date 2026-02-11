"use client";

export function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg hero-dashboard bg-white/90 dark:bg-navy-900/80 backdrop-blur-xl border border-white/60 dark:border-white/20 rounded-2xl shadow-glass p-6 group" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
      <div className="absolute -top-3 left-6 z-30 bg-sage text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform transition-transform group-hover:scale-105 border border-white/20">
        <span className="material-icons-round text-sm">verified_user</span>
        <span className="text-xs font-bold tracking-wide">SAFE &amp; COMPLIANT</span>
      </div>
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-alert"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-accent"></div>
        </div>
        <div className="text-xs font-mono text-slate-500 font-medium">regulon_dashboard.exe</div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-black/30 rounded-lg border border-slate-200 dark:border-white/10">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded flex items-center justify-center text-primary dark:text-blue-300">
            <span className="material-icons-round">description</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100">הצהרת תאימות (DOC)</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">הועלה לפני 2 דקות • PDF</div>
          </div>
          <span className="material-icons-round text-accent-dark dark:text-accent">check_circle</span>
        </div>
        <div className="flex justify-center py-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
          </div>
          <div className="relative z-10 bg-primary/10 text-primary-dark dark:text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-2 bg-white dark:bg-navy-900">
            <span className="material-icons-round text-sm animate-spin">settings</span>
            מעבד נתונים...
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/30 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center text-primary-dark dark:text-primary">
            <span className="material-icons-round">folder_special</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-[#0a1929] dark:text-white">תיק מוצר (Tik Mutzar)</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">נוצר אוטומטית • מוכן להגשה</div>
          </div>
          <div className="bg-accent text-[#0a1929] text-xs font-bold px-2 py-1 rounded">מאושר</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-2 bg-slate-50 dark:bg-white/5 rounded border border-slate-200 dark:border-white/10">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">תקן</div>
            <div className="text-sm font-mono font-bold text-slate-800 dark:text-slate-200">ISO 13485</div>
          </div>
          <div className="p-2 bg-red-50 dark:bg-red-900/10 rounded border border-red-100 dark:border-red-900/20">
            <div className="text-[10px] text-alert uppercase tracking-wider font-bold">סיכון</div>
            <div className="text-sm font-mono font-bold text-alert">Class II (Med)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
