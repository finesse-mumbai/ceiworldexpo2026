"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryPages } from "../data/galleryPages";

const tiles = [
  { idx: 0, aspectClass: "aspect-square", className: "rounded-xl md:row-span-2 md:!aspect-auto" },
  { idx: 1, aspectClass: "aspect-[2/1]", className: "rounded-xl md:col-span-2" },
  { idx: 2, aspectClass: "aspect-square", className: "rounded-xl md:row-span-2 md:!aspect-auto" },
  { idx: 3, aspectClass: "aspect-square", className: "rounded-xl" },
  { idx: 4, aspectClass: "aspect-square", className: "rounded-xl" },
];

const calendarVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? -50 : 50,
    opacity: 0,
  }),
};

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  const isOpen = openIdx !== null;
  const totalPages = galleryPages.length; // 10
  
  // Get 5 photos for the current page from our data source
  const currentPhotos = galleryPages[currentPage - 1].slice(0, 5).map(item => item.url);

  const prevPage = useCallback(() => {
    setDirection(-1);
    setCurrentPage(p => (p > 1 ? p - 1 : totalPages));
  }, [totalPages]);

  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentPage(p => (p < totalPages ? p + 1 : 1));
  }, [totalPages]);

  const close = useCallback(() => setOpenIdx(null), []);
  const prevImage = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + currentPhotos.length) % currentPhotos.length)),
    [currentPhotos.length],
  );
  const nextImage = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % currentPhotos.length)),
    [currentPhotos.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prevImage, nextImage]);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <section id="gallery" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Header Row */}
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-sans text-4xl font-black text-black md:text-6xl tracking-tight">
              Photo Gallery
            </h2>
            
            <div className="flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={prevPage} 
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-200 transition-all hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center gap-5">
                <div className="relative h-12 w-14 overflow-hidden font-sans text-4xl font-black text-black">
                  <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                      key={currentPage}
                      custom={direction}
                      variants={calendarVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {String(currentPage).padStart(2, "0")}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="h-[2px] w-20 bg-gray-300 md:w-32" />
                <span className="font-sans text-3xl font-medium text-gray-400">{String(totalPages).padStart(2, "0")}</span>
              </div>

              <button 
                onClick={nextPage} 
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-200 transition-all hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Grid Layout with Fade Animation on Page Change */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2"
            >
              {tiles.map((t) => (
                <button
                  key={`${currentPage}-${t.idx}`}
                  type="button"
                  onClick={() => setOpenIdx(t.idx)}
                  aria-label={`Open image ${t.idx + 1} of ${currentPhotos.length}`}
                  className={`group relative cursor-zoom-in overflow-hidden bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${t.aspectClass} ${t.className}`}
                >
                  <img
                    src={currentPhotos[t.idx]}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        {isOpen && openIdx !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in-0"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:left-8"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <figure
              className="relative max-h-[88vh] max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={openIdx}
                src={currentPhotos[openIdx]}
                alt={`Gallery image ${openIdx + 1}`}
                className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
              />
              <figcaption className="mt-3 text-center font-sans text-sm text-white/70">
                {String(openIdx + 1).padStart(2, "0")} / {String(currentPhotos.length).padStart(2, "0")}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 md:right-8"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
