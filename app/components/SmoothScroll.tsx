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

    // Sync GSAP ticker with Lenis raf animation loops
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    // Let Lenis own scroll timing smoothing; GSAP's own lag compensation
    // fights it after any frame drop, producing a visible stutter/jump.
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger to parse animations with clean measurements
    ScrollTrigger.refresh();

    return () => {
      lenis.off('scroll', updateScrollTrigger);
      gsap.ticker.remove(updateTicker);
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
    // autoRaf is disabled because ScrollSync already drives lenis.raf() from
    // the GSAP ticker below (required for GSAP ScrollTrigger sync) — leaving
    // Lenis's own internal raf loop on as well double-drives it every frame
    // with two different timing sources, which is what produced the
    // wave-like scroll judder.
    //
    // `duration` is intentionally omitted: Lenis treats `lerp` and
    // `duration`+`easing` as mutually exclusive smoothing strategies, and
    // duration silently wins whenever both are set (it restarts a fresh
    // eased tween on every wheel tick instead of continuously damping
    // toward a live target). That's why wheel scrolling didn't feel like
    // the signature glide even with smoothWheel enabled. `lerp` alone
    // matches the continuous damp model syncTouch already uses for touch.
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, syncTouch: true, autoRaf: false }}>
      <ScrollSync />
      {children}
    </ReactLenis>
  );
}
