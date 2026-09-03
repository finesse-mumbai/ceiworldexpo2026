"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    day: "Day 1",
    title: "Opening Doors",
    index: "01 / 03",
    videoUrl: "https://portal.intexfair.com/assets/video/day-01.mp4",
    poster: "/images/show-highlights/RIS05113.webp"
  },
  {
    day: "Day 2",
    title: "The Main Stage",
    index: "02 / 03",
    videoUrl: "https://portal.intexfair.com/assets/video/day-02.mp4",
    poster: "/images/show-highlights/RIS05161.webp"
  },
  {
    day: "Day 3",
    title: "Final Countdown",
    index: "03 / 03",
    videoUrl: "https://portal.intexfair.com/assets/video/day-03.mp4",
    poster: "/images/show-highlights/RIS05366.webp"
  }
];

const images = [
  "RIS04131.webp", "RIS04168.webp", "RIS04174.webp", "RIS04180.webp",
  "RIS04276.webp", "RIS04776.webp", "RIS04779.webp", "RIS05121.webp",
  "RIS05154.webp", "RIS05162.webp", "RIS05163.webp", "RIS05166.webp",
  "RIS05180.webp", "RIS05182.webp", "RIS05231.webp", "RIS05284.webp",
  "RIS05292.webp", "RIS05295.webp", "RIS05329.webp", "RIS05338.webp",
  "RIS05339.webp", "RIS05354.webp", "RIS05377.webp"
];

const spanPattern = [7, 5, 4, 8];
const spanClass: Record<number, string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  7: "md:col-span-7",
  8: "md:col-span-8",
};

const VideoCard = ({
  video,
  idx,
  isActive,
  onActivate
}: {
  video: typeof videos[0];
  idx: number;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const isCenter = idx === 1;

  return (
    <div className={isCenter ? "md:-mt-8 z-10" : "md:mt-2"}>
      <div className={`relative bg-black overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 ${isCenter ? "aspect-[4/3] outline-[#009ad7]/40" : "aspect-video outline-[#f8f9fa]/10"}`}>
        {isActive ? (
          <video
            src={video.videoUrl}
            autoPlay
            controls
            playsInline
            poster={video.poster}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <Image
              src={video.poster}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <button
              type="button"
              onClick={onActivate}
              aria-label={`Play ${video.title}`}
              className="group absolute inset-0 grid place-items-center bg-[#18181b]/25 transition-colors duration-300 hover:bg-[#18181b]/10 cursor-pointer"
            >
              <span
                className={`grid place-items-center rounded-full bg-gradient-to-tr from-[#009ad7] to-[#007cb0] shadow-xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center ${isCenter ? "size-16" : "size-14"
                  }`}
              >
                <span
                  className={`ml-1 block h-0 w-0 border-y-transparent border-l-[#f8f9fa] ${isCenter
                    ? "border-y-[11px] border-l-[18px]"
                    : "border-y-[9px] border-l-[15px]"
                    }`}
                />
              </span>
              <span className="absolute left-3 top-3 bg-[#18181b]/70 px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-[#f8f9fa] rounded-sm">
                {video.day}
              </span>
            </button>
          </>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between px-1">
        <h3 className="font-sans text-lg font-black tracking-tight text-[#f8f9fa]">
          {video.title}
        </h3>
        <span className="text-[11px] font-semibold tracking-[0.2em] text-[#71717a]">
          {video.index}
        </span>
      </div>
    </div>
  );
};

export default function ShowHighlights() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState<number | null>(null);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

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
    <main className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#18181b] overflow-x-hidden pt-24 md:pt-32">

      {/* HERO SECTION */}
      <section className="relative bg-[#f8f9fa] pt-12 md:pt-24 pb-16 md:pb-20">
        <div className="mx-auto max-w-[95rem] px-6 lg:px-10">
          <h1 className="font-sans text-4xl font-black text-[#18181b] md:text-6xl tracking-tight mb-4 text-balance">
            Show Highlights
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-[#71717a]">
            Explore the vibrant moments and key highlights from the CEI World Expo.
          </p>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#009ad7] to-[#007cb0] px-5 py-2.5 text-sm font-bold text-white shadow-md ring-1 ring-inset ring-black/10 transition-transform hover:scale-105 cursor-pointer">
            <span className="size-2 rounded-full bg-[#dae020] mt-[2px]" />
            Show Highlights 2026
          </div>
        </div>
      </section>



      {/* GALLERY SECTION */}
      <section className="bg-[#f8f9fa] py-20 w-full">
        <div className="mx-auto max-w-[95rem] px-6 lg:px-10">
          <div className="mb-10 flex items-end justify-between border-b border-[#18181b] pb-4">
            <h2 className="font-sans text-3xl md:text-4xl font-black tracking-tight text-[#18181b] leading-none">
              Show Gallery
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {images.map((imgName, i) => {
              const span = spanPattern[i % spanPattern.length]!;
              const wide = span >= 7;
              const numeralLeft = span === 7;
              return (
                <button
                  type="button"
                  key={i}
                  onClick={() => setOpenIdx(i)}
                  aria-label={`Open Image ${i + 1}`}
                  className={`group relative col-span-12 self-start text-left ${spanClass[span]} cursor-pointer`}
                >
                  {wide && (
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -top-8 select-none font-sans text-[7rem] leading-none lg:text-[9rem] font-black ${numeralLeft ? "-left-2 text-[#009ad7]/15" : "-right-2 text-[#ff5a36]/10"
                        }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  )}
                  <div
                    className={`relative overflow-hidden rounded-[min(1vw,12px)] bg-[#f8f9fa] outline-1 -outline-offset-1 outline-[#18181b]/5 transition-transform duration-300 shadow-sm group-hover:shadow-md ${wide ? "aspect-[16/9]" : "aspect-[4/3]"
                      } ${i % 2 === 0 ? "group-hover:-rotate-1" : "group-hover:rotate-1"}`}
                  >
                    <Image
                      src={`/images/show-highlights/${imgName}`}
                      alt={`Highlight ${i + 1}`}
                      fill
                      loading={i < 4 ? "eager" : "lazy"}
                      className="object-cover"
                      sizes={wide ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 flex items-center gap-3 text-[#71717a]">
            <button onClick={() => setOpenIdx(0)} className="grid size-9 place-items-center rounded-full border border-[#d4d4d8] text-xs font-bold transition-colors hover:bg-[#d4d4d8] hover:text-[#18181b]">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-bold tracking-[0.2em]">
              01 / {images.length}
            </span>
            <button onClick={() => setOpenIdx(images.length - 1)} className="grid size-9 place-items-center rounded-full border border-[#d4d4d8] text-xs font-bold transition-colors hover:bg-[#d4d4d8] hover:text-[#18181b]">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FILMS SECTION */}
      <section className="relative bg-[#18181b] py-24 text-[#f8f9fa]">
        <div className="mx-auto max-w-[95rem] px-6 lg:px-10">
          <div className="mb-12 flex items-end justify-between border-b border-[#f8f9fa]/15 pb-4">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white">
              Show Video
            </h2>

          </div>
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            {videos.map((video, idx) => (
              <VideoCard
                key={idx}
                video={video}
                idx={idx}
                isActive={activeVideoIdx === idx}
                onActivate={() => setActiveVideoIdx(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-[110] transition-colors p-2"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[110] p-4 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[110] p-4 transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="relative w-full max-w-[1200px] aspect-[4/3] max-h-[85vh] flex items-center justify-center px-4"
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
        </div>
      )}
      <ContactSection />
      <Footer />
    </main>
  );
}
