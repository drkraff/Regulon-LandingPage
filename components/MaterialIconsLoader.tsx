"use client";

import { useEffect } from "react";

export function MaterialIconsLoader() {
  useEffect(() => {
    // Load Material Icons Round
    const link1 = document.createElement("link");
    link1.href = "https://fonts.googleapis.com/icon?family=Material+Icons+Round";
    link1.rel = "stylesheet";
    document.head.appendChild(link1);

    // Load Material Symbols Outlined
    const link2 = document.createElement("link");
    link2.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return null;
}
