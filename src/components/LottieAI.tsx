'use client';

import Lottie from 'react-lottie-player';
import aiAnimation from '@/assets/ai-wave.json'; // <- You need to place this JSON animation file under src/assets

export default function LottieAI() {
  return (
    <Lottie
      loop
      animationData={aiAnimation}
      play
      style={{ width: '100%', height: '100%' }}
    />
  );
}