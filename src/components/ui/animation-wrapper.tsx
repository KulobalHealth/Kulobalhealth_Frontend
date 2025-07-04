<<<<<<< HEAD
"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
=======
'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

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
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
