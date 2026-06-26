import React from 'react';
import { motion } from 'framer-motion';
import { GalleryItem } from '../data/galleryPages';

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  // Map span to CSS classes for a 6-column grid
  const spanClass = {
    tall: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 aspect-square md:aspect-auto",
    wide: "col-span-1 md:col-span-4 row-span-1 md:row-span-1 aspect-[2/1] md:aspect-auto",
    small: "col-span-1 md:col-span-2 row-span-1 md:row-span-1 aspect-square md:aspect-auto",
    large: "col-span-1 md:col-span-4 row-span-1 md:row-span-2 aspect-square md:aspect-auto",
  }[item.span];

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm ${spanClass}`}
    >
      <img
        src={item.url}
        alt={`Photo by ${item.photographer}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
        loading="lazy"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Info Badge */}
      <div className="absolute bottom-0 left-0 flex w-full flex-row items-end justify-between p-5 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
            Photographer
          </span>
          <span className="text-sm font-medium">
            {item.photographer}
          </span>
        </div>
        <div className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-md">
          <span className="text-sm font-bold tracking-wide">
            ${item.price}.00
          </span>
        </div>
      </div>
    </motion.div>
  );
}
