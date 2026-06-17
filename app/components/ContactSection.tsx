import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-black pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#81d5f9]/85 to-[#01a5e1]/85 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(1,165,225,0.3)] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Column 1 */}
          <div className="md:w-[25%] pr-4 md:pr-8">
            <h2 className="text-[#009ad7] text-4xl md:text-5xl font-heading font-bold leading-[1.1] tracking-tight drop-shadow-md">Get in<br />touch</h2>
          </div>
          {/* Columns 2, 3, 4 */}
          <div className="md:w-[75%] flex flex-col md:flex-row justify-between w-full gap-6">
            <div className="text-white md:pl-8 flex-1">
              <h6 className="text-base md:text-lg font-medium mb-3 opacity-90 tracking-wide">Ashish Bhagat</h6>
              <p className="text-[14px] opacity-90 tracking-wider mb-1">+91-8369801694</p>
              <p className="text-[14px] opacity-90 tracking-wide">ashish@worldexindia.com</p>
            </div>
            <div className="text-white md:pl-8 md:border-l border-[#dae020] flex-1">
              <h6 className="text-base md:text-lg font-medium mb-3 opacity-90 tracking-wide">Akash Prabhu</h6>
              <p className="text-[14px] opacity-90 tracking-wider mb-1">+91-9137587951</p>
              <p className="text-[14px] opacity-90 tracking-wide">akash@worldexindia.com</p>
            </div>
            <div className="text-white md:pl-8 md:border-l border-[#dae020] flex-1">
              <h6 className="text-base md:text-lg font-medium mb-3 opacity-90 tracking-wide">Ruzbeh Mistry</h6>
              <p className="text-[14px] opacity-90 tracking-wider mb-1">+91-9820888278</p>
              <p className="text-[14px] opacity-90 tracking-wide">ruzbeh@worldexindia.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
