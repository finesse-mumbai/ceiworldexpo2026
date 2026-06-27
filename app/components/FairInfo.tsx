"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function FairInfo() {
  const container = useRef<HTMLDivElement>(null);

  const phrase1 = "A focused platform for Consumer Electronics & Home Appliances: Showcase your products to a qualified B2B audience actively looking for the latest in consumer electronics, home appliances, and components.";
  const phrase2 = "Expand your reach in India’s fast-growing market: Connect with importers, distributors, retailers, e-commerce players, OEMs, and sourcing professionals looking to build strong product portfolios for the Indian market.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(".reveal-letter", {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top 85%",
          end: "bottom 35%",
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const splitWords = (phrase: string, boldCount: number, phraseIndex: number) => {
    const body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      const isBold = i < boldCount;
      const letters = splitLetters(word, isBold, phraseIndex, i);
      body.push(
        <span key={`word_${phraseIndex}_${i}`} className={`inline-block ${isBold ? 'font-bold' : 'font-normal'}`} style={{ paddingRight: '0.25em' }}>
          {letters}
        </span>
      );
    });
    return body;
  }

  const splitLetters = (word: string, isBold: boolean, phraseIndex: number, wordIndex: number) => {
    const letters: React.ReactNode[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={`letter_${phraseIndex}_${wordIndex}_${i}`}
          className={`reveal-letter opacity-20 text-black ${isBold ? 'font-bold' : 'font-normal'}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  }

  return (
    <section className="pt-32 md:pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wide text-center mb-12 px-4">
          The CEI Advantage
        </h2>

        <div
          ref={container}
          className="text-2xl md:text-3xl font-normal leading-[1.4] tracking-tight text-black text-center w-full flex flex-col gap-8"
        >
          <div>{splitWords(phrase1, 9, 1)}</div>
          <div>{splitWords(phrase2, 7, 2)}</div>
        </div>

        <div className="text-center mt-12">
          <Link href="/advantage" className="inline-block px-8 py-2.5 bg-[#00a0e3] text-white rounded-full font-medium text-sm md:text-base shadow-md hover:bg-[#008bc2] hover:shadow-lg transition-all">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}

