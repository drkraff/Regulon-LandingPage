"use client";

import type { ChangeEvent } from "react";
import { useRef, useState } from "react";

export interface UploadAreaProps {
  onFileSelect?: (file: File | null) => void;
}

export function UploadArea({ onFileSelect }: UploadAreaProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files?.[0] ?? null;
    setFile(chosen);
    onFileSelect?.(chosen);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0] ?? null;
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      onFileSelect?.(droppedFile);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl rounded-2xl shadow-glass p-8 border border-white/40 dark:border-white/20">
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-alert"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
          </div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-medium">
            regulon_upload.exe
          </div>
        </div>

        <label
          htmlFor="audit-file-input"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`block cursor-pointer rounded-xl border-2 border-dashed transition-all duration-300 ${
            isDragging
              ? "border-primary bg-primary/10 dark:bg-primary/20"
              : "border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-white/5"
          } py-12 px-6 text-center group hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10`}
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
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/30 rounded-lg flex items-center justify-center">
                  <span className="material-icons-round text-primary text-2xl">description</span>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold text-[#0a1929] dark:text-white">
                    {file.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <span className="material-icons-round text-accent-dark dark:text-accent text-2xl">
                  check_circle
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  onFileSelect?.(null);
                  if (inputRef.current) {
                    inputRef.current.value = "";
                  }
                }}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors"
              >
                הסר קובץ
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                  <span className="material-icons-round text-primary text-4xl">cloud_upload</span>
                </div>
              </div>
              <div>
                <p className="text-lg font-bold text-[#0a1929] dark:text-white mb-2">
                  העלה את הצהרת התאימות או תיק המוצר שלך
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  גרור ושחרר קובץ PDF כאן או לחץ לבחירה
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="material-icons-round text-sm">info</span>
                <span>רק קבצי PDF נתמכים</span>
              </div>
            </div>
          )}
        </label>

        {file === null && (
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <span className="material-icons-round text-accent-dark dark:text-accent text-base">
                security
              </span>
              <span className="font-medium">עיבוד מקומי</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center gap-1">
              <span className="material-icons-round text-accent-dark dark:text-accent text-base">
                lock
              </span>
              <span className="font-medium">ללא אחסון</span>
            </div>
            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600"></div>
            <div className="flex items-center gap-1">
              <span className="material-icons-round text-accent-dark dark:text-accent text-base">
                speed
              </span>
              <span className="font-medium">מהיר ובטוח</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
