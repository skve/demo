"use client";

// import { useEffect, useRef } from "react";

export function SlideResize({ children }: { children: React.ReactNode }) {
  // const resizeRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   function handleResize() {
  //     if (!resizeRef.current) return;

  //     const referenceWidth = 1920;
  //     const referenceHeight = 1080;

  //     const canvas = resizeRef.current;
  //     const { clientWidth: width, clientHeight: height } = canvas;

  //     // Compute the scale based on whichever dimension is the limiting factor,
  //     // so that the aspect ratio remains 1920 (width) by 1080 (height).
  //     const scale = Math.min(width / referenceWidth, height / referenceHeight);

  //     canvas.style.transform = `scale(${scale})`;
  //     // Adjust as needed for your design (e.g., top-left, center, etc.)
  //     canvas.style.transformOrigin = "center center";
  //   }

  //   handleResize(); // Scale on mount
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div
      className="w-full p-32 h-full flex"
      // ref={resizeRef}
    >
      {children}
    </div>
  );
}
