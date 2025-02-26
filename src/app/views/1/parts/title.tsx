"use client";

import { motion, Transition, Variants } from "motion/react";

const containerTransition: Transition = {
  delay: 0.5,
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger delay between children
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
      transition={containerTransition}
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