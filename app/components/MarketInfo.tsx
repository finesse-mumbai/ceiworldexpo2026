import React from 'react';

export default function MarketInfo() {
  return (
    <section className="pt-20 md:pt-24 pb-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide mb-8 md:mb-10 text-black text-center">
          India Market Info
        </h2>
        
        <div className="text-center w-full mx-auto">
          <p className="w-full text-center font-sans text-2xl leading-snug text-black md:text-3xl mb-6 md:mb-8">
            India’s electronics and home appliances industry encompasses a wide range of products
            including consumer electronics, white goods, smart home appliances, IT hardware,
            components, and sub-assemblies.
          </p>
          <p className="w-full text-center font-sans text-2xl leading-snug text-black md:text-3xl mb-10 md:mb-12">
            Between FY2015 and FY2025, India’s electronics production grew at a CAGR of over 15%, rising
            from approximately US$ 29 billion to over US$ 101 billion. Looking ahead, the sector is projected
            to reach about US$ 500 billion by FY2030.
          </p>
        </div>

        <div className="text-center">
          <button className="px-8 py-2.5 bg-[#00a0e3] text-white rounded-full font-medium text-sm md:text-base shadow-md hover:bg-[#008bc2] hover:shadow-lg transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}