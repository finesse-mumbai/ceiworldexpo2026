"use client";
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const logos = {
    industry: ["https://www.ceiworldexpo.com/img/Industry_Partner_ceama.png"],
    supporting: [
      "https://www.ceiworldexpo.com/img/GECC.png",
      "https://www.ceiworldexpo.com/img/Supporting_Associations_fitag_logo.png",
      "https://www.ceiworldexpo.com/img/Supporting_Associations_cecexpo_logo.png",
      "https://www.ceiworldexpo.com/img/CCPIT-Electronics.png"
    ],
    media: [
      "https://www.ceiworldexpo.com/img/ElectronicCity_logo.png",
      "https://www.ceiworldexpo.com/img/abiz.png",
      "https://www.ceiworldexpo.com/img/21ic.png",
      "https://www.ceiworldexpo.com/img/it-logo.png"
    ]
  };

  const Card = ({ src }: { src: string }) => (
    <div className="relative group w-48 h-28 rounded-2xl bg-white shadow-xl flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(218,224,32,0.3)]">
      <img src={src} alt="Partner" className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>
  );

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-24 bg-gradient-to-b from-brand-blue to-[#0082ba] text-center overflow-hidden"
    >
      {/* Spotlight Orb */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-screen pointer-events-none z-0"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)",
          opacity: isHovered ? 1 : 0
        }}
        transition={{ opacity: { duration: 0.5 } }}
      />

      {/* Grid Pattern overlay for tech feel */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Industry Partner</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          {logos.industry.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Supporting Associations</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          {logos.supporting.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Past Media Partners</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {logos.media.map((src, i) => <Card key={i} src={src} />)}
        </div>
      </div>
    </section>
  );
}
