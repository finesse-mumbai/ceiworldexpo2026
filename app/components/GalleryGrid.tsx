import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryCard from './GalleryCard';
import { GalleryItem } from '../data/galleryPages';

interface GalleryGridProps {
  items: GalleryItem[];
  pageKey: number; // triggers AnimatePresence
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
      when: "afterChildren",
    }
  }
};

export default function GalleryGrid({ items, pageKey }: GalleryGridProps) {
  return (
    // By keeping the container height somewhat fixed or min-height, we avoid jank during "wait"
    <div className="relative min-h-[800px] w-full">
      <style>{`
        .bento-grid {
          grid-auto-rows: 250px;
        }
        @media (min-width: 768px) {
          .bento-grid {
            grid-auto-rows: 280px;
          }
        }
      `}</style>
      <AnimatePresence mode="wait">
        <motion.div
          key={pageKey}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-6 bento-grid"
        >
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
