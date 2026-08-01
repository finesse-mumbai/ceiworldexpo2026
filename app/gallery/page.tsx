"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { galleryPages, TOTAL_PAGES, type GalleryItem } from "../data/galleryPages";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

/** How long a page stays on screen before autoplay advances. */
const AUTOPLAY_MS = 5000;
/** Autoplay resumes this long after the last touch on the gallery. */
const TOUCH_RESUME_MS = 10000;
/**
 * Ceiling on how long a tile waits for its own photograph before revealing
 * anyway. Keeps a single slow file from stalling the cascade.
 */
const DECODE_CEILING_MS = 320;
/** Width requested when warming adjacent pages — matches the grid's typical slot. */
const PRELOAD_WIDTH = 640;
const IMAGE_QUALITY = 78;

/**
 * The five bento tiles. `sizes` is what lets next/image ship a ~600px derivative
 * instead of the 1500px original — the grid never renders a tile wider than
 * roughly a quarter of the 95rem container.
 */
const tiles = [
  {
    idx: 0,
    aspectClass: "aspect-square",
    className: "rounded-md md:row-span-2 md:!aspect-auto",
    sizes: "(min-width: 1600px) 380px, (min-width: 768px) 24vw, 50vw",
  },
  {
    idx: 1,
    aspectClass: "aspect-[2/1]",
    className: "rounded-md md:col-span-2",
    sizes: "(min-width: 1600px) 760px, (min-width: 768px) 48vw, 50vw",
  },
  {
    idx: 2,
    aspectClass: "aspect-square",
    className: "rounded-md md:row-span-2 md:!aspect-auto",
    sizes: "(min-width: 1600px) 380px, (min-width: 768px) 24vw, 50vw",
  },
  {
    idx: 3,
    aspectClass: "aspect-square",
    className: "rounded-md",
    sizes: "(min-width: 1600px) 380px, (min-width: 768px) 24vw, 50vw",
  },
  {
    idx: 4,
    aspectClass: "aspect-square",
    className: "rounded-md",
    sizes: "(min-width: 1600px) 380px, (min-width: 768px) 24vw, 50vw",
  },
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

/** Directional shutter per tile — unchanged from the original choreography. */
function enterClipPath(idx: number) {
  if (idx === 0) return "inset(100% 0% 0% 0%)"; // Left column: bottom to top
  if (idx === 2) return "inset(0% 100% 0% 0%)"; // Right column: left to right
  return "inset(0% 0% 0% 100%)"; // Middle content: right to left
}

/** Mirrors the shutter when paging backwards, so "back" reads as back. */
function enterClipPathFor(idx: number, direction: number) {
  if (direction >= 0) return enterClipPath(idx);
  if (idx === 0) return "inset(0% 0% 100% 0%)";
  if (idx === 2) return "inset(0% 0% 0% 100%)";
  return "inset(0% 100% 0% 0%)";
}

/**
 * Builds the same URL next/image resolves to, so a preloaded response is served
 * from cache when the tile actually mounts.
 */
function optimizedSrc(url: string, width: number, quality: number) {
  return `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=${quality}`;
}

interface RevealTileProps {
  tile: (typeof tiles)[number];
  photo: GalleryItem;
  direction: number;
  priority: boolean;
  reducedMotion: boolean;
  onOpen: () => void;
}

/**
 * One tile of the bento. Remounts on every page change (keyed by page), so its
 * decode gate resets naturally.
 *
 * The shutter waits for this tile's own photograph to load, capped at
 * DECODE_CEILING_MS. Previously the wipe fired the instant the page changed and
 * spent most of its 450ms revealing an empty grey box, because the image had not
 * been requested yet.
 */
function RevealTile({ tile, photo, direction, priority, reducedMotion, onOpen }: RevealTileProps) {
  const [loaded, setLoaded] = useState(false);
  const [gateExpired, setGateExpired] = useState(false);
  const revealed = loaded || gateExpired;

  useEffect(() => {
    const timer = setTimeout(() => setGateExpired(true), DECODE_CEILING_MS);
    return () => clearTimeout(timer);
  }, []);

  const variants = useMemo(
    () => ({
      enter: reducedMotion
        ? { opacity: 0, clipPath: "inset(0% 0% 0% 0%)", zIndex: 10 }
        : { opacity: 1, clipPath: enterClipPathFor(tile.idx, direction), zIndex: 10 },
      center: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", zIndex: 10 },
      exit: { opacity: reducedMotion ? 0 : 1, clipPath: "inset(0% 0% 0% 0%)", zIndex: 0 },
    }),
    [tile.idx, direction, reducedMotion],
  );

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      aria-label={`View ${photo.alt} at full size`}
      variants={variants}
      initial="enter"
      animate={revealed ? "center" : "enter"}
      exit="exit"
      transition={{
        duration: reducedMotion ? 0.2 : 0.45,
        ease: [0.22, 1, 0.36, 1],
        delay: reducedMotion ? 0 : tile.idx * 0.045,
      }}
      className="absolute inset-0 w-full h-full group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
    >
      <Image
        src={photo.url}
        alt={photo.alt}
        fill
        sizes={tile.sizes}
        quality={IMAGE_QUALITY}
        priority={priority}
        // All five tiles are the page's primary content, so none should be
        // deferred — at ~35KB each post-optimisation there is nothing to save
        // by lazy-loading them, and a tile that arrives late misses its shutter.
        loading={priority ? undefined : "eager"}
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        onLoad={() => setLoaded(true)}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </motion.button>
  );
}

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Autoplay is a suggestion, not a commitment: an explicit pager click ends it
  // for the session, and hover / focus / touch / an open lightbox suspend it.
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);

  const prefersReducedMotion = usePrefersReducedMotion();
  const lenis = useLenis();

  const isOpen = openIdx !== null;
  const totalPages = TOTAL_PAGES;
  const currentPhotos = galleryPages[currentPage - 1];

  const autoplayActive =
    autoplayEnabled && !isPaused && !isOpen && tabVisible && !prefersReducedMotion;

  const prevPage = useCallback(() => {
    setDirection(-1);
    setAutoplayEnabled(false);
    setCurrentPage(p => (p > 1 ? p - 1 : totalPages));
  }, [totalPages]);

  const nextPage = useCallback(() => {
    setDirection(1);
    setAutoplayEnabled(false);
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

  // --- Autoplay -------------------------------------------------------------
  useEffect(() => {
    if (!autoplayActive) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage(p => (p < totalPages ? p + 1 : 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplayActive, currentPage, totalPages]);

  useEffect(() => {
    const onVisibilityChange = () => setTabVisible(!document.hidden);
    onVisibilityChange();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  // Touch has no "leave" event, so resume on a timer after the last contact
  // rather than stranding autoplay off for anyone who merely scrolled past.
  const touchResumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleTouchStart = useCallback(() => {
    if (touchResumeRef.current) clearTimeout(touchResumeRef.current);
    setIsPaused(true);
  }, []);
  const handleTouchEnd = useCallback(() => {
    if (touchResumeRef.current) clearTimeout(touchResumeRef.current);
    touchResumeRef.current = setTimeout(() => setIsPaused(false), TOUCH_RESUME_MS);
  }, []);
  useEffect(() => () => {
    if (touchResumeRef.current) clearTimeout(touchResumeRef.current);
  }, []);

  // --- Warm the adjacent pages during idle ----------------------------------
  useEffect(() => {
    const neighbours = [
      currentPage % totalPages,              // next page, zero-indexed
      (currentPage - 2 + totalPages) % totalPages, // previous page, zero-indexed
    ];

    const warm = () => {
      neighbours.forEach(pageIdx => {
        galleryPages[pageIdx]?.forEach(item => {
          const img = new window.Image();
          img.decoding = "async";
          img.src = optimizedSrc(item.url, PRELOAD_WIDTH, IMAGE_QUALITY);
        });
      });
    };

    const idle = window.requestIdleCallback;
    if (typeof idle === "function") {
      const handle = idle(warm, { timeout: 2000 });
      return () => window.cancelIdleCallback?.(handle);
    }
    const handle = setTimeout(warm, 400);
    return () => clearTimeout(handle);
  }, [currentPage, totalPages]);

  // --- Lightbox: keys, focus trap, scroll lock ------------------------------
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Lenis drives scrolling site-wide, so body overflow alone does not hold it.
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "ArrowLeft") {
        prevImage();
        return;
      }
      if (e.key === "ArrowRight") {
        nextImage();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusables = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      previouslyFocused?.focus?.();
    };
  }, [isOpen, close, prevImage, nextImage, lenis]);

  const openPhoto = currentPhotos[openIdx ?? 0];

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <section id="gallery" className="bg-white pt-52 pb-24 md:pt-60 md:pb-32">
        <div
          className="mx-auto max-w-[95rem] px-4 md:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >

          {/* Header Row */}
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-sans text-4xl font-black text-black md:text-6xl tracking-tight">
              Photo Gallery
            </h2>

            <div className="flex items-center gap-6 text-sm font-medium">
              <button
                type="button"
                onClick={prevPage}
                aria-label="Previous page of photographs"
                aria-controls="gallery-grid"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-200 transition-all hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <ChevronLeft size={20} aria-hidden="true" />
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

                {/*
                  The hairline rule doubles as the autoplay timer, so the page's
                  automatic movement is legible instead of surprising. Pure
                  scaleX on the compositor — no layout, no paint.
                */}
                <span
                  className="relative block h-[2px] w-20 overflow-hidden bg-gray-300 md:w-32"
                  aria-hidden="true"
                >
                  {autoplayEnabled && !prefersReducedMotion && (
                    <span
                      key={currentPage}
                      className="gallery-progress absolute inset-0 origin-left bg-brand-blue"
                      style={{ animationPlayState: autoplayActive ? "running" : "paused" }}
                    />
                  )}
                </span>

                <span className="font-sans text-3xl font-medium text-gray-400">
                  {String(totalPages).padStart(2, "0")}
                </span>
              </div>

              <button
                type="button"
                onClick={nextPage}
                aria-label="Next page of photographs"
                aria-controls="gallery-grid"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-200 transition-all hover:scale-105 hover:border-black hover:bg-black hover:text-white hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Grid Layout with Staggered Shape-Based Shutter Reveal Animation */}
          <div id="gallery-grid" className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
            {tiles.map((t) => (
              <div
                key={t.idx}
                className={`${t.aspectClass} ${t.className} relative overflow-hidden bg-gray-100 rounded-md`}
              >
                <AnimatePresence custom={direction}>
                  <RevealTile
                    key={`${currentPage}-${t.idx}`}
                    tile={t}
                    photo={currentPhotos[t.idx]}
                    direction={direction}
                    // Only the first page's two largest tiles race for LCP.
                    priority={currentPage === 1 && t.idx < 2}
                    reducedMotion={prefersReducedMotion}
                    onOpen={() => setOpenIdx(t.idx)}
                  />
                </AnimatePresence>
              </div>
            ))}
          </div>

          <p className="sr-only" role="status" aria-live="polite">
            {`Page ${currentPage} of ${totalPages}`}
          </p>
        </div>

        {/* Lightbox Modal */}
        {isOpen && openIdx !== null && (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer, ${openIdx + 1} of ${currentPhotos.length}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-8"
            >
              <ChevronLeft className="h-7 w-7" aria-hidden="true" />
            </button>

            <figure
              className="relative max-h-[88vh] max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={openIdx}
                src={openPhoto.url}
                alt={openPhoto.alt}
                width={openPhoto.width}
                height={openPhoto.height}
                // Bounded rather than "92vw": some originals are 7MB+ at full
                // camera resolution, and an unbounded sizes lets the browser
                // reach for the 3840w derivative (728KB) to fill an 88vh frame.
                // Capped here it lands on ~1920w at q82 — ~187KB, and visually
                // indistinguishable at this scale.
                sizes="(max-width: 1024px) 92vw, 1100px"
                quality={82}
                placeholder="blur"
                blurDataURL={openPhoto.blurDataURL}
                className="h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-md object-contain shadow-2xl"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8"
            >
              <ChevronRight className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
