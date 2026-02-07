import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResultsPanel } from "@/components/ResultsPanel";
import type { AuditResult } from "@/lib/audit-types";

describe("ResultsPanel", () => {
  it("should show result message when valid", () => {
    const result: AuditResult = {
      valid: true,
      message: "Your DoC is valid for Code 65.",
    };
    render(<ResultsPanel result={result} />);
    expect(screen.getByText("Your DoC is valid for Code 65.")).toBeInTheDocument();
  });

  it("should show result message when invalid", () => {
    const result: AuditResult = {
      valid: false,
      message: "Your DoC is incomplete. Missing: EMC Test Reports.",
    };
    render(<ResultsPanel result={result} />);
    expect(
      screen.getByText("Your DoC is incomplete. Missing: EMC Test Reports.")
    ).toBeInTheDocument();
  });

  it("should have accessible region for results", () => {
    const result: AuditResult = { valid: true, message: "Unique result text" };
    const { container } = render(<ResultsPanel result={result} />);
    const region = container.querySelector('section[aria-label="Results"]');
    expect(region).toBeInTheDocument();
    expect(region).toHaveTextContent("Unique result text");
  });
});
