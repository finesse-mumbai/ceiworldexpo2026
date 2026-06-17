"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CircuitGridAnimation from './CircuitGridAnimation';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[850px] lg:min-h-[950px] overflow-hidden bg-gradient-to-b from-[#e8ebed] to-[#d4d8db] flex flex-col items-center pt-32">

      {/* Massive Background Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center top-[7%] md:top-[-1%] pointer-events-none overflow-hidden">
        <motion.h1
          className="text-[10vw] md:text-[12vw] font-heading font-extrabold capitalize tracking-[0.05em] opacity-80 whitespace-nowrap -translate-y-[30%] text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-[#009ad7]/40 drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Trade Show
        </motion.h1>
      </div>

      {/* Robot Head - Big Size and Centered Horizontally, Pushed Down */}
      <div className="absolute top-[37%] md:top-[56%] lg:top-[53%] left-[49%] -translate-x-1/2 z-20 w-[125vw] max-w-[485px] sm:max-w-none sm:w-[790px] lg:w-[1068px] aspect-[7/8]">
        <Image src="/images/hero/futuristic-AI-robot-head.png" alt="Robot Head" fill priority sizes="(max-width: 640px) 450px, (max-width: 1024px) 750px, 1000px" className="object-contain scale-154 md:scale-178 origin-center" />

        {/* Visor Screen with scrolling text and blue glass effect */}
        {/* <div className="absolute top-[48%] left-[20%] right-[20%] h-[12%] bg-gradient-to-r from-[#009ad7]/50 via-[#41b5e8]/50 to-[#009ad7]/50 backdrop-blur-md rounded-lg flex items-center justify-center overflow-hidden border border-white/20 shadow-[0_0_25px_rgba(0,154,215,0.4)]">
          <motion.div
            className="whitespace-nowrap text-white font-bold text-sm lg:text-xl tracking-wider drop-shadow-md"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            11.12.13 August 2026
          </motion.div>
        </div> */}
      </div>

      {/* Blue Lower Section */}
      <div className="absolute bottom-0 w-full h-[680px] lg:h-[680px] z-30">

        {/* Flat Blue Background */}
        <div className="absolute top-[calc(52%+5px)] bottom-0 w-full bg-[#009ad7]">

          {/* Transparent Outline Text (Marquee Animation) - Temporarily hidden
          <div className="absolute inset-0 flex items-center pointer-events-none z-0 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              <h1
                className="font-heading font-extrabold uppercase tracking-wider text-[440px] leading-none -translate-y-[8%] pr-16"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)'
                }}
              >
                EVENT DATE EVENT DATE EVENT DATE
              </h1>
              <h1
                className="font-heading font-extrabold uppercase tracking-wider text-[440px] leading-none -translate-y-[8%] pr-16"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)'
                }}
              >
                EVENT DATE EVENT DATE EVENT DATE
              </h1>
            </motion.div>
          </div>
          */}
          
          <CircuitGridAnimation />

          {/* Curve Image placed at exactly the top center of the flat blue background */}
          <img
            src="/images/hero/Curve-image-1.png"
            alt="Curve Decor"
            className="absolute top-[4%] left-1/2 transform -translate-x-1/2 -translate-y-full w-[316px] md:w-[476px] lg:w-[546px] z-10 pointer-events-none"
          />
        </div>

        {/* Content Wrapper inside blue section */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 md:pb-12">

          {/* Video Thumbnail (Placed inside the plateau) */}
          <div className="absolute top-[24%] md:top-[36%] lg:top-[35%] left-1/2 transform -translate-x-1/2 w-[196px] h-[106px] md:w-[282px] md:h-[158px] lg:w-[338px] lg:h-[190px] rounded-2xl overflow-hidden border-[3px] border-white shadow-2xl bg-black z-40">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" alt="Video Thumbnail" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center pl-1 cursor-pointer hover:scale-110 transition-transform shadow-lg">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#009ad7]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
          </div>

          {/* Date & Location text */}
          <div className="text-center z-40 mt-38 md:mt-44 px-2">
            <h2 className="text-white text-[7vw] sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide mb-1 md:mb-2 drop-shadow-sm whitespace-nowrap">11.12.13 August 2O26</h2>
            <p className="text-[#dae020] text-lg md:text-xl font-medium tracking-wide mb-6 md:mb-8 drop-shadow-sm">Bharat Mandapam, New Delhi</p>
          </div>

          {/* Buttons Group */}
          <div className="flex items-center bg-[#dae020] rounded-full p-1 sm:p-1.5 shadow-[0_4px_20px_rgba(218,224,32,0.4)] z-40 hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(218,224,32,0.6)] group">
            <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-[10px] sm:text-xs md:text-sm tracking-wide shadow-sm whitespace-nowrap hover:bg-gray-100 transition-colors">
              Book A Booth
            </button>
            <button className="bg-transparent text-[#1b1464] px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-[10px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap hover:bg-black/5 transition-colors">
              Buyer Registration
            </button>
          </div>
        </div>

        {/* Robot Hands & Body (Single Image) */}
        <div className="absolute top-[22%] md:top-[6%] left-1/2 transform -translate-x-1/2 -translate-y-[38%] md:-translate-y-[44%] z-50 pointer-events-none w-[130vw] md:w-[120vw] max-w-[1900px] flex justify-center">
          <img src="/images/hero/CEI-Website-Design-03.png" alt="Robot Hands" className="w-full h-auto drop-shadow-2xl object-contain" />
        </div>

      </div>

    </section>
  );
}
