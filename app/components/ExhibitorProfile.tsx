"use client";
import React from 'react';
import Image from 'next/image';
const BrandShaderGradient = React.memo(() => (
  <div
    className="absolute inset-0 overflow-hidden rounded-2xl opacity-100 z-0 pointer-events-none animate-gradient-slow bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)] bg-[length:200%_200%]"
  >
    <div className="absolute inset-0 z-10 pointer-events-none border border-white/10 rounded-2xl"></div>
  </div>
));
BrandShaderGradient.displayName = 'BrandShaderGradient';

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
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[550px] md:h-full bg-[#00141c]">
            <BrandShaderGradient />
            
            {/* Content Container */}
            <div className="absolute top-8 left-8 right-8 text-white z-30 pointer-events-none">
              <span className="text-xl tracking-widest block mb-3 font-medium group-hover:text-[#dae020] transition-colors duration-500">01</span>
              <div className="w-full h-[1px] bg-white/60 mb-4 group-hover:bg-[#dae020] transition-colors duration-500"></div>
              <h3 className="text-3xl font-medium tracking-wide leading-tight group-hover:text-white mb-6">Home<br />appliance</h3>

              {/* Sub-points and Button - Hidden initially, shown on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto transform translate-y-4 group-hover:translate-y-0">
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium tracking-wide text-white mb-8">
                  <li>• Large Appliances</li>
                  <li>• Air Conditioners</li>
                  <li>• Refrigerators</li>
                  <li>• Freezer/Wine Chillers</li>
                  <li>• Washing Machines</li>
                  <li>• Drying Machines</li>
                </ul>

                <button className="px-8 py-2 border border-white rounded-full text-sm font-medium hover:bg-[#dae020] hover:border-[#dae020] hover:text-[#1b1464] transition-all duration-300 pointer-events-auto">
                  See more
                </button>
              </div>
            </div>

            {/* Image Container - Disappears on hover */}
            <div className="absolute -bottom-[10%] -left-[30%] w-[240%] h-[200%] z-20 transition-all duration-700 scale-100 group-hover:opacity-0 group-hover:translate-y-8 flex items-end justify-start p-2 pointer-events-none">
              <Image src="/images/hero/CEI-Website-Design-07.png" alt="Home Appliance" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-left-bottom drop-shadow-xl" />
            </div>
          </div>

          {/* Card 2: Components */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[550px] md:h-full bg-[#00141c]">
            <BrandShaderGradient />
            <div className="p-8 text-white transition-all duration-700 z-20 relative h-full pointer-events-none">
              <div className="relative z-20 pointer-events-auto">
                <span className="text-xl tracking-widest block mb-3 font-medium group-hover:text-[#dae020] transition-colors duration-500">02</span>
                <div className="w-full h-[1px] bg-white/60 mb-4 group-hover:bg-[#dae020] transition-colors duration-500"></div>
                <h3 className="text-3xl font-medium tracking-wide mb-6 group-hover:text-white">Components</h3>

                <ul className="space-y-2.5 text-xs sm:text-sm font-medium tracking-wide text-white transition-colors duration-500">
                  <li>• Electronic Components & Equipment</li>
                  <li>• Semiconductors</li>
                  <li>• Electronic Design (ED/EDA)</li>
                  <li>• Active & Passive Components</li>
                  <li className="leading-snug">• Discrete Components<br /><span className="pl-3 opacity-90 text-[10px] sm:text-xs font-normal tracking-normal">(condensers, capacitors, transistors, etc.)</span></li>
                </ul>

                <button className="mt-8 px-8 py-2 border border-white rounded-full text-sm font-medium group-hover:bg-[#dae020] group-hover:border-[#dae020] group-hover:text-[#1b1464] transition-all duration-500">
                  See more
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[24%] hover:h-full rounded-t-xl hover:rounded-none transition-all duration-700 ease-in-out z-30 overflow-hidden group/image">
              <Image src="/images/hero/CEI-Website-Design-05.png" alt="Components" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[50%_30%] scale-110 group-hover/image:scale-100 transition-transform duration-700" />
            </div>
          </div>

          {/* Card 3: Consumer Electronics */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[550px] md:h-full bg-[#00141c]">
            <BrandShaderGradient />
            
            {/* Content Container */}
            <div className="absolute top-8 left-8 right-8 text-white z-30 pointer-events-none">
              <span className="text-xl tracking-widest block mb-3 font-medium group-hover:text-[#dae020] transition-colors duration-500">03</span>
              <div className="w-full h-[1px] bg-white/60 mb-4 group-hover:bg-[#dae020] transition-colors duration-500"></div>
              <h3 className="text-3xl font-medium tracking-wide leading-tight group-hover:text-white mb-6">Consumer<br />Electronics</h3>

              {/* Sub-points and Button - Hidden initially, shown on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto transform translate-y-4 group-hover:translate-y-0">
                <ul className="space-y-2.5 text-xs sm:text-sm font-medium tracking-wide text-white mb-8">
                  <li>• Large Appliances</li>
                  <li>• Air Conditioners</li>
                  <li>• Refrigerators</li>
                  <li>• Freezer/Wine Chillers</li>
                  <li>• Washing Machines</li>
                  <li>• Drying Machines</li>
                </ul>

                <button className="px-8 py-2 border border-white rounded-full text-sm font-medium hover:bg-[#dae020] hover:border-[#dae020] hover:text-[#1b1464] transition-all duration-300 pointer-events-auto">
                  See more
                </button>
              </div>
            </div>

            {/* Image Container - Disappears on hover */}
            <div className="absolute -bottom-[10%] -left-[30%] w-[240%] h-[200%] z-20 transition-all duration-700 scale-100 group-hover:opacity-0 group-hover:translate-y-8 flex items-end justify-start p-2 pointer-events-none">
              <Image src="/images/hero/CEI-Website-Design-06.png" alt="Consumer Electronics" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-left-bottom drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
