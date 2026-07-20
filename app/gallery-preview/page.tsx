"use client";
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "/images/gallery/2018/large/Photo%201.jpg",
  "/images/gallery/2018/large/Photo%202.jpg",
  "/images/gallery/2018/large/Photo%203.jpg",
  "/images/gallery/2018/large/Photo%204.jpg",
  "/images/gallery/2018/large/Photo%205.jpg",
  "/images/gallery/2018/large/Photo%206.jpg",
];

export default function GalleryPreview() {
  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans pb-32">
      <div className="pt-24 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Gallery Animations Preview</h1>
        <p className="text-gray-600 mb-12">Scroll down to see both options in action.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-32">
        
        {/* OPTION 2: BENTO EXPANSION */}
        <section>
          <h2 className="text-3xl font-semibold mb-2">Option 2: Bento-Box Expansion</h2>
          <p className="text-gray-500 mb-8">Click on any image to see it seamlessly expand (Apple iOS App Store style).</p>
          <BentoGallery />
        </section>

        {/* OPTION 1: PARALLAX MASONRY */}
        <section className="mb-32">
          <h2 className="text-3xl font-semibold mb-2">Option 1: Parallax Masonry</h2>
          <p className="text-gray-500 mb-8">Scroll up and down. Notice how the middle column moves at a different speed.</p>
          <ParallaxGallery />
        </section>

      </div>
    </div>
  );
}

function BentoGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            layoutId={`card-${i}`}
            onClick={() => setSelectedId(i)}
            className="cursor-pointer overflow-hidden rounded-2xl h-48 md:h-64 shadow-md hover:shadow-xl transition-shadow"
          >
            <motion.img 
              src={src} 
              alt="Gallery" 
              className="w-full h-full object-cover" 
              layoutId={`img-${i}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Expanded View */}
      {selectedId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            layoutId={`card-${selectedId}`}
            className="relative bg-white w-full max-w-4xl h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
          >
            <motion.img 
              src={images[selectedId]} 
              alt="Gallery Expanded" 
              className="w-full h-[60%] md:h-[75%] object-cover"
              layoutId={`img-${selectedId}`}
            />
            <div className="p-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold mb-2"
              >
                Premium Display Experience
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }}
                className="text-gray-600"
              >
                Notice how smoothly the image transitioned from the grid to the full-screen view without any hard cuts. Click outside to close.
              </motion.p>
            </div>
            
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function ParallaxGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]); // Moves slower/opposite
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="h-[800px] overflow-hidden bg-white rounded-3xl p-4 md:p-8 flex gap-4 md:gap-8 justify-center items-start shadow-inner border border-gray-100">
      
      {/* Column 1 */}
      <motion.div style={{ y: y1 }} className="flex flex-col gap-4 md:gap-8 w-1/3 pt-12">
        <img src={images[0]} alt="Pic" className="w-full rounded-xl object-cover h-48 md:h-72 shadow-lg" />
        <img src={images[1]} alt="Pic" className="w-full rounded-xl object-cover h-64 md:h-96 shadow-lg" />
      </motion.div>

      {/* Column 2 */}
      <motion.div style={{ y: y2 }} className="flex flex-col gap-4 md:gap-8 w-1/3 -mt-24">
        <img src={images[2]} alt="Pic" className="w-full rounded-xl object-cover h-64 md:h-96 shadow-lg" />
        <img src={images[3]} alt="Pic" className="w-full rounded-xl object-cover h-48 md:h-72 shadow-lg" />
      </motion.div>

      {/* Column 3 */}
      <motion.div style={{ y: y3 }} className="flex flex-col gap-4 md:gap-8 w-1/3 pt-24 hidden md:flex">
        <img src={images[4]} alt="Pic" className="w-full rounded-xl object-cover h-48 md:h-72 shadow-lg" />
        <img src={images[5]} alt="Pic" className="w-full rounded-xl object-cover h-64 md:h-96 shadow-lg" />
      </motion.div>

    </div>
  );
}
