import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function ExhibitorsListPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative flex flex-col">
      <main className="pt-48 md:pt-56 pb-20 flex-grow flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-12">
            Exhibitor List
          </h1>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 md:p-20 w-full max-w-4xl shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#009ad7] mb-6">
              CEI 2026 Exhibitor List
            </h2>
            <p className="text-slate-600 font-medium text-base md:text-lg mb-8">
              Click the button below to view or download the complete list of exhibitors for CEI World Expo 2026.
            </p>
            <a 
              href="/pdf/Exhibitor-List_CEI_compressed.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#009ad7] hover:bg-[#007ba8] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors text-lg"
            >
              View Exhibitor List PDF
            </a>
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
