'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import SEOModal from '@/components/SEOModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Hero setShowModal={setShowModal} />
      <Features />
      <Services />
      <SEOModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}