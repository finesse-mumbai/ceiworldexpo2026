"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

export default function MarketInfo() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="pt-20 md:pt-24 pb-20 bg-white">
      <div className="w-full max-w-[95rem] mx-auto px-4 md:px-8">
        {/* Title Reveal */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide mb-8 md:mb-10 text-black text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          India Market Info
        </motion.h2>
        
        <motion.div 
          className="text-center w-full mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p 
            variants={itemVariants}
            className="w-full text-center font-sans text-2xl leading-relaxed text-black md:text-3xl mb-6 md:mb-8"
          >
            India’s electronics and home appliances industry encompasses a wide range of products including consumer electronics, white goods, smart home appliances, IT hardware, components, and sub-assemblies.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="w-full text-center font-sans text-2xl leading-relaxed text-black md:text-3xl mb-10 md:mb-12"
          >
            Between FY2015 and FY2025, India’s electronics production grew at a CAGR of over 15%, rising from approximately US$ 29 billion to over US$ 101 billion. Looking ahead, the sector is projected to reach about US$ 500 billion by FY2030.
          </motion.p>
          
          <motion.div variants={itemVariants} className="text-center">
            <button className="px-8 py-2.5 bg-[#00a0e3] text-white rounded-full font-medium text-sm md:text-base shadow-md hover:bg-[#008bc2] hover:shadow-lg transition-all">
              Read More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}