"use client";

import { useRef, useState } from "react";

export interface UploadAreaProps {
  onFileSelect?: (file: File | null) => void;
}

export function UploadArea({ onFileSelect }: UploadAreaProps) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files?.[0] ?? null;
    setFile(chosen);
    onFileSelect?.(chosen);
  };

  return (
    <div>
      <label
        htmlFor="audit-file-input"
        className="block cursor-pointer rounded-xl border-2 border-dashed border-white/40 bg-white/10 py-16 px-6 text-center"
      >
        <input
          id="audit-file-input"
          ref={inputRef}
          type="file"
          accept=".pdf,application/pdf"
          aria-label="Choose DoC or Product File"
          className="sr-only"
          onChange={handleChange}
        />
        {file !== null ? (
          <p className="text-white/90">{file.name}</p>
        ) : (
          <p className="text-white/80">
            Drop your DoC or Product File here
          </p>
        )}
      </label>
    </div>
  );
}
