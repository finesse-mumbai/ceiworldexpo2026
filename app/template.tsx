"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: prefersReducedMotion ? 0 : 0.5 }}
    >
      {children}
    </motion.div>
  );
}
