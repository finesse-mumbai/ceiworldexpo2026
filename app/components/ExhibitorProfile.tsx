"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
const BrandShaderGradient = React.memo(() => (
  <div
    className="absolute inset-0 overflow-hidden rounded-md opacity-100 z-0 pointer-events-none bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)]"
  >
    <div className="absolute inset-0 z-10 pointer-events-none border border-white/10 rounded-md"></div>
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

        <div className="grid gap-5 md:grid-cols-3" style={{ perspective: "1200px" }}>

          {/* Card 1: Home Appliance */}
          <TiltCard className="relative flex aspect-[3/4] flex-col rounded-md overflow-hidden group cursor-pointer bg-[#00141c] shadow-lg">
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
            <div className="absolute -bottom-[13%] -left-[30%] w-[240%] h-[200%] z-20 transition-all duration-700 scale-100 group-hover:opacity-0 group-hover:translate-y-8 flex items-end justify-start p-2 pointer-events-none">
              <Image src="/images/hero/CEI-Website-Design-07.webp" alt="Home Appliance" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-left-bottom drop-shadow-2xl contrast-[1.15] saturate-[1.2] brightness-[1.05]" />
            </div>
          </TiltCard>

          {/* Card 2: Components */}
          <TiltCard className="relative flex aspect-[3/4] flex-col rounded-md overflow-hidden group cursor-pointer bg-[#00141c] shadow-lg">
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

            <div className="absolute bottom-0 left-0 w-full h-[45%] z-10 overflow-hidden pointer-events-none" style={{ maskImage: "linear-gradient(to top, black 50%, transparent)" }}>
              <Image src="/images/hero/CEI-Website-Design-05.webp" alt="Components" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-[50%_30%] contrast-[1.15] saturate-[1.2] brightness-[1.05]" />
            </div>
          </TiltCard>

          {/* Card 3: Consumer Electronics */}
          <TiltCard className="relative flex aspect-[3/4] flex-col rounded-md overflow-hidden group cursor-pointer bg-[#00141c] shadow-lg">
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
              <Image src="/images/hero/CEI-Website-Design-06.webp" alt="Consumer Electronics" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain object-left-bottom drop-shadow-2xl contrast-[1.15] saturate-[1.2] brightness-[1.05]" />
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
