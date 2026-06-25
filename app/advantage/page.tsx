"use client";

import React, { useState } from 'react';
import { Settings, Zap, Users, Lightbulb, TrendingUp, Globe, BarChart } from 'lucide-react';

const PILLS = [
  "Global Platform:",
  "Gateway to India's booming market:",
  "Showcase your capabilities:",
];

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

export default function AdvantagePage() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-24 font-sans text-gray-900">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="mb-6 text-center text-sm font-bold uppercase tracking-[0.2em] text-[#009ad7]">
          The CEI Advantage
        </div>
        <h2 className="mx-auto mb-16 max-w-4xl text-center text-3xl font-medium md:text-5xl text-black leading-tight">
          Why Exhibit With Us?
        </h2>

        {/* Accordion Container */}
        <div className="flex flex-row items-stretch justify-center overflow-hidden h-[600px] md:h-[700px] w-full gap-2 md:gap-4 transition-all duration-300">
          {advantages.map((adv, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                  isActive 
                    ? 'flex-[100] max-w-[1000px] rounded-[40px] bg-gradient-to-br from-[#4dc0eb] to-[#009ad7] border border-transparent' 
                    : 'flex-[1] min-w-[70px] md:min-w-[90px] rounded-[40px] bg-white border border-[#009ad7]/40'
                }`}
              >
                {/* Icon - absolutely positioned for smooth animation */}
                <div 
                  className={`absolute z-20 flex shrink-0 items-center justify-center rounded-full bg-white text-[#009ad7] shadow-xl transition-all duration-[600ms] ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                    isActive 
                      ? 'top-8 left-8 md:top-10 md:left-10 h-14 w-14 md:h-16 md:w-16' 
                      : 'top-[calc(100%-4rem)] md:top-[calc(100%-5rem)] left-1/2 -translate-x-1/2 h-11 w-11 md:h-12 md:w-12 border border-[#009ad7]/10'
                  }`}
                >
                  {adv.icon}
                </div>

                {/* Active Content Container */}
                <div 
                  className={`absolute inset-0 flex flex-col p-8 md:p-10 transition-all duration-[600ms] ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                    isActive 
                      ? 'opacity-100 pointer-events-auto' 
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Text Section */}
                  <div className={`ml-20 md:ml-24 pr-4 flex flex-col justify-start transition-all duration-[600ms] delay-100 ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                    <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md leading-tight whitespace-normal">
                      {adv.title}
                    </h3>
                    <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base opacity-95 text-white whitespace-normal">
                      {adv.subtitle}
                    </p>
                  </div>

                  {/* Image inside the card */}
                  <div className={`mt-8 flex-1 w-full relative overflow-hidden rounded-2xl transition-all duration-[600ms] delay-200 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <img
                      src={adv.image}
                      alt={adv.title}
                      className="absolute inset-0 w-full h-full object-cover shadow-lg"
                    />
                  </div>
                </div>

                {/* Inactive Title Text */}
                <div 
                  className={`absolute z-10 left-1/2 flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.05,0.61,0.41,0.95)] ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                  style={{ 
                    top: '40%', 
                    transform: 'translate(-50%, -50%) rotate(180deg)',
                    writingMode: 'vertical-rl'
                  }}
                >
                  <span className="font-sans text-black font-medium tracking-tight text-sm md:text-base">
                    {adv.title.length > 35 ? adv.title.substring(0, 35) + '...' : adv.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* New Component Integrated Below */}
      <section id="shaping-future" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-black">The CEI Advantage</div>
          <h2 className="mx-auto max-w-3xl text-center font-sans text-3xl font-medium md:text-5xl text-black">
            CEI — Shaping India&apos;s Technological Future
          </h2>

          <div className="mt-16 grid grid-cols-1 items-stretch gap-4 md:grid-cols-[auto_1fr_auto]">
            {/* Left vertical pills */}
            <div className="flex justify-center gap-3 md:flex-row">
              {PILLS.map((label) => (
                <VerticalPill key={label} label={label} />
              ))}
            </div>

            {/* Center card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4dc0eb] to-[#009ad7] p-8 text-white md:p-10">
              <h3 className="font-sans text-2xl font-medium md:text-4xl">Forge global partnerships:</h3>
              <p className="mt-4 max-w-lg text-sm opacity-95 md:text-base">
                Network with key players in the ecosystem including Indian importers,
                trading houses, agents and distributors.
              </p>
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                alt="Networking at expo"
                className="mt-6 w-full rounded-xl aspect-[16/9] object-cover"
              />
            </div>

            {/* Right pill */}
            <div className="flex justify-center">
              <VerticalPill label="Unlock your entry to India's retail giants:" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function VerticalPill({ label }: { label: string }) {
  return (
    <div className="flex h-72 w-14 items-center justify-center rounded-full border border-[#009ad7]/40 md:h-96 md:w-16">
      <span
        className="font-sans text-sm font-medium tracking-tight text-black md:text-base"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {label}
      </span>
    </div>
  );
}
