"use client";
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileImage, ShieldCheck } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function LogoPage() {
  const logosList = [
    {
      id: "cei-logo",
      title: "CEI August 2026 Logo",
      subtitle: "Bharat Mandapam Exhibition Logo",
      src: "/images/logo/CEI-August-2026-Bharat-Mandapam-logo.png",
      downloadUrl: "/images/logo/CEI-August-2026-Bharat-Mandapam-logo.png",
      fileType: "PNG Image",
      dimensions: "1500 x 720 px",
      bgClass: "bg-white",
      imgWidthClass: "w-[420px]"
    },
    {
      id: "worldex-logo",
      title: "Worldex India Logo",
      subtitle: "Organiser Corporate Logo",
      src: "/images/logo/logo.svg",
      downloadUrl: "/images/logo/logo.svg",
      fileType: "SVG Vector Format",
      dimensions: "Vector Graphics",
      bgClass: "bg-white",
      imgWidthClass: "w-[300px]"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">

      <main className="pt-64 md:pt-72 pb-24">

        {/* Header Section */}
        <div className="w-full mb-12 text-center">
          <div className="mx-auto max-w-[95rem] px-4 md:px-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
              Logo
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Download the official, high-resolution logos for the Consumer Electronics, Components & Home Appliances Exhibition (CEI) and Worldex India.
            </p>
          </div>
        </div>

        {/* Logos Download Grid */}
        <section className="max-w-[95rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {logosList.map((logo) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 flex flex-col group"
              >
                {/* Logo Preview box with absolute download overlay */}
                <div className={`h-[280px] ${logo.bgClass} flex items-center justify-center p-8 border-b border-slate-50 relative overflow-hidden select-none`}>
                  {/* Refraction background details for styling */}
                  <div className="absolute inset-0 bg-slate-950/[0.02] group-hover:bg-[#009ad7]/[0.02] transition-colors duration-300" />

                  {/* Main Logo Image */}
                  <img
                    src={logo.src}
                    alt={logo.title}
                    className={`${logo.imgWidthClass} h-auto max-h-[160px] object-contain relative z-10 transition-transform duration-500 group-hover:scale-105`}
                  />

                  {/* Glassmorphic Download Overlay */}
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <a
                      href={logo.downloadUrl}
                      download
                      className="bg-[#009ad7] hover:bg-[#0087bd] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center"
                    >
                      <Download className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Logo Details & Action footer */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">{logo.title}</h2>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">{logo.subtitle}</p>

                    {/* Specifications grid */}
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <FileImage className="w-4 h-4 text-slate-400" />
                        <span>{logo.fileType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <ShieldCheck className="w-4 h-4 text-slate-400" />
                        <span>{logo.dimensions}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={logo.downloadUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-[#009ad7] hover:bg-[#0087bd] text-white font-bold px-6 py-3.5 rounded-xl transition-all w-full uppercase tracking-wider text-sm shadow-md shadow-[#009ad7]/10"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Asset</span>
                  </a>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
