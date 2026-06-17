"use client";
import React from 'react';

export default function ExhibitorProfile() {
  return (
    <section className="pt-20 pb-20 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title with horizontal line */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wide">Exhibitor Profile</h2>
          <div className="flex-grow h-px bg-brand-blue opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[550px]">

          {/* Card 1: Home Appliance */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[450px] md:h-full bg-[#009ad7]/80 backdrop-blur-xl border border-white/40 shadow-xl">
            <div className="absolute top-8 left-8 right-8 text-white z-10">
              <span className="text-xl tracking-widest block mb-3 font-medium">01</span>
              <div className="w-full h-[1px] bg-white/60 mb-4"></div>
              <h3 className="text-3xl font-medium tracking-wide leading-tight">Home<br />appliance</h3>
            </div>

            {/* Image placed bottom-left, scaled up */}
            <div className="absolute -bottom-10 sm:-bottom-18 -left-10 sm:-left-20 w-[170%] sm:w-[195%] transition-transform duration-700 group-hover:scale-105 origin-bottom-left">
              <img src="https://www.ceiworldexpo.com/img/cei-new-design/CEI-Website-Design-07.png" alt="Home Appliance" className="w-full h-auto drop-shadow-xl" />
            </div>
          </div>

          {/* Card 2: Components */}
          <div className="relative rounded-2xl overflow-hidden flex flex-col justify-between h-[550px] md:h-full bg-[#009ad7]/80 backdrop-blur-xl border border-white/40 shadow-xl">
            <div className="p-8 text-white z-10 flex-grow">
              <span className="text-xl tracking-widest block mb-3 font-medium">02</span>
              <div className="w-full h-[1px] bg-white/60 mb-4"></div>
              <h3 className="text-3xl font-medium tracking-wide mb-6">Components</h3>

              <ul className="space-y-2.5 text-xs sm:text-sm font-medium tracking-wide text-white">
                <li>• Electronic Components & Equipment</li>
                <li>• Semiconductors</li>
                <li>• Electronic Design (ED/EDA)</li>
                <li>• Active & Passive Components</li>
                <li className="leading-snug">• Discrete Components<br /><span className="pl-3 opacity-90 text-[10px] sm:text-xs font-normal tracking-normal">(condensers, capacitors, transistors, etc.)</span></li>
              </ul>

              <button className="mt-8 px-8 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-[#56c1ed] transition-colors">
                See more
              </button>
            </div>

            <div className="w-full relative h-[35%] shrink-0 rounded-t-xl overflow-hidden">
              <img src="https://www.ceiworldexpo.com/img/cei-new-design/CEI-Website-Design-05.png" alt="Components" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 3: Consumer Electronics */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[450px] md:h-full bg-[#009ad7]/80 backdrop-blur-xl border border-white/40 shadow-xl">
            <div className="absolute top-8 left-8 right-8 text-white z-10">
              <span className="text-xl tracking-widest block mb-3 font-medium">03</span>
              <div className="w-full h-[1px] bg-white/60 mb-4"></div>
              <h3 className="text-3xl font-medium tracking-wide leading-tight">Consumer<br />Electronics</h3>
            </div>

            {/* Image placed bottom-left, scaled up */}
            <div className="absolute -bottom-10 sm:-bottom-19 -left-16 sm:-left-38 w-[190%] sm:w-[220%] transition-transform duration-700 group-hover:scale-105 origin-bottom-left">
              <img src="https://www.ceiworldexpo.com/img/cei-new-design/CEI-Website-Design-06.png" alt="Consumer Electronics" className="w-full h-auto drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
