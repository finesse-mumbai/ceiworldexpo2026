"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PastEdition() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 flex justify-center overflow-hidden">
      
      <div className="w-full max-w-7xl px-4 md:px-6 relative z-10">
        <a 
          href="https://www.youtube.com/watch?v=mA0XdM6qBIs"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.2/1] rounded-md overflow-hidden shadow-2xl flex items-center justify-center group cursor-pointer border border-white/20 block"
        >

          {/* Background YouTube Video (Autoplay, Loop, Muted) */}
          <div className="absolute top-1/2 left-1/2 w-[250%] sm:w-[150%] md:w-[120%] lg:w-[110%] aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <iframe 
              src="https://www.youtube.com/embed/mA0XdM6qBIs?autoplay=1&mute=1&loop=1&playlist=mA0XdM6qBIs&controls=0&modestbranding=1&rel=0&disablekb=1"
              title="Highlights of Past Edition - YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Blue Tint Overlay */}
          <div className="absolute inset-0 bg-[#005a8c]/75 transition-opacity duration-500 group-hover:bg-[#005a8c]/65"></div>

          {/* Content Wrapper */}
          <div className="z-20 flex items-center justify-center w-full max-w-4xl px-4 md:px-12">

            {/* Left Text */}
            <span className="text-white text-lg sm:text-2xl md:text-[28px] font-medium tracking-wide whitespace-nowrap drop-shadow-md">
              Highlights of
            </span>

            {/* Left Line */}
            <div className="flex-grow h-[1px] bg-white/50 mx-3 sm:mx-6 md:mx-8"></div>

            {/* Play Button Circle */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 border-[1.5px] border-white/80 rounded-full flex items-center justify-center text-white bg-transparent transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-1 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
            </div>

            {/* Right Line */}
            <div className="flex-grow h-[1px] bg-white/50 mx-3 sm:mx-6 md:mx-8"></div>

            {/* Right Text */}
            <span className="text-white text-lg sm:text-2xl md:text-[28px] font-medium tracking-wide whitespace-nowrap drop-shadow-md">
              Past Edition
            </span>

          </div>
        </a>
      </div>
    </section>
  );
}
