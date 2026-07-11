import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-black pt-20 pb-8">
      <div className="max-w-[95rem] mx-auto px-4 md:px-8">
        <div className="bg-[#00141c] bg-[linear-gradient(145deg,#00141c_0%,#009ad7_45%,#00141c_100%)] border border-white/10 shadow-lg rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Column 1 */}
          <div className="md:w-[25%] pr-0 md:pr-8 text-center md:text-left relative z-10">
            <h2 className="text-white text-4xl md:text-5xl font-heading font-bold leading-[1.1] tracking-tight">Get in <br className="hidden md:block" />touch</h2>
          </div>
          {/* Contact Details */}
          <div className="md:w-[75%] flex flex-col md:flex-row justify-between w-full gap-6 mt-6 md:mt-0 text-left relative z-10">
            
            {/* For Show Information Block */}
            <div className="flex-[2] flex flex-col">
              <div className="text-white font-bold text-[16px] md:text-[18px] tracking-[0.08em] whitespace-nowrap text-opacity-90 mb-4 w-full">
                For Show Information
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center">
                <div className="text-white flex-1">
                  <h6 className="text-base md:text-lg font-bold mb-1 tracking-wide">Ashish Bhagat</h6>
                  <a href="https://wa.me/918369801694?text=Hi%2C%20I%20have%20a%20query%20regarding%20Show%20Information%20at%20CEI%20World%20Expo%202026%3A%0A" target="_blank" rel="noopener noreferrer" className="block text-[14px] tracking-wider mb-1 hover:text-[#009ad7] transition-colors" title="Chat on WhatsApp">
                    +91-8369801694
                  </a>
                  <a href="mailto:ashish@worldexindia.com?subject=Query%20regarding%20Show%20Information%20-%20CEI%20World%20Expo%202026" className="block text-[14px] tracking-wide hover:text-[#009ad7] transition-colors" title="Send an Email">
                    ashish@worldexindia.com
                  </a>
                </div>
                
                {/* Short equal height divider 1 */}
                <div className="hidden md:block w-[1px] h-[60px] bg-[#d5df23] mx-2"></div>

                <div className="text-white flex-1 md:pl-2">
                  <h6 className="text-base md:text-lg font-bold mb-1 tracking-wide">Akash Prabhu</h6>
                  <a href="https://wa.me/919137587951?text=Hi%2C%20I%20have%20a%20query%20regarding%20Show%20Information%20at%20CEI%20World%20Expo%202026%3A%0A" target="_blank" rel="noopener noreferrer" className="block text-[14px] tracking-wider mb-1 hover:text-[#009ad7] transition-colors" title="Chat on WhatsApp">
                    +91-9137587951
                  </a>
                  <a href="mailto:akash@worldexindia.com?subject=Query%20regarding%20Show%20Information%20-%20CEI%20World%20Expo%202026" className="block text-[14px] tracking-wide hover:text-[#009ad7] transition-colors" title="Send an Email">
                    akash@worldexindia.com
                  </a>
                </div>
              </div>
            </div>

            {/* Short equal height divider 2 */}
            <div className="hidden md:block w-[1px] h-[60px] bg-[#d5df23] mx-2 mt-auto mb-1"></div>

            {/* For Booth Participation Block */}
            <div className="flex-1 flex flex-col md:pl-2">
              <div className="text-white font-bold text-[16px] md:text-[18px] tracking-[0.08em] whitespace-nowrap text-opacity-90 mb-4 w-full">
                For Booth Participation
              </div>
              <div className="text-white mt-auto mb-[2px]">
                <h6 className="text-base md:text-lg font-bold mb-1 tracking-wide">Ruzbeh Mistry</h6>
                <a href="https://wa.me/919820888278?text=Hi%2C%20I%20have%20a%20query%20regarding%20Booth%20Participation%20at%20CEI%20World%20Expo%202026%3A%0A" target="_blank" rel="noopener noreferrer" className="block text-[14px] tracking-wider mb-1 hover:text-[#009ad7] transition-colors" title="Chat on WhatsApp">
                  +91-9820888278
                </a>
                <a href="mailto:ruzbeh@worldexindia.com?subject=Query%20regarding%20Booth%20Participation%20-%20CEI%20World%20Expo%202026" className="block text-[14px] tracking-wide hover:text-[#009ad7] transition-colors" title="Send an Email">
                  ruzbeh@worldexindia.com
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
