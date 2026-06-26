import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }).map((_, i) => i + 1);

  return (
    <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-gray-200 pt-8 md:flex-row md:items-end">
      {/* Big Page Number */}
      <div className="flex items-end gap-2 font-sans">
        <div className="relative h-[60px] w-[70px] overflow-hidden md:h-[72px] md:w-[85px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentPage}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex items-end text-6xl font-black leading-none tracking-tighter text-black md:text-7xl"
            >
              {String(currentPage).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mb-1 text-xl font-medium text-gray-400 md:text-2xl">
          / {totalPages}
        </div>
      </div>

      {/* Center Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onChange(p)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors focus:outline-none"
          >
            <span className={`relative z-10 transition-colors duration-300 ${currentPage === p ? 'text-white' : 'text-gray-500 hover:text-black'}`}>
              {p}
            </span>
            {currentPage === p && (
              <motion.div
                layoutId="activePageBg"
                className="absolute inset-0 rounded-full bg-black shadow-md"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onChange(currentPage > 1 ? currentPage - 1 : totalPages)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-black transition-all hover:border-black hover:bg-black hover:text-white hover:shadow-lg focus:outline-none"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => onChange(currentPage < totalPages ? currentPage + 1 : 1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-black transition-all hover:border-black hover:bg-black hover:text-white hover:shadow-lg focus:outline-none"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
