'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SEOModal({ isOpen, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    url: ''
  });

  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPdfUrl('');

    try {
      const res = await fetch('http://127.0.0.1:8000/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setPdfUrl(data.download_url);
      } else {
        alert('Failed to generate report');
      }
    } catch (error) {
      console.error(error);
      alert('Error generating report');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#111827] text-white p-8 rounded-xl w-full max-w-lg shadow-xl border border-cyan-500 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-red-400 text-xl">
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Generate Free SEO Audit Report</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'business_name', 'email', 'phone', 'url'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  placeholder={field.replace('_', ' ').toUpperCase()}
                  className="w-full px-4 py-2 rounded bg-[#1f2937] border border-gray-700 text-white placeholder-gray-400"
                  required
                />
              ))}
              <button
                type="submit"
                className="w-full py-2 rounded bg-cyan-500 hover:bg-cyan-600 font-semibold"
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Report'}
              </button>
            </form>
            {pdfUrl && (
              <div className="mt-4 text-center">
                <a
                  href={pdfUrl}
                  download
                  className="text-green-400 underline hover:text-green-500"
                >
                  Download SEO Audit PDF
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}