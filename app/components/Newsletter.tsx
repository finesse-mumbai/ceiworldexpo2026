import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-[#dce319] rounded-[2rem] p-8 md:p-12 w-full max-w-[850px] text-center md:text-left shadow-lg">
      <h2 className="text-black text-5xl sm:text-6xl md:text-[5rem] font-black mb-3 font-sans tracking-[0.03em]">newsletter!</h2>
      <p className="text-black font-medium mb-10 text-base sm:text-lg opacity-90">Subscribe to our newsletter!</p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-stretch max-w-[90%] mx-auto md:mx-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-[2] px-6 py-3.5 bg-white rounded-full outline-none text-[15px] text-black placeholder-gray-400 font-medium text-center sm:text-left shadow-sm"
        />
        <button className="w-full sm:flex-[1] sm:w-auto px-8 py-3.5 bg-transparent border-[1.5px] border-black text-black text-[15px] font-semibold rounded-full hover:bg-black hover:text-[#dce319] transition-colors whitespace-nowrap shadow-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}
