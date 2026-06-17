"use client";
import React from 'react';
import { motion } from 'framer-motion';

const HorizontalCurrent = ({ top, delay, duration, reverse = false }: { top: string, delay: number, duration: number, reverse?: boolean }) => (
  <div className="absolute left-0 right-0 h-[1px]" style={{ top }}>
    <motion.div
      className="absolute top-[0px] h-[1px] w-6 bg-[#8fdcf8] rounded-full shadow-[0_0_4px_1px_rgba(143,220,248,0.8)]"
      initial={{ left: reverse ? "120%" : "-20%" }}
      animate={{ left: reverse ? "-20%" : "120%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  </div>
);

const VerticalCurrent = ({ left, delay, duration, reverse = false }: { left: string, delay: number, duration: number, reverse?: boolean }) => (
  <div className="absolute top-0 bottom-0 w-[1px]" style={{ left }}>
    <motion.div
      className="absolute left-[0px] w-[1px] h-6 bg-[#8fdcf8] rounded-full shadow-[0_0_4px_1px_rgba(143,220,248,0.8)]"
      initial={{ top: reverse ? "120%" : "-20%" }}
      animate={{ top: reverse ? "-20%" : "120%" }}
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
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
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
      <HorizontalCurrent top="4rem" delay={0} duration={4.5} />
      <HorizontalCurrent top="8rem" delay={2.5} duration={5.5} reverse />
      <HorizontalCurrent top="12rem" delay={1} duration={4} />
      <HorizontalCurrent top="16rem" delay={3.5} duration={6} reverse />
      <HorizontalCurrent top="20rem" delay={0.5} duration={4.8} />
      <HorizontalCurrent top="24rem" delay={1.8} duration={5} />
      <HorizontalCurrent top="28rem" delay={4} duration={6.5} reverse />
      <HorizontalCurrent top="32rem" delay={0.2} duration={4.2} />
      <HorizontalCurrent top="36rem" delay={2.2} duration={5.2} reverse />
      <HorizontalCurrent top="40rem" delay={1.5} duration={4.5} />

      {/* Vertical Currents */}
      <VerticalCurrent left="8rem" delay={1} duration={5.5} />
      <VerticalCurrent left="16rem" delay={3.5} duration={4.5} reverse />
      <VerticalCurrent left="24rem" delay={0} duration={6.5} />
      <VerticalCurrent left="32rem" delay={2.5} duration={4.8} reverse />
      <VerticalCurrent left="40rem" delay={1.5} duration={5.8} />
      <VerticalCurrent left="48rem" delay={4.8} duration={4} reverse />
      <VerticalCurrent left="56rem" delay={2} duration={4.5} />
      <VerticalCurrent left="64rem" delay={0.5} duration={6} reverse />
      <VerticalCurrent left="72rem" delay={3} duration={5.2} />
      <VerticalCurrent left="80rem" delay={1.2} duration={4.2} reverse />
      <VerticalCurrent left="88rem" delay={4} duration={5.5} />
      <VerticalCurrent left="96rem" delay={0.2} duration={4.9} reverse />
    </div>
  );
}
