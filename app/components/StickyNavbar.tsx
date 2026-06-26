"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Fair Info', 
    dropdown: [
      { label: 'About the Exhibition', href: '/about' },
      { label: 'Brochure', href: '/pdf/india-consumer-electronics-components.pdf' },
      { label: 'Factsheet', href: '/factsheet' },
      { label: 'Post Show Report', href: '/post-show-report' },
      { label: 'Venue', href: '/venue' },
      { label: 'Floorplan', href: '/floorplan' },
      { label: 'India market info', href: '/pdf/CEI_2026_India_Market_Report.pdf' },
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

export default function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [hoveredDropdownLabel, setHoveredDropdownLabel] = useState<string | null>(null);

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
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-in-out ${isScrolled ? 'translate-y-0 shadow-sm' : '-translate-y-full'
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
        <div
          className="hidden lg:flex items-center bg-white/90 backdrop-blur-md rounded-full px-1.5 py-1.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-white/40 space-x-1 relative"
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
                  className="relative px-5 py-2 text-[13px] font-semibold tracking-wide transition-colors z-10 block"
                  onClick={(e) => { if(!item.href) e.preventDefault(); setActiveIndex(index); }}
                >
                  {showPill && (
                    <motion.div
                      layoutId="sticky-nav-pill"
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
                  <div className="absolute left-0 top-full pt-2 z-50 origin-top transition-all duration-200 opacity-0 scale-95 invisible pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto">
                    <div className="w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden">
                      <div className="py-2 px-2" onMouseLeave={() => setHoveredDropdownLabel(null)}>
                        {item.dropdown.map(dropItem => {
                        const isDropHovered = hoveredDropdownLabel === dropItem.label;
                        return (
                          <div
                            key={dropItem.label}
                            className="relative"
                            onMouseEnter={() => setHoveredDropdownLabel(dropItem.label)}
                          >
                            <Link 
                              href={dropItem.href} 
                              target={(dropItem.href.startsWith('http') || dropItem.href.endsWith('.pdf')) ? '_blank' : undefined}
                              rel={(dropItem.href.startsWith('http') || dropItem.href.endsWith('.pdf')) ? 'noopener noreferrer' : undefined}
                              className={`block px-4 py-2.5 text-sm transition-colors relative z-10 ${isDropHovered ? 'text-[#dae020]' : 'text-gray-700 group-hover:text-black'}`}
                            >
                              {isDropHovered && (
                                <motion.div
                                  layoutId={`sticky-dropdown-pill-${index}`}
                                  className="absolute inset-0 bg-black rounded-lg z-0 shadow-md"
                                  transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
                                />
                              )}
                              <span className="relative z-10">{dropItem.label}</span>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                )}
              </div>
            );
          })}
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
                        <Link 
                          key={drop.label} 
                          href={drop.href} 
                          target={(drop.href.startsWith('http') || drop.href.endsWith('.pdf')) ? '_blank' : undefined}
                          rel={(drop.href.startsWith('http') || drop.href.endsWith('.pdf')) ? 'noopener noreferrer' : undefined}
                          className="text-sm text-gray-600 hover:text-[#009ad7]"
                        >
                          {drop.label}
                        </Link>
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
    </div>
  );
}
