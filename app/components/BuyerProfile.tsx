"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const buyerProfiles = [
  { id: '01', title: 'Buying &\nTrading Houses', ghostTitle: 'Trading Houses' },
  { id: '02', title: 'Manufacturers', ghostTitle: 'Manufacturers' },
  { id: '03', title: 'Distributors &\nWholesalers', ghostTitle: 'Wholesalers' },
  { id: '04', title: 'Retailers &\nE-commerce', ghostTitle: 'E-commerce' },
];

export default function BuyerProfile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextIndexRef = useRef(4); // Start pulling from index 4

  // Initialize with 4 continuous cards in the stack
  const [cards, setCards] = useState(() => {
    return [0, 1, 2, 3].map(i => ({
      ...buyerProfiles[i],
      uniqueKey: `card-${i}` // Unique key for Framer Motion to track elements
    }));
  });

  // Auto-rotate the cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const nextProfileIndex = nextIndexRef.current % buyerProfiles.length;
        const newCard = {
          ...buyerProfiles[nextProfileIndex],
          uniqueKey: `card-${Date.now()}` // New unique key so it enters properly
        };
        nextIndexRef.current += 1;

        // Remove front card, push new card to the back of the stack
        return [...prevCards.slice(1), newCard];
      });

      setActiveIndex((prev) => (prev + 1) % buyerProfiles.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const startId = Date.now();
    nextIndexRef.current = index + 4;
    setCards([
      { ...buyerProfiles[index], uniqueKey: `card-${startId}` },
      { ...buyerProfiles[(index + 1) % buyerProfiles.length], uniqueKey: `card-${startId + 1}` },
      { ...buyerProfiles[(index + 2) % buyerProfiles.length], uniqueKey: `card-${startId + 2}` },
      { ...buyerProfiles[(index + 3) % buyerProfiles.length], uniqueKey: `card-${startId + 3}` },
    ]);
  };

  return (
    <section className="py-24 bg-[#009ad7] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Horizontal Line */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-wide whitespace-nowrap">Buyer Profile</h2>
          <div className="flex-1 h-[2px] bg-white/45 mt-5"></div>
        </div>

        {/* Animated Stacked Cards Container */}
        <div className="relative h-[240px] md:h-[300px] lg:h-[368px] w-full">
          {/* mode="popLayout" prevents layout jumps when exiting */}
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              const isFront = index === 0;

              return (
                <motion.div
                  key={card.uniqueKey}
                  initial={{
                    y: 88, // Start below the stack
                    scale: 0.9,
                    opacity: 0,
                  }}
                  animate={{
                    y: index * 65,
                    scale: 1 - index * 0.05,
                    opacity: 1 - index * 0.22,
                    zIndex: 10 - index, // Front is highest
                  }}
                  exit={{
                    y: -120, // Slide up and away
                    scale: 1.05, // Zoom in slightly as it leaves
                    opacity: 0,
                    zIndex: 20, // Keep it above others while exiting
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1], // Smooth easing for stack shift
                  }}
                  className={`absolute top-0 w-full h-[110px] md:h-[150px] lg:h-[180px] bg-white rounded-[1rem] md:rounded-[1.5rem] flex items-center justify-between shadow-sm overflow-hidden origin-top ${isFront ? 'shadow-xl' : ''
                    }`}
                >
                  {/* Left Side: Title */}
                  <div className={`pl-6 md:pl-12 lg:pl-16 flex-1 text-left ${isFront ? 'z-10' : 'z-10'}`}>
                    <h3 className={`text-xl md:text-3xl lg:text-[38px] font-sans font-medium whitespace-pre-line leading-[1.2] ${isFront ? 'text-[#1a1a1a]' : 'text-black/85'}`}>
                      {isFront ? card.title : card.ghostTitle}
                    </h3>
                  </div>

                  {/* Huge Number */}
                  <div className={`absolute right-[80px] sm:right-[100px] md:right-[130px] lg:right-[170px] top-[15%] sm:top-[12%] md:top-[10%] lg:top-[5%] z-0 pointer-events-none select-none ${isFront ? 'transition-opacity duration-500' : ''}`}>
                    <span className={`text-[12rem] sm:text-[15rem] md:text-[20rem] lg:text-[24rem] font-sans font-medium tracking-tighter leading-none ${isFront ? 'text-black' : 'text-black/40'}`}>
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

        {/* Dot Indicators */}
        {/* <div className="flex justify-center items-center gap-3 mt-4 relative z-20">
          {buyerProfiles.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 rounded-full transition-all duration-500 ease-in-out shadow-sm ${
                activeIndex === index ? 'w-12 bg-[#D4DF23] scale-110' : 'w-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
