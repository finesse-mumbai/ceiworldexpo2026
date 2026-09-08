"use client";
import React from 'react';

export default function PastEdition() {
  return (
    <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 flex justify-center overflow-hidden">
      <div className="w-full max-w-[95rem] px-4 md:px-6 relative z-10 flex flex-col">

        {/* Title with horizontal line */}
        <div className="flex items-center gap-4 mb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide whitespace-nowrap">Highlights of Past Edition</h2>
          <div className="flex-grow h-[2px] bg-brand-blue opacity-50 translate-y-[10px]"></div>
        </div>

        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[2.2/1] rounded-xl overflow-hidden shadow-2xl bg-white">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/4KdB6Ebu_QU"
            title="Show Highlights of CEI India 2026"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
