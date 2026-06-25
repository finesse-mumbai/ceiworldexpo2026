import React from 'react';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

export default function VenuePage() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Top Section */}
      <section 
        className="relative w-full bg-white overflow-hidden"
        style={{ height: 'max(400px, 46vw)' }}
      >
        {/* Blue background block covering the bottom 38% (split line) */}
        <div 
          className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-[#cae9f9] to-[#e4f4fd] z-0" 
          style={{ height: '38%' }}
        />

        {/* Giant Delhi Text */}
        <div className="absolute inset-0 flex items-start justify-start z-10 pointer-events-none">
          <h1 
            className="font-black text-[#d6df23] whitespace-nowrap select-none"
            style={{ 
              fontSize: "max(560px, 64vw)", 
              letterSpacing: "-0.05em",
              lineHeight: 0.75,
              marginLeft: "calc(-1 * max(40px, 4.5vw))", // Cuts the D precisely
              marginTop: "calc(-1 * max(20px, 2vw))" // Pulls the text up so l and h hit the top
            }}
          >
            Delhi
          </h1>
        </div>

        {/* Content Info (Venue, Bharat Mandapam) */}
        <div 
          className="absolute z-20 flex flex-col justify-end"
          style={{ 
            bottom: '38%', // Exact same percentage as blue background so it sits on the split line
            left: 'max(24px, 10vw)' 
          }}
        >
          <div className="mb-1 text-sm font-bold text-[#009ad7] tracking-wider uppercase">Venue</div>
          <h3 className="font-sans text-3xl sm:text-4xl md:text-[3.5rem] font-bold text-black leading-tight tracking-tight">Bharat Mandapam,</h3>
          <p className="text-xl sm:text-2xl md:text-3xl text-black font-light tracking-wide mt-1">New Delhi, Delhi 110001</p>
        </div>
      </section>

      {/* Stadium Image (Positioned below the main Delhi section) */}
      <div className="relative z-20 w-full mt-0">
        <img 
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=2400&q=80" 
          alt="Bharat Mandapam"
          className="w-full object-cover h-[300px] md:h-[500px]"
        />
      </div>

      {/* Middle Section: Overlapping BW Image and Map */}
      <section className="relative bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* BW Image overlapping the top */}
            <div className="w-full md:w-[35%] relative mt-[-100px] md:mt-[-200px] z-30">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80&sat=-100"
                alt="Venue Details"
                className="w-full object-cover h-[400px] md:h-[600px] shadow-2xl"
                style={{ filter: "grayscale(1)" }}
              />
            </div>
            {/* Map */}
            <div className="w-full md:w-[65%] z-20 mt-10 md:mt-16">
              <iframe
                title="map"
                className="w-full h-[300px] md:h-[400px] shadow-md border border-gray-100"
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
