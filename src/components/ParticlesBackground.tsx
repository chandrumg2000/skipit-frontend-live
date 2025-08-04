'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { type Engine } from '@tsparticles/engine';
import { loadBasic } from '@tsparticles/basic';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 50 },
          color: { value: '#38bdf8' },
          shape: { type: 'circle' },
          opacity: { value: 0.4 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}