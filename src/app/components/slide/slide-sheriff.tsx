"use client";

import { AnimatePresence, motion, Variants } from "motion/react";

import { useViewport } from "./hooks/useViewport";
import { useMemo } from "react";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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
        className="absolute shadow-2 text-gray-12 z-50 bg-black-a3 dark:bg-black-a3 ring ring-gray-6 dark:ring-gray-4 rounded-lg inset-4 backdrop-blur-xl flex justify-center items-center"
      >
        <div className="capitalize flex items-center bg-gray-1 rounded px-2.5 ring ring-gray-4 py-1.5 font-medium text-gray-12 shadow-2 gap-2">
          Your browser window is too small
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
