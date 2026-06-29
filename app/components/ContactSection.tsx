import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-black pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#d0f0ff]/95 from-0% via-[#01a5e1]/90 via-[35%] to-[#01a5e1]/90 to-100% backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(1,165,225,0.3)] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Column 1 */}
          <div className="md:w-[25%] pr-0 md:pr-8 text-center md:text-left">
            <h2 className="text-[#009AD7] text-4xl md:text-5xl font-heading font-bold leading-[1.1] tracking-tight drop-shadow-md">Get in <br className="hidden md:block" />touch</h2>
          </div>
          {/* Contact Details */}
          <div className="md:w-[75%] flex flex-col md:flex-row justify-between w-full gap-8 mt-6 md:mt-0 text-left">
            
            {/* For Show Information Block */}
            <div className="flex-[2] flex flex-col md:pr-6">
              <div className="bg-[#dae020]/85 backdrop-blur-md border border-white/40 shadow-lg rounded-xl text-black font-semibold text-[15px] md:text-base px-4 py-2.5 mb-4 w-full relative overflow-hidden">
                For Show <br /> Information
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="text-white flex-1 md:pr-4 md:border-r border-white/50 border-dashed">
                  <h6 className="text-base md:text-lg font-medium mb-1 opacity-90 tracking-wide">Ashish Bhagat</h6>
                  <p className="text-[14px] opacity-90 tracking-wider mb-1">+91 8369801694</p>
                  <p className="text-[14px] opacity-90 tracking-wide">ashish@worldexindia.com</p>
                </div>
                <div className="text-white flex-1 md:pl-2">
                  <h6 className="text-base md:text-lg font-medium mb-1 opacity-90 tracking-wide">Akash Prabhu</h6>
                  <p className="text-[14px] opacity-90 tracking-wider mb-1">+91 9137587951</p>
                  <p className="text-[14px] opacity-90 tracking-wide">akash@worldexindia.com</p>
                </div>
              </div>
            </div>

            {/* For Booth Participation Block */}
            <div className="flex-1 flex flex-col">
              <div className="bg-[#28a9e0]/85 backdrop-blur-md border border-white/40 shadow-lg rounded-xl text-white font-semibold text-[15px] md:text-base px-4 py-2.5 mb-4 w-full relative overflow-hidden">
                For Booth <br /> Participation
              </div>
              <div className="text-white">
                <h6 className="text-base md:text-lg font-medium mb-1 opacity-90 tracking-wide">Ruzbeh Mistry</h6>
                <p className="text-[14px] opacity-90 tracking-wider mb-1">+91-9820888278</p>
                <p className="text-[14px] opacity-90 tracking-wide">ruzbeh@worldexindia.com</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
