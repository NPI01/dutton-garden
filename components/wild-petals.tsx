'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WildPetal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  rotation: number;
}

export default function WildPetals() {
  const [petals, setPetals] = useState<WildPetal[]>([]);

  useEffect(() => {
    const colors = ['#FF6B9D', '#B645D6', '#C6FF00', '#00E5FF', '#FFB627', '#00D9A3', '#FF00E5', '#FF6B00'];
    const newPetals: WildPetal[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      size: 25 + Math.random() * 40,
      color: colors[i % colors.length],
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            y: -100, 
            x: `${petal.x}vw`,
            rotate: petal.rotation,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: '110vh',
            x: `${petal.x + (Math.random() * 30 - 15)}vw`,
            rotate: petal.rotation + 720 + Math.random() * 360,
            opacity: [0, 1, 1, 1, 0],
            scale: [0, 1.2, 1, 1.1, 0],
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
              rx="18"
              ry="28"
              fill={petal.color}
              opacity="0.8"
              style={{ filter: `drop-shadow(0 0 8px ${petal.color})` }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

