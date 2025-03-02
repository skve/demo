"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0,
      delay: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const pathVariants: Variants = {
  hidden: {
    strokeWidth: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
  },
  visible: {
    strokeWidth: 1,
    strokeDasharray: 1,
    strokeDashoffset: 0,
  },
};

export function Signature() {
  return (
    <motion.svg
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 3,
        duration: 1.35,
        ease: "easeOut",
      }}
      width="136"
      height="43"
      fill="none"
      viewBox="0 0 136 43"
      viewport={{ once: true }}
      stroke="currentColor"
      strokeLinecap="round"
      className="text-gray-7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={pathVariants}
        d="M61.0629 1.31743C57.2716 9.28815 49.0352 26.7073 46.4201 32.6182C48.763 27.4686 46.9574 23.4832 37.6881 24.2444C29.0139 24.9568 7.10384 32.8421 1.14819 35.3497C7.55163 34.0959 65.2722 18.1545 126.62 14.8856"
        pathLength="1"
      />
      <motion.path
        variants={pathVariants}
        d="M133.426 15.1095L135.352 14.8856"
        pathLength="1"
      />
      <motion.path
        variants={pathVariants}
        d="M70.7353 9.19859C72.1085 8.13882 74.8639 5.99239 74.8997 5.88492C74.9445 5.75059 63.7497 2.52648 64.4214 7.98955C65.0931 13.4526 71.183 17.7514 71.3622 20.8412C71.5413 23.931 74.5863 30.3344 66.123 36.8722C57.6597 43.41 46.241 40.8576 45.3902 40.6784C44.5394 40.4993 31.9116 37.0513 28.2397 28.9463C24.5678 20.8412 31.9564 12.0197 34.6431 11.1689L36.1208 10.7211"
        pathLength="1"
      />
      <motion.path
        variants={pathVariants}
        d="M85.3333 5.30278C82.6615 8.97468 77.3536 16.4797 77.4969 17.1245C77.676 17.9305 84.5273 14.2139 84.9303 14.1243C85.3333 14.0347 84.0347 15.199 84.3034 15.6916C84.5721 16.1842 89.0052 14.5273 89.7217 14.1243C90.4382 13.7213 89.05 15.3333 89.7217 15.4229C90.259 15.4946 92.9309 14.3781 94.1996 13.8108C94.4235 14.1691 94.9609 14.8856 95.3191 14.8856C95.6773 14.8856 99.0209 13.9601 100.648 13.4974C100.931 13.7064 101.517 14.1243 101.588 14.1243C101.66 14.1243 105.499 12.9003 107.41 12.2884C107.633 12.5421 108.108 13.0496 108.216 13.0496C108.323 13.0496 111.216 12.2436 112.649 11.8406L113.186 11.6167C113.47 11.4823 112.649 11.9839 110.32 13.8108"
        pathLength="1"
      />
      <motion.path
        variants={pathVariants}
        d="M92.6771 8.25825L95.7221 5.75061"
        pathLength="1"
      />
    </motion.svg>
  );
}
