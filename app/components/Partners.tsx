"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export default function Partners() {
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
    <div className="relative group w-48 h-28 rounded-2xl bg-white shadow-xl flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 pointer-events-auto">
      <img src={src} alt="Partner" className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>
  );

  const [cols, setCols] = useState(24);
  const [rows, setRows] = useState(20);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  useEffect(() => {
    const onResize = () => {
      if (!containerRef.current) return;
      const r = containerRef.current.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      const c = w < 640 ? 12 : w < 768 ? 17 : w < 1024 ? 24 : 32;
      setCols(c);
      setRows(Math.ceil(h / (w / c)) + 2);
    };
    const onMouse = (e: MouseEvent) => {
      // Capture viewport coordinates for mouse tracking
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    // Initial calculation
    onResize();
    
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    const unsub = springX.on('change', (lx) => {
      if (!gridRef.current) return;
      const ly = springY.get();
      gridRef.current.querySelectorAll('.shard-el').forEach((el) => {
        const r = el.getBoundingClientRect();
        // Compare with viewport coordinates
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const d = Math.hypot(lx - cx, ly - cy);
        const htmlEl = el as HTMLElement;
        if (d < 240) {
          const p = 1 - d / 240;
          htmlEl.style.transform = `translate3d(${(cx - lx) * 0.45 * p}px, ${(cy - ly) * 0.45 * p}px, ${p * 50}px) scale(${1 + p * 0.08}) rotateX(${(ly - cy) / 8 * p}deg) rotateY(${-(lx - cx) / 8 * p}deg)`;
          htmlEl.style.zIndex = Math.round(p * 200).toString();
          const shadowLayers: string[] = [];
          shadowLayers.push(`-${p * 4}px -${p * 4}px 0px rgba(0, 240, 255, ${p * 0.85})`);
          shadowLayers.push(`${p * 4}px ${p * 4}px 0px rgba(0, 154, 215, ${p * 0.85})`);
          const maxDepth = Math.floor(p * 16);
          for (let j = 1; j <= maxDepth; j++) {
            // Replaced red with dark blue (#00141c)
            shadowLayers.push(`${j}px ${j}px 0px #00141c`);
          }
          htmlEl.style.boxShadow = shadowLayers.join(', ');
        } else {
          htmlEl.style.transform = 'translate3d(0,0,0) scale(1) rotateX(0deg) rotateY(0deg)';
          htmlEl.style.zIndex = '0';
          htmlEl.style.boxShadow = 'none';
        }
      });
    });
    return () => unsub();
  }, [springX, springY]);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 bg-[#009ad7] text-center overflow-hidden"
    >
      {/* Kinetic Grid Background */}
      <div className="absolute inset-0 z-0 bg-[#009ad7] overflow-hidden pointer-events-none">
        <div
          id="kinetic-grid"
          ref={gridRef}
          className="absolute inset-0 z-0 grid content-start overflow-hidden bg-[#009ad7]"
          style={{ 
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            perspective: '1200px',
            transformStyle: 'preserve-3d'
          }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => (
            <div 
              key={i} 
              className="shard-el relative w-full aspect-square will-change-transform bg-transparent"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 bg-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pointer-events-none">
        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Industry Partner</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap pointer-events-auto">
          {logos.industry.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Supporting Associations</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap pointer-events-auto">
          {logos.supporting.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Past Media Partners</h3>
        <div className="flex justify-center gap-6 flex-wrap pointer-events-auto">
          {logos.media.map((src, i) => <Card key={i} src={src} />)}
        </div>
      </div>
    </section>
  );
}
