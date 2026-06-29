import React from 'react';
import Footer from '../components/Footer';

const categories = [
  "Electronic Components & Equipment",
  "Semiconductors",
  "Electronic Design (ED/EDA)",
  "Active & Passive Components",
  "Discrete Components (condensers, capacitors, transistors, etc.)",
  "IT & Digital solutions",
  "Electronic Manufacturing Service (EMS) Providers",
  "PCB and other Circuit-Carrier Manufacturing",
  "Fire Protection Systems",
  "Manufacturers of Light Emitting Diodes (LED)",
  "Embedded Systems, Products & Technologies",
  "Micro-nano production (MEMS)",
  "Wireless",
  "Components & Production Technology",
  "Medical Electronics",
  "Automobile Electronic Components",
  "Assemblies and Subsystems",
  "Hybrid-Component Manufacturing",
  "Smart Pool Automation",
  "Electronics Manufacturing Technologies, Equipment & Consumables",
  "Sensors & Sensor Technology",
  "IOT Devices",
  "Testing & Measurement Equipment",
  "Robotics",
  "Automotive & EV solutions",
  "Photovoltaic Production (materials, technology, equipment)",
  "Car & Home systems",
  "Display manufacturing"
];

export default function ElectronicComponentsPage() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      {/* Top Spacer for Header (White Background) */}
      <div className="w-full bg-white pt-48 pb-12 md:pt-56 md:pb-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
          Components
        </h1>
      </div>

      {/* Middle Section with Background Image */}
      <section className="relative w-full py-16 md:py-24 flex-grow flex flex-col items-center justify-center">
        {/* Background Image Setup */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/CEI-Website-Design-05.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
        </div>

        <div className="relative z-10 px-4 w-full flex flex-col items-center justify-center max-w-[95rem] mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-6xl p-6 md:p-10 lg:p-14">

            <div className="columns-1 md:columns-2 lg:columns-3 gap-x-12">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-3.5 border-b border-gray-100 break-inside-avoid hover:bg-gray-50 transition-colors rounded-md group cursor-default"
                >
                  <div className="w-5 h-5 rounded-[4px] border-2 border-gray-200 flex-shrink-0 group-hover:border-[#009ad7] transition-colors ml-2"></div>
                  <span className="text-gray-800 text-[15px] font-medium tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-14 pt-6 border-t border-gray-100 text-center text-[11px] md:text-xs text-gray-400 max-w-4xl mx-auto leading-relaxed">
              * The product categories mentioned may not match the final product categories displayed by the exhibitors. You are advised to check the final list of exhibitors and their exhibits on the applicable website before visiting the Fair and requesting for Business Matching services.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
