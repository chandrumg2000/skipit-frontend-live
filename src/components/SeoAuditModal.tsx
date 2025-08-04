'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SEOModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SEOModal({ isOpen, onClose }: SEOModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-[#0f172a] text-white p-8 rounded-xl shadow-2xl border border-white/10 w-[90%] max-w-xl relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-xl font-bold hover:text-red-400 transition"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Free SEO Audit Report</h2>
            <p className="text-sm text-gray-300 mb-6 text-center">
              Get a personalized SEO report including SWOT analysis and audience insights.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('✅ Report generated! (Feature coming soon)');
                onClose();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white/10 text-white px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="text"
                placeholder="Business Name"
                required
                className="w-full bg-white/10 text-white px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-white/10 text-white px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full bg-white/10 text-white px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="w-full py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md transition"
              >
                Generate & Download Report (PDF)
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}