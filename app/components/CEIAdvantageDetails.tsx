"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const advantages = [
  {
    title: "A focused platform for Consumer Electronics & Home Appliances",
    desc: "Showcase your products to a qualified B2B audience actively looking for the latest in consumer electronics, home appliances, small domestic appliances, accessories, and components.",
    icon: "🎯",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Expand your reach in India's fast-growing market",
    desc: "Connect with importers, distributors, retailers, e-commerce players, OEMs, and sourcing professionals looking to build strong product portfolios for the Indian market.",
    icon: "📈",
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "Build high-value business partnerships",
    desc: "Meet manufacturers, brand owners, channel partners, trading houses, and buyers under one roof to unlock new distribution tie-ups, sourcing opportunities, and long-term collaborations.",
    icon: "🤝",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Showcase innovation that drives demand",
    desc: "From smart appliances and personal gadgets to essential components and everyday consumer tech, CEI is where product innovation meets serious business opportunity.",
    icon: "💡",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Strengthen your brand visibility",
    desc: "Position your company in front of a focused trade audience, attract new buyers, and establish a stronger market presence in one of the world's most dynamic electronics and appliance markets.",
    icon: "👁️",
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Gateway to India's booming electronics ecosystem",
    desc: "With rising demand for consumer electronics, home appliances, components, and finished products, CEI offers direct access to a market that is scaling rapidly across retail, distribution, and manufacturing.",
    icon: "🚀",
    color: "from-sky-400 to-blue-600"
  },
  {
    title: "Be part of India's next phase of growth",
    desc: "As India strengthens its role as a major electronics manufacturing, sourcing, and consumption hub, CEI places your brand at the heart of this momentum.",
    icon: "🇮🇳",
    color: "from-orange-400 via-white to-green-500"
  }
];

const AdvantageCard = ({ data, index }: { data: typeof advantages[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center w-full mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Center Timeline Line (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-[-4rem] w-1 bg-gradient-to-b from-gray-200 to-gray-100 transform -translate-x-1/2 z-0" />
      
      {/* Center Icon */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-[0_0_20px_rgba(0,154,215,0.3)] z-10 items-center justify-center text-2xl border-4 border-[#f4f7f9]">
        {data.icon}
      </div>

      {/* Content Card */}
      <motion.div 
        className={`w-full md:w-[45%] relative z-10 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
          {/* Subtle gradient background on hover */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${data.color}`} />
          
          {/* Mobile Icon */}
          <div className="md:hidden w-12 h-12 rounded-full bg-[#f4f7f9] flex items-center justify-center text-2xl mb-6 shadow-inner">
            {data.icon}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#1b1464] mb-4 leading-snug">
            {data.title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-medium">
            {data.desc}
          </p>

          {/* Decorative Corner */}
          <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full blur-[40px] bg-gradient-to-br ${data.color} opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />
        </div>
      </motion.div>
    </div>
  );
};

export default function CEIAdvantageDetails() {
  return (
    <section className="py-16 bg-[#f4f7f9] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-[#1b1464] mb-6"
          >
            Why Choose CEI?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1.5 bg-[#009ad7] mx-auto rounded-full"
          />
        </div>

        <div className="relative pt-10">
          {advantages.map((adv, idx) => (
            <AdvantageCard key={idx} data={adv} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
