"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Fair Info', 
    dropdown: [
      { label: 'About the Exhibition', href: '/about' },
      { label: 'Brochure', href: 'https://www.ceiworldexpo.com/pdf/india-consumer-electronics-components.pdf' },
      { label: 'Factsheet', href: '/factsheet' },
      { label: 'Post Show Report', href: '/post-show-report' },
      { label: 'Venue', href: '/venue' },
      { label: 'Floorplan', href: '/floorplan' },
      { label: 'India market info', href: '/india-overview' },
      { label: 'Gallery', href: '/gallery' },
    ]
  },
  {
    label: 'Exhibitors',
    dropdown: [
      { label: 'The CEI Advantage', href: '/advantage' },
      { label: 'Exhibitors Profile', href: '/exhibitor-profile' },
      { label: 'Exhibitors List', href: '/exhibitors-list' },
      { label: 'Show Directory', href: '/show-directory' },
      { label: 'Standard Booth Fitting', href: '/standard_booth_fitting' },
      { label: 'Rules & Regulations', href: '/rules_regulations' },
      { label: 'Exhibitor Registration', href: '/book-stand-form' },
    ]
  },
  {
    label: 'Buyers',
    dropdown: [
      { label: 'Experience CEI', href: '/experience' },
      { label: 'Buyers Profile', href: '/buyer-profile' },
      { label: 'Business Matching Registration', href: '/business-matching-registration' },
      { label: 'Buyer Registration', href: '/buyer-reg-form' },
    ]
  },
  {
    label: 'Media',
    dropdown: [
      { label: 'Press Release', href: '/press-release' },
      { label: 'Logo', href: '/logo' },
      { label: 'Media Registration', href: '/media-registration' },
    ]
  },
  { label: 'Contact Us', href: '/connect' }
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

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
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Link
                  href={item.href || "#"}
                  className="relative px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors z-10 block"
                  onClick={(e) => { if(!item.href) e.preventDefault(); setActiveIndex(index); }}
                >
                  {showPill && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-black rounded-full z-0 shadow-md"
                      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-200 ${showPill ? 'text-[#dae020]' : 'text-gray-700 group-hover:text-black'}`}>
                    {item.label}
                  </span>
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top z-50 ${isHovered ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none'}`}
                  >
                    <div className="py-2">
                      {item.dropdown.map(dropItem => (
                        <Link 
                          key={dropItem.label} 
                          href={dropItem.href} 
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#009ad7] transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-y-auto bg-white/95 backdrop-blur-lg shadow-lg ${isMobileMenuOpen ? 'max-h-[70vh] opacity-100 py-4 border-t border-gray-100' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col space-y-1 px-6 pb-4">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100/50 last:border-0">
              {item.dropdown ? (
                <div>
                  <button 
                    onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide transition-colors focus:outline-none"
                  >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 transition-transform ${mobileDropdownOpen === item.label ? 'rotate-180 text-[#009ad7]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileDropdownOpen === item.label ? 'max-h-[500px] pb-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col pl-4 space-y-3">
                      {item.dropdown.map(drop => (
                        <Link key={drop.label} href={drop.href} className="text-sm text-gray-600 hover:text-[#009ad7]">{drop.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link href={item.href || "#"} className="block py-3 text-gray-700 hover:text-[#009ad7] font-semibold tracking-wide transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
