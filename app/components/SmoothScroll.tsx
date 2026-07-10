"use client";

import React, { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ScrollSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Sync GSAP ScrollTrigger with Lenis scrolls
    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on('scroll', updateScrollTrigger);

    // Refresh ScrollTrigger to parse animations with clean measurements
    ScrollTrigger.refresh();

    return () => {
      lenis.off('scroll', updateScrollTrigger);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Fall back to native scrolling for users who prefer reduced motion.
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <ScrollSync />
      {children}
    </ReactLenis>
  );
}
