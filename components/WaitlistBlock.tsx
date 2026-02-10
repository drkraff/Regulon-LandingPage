"use client";

export interface WaitlistFormData {
  fullName: string;
  email: string;
  phone: string;
  marketingOptIn: boolean;
}

export interface WaitlistBlockProps {
  /** Called when user submits the waitlist form. */
  onSubmit: (data: WaitlistFormData) => void;
}

export function WaitlistBlock({ onSubmit }: WaitlistBlockProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: WaitlistFormData = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      marketingOptIn: (form.elements.namedItem("marketingOptIn") as HTMLInputElement)
        .checked,
    };
    onSubmit(data);
  };

  return (
    <section aria-label="Join waitlist" className="mt-8">
      <h3 className="text-xl font-semibold text-white">
        Join the waitlist
      </h3>
      <p className="mt-2 text-sm text-white/80">
        Get early access when we launch.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="waitlist-fullName" className="block text-sm font-medium text-white">
            Full Name
          </label>
          <input
            id="waitlist-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            aria-label="Full Name"
            className="mt-1 w-full max-w-md rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="waitlist-email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-label="Email"
            className="mt-1 w-full max-w-md rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="waitlist-phone" className="block text-sm font-medium text-white">
            Phone
          </label>
          <input
            id="waitlist-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-label="Phone"
            className="mt-1 w-full max-w-md rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="flex items-start gap-2">
          <input
            id="waitlist-marketing"
            name="marketingOptIn"
            type="checkbox"
            aria-label="Accept to receive news and marketing emails"
            className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10 text-accent focus:ring-accent"
          />
          <label htmlFor="waitlist-marketing" className="text-sm text-white/90">
            Accept to receive news and marketing emails
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/90"
        >
          Join waitlist
        </button>
      </form>
    </section>
  );
}
