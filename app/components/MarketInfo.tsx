import React from 'react';

export default function MarketInfo() {
  return (
    <section className="pt-20 md:pt-24 pb-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wide mb-8 md:mb-10 text-black text-center">
          India Market Info
        </h2>
        
        <div className="text-center w-full mx-auto">
          <p className="text-base min-[400px]:text-lg md:text-xl lg:text-[25px] font-normal leading-[1.6] text-gray-800 tracking-wide mb-6 md:mb-8">
            India’s electronics and home appliances industry encompasses a wide range of products <br className="hidden lg:block" />
            including consumer electronics, white goods, smart home appliances, IT hardware, <br className="hidden lg:block" />
            components, and sub-assemblies.
          </p>
          <p className="text-base min-[400px]:text-lg md:text-xl lg:text-[25px] font-normal leading-[1.6] text-gray-800 tracking-wide mb-10 md:mb-12">
            Between FY2015 and FY2025, India’s electronics production grew at a CAGR of over 15%, rising <br className="hidden lg:block" />
            from approximately US$ 29 billion to over US$ 101 billion. Looking ahead, the sector is projected <br className="hidden lg:block" />
            to reach about US$ 500 billion by FY2030.
          </p>
        </div>

        <div className="text-center">
          <button className="px-10 py-3 md:py-4 bg-[#00a0e3] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#008bc2] transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}