"use client";

import { motion, Transition, Variants } from "motion/react";


const transition: Transition = {
  delay: 0.5,
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const variants: Variants = {
  hidden: { opacity: 0, y: "20%", filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function IntroTitle() {
  return (
    <motion.hgroup
      className="font-medium mt-auto space-y-1.5 tracking-tight"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
    >
      <h1 className="text-4xl text-gray-12">Luke Shiels</h1>
      <h2 className="text-3xl text-gray-11">Selected Works</h2>
    </motion.hgroup>
  );
}