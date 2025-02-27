import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";

const childVariants: Variants = {
  hidden: { opacity: 0, y: "5%", filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function GridItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={childVariants}
      className={cn(
        "bg-gray-3 ring ring-gray-4 rounded-md relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
