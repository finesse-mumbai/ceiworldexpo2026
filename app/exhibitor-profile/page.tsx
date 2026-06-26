import React from "react";
import ExhibitorProfile from "../components/ExhibitorProfile";

export default function ExhibitorProfilePage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      {/* The extracted Exhibitor Profile component */}
      <div className="bg-white w-full">
        <ExhibitorProfile />
      </div>

      {/* Disclaimer Text for Exhibitor Profile Page only */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <p className="text-sm md:text-base text-gray-500 italic font-medium leading-relaxed text-center">
          * The product categories mentioned may not match the final product categories displayed by the exhibitors. You are advised to check the final list of exhibitors and their exhibits on the applicable website before visiting the Fair and requesting for Business Matching services.
        </p>
      </div>
    </main>
  );
}
