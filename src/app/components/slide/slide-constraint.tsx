"use client";

import { cn } from "@/lib/utils";
import { SlideSheriff } from "./slide-sheriff";
import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import { useState } from "react";
import { PlayIcon } from "./parts/play-icon";
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

const buttonVariants: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
  },
};

const buttonDuration = 0.3;

const buttonTransition: Transition = {
  duration: buttonDuration,
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 100,
  ease: "easeInOut",
};

const transition: Transition = {
  delay: buttonDuration,
  duration: 1,
  when: "beforeChildren",
  type: "spring",
  mass: 0.5,
  damping: 10,
  bounce: 0,
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
  const [isStarted, setIsStarted] = useState(false);

  function handleStart() {
    setIsStarted(true);
  }

  return (
    <AnimatePresence>
      <motion.div
        layout
        variants={containerVariants}
        initial="initial"
        animate={isStarted ? "animate" : "initial"}
        transition={transition}
        className={cn(
          "shadow-4 flex p-32 relative overflow-hidden bg-gray-1 h-auto ring ring-gray-4 dark:ring-gray-3 w-full max-h-dvh aspect-video",
          className
        )}
      >
        <motion.div
          variants={buttonVariants}
          initial="initial"
          transition={buttonTransition}
          animate={isStarted ? "animate" : "initial"}
          className="bg-gray-1 inset-0 absolute w-full h-full flex justify-center items-center"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleStart}
            className="bg-gray-3 focus:outline-0 focus-visible:ring-2 focus-visible:ring-pink-7 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-1 hover:bg-gray-4 flex items-center justify-center text-gray-10 hover:text-gray-11 transition-colors duration-200 rounded-full px-2.5 py-1.5 size-32 shadow-3"
          >
            <PlayIcon className="size-14" />
          </motion.button>
        </motion.div>

        <SlideSheriff />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
