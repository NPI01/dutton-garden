'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 20 + Math.random() * 30,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            y: -100, 
            x: `${petal.x}vw`,
            rotate: 0,
            opacity: 0 
          }}
          animate={{
            y: '110vh',
            x: `${petal.x + (Math.random() * 20 - 10)}vw`,
            rotate: 360,
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: petal.size,
            height: petal.size,
          }}
          className="absolute"
        >
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <ellipse
              cx="25"
              cy="25"
              rx="15"
              ry="25"
              fill="currentColor"
              className="text-garden-coral/30"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

