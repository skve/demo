"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

const childVariants: Variants = {
  hidden: { opacity: 0, y: "5%", filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function GridItem({
  children,
  className,
  cols,
  rows,
}: {
  children: React.ReactNode;
  className?: string;
  cols: number;
  rows: number;
}) {
  return (
    <motion.div
      style={{
        "--cols": cols,
        "--rows": rows,
      } as React.CSSProperties}
      variants={childVariants}
      className={cn(
        "bg-gray-2 h-full relative flex flex-none items-center justify-center overflow-hidden grid-cols-1 grid-rows-1 sm:[grid-column:span_var(--cols)] sm:[grid-row:span_var(--rows)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
