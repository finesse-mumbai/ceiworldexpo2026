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

  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Toggle every 3 seconds
    return () => clearInterval(interval);
  }, []);

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
        className="absolute inset-0 z-0 w-full max-w-[95rem] mx-auto px-4 md:px-8 pt-[180px] sm:pt-[140px] lg:pt-[180px] pointer-events-none mt-4 sm:mt-0 translate-y-[6dvh] sm:translate-y-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
        style={{ transformOrigin: "left center" }}
      >
        <h1
          className="text-[12vw] sm:text-[10vw] md:text-[11.5vw] font-heading font-black tracking-[0.13em] sm:tracking-[0.08em] whitespace-nowrap text-white flex justify-center drop-shadow-[0_10px_30px_rgba(255,255,255,0.4)] [-webkit-text-stroke:4px_white] sm:[-webkit-text-stroke:10px_white]"
        >
          TRADE SHOW
        </h1>
      </motion.div>

      {/* Smoke Effect before the head */}
      <motion.div
        className="absolute top-[20%] sm:top-[10%] left-1/2 w-[90vw] sm:w-[60vw] max-w-[1000px] aspect-square rounded-full blur-[80px] pointer-events-none z-10 mix-blend-screen"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,230,255,0.4) 40%, transparent 70%)" }}
        initial={{ x: "-50%", y: "20%", opacity: 0, scale: 0.5 }}
        animate={{ y: ["20%", "0%", "-30%"], opacity: [0, 1, 0], scale: [0.5, 1.3, 1.8] }}
        transition={{ duration: 5.5, ease: "easeInOut", times: [0, 0.4, 1], delay: 0.5 }}
      />

      {/* Robot Head - Big Size and Centered Horizontally, Pushed Down */}
      <motion.div
        className="absolute top-[7.5%] sm:top-[-19%] md:top-[-29%] lg:top-[-32%] left-[49.6%] z-20 w-[115vw] max-w-[530px] sm:max-w-none sm:w-[864px] lg:w-[1167px] aspect-[7/8] -mt-6 sm:mt-0"
        initial={{ scale: 1.05, x: "-50%", y: "18%", opacity: 0, filter: "blur(15px)" }}
        animate={{ scale: 1, x: "-50%", y: "0%", opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 4.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
      >
        {/* Mouse Parallax Wrapper (Floating Disabled) */}
        <motion.div className="w-full h-full relative">
          {/* Glitch Wrapper - Animation Temporarily Commented Out */}
          <motion.div
            className="w-full h-full relative"
          >
            <Image src="/images/hero/With-Frame.webp" alt="Robot Head" fill priority sizes="(max-width: 780px) 658px, (max-width: 1124px) 976px, 1280px" className="object-contain scale-[1.2] md:scale-[1.4] origin-center" />
          </motion.div>
        </motion.div>

        {/* Visor Screen with scrolling text and blue glass effect */}
        {/* Video playing inside the Robot Head Frame */}
        <div className="absolute top-[49%] md:top-[51%] left-1/2 transform -translate-x-1/2 w-[36%] md:w-[33%] h-[12%] md:h-[14%] rounded-2xl md:rounded-[2rem] overflow-hidden z-10 opacity-30 backdrop-blur-md border border-white/10 mix-blend-screen shadow-[0_0_40px_rgba(0,154,215,0.4)]">
          <iframe
            src="https://www.youtube.com/embed/mA0XdM6qBIs?autoplay=1&mute=1&loop=1&playlist=mA0XdM6qBIs&controls=0&modestbranding=1&rel=0&disablekb=1"
            title="Hero Video Thumbnail"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-1/2 left-1/2 w-[150%] aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          ></iframe>
          {/* Blue Glass Tint to blend video with the robot visor */}
          <div className="absolute inset-0 bg-[#009ad7]/10 pointer-events-none mix-blend-overlay"></div>
        </div>

      </motion.div>

      {/* Blue Lower Section */}
      <div className="absolute bottom-0 w-full h-[55%] min-h-[350px] lg:h-[680px] z-30">



        {/* Combined Background Image (Blue + Curve + Hands) - Sticked and Stable */}
        <div className="absolute bottom-[34%] sm:bottom-0 left-1/2 -translate-x-1/2 w-[133vw] sm:w-[160vw] md:w-[120vw] max-w-[2000px] z-30 pointer-events-none -mb-30 sm:mb-0">
          <img src="/images/hero/With-Hands.webp" alt="Combined Background" className="w-full h-auto drop-shadow-xl relative z-10" />

          {/* Circuit Animation masked specifically over the hands image */}
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden mix-blend-screen opacity-70"
            style={{
              maskImage: "url('/images/hero/With-Hands.webp')",
              WebkitMaskImage: "url('/images/hero/With-Hands.webp')",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%"
            }}
          >
            <CircuitGridAnimation />
          </div>
        </div>

        {/* Content Wrapper inside blue section */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-end pb-0 sm:pb-4 md:pb-12 translate-y-[3dvh] sm:translate-y-0 z-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >

          {/* Video Thumbnail (Placed inside the plateau) */}
          <div className="absolute top-[55%] sm:top-[20%] md:top-[36%] lg:top-[35%] left-1/2 transform -translate-x-1/2 w-[80px] h-[45px] sm:w-[136px] sm:h-[76px] md:w-[240px] md:h-[135px] lg:w-[288px] lg:h-[162px] rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm z-40 group cursor-pointer">
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
              <div className="w-[28px] h-[28px] sm:w-8 sm:h-8 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center pl-1 transition-transform shadow-lg group-hover:scale-110">
                <svg className="w-[14px] h-[14px] sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#009ad7]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
          </div>

          {/* Date & Location text */}
          <div className="text-center z-40 mt-12 sm:mt-40 md:mt-44 px-2 -translate-y-[3dvh] sm:translate-y-0">
            <h2 className="font-heading text-white text-[1.3rem] min-[400px]:text-[1.61rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-1 md:mb-2 drop-shadow-sm whitespace-nowrap">11.12.13 August 2O26</h2>
            <p className="text-[#dae020] text-[13.5px] sm:text-sm md:text-xl font-medium tracking-tight mb-4 md:mb-8 drop-shadow-sm -translate-y-1 sm:translate-y-0">Bharat Mandapam, New Delhi</p>
          </div>

          {/* Buttons Group */}
          <div className="hidden sm:flex items-center bg-[#dae020] rounded-full p-1.5 shadow-[0_4px_20px_rgba(218,224,32,0.4)] z-40 hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(218,224,32,0.6)] group w-[95%] sm:w-auto max-w-[370px] sm:max-w-[430px] justify-between sm:justify-center -mt-2 sm:mt-0 mb-7 sm:mb-0 -translate-y-1.5 sm:translate-y-0 relative">
            {['Book A Booth', 'Buyer Registration'].map((text, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={text}
                  className="relative overflow-hidden group/btn px-4 sm:px-7 md:px-10 py-2 md:py-3 rounded-full flex-1 sm:flex-none transition-colors"
                  onClick={() => setActiveTab(idx)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="heroTabPill"
                      className="absolute inset-0 w-full h-full bg-white shadow-sm z-0 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {/* Energy Core Shader */}
                  <div className="absolute inset-0 w-full h-full bg-[#1b1464] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0 overflow-hidden rounded-full">
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
                  <span className={`relative z-10 font-bold text-[10px] min-[400px]:text-[11px] sm:text-xs md:text-sm tracking-wide transition-colors duration-300 whitespace-nowrap group-hover/btn:text-white ${isActive ? 'text-black' : 'text-[#1b1464]'}`}>
                    {text}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Robot Hands & Body (Single Image) - Commented out
        <div className="absolute top-[22%] md:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[38%] md:-translate-y-[44%] z-50 pointer-events-none w-[130vw] md:w-[120vw] max-w-[1900px] aspect-[16/9] flex justify-center">
          <Image src="/images/hero/CEI-Website-Design-03.webp" alt="Robot Hands" fill priority sizes="100vw" className="drop-shadow-2xl object-contain" />
        </div>
        */}

      </div>

    </section>
  );
}
