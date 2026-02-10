import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { AccessibilityWidget } from "../components/AccessibilityWidget";

function getWidgetRegion() {
  const regions = screen.getAllByRole("region", {
    name: /accessibility options|נגישות/i,
  });
  return regions[0];
}

describe("AccessibilityWidget", () => {
  it("should render region with accessibility options label", () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    expect(region).toBeInTheDocument();
  });

  it("should provide font size increase control", () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const increase = within(region).getByRole("button", {
      name: /increase text size|הגדל טקסט|a\+/i,
    });
    expect(increase).toBeInTheDocument();
  });

  it("should provide font size decrease control", () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const decrease = within(region).getByRole("button", {
      name: /decrease text size|הקטן טקסט|a\-/i,
    });
    expect(decrease).toBeInTheDocument();
  });

  it("should provide high contrast toggle", () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const contrast = within(region).getByRole("button", {
      name: /high contrast|ניגודיות גבוהה|contrast/i,
    });
    expect(contrast).toBeInTheDocument();
  });
});
