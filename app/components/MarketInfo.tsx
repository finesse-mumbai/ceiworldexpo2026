"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AnimatedParagraph({ text, className }: { text: string, className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(container.current!.querySelectorAll(".reveal-letter"), {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top 85%",
          end: "bottom 35%",
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const splitWords = (phrase: string) => {
    const body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters: React.ReactNode[] = [];
      word.split("").forEach((letter, j) => {
        letters.push(
          <span key={`l_${i}_${j}`} className="reveal-letter opacity-20">
            {letter}
          </span>
        );
      });
      body.push(
        <span key={`w_${i}`} className="inline-block" style={{ paddingRight: '0.25em' }}>
          {letters}
        </span>
      );
    });
    return body;
  }

  return (
    <div ref={container} className={className}>
      {splitWords(text)}
    </div>
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