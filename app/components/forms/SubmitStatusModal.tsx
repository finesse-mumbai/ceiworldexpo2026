"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface SubmitStatus {
  success: boolean;
  message: string;
}

interface SubmitStatusModalProps {
  status: SubmitStatus | null;
  onClose: () => void;
}

export default function SubmitStatusModal({ status, onClose }: SubmitStatusModalProps) {
  return (
    <AnimatePresence>
      {status && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-status-title"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative border border-slate-100 flex flex-col items-center text-center"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009ad7] rounded"
            >
              <X className="w-5 h-5" />
            </button>

            {status.success ? (
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-10 h-10 text-rose-500" />
              </div>
            )}

            <h3 id="submit-status-title" className="text-xl font-bold text-slate-900 mb-2">
              {status.success ? "Registration Successful!" : "Notice"}
            </h3>

            <p className="text-slate-600 mb-6 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {status.message}
            </p>

            <button
              onClick={onClose}
              className={`font-bold px-8 py-3 rounded-xl transition-all text-white w-full ${status.success
                ? 'bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'
                : 'bg-rose-500 hover:bg-rose-600 shadow-lg shadow-rose-500/20'
                }`}
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
