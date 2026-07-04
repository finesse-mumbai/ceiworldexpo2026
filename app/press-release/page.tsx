"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Quote } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function PressReleasePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative flex flex-col pt-28 md:pt-40">
      {/* Hero Banner Section */}
      <div className="relative bg-gradient-to-tr from-[#e6f5fc] via-[#66c2eb]/90 to-[#009ad7]/90 pt-16 pb-32 px-4 md:px-8 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-gradient-to-r from-cyan-400 to-transparent blur-[120px] rounded-full transform rotate-45" />
          <div className="absolute top-[40%] right-[5%] w-[30%] h-[100%] bg-gradient-to-l from-blue-400 to-transparent blur-[100px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-[#009ad7] text-sm font-bold mb-8 uppercase tracking-widest"
          >
            Official Press Release
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-8 leading-snug max-w-5xl mx-auto text-balance"
          >
            CEI 2026 Set to Bring the Global Electronics <br className="hidden md:block" /> & Home Appliances Industry to New Delhi This August
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-800 font-semibold"
          >
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/40 shadow-sm w-full sm:w-auto justify-center">
              <MapPin className="w-5 h-5 text-[#009ad7]" />
              <span>Pragati Maidan, New Delhi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/40 shadow-sm w-full sm:w-auto justify-center">
              <Calendar className="w-5 h-5 text-[#009ad7]" />
              <span>11–12–13 August 2026</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Overlapping Card */}
      <main className="flex-grow flex flex-col items-center -mt-16 md:-mt-20 relative z-20 px-4 sm:px-6 md:px-8 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 w-full max-w-5xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100"
        >
          <div className="prose prose-lg md:prose-xl max-w-none text-slate-600 leading-relaxed space-y-8">
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed">
              <strong>New Delhi, India</strong> – The highly anticipated 3rd edition of CEI – India Consumer Electronics, Components & Home Appliances Trade Show is set to take place on 11–12–13 August 2026 at Pragati Maidan, New Delhi.
            </p>

            <div className="w-16 h-1 bg-gradient-to-r from-[#009ad7] to-cyan-400 rounded-full my-8"></div>

            <p>
              As India continues to strengthen its position as one of the world’s fastest-growing electronics manufacturing and consumption markets, CEI 2026 will serve as a focused B2B platform connecting Indian and international manufacturers, component suppliers, technology innovators, distributors, retailers, importers, and institutional buyers from across India and key global markets.
            </p>
            
            <p>
              The exhibition will showcase the latest innovations and technologies across consumer electronics, home appliances, electronic components, smart & embedded systems, wearables, IoT devices, and IT hardware & systems, while facilitating strategic business networking, sourcing opportunities, distribution partnerships, and cross-border collaborations.
            </p>
            
            <p>
              India’s electronics sector is currently witnessing strong momentum, driven by rising domestic demand, rapid digital adoption, production-linked incentive (PLI) schemes, semiconductor investments, and expanding exports. With the country progressing toward a projected <strong className="text-slate-800">USD 300 billion electronics manufacturing milestone</strong>, India is increasingly becoming a critical destination for global electronics and technology businesses.
            </p>
            
            <p>
              The previous edition of CEI welcomed <strong className="text-slate-800">6,479 qualified B2B buyers from 16 countries,</strong> including distributors, retailers, sourcing heads, importers, e-commerce players, and procurement agencies. The upcoming edition is expected to feature <strong className="text-slate-800">200+ exhibiting companies and over 10,000 B2B buyers</strong>, further reinforcing CEI’s role as one of India’s emerging B2B trade platforms for the electronics and home appliances industry.
            </p>

            {/* Styled Blockquote Section */}
            <div className="relative bg-slate-50 border-l-4 border-[#009ad7] rounded-r-2xl p-8 md:p-10 my-12 group hover:bg-blue-50/50 transition-colors duration-300">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#009ad7] opacity-10 transform -scale-x-100" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl italic text-slate-700 mb-6 font-medium leading-relaxed">
                  “The global electronics industry is evolving rapidly, and India today stands at the center of this transformation. CEI 2026 aims to create a strong international business platform that connects innovation, manufacturing, sourcing, and market opportunities under one roof. We look forward to welcoming industry leaders, brands, buyers, and innovators from across the world to New Delhi this August.”
                </p>
                <p className="text-base text-slate-900 font-bold">
                  Rajesh Bhagat
                  <span className="block text-sm text-[#009ad7] font-medium mt-1 uppercase tracking-wide">
                    Chairman & Managing Director, Worldex India
                  </span>
                </p>
              </div>
            </div>

            <p>
              CEI 2026 aims to strengthen India’s role within global supply chains while creating meaningful business opportunities for stakeholders across the electronics, components, and home appliances ecosystem.
            </p>
          </div>
        </motion.div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
