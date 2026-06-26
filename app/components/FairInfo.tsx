"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

export default function FairInfo() {
  const container = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  // Clear refs on every render to avoid accumulating duplicates in React Strict Mode
  refs.current = [];

  const phrase = "A focused platform for Consumer Electronics & Home Appliances: Showcase your products to a qualified B2B audience actively looking for the latest in consumer electronics, home appliances, small domestic appliances, accessories, and components.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top 90%",
          end: "bottom 20%",
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const splitWords = (phrase: string) => {
    const body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      // "A focused platform for Consumer Electronics & Home Appliances:" are the first 9 words
      const isBold = i < 9;
      const letters = splitLetters(word, isBold);
      body.push(
        <span key={word + "_" + i} className={`inline-block ${isBold ? 'font-bold' : 'font-normal'}`} style={{ paddingRight: '0.25em' }}>
          {letters}
        </span>
      );
    });
    return body;
  }

  const splitLetters = (word: string, isBold: boolean) => {
    const letters: React.ReactNode[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={el => {
            if (el) refs.current.push(el);
          }}
          className={`opacity-20 text-black ${isBold ? 'font-bold' : 'font-normal'}`}
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
        <h2 className="text-sm md:text-base font-bold tracking-widest uppercase mb-6 md:mb-10 text-black text-center px-4">
          The CEI Advantage
        </h2>

        <div
          ref={container}
          className="text-xl md:text-3xl lg:text-[34px] font-normal leading-[1.4] tracking-tight text-black text-center mx-auto w-full max-w-[1050px] px-4 [text-wrap:balance]"
        >
          {splitWords(phrase)}
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

