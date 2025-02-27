"use client";

import { cn } from "@/lib/utils";
import { SlideSheriff } from "./slide-sheriff";
import { AnimatePresence, motion, Transition, Variants } from "motion/react";

const containerVariants: Variants = {
  initial: {
    borderRadius: "2rem",
    scale: 0.9,
  },
  animate: {
    borderRadius: "0",
    scale: 1,
  },
};

const transition: Transition = {
  duration: 1.2,
  delay: 2,
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 100,
  ease: "easeInOut",
};

export function SlideConstraint({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        transition={transition}
        className={cn(
          "shadow-4 flex p-32 relative overflow-hidden bg-gray-1 h-auto ring ring-gray-4 dark:ring-gray-3 w-full max-h-dvh aspect-video",
          className
        )}
      >
        <SlideSheriff />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}