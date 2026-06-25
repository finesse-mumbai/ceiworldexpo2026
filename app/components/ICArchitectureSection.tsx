"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const subpoints = [
  { id: 1, title: "Consumer Electronics & Home Appliances", desc: "Showcase your products to a qualified B2B audience actively looking for the latest in consumer electronics, home appliances, and components.", side: "left", top: "15%", delay: 0.2 },
  { id: 2, title: "Expand Reach in India’s Market", desc: "Connect with importers, distributors, retailers, e-commerce players, OEMs, and sourcing professionals building strong portfolios.", side: "left", top: "50%", delay: 0.6 },
  { id: 3, title: "High-Value Business Partnerships", desc: "Meet manufacturers, brand owners, channel partners, and buyers to unlock new distribution tie-ups and sourcing opportunities.", side: "left", top: "85%", delay: 1.0 },
  { id: 4, title: "Showcase Innovation", desc: "From smart appliances to essential components, CEI is where product innovation meets serious business opportunity.", side: "right", top: "15%", delay: 0.4 },
  { id: 5, title: "Strengthen Brand Visibility", desc: "Position your company in front of a focused trade audience and establish a stronger market presence in a dynamic electronics market.", side: "right", top: "50%", delay: 0.8 },
  { id: 6, title: "Gateway to Electronics Ecosystem", desc: "With rising demand for consumer electronics, CEI offers direct access to a market scaling rapidly across retail, distribution, and manufacturing.", side: "right", top: "85%", delay: 1.2 },
];

const Card = ({ point, active }: { point: typeof subpoints[0], active: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: point.side === 'left' ? -20 : 20 }}
    animate={active ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: point.side === 'left' ? -20 : 20 }}
    transition={{ delay: point.delay + 0.5, duration: 0.5 }}
    className="absolute w-full p-5 bg-[#050811]/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300 group z-20 flex flex-col items-center text-center justify-center min-h-[160px]"
    style={{
      top: point.top,
      transform: 'translateY(-50%)'
    }}
  >
    {/* The Pin connection dot on the card */}
    <div className={`absolute w-3 h-3 border-2 border-cyan-400 bg-black rounded-full top-1/2 -translate-y-1/2 ${point.side === 'left' ? '-right-1.5' : '-left-1.5'} group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_cyan] transition-all duration-300 z-30`} />

    <h4 className="text-cyan-300 font-bold mb-2 text-lg">{point.title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>

    <div className="absolute inset-0 bg-[url('/images/hero/grid.png')] opacity-[0.03] pointer-events-none rounded-xl" />
  </motion.div>
);

export default function ICArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#02040a] relative overflow-hidden">
      
      <div className="text-center mb-24 relative z-30">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wider">Why Choose <span className="text-cyan-400">CEI ?</span></h2>
        <p className="text-cyan-800 font-mono tracking-widest text-sm">INTEGRATED ECOSYSTEM ARCHITECTURE</p>
      </div>

      <div ref={ref} className="relative w-full max-w-[1200px] mx-auto h-[900px] hidden md:block">
        
        {/* LEFT COLUMN */}
        <div className="absolute left-4 top-0 bottom-0 w-[320px] z-20">
          {subpoints.filter(p => p.side === 'left').map(point => (
            <Card key={point.id} point={point} active={isInView} />
          ))}
        </div>

        {/* LEFT SVG CONNECTIONS */}
        <svg className="absolute left-[336px] right-[calc(50%+116px)] top-0 bottom-0 h-full w-[calc(50%-452px)] z-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          {/* Top Left Path */}
          <motion.polyline points="102,38.33 60,38.33 60,15 -2,15" fill="none" stroke="#00ffff" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.8 } : { opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }} />

          {/* Mid Left Path */}
          <motion.line x1="102" y1="50" x2="-2" y2="50" fill="none" stroke="#00ffff" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.8 } : { opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }} />

          {/* Bot Left Path */}
          <motion.polyline points="102,61.66 60,61.66 60,85 -2,85" fill="none" stroke="#00ffff" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.8 } : { opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 1.0 }} />
        </svg>

        {/* CENTER COLUMN (IC BOX) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] h-[300px] bg-[#050811] border border-cyan-500/50 rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.15)] flex flex-col items-center justify-center backdrop-blur-xl z-20"
        >
          {/* Inner Processor details */}
          <div className="w-[160px] h-[220px] border border-cyan-800/80 rounded-xl flex items-center justify-center relative overflow-hidden bg-black/50">
            <div className="absolute inset-0 bg-[url('/images/hero/grid.png')] opacity-20" />
            <motion.div
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl"
            />
            <div className="relative z-10 text-center">
              <span className="text-cyan-400 font-black text-3xl tracking-widest drop-shadow-[0_0_10px_cyan]">CEI</span>
              <div className="w-full h-[1px] bg-cyan-500/50 my-2" />
              <span className="text-white text-sm tracking-[0.3em] font-bold">HUB</span>
            </div>
          </div>

          {/* Golden IC Pins (Restored to exact previous design) */}
          <div className="absolute -left-3 top-[41px] w-3 h-2 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-l-sm" />
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-l-sm" />
          <div className="absolute -left-3 bottom-[41px] w-3 h-2 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-l-sm" />

          <div className="absolute -right-3 top-[41px] w-3 h-2 bg-gradient-to-l from-yellow-600 to-yellow-400 rounded-r-sm" />
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-2 bg-gradient-to-l from-yellow-600 to-yellow-400 rounded-r-sm" />
          <div className="absolute -right-3 bottom-[41px] w-3 h-2 bg-gradient-to-l from-yellow-600 to-yellow-400 rounded-r-sm" />
        </motion.div>

        {/* RIGHT SVG CONNECTIONS */}
        <svg className="absolute left-[calc(50%+116px)] right-[336px] top-0 bottom-0 h-full w-[calc(50%-452px)] z-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          {/* Top Right Path */}
          <motion.polyline points="-2,38.33 40,38.33 40,15 102,15" fill="none" stroke="#00ffff" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.8 } : { opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }} />

          {/* Mid Right Path */}
          <motion.line x1="-2" y1="50" x2="102" y2="50" fill="none" stroke="#00ffff" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.8 } : { opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }} />

          {/* Bot Right Path */}
          <motion.polyline points="-2,61.66 40,61.66 40,85 102,85" fill="none" stroke="#00ffff" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={isInView ? { opacity: 0.8 } : { opacity: 0 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }} />
        </svg>

        {/* RIGHT COLUMN */}
        <div className="absolute right-4 top-0 bottom-0 w-[320px] z-20">
          {subpoints.filter(p => p.side === 'right').map(point => (
            <Card key={point.id} point={point} active={isInView} />
          ))}
        </div>

      </div>

      {/* Mobile Fallback (Stacked) */}
      <div className="md:hidden flex flex-col items-center gap-6 px-4 relative z-10 mt-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-48 h-48 bg-[#050811] border-2 border-cyan-500/50 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] flex items-center justify-center relative mb-12"
        >
          <div className="w-36 h-36 border border-cyan-800 rounded-xl flex items-center justify-center bg-black/50">
            <div className="text-center">
              <span className="text-cyan-400 font-black text-2xl tracking-widest">CEI</span>
              <div className="w-full h-[2px] bg-cyan-500/50 my-2" />
              <span className="text-white text-sm tracking-[0.2em]">HUB</span>
            </div>
          </div>
          <div className="absolute -bottom-16 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>

        <div className="flex flex-col gap-6 w-full">
          {subpoints.map((point, idx) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full p-6 bg-[#050811]/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.05)] relative overflow-hidden text-center"
            >
              <div className="absolute left-0 top-0 right-0 h-1 bg-cyan-400" />
              <h4 className="text-cyan-300 font-bold mb-3 text-lg">{point.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
