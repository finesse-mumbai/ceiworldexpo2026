"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = ['Home', 'FairInfo', 'Exhibitors', 'Buyers', 'Media', 'Contact Us'];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 pt-6">
      <div className="max-w-[95rem] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start gap-6">

        {/* Left Side: Logo and Text */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">
          {/* Top Row for Mobile (Logo + Hamburger) */}
          <div className="flex flex-row justify-between items-center w-full lg:w-auto">
            <img
              src="https://www.ceiworldexpo.com/img/CEI-August-2026-logo.png"
              alt="CEI Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-md"
            />
            {/* Mobile Menu Icon (Moved here) */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-black hover:text-[#009ad7] transition-colors focus:outline-none">
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="flex flex-col text-left pl-1 w-full text-center lg:text-left mt-2 lg:mt-0">
            <h1 className="text-[1.02rem] sm:text-[1.15rem] lg:text-[1.27rem] xl:text-[1.32rem] leading-[1.3] font-black tracking-wide">
              <span className="block">
                <span className="text-black drop-shadow-sm font-medium">India Consumer </span>
                <span className="text-[#009ad7] drop-shadow-sm">Electronics,</span>
              </span>
              <span className="block">
                <span className="text-[#009ad7] drop-shadow-sm">Components</span>
                <span className="text-black drop-shadow-sm font-medium"> & </span>
                <span className="text-[#009ad7] drop-shadow-sm">Home Appliances</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Right Side: Navigation Pill */}
        <div 
          className="hidden lg:flex items-center bg-white rounded-full px-1.5 py-1.5 shadow-lg space-x-2 lg:mt-6 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = activeIndex === index;
            const showPill = hoveredIndex !== null ? isHovered : isActive;

            return (
              <a
                key={item}
                href="#"
                className="relative px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={(e) => { e.preventDefault(); setActiveIndex(index); }}
              >
                {showPill && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-black rounded-full z-0 shadow-md"
                    transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${showPill ? 'text-[#dae020]' : 'text-gray-700 hover:text-black'}`}>
                  {item}
                </span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-lg shadow-lg ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4 border-t border-gray-100' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col space-y-1 px-6">
          <a href="#" className="py-3 text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50">Home</a>
          <a href="#" className="py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">FairInfo</a>
          <a href="#" className="py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">Exhibitors</a>
          <a href="#" className="py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">Buyers</a>
          <a href="#" className="py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">Media</a>
          <a href="#" className="py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide transition-colors">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
