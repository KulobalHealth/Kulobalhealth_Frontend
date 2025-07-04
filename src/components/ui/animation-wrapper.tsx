"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

export function AnimationWrapper({
  children,
  className,
}: AnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
