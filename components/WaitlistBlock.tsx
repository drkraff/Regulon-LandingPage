"use client";

export interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
  marketingOptIn: boolean;
  /** Honeypot: sent to API; server rejects if non-empty. */
  fax?: string;
}

export interface WaitlistBlockProps {
  /** Called when user submits the waitlist form. */
  onSubmit: (data: WaitlistFormData) => void | Promise<void>;
  /** When true, submit button is disabled (e.g. request in flight). */
  isSubmitting?: boolean;
}

export function WaitlistBlock({ onSubmit, isSubmitting = false }: WaitlistBlockProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: WaitlistFormData = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      marketingOptIn: (form.elements.namedItem("marketingOptIn") as HTMLInputElement)
        .checked,
      fax: (form.elements.namedItem("fax") as HTMLInputElement | null)?.value ?? "",
    };
    void onSubmit(data);
  };

  return (
    <section aria-label="הצטרף לרשימת המתנה" className="mt-8" dir="rtl">
      <h3 className="text-xl font-semibold text-white text-right">
        הצטרף לרשימת המתנה
      </h3>
      <p className="mt-2 text-sm text-white/80 text-right">
        קבל גישה מוקדמת כשאנחנו משיקים.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4" dir="rtl">
        <div className="hidden absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="waitlist-fax">Fax</label>
          <input id="waitlist-fax" name="fax" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <label htmlFor="waitlist-fullName" className="block text-sm font-medium text-white text-right">
            שם מלא <span className="text-accent">*</span>
          </label>
          <input
            id="waitlist-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            aria-label="שם מלא"
            dir="rtl"
            className="mt-1 w-full max-w-md rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-right"
          />
        </div>
        <div>
          <label htmlFor="waitlist-email" className="block text-sm font-medium text-white text-right">
            אימייל <span className="text-accent">*</span>
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-label="אימייל"
            dir="ltr"
            className="mt-1 w-full max-w-md rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="waitlist-phone" className="block text-sm font-medium text-white text-right">
            טלפון
          </label>
          <input
            id="waitlist-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-label="טלפון"
            dir="ltr"
            className="mt-1 w-full max-w-md rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="flex items-start gap-2 flex-row-reverse">
          <input
            id="waitlist-marketing"
            name="marketingOptIn"
            type="checkbox"
            aria-label="אני מסכים לקבל חדשות ואימיילים שיווקיים"
            className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-accent focus:ring-accent"
          />
          <label htmlFor="waitlist-marketing" className="text-sm text-white/90 text-right">
            אני מסכים לקבל חדשות ואימיילים שיווקיים
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "שולח..." : "הצטרף לרשימת המתנה"}
        </button>
      </form>
    </section>
  );
}
