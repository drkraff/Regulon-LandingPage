import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { AccessibilityWidget } from "../components/AccessibilityWidget";

const STORAGE_KEY_FONT = "regulon-a11y-font";
const STORAGE_KEY_CONTRAST = "regulon-a11y-contrast";

function getWidgetRegion() {
  const regions = screen.getAllByRole("region", {
    name: /accessibility options|נגישות/i,
  });
  return regions[0];
}

describe("AccessibilityWidget", () => {
  beforeEach(() => {
    document.documentElement.removeAttribute("data-font-size");
    document.documentElement.removeAttribute("data-contrast");
    window.localStorage.clear();
  });

  afterEach(() => {
    cleanup();
  });

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

  it("should set data-font-size on document when increasing font", async () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const increase = within(region).getByRole("button", {
      name: /increase text size|הגדל טקסט|a\+/i,
    });
    fireEvent.click(increase);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-font-size")).toBe(
        "110"
      );
    });
    fireEvent.click(increase);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-font-size")).toBe(
        "125"
      );
    });
  });

  it("should set data-font-size on document when decreasing font", async () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const increase = within(region).getByRole("button", {
      name: /increase text size|הגדל טקסט|a\+/i,
    });
    const decrease = within(region).getByRole("button", {
      name: /decrease text size|הקטן טקסט|a\-/i,
    });
    fireEvent.click(increase);
    fireEvent.click(increase);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-font-size")).toBe(
        "125"
      );
    });
    fireEvent.click(decrease);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-font-size")).toBe(
        "110"
      );
    });
    fireEvent.click(decrease);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-font-size")).toBe(
        "100"
      );
    });
  });

  it("should set data-contrast on document when toggling contrast", async () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const contrast = within(region).getByRole("button", {
      name: /high contrast|ניגודיות גבוהה|contrast/i,
    });
    fireEvent.click(contrast);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-contrast")).toBe(
        "high"
      );
    });
    fireEvent.click(contrast);
    await waitFor(() => {
      expect(document.documentElement.getAttribute("data-contrast")).toBe(
        "normal"
      );
    });
  });

  it("should persist font size to localStorage when changing", async () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const increase = within(region).getByRole("button", {
      name: /increase text size|הגדל טקסט|a\+/i,
    });
    fireEvent.click(increase);
    await waitFor(() => {
      expect(window.localStorage.getItem(STORAGE_KEY_FONT)).toBe("110");
    });
  });

  it("should persist contrast to localStorage when toggling", async () => {
    render(<AccessibilityWidget />);
    const region = getWidgetRegion();
    const contrast = within(region).getByRole("button", {
      name: /high contrast|ניגודיות גבוהה|contrast/i,
    });
    fireEvent.click(contrast);
    await waitFor(() => {
      expect(window.localStorage.getItem(STORAGE_KEY_CONTRAST)).toBe("1");
    });
    fireEvent.click(contrast);
    await waitFor(() => {
      expect(window.localStorage.getItem(STORAGE_KEY_CONTRAST)).toBe("0");
    });
  });
});
