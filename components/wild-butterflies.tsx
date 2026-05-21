'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Butterfly {
  id: number;
  startX: number;
  startY: number;
  color: string;
  duration: number;
  delay: number;
  size: number;
}

export default function WildButterflies() {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const colors = ['#B645D6', '#FF6B9D', '#C6FF00', '#00E5FF', '#FF6B00', '#00D9A3', '#FF00E5'];
    const newButterflies: Butterfly[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      color: colors[i % colors.length],
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      size: 20 + Math.random() * 30,
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          initial={{ 
            x: `${butterfly.startX}vw`, 
            y: `${butterfly.startY}vh`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              `${butterfly.startX}vw`,
              `${(butterfly.startX + 30) % 100}vw`,
              `${(butterfly.startX + 60) % 100}vw`,
              `${(butterfly.startX + 90) % 100}vw`,
              `${butterfly.startX}vw`,
            ],
            y: [
              `${butterfly.startY}vh`,
              `${(butterfly.startY + 20) % 100}vh`,
              `${(butterfly.startY - 10 + 100) % 100}vh`,
              `${(butterfly.startY + 30) % 100}vh`,
              `${butterfly.startY}vh`,
            ],
            opacity: [0, 1, 1, 1, 0],
            scale: [0, 1, 1.2, 1, 0],
            rotate: [0, 180, 360, 540, 720],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: butterfly.size,
            height: butterfly.size,
          }}
          className="absolute"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 8px currentColor)' }}>
            <g fill={butterfly.color}>
              {/* Left wing */}
              <ellipse cx="35" cy="50" rx="25" ry="35" transform="rotate(-20 35 50)">
                <animate
                  attributeName="ry"
                  values="35;45;35"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </ellipse>
              {/* Right wing */}
              <ellipse cx="65" cy="50" rx="25" ry="35" transform="rotate(20 65 50)">
                <animate
                  attributeName="ry"
                  values="35;45;35"
                  dur="0.5s"
                  repeatCount="indefinite"
                />
              </ellipse>
              {/* Body */}
              <ellipse cx="50" cy="50" rx="8" ry="30" fill={butterfly.color} opacity="0.9" />
            </g>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

