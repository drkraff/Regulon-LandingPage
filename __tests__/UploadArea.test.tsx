import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { UploadArea } from "@/components/UploadArea";

describe("UploadArea", () => {
  it("should show selected file name when user selects a file", () => {
    render(<UploadArea onFileSelect={() => {}} />);

    const fileInput = document.querySelector('input[type="file"]');
    expect(fileInput).toBeInTheDocument();

    const file = new File(["content"], "doc.pdf", { type: "application/pdf" });
    fireEvent.change(fileInput as HTMLInputElement, { target: { files: [file] } });

    expect(screen.getByText("doc.pdf")).toBeInTheDocument();
  });

  it("should show prompt when no file is selected", () => {
    render(<UploadArea onFileSelect={() => {}} />);
    expect(
      screen.getByText(/drop your doc or product file here/i)
    ).toBeInTheDocument();
  });
});
