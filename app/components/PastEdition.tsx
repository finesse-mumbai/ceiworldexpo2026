"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PastEdition() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 flex justify-center overflow-hidden">
      <div className="w-full max-w-[95rem] px-4 md:px-6 relative z-10">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.2/1] rounded-xl overflow-hidden shadow-2xl bg-black">
          {isActive ? (
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/AJTDoP2Vl1E?autoplay=1" 
              title="Day 3 of CEI India 2026!" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          ) : (
            <div 
              className="absolute inset-0 w-full h-full group cursor-pointer flex items-center justify-center"
              onClick={() => setIsActive(true)}
            >
              {/* Native HTML5 Video for smooth, stutter-free background looping */}
              <video 
                src="https://portal.intexfair.com/assets/video/day-03.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              ></video>

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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
