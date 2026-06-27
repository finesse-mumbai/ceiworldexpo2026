"use client";
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
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

  // Scroll-based parallax for peeking robot head with high-tech smooth physics
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 45, damping: 25, mass: 1.2 });
  const headScrollY = useTransform(smoothScrollY, [0, 500], ["0vh", "24vh"]);



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
        className="absolute inset-0 z-0 w-full max-w-[95rem] mx-auto px-4 md:px-8 pt-[220px] sm:pt-[190px] lg:pt-[240px] pointer-events-none mt-4 sm:mt-0 translate-y-[6dvh] sm:translate-y-0"
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
        className="absolute top-[25%] sm:top-[15%] left-1/2 w-[90vw] sm:w-[60vw] max-w-[1000px] aspect-square rounded-full blur-[80px] pointer-events-none z-10 mix-blend-screen"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(200,230,255,0.4) 40%, transparent 70%)" }}
        initial={{ x: "-50%", y: "20%", opacity: 0, scale: 0.5 }}
        animate={{ y: ["20%", "0%", "-30%"], opacity: [0, 1, 0], scale: [0.5, 1.3, 1.8] }}
        transition={{ duration: 5.5, ease: "easeInOut", times: [0, 0.4, 1], delay: 0.5 }}
      />

      {/* Robot Head - Big Size and Centered Horizontally, Pushed Down */}
      <motion.div
        className="absolute top-0 sm:top-[-26%] md:top-[-36%] lg:top-[-38%] left-1/2 z-20 w-[125vw] max-w-[580px] sm:max-w-none sm:w-[950px] lg:w-[1284px] aspect-[7/8] -mt-6 sm:mt-0"
        initial={{ scale: 1, x: "-50%", y: "28vh", opacity: 1 }}
        animate={{ scale: 1, x: "-50%", y: "0vh", opacity: 1 }}
        transition={{ duration: 4.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Scroll Parallax Wrapper */}
        <motion.div 
          className="w-full h-full relative"
          style={{ y: headScrollY }}
        >
          {/* Robot Head Graphic */}
          <div className="w-full h-full relative">
            <Image src="/images/hero/With-Frame.webp" alt="Robot Head" fill priority sizes="(max-width: 780px) 658px, (max-width: 1124px) 976px, 1280px" className="object-contain scale-[1.2] md:scale-[1.4] origin-center" />
          </div>

          {/* Visor Screen with scrolling text and blue glass effect */}
          <a href="https://www.youtube.com/watch?v=mA0XdM6qBIs" target="_blank" rel="noopener noreferrer" className="absolute top-[49%] md:top-[51%] left-1/2 transform -translate-x-1/2 w-[36%] md:w-[33%] h-[12%] md:h-[14%] rounded-md md:rounded-md overflow-hidden z-10 opacity-[0.27] backdrop-blur-md border border-white/10 mix-blend-screen shadow-[0_0_40px_rgba(0,154,215,0.4)] cursor-pointer hover:opacity-50 transition-opacity duration-300 block">
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
          </a>
        </motion.div>
      </motion.div>

      {/* Blue Lower Section */}
      <div className="absolute bottom-0 w-full h-[55%] min-h-[350px] lg:h-[680px] z-30">



        {/* Combined Background Image (Blue + Curve + Hands) - Sticked and Stable */}
        <div className="absolute bottom-[34%] sm:bottom-0 left-1/2 -translate-x-1/2 w-[133vw] sm:w-[160vw] md:w-[120vw] max-w-[2000px] z-30 pointer-events-none -mb-30 sm:mb-0">
          <img src="/images/hero/with-robot-hand.webp" alt="Combined Background" className="w-full h-auto drop-shadow-xl relative z-10" />

          {/* Circuit Animation masked specifically over the hands image */}
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden mix-blend-screen opacity-70"
            style={{
              maskImage: "url('/images/hero/with-robot-hand.webp')",
              WebkitMaskImage: "url('/images/hero/with-robot-hand.webp')",
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
          {/* 
          <a href="https://www.youtube.com/watch?v=mA0XdM6qBIs" target="_blank" rel="noopener noreferrer" className="absolute top-[55%] sm:top-[20%] md:top-[36%] lg:top-[35%] left-1/2 transform -translate-x-1/2 w-[80px] h-[45px] sm:w-[136px] sm:h-[76px] md:w-[240px] md:h-[135px] lg:w-[288px] lg:h-[162px] rounded-md overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm z-40 group cursor-pointer block">
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
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[28px] h-[28px] sm:w-8 sm:h-8 md:w-11 md:h-11 bg-white rounded-full flex items-center justify-center pl-1 transition-transform shadow-lg group-hover:scale-110 pointer-events-auto">
                <svg className="w-[14px] h-[14px] sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#009ad7]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
              </div>
            </div>
          </a>
          */}

          {/* Main Hero CTA Container (Date, Location, and Buttons) */}
          <div className="flex flex-col items-center justify-center text-center z-40 w-full px-4 mb-6 sm:mb-10 md:mb-16 gap-y-3 sm:gap-y-4 md:gap-y-6">
            
            {/* Date Heading */}
            <h2 className="font-sans text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md leading-none whitespace-nowrap">
              11 . 12 . 13 August 2O26
            </h2>
            
            {/* Location Tag */}
            <p className="text-[#dae020] text-[14px] sm:text-sm md:text-lg lg:text-xl font-bold tracking-widest uppercase drop-shadow-sm">
              Bharat Mandapam, New Delhi
            </p>

            {/* Buttons Group */}
            <div className="flex items-center justify-center bg-[#dae020] rounded-full p-1 sm:p-1.5 shadow-[0_6px_25px_rgba(218,224,32,0.35)] hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(218,224,32,0.5)] group max-w-[95%] sm:max-w-none relative">
              {['Book A Booth', 'Buyer Registration'].map((text, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={text}
                    className="relative overflow-hidden group/btn px-4 sm:px-8 md:px-12 py-2.5 md:py-3.5 rounded-full transition-all duration-300 flex-1 sm:flex-none"
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
                    <span className="relative z-10 font-black text-[10px] min-[400px]:text-[11px] sm:text-xs md:text-sm tracking-wider transition-colors duration-300 whitespace-nowrap group-hover/btn:text-white" style={{ color: isActive ? '#000000' : '#1b1464' }}>
                      {text}
                    </span>
                  </button>
                );
              })}
            </div>
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
