"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  // Head emerges upwards and scales up as user scrolls down
  const headScrollY = useTransform(smoothScrollY, [0, 600], ["12vh", "-15vh"]);
  const headScale = useTransform(smoothScrollY, [0, 600], [1, 1.04]);



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
      className="relative z-50 w-full h-[68dvh] sm:h-[105dvh] min-h-[400px] sm:min-h-[690px] lg:min-h-[1000px] overflow-x-hidden overflow-y-visible sm:overflow-hidden bg-gradient-to-b from-[#e8ebed] to-[#d4d8db] flex flex-col items-center pt-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Massive Background Text */}
      <motion.div
        className="absolute inset-0 z-0 w-full max-w-[95rem] mx-auto px-4 md:px-8 pt-[320px] sm:pt-[320px] lg:pt-[420px] xl:pt-[480px] pointer-events-none mt-4 sm:mt-0 translate-y-[6dvh] sm:translate-y-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
        style={{ transformOrigin: "left center" }}
      >
        <div className="w-full flex flex-col items-center justify-center text-center -translate-y-[27.5vh] z-10 relative">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 leading-relaxed tracking-normal font-sans mb-2 sm:mb-4">
              Consumer <span className="text-[#009ad7] font-semibold">Electronics,</span><br />
              <span className="text-[#009ad7] font-semibold">Components</span> & <span className="text-[#009ad7] font-semibold">Home Appliances</span>
            </h2>
            <h1
              className="text-[13.3vw] sm:text-[15.3vw] md:text-[11.7vw] font-heading font-semibold tracking-[0.13em] sm:tracking-[0.08em] whitespace-nowrap text-white leading-none drop-shadow-[0_8px_20px_rgba(255,255,255,0.3)] capitalize origin-left scale-x-[1.014] -translate-y-[2.0vh]"
            >
              Trade Show
            </h1>
          </div>
        </div>
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
        className="absolute top-[8vh] sm:top-[-26%] md:top-[-36%] lg:top-[-38%] left-1/2 z-20 w-[125vw] max-w-[580px] sm:max-w-none sm:w-[950px] lg:w-[1284px] aspect-[7/8] -mt-6 sm:mt-0"
        initial={{ scale: 1, x: "-50%", opacity: 0 }}
        animate={{ scale: 1, x: "-50%", opacity: 1 }}
        transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
      >
        {/* Scroll Parallax Wrapper */}
        <motion.div
          className="w-full h-full relative"
          style={{ y: headScrollY, scale: headScale }}
        >
          {/* Robot Head Graphic with subtle static animation (pulse & slight rotate) */}
          <motion.div
            className="w-full h-full relative block pointer-events-none origin-center"
            animate={{ scale: [1, 1.015, 1], rotate: [0, 0.5, -0.2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/images/hero/With-Frame.webp" alt="Robot Head" fill priority sizes="(max-width: 780px) 658px, (max-width: 1124px) 976px, 1280px" className="object-contain scale-[1.20] md:scale-[1.40] origin-center" />
          </motion.div>

          {/* Visor Screen with organic seamless blending */}
          <a
            href="https://www.youtube.com/watch?v=mA0XdM6qBIs"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[47%] md:top-[49%] left-1/2 transform -translate-x-1/2 w-[38%] md:w-[35%] h-[15%] md:h-[17%] overflow-hidden z-[60] opacity-[0.05] mix-blend-screen shadow-[0_0_30px_rgba(0,154,215,0.3),inset_0_0_20px_rgba(0,154,215,0.2)] cursor-pointer hover:opacity-10 transition-opacity duration-700 block pointer-events-auto group"
            style={{
              clipPath: 'polygon(8% 12%, 92% 12%, 100% 28%, 100% 72%, 92% 88%, 85% 90%, 75% 92%, 68% 94%, 65% 95%, 63% 94.5%, 60% 93%, 57% 89%, 54% 84.5%, 52% 82%, 50% 81%, 48% 82%, 46% 84.5%, 43% 89%, 40% 93%, 37% 94.5%, 35% 95%, 32% 94%, 25% 92%, 15% 90%, 8% 88%, 0% 72%, 0% 28%)',
              maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)'
            }}
            title="Watch on YouTube"
          >
            {/* Invisible overlay to strictly catch clicks and trigger the anchor link */}
            <div
              className="absolute inset-0 z-[70] cursor-pointer pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://www.youtube.com/watch?v=mA0XdM6qBIs", "_blank");
              }}
            ></div>

            <iframe
              src="https://www.youtube.com/embed/mA0XdM6qBIs?autoplay=1&mute=1&loop=1&playlist=mA0XdM6qBIs&controls=0&modestbranding=1&rel=0&disablekb=1"
              title="Hero Video Thumbnail"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-1/2 left-1/2 w-[150%] aspect-video -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 contrast-[1.1] saturate-[1.2]"
            ></iframe>

            {/* Holographic Blue Tint */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#009ad7]/40 via-transparent to-[#009ad7]/20 pointer-events-none mix-blend-overlay z-10"></div>

            {/* Scanline Effect Overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-300"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 154, 215, 0.4) 2px, rgba(0, 154, 215, 0.4) 4px)',
                backgroundSize: '100% 4px'
              }}
            ></div>

            {/* Animated Data Glow Line */}
            <motion.div
              className="absolute left-0 right-0 h-[1.5px] bg-white/40 shadow-[0_0_8px_#fff] z-30"
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Blue Lower Section */}
      <div className="absolute bottom-0 w-full h-[55%] min-h-[350px] lg:h-[680px] z-30 pointer-events-none">



        {/* Combined Background Image (Blue + Curve + Hands) - Sticked and Stable */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[131vw] sm:w-[157.6vw] md:w-[118vw] max-w-[2000px] z-30 pointer-events-none translate-y-[1.5%]">
          <Image
            src="/images/hero/with-robot-hand.webp"
            alt="Combined Background"
            width={2000}
            height={1000}
            priority
            className="w-full h-auto drop-shadow-xl relative z-10"
          />

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

          {/* Content Wrapper perfectly locked to the image plateau */}
          <motion.div
            className="absolute top-[73%] sm:top-[75%] md:top-[77%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] flex flex-col items-center justify-start z-40 pointer-events-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
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

            {/* Main Hero CTA Container - Container A (Date & Location) */}
            <div className="relative z-40 w-full px-4 flex flex-col items-center justify-center text-center gap-y-1 sm:gap-y-3 md:gap-y-4 pointer-events-auto">

              {/* Date Heading */}
              <h2 className="font-sans text-white text-[1.48rem] min-[400px]:text-[1.78rem] sm:text-[2.22rem] md:text-[2.96rem] lg:text-[3.95rem] font-semibold tracking-tight drop-shadow-md leading-none whitespace-nowrap flex justify-center items-center gap-2 md:gap-4 lg:gap-5">
                {/* <span>11-12-13</span>
              <span>August</span>
              <span>2O26</span> */}
              </h2>

              {/* Location Tag */}
              <p className="text-[#dae020] text-[11px] min-[400px]:text-[13px] sm:text-sm md:text-lg lg:text-xl font-bold drop-shadow-sm mt-1 sm:mt-2">
                Bharat Mandapam, New Delhi
              </p>
            </div>

            {/* Buttons Container - Container B (Buttons Group) */}
            <div className="relative z-40 w-full flex justify-center mt-3 sm:mt-4 md:mt-6 pointer-events-auto mb-2 sm:mb-0 translate-y-[65px] min-[400px]:translate-y-[85px] sm:translate-y-0">
              <div className="flex items-center justify-center gap-2 sm:gap-4 bg-[#dae020] rounded-full p-1.5 px-3 sm:p-2 sm:px-6 shadow-[0_6px_25px_rgba(218,224,32,0.35)] hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(218,224,32,0.5)] group max-w-[95%] sm:max-w-none relative">
                {[
                  { text: 'Book A Booth', href: '/book-stand-form' },
                  { text: 'Buyer Registration', href: '/buyer-reg-form' }
                ].map((item, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <Link href={item.href} key={item.text} className="flex-1 sm:flex-none flex">
                      <button
                        className="w-full relative group/btn px-4 sm:px-8 md:px-12 py-2 sm:py-3 rounded-full transition-all duration-300"
                        onMouseEnter={() => setActiveTab(idx)}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="heroTabPill"
                            className="absolute inset-0 w-full h-full bg-white shadow-sm z-0 rounded-full"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}

                        <span className="relative z-10 font-black text-[10px] min-[400px]:text-[11px] sm:text-xs md:text-sm tracking-wider transition-colors duration-300 whitespace-nowrap text-black">
                          {item.text}
                        </span>
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Robot Hands & Body (Single Image) - Commented out
        <div className="absolute top-[22%] md:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[38%] md:-translate-y-[44%] z-50 pointer-events-none w-[130vw] md:w-[120vw] max-w-[1900px] aspect-[16/9] flex justify-center">
          <Image src="/images/hero/CEI-Website-Design-03.webp" alt="Robot Hands" fill priority sizes="100vw" className="drop-shadow-2xl object-contain" />
        </div>
        */}

      </div>

    </section>
  );
}
