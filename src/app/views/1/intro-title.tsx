"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.2,
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
    },
  },
};

export function IntroTitle() {
  return (
    <motion.hgroup
      className="font-medium m-32 mt-auto space-y-1.5 tracking-tight"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl text-gray-12 tracking-[-0.035em]" variants={childVariants}>
        Luke Shiels
      </motion.h1>
      <motion.h2 className="text-3xl text-gray-11 tracking-[-0.03em]" variants={childVariants}>
        Selected Works
      </motion.h2>
    </motion.hgroup>
  );
}
