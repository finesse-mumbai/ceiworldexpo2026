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
      className="relative w-full h-[60dvh] sm:h-[100dvh] min-h-[380px] sm:min-h-[650px] lg:min-h-[950px] overflow-hidden bg-gradient-to-b from-[#e8ebed] to-[#d4d8db] flex flex-col items-center pt-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Massive Background Text */}
      <motion.div
        className="absolute inset-0 z-0 w-full max-w-[95rem] mx-auto px-4 md:px-8 pt-[180px] sm:pt-[140px] lg:pt-[180px] pointer-events-none mt-4 sm:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 5.0, ease: "easeOut" }}
        style={{ transformOrigin: "left center" }}
      >
        <h1
          className="text-[11.5vw] sm:text-[9.3vw] md:text-[11.3vw] font-heading font-black tracking-[0.2em] sm:tracking-[0.15em] whitespace-nowrap text-white flex justify-start pl-1 drop-shadow-[0_10px_30px_rgba(255,255,255,0.4)] [-webkit-text-stroke:4px_white] sm:[-webkit-text-stroke:10px_white]"
        >          {"Trade show".split("").map((char, index) => {
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

      {/* Robot Head - Big Size and Centered Horizontally, Pushed Down */}
      <motion.div
        className="absolute top-[5%] sm:top-[-15%] md:top-[-25%] lg:top-[-28%] left-[49.6%] z-20 w-[115vw] max-w-[530px] sm:max-w-none sm:w-[864px] lg:w-[1167px] aspect-[7/8] -mt-6 sm:mt-0"
        initial={{ scale: 1.05, x: "-50%", opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, x: "-50%", opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 3, ease: "easeOut", delay: 2.0 }}
      >
        {/* Mouse Parallax Wrapper (Floating Disabled) */}
        <motion.div className="w-full h-full relative">
          {/* Glitch Wrapper - Animation Temporarily Commented Out */}
          <motion.div
            /* animate={{
              x: ["0%", "0%", "-1%", "1.5%", "-0.5%", "0%"],
              skewX: ["0deg", "0deg", "3deg", "-3deg", "0deg", "0deg"],
              filter: [
                "hue-rotate(0deg) contrast(100%) blur(0px)",
                "hue-rotate(0deg) contrast(100%) blur(0px)",
                "hue-rotate(90deg) contrast(150%) blur(1px)",
                "hue-rotate(-45deg) contrast(200%) blur(0px)",
                "hue-rotate(0deg) contrast(150%) blur(2px)",
                "hue-rotate(0deg) contrast(100%) blur(0px)"
              ]
            }}
            transition={{
              duration: 2.4,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.8, 0.85, 0.9, 0.95, 1]
            }} */
            className="w-full h-full relative"
          >
            <Image src="/images/hero/With-Frame.png" alt="Robot Head" fill priority sizes="(max-width: 780px) 658px, (max-width: 1124px) 976px, 1280px" className="object-contain scale-[1.2] md:scale-[1.4] origin-center" />
          </motion.div>
        </motion.div>

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
      </motion.div>

      {/* Blue Lower Section */}
      <div className="absolute bottom-0 w-full h-[55%] min-h-[350px] lg:h-[680px] z-30">

        {/* Flat Blue Background & Curve Image - Commented out
        <div className="absolute top-[calc(52%+5px)] bottom-0 w-full bg-[#009ad7]">
          <div className="absolute top-[4%] left-1/2 transform -translate-x-1/2 -translate-y-full w-[316px] md:w-[476px] lg:w-[546px] h-[100px] md:h-[150px] z-10 pointer-events-none">
            <Image src="/images/hero/Curve-image-1.png" alt="Curve Decor" fill className="object-contain" />
          </div>
        </div>
        */}

        {/* Combined Background Image (Blue + Curve + Hands) */}
        <motion.div
          className="absolute bottom-[34%] sm:bottom-0 left-1/2 w-[133vw] sm:w-[160vw] md:w-[120vw] max-w-[2000px] z-30 pointer-events-none -mb-30 sm:mb-0"
          initial={{ x: "-50%", y: "20%", opacity: 0 }}
          animate={{ x: "-50%", y: "0%", opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img src="/images/hero/With-Hands.png" alt="Combined Background" className="w-full h-auto drop-shadow-xl" />
        </motion.div>

        {/* Circuit Animation over the image */}
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden mix-blend-screen opacity-70">
          <CircuitGridAnimation />
        </div>

        {/* Content Wrapper inside blue section */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end pb-0 sm:pb-4 md:pb-12 translate-y-[3dvh] sm:translate-y-0 z-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >

          {/* Video Thumbnail (Placed inside the plateau) */}
          <div className="absolute top-[40%] sm:top-[20%] md:top-[36%] lg:top-[35%] left-1/2 transform -translate-x-1/2 w-[96px] h-[53px] sm:w-[160px] sm:h-[90px] md:w-[282px] md:h-[158px] lg:w-[338px] lg:h-[190px] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm z-40 group cursor-pointer">
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
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center pl-1 transition-transform shadow-lg group-hover:scale-110">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#009ad7]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
          </div>

          {/* Date & Location text */}
          <div className="text-center z-40 mt-12 sm:mt-40 md:mt-44 px-2 translate-y-1.5 sm:translate-y-0">
            <h2 className="font-heading text-white text-[1.3rem] min-[400px]:text-[1.61rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-1 md:mb-2 drop-shadow-sm whitespace-nowrap">11.12.13 August 2O26</h2>
            <p className="text-[#dae020] text-[13.5px] sm:text-sm md:text-xl font-medium tracking-tight mb-4 md:mb-8 drop-shadow-sm -translate-y-1 sm:translate-y-0">Bharat Mandapam, New Delhi</p>
          </div>

          {/* Buttons Group */}
          <div className="flex items-center bg-[#dae020] rounded-full p-1.5 shadow-[0_4px_20px_rgba(218,224,32,0.4)] z-40 hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(218,224,32,0.6)] group w-[95%] sm:w-auto max-w-[350px] sm:max-w-[400px] justify-between sm:justify-center -mt-2 sm:mt-0 mb-7 sm:mb-0 -translate-y-1.5 sm:translate-y-0">
            <button className="relative overflow-hidden group/btn px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full shadow-sm flex-1 sm:flex-none">
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
              <span className="relative z-10 font-bold text-[10px] min-[400px]:text-[11px] sm:text-xs md:text-sm tracking-wide text-black group-hover/btn:text-white transition-colors duration-300 whitespace-nowrap">
                Book A Booth
              </span>
            </button>
            <button className="bg-transparent text-[#1b1464] px-2 min-[400px]:px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-[10px] min-[400px]:text-[11px] sm:text-xs md:text-sm tracking-wide whitespace-nowrap hover:bg-black/5 transition-colors flex-1 sm:flex-none">
              Buyer Registration
            </button>
          </div>
        </motion.div>

        {/* Robot Hands & Body (Single Image) - Commented out
        <div className="absolute top-[22%] md:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[38%] md:-translate-y-[44%] z-50 pointer-events-none w-[130vw] md:w-[120vw] max-w-[1900px] aspect-[16/9] flex justify-center">
          <Image src="/images/hero/CEI-Website-Design-03.png" alt="Robot Hands" fill priority sizes="100vw" className="drop-shadow-2xl object-contain" />
        </div>
        */}

      </div>

    </section>
  );
}
