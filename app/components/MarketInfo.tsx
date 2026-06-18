import React from 'react';

export default function MarketInfo() {
  return (
    <section className="pt-20 md:pt-24 pb-20 bg-white text-center">
      <div className="w-full px-4 md:px-8">
        <h2 className="text-[50pt] font-medium tracking-wide mb-10 text-black">India Market Info</h2>
        <p className="text-[25pt] font-medium leading-[1.6] text-gray-800 tracking-wide mb-8 mx-auto">
          India’s electronics and home appliances industry encompasses a wide range of products <br className="hidden lg:block" />
          including consumer electronics, white goods, smart home appliances, IT hardware, <br className="hidden lg:block" />
          components, and sub-assemblies.
        </p>
        <p className="text-[25pt] font-medium leading-[1.6] text-gray-800 tracking-wide mb-12 mx-auto">
          Between FY2015 and FY2025, India’s electronics production grew at a CAGR of over 15%, rising <br className="hidden lg:block" />
          from approximately US$ 29 billion to over US$ 101 billion. Looking ahead, the sector is projected <br className="hidden lg:block" />
          to reach about US$ 500 billion by FY2030.
        </p>

        <button className="px-10 py-3 md:py-4 bg-[#00a0e3] text-white rounded-full font-medium text-lg shadow-lg hover:bg-[#008bc2] transition-colors">
          Read More
        </button>
      </div>
    </section>
  );
}