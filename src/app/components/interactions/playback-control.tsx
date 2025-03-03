"use client";

import { AnimatePresence, motion, Transition, Variants } from "motion/react";

const iconVariants: Variants = {
  initial: { opacity: 0, scale: 0.66, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.66, filter: "blur(2px)" },
};

const iconTransition: Transition = { duration: 0.1 };

export function PlaybackControl({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex gap-4 p-6 w-full justify-center items-center">
      <motion.button
        disabled={!checked}
        onClick={() => onCheckedChange(!checked)}
        whileTap={{ scale: 0.95 }}
        className="flex-none not-disabled:cursor-pointer not-disabled:hover:bg-teal-a3 focus:outline-0 focus-visible:ring-2 focus-visible:ring-teal-8 text-gray-9  not-disabled:hover:text-teal-12 transition-colors duration-150 ease-out rounded-md p-2"
      >
        <AnimatePresence mode="wait" initial={false}>
          {checked ? (
            <motion.svg
              key="pause"
              variants={iconVariants}
              transition={iconTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </motion.svg>
          ) : (
            <motion.svg
              key="play"
              variants={iconVariants}
              transition={iconTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
