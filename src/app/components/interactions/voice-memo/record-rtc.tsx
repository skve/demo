"use client";

import { useEffect, useState } from "react";

export function RecordRTCScript() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Skip if already loaded or if we're in a server environment
    if (loaded || typeof window === "undefined") return;

    // Check if RecordRTC is already available
    /* @ts-expect-error - RecordRTC is not available in the browser */
    if (window.RecordRTC) {
      setLoaded(true);
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/RecordRTC/5.6.2/RecordRTC.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = (error) => {
      console.error("Failed to load RecordRTC script:", error);
    };

    // Append to document
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [loaded]);

  return null;
}
