"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buyerProfiles = [
  { id: '01', title: 'Buying &\nTrading Houses' },
  { id: '02', title: 'Manufacturers' },
  { id: '03', title: 'Distributors &\nWholesalers' },
];

export default function BuyerProfile() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % buyerProfiles.length);
    }, 2600); // Rotate every ~2.6 seconds
    return () => clearInterval(interval);
  }, []);

  const activeProfile = buyerProfiles[activeIndex];

  return (
    <section className="py-24 bg-[#009ad7] overflow-hidden relative border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title and Horizontal Line */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-wide whitespace-nowrap">Buyer Profile</h2>
          <div className="flex-1 h-[1px] bg-white/30"></div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-3 mb-10 relative z-20">
          {buyerProfiles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ease-in-out shadow-sm ${activeIndex === index ? 'w-12 bg-[#DAE020] scale-110' : 'w-3 bg-white/40 hover:bg-white/60'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stacked Cards Container */}
        <div className="relative h-[380px] md:h-[420px] lg:h-[480px] w-full">
          {buyerProfiles.map((profile, index) => {
            const offset = (index - activeIndex + buyerProfiles.length) % buyerProfiles.length;
            const isFront = offset === 0;

            return (
              <motion.div
                key={profile.id}
                initial={false}
                animate={{
                  y: offset * 95, // Increased vertical spread
                  scale: 1 - offset * 0.06, // Slightly smaller background cards
                  opacity: isFront ? 1 : offset === 1 ? 0.6 : 0.3,
                  zIndex: 30 - offset * 10
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute top-0 w-full h-36 md:h-[200px] lg:h-[220px] rounded-[2rem] flex items-center justify-between shadow-2xl overflow-hidden origin-top bg-white text-black`}
              >
                {/* Left Side: Title */}
                <div className="pl-8 md:pl-12 lg:pl-16 flex-1 z-10 text-left">
                  <h3 className="text-2xl md:text-4xl lg:text-[42px] font-sans font-medium whitespace-pre-line leading-[1.1] text-black">
                    {profile.title}
                  </h3>
                </div>

                {/* Center/Right: Huge Number (Half Cut) */}
                <div className="absolute right-[25%] sm:right-[35%] md:right-[23%] lg:right-[17%] -bottom-[50%] md:-bottom-[55%] z-0 pointer-events-none select-none">
                  <span className="text-[9rem] sm:text-[11rem] md:text-[18rem] lg:text-[22rem] font-medium tabular-nums tracking-tighter text-black leading-none">
                    {profile.id}
                  </span>
                </div>

                {/* Right Side: Yellow Arrow Block */}
                <div className="h-full w-20 md:w-32 lg:w-40 bg-[#DAE020] flex items-center justify-center z-10 cursor-pointer hover:bg-[#c8cd1c] transition-colors shrink-0">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
