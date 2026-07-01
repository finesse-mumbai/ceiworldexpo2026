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
