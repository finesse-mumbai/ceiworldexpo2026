import React from 'react';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function VenuePage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-white flex flex-col overflow-hidden">

        {/* Top White Area */}
        <div className="relative w-full h-[350px] sm:h-[456px] md:h-[524px] bg-white z-10">

          {/* Content Info (Venue, Bharat Mandapam) - Positioned in the top white area */}
          <div
            className="absolute z-20 flex flex-col pointer-events-auto"
            style={{
              top: 'max(40px, 8vw)',
              left: 'max(130px, 18vw)'
            }}
          >
            <div className="mb-1 text-[0.85rem] md:text-sm font-bold text-[#009ad7] tracking-wider uppercase">Venue</div>
            <h3 className="font-sans text-[1.5rem] sm:text-[2rem] md:text-[2.8rem] font-bold text-black leading-tight tracking-tight">Bharat Mandapam,</h3>
            <p className="text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] text-black font-medium tracking-wide mt-1">New Delhi, Delhi 110001</p>
          </div>

          {/* Giant Delhi Image - Anchored exactly to the bottom edge (the split line) */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-[21%] z-30 pointer-events-none flex justify-center">
            <img 
              src="/images/venue/CEI-Website-Design-Delhi.webp" 
              alt="Delhi" 
              className="w-[105vw] max-w-none h-auto object-contain"
            />
          </div>
        </div>

        {/* Bottom Image Area - Made taller to show the full stadium without cropping */}
        <div className="relative w-full h-[600px] sm:h-[825px] md:h-[1100px] z-0">
          <img
            src="/images/venue/Bharat_Mandapam_Morning_View.webp"
            alt="Bharat Mandapam"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Middle Section: Overlapping BW Image and Map */}
      <section className="relative bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* BW Image overlapping the top */}
            <div className="w-full md:w-[35%] relative mt-[-100px] md:mt-[-200px] z-30">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80&sat=-100"
                alt="Venue Details"
                className="w-full object-cover h-[400px] md:h-[600px] shadow-2xl rounded-2xl"
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            {/* Map */}
            <div className="w-full md:w-[65%] z-20 mt-10 md:mt-16">
              <iframe
                title="map"
                className="w-full h-[300px] md:h-[400px] shadow-md border border-gray-100 rounded-2xl"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.225%2C28.605%2C77.250%2C28.625&layer=mapnik&marker=28.6139%2C77.2378"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-white">
        <ContactSection />
      </div>

      {/* Project Footer */}
      <Footer />
    </div>
  );
}
