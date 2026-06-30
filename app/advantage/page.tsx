"use client";

import React from 'react';
import AdvantageAccordion from '../components/AdvantageAccordion';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function AdvantagePage() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="relative z-10">
        <AdvantageAccordion />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
