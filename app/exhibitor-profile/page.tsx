import React from "react";
import Navbar from "../components/Navbar";
import StickyNavbar from "../components/StickyNavbar";
import Footer from "../components/Footer";
import ExhibitorProfile from "../components/ExhibitorProfile";

export default function ExhibitorProfilePage() {
  return (
    <>
      <Navbar />
      <StickyNavbar />
      
      <main className="min-h-screen bg-white pt-[160px] md:pt-[200px]">
        {/* The extracted Exhibitor Profile component */}
        <div className="bg-white w-full">
          <ExhibitorProfile />
        </div>
      </main>

      <Footer />
    </>
  );
}
