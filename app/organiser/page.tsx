"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function OrganiserPage() {

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative">
      
      <main className="pt-64 md:pt-72 pb-20">
        
        {/* Header Section */}
        <div className="w-full flex flex-col items-center text-center pb-12">
          <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8">
              Organiser
            </h1>
            
            {/* Worldex Logo representing the Organiser */}
            <div className="bg-white border border-slate-200/60 rounded-lg p-5 md:p-6 shadow-sm max-w-xs w-full flex justify-center hover:shadow-md transition-shadow">
              <a 
                href="https://www.worldexindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="https://www.worldexindia.com/assets/img/logo.svg" 
                  alt="Worldex India Logo" 
                  className="w-full h-auto max-h-[50px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Content Section */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid gap-12 lg:grid-cols-12 items-start"
            >
              
              {/* Left Column: Text description */}
              <motion.div 
                variants={fadeInUp}
                className="lg:col-span-7 flex flex-col items-start"
              >
                <span className="inline-flex items-center gap-1.5 bg-[#10729c] text-white hover:bg-[#0d5f82] transition-colors px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase mb-6 shadow-md shadow-[#10729c]/10">
                  <Award className="w-3.5 h-3.5" />
                  Since 2004
                </span>
                
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#10729c] tracking-tight leading-tight mb-6">
                  Worldex India: Your Gateway to Global Trade & International Markets
                </h2>

                <div className="space-y-5 text-slate-600 leading-relaxed text-justify text-sm md:text-base font-medium">
                  <p>
                    <strong>Worldex India Exhibition & Promotion Pvt. Ltd.</strong> is one of the leading trade promotion organisations in India and South Asia. As a vertically integrated company, Worldex offers the complete package from concept creation to final implementation, delivering success through our in-house teams with specialized functional expertise and domain exposure in the field of exhibition operations & management, trade promotion & marketing services, and on-ground production.
                  </p>
                  <p>
                    Incorporated in 2004, Worldex India is headquartered in Mumbai with a branch office in New Delhi. With over 21 years of global experience, we specialise in bridging the gap between suppliers and buyers by connecting them through our trade initiatives such as international trade shows, summits, forums, buyer-seller meets, and inbound & outbound trade missions.
                  </p>
                  <p>
                    We facilitate the expansion of international trade networks and empower businesses to expand into new, emerging, and developed markets by building dynamic trade platforms that connect them with potential partners and unlock international trade opportunities.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a 
                    href="https://www.worldexindia.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#10729c] hover:bg-[#0d5f82] text-white transition-all hover:-translate-y-0.5 duration-300 px-8 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-[#10729c]/20 uppercase tracking-wide"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Image with offset design border */}
              <motion.div 
                variants={fadeInUp}
                className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
              >
                <div className="relative w-full max-w-[450px] group">
                  {/* Decorative background outline */}
                  <div className="absolute inset-0 bg-slate-100 rounded-3xl translate-x-4 translate-y-4 group-hover:bg-[#10729c]/10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-out z-0" />
                  
                  {/* Main Image Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 bg-white">
                    <img 
                      src="/images/gallery/2018/large/Photo%204.jpg" 
                      alt="Exhibition showcase" 
                      className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
