"use client";

import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import { useState } from "react";

import { SlideSheriff } from "./slide-sheriff";
import { PlayIcon } from "./parts/play-icon";

import { cn } from "@/lib/utils";

const buttonDuration = 0.3;

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
    filter: "blur(0px)",
  },
  animate: {
    filter: "blur(1px)",
    opacity: 0,
  },
};

const buttonTransition: Transition = {
  duration: buttonDuration,
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 100,
  ease: "easeInOut",
};

const transition: Transition = {
  delay: buttonDuration * 0.4,
  duration: 1.2,
  when: "beforeChildren",
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 200,
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
          "shadow-4 flex p-32 relative overflow-hidden bg-gray-1 h-auto ring ring-gray-3 w-full max-h-dvh aspect-video",
          className
        )}
      >
        <motion.div
          variants={buttonVariants}
          initial="initial"
          transition={buttonTransition}
          animate={isStarted ? "animate" : "initial"}
          className="bg-black-a4  backdrop-blur-md z-50 inset-0 absolute w-full h-full flex justify-center items-center"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleStart}
            className="bg-gray-3 focus:outline-0 h-10 focus-visible:ring-2 focus-visible:ring-pink-7 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-1 hover:bg-gray-2 flex gap-1.5 items-center justify-center text-gray-12 transition-colors duration-200 rounded-lg px-4 py-1.5 shadow-3"
          >
            <PlayIcon className="size-4 flex-none" />
            <span className="text-base font-medium pl-1">Start demo</span>
          </motion.button>
        </motion.div>

        <SlideSheriff />

        {isStarted ? children : null}
      </motion.div>
    </AnimatePresence>
  );
}
