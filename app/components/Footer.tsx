"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-black pb-20 pt-10">

      <div className="relative z-10 max-w-[95rem] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between md:items-center items-start gap-8 lg:gap-16">

        {/* Left Side: Logo and Address */}
        <div className="flex flex-col gap-6 w-full md:w-[40%] lg:w-[35%] shrink-0 items-center md:items-start text-center md:text-left mt-2">
          <img src="https://www.worldexindia.com/assets/img/logo.svg" alt="Worldex India" className="w-64 sm:w-[22rem]" />

          <div className="text-white text-[15px] sm:text-[17px] leading-relaxed space-y-5 mt-2 tracking-wide">
            <p className="font-bold">
              Worldex India Exhibition & Promotion Pvt. Ltd.
            </p>
            <p className="text-gray-200">
              309, Parvati Premises, Sun Mill Complex,<br />
              Lower Parel (W), Mumbai - 400 013, India.
            </p>
            <p className="font-bold">(022) 4037-6700</p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 items-center justify-center md:justify-start pt-2">
              <a href="https://www.facebook.com/IndiaConsumerElectronicsandHomeAppliances" target="_blank" rel="noopener noreferrer" className="bg-[#00141c] bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)] border border-white/20 p-2.5 rounded-full hover:scale-110 hover:border-white/50 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/cei_worldexpo/?next=%2F" target="_blank" rel="noopener noreferrer" className="bg-[#00141c] bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)] border border-white/20 p-2.5 rounded-full hover:scale-110 hover:border-white/50 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/100903329/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="bg-[#00141c] bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)] border border-white/20 p-2.5 rounded-full hover:scale-110 hover:border-white/50 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Newsletter */}
        <div className="w-full md:w-[70%] flex justify-center md:justify-end mt-8 md:mt-0">
          <Newsletter />
        </div>

      </div>
    </footer>
  );
}
