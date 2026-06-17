"use client";
import React, { useState, useEffect } from 'react';

export default function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navbar after scrolling down 200px
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${
        isScrolled ? 'translate-y-0 shadow-sm' : '-translate-y-full'
      } bg-white/70 backdrop-blur-lg border-b border-white/30`}
    >
      <div className="max-w-[95rem] mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <img 
            src="https://www.ceiworldexpo.com/img/CEI-August-2026-logo.png" 
            alt="CEI Logo" 
            className="h-12 sm:h-14 md:h-16 w-auto drop-shadow-sm transition-all duration-300" 
          />
        </div>

        {/* Right Side: Navigation Pill */}
        <div className="hidden lg:flex items-center bg-white/90 backdrop-blur-md rounded-full px-1.5 py-1.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-white/40 space-x-1">
          <a href="#" className="px-5 py-2 bg-[#1b1464] text-[#dae020] rounded-full text-[13px] font-semibold tracking-wide shadow-md transition-all hover:bg-black hover:scale-105">Home</a>
          <a href="#" className="px-5 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300">FairInfo</a>
          <a href="#" className="px-5 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300">Exhibitors</a>
          <a href="#" className="px-5 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300">Buyers</a>
          <a href="#" className="px-5 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300">Media</a>
          <a href="#" className="px-5 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300">Contact Us</a>
        </div>

        {/* Mobile Menu Icon */}
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

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-lg ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4 border-t border-gray-100' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col space-y-2 px-6">
          <a href="#" className="py-2 text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50">Home</a>
          <a href="#" className="py-2 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">FairInfo</a>
          <a href="#" className="py-2 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">Exhibitors</a>
          <a href="#" className="py-2 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">Buyers</a>
          <a href="#" className="py-2 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide border-b border-gray-100/50 transition-colors">Media</a>
          <a href="#" className="py-2 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide transition-colors">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
