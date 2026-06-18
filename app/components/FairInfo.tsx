"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    let body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      // "Epicenter for current & future technologies:" are the first 6 words
      const isBold = i < 6;
      const letters = splitLetters(word, isBold);
      body.push(
        <span key={word + "_" + i} className={`inline-block mr-2 lg:mr-3 mb-1 md:mb-2 ${isBold ? 'font-black' : 'font-medium'}`}>
          {letters}
        </span>
      );
    });
    return body;
  }

  const splitLetters = (word: string, isBold: boolean) => {
    let letters: React.ReactNode[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span 
          key={letter + "_" + i} 
          ref={el => {
            if (el) refs.current.push(el);
          }}
          className={`opacity-20 text-black ${isBold ? 'font-black' : 'font-medium'}`}
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
        <h2 className="text-[25pt] font-medium tracking-wide mb-10 text-black text-center">
          The CEI Advantage
        </h2>
        
        <div 
          ref={container} 
          className="text-[50px] font-medium leading-[1.6] text-center mx-auto max-w-5xl tracking-wide flex flex-wrap justify-center"
        >
          {splitWords(phrase)}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-brand-blue text-white rounded-full font-bold shadow-lg hover:bg-blue-600 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

