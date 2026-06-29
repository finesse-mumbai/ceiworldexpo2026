"use client";

import React from 'react';
import AdvantageAccordion from '../components/AdvantageAccordion';
import Footer from '../components/Footer';

export default function AdvantagePage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Full Page Fixed Background Robot */}
      <img
        src="/images/advantage/advantage-page-element-01.png"
        alt="Background Robot"
        className="fixed top-[15%] md:top-[10%] right-[1%] h-[70vh] md:h-[90vh] w-auto object-contain z-0 pointer-events-none drop-shadow-2xl"
      />
      <div className="relative z-10">
        <AdvantageAccordion />
      </div>
      <Footer />
    </div>
  );
}
