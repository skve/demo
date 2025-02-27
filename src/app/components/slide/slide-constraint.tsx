"use client";

import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import { useHotkeys } from "@mantine/hooks";
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
  },
  animate: {
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

const transitionBasis: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 10,
  stiffness: 100,
};

const buttonContainerTransition: Transition = {
  ...transitionBasis,

  delay: buttonDuration,
  ease: "easeOut",
  duration: 1.2,
};

const buttonTransition: Transition = {
  ...transitionBasis,

  duration: buttonDuration,
  ease: "easeOut",
};

const transition: Transition = {
  ...transitionBasis,

  when: "beforeChildren",
  delay: buttonDuration,
  ease: "easeInOut",
  duration: 1.2,

  stiffness: 200,
};

export function SlideConstraint({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isStarted, setIsStarted] = useState(false);
  const [publishHotkeyPress, setPublishHotkeyPress] = useState(false);

  function handleStart() {
    if (isStarted) return;

    setIsStarted(true);
  }

  useHotkeys([
    [
      "p",
      () => {
        if (isStarted) return;

        setPublishHotkeyPress(true);
        setTimeout(() => {
          handleStart();
          setTimeout(() => setPublishHotkeyPress(false), 400);
        }, 100);
      },
    ],
  ]);

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
            animate={isStarted ? "animate" : publishHotkeyPress ? { scale: 0.9 } : "initial"}
            className="bg-gray-3 hover:bg-gray-4 hover:[&>kbd]:bg-gray-7 focus:outline-0 h-10 focus-visible:ring-2 focus-visible:ring-pink-7 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-1 text-gray-12 flex gap-1.5 items-center justify-center transition-colors duration-200 rounded-lg px-4 py-1.5 shadow-3"
          >
            <PlayIcon className="size-4 flex-none" />
            <span className="text-base font-medium pl-1">Start Demo</span>

            <kbd className="size-5 font-medium relative left-1 flex-none flex rounded text-sm transition-colors duration-200 justify-center items-center text-gray-12 bg-gray-6">
              P
            </kbd>
          </motion.button>
        </motion.div>

        <SlideSheriff />

        {isStarted ? children : null}
      </motion.div>
    </AnimatePresence>
  );
}
