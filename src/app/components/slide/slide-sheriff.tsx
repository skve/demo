"use client";

import { AnimatePresence, motion, Variants } from "motion/react";

import { useViewport } from "./hooks/useViewport";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const sheriffVariants: Variants = {
  hidden: { opacity: 0, y: 5, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function SlideSheriff() {
  const { width, height } = useViewport();

  const isTooSmall = useMemo(() => {
    const minimum = {
      width: 1440,
      height: 900,
    };

    return (
      (width && width < minimum.width) || (height && height < minimum.height)
    );
  }, [width, height]);

  return (
    <AnimatePresence>
      <motion.div
        key="sheriff"
        variants={variants}
        initial="hidden"
        exit="hidden"
        animate={isTooSmall ? "visible" : "hidden"}
        className={cn(
          "absolute shadow-2 text-gray-12 z-50 bg-black-a3 dark:bg-black-a3 inset-0 ring-gray-6 dark:ring-gray-4 backdrop-blur-xl flex justify-center items-center",
          !isTooSmall ? "pointer-events-none": "pointer-events-auto"
        )}
      >
        {isTooSmall && (
          <motion.div
            key="sheriff-message"
            variants={sheriffVariants}
            initial="hidden"
            animate="visible"
            className="capitalize  flex items-center bg-gray-2 rounded-lg px-4 ring ring-gray-4 py-2 font-medium text-gray-12 shadow-2 gap-2"
          >
            Your browser window is too small
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
