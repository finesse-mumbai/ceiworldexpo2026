"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035, // Smooth staggered wave
    }
  }
};

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.25, 1, 0.5, 1] as const // Soft, elegant cubic bezier easeOut
    }
  }
};

function AnimatedParagraph({ text, className }: { text: string, className?: string }) {
  const words = text.split(" ");
  let isBold = false;

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {words.map((word, idx) => {
        let displayWord = word;
        let boldThisWord = isBold;

        if (displayWord.startsWith("**")) {
          isBold = true;
          boldThisWord = true;
          displayWord = displayWord.substring(2);
        }

        if (displayWord.endsWith("**")) {
          isBold = false;
          boldThisWord = true;
          displayWord = displayWord.substring(0, displayWord.length - 2);
        } else if (displayWord.includes("**")) {
          isBold = false;
          boldThisWord = true;
          displayWord = displayWord.replace("**", "");
        }

        return (
          <span key={idx} className={`relative overflow-hidden inline-block py-0.5 mr-[0.24em] last:mr-0 ${boldThisWord ? 'font-bold' : ''}`}>
            <motion.span
              variants={wordVariants}
              className="inline-block"
            >
              {displayWord}
            </motion.span>
          </span>
        );
      })}
    </motion.p>
  );
}

const FEATURES = [
  ["Complete Sourcing Destination:", "Explore everything from consumer electronics and home appliances to electronic components, accessories, OEM/ODM solutions and manufacturing technologies—all under one roof."],
  ["Expand Across the Indian Market:", "Meet distributors, retailers, e-commerce players, importers and channel partners from across India to build new business relationships and strengthen your Pan-India distribution network."],
  ["Connect with Global & Indian Brands:", "Network with leading Indian manufacturers and international companies looking to expand, source, collaborate and grow in one of the world's fastest-growing electronics markets."],
  ["Discover the Latest Consumer Technologies:", "Experience the newest innovations in consumer electronics, smart appliances, kitchen appliances, personal gadgets, electronic components and next-generation products shaping the future of the industry."],
  ["Build Partnerships That Drive Growth:", "Engage directly with decision-makers, buyers and industry leaders to unlock sourcing opportunities, strategic collaborations and long-term business partnerships."],
  ["Experience the World at CEI:", "Explore international pavilions, discover innovative products from across the globe, and experience why CEI is becoming one of India's most important B2B platforms for the consumer electronics and home appliances industry."],
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 relative">
      <main className="pt-64 md:pt-72 pb-20">
        <div className="mx-auto max-w-[95rem] px-4 md:px-8">
          <div className="text-center flex flex-col items-center">
            <div className="font-semibold text-black text-sm md:text-base mb-3 tracking-wide">Experience CEI</div>
            <motion.h2
              className="font-sans text-3xl md:text-5xl font-medium text-black leading-[1.3] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Experience Business. <br /> Experience Growth. Experience CEI.
            </motion.h2>
          </div>

          <div className="mt-16 flex flex-col gap-4">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[350px]">
              {/* Image Left */}
              <div className="w-full md:w-[35%] relative rounded-md overflow-hidden min-h-[250px]">
                {/* Cyan Duotone Overlay */}
                <div className="absolute inset-0 bg-[#00c6ff] mix-blend-color z-10 opacity-100" />
                <div className="absolute inset-0 bg-blue-500 mix-blend-multiply z-10 opacity-40" />
                <img
                  src="/images/gallery/2018/large/Photo%201.jpg"
                  alt="Experience Tech"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* Text Right */}
              <div className="w-full md:w-[65%] rounded-md bg-gradient-to-tr from-[#e6f5fc] via-[#66c2eb]/90 to-[#009ad7]/90 p-10 md:p-16 flex items-center">
                <AnimatedParagraph
                  text="India is at the forefront of a **Consumer Electronics & Home Appliances Revolution,** driven by rapid manufacturing growth, rising consumer demand, strong government initiatives, and expanding global investments. **CEI – India Consumer Electronics, Components & Home Appliances Trade Show** is where this transformation comes to life."
                  className="text-black text-lg md:text-xl leading-relaxed max-w-3xl flex flex-wrap font-medium"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[350px]">
              {/* Text Left */}
              <div className="w-full md:w-[65%] rounded-md bg-gradient-to-tr from-[#e6f5fc] via-[#66c2eb]/90 to-[#009ad7]/90 p-10 md:p-16 flex items-center">
                <AnimatedParagraph
                  text="More than just an exhibition, **CEI is a focused B2B business platform** connecting Indian and international manufacturers, component suppliers, home appliance brands, distributors, retailers, importers and sourcing professionals—creating opportunities for trade, partnerships and long-term business growth."
                  className="text-black text-lg md:text-xl leading-relaxed max-w-3xl flex flex-wrap font-medium"
                />
              </div>
              {/* Image Right */}
              <div className="w-full md:w-[35%] relative rounded-md overflow-hidden min-h-[250px]">
                {/* Cyan Duotone Overlay */}
                <div className="absolute inset-0 bg-[#00c6ff] mix-blend-color z-10 opacity-100" />
                <div className="absolute inset-0 bg-blue-500 mix-blend-multiply z-10 opacity-40" />
                <img
                  src="/images/gallery/2018/large/Photo%202.jpg"
                  alt="Experience Innovation"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {FEATURES.map(([title, body]) => (
              <div key={title} className="rounded-sm border border-[#80d4ff] p-8 md:p-10 bg-white">
                <h4 className="font-sans text-2xl md:text-3xl font-medium text-black mb-4">{title}</h4>
                <p className="text-base md:text-lg leading-relaxed text-black/80">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}
