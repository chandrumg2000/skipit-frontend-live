'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SkipItLogo from '@/assets/skipit-logo.png';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  // ESC key closes modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden text-white px-6">
      {/* Floating blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#38bdf8] opacity-20 rounded-full blur-3xl animate-ping" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Main content */}
      <div className="z-10 text-center max-w-3xl">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Digital Marketing for Bold Brands
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Supercharge your growth with AI-driven Ads, SEO, and Social Strategies tailored for tomorrow.
        </motion.p>
        <motion.button
          onClick={() => setShowModal(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Generate Free SEO Audit
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0f172a] text-white w-full max-w-md p-6 rounded-2xl border border-white/10 shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Logo & Close */}
              <div className="flex justify-between items-center mb-4">
                <Image src={SkipItLogo} alt="SkipIt Logo" width={100} />
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ×
                </button>
              </div>

              <h3 className="text-2xl font-bold mb-2">Free SEO Audit Report</h3>
              <p className="text-gray-400 text-sm mb-4">
                Includes: Basic SEO Audit + SWOT Analysis + Target Audience Insights
              </p>

              {/* FORM */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Audit generated! 🚀 PDF download coming soon...');
                  setShowModal(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="Business Name"
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
                <input
                  type="url"
                  name="url"
                  required
                  placeholder="Website URL (https://...)"
                  className="w-full p-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all"
                >
                  Generate & Download PDF
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}