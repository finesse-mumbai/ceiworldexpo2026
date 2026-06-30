"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Users, Lightbulb, TrendingUp, Globe, BarChart } from 'lucide-react';

const advantages = [
  {
    title: "A focused platform for Consumer Electronics & Home Appliances",
    subtitle: "Showcase your products to a qualified B2B audience actively looking for the latest in consumer electronics, home appliances, small domestic appliances, accessories, and components.",
    image: "/images/gallery/2018/large/Photo%201.jpg",
    icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Expand your reach in India's fast-growing market",
    subtitle: "Connect with importers, distributors, retailers, e-commerce players, OEMs, and sourcing professionals looking to build strong product portfolios for the Indian market.",
    image: "/images/gallery/2018/large/Photo%202.jpg",
    icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Build high-value business partnerships",
    subtitle: "Meet manufacturers, brand owners, channel partners, trading houses, and buyers under one roof to unlock new distribution tie-ups, sourcing opportunities, and long-term collaborations.",
    image: "/images/gallery/2018/large/Photo%203.jpg",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Showcase innovation that drives demand",
    subtitle: "From smart appliances and personal gadgets to essential components and everyday consumer tech, CEI is where product innovation meets serious business opportunity.",
    image: "/images/gallery/2018/large/Photo%204.jpg",
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Strengthen your brand visibility",
    subtitle: "Position your company in front of a focused trade audience, attract new buyers, and establish a stronger market presence in one of the world's most dynamic electronics and appliance markets.",
    image: "/images/gallery/2018/large/Photo%205.jpg",
    icon: <BarChart className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Gateway to India's booming electronics ecosystem",
    subtitle: "With rising demand for consumer electronics, home appliances, components, and finished products, CEI offers direct access to a market that is scaling rapidly across retail, distribution, and manufacturing.",
    image: "/images/gallery/2018/large/Photo%206.jpg",
    icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Be part of India's next phase of growth",
    subtitle: "As India strengthens its role as a major electronics manufacturing, sourcing, and consumption hub, CEI places your brand at the heart of this momentum.",
    image: "/images/gallery/2018/large/Photo%207.jpg",
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
  },
];

export default function AdvantageAccordion() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-transparent pt-52 pb-24 md:pt-60 md:pb-24 font-sans text-gray-900 relative z-30 overflow-hidden">
      {/* Section specific Background Robot */}
      <img
        src="/images/advantage/advantage-page-element-01.png"
        alt="Background Robot"
        className="absolute top-1/2 -translate-y-1/2 right-[-5%] md:right-[1%] h-[70vh] md:h-[90vh] w-auto object-contain z-0 pointer-events-none drop-shadow-2xl opacity-50 md:opacity-100"
      />
      <div className="mx-auto max-w-[95rem] px-4 md:px-8 relative z-10">
        <div className="mb-6 text-center text-lg md:text-xl font-semibold text-black">
          The CEI Advantage
        </div>
        <h2 className="mx-auto mb-16 max-w-4xl text-center text-3xl font-medium md:text-5xl text-black leading-tight">
          Why Exhibit With Us?
        </h2>

        {/* Accordion Container */}
        <div className="flex flex-row items-stretch justify-center h-[600px] md:h-[700px] w-full gap-2 md:gap-4 relative z-20">
          {advantages.map((adv, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.div
                animate={{
                  flex: isActive ? 12 : 1,
                }}
                initial={false}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                key={idx}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group relative cursor-pointer min-w-[70px] md:min-w-[90px] rounded-md ${isActive
                  ? 'max-w-[1000px] bg-gradient-to-tr from-[#e6f5fc] via-[#66c2eb]/90 to-[#009ad7]/90 border border-[#66d9ff]/30 overflow-visible'
                  : 'bg-white border border-[#009ad7]/40 overflow-hidden'
                  }`}
              >
                {/* Icon - absolutely positioned for smooth animation */}
                <div
                  className={`absolute z-20 flex shrink-0 items-center justify-center rounded-full bg-white text-[#009ad7] shadow-xl transition-all duration-700 ease-in-out ${isActive
                    ? 'top-8 left-8 md:top-10 md:left-10 h-14 w-14 md:h-16 md:w-16'
                    : 'top-[calc(100%-4rem)] md:top-[calc(100%-5rem)] left-1/2 -translate-x-1/2 h-11 w-11 md:h-12 md:w-12 border border-[#009ad7]/10'
                    }`}
                >
                  {adv.icon}
                </div>

                {/* Active Content Container */}
                <div
                  className={`absolute inset-0 flex flex-col p-8 md:p-10 transition-all duration-700 ease-in-out ${isActive
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
                >
                  {/* Text Section */}
                  <div className={`ml-20 md:ml-24 pr-4 flex flex-col justify-start min-w-[300px] md:min-w-[500px] transition-all duration-700 delay-100 ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight whitespace-normal drop-shadow-sm">
                      {adv.title}
                    </h3>
                    <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base text-white/95 whitespace-normal font-medium">
                      {adv.subtitle}
                    </p>
                  </div>

                  {/* Image inside the card */}
                  <div className={`mt-8 flex-1 w-full relative overflow-hidden rounded-md transition-all duration-700 delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <img
                      src={adv.image}
                      alt={adv.title}
                      className="absolute inset-0 w-full h-full object-cover shadow-lg"
                    />
                  </div>
                </div>

                {/* Inactive Title Text */}
                <div
                  className={`absolute z-10 left-1/2 flex items-center justify-center transition-all duration-700 ease-in-out ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  style={{
                    top: '40%',
                    transform: 'translate(-50%, -50%) rotate(180deg)',
                    writingMode: 'vertical-rl'
                  }}
                >
                  <span className="font-sans text-black font-medium tracking-tight text-sm md:text-base whitespace-nowrap">
                    {adv.title}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Static Small Robot in Foreground */}
        <div className="absolute z-50 pointer-events-none bottom-0 md:-bottom-8 left-4 md:left-16">
          <img
            src="/images/advantage/advantage-page-element-02.png"
            alt="Mini Robot"
            className="w-[100px] md:w-[120px] lg:w-[150px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
