import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-black pt-20 pb-8">
      <div className="max-w-[95rem] mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-[#bce6f8] from-[0%] via-[#00a4e4] via-[32%] to-[#00a4e4] to-[100%] rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Column 1 */}
          <div className="md:w-[25%] pr-0 md:pr-8 text-center md:text-left">
            <h2 className="text-[#0089c4] text-4xl md:text-5xl font-heading font-bold leading-[1.1] tracking-tight">Get in <br className="hidden md:block" />touch</h2>
          </div>
          {/* Contact Details */}
          <div className="md:w-[75%] flex flex-col md:flex-row justify-between w-full gap-6 mt-6 md:mt-0 text-left">
            
            {/* For Show Information Block */}
            <div className="flex-[2] flex flex-col">
              <div className="text-white font-bold text-[17px] md:text-[19px] tracking-wide mb-4 w-full">
                For Show Information
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
                <div className="text-white flex-1">
                  <h6 className="text-base md:text-lg font-bold mb-1 tracking-wide">Ashish Bhagat</h6>
                  <p className="text-[14px] tracking-wider mb-1">+91-8369801694</p>
                  <p className="text-[14px] tracking-wide">ashish@worldexindia.com</p>
                </div>
                
                {/* Short equal height divider 1 */}
                <div className="hidden md:block w-[1px] h-[60px] bg-[#d5df23] mx-2"></div>

                <div className="text-white flex-1 md:pl-2">
                  <h6 className="text-base md:text-lg font-bold mb-1 tracking-wide">Akash Prabhu</h6>
                  <p className="text-[14px] tracking-wider mb-1">+91-9137587951</p>
                  <p className="text-[14px] tracking-wide">akash@worldexindia.com</p>
                </div>
              </div>
            </div>

            {/* Short equal height divider 2 */}
            <div className="hidden md:block w-[1px] h-[60px] bg-[#d5df23] mx-2 mt-auto mb-1"></div>

            {/* For Booth Participation Block */}
            <div className="flex-1 flex flex-col md:pl-2">
              <div className="text-white font-bold text-[17px] md:text-[19px] tracking-wide mb-4 w-full">
                For Booth Participation
              </div>
              <div className="text-white mt-auto mb-[2px]">
                <h6 className="text-base md:text-lg font-bold mb-1 tracking-wide">Ruzbeh Mistry</h6>
                <p className="text-[14px] tracking-wider mb-1">+91-9820888278</p>
                <p className="text-[14px] tracking-wide">ruzbeh@worldexindia.com</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
