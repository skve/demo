"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function LiveBadge({ isLive }: { isLive: boolean }) {
  const [active, setActive] = useState(isLive);

  const DURATION = 0.8;
  const BG_COLOR_DURATION = 0.2;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLive) return;

      setActive((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  useEffect(() => {
    setActive(isLive);
  }, [isLive]);

  return (
    <motion.span
      layout
      className="text-gray-12 block h-fit shrink-0 overflow-hidden rounded-full text-xs font-medium uppercase leading-none"
      initial={{
        width: 8,
        height: 8,
        backgroundColor: "#30A46C",
        padding: "0rem 0rem",
      }}
      animate={{
        width: active ? 42 : 8,
        height: active ? 19 : 8,
        backgroundColor: active ? "#E54D2E" : "#30A46C",
        padding: active ? "0.25rem 0.5rem" : "0rem 0rem",
      }}
      transition={{
        width: { duration: DURATION, type: "spring", bounce: 0 },
        height: { duration: DURATION, type: "spring", bounce: 0 },
        padding: { duration: DURATION, type: "spring", bounce: 0 },
        backgroundColor: { duration: BG_COLOR_DURATION },
      }}
    >
      {active ? (
        <motion.div
          layout
          className="tracking-tight font-medium font-inter text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.25 * DURATION,
            duration: 0.5 * DURATION,
            type: "spring",
            bounce: 0,
          }}
        >
          Live
        </motion.div>
      ) : null}
    </motion.span>
  );
}
