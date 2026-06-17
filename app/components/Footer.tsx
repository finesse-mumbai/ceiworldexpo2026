import React from 'react';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-black pb-20 pt-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-16">

        {/* Left Side: Logo and Address */}
        <div className="flex flex-col gap-6 w-full md:w-[30%] shrink-0">
          <img src="https://www.worldexindia.com/assets/img/logo.svg" alt="Worldex India" className="w-72" />

          <div className="text-white/60 text-[14px] leading-relaxed space-y-5 mt-2 tracking-wide font-medium">
            <p className="opacity-90">
              Worldex India Exhibition & Promotion Pvt. Ltd.
            </p>
            <p>
              309, Parvati Premises, Sun Mill Complex,<br />
              Lower Parel (W), Mumbai - 400 013, India.
            </p>
            <p>(022) 4037-6700</p>
          </div>
        </div>

        {/* Right Side: Newsletter */}
        <div className="w-full md:w-[70%] flex justify-end">
          <Newsletter />
        </div>

      </div>
    </footer>
  );
}
