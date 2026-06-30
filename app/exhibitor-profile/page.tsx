import React from "react";
import ExhibitorProfile from "../components/ExhibitorProfile";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function ExhibitorProfilePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 relative">
      <main className="pt-64 md:pt-72 pb-20">
        {/* The extracted Exhibitor Profile component */}
        <div className="bg-white w-full">
          <ExhibitorProfile />
        </div>

        {/* Disclaimer Text for Exhibitor Profile Page only */}
        <div className="max-w-[95rem] mx-auto px-4 md:px-8 mt-8">
          <p className="text-sm md:text-base text-gray-500 italic font-medium leading-relaxed text-center">
            * The product categories mentioned may not match the final product categories displayed by the exhibitors. You are advised to check the final list of exhibitors and their exhibits on the applicable website before visiting the Fair and requesting for Business Matching services.
          </p>
        </div>
      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
