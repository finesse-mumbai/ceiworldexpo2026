import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-[#dae020]/85 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 md:p-10 w-full max-w-[800px] text-center md:text-left">
      <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-medium mb-2 font-heading tracking-[0.1em] sm:tracking-[0.12em]">newsletter!</h2>
      <p className="text-black font-medium mb-8 text-sm sm:text-base opacity-90 tracking-[0.1em] sm:tracking-[0.15em]">Subscribe to our newsletter!</p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-center md:items-stretch">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-6 py-3 bg-white rounded-full outline-none text-sm text-black placeholder-gray-500 text-center sm:text-left"
        />
        <button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-black/40 text-black text-sm font-semibold rounded-full hover:bg-black hover:text-[#dae020] transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  );
}
