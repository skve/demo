"use client";

import { motion,  Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,          // Wait 2 seconds before starting the container animation
      duration: 1,       // Fade in the container over 1 second
      when: "beforeChildren", // Children won't start animating until the container finishes
      staggerChildren: 0.2,   // Stagger the delays for each child
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: "20%", filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

export function IntroTitle() {
  return (
    <motion.hgroup
      className="font-medium mt-auto space-y-1.5 tracking-tight"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      // transition={containerTransition}
    >
      <motion.h1 className="text-4xl text-gray-12" variants={childVariants}>
        Luke Shiels
      </motion.h1>
      <motion.h2 className="text-3xl text-gray-11" variants={childVariants}>
        Selected Works
      </motion.h2>
    </motion.hgroup>
  );
}