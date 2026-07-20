import React from 'react';

import ContactSection from '../components/ContactSection';

import Footer from '../components/Footer';


const industryLogos = [
  { src: "/images/partners/Industry-Partner/industry_partner_ceama.png" }
];

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
  { src: "/images/partners/Supporting-Associations/mia.png" },
  { src: "/images/partners/Supporting-Associations/cmda_delhi.png" }
];

const mediaLogos = [
  { src: "/images/partners/Supporting-Media-Partners/Electronics-Era-logo.png", href: "https://electronicsera.in/" },
  { src: "/images/partners/Supporting-Media-Partners/electronics-media-log.png", href: "https://www.electronicsmedia.info/" },
  { src: "/images/partners/Supporting-Media-Partners/electronics-world-media-group.png", href: "https://www.99electronicsworld.com/index.html" },
  { src: "/images/partners/Supporting-Media-Partners/timestech.png", href: "https://timestech.in/" },
  { src: "/images/partners/Supporting-Media-Partners/electronics_buzz.png", href: "https://electronicsbuzz.in/" }
];

const LogoSection = ({ title, logos }: { title: string, logos: { src: string, href?: string }[] }) => (
  <div className="mb-16 last:mb-0">
    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-slate-800 tracking-wide">{title}</h2>
    <div className="flex flex-wrap justify-center gap-5 md:gap-7">
      {logos.map((item, index) => {
        const cardContent = (
          <div
            className={`relative group w-48 h-28 rounded-md bg-white shadow-xl flex items-center justify-center p-4 transition-all duration-300 pointer-events-auto ${
              item.href ? "hover:-translate-y-2 cursor-pointer" : ""
            }`}
          >
            <img
              src={item.src}
              alt={`${title} Logo ${index + 1}`}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        );
        return (
          <div key={index} className="flex-shrink-0">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 rounded-2xl"
              >
                {cardContent}
              </a>
            ) : (
              <div className="h-full">{cardContent}</div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);


export default function SupportingAssociationsPage() {

  return (

    <>

      <main className="relative pt-48 md:pt-56 pb-24 min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_#ffffff_0%,_#f5f7fb_45%,_#eef1f8_100%)]">

        {/* Ambient background accents */}

        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue-200/30 blur-3xl" />

          <div className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-indigo-200/30 blur-3xl" />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[24rem] w-[60rem] rounded-full bg-amber-100/30 blur-3xl" />

          <div

            className="absolute inset-0 opacity-[0.035]"

            style={{

              backgroundImage:

                "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",

              backgroundSize: "48px 48px",

            }}

          />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="text-center flex flex-col items-center mb-20">

            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-4 py-1.5 shadow-sm mb-6">

              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500" />

              <span className="font-semibold text-black/80 text-xs md:text-sm tracking-[0.2em] uppercase">
                Partners
              </span>
            </div>
            <h1 className="font-sans text-4xl md:text-6xl font-semibold text-black leading-[1.1] tracking-tight max-w-4xl">
              Our{" "}
              <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 bg-clip-text text-transparent">
                Partners
              </span>
            </h1>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
            <p className="mt-6 text-black/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We are proud to be supported by leading associations and media partners that share our vision and commitment to the industry.
            </p>

          </div>

          {/* Logo Sections */}
          <LogoSection title="Industry Partner" logos={industryLogos} />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-16" />
          <LogoSection title="Supporting Associations" logos={supportingLogos} />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-16" />
          <LogoSection title="Supporting Media Partners" logos={mediaLogos} />

        </div>

      </main>


      <ContactSection />

      <Footer />

    </>

  );

}
