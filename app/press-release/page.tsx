import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function PressReleasePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative flex flex-col">
      <main className="pt-64 md:pt-72 pb-20 flex-grow flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-12">
            Press Release
          </h1>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 md:p-20 w-full max-w-4xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#009ad7] mb-4">
              Coming Soon
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg">
              Our latest press releases will be updated here shortly. Please check back later.
            </p>
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
