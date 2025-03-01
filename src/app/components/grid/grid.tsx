"use client";

import { motion, Variants } from "motion/react";
import { useEffect, useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

export function Grid({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const REM = 16;

  const BREAKPOINT = 40;
  const ROW_HEIGHT = 16;

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
        gridElement.style.gridAutoRows = `${ROW_HEIGHT}rem`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={ref}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${ROW_HEIGHT}rem, 1fr))`,
        gridAutoRows: `${ROW_HEIGHT}rem`,
      }}
      className="grid w-full grid-flow-dense gap-3"
    >
      {children}
    </motion.div>
  );
}
