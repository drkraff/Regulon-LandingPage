"use client";

export function SupportButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        type="button"
        className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg shadow-primary/30 transition-all transform hover:scale-110 group relative flex items-center gap-0 hover:gap-3 hover:pr-6 hover:pl-4 overflow-hidden h-14 w-14 hover:w-auto"
        aria-label="מומחה רגולציה"
      >
        <span className="material-icons-round text-2xl">support_agent</span>
        <span className="whitespace-nowrap font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-auto">
          מומחה רגולציה
        </span>
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
        </span>
      </button>
    </div>
  );
}
