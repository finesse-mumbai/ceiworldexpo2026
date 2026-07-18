import React from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const supportingLogos = [
  { src: "/images/partners/Supporting-Associations/Supporting_Associations_aise_logo.png", href: "https://aisie.org/" },
  { src: "/images/partners/Supporting-Associations/Supporting_Associations_CCCME.png", href: "https://www.cccme-bbl.com/" },
  { src: "/images/partners/Supporting-Associations/CCPIT-Electronics.png", href: "http://english.ccpitbj.org/" },
  { src: "/images/partners/Supporting-Associations/Supporting_Associations_cecexpo_logo.png" },
  { src: "/images/partners/Supporting-Associations/Supporting_Associations_fitag_logo.png", href: "https://fitag.in/" },
  { src: "/images/partners/Supporting-Associations/GECC.png" },
  { src: "/images/partners/Supporting-Associations/tema.png", href: "https://www.tematelecom.in/" },
  { src: "/images/partners/Supporting-Associations/csai.png", href: "https://www.ncsai.in/" },
  { src: "/images/partners/Supporting-Associations/cmai.png", href: "https://www.cmai.asia/" },
  { src: "/images/partners/Supporting-Associations/adcta.png" },
  { src: "/images/partners/Supporting-Associations/faiita.png", href: "https://www.faiita.co.in/" },
  { src: "/images/partners/Supporting-Associations/iesa.png", href: "https://www.iesaonline.org/" },
  { src: "/images/partners/Supporting-Associations/icea.png", href: "https://icea.org.in/" },
  { src: "/images/partners/Supporting-Associations/mia.png" }
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
            {supportingLogos.map((item, index) => {
              const cardContent = (
                <div 
                  className={`bg-white rounded-xl shadow-sm transition-all duration-300 p-6 md:p-8 flex items-center justify-center aspect-[3/2] border border-gray-100 group ${item.href ? 'hover:shadow-xl cursor-pointer' : ''}`}
                >
                  <img 
                    src={item.src} 
                    alt={`Supporting Association ${index + 1}`} 
                    className={`max-w-full max-h-full object-contain transition-transform duration-300 ${item.href ? 'group-hover:scale-110' : ''}`}
                  />
                </div>
              );

              return (
                <div key={index} className="flex-shrink-0">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {cardContent}
                    </a>
                  ) : (
                    <div className="h-full">
                      {cardContent}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}
