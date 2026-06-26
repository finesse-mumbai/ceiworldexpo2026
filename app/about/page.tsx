import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans pb-24">
      <section id="about" className="relative overflow-hidden bg-white py-24">
        {/* giant background word */}
        <div aria-hidden className="pointer-events-none absolute -top-10 sm:-top-20 left-0 right-0 select-none text-center font-sans text-[34vw] tracking-tighter whitespace-nowrap overflow-hidden font-black leading-none text-gray-200 opacity-50 flex justify-center w-full">
          About
        </div>

        <div className="relative mx-auto max-w-6xl px-6 z-10">
          <div className="mb-8 flex items-center justify-center gap-4 w-full">
            <span className="h-px flex-1 max-w-[100px] bg-[#009ad7]/60" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black text-center">Our Vision</span>
            <span className="h-px flex-1 max-w-[100px] bg-[#009ad7]/60" />
          </div>

          <p className="mx-auto max-w-3xl text-center font-sans text-2xl font-medium leading-snug text-black md:text-3xl">
            India today stands at the heart of the global electronics revolution. From
            smartphones and smart homes to connected mobility and intelligent living, the
            country is no longer just consuming technology — it is shaping its future.
          </p>

          {/* Blue strip */}
          <div className="mt-16 mb-6 w-screen relative left-1/2 -translate-x-1/2 bg-[#009ad7] px-6 py-12 text-center text-white">
            <h3 className="font-sans text-xl font-bold md:text-2xl">The Strategic Hub for Business Growth:</h3>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed md:text-base">
              CEI serves as the definitive one-stop shop for companies looking to establish
              a strong foothold in South Asia. We provide a high-energy environment where
              international and Indian manufacturers connect directly with pan-India buyers,
              distributors, and trade.
            </p>
          </div>

          {/* Tilted cards exact layout - Desktop */}
          <div className="relative mx-auto mt-0 mb-8 hidden md:flex justify-center items-center w-full h-[750px] max-w-6xl">
            {/* Card 3 (Rightmost, Bottom-most) */}
            <div className="absolute z-10 w-[432px] h-[432px] bg-white rounded-[40px] border border-[#009ad7] -rotate-[45deg] hover:rotate-0 p-12 pt-20 flex flex-col translate-x-[300px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:z-40 transition-all duration-300">
              <div className="space-y-4">
                <h4 className="font-sans text-xl font-bold text-black leading-snug">
                  For Innovators & Startups:
                </h4>
                <p className="font-sans text-[15px] text-black leading-relaxed">
                  Tap into India&apos;s online market. Whether you are a new venture or an established brand, CEI provides the network and the insights needed to navigate India&apos;s rapidly expanding manufacturing landscape.
                </p>
              </div>
            </div>

            {/* Card 2 (Middle) */}
            <div className="absolute z-20 w-[432px] h-[432px] bg-white rounded-[40px] border border-[#009ad7] -rotate-[45deg] hover:rotate-0 p-12 pt-20 flex flex-col translate-x-0 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:z-40 transition-all duration-300">
              <div className="space-y-4">
                <h4 className="font-sans text-xl font-bold text-black leading-snug">
                  For Exhibitors & Brands:
                </h4>
                <p className="font-sans text-[15px] text-black leading-relaxed">
                  Unlock entry to India&apos;s retail chains. Showcase your products directly to decision-makers from hypermarkets, chain stores, and leading e-retailers.
                </p>
              </div>
            </div>

            {/* Card 1 (Leftmost, Top-most) */}
            <div className="absolute z-30 w-[432px] h-[432px] bg-[#009ad7] text-white rounded-[40px] p-12 flex flex-col justify-center translate-x-[-300px] shadow-2xl hover:z-40 transition-all duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shrink-0 shadow-sm">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="#009ad7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <g>
                    <line x1="4" y1="12" x2="4" y2="20" />
                    <rect x="2.5" y="14" width="3" height="4" rx="0.5" />
                  </g>
                  <g>
                    <line x1="9" y1="6" x2="9" y2="16" />
                    <rect x="7.5" y="8" width="3" height="6" rx="0.5" />
                  </g>
                  <g>
                    <line x1="14" y1="10" x2="14" y2="18" />
                    <rect x="12.5" y="12" width="3" height="4" rx="0.5" />
                  </g>
                  <g>
                    <line x1="19" y1="4" x2="19" y2="14" />
                    <rect x="17.5" y="6" width="3" height="6" rx="0.5" />
                  </g>
                </svg>
              </div>
              <h4 className="font-sans text-2xl font-bold mb-3">For Buyers & Trade Partners:</h4>
              <p className="font-sans text-[15px] leading-relaxed text-white/95">
                Source and trade with ease. Our exhibitors bring innovation under one roof, offering a first look at the hottest trends in components, appliances, and IT systems.
              </p>
            </div>
          </div>

          {/* Stacked layout - Mobile */}
          <div className="relative mx-auto my-8 flex flex-col items-center gap-8 md:hidden px-4 w-full">
            <div className="w-full max-w-[432px] bg-[#009ad7] text-white rounded-[40px] p-12 flex flex-col justify-center shadow-xl">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shrink-0 shadow-sm">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="#009ad7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <g><line x1="4" y1="12" x2="4" y2="20" /><rect x="2.5" y="14" width="3" height="4" rx="0.5" /></g>
                  <g><line x1="9" y1="6" x2="9" y2="16" /><rect x="7.5" y="8" width="3" height="6" rx="0.5" /></g>
                  <g><line x1="14" y1="10" x2="14" y2="18" /><rect x="12.5" y="12" width="3" height="4" rx="0.5" /></g>
                  <g><line x1="19" y1="4" x2="19" y2="14" /><rect x="17.5" y="6" width="3" height="6" rx="0.5" /></g>
                </svg>
              </div>
              <h4 className="font-sans text-2xl font-bold mb-3">For Buyers & Trade Partners:</h4>
              <p className="font-sans text-[15px] leading-relaxed text-white/95">
                Source and trade with ease. Our exhibitors bring innovation under one roof, offering a first look at the hottest trends in components, appliances, and IT systems.
              </p>
            </div>

            <div className="w-full max-w-[432px] bg-white rounded-[40px] border border-[#009ad7] p-12 flex flex-col justify-center shadow-sm">
              <h4 className="font-sans text-xl font-bold text-black mb-3">
                For Exhibitors & Brands:
              </h4>
              <p className="font-sans text-[15px] text-black leading-relaxed">
                Unlock entry to India&apos;s retail chains. Showcase your products directly to decision-makers from hypermarkets, chain stores, and leading e-retailers.
              </p>
            </div>

            <div className="w-full max-w-[432px] bg-white rounded-[40px] border border-[#009ad7] p-12 flex flex-col justify-center shadow-sm">
              <h4 className="font-sans text-xl font-bold text-black mb-3">
                For Innovators & Startups:
              </h4>
              <p className="font-sans text-[15px] text-black leading-relaxed">
                Tap into India&apos;s online market. Whether you are a new venture or an established brand, CEI provides the network and the insights needed to navigate India&apos;s rapidly expanding manufacturing landscape.
              </p>
            </div>
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-xl leading-snug text-black md:text-2xl relative z-10">
            As the world&apos;s third-largest electronics market, India is the unique
            intersection where manufacturing ambition, cutting-edge innovation &amp; massive
            consumer demand meet at scale.
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-xl font-bold leading-snug text-black md:text-2xl relative z-10">
            CEI — Consumer Electronics &amp; Home Appliances Expo channels this momentum into
            a premier B2B platform, purpose-built to bridge the gap between global
            innovation and Indian market potential.
          </p>
        </div>
      </section>
    </div>
  );
}
