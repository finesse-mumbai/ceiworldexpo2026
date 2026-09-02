"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "RIS04131.webp", "RIS04168.webp", "RIS04174.webp", "RIS04180.webp",
  "RIS04276.webp", "RIS04776.webp", "RIS04779.webp", "RIS05113.webp",
  "RIS05121.webp", "RIS05154.webp", "RIS05161.webp", "RIS05162.webp",
  "RIS05163.webp", "RIS05166.webp", "RIS05180.webp", "RIS05182.webp",
  "RIS05231.webp", "RIS05284.webp", "RIS05292.webp", "RIS05295.webp",
  "RIS05329.webp", "RIS05338.webp", "RIS05339.webp", "RIS05354.webp",
  "RIS05366.webp", "RIS05377.webp"
];

export default function ShowHighlights() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  const close = () => setOpenIdx(null);
  
  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenIdx((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  };
  
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpenIdx((i) => (i === null ? null : (i + 1) % images.length));
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <main className="flex flex-col min-h-screen bg-[#f8f9fa]">
      <div className="pt-48 pb-24 md:pt-56 md:pb-32 w-full flex-grow">
        <div className="relative mx-auto max-w-[95rem] px-4 md:px-8 z-10 mb-8 md:mb-12">
          <h1 className="font-sans text-4xl font-black text-black md:text-6xl tracking-tight mb-4">
            Show Highlights
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg font-medium mb-12">
            Explore the vibrant moments and key highlights from the CEI World Expo.
          </p>

          <div className="flex justify-start items-center border-b border-gray-200 pb-4 mb-8">
            <button className="px-6 py-2.5 rounded text-sm md:text-base font-semibold text-white shadow-md bg-gradient-to-r from-[#009ad7] to-[#007cb0] transition-all hover:scale-[1.02]">
              Show Highlights 2026
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {images.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setOpenIdx(index)}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <Image
                  src={`/images/show-highlights/${img}`}
                  alt={`Show Highlight ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />

      {/* Lightbox Modal */}
      {isOpen && openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close Button Top Right */}
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 md:right-8 md:top-8 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white z-[110]"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full max-w-[1200px] aspect-[4/3] max-h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black">
                <Image
                  src={`/images/show-highlights/${images[openIdx]}`}
                  alt={`Show Highlight ${openIdx + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
             </div>
          </div>

          {/* Directional Icons below the image */}
          <div 
            className="flex items-center gap-8 mt-6 md:mt-8 z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prevImage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <div className="text-white/80 font-medium font-sans text-lg tracking-widest">
              {String(openIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>

            <button
              type="button"
              onClick={nextImage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
