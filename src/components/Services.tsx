'use client';

import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import serviceData from '@/data/serviceData';

export default function Services() {
  return (
    <section className="py-24 px-6 bg-[#0c111c] text-white relative z-10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Our Services
        </h2>
        <p className="text-lg text-gray-400">
          We deliver tailored strategies powered by AI and performance-first marketing.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 shadow-xl rounded-xl backdrop-blur-md p-6 hover:shadow-neon transition-all duration-300"
          >
            <div className="h-16 w-16 mx-auto mb-5">
              <Lottie loop animationData={service.icon} play />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}