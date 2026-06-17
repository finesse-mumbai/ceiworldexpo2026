import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 pt-6">
      <div className="max-w-[95rem] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-start gap-6">

        {/* Left Side: Logo and Text */}
        <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://www.ceiworldexpo.com/img/CEI-August-2026-logo.png"
            alt="CEI Logo"
            className="h-16 sm:h-20 lg:h-24 w-auto drop-shadow-md"
          />
          <div className="flex flex-col text-left pl-1">
            <h1 className="text-base sm:text-lg lg:text-xl xl:text-[1.3rem] leading-[1.3] font-medium tracking-wide">
              <span className="text-black drop-shadow-sm">India Consumer </span>
              <span className="text-[#009ad7] drop-shadow-sm">Electronics,</span><br />
              <span className="text-[#009ad7] drop-shadow-sm">Components</span>
              <span className="text-black drop-shadow-sm"> & </span>
              <span className="text-[#009ad7] drop-shadow-sm">Home Appliances</span>
            </h1>
          </div>
        </div>

        {/* Right Side: Navigation Pill */}
        <div className="hidden lg:flex items-center bg-white rounded-full px-1.5 py-1.5 shadow-lg space-x-2 lg:mt-6">
          <a href="#" className="px-6 py-2.5 bg-black text-[#dae020] rounded-full text-sm font-semibold tracking-wide shadow-md">Home</a>
          <a href="#" className="px-6 py-2.5 text-gray-700 hover:text-black text-sm font-semibold tracking-wide transition-colors">FairInfo</a>
          <a href="#" className="px-6 py-2.5 text-gray-700 hover:text-black text-sm font-semibold tracking-wide transition-colors">Exhibitors</a>
          <a href="#" className="px-6 py-2.5 text-gray-700 hover:text-black text-sm font-semibold tracking-wide transition-colors">Buyers</a>
          <a href="#" className="px-6 py-2.5 text-gray-700 hover:text-black text-sm font-semibold tracking-wide transition-colors">Media</a>
          <a href="#" className="px-6 py-2.5 text-gray-700 hover:text-black text-sm font-semibold tracking-wide transition-colors">Contact Us</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center mt-4">
          <button className="p-2 text-black hover:text-[#009ad7] transition-colors focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
