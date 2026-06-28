"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HelpCircle, Expand, Info, ArrowUpRight, Award } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ShowDirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-black relative">
      <main className="pt-64 md:pt-72 pb-24">
        
        {/* Title / Hero section */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center border-b border-gray-200 pb-10"
          >
            <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#009ad7] mb-3">
              <BookOpen className="w-4 h-4" />
              Exhibitor Resource
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase">
              Show Directory
            </h1>
          </motion.div>
        </div>

        {/* Flipbook Interactive Showcase Section */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          
          {/* Full Width Flipbook Viewer Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full bg-white border border-gray-100 rounded-3xl p-4 md:p-6 shadow-xl shadow-gray-200/50 flex flex-col gap-4"
          >
            {/* Window Controls Visual Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400 block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-green-400 block"></span>
                <span className="text-[12px] text-gray-400 font-semibold uppercase tracking-wider ml-2">
                  CEI Show Directory Flipbook
                </span>
              </div>
              <a 
                href="https://online.anyflip.com/qpeq/ulbi/mobile/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#009ad7] transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider"
              >
                <Expand className="w-4 h-4" />
                <span>Fullscreen</span>
              </a>
            </div>

            {/* Embedded Iframe Container */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-gray-100 bg-slate-900 shadow-inner group">
              <iframe 
                src="https://online.anyflip.com/qpeq/ulbi/mobile/index.html" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                title="CEI Interactive Show Directory"
              ></iframe>
            </div>

            {/* Viewer Support Info */}
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium pt-2">
              <HelpCircle className="w-4 h-4 text-gray-400" />
              <span>Double-click or pinch to zoom in/out inside the viewer. Drag corners to flip pages.</span>
            </div>
          </motion.div>
        </div>

      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
