"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035, // Smooth staggered wave
    }
  }
};

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.25, 1, 0.5, 1] as const // Soft, elegant cubic bezier easeOut
    }
  }
};

function AnimatedParagraph({ text, className }: { text: string, className?: string }) {
  const words = text.split(" ");
  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {words.map((word, idx) => (
        <span key={idx} className="relative overflow-hidden inline-block py-0.5 mr-[0.24em] last:mr-0">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}

export default function MarketInfo() {
  return (
    <section className="pt-20 md:pt-24 pb-20 bg-white">
      <div className="w-full max-w-[95rem] mx-auto px-4 md:px-8">
        {/* Title Reveal */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide mb-8 md:mb-10 text-black text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
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
          viewport={{ once: false }}
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