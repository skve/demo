"use client";

import { AnimatePresence, motion, Transition, Variants } from "motion/react";
import { usePathname } from "next/navigation";
import { useHotkeys } from "@mantine/hooks";
import { useState, useRef, useEffect } from "react";

import { PlayIcon } from "./parts/play-icon";

import { cn } from "@/lib/utils";
import { Signature } from "../signature";

const containerVariants: Variants = {
  initial: {
    "--tw-ring-color": "var(--gray-3)",
    borderRadius: "2rem",
    scale: 0.9,
  },
  animate: {
    "--tw-ring-color": "var(--gray-1)",
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
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(1px)",
  },
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
  ease: "easeOut",
};

const buttonContainerTransition: Transition = {
  ...transitionBasis,

  duration: 0.1,
};

const buttonTransition: Transition = {
  ...transitionBasis,
  delay: 1.75,
  mass: 0.1,
};

const transition: Transition = {
  delay: 0.2,
  type: "spring",
  stiffness: 150,
  damping: 19,
  mass: 1.2,

  ease: "easeInOut",
};

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.15,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const titleChildVariants: Variants = {
  hidden: { opacity: 0, y: "20%", filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const copyChildVariants: Variants = {
  hidden: { opacity: 0, y: "3%", filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function SlideConstraint({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [publishHotkeyPress, setPublishHotkeyPress] = useState(false);

  function handleStart() {
    if (isStarted) return;

    setIsStarted(true);
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  }, [videoRef]);

  useHotkeys([
    [
      "p",
      () => {
        if (isStarted) {
          return;
        }

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
          "shadow-4 flex relative overflow-hidden bg-gray-1 h-auto ring w-full max-h-dvh",
          !isStarted ? "h-dvh" : "h-full",
          className
        )}
      >
        <motion.div
          variants={buttonContainerVariants}
          initial="initial"
          transition={buttonContainerTransition}
          animate={isStarted ? "animate" : "initial"}
          className={cn(
            "bg-black-a4 flex z-50 flex-col inset-0 absolute w-full h-full  justify-center items-center",
            isStarted && "pointer-events-none"
          )}
          layout
        >
          <div className="flex w-[24rem] flex-col gap-2 z-50">
            <motion.hgroup
              className="font-medium mb-6 flex flex-col text-start w-full tracking-tight"
              initial="hidden"
              animate="visible"
              variants={titleContainerVariants}
            >
              <div className="flex flex-col gap-0">
                <motion.h2
                  className="font-medium text-2xl tracking-tight  text-gray-12"
                  variants={titleChildVariants}
                >
                  Luke Shiels
                </motion.h2>

                <motion.h2
                  className="font-medium text-lg relative  tracking-tight bottom-0.5 text-gray-11"
                  variants={titleChildVariants}
                >
                  Selected Works
                </motion.h2>
              </div>

              <motion.p
                className="font-medium mt-3 text-base text-gray-12"
                variants={copyChildVariants}
              >
                A curated selection of high-fidelity micro-interactions and
                animations designed for seamless and intuitive experiences with
                a focus on enhancing usability and engagement through refined
                execution.

              </motion.p>
            </motion.hgroup>
          </div>

          <div className="w-[24rem] mt-0 h-16">
            <motion.button
              whileTap={{ scale: 0.92 }}
              transition={buttonTransition}
              onClick={handleStart}
              variants={buttonVariants}
              initial="hidden"
              animate={
                isStarted
                  ? "animate"
                  : publishHotkeyPress
                  ? { scale: 0.92 }
                  : "initial"
              }
              layout
              className="bg-gray-3 hover:bg-gray-4 hover:[&>kbd]:bg-gray-7 focus:outline-0 h-10 focus-visible:ring-2 focus-visible:ring-teal-8 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-1 text-gray-12 flex gap-1.5 items-center justify-center transition-colors duration-200 rounded-lg px-4 py-1.5 shadow-3"
            >
              <PlayIcon className="size-4 flex-none" />
              <span className="text-base font-medium pl-1">Start Demo</span>

              <kbd className="size-5 font-medium relative left-1 flex-none flex rounded text-sm transition-colors duration-200 justify-center items-center text-gray-12 bg-gray-6">
                P
              </kbd>
            </motion.button>

          </div>

          <motion.div
            className="w-[24rem] mt-8 h-14 backdrop-blur-xs flex flex-col items-start bg-black-a1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Signature className="text-gray-9" />
          </motion.div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {isStarted ? (
            <motion.div
              className={cn("flex origin-bottom w-full", className)}
              initial={{
                opacity: 0,
                scale: 0.99,
                y: "0.25%",
                filter: "blur(3px)",
              }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                scale: 0.99,
                y: "0.25%",
                filter: "blur(3px)",
              }}
              key={pathname}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div
              className="flex origin-bottom w-full"
              key="bg-video"
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, filter: "blur(2.25px)" }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut",
                },
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1.75,
                ease: "easeIn",
                delay: 0.75,
              }}
            >
              <div className="absolute inset-0 w-full h-full bg-black-a4 z-40" />

              {/* <video
                src="https://rmqdxpokhwuzn5kd.public.blob.vercel-storage.com/intro.mp4"
                ref={videoRef}
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
                className="w-full h-full object-cover z-30 [mask-image:linear-gradient(to_top,black_50%,transparent)]"
              /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
