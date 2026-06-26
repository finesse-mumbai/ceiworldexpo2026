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

  const phrase = "Epicenter for current & future technologies: CEI is the go-to destination for trends in the fields of telecom & broadcast, IoT, IT solutions, cloud, AI, connectivity, embedded tech & much more.";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: container.current,
          scrub: true,
          start: "top 80%",
          end: "bottom 60%",
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
      // "Epicenter for current & future technologies:" are the first 6 words
      const isBold = i < 6;
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
          className="text-2xl md:text-4xl lg:text-[42px] font-normal leading-[1.3] tracking-tight text-black text-center mx-auto w-full max-w-[1050px] px-4 [text-wrap:balance]"
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

