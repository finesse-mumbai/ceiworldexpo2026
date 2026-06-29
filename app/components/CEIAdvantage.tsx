"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const TiltCard = ({ title, desc, icon }: { title: string, desc: string, icon: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full h-[320px]">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-md bg-white shadow-2xl border border-gray-100 p-8 flex flex-col items-start justify-center cursor-pointer group"
      >
        <div 
          style={{ transform: "translateZ(60px)" }}
          className="w-16 h-16 rounded-md bg-[#009ad7]/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300"
        >
          {icon}
        </div>
        <h4 
          style={{ transform: "translateZ(45px)" }}
          className="text-2xl font-bold text-black mb-4"
        >
          {title}
        </h4>
        <p 
          style={{ transform: "translateZ(30px)" }}
          className="text-gray-500 font-medium leading-relaxed"
        >
          {desc}
        </p>
        
        {/* Neon Glow on hover */}
        <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#009ad7]/50 group-hover:shadow-[0_0_30px_rgba(0,154,215,0.2)] transition-all duration-300 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default function CEIAdvantage() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="pt-24 pb-16 md:py-24 bg-[#f4f7f9] overflow-hidden min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* Scroll Velocity Title */}
        <motion.h2 
          style={{ x: titleX }}
          className="text-[12vw] md:text-[9vw] font-black text-black/5 uppercase tracking-tighter whitespace-nowrap mb-16 leading-none select-none"
        >
          The CEI Advantage
        </motion.h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 md:-mt-36">
          <TiltCard 
            title="Global Network" 
            desc="Connect with top-tier buyers and suppliers from over 50+ countries in the consumer electronics ecosystem." 
            icon="🌍" 
          />
          <TiltCard 
            title="B2B Matchmaking" 
            desc="Our advanced AI-driven matchmaking ensures you meet exactly the right partners for your business." 
            icon="🤝" 
          />
          <TiltCard 
            title="Premium Exposure" 
            desc="Showcase your innovations in a world-class venue designed specifically for high-end electronics." 
            icon="✨" 
          />
        </div>
      </div>
    </section>
  );
}
