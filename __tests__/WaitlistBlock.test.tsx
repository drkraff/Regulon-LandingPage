import { describe, it, expect, vi } from "vitest";
import { render, within, fireEvent } from "@testing-library/react";
import { WaitlistBlock } from "@/components/WaitlistBlock";

function renderWaitlistBlock() {
  const { container } = render(<WaitlistBlock onSubmit={() => {}} />);
  return { container };
}

const WAITLIST_SECTION_ARIA = "הצטרף לרשימת המתנה";

describe("WaitlistBlock", () => {
  it("should show waitlist CTA headline", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    expect(section).toBeInTheDocument();
    expect(
      within(section as HTMLElement).getByRole("heading", {
        name: WAITLIST_SECTION_ARIA,
      })
    ).toBeInTheDocument();
  });

  it("should render form with Full Name field", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    const nameInput = within(section as HTMLElement).getByRole("textbox", {
      name: /שם מלא/,
    });
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toBeRequired();
  });

  it("should render form with Email field", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    const emailInput = within(section as HTMLElement).getByRole("textbox", {
      name: /אימייל/,
    });
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toBeRequired();
  });

  it("should render form with optional Phone field", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    const phoneInput = within(section as HTMLElement).getByRole("textbox", {
      name: /טלפון/,
    });
    expect(phoneInput).toHaveAttribute("type", "tel");
    expect(phoneInput).not.toBeRequired();
  });

  it("should render marketing opt-in checkbox unchecked by default", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    const checkbox = within(section as HTMLElement).getByRole("checkbox", {
      name: /אני מסכים לקבל חדשות ואימיילים שיווקיים/,
    });
    expect(checkbox).not.toBeChecked();
  });

  it("should render submit button", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    const submit = within(section as HTMLElement).getByRole("button", {
      name: /הצטרף לרשימת המתנה/,
    });
    expect(submit).toBeInTheDocument();
  });

  it("should call onSubmit with form data when user submits", () => {
    const onSubmit = vi.fn();
    const { container } = render(<WaitlistBlock onSubmit={onSubmit} />);
    const section = container.querySelector(
      `section[aria-label="${WAITLIST_SECTION_ARIA}"]`
    );
    const sectionEl = section as HTMLElement;
    const nameInput = within(sectionEl).getByRole("textbox", {
      name: /שם מלא/,
    });
    const emailInput = within(sectionEl).getByRole("textbox", {
      name: /אימייל/,
    });
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
    fireEvent.click(
      within(sectionEl).getByRole("button", { name: /הצטרף לרשימת המתנה/ })
    );
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "",
      marketingOptIn: false,
      fax: "",
    });
  });
});
