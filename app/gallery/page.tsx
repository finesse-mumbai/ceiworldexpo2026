"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const PHOTOS = [
  "/images/gallery/2019/large/BXSR0082.jpg",
  "/images/gallery/2019/large/C89A9355.jpg",
  "/images/gallery/2019/large/IMG_8647.jpg",
  "/images/gallery/2019/large/IMG_9129.jpg",
  "/images/gallery/2018/large/photo_45.jpg",
  "/images/gallery/2018/large/photo_46.jpg",
  "/images/gallery/2018/large/photo_47.jpg",
];

export default function GalleryPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    [],
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % PHOTOS.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  const tiles = [
    { idx: 0, aspectClass: "aspect-square", className: "rounded-xl md:row-span-2 md:!aspect-auto" },
    { idx: 1, aspectClass: "aspect-[2/1]", className: "rounded-xl md:col-span-2" },
    { idx: 2, aspectClass: "aspect-square", className: "rounded-xl md:row-span-2 md:!aspect-auto" },
    { idx: 3, aspectClass: "aspect-square", className: "rounded-xl" },
    { idx: 4, aspectClass: "aspect-square", className: "rounded-xl" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <section id="gallery" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-sans text-4xl font-black text-black md:text-6xl">Photo Gallery</h2>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="font-sans text-lg text-black">01</span>
              <span className="h-px w-16 bg-black md:w-24" />
              <span className="font-sans text-lg text-gray-500">10</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {tiles.map((t) => (
              <button
                key={t.idx}
                type="button"
                onClick={() => setOpenIdx(t.idx)}
                aria-label={`Open image ${t.idx + 1} of ${PHOTOS.length}`}
                className={`group relative cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${t.aspectClass} ${t.className}`}
              >
                <img
                  src={PHOTOS[t.idx]}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>

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
                prev();
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
                src={PHOTOS[openIdx]}
                alt={`Gallery image ${openIdx + 1}`}
                className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
              />
              <figcaption className="mt-3 text-center font-sans text-sm text-white/70">
                {String(openIdx + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
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
