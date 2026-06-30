import React from 'react';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const categories = [
  "Distributors & Dealers",
  "Importers",
  "Aggregators",
  "Large Format Retailers",
  "Retailers",
  "E-tailers",
  "Franchises",
  "Wholesalers & Agents",
  "Buying & Trading Houses",
  "Government Procurement Agencies"
];

export default function BuyerProfilePage() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative">
      <main className="pt-64 md:pt-72 pb-20 flex-grow flex flex-col">
        {/* Top Spacer for Header (White Background) */}
        <div className="w-full bg-white pb-12 md:pb-16 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Buyer Profile
          </h1>
        </div>
      
      {/* Middle Section with Background Image */}
      <section className="relative w-full py-16 md:py-24 flex-grow flex flex-col items-center justify-center">
        {/* Background Image Setup */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/CEI-Website-Design-06.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
        </div>
        
        <div className="relative z-10 px-4 w-full flex flex-col items-center justify-center max-w-[95rem] mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-6xl p-6 md:p-10 lg:p-14">
            
            <div className="columns-1 md:columns-2 gap-x-12">
              {categories.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 py-3.5 border-b border-gray-100 break-inside-avoid hover:bg-gray-50 transition-colors rounded-md group cursor-default"
                >
                  <div className="w-5 h-5 rounded-[4px] border-2 border-gray-200 flex-shrink-0 group-hover:border-[#009ad7] transition-colors ml-2"></div>
                  <span className="text-gray-800 text-[15px] font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}
