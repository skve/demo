"use client";

import { useEffect, useRef } from "react";

export function Grid({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const REM = 16;

  const BREAKPOINT = 40;
  const ROW_HEIGHT = 20;

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;

      const gridElement = ref.current;
      const computedStyle = window.getComputedStyle(gridElement);

      // Get the first column width
      const firstColumnWidth = computedStyle
        .getPropertyValue("grid-template-columns")
        .split(" ")[0]
        .trim();

      if (
        !firstColumnWidth.includes("px") &&
        !firstColumnWidth.includes("rem")
      ) {
        return;
      }

      // Apply or reset `gridAutoRows` based on screen width
      if (window.innerWidth > BREAKPOINT * REM) {
        gridElement.style.gridAutoRows = firstColumnWidth;
      } else {
        gridElement.style.gridAutoRows = "";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${ROW_HEIGHT}rem, 1fr))`,
        gridAutoRows: `${ROW_HEIGHT}rem`,
      }}
      className="grid w-full grid-flow-dense gap-3"
    >
      {children}
    </div>
  );
}
