'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  duration: number;
}

export default function WildSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const colors = ['#C6FF00', '#00E5FF', '#FF00E5', '#FFB627', '#B645D6', '#FF6B9D'];
    const newSparkles: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ 
            x: `${sparkle.x}vw`, 
            y: `${sparkle.y}vh`,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 1.5, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
          className="absolute w-3 h-3"
          style={{
            filter: `drop-shadow(0 0 8px ${sparkle.color})`,
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
              fill={sparkle.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

