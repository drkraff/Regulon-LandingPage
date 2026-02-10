import { describe, it, expect, vi } from "vitest";
import { render, within, fireEvent } from "@testing-library/react";
import { WaitlistBlock } from "@/components/WaitlistBlock";

function renderWaitlistBlock() {
  const { container } = render(<WaitlistBlock onSubmit={() => {}} />);
  return { container };
}

describe("WaitlistBlock", () => {
  it("should show waitlist CTA headline", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    expect(section).toBeInTheDocument();
    expect(within(section as HTMLElement).getByRole("heading", { name: /join the waitlist/i })).toBeInTheDocument();
  });

  it("should render form with Full Name field", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    const nameInput = within(section as HTMLElement).getByRole("textbox", {
      name: /full name/i,
    });
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toBeRequired();
  });

  it("should render form with Email field", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    const emailInput = within(section as HTMLElement).getByRole("textbox", {
      name: /^email$/i,
    });
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toBeRequired();
  });

  it("should render form with optional Phone field", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    const phoneInput = within(section as HTMLElement).getByRole("textbox", {
      name: /^phone$/i,
    });
    expect(phoneInput).toHaveAttribute("type", "tel");
    expect(phoneInput).not.toBeRequired();
  });

  it("should render marketing opt-in checkbox unchecked by default", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    const checkbox = within(section as HTMLElement).getByRole("checkbox", {
      name: /accept to receive news and marketing emails/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  it("should render submit button", () => {
    const { container } = renderWaitlistBlock();
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    const submit = within(section as HTMLElement).getByRole("button", { name: /join waitlist/i });
    expect(submit).toBeInTheDocument();
  });

  it("should call onSubmit with form data when user submits", () => {
    const onSubmit = vi.fn();
    const { container } = render(<WaitlistBlock onSubmit={onSubmit} />);
    const section = container.querySelector('section[aria-label="Join waitlist"]');
    const sectionEl = section as HTMLElement;
    const nameInput = within(sectionEl).getByRole("textbox", { name: /full name/i });
    const emailInput = within(sectionEl).getByRole("textbox", { name: /^email$/i });
    fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
    fireEvent.click(within(sectionEl).getByRole("button", { name: /join waitlist/i }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "",
      marketingOptIn: false,
    });
  });
});
