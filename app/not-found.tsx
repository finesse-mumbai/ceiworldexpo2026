"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Search, Compass } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Dynamic Background Glow following mouse */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #009ad7 0%, rgba(0,0,0,0) 70%)",
        }}
        animate={{
          x: mousePosition.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0),
          y: mousePosition.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0),
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200, mass: 0.5 }}
      />
      
      {/* Secondary fixed glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#dae020] blur-[150px] opacity-10 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center">
        {/* 404 Glitch/Floating Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.h1 
            className="text-[120px] md:text-[200px] font-bold leading-none tracking-tighter bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff, #cccccc)",
            }}
            animate={{ 
              textShadow: [
                "0px 0px 0px rgba(0,154,215,0)",
                "0px 0px 40px rgba(0,154,215,0.4)",
                "0px 0px 0px rgba(0,154,215,0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          
          <motion.div 
            className="absolute -top-4 -right-12 text-[#dae020] opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Compass size={64} strokeWidth={1} />
          </motion.div>
        </motion.div>

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mt-4"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tight">
            Oops! This page has gone off the grid.
          </h2>
          <p className="text-[#cccccc] text-lg md:text-xl font-light mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#009ad7]/0 via-[#009ad7]/10 to-[#009ad7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Go Back</span>
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#009ad7] to-[#007ab3] text-white rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(0,154,215,0.3)] hover:shadow-[0_0_30px_rgba(0,154,215,0.5)] hover:scale-[1.02]"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>

        {/* Suggested Links Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10 w-full max-w-xl flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-[#cccccc]"
        >
          <span className="font-medium text-white">Popular destinations:</span>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-[#009ad7] transition-colors relative group">
              About Fair
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#009ad7] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/exhibitors-list" className="hover:text-[#dae020] transition-colors relative group">
              Exhibitors
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#dae020] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/connect" className="hover:text-[#009ad7] transition-colors relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#009ad7] transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
