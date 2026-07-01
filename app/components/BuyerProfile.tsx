"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

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

function BuyerCard({ card, index, isInView, hasEntered }: { card: { id: string, title: string, ghostTitle: string }, index: number, isInView: boolean, hasEntered: boolean }) {
  const router = useRouter();
  const isFront = index === 0;

  const targetY = index * 48; 
  const targetScale = 1 - index * 0.06;
  const targetOpacity = 1 - index * 0.18; 
  const targetZIndex = 10 - index;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFront) return;
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
    if (!isFront) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      key={card.uniqueKey}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        y: targetY + 150, 
        scale: targetScale * 0.85, 
        opacity: 0,
        filter: 'blur(12px)', 
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
        : {} 
      }
      exit={{
        y: -150, 
        x: 50, 
        rotateZ: 5, 
        scale: 1.05, 
        opacity: 0,
        filter: 'blur(4px)',
        zIndex: 20, 
        transition: { duration: 0.4 } 
      }}
      transition={{
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1], 
        delay: !hasEntered && isInView ? index * 0.25 : index * 0.15, 
      }}
      style={{
        rotateX: isFront ? rotateX : 0,
        rotateY: isFront ? rotateY : 0,
        transformStyle: "preserve-3d"
      }}
      onClick={() => isFront && router.push('/buyer-profile')}
      className={`absolute top-0 w-full h-[120px] md:h-[150px] lg:h-[180px] bg-white rounded-[1rem] md:rounded-[1.5rem] flex items-center justify-between shadow-sm overflow-hidden origin-bottom ${isFront ? 'shadow-2xl cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-shadow duration-300' : ''}`}
    >
      {!isFront && (
        <>
          <div 
            className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply"
            style={{
              background: 'radial-gradient(ellipse 100% 130% at 0% 0%, rgba(0, 50, 100, 0.75) 0%, rgba(0, 90, 150, 0.35) 45%, transparent 80%)'
            }}
          />
          <div className="absolute inset-0 pointer-events-none z-0 bg-[#008bd2]/45" />
        </>
      )}

      <div 
        className={`pl-6 md:pl-12 lg:pl-16 flex-1 text-left z-10 relative`}
        style={{ transform: isFront ? "translateZ(40px)" : "none" }}
      >
        <h3 className={`text-lg sm:text-2xl md:text-3xl lg:text-[38px] font-sans font-medium whitespace-pre-line leading-[1.2] ${isFront ? 'text-[#1a1a1a]' : 'text-black/85'}`}>
          {isFront ? card.title : card.ghostTitle}
        </h3>
      </div>

      <div 
        className={`absolute right-[70px] sm:right-[100px] md:right-[130px] lg:right-[170px] top-[90%] -translate-y-1/2 z-0 pointer-events-none select-none ${isFront ? 'transition-opacity duration-500' : ''}`}
        style={{ transform: isFront ? "translateZ(20px) translateY(-50%)" : "translateY(-50%)" }}
      >
        <span className={`text-[6rem] sm:text-[9rem] md:text-[14rem] lg:text-[18rem] font-sans font-medium tracking-tighter leading-none ${isFront ? 'text-black' : 'text-black/40'}`}>
          {card.id}
        </span>
      </div>

      <div 
        className={`h-full w-20 md:w-28 lg:w-36 bg-[#D4DF23] flex items-center justify-center shrink-0 z-10 relative ${isFront ? 'cursor-pointer hover:bg-[#c8cd1c] transition-colors' : ''}`}
        style={{ transform: isFront ? "translateZ(30px)" : "none" }}
      >
        <svg className={`w-6 h-6 md:w-10 md:h-10 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </div>
    </motion.div>
  );
}

export default function BuyerProfile() {
  const nextIndexRef = useRef(5); 
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); 

  const [cards, setCards] = useState(() => {
    return [0, 1, 2, 3, 4].map((profileIndex, i) => ({
      ...buyerProfiles[profileIndex],
      uniqueKey: `card-${i}`
    }));
  });

  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setHasEntered(true);
      }, 1000); 
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

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
        return [...prevCards.slice(1), newCard];
      });

      setActiveIndex((prev) => (prev + 1) % buyerProfiles.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, [hasEntered]);

  return (
    <section className="py-24 bg-[#009ad7] overflow-hidden relative">
      <div className="max-w-[95rem] mx-auto px-4 md:px-8" ref={containerRef}>
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-wide whitespace-nowrap">Buyer Profile</h2>
          <div className="flex-1 h-[2px] bg-white/45 mt-5"></div>
        </div>

        <div className="relative h-[360px] md:h-[400px] lg:h-[460px] w-full" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => (
              <BuyerCard 
                key={card.uniqueKey} 
                card={card} 
                index={index} 
                isInView={isInView} 
                hasEntered={hasEntered} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
