"use client";
import React from 'react';
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
      ease: [0.25, 1, 0.5, 1] // Soft, elegant cubic bezier easeOut
    }
  }
};

function AnimatedParagraph({ text, className }: { text: string, className?: string }) {
  const words = text.split(" ");
  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {words.map((word, idx) => (
        <span key={idx} className="relative overflow-hidden inline-block py-0.5 mr-[0.24em] last:mr-0">
          <motion.span
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
}

const FEATURES = [
  ["360 Solution Provider :", "CEI offers complete sourcing, manufacturing & trading solutions."],
  ["Ignite Growth :", "Connect with India's most influential buyers and accelerate market entry."],
  ["International Connect :", "CEI is your strategic hub, connecting your brand directly to global manufacturers & suppliers to keep your business growing in India's booming market."],
  ["Epicenter for Current & Future Technologies :", "Gain insights into emerging trends and technologies to future-proof your business. CEI is the go-to destination for trends in telecom & broadcast, IoT, IT solutions, cloud, AI, connectivity, embedded tech, and much more."],
  ["Drive Innovation & Collaboration :", "Engage with industry leaders and discover new partnerships and latest technologies to drive growth."],
  ["Experience the world at CEI:", "Visit international pavilions, explore state-of-the-art products, and directly experience the allure of global brands."],
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-24">
      <section className="bg-white pt-48 pb-12 md:pt-56">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center flex flex-col items-center">
            <div className="font-semibold text-black text-sm md:text-base mb-3 tracking-wide">Experience CEI</div>
            <motion.h2 
              className="font-sans text-3xl md:text-5xl font-medium text-black leading-[1.3] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              CEI - Powering the Indian Components, <br />
              Electronics & IT Systems Industries
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
              <div className="w-full md:w-[65%] rounded-md bg-gradient-to-r from-[#e6f7ff] to-[#66d9ff] p-10 md:p-16 flex items-center">
                <AnimatedParagraph 
                  text="India is in the midst of an 'Electronics & Digital Revolution' and CEI - the premier platform for electronics, components, IT hardware & future technologies - is at the forefront of this transformation."
                  className="text-black text-lg md:text-xl leading-relaxed max-w-3xl flex flex-wrap"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[350px]">
              {/* Text Left */}
              <div className="w-full md:w-[65%] rounded-md bg-gradient-to-r from-[#e6f7ff] to-[#66d9ff] p-10 md:p-16 flex items-center">
                <AnimatedParagraph 
                  text="CEI is more than just an exhibition; it's a catalyst empowering the electronics industry to grow and emerge as a global leader, showcasing the immense capabilities and potential of India's manufacturing sector."
                  className="text-black text-lg md:text-xl leading-relaxed max-w-3xl flex flex-wrap"
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
      </section>
    </div>
  );
}
