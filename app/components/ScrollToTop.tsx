"use client";

import React, { useState } from 'react';
import { useLenis } from 'lenis/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Subscribe to Lenis scroll frames. This is highly optimized and prevents layout thrashing.
  const lenis = useLenis(({ scroll, limit }) => {
    // Show button only when near the bottom of the page (within 150px of limit)
    const isAtBottom = scroll >= limit - 150;
    setIsVisible(prev => (prev !== isAtBottom ? isAtBottom : prev));
  });

  const scrollToTop = () => {
    if (lenis) {
      // Use Lenis smooth scrolling API with a premium transition curve
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#141414] hover:bg-[#222] text-white flex items-center justify-center rounded-sm border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#009ad7]"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
