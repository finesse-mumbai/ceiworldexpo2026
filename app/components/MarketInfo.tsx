"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function ScrollWord({ 
  word, 
  index, 
  total, 
  scrollYProgress 
}: { 
  word: string, 
  index: number, 
  total: number, 
  scrollYProgress: any 
}) {
  const start = (index / total) * 0.45;
  const end = start + 0.45;
  
  const yRaw = useTransform(scrollYProgress, [start, end], ["110%", "0%"]);
  const opacityRaw = useTransform(scrollYProgress, [start, end], [0, 1]);
  
  const y = useSpring(yRaw, { stiffness: 60, damping: 20 });
  const opacity = useSpring(opacityRaw, { stiffness: 60, damping: 20 });

  return (
    <span className="relative overflow-hidden inline-block py-0.5 mr-[0.24em] last:mr-0">
      <motion.span
        style={{ y, opacity }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  );
}

function AnimatedParagraph({ text, className }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 92%", "start 45%"]
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className={className}
    >
      {words.map((word, idx) => (
        <ScrollWord
          key={idx}
          word={word}
          index={idx}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

export default function MarketInfo() {
  return (
    <section className="pt-20 md:pt-24 pb-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Title Reveal */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide mb-8 md:mb-10 text-black text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          India Market Info
        </motion.h2>
        
        <div className="text-center w-full mx-auto">
          <AnimatedParagraph 
            text="India’s electronics and home appliances industry encompasses a wide range of products including consumer electronics, white goods, smart home appliances, IT hardware, components, and sub-assemblies."
            className="w-full text-center font-sans text-2xl leading-relaxed text-black md:text-3xl mb-6 md:mb-8 flex flex-wrap justify-center"
          />
          <AnimatedParagraph 
            text="Between FY2015 and FY2025, India’s electronics production grew at a CAGR of over 15%, rising from approximately US$ 29 billion to over US$ 101 billion. Looking ahead, the sector is projected to reach about US$ 500 billion by FY2030."
            className="w-full text-center font-sans text-2xl leading-relaxed text-black md:text-3xl mb-10 md:mb-12 flex flex-wrap justify-center"
          />
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-8 py-2.5 bg-[#00a0e3] text-white rounded-full font-medium text-sm md:text-base shadow-md hover:bg-[#008bc2] hover:shadow-lg transition-all">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  );
}