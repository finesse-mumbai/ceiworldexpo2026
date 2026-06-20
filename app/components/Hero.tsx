"use client";
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import CircuitGridAnimation from './CircuitGridAnimation';

export default function Hero() {
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values (Heavy Predator Tracking)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30, mass: 2 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30, mass: 2 });

  // Transform values for Head (moves with mouse)
  const headX = useTransform(springX, [-1, 1], ["-2%", "2%"]);
  const headY = useTransform(springY, [-1, 1], ["-2%", "2%"]);



  const handleMouseMove = (e: React.MouseEvent) => {
    // Normalize mouse position between -1 and 1
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const normalizedX = (clientX / innerWidth) * 2 - 1;
    const normalizedY = (clientY / innerHeight) * 2 - 1;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="relative w-full md:h-[100dvh] min-h-[500px] md:min-h-[650px] lg:min-h-[950px] overflow-hidden bg-gradient-to-b from-[#e8ebed] to-[#d4d8db] flex flex-col items-center pt-[120px] md:pt-32 pb-8 md:pb-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Massive Background Text */}
      <motion.div
        className="absolute inset-0 z-0 w-full max-w-[95rem] mx-auto px-4 md:px-8 pt-[180px] sm:pt-[160px] md:pt-[180px] pointer-events-none flex justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <h1
          className="text-[14vw] sm:text-[12vw] md:text-[11.3vw] font-heading font-black tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap text-white flex justify-center drop-shadow-[0_10px_30px_rgba(255,255,255,0.4)]"
          style={{ WebkitTextStroke: '2px white' }}
        >
          {"Trade show".split("").map((char, index) => {
            const delays = [0.1, 0.8, 0.3, 1.5, 0.5, 0, 1.2, 0.4, 1.8, 0.9];
            const durations = [3.2, 4.1, 3.8, 4.5, 3.1, 3.9, 4.2, 3.5, 4.8, 3.6];
            return (
              <motion.span
                key={index}
                className="inline-block text-white"
                style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [1, 1, 0.3, 1, 0.5, 1],
                  x: ["0%", "0%", "-8%", "5%", "-2%", "0%"],
                  skewX: ["0deg", "0deg", "12deg", "-12deg", "0deg", "0deg"],
                  textShadow: [
                    "0px 0px 0px transparent",
                    "0px 0px 0px transparent",
                    "5px 0px 0px #dae020",
                    "0px 0px 0px transparent",
                    "2px 0px 0px transparent",
                    "0px 0px 0px transparent"
                  ]
                }}
                transition={{
                  duration: durations[index],
                  ease: "linear",
                  repeat: Infinity,
                  delay: delays[index],
                  times: [0, 0.92, 0.94, 0.96, 0.98, 1]
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </h1>
      </motion.div>

      {/* Robot Head - Scaled down for mobile and placed relatively */}
      <motion.div
        className="relative md:absolute md:top-[-25%] lg:top-[-28%] mx-auto md:mx-0 md:left-1/2 z-20 w-[60vw] max-w-[280px] md:max-w-none md:w-[864px] lg:w-[1167px] aspect-[7/8] md:-translate-x-1/2 mt-8 md:mt-0"
        initial={{ scale: 1.05, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
      >
        <motion.div className="w-full h-full relative">
          <Image src="/images/hero/With-Frame.png" alt="Robot Head" fill priority sizes="(max-width: 780px) 658px, (max-width: 1124px) 976px, 1280px" className="object-contain md:scale-[1.4] origin-center" />
        </motion.div>
      </motion.div>

      {/* Blue Lower Section (Banner & Hands) - Stacked exactly below Robot Head on mobile */}
      <div className="relative md:absolute md:bottom-0 w-full z-30 -mt-[6%] sm:-mt-[12%] md:mt-0">
        <motion.div
          className="relative mx-auto w-full md:w-[120vw] max-w-[2000px] z-30 pointer-events-none"
          initial={{ y: "20%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Base Background Image */}
          <img src="/images/hero/With-Hands.png" alt="Combined Background" className="w-full h-auto drop-shadow-xl" />

          {/* Circuit Animation over the image */}
          <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden mix-blend-screen opacity-70 rounded-3xl">
            <CircuitGridAnimation />
          </div>

          {/* Video Thumbnail (Positioned perfectly in the curve) */}
          <div className="absolute top-[8%] sm:top-[10%] md:top-[12%] left-1/2 transform -translate-x-1/2 w-[24%] sm:w-[22%] md:w-[20%] lg:w-[18%] aspect-video rounded-md md:rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm z-40 group cursor-pointer pointer-events-auto">
            <div className="absolute top-1/2 left-1/2 w-[250%] sm:w-[150%] md:w-[150%] lg:w-[150%] aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              <iframe
                src="https://www.youtube.com/embed/mA0XdM6qBIs?autoplay=1&mute=1&loop=1&playlist=mA0XdM6qBIs&controls=0&modestbranding=1&rel=0&disablekb=1"
                title="Hero Video Thumbnail"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center pl-0.5 sm:pl-1 transition-transform shadow-lg group-hover:scale-110">
                <svg className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#009ad7]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
          </div>

          {/* Date & Location text (Positioned in the middle of the banner) */}
          <div className="absolute top-[45%] md:top-[50%] left-1/2 transform -translate-x-1/2 w-full text-center z-40 px-2 pointer-events-auto">
            <h2 className="font-heading text-white text-[5vw] sm:text-[4.5vw] md:text-5xl lg:text-6xl font-black tracking-tighter mb-0 sm:mb-1 md:mb-2 drop-shadow-sm whitespace-nowrap">11.12.13 August 2O26</h2>
            <p className="text-[#dae020] text-[2.8vw] sm:text-[2.2vw] md:text-xl font-medium tracking-tight mb-0 drop-shadow-sm">Bharat Mandapam, New Delhi</p>
          </div>

          {/* Buttons Group (Positioned at the bottom of the banner) */}
          <div className="absolute bottom-[6%] sm:bottom-[8%] left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-1 sm:gap-2 bg-[#dae020] rounded-full p-1 sm:p-1.5 shadow-[0_4px_20px_rgba(218,224,32,0.4)] z-40 hover:scale-[1.03] transition-all duration-300 group w-[85%] sm:w-auto max-w-[340px] sm:max-w-[400px] pointer-events-auto">
            <button className="relative overflow-hidden group/btn px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full shadow-sm flex-1 sm:flex-none">
              <div className="absolute inset-0 w-full h-full bg-white transition-opacity duration-300 group-hover/btn:opacity-0 z-0"></div>
              {/* Energy Core Shader */}
              <div className="absolute inset-0 w-full h-full bg-[#1b1464] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0 overflow-hidden">
                <motion.div
                  className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] rounded-full blur-[20px] mix-blend-screen opacity-90"
                  style={{ background: "radial-gradient(circle, #dae020 0%, transparent 60%)" }}
                  animate={{ x: ["-10%", "10%", "-5%", "-10%"], y: ["-10%", "5%", "15%", "-10%"] }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-[-50%] right-[-50%] w-[150%] h-[150%] rounded-full blur-[20px] mix-blend-screen opacity-90"
                  style={{ background: "radial-gradient(circle, #009ad7 0%, transparent 60%)" }}
                  animate={{ x: ["10%", "-10%", "5%", "10%"], y: ["5%", "-15%", "10%", "5%"] }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                />
              </div>
              <span className="relative z-10 font-bold text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-sm tracking-wide text-black group-hover/btn:text-white transition-colors duration-300 whitespace-nowrap">
                Book A Booth
              </span>
            </button>
            <button className="bg-transparent text-[#1b1464] px-3 min-[400px]:px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-[9px] min-[400px]:text-[10px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap hover:bg-black/5 transition-colors flex-1 sm:flex-none">
              Buyer Registration
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
