import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const supportingLogos = [
  "/images/partners/Supporting-Associations/Supporting_Associations_aise_logo.png",
  "/images/partners/Supporting-Associations/Supporting_Associations_CCCME.png",
  "/images/partners/Supporting-Associations/CCPIT-Electronics.png",
  "/images/partners/Supporting-Associations/Supporting_Associations_cecexpo_logo.png",
  "/images/partners/Supporting-Associations/Supporting_Associations_fitag_logo.png",
  "/images/partners/Supporting-Associations/GECC.png",
  "/images/partners/Supporting-Associations/tema.png",
  "/images/partners/Supporting-Associations/csai.png",
  "/images/partners/Supporting-Associations/cmai.png",
  "/images/partners/Supporting-Associations/adcta.png",
  "/images/partners/Supporting-Associations/faiita.png",
  "/images/partners/Supporting-Associations/iesa.png",
  "/images/partners/Supporting-Associations/icea.png",
  "/images/partners/Supporting-Associations/mia.png"
];

export default function SupportingAssociationsPage() {
  return (
    <>
      <main className="pt-48 md:pt-56 pb-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="font-semibold text-black text-sm md:text-base mb-3 tracking-wide uppercase">Partners</div>
            <h1 className="font-sans text-3xl md:text-5xl font-medium text-black leading-[1.3] tracking-tight">
              Supporting Associations
            </h1>
            <p className="mt-6 text-black/80 text-lg max-w-2xl mx-auto font-medium">
              We are proud to be supported by leading associations that share our vision and commitment to the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {supportingLogos.map((src, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex items-center justify-center aspect-[3/2] border border-gray-100 group"
              >
                <img 
                  src={src} 
                  alt={`Supporting Association ${index + 1}`} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
