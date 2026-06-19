"use client";
import React from 'react';

export default function Partners() {

  const logos = {
    industry: ["https://www.ceiworldexpo.com/img/Industry_Partner_ceama.png"],
    supporting: [
      "https://www.ceiworldexpo.com/img/GECC.png",
      "https://www.ceiworldexpo.com/img/Supporting_Associations_fitag_logo.png",
      "https://www.ceiworldexpo.com/img/Supporting_Associations_cecexpo_logo.png",
      "https://www.ceiworldexpo.com/img/CCPIT-Electronics.png"
    ],
    media: [
      "https://www.ceiworldexpo.com/img/ElectronicCity_logo.png",
      "https://www.ceiworldexpo.com/img/abiz.png",
      "https://www.ceiworldexpo.com/img/21ic.png",
      "https://www.ceiworldexpo.com/img/it-logo.png"
    ]
  };

  const Card = ({ src }: { src: string }) => (
    <div className="relative group w-48 h-28 rounded-2xl bg-white shadow-xl flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(218,224,32,0.3)]">
      <img src={src} alt="Partner" className="max-h-full object-contain transition-transform duration-300 group-hover:scale-110" />
    </div>
  );

  return (
    <section 
      className="relative py-24 bg-gradient-to-b from-brand-blue to-[#0082ba] text-center overflow-hidden"
    >

      {/* Grid Pattern overlay for tech feel - Removed as requested */}

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Industry Partner</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          {logos.industry.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Supporting Associations</h3>
        <div className="flex justify-center gap-6 mb-20 flex-wrap">
          {logos.supporting.map((src, i) => <Card key={i} src={src} />)}
        </div>

        <h3 className="text-white text-lg font-bold tracking-widest uppercase mb-10 drop-shadow-md">Past Media Partners</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {logos.media.map((src, i) => <Card key={i} src={src} />)}
        </div>
      </div>
    </section>
  );
}
