"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Dots animate via GPU-only transform (x/y) instead of layout-triggering
// left/top, so these infinite loops don't force reflow on every frame.
const HorizontalCurrent = ({ top, delay, duration, width, reverse = false }: { top: string, delay: number, duration: number, width: number, reverse?: boolean }) => (
  <div className="absolute left-0 right-0 h-[1px]" style={{ top }}>
    <motion.div
      className="absolute left-0 top-[0px] h-[1px] w-6 bg-[#8fdcf8] rounded-full shadow-[0_0_4px_1px_rgba(143,220,248,0.8)]"
      initial={{ x: reverse ? width * 1.2 : width * -0.2 }}
      animate={{ x: reverse ? width * -0.2 : width * 1.2 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  </div>
);

const VerticalCurrent = ({ left, delay, duration, height, reverse = false }: { left: string, delay: number, duration: number, height: number, reverse?: boolean }) => (
  <div className="absolute top-0 bottom-0 w-[1px]" style={{ left }}>
    <motion.div
      className="absolute left-[0px] top-0 w-[1px] h-6 bg-[#8fdcf8] rounded-full shadow-[0_0_4px_1px_rgba(143,220,248,0.8)]"
      initial={{ y: reverse ? height * 1.2 : height * -0.2 }}
      animate={{ y: reverse ? height * -0.2 : height * 1.2 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  </div>
);

export default function CircuitGridAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          backgroundPosition: '0 0'
        }}
      />

      {/* Intersection Node Dots to mimic the sketch */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.6) 2px, transparent 3px)`,
          backgroundSize: '4rem 4rem',
          backgroundPosition: '0 0'
        }}
      />

      {/* Horizontal Currents */}
      <HorizontalCurrent top="4rem" delay={0} duration={4.5} width={size.width} />
      <HorizontalCurrent top="8rem" delay={2.5} duration={5.5} width={size.width} reverse />
      <HorizontalCurrent top="12rem" delay={1} duration={4} width={size.width} />
      <HorizontalCurrent top="16rem" delay={3.5} duration={6} width={size.width} reverse />
      <HorizontalCurrent top="20rem" delay={0.5} duration={4.8} width={size.width} />
      <HorizontalCurrent top="24rem" delay={1.8} duration={5} width={size.width} />
      <HorizontalCurrent top="28rem" delay={4} duration={6.5} width={size.width} reverse />
      <HorizontalCurrent top="32rem" delay={0.2} duration={4.2} width={size.width} />
      <HorizontalCurrent top="36rem" delay={2.2} duration={5.2} width={size.width} reverse />
      <HorizontalCurrent top="40rem" delay={1.5} duration={4.5} width={size.width} />

      {/* Vertical Currents */}
      <VerticalCurrent left="8rem" delay={1} duration={5.5} height={size.height} />
      <VerticalCurrent left="16rem" delay={3.5} duration={4.5} height={size.height} reverse />
      <VerticalCurrent left="24rem" delay={0} duration={6.5} height={size.height} />
      <VerticalCurrent left="32rem" delay={2.5} duration={4.8} height={size.height} reverse />
      <VerticalCurrent left="40rem" delay={1.5} duration={5.8} height={size.height} />
      <VerticalCurrent left="48rem" delay={4.8} duration={4} height={size.height} reverse />
      <VerticalCurrent left="56rem" delay={2} duration={4.5} height={size.height} />
      <VerticalCurrent left="64rem" delay={0.5} duration={6} height={size.height} reverse />
      <VerticalCurrent left="72rem" delay={3} duration={5.2} height={size.height} />
      <VerticalCurrent left="80rem" delay={1.2} duration={4.2} height={size.height} reverse />
      <VerticalCurrent left="88rem" delay={4} duration={5.5} height={size.height} />
      <VerticalCurrent left="96rem" delay={0.2} duration={4.9} height={size.height} reverse />
    </div>
  );
}
