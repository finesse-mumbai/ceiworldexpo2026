import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Briefcase } from 'lucide-react';

export default function BusinessMatchingRegistrationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative flex flex-col">
      <main className="flex-grow pt-64 md:pt-72 pb-24 flex items-center justify-center">
        <section className="mx-auto max-w-[95rem] px-4 md:px-8 w-full">
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white relative p-10 md:p-16 text-center">
            {/* Ambient Background Glowing Blobs for Refraction */}
            <div className="absolute top-10 left-5 w-44 h-44 rounded-full bg-[#009ad7]/10 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-10 right-5 w-48 h-48 rounded-full bg-[#dae020]/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-tr from-[#e6f7ff] to-[#66d9ff] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#009ad7]/20 border border-[#b0def4]">
                <Briefcase className="w-10 h-10 text-[#009ad7]" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-wider uppercase font-sans mb-6">
                <span className="text-black">Business Matching</span> <br /> <span className="text-[#009ad7]">Registration</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-[#009ad7] to-[#dae020] rounded-full mb-8"></div>
              
              <p className="text-lg md:text-xl font-medium text-slate-600 bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl shadow-sm">
                Business Matching Registration form will resume from <strong className="text-[#009ad7]">1st August 2026</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
