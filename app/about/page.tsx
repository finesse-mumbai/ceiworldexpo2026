"use client";
import React, { useState } from 'react';
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

const cards = [
  {
    title: "For Buyers & Trade Partners:",
    desc: "Source and trade with ease. Our exhibitors bring innovation under one roof, offering a first look at the hottest trends in components, appliances, and IT systems.",
    baseTransform: "translate-x-[-300px]",
    baseZ: 30,
  },
  {
    title: "For Exhibitors & Brands:",
    desc: "Unlock entry to India's retail chains. Showcase your products directly to decision-makers from hypermarkets, chain stores, and leading e-retailers.",
    baseTransform: "translate-x-0",
    baseZ: 20,
  },
  {
    title: "For Innovators & Startups:",
    desc: "Tap into India's online market. Whether you are a new venture or an established brand, CEI provides the network and the insights needed to navigate India's rapidly expanding manufacturing landscape.",
    baseTransform: "translate-x-[300px]",
    baseZ: 10,
  }
];

export default function AboutPage() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      <section id="about" className="relative overflow-hidden bg-white pt-64 pb-24 md:pt-80">
        {/* giant background word */}
        <div aria-hidden className="pointer-events-none absolute top-16 sm:top-24 left-0 right-0 select-none text-center font-sans text-[34vw] tracking-tighter whitespace-nowrap overflow-hidden font-black leading-none text-gray-200 opacity-50 flex justify-center w-full">
          About
        </div>

        <div className="relative mx-auto max-w-7xl px-4 z-10">
          <div className="flex items-end gap-4 mb-12 w-full">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wide leading-none">Our Vision</h2>
            <div className="flex-grow h-[2px] bg-[#009ad7] opacity-50 mb-1"></div>
          </div>

          <AnimatedParagraph 
            text="India today stands at the heart of the global electronics revolution. From smartphones and smart homes to connected mobility and intelligent living, the country is no longer just consuming technology — it is shaping its future."
            className="w-full text-center font-sans text-2xl font-medium leading-relaxed text-black md:text-3xl flex flex-wrap justify-center"
          />

          {/* Blue strip */}
          <div className="mt-16 mb-6 w-screen relative left-1/2 -translate-x-1/2 bg-[#009ad7] px-4 py-12 text-center text-white">
            <div className="mx-auto max-w-7xl w-full">
              <h3 className="font-sans text-2xl font-bold md:text-3xl">The Strategic Hub for Business Growth:</h3>
              <AnimatedParagraph 
                text="CEI serves as the definitive one-stop shop for companies looking to establish a strong foothold in South Asia. We provide a high-energy environment where international and Indian manufacturers connect directly with pan-India buyers, distributors, and trade."
                className="w-full mt-4 text-center text-lg leading-relaxed md:text-xl text-white/95 flex flex-wrap justify-center"
              />
            </div>
          </div>

          {/* Tilted cards exact layout - Desktop */}
          <div className="relative mx-auto mt-0 mb-8 hidden lg:flex justify-center items-center w-full h-[750px] max-w-6xl">
            {cards.map((card, index) => {
              const isActive = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={`absolute w-[432px] h-[432px] rounded-[40px] p-12 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${card.baseTransform} ${
                    isActive
                      ? "bg-gradient-to-br from-[#e6f7ff] to-[#66d9ff] border border-[#66d9ff]/30 rotate-0 shadow-2xl"
                      : "bg-white border border-[#009ad7] -rotate-[45deg] shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                  }`}
                  style={{ zIndex: isActive ? 40 : card.baseZ }}
                >
                  <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isActive ? 'max-h-[100px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="#009ad7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <g><line x1="4" y1="12" x2="4" y2="20" /><rect x="2.5" y="14" width="3" height="4" rx="0.5" /></g>
                        <g><line x1="9" y1="6" x2="9" y2="16" /><rect x="7.5" y="8" width="3" height="6" rx="0.5" /></g>
                        <g><line x1="14" y1="10" x2="14" y2="18" /><rect x="12.5" y="12" width="3" height="4" rx="0.5" /></g>
                        <g><line x1="19" y1="4" x2="19" y2="14" /><rect x="17.5" y="6" width="3" height="6" rx="0.5" /></g>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className={`font-sans font-bold leading-snug transition-colors duration-500 text-xl md:text-2xl ${isActive ? 'text-[#1b1464]' : 'text-[#009ad7]'}`}>
                      {card.title}
                    </h4>
                    <p className={`font-sans text-[15px] md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-slate-800' : 'text-[#009ad7]/80'}`}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stacked layout - Mobile */}
          <div className="relative mx-auto my-8 flex flex-col items-center gap-8 lg:hidden px-4 w-full">
            {cards.map((card, index) => {
              const isActive = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setHoveredIndex(index)}
                  className={`w-full max-w-[432px] rounded-[40px] p-12 flex flex-col justify-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-xl border cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-br from-[#e6f7ff] to-[#66d9ff] border-[#66d9ff]/30"
                      : "bg-white border-[#009ad7]"
                  }`}
                >
                  <div className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isActive ? 'max-h-[100px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="#009ad7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                        <g><line x1="4" y1="12" x2="4" y2="20" /><rect x="2.5" y="14" width="3" height="4" rx="0.5" /></g>
                        <g><line x1="9" y1="6" x2="9" y2="16" /><rect x="7.5" y="8" width="3" height="6" rx="0.5" /></g>
                        <g><line x1="14" y1="10" x2="14" y2="18" /><rect x="12.5" y="12" width="3" height="4" rx="0.5" /></g>
                        <g><line x1="19" y1="4" x2="19" y2="14" /><rect x="17.5" y="6" width="3" height="6" rx="0.5" /></g>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className={`font-sans font-bold mb-3 transition-colors duration-500 text-xl md:text-2xl ${isActive ? 'text-[#1b1464]' : 'text-[#009ad7]'}`}>
                      {card.title}
                    </h4>
                    <p className={`font-sans text-[15px] md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-slate-800' : 'text-[#009ad7]/80'}`}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <AnimatedParagraph 
            text="As the world's third-largest electronics market, India is the unique intersection where manufacturing ambition, cutting-edge innovation & massive consumer demand meet at scale."
            className="w-full mt-4 text-center font-sans text-2xl leading-relaxed text-black md:text-3xl relative z-10 flex flex-wrap justify-center"
          />
          <AnimatedParagraph 
            text="CEI — Consumer Electronics & Home Appliances Expo channels this momentum into a premier B2B platform, purpose-built to bridge the gap between global innovation and Indian market potential."
            className="w-full mt-8 text-center font-sans text-2xl font-bold leading-relaxed text-black md:text-3xl relative z-10 flex flex-wrap justify-center"
          />
        </div>
      </section>
    </div>
  );
}
