"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

export default function Partners() {
  const logos = {
    industry: ["/images/partners/Industry-Partner/industry_partner_ceama.png"],
    supporting: [
      { src: "/images/partners/Supporting-Associations/Supporting_Associations_aise_logo.png", href: "https://aisie.org/" },
      { src: "/images/partners/Supporting-Associations/Supporting_Associations_CCCME.png", href: "https://www.cccme-bbl.com/" },
      { src: "/images/partners/Supporting-Associations/CCPIT-Electronics.png", href: "http://english.ccpitbj.org/" },
      { src: "/images/partners/Supporting-Associations/Supporting_Associations_cecexpo_logo.png" },
      { src: "/images/partners/Supporting-Associations/Supporting_Associations_fitag_logo.png", href: "https://fitag.in/" },
      { src: "/images/partners/Supporting-Associations/GECC.png" },
      { src: "/images/partners/Supporting-Associations/tema.png", href: "https://www.tematelecom.in/" },
      { src: "/images/partners/Supporting-Associations/csai.png", href: "https://www.ncsai.in/" },
      { src: "/images/partners/Supporting-Associations/cmai.png", href: "https://www.cmai.asia/" },
      { src: "/images/partners/Supporting-Associations/adcta.png" },
      { src: "/images/partners/Supporting-Associations/faiita.png", href: "https://www.faiita.co.in/" },
      { src: "/images/partners/Supporting-Associations/iesa.png", href: "https://www.iesaonline.org/" },
      { src: "/images/partners/Supporting-Associations/icea.png", href: "https://icea.org.in/" },
      { src: "/images/partners/Supporting-Associations/mia.png" },
      { src: "/images/partners/Supporting-Associations/cmda_delhi.png" },
      { src: "/images/partners/Supporting-Associations/upcdwa.png" },
      { src: "/images/partners/Supporting-Associations/cmda_01.png" }
    ],
    media: [
      { src: "/images/partners/Supporting-Media-Partners/Electronics-Era-logo.png", href: "https://electronicsera.in/" },
      { src: "/images/partners/Supporting-Media-Partners/electronics-media-log.png", href: "https://www.electronicsmedia.info/" },
      { src: "/images/partners/Supporting-Media-Partners/electronics-world-media-group.png", href: "https://www.99electronicsworld.com/index.html" },
      { src: "/images/partners/Supporting-Media-Partners/timestech.png", href: "https://timestech.in/" },
      { src: "/images/partners/Supporting-Media-Partners/electronics_buzz.png", href: "https://electronicsbuzz.in/" }
    ]
  };

  const Card = ({ src }: { src: string }) => (
    <div className="relative group w-48 h-28 rounded-md bg-white shadow-xl flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 pointer-events-auto">
      <img src={src} alt="Partner" className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>
  );

  const [cols, setCols] = useState(24);
  const [rows, setRows] = useState(20);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const shardElsRef = useRef<HTMLElement[]>([]);
  const cellSizeRef = useRef(0);
  const activeElsRef = useRef<Set<HTMLElement>>(new Set());

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
      cellSizeRef.current = w / c;
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

  // Re-cache the shard elements whenever the grid is rebuilt, so the hot
  // mousemove/spring loop below never has to touch the DOM to find them.
  useEffect(() => {
    if (!gridRef.current) return;
    shardElsRef.current = Array.from(gridRef.current.querySelectorAll<HTMLElement>('.shard-el'));
    activeElsRef.current = new Set();
  }, [cols, rows]);

  useEffect(() => {
    const unsub = springX.on('change', (lx) => {
      const grid = gridRef.current;
      const els = shardElsRef.current;
      if (!grid || els.length === 0) return;
      const ly = springY.get();
      // Single forced-layout read per frame (grid container only) instead of
      // one per cell — cell centers are then derived with pure arithmetic
      // since the grid is a uniform, gap-less CSS grid of square cells.
      const gridRect = grid.getBoundingClientRect();
      const cellSize = cellSizeRef.current || gridRect.width / cols;
      const nextActive = new Set<HTMLElement>();

      els.forEach((htmlEl, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = gridRect.left + col * cellSize + cellSize / 2;
        const cy = gridRect.top + row * cellSize + cellSize / 2;
        const d = Math.hypot(lx - cx, ly - cy);

        if (d < 240) {
          nextActive.add(htmlEl);
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
        }
      });

      // Only reset elements that were active last frame and just left the
      // radius — avoids rewriting identical "resting" styles onto every
      // other cell in the grid on every single frame.
      activeElsRef.current.forEach((htmlEl) => {
        if (!nextActive.has(htmlEl)) {
          htmlEl.style.transform = 'translate3d(0,0,0) scale(1) rotateX(0deg) rotateY(0deg)';
          htmlEl.style.zIndex = '0';
          htmlEl.style.boxShadow = 'none';
        }
      });
      activeElsRef.current = nextActive;
    });
    return () => unsub();
  }, [springX, springY, cols]);

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
      <div className="relative z-10 max-w-[95rem] mx-auto px-4 md:px-8 pointer-events-none">
        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Industry Partner</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap pointer-events-auto">
          {logos.industry.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <Link href="/supporting-associations" className="inline-block pointer-events-auto mb-10 group">
          <h3 className="text-white text-lg font-bold tracking-widest uppercase drop-shadow-md flex items-center gap-2 group-hover:opacity-80 transition-opacity">
            Supporting Associations
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </h3>
        </Link>
        <div className="w-full overflow-hidden mb-20 relative px-4">
          <div className="flex gap-6 pointer-events-auto w-max animate-marquee pb-4 pt-2">
            {[...logos.supporting, ...logos.supporting, ...logos.supporting, ...logos.supporting].map((item, i) => (
              <div key={i} className="flex-shrink-0">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Card src={item.src} />
                  </a>
                ) : (
                  <Card src={item.src} />
                )}
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-25%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Supporting Media Partners</h3>
        <div className="max-w-[950px] mx-auto overflow-hidden relative px-4">
          <div className="flex gap-6 pointer-events-auto w-max animate-marquee pb-4 pt-2">
            {[...logos.media, ...logos.media, ...logos.media, ...logos.media].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 block">
                <Card src={item.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
