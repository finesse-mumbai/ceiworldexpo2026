"use client";
import React from 'react';
const BrandShaderGradient = React.memo(() => (
  <div
    className="absolute inset-0 overflow-hidden rounded-2xl opacity-100 z-0 pointer-events-none animate-gradient-slow bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)] bg-[length:200%_200%]"
    style={{
      WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      transform: 'translateZ(0)',
      willChange: 'transform'
    }}
  >
    {/* True Glassmorphism Overlay */}
    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm z-10 pointer-events-none border border-white/10 rounded-2xl"></div>
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
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[550px] md:h-full bg-black shadow-2xl">
            <BrandShaderGradient />
            <div className="absolute top-8 left-8 right-8 text-white transition-colors duration-500 z-20">
              <span className="text-xl tracking-widest block mb-3 font-medium group-hover:text-[#dae020] transition-colors duration-500">01</span>
              <div className="w-full h-[1px] bg-white/60 mb-4 group-hover:bg-[#dae020] transition-colors duration-500"></div>
              <h3 className="text-3xl font-medium tracking-wide leading-tight group-hover:text-white">Home<br />appliance</h3>
            </div>

            {/* Image placed left-aligned and very large */}
            <div className="absolute -bottom-[10%] -left-[30%] w-[240%] h-[200%] z-20 transition-transform duration-700 scale-110 group-hover:scale-100 flex items-end justify-start p-2">
              <img src="https://www.ceiworldexpo.com/img/cei-new-design/CEI-Website-Design-07.png" alt="Home Appliance" className="w-full h-full object-contain object-left-bottom drop-shadow-xl" />
            </div>
          </div>

          {/* Card 2: Components */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between h-[550px] md:h-full bg-black shadow-2xl">
            <BrandShaderGradient />
            <div className="p-8 text-white transition-colors duration-500 z-20 flex-grow">
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

            <div className="w-full relative h-[35%] shrink-0 rounded-t-xl overflow-hidden z-20">
              <img src="https://www.ceiworldexpo.com/img/cei-new-design/CEI-Website-Design-05.png" alt="Components" className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </div>

          {/* Card 3: Consumer Electronics */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[550px] md:h-full bg-black shadow-2xl">
            <BrandShaderGradient />
            <div className="absolute top-8 left-8 right-8 text-white transition-colors duration-500 z-20">
              <span className="text-xl tracking-widest block mb-3 font-medium group-hover:text-[#dae020] transition-colors duration-500">03</span>
              <div className="w-full h-[1px] bg-white/60 mb-4 group-hover:bg-[#dae020] transition-colors duration-500"></div>
              <h3 className="text-3xl font-medium tracking-wide leading-tight group-hover:text-white">Consumer<br />Electronics</h3>
            </div>

            {/* Image placed left-aligned and very large */}
            <div className="absolute -bottom-[10%] -left-[30%] w-[240%] h-[200%] z-20 transition-transform duration-700 scale-110 group-hover:scale-100 flex items-end justify-start p-2">
              <img src="https://www.ceiworldexpo.com/img/cei-new-design/CEI-Website-Design-06.png" alt="Consumer Electronics" className="w-full h-full object-contain object-left-bottom drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
