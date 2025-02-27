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

const buttonContainerVariants: Variants = {
  initial: {
    opacity: 1,
    // filter: "blur(0px)",
  },
  animate: {
    // filter: "blur(1px)",
    opacity: 0,
  },
};

const buttonVariants: Variants = {
  initial: {
    opacity: 1,
    filter: "blur(0px)",
  },
  animate: {
    filter: "blur(2px)",
    opacity: 0,
  },
};

const buttonContainerTransition: Transition = {
  duration: 1.2,
  delay: buttonDuration,
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 100,
  ease: "easeOut",
};

const buttonTransition: Transition = {
  duration: buttonDuration,
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 100,
  ease: "easeOut",
};

const transition: Transition = {
  delay: buttonDuration,
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
    if (isStarted) return; 

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
          variants={buttonContainerVariants}
          initial="initial"
          transition={buttonContainerTransition}
          animate={isStarted ? "animate" : "initial"}
          className="bg-black-a4 backdrop-blur-md z-50 inset-0 absolute w-full h-full flex justify-center items-center"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={buttonTransition}
            onClick={handleStart}
            variants={buttonVariants}
            initial="initial"
            animate={isStarted ? "animate" : "initial"}
            // className="bg-gray-3 hover:bg-gray-4 focus:outline-0 h-10 focus-visible:ring-2 focus-visible:ring-pink-7 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-1 text-gray-12 flex gap-1.5 items-center justify-center transition-colors duration-200 rounded-lg px-4 py-1.5 shadow-3"
            className="bg-gray-12 hover:bg-gray-12 focus:outline-0 h-10 focus-visible:ring-2 focus-visible:ring-pink-7 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-1 text-gray-1 ring ring-gray-11 flex gap-1.5 items-center justify-center transition-colors duration-200 rounded-lg px-4 py-1.5 shadow-3"
          >
            <PlayIcon className="size-4 flex-none" />
            <span className="text-base font-medium pl-1">Start Demo</span>
          </motion.button>
        </motion.div>

        <SlideSheriff />

        {isStarted ? children : null}
      </motion.div>
    </AnimatePresence>
  );
}
