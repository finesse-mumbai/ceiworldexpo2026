import React from 'react';

export default function FairInfo() {
  return (
    <section className="pt-32 md:pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-[40px] font-medium tracking-wide mb-10 text-black text-center">
          The CEI Advantage
        </h2>
        <p className="text-xl md:text-2xl lg:text-[24px] font-medium leading-[1.6] text-gray-800 text-center mx-auto max-w-5xl tracking-wide">
          Epicenter for current & future technologies: CEI is the <br className="hidden md:block" />
          go-to destination for trends in the fields of telecom & <br className="hidden md:block" />
          broadcast, IoT, IT solutions, cloud, AI, connectivity, <br className="hidden md:block" />
          embedded tech & much more.
        </p>
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
