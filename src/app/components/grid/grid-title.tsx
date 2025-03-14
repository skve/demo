"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
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

export function GridTitle() {
  return (
    <motion.hgroup
      className="font-medium  mb-6 flex justify-between items-center tracking-tight"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="lukas" variants={childVariants}>
      Luke Shiels
      </motion.h2>

      <motion.h2 className="lukas" variants={childVariants}>
        Selected Works
      </motion.h2>
    </motion.hgroup>
  );
}
