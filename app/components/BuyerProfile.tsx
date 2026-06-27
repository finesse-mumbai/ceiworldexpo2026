"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const buyerProfiles = [
  { id: '01', title: 'Distributors &\nDealers', ghostTitle: 'Dealers' },
  { id: '02', title: 'Importers', ghostTitle: 'Importers' },
  { id: '03', title: 'Aggregators', ghostTitle: 'Aggregators' },
  { id: '04', title: 'Large Format\nRetailers', ghostTitle: 'Retailers' },
  { id: '05', title: 'Retailers', ghostTitle: 'Retailers' },
  { id: '06', title: 'E-tailers', ghostTitle: 'E-tailers' },
  { id: '07', title: 'Franchises', ghostTitle: 'Franchises' },
  { id: '08', title: 'Wholesalers &\nAgents', ghostTitle: 'Wholesalers' },
  { id: '09', title: 'Buying &\nTrading Houses', ghostTitle: 'Trading Houses' },
  { id: '10', title: 'Government\nProcurement Agencies', ghostTitle: 'Gov. Agencies' },
];

export default function BuyerProfile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextIndexRef = useRef(5); // Start pulling from index 5 since we use 5 cards
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); // Trigger when 30% visible

  // Initialize with 5 continuous cards in the stack to create depth
  const [cards, setCards] = useState(() => {
    return [0, 1, 2, 3, 4].map((profileIndex, i) => ({
      ...buyerProfiles[profileIndex],
      uniqueKey: `card-${i}`
    }));
  });

  const [hasEntered, setHasEntered] = useState(false);

  // Mark entry complete after initial staggered animation
  useEffect(() => {
    if (isInView) {
      // 5 cards * 0.08s stagger + 0.6s duration = ~1.0s total time
      const timeout = setTimeout(() => {
        setHasEntered(true);
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  // Auto-rotate the cards only after entrance animation is complete
  useEffect(() => {
    if (!hasEntered) return;

    const interval = setInterval(() => {
      const nextProfileIndex = nextIndexRef.current % buyerProfiles.length;
      nextIndexRef.current += 1;
      const newKey = `card-${Date.now()}-${Math.random()}`;

      setCards((prevCards) => {
        const newCard = {
          ...buyerProfiles[nextProfileIndex],
          uniqueKey: newKey
        };

        // Remove front card, push new card to the back of the stack
        return [...prevCards.slice(1), newCard];
      });

      setActiveIndex((prev) => (prev + 1) % buyerProfiles.length);
    }, 2500); // 2.5 seconds per slide (faster rotation)

    return () => clearInterval(interval);
  }, [hasEntered]);

  return (
    <section className="py-24 bg-[#009ad7] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4" ref={containerRef}>
        {/* Title and Horizontal Line */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-wide whitespace-nowrap">Buyer Profile</h2>
          <div className="flex-1 h-[2px] bg-white/45 mt-5"></div>
        </div>

        {/* Animated Stacked Cards Container */}
        <div className="relative h-[360px] md:h-[400px] lg:h-[460px] w-full perspective-1000">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              const isFront = index === 0;

              // The target values for the stack
              const targetY = index * 48; // Adjusted stack offset for better mobile fit
              const targetScale = 1 - index * 0.06;
              const targetOpacity = 1 - index * 0.18; 
              const targetZIndex = 10 - index;

              return (
                <motion.div
                  key={card.uniqueKey}
                  initial={{
                    y: targetY + 150, // Start below their final position
                    scale: targetScale * 0.85, // Start smaller
                    opacity: 0,
                    filter: 'blur(12px)', // Cinematic blur
                  }}
                  animate={
                    isInView 
                    ? {
                        y: targetY,
                        scale: targetScale,
                        opacity: targetOpacity,
                        filter: 'blur(0px)',
                        zIndex: targetZIndex,
                      }
                    : {} // wait until in view
                  }
                  exit={{
                    y: -150, // Slide up and away
                    x: 50, // Slide slightly right
                    rotateZ: 5, // Slight tilt
                    rotateX: 45, // Flip effect
                    scale: 1.05, // Zoom in slightly as it leaves
                    opacity: 0,
                    filter: 'blur(4px)',
                    zIndex: 20, // Keep it above others while exiting
                    transition: { duration: 0.4 } // Exit quickly without delay
                  }}
                  transition={{
                    duration: 0.7, // Slightly longer transition
                    ease: [0.16, 1, 0.3, 1], // Premium Apple-like spring easing
                    // Stagger entrance and auto-rotation so they move one by one!
                    delay: !hasEntered && isInView ? index * 0.25 : index * 0.15, 
                  }}
                  className={`absolute top-0 w-full h-[120px] md:h-[150px] lg:h-[180px] bg-white rounded-[1rem] md:rounded-[1.5rem] flex items-center justify-between shadow-sm overflow-hidden origin-bottom ${isFront ? 'shadow-2xl' : ''}`}
                >
                  {/* Left Side: Title */}
                  <div className={`pl-6 md:pl-12 lg:pl-16 flex-1 text-left z-10`}>
                    <h3 className={`text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-sans font-medium whitespace-pre-line leading-[1.2] ${isFront ? 'text-[#1a1a1a]' : 'text-black/85'}`}>
                      {isFront ? card.title : card.ghostTitle}
                    </h3>
                  </div>

                  {/* Huge Number */}
                  <div className={`absolute right-[70px] sm:right-[100px] md:right-[130px] lg:right-[170px] top-[90%] -translate-y-1/2 z-0 pointer-events-none select-none ${isFront ? 'transition-opacity duration-500' : ''}`}>
                    <span className={`text-[6rem] sm:text-[9rem] md:text-[14rem] lg:text-[18rem] font-sans font-medium tracking-tighter leading-none ${isFront ? 'text-black' : 'text-black/40'}`}>
                      {card.id}
                    </span>
                  </div>

                  {/* Right Side: Yellow/Green Arrow Block */}
                  <div className={`h-full w-20 md:w-28 lg:w-36 bg-[#D4DF23] flex items-center justify-center shrink-0 ${isFront ? 'z-10 cursor-pointer hover:bg-[#c8cd1c] transition-colors' : ''}`}>
                    <svg className={`w-6 h-6 md:w-10 md:h-10 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
