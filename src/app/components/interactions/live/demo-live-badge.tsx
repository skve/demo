"use client";

import { motion } from "framer-motion";

const variants = {
  active: {
    width: 42,
    height: 19,
    padding: "0.25rem 0.5rem",
    backgroundColor: "#E54D2E",
  },
  inactive: {
    width: 8,
    height: 8,
    padding: "0rem 0rem",
    backgroundColor: "#30A46C",
  },
};

export function LiveBadge() {
  const DURATION = 0.8;
  const BG_COLOR_DURATION = 0.2;

  return (
    <motion.span
      layout
      className="text-gray-12 block h-fit shrink-0 overflow-hidden rounded-full text-xs font-medium uppercase leading-none"
      variants={variants}
      initial="inactive"
      animate="active"
      exit="inactive"
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
        width: { duration: DURATION, type: "spring" },
        height: { duration: DURATION, type: "spring" },
        padding: { duration: DURATION, type: "spring" },
        backgroundColor: { duration: BG_COLOR_DURATION },
      }}
    >
      <motion.span
        layout
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.25 * DURATION,
          duration: 0.5 * DURATION,
          type: "spring",
        }}
      >
        Live
      </motion.span>
    </motion.span>
  );
}
