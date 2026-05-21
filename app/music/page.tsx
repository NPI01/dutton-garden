'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SoundFlower {
  id: number;
  x: number;
  y: number;
  color: string;
  note: string;
  delay: number;
}

export default function MusicPage() {
  const [activeFlowers, setActiveFlowers] = useState<Set<number>>(new Set());
  const [isPlaying, setIsPlaying] = useState(false);

  // Generate sound flowers in a garden layout
  const flowers: SoundFlower[] = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: (i % 6) * 16 + 8,
    y: Math.floor(i / 6) * 20 + 10,
    color: ['garden-violet', 'garden-coral', 'garden-moss', 'garden-earth'][i % 4],
    note: ['C4', 'D4', 'E4', 'G4', 'A4', 'C5'][i % 6],
    delay: i * 0.1,
  }));

  const handleFlowerClick = (flowerId: number) => {
    setActiveFlowers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(flowerId)) {
        newSet.delete(flowerId);
      } else {
        newSet.add(flowerId);
      }
      return newSet;
    });
  };

  const togglePlayAll = () => {
    if (isPlaying) {
      setActiveFlowers(new Set());
    } else {
      setActiveFlowers(new Set(flowers.map(f => f.id)));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 paint-texture bg-gradient-to-br from-garden-cream via-garden-violet/5 to-garden-coral/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-serif text-garden-moss mb-4">
            The Rain
          </h1>
          <p className="text-xl text-garden-earth font-serif italic mb-8">
            An interactive sound garden of Dan Dutton's compositions
          </p>
          <p className="text-lg text-garden-earth/80 max-w-2xl mx-auto mb-8">
            Click or hover over flowers to trigger musical loops. 
            Each flower plays a different layer of ambient composition.
          </p>
          
          <button
            onClick={togglePlayAll}
            className="px-8 py-4 rounded-full bg-garden-moss text-garden-cream font-serif text-lg hover:bg-garden-moss/80 transition-all hover:scale-105 active:scale-95"
          >
            {isPlaying ? 'Clear Garden' : 'Play All'}
          </button>
        </div>

        {/* Interactive Sound Garden */}
        <div className="relative w-full min-h-[600px] mb-16">
          {flowers.map((flower) => {
            const isActive = activeFlowers.has(flower.id);
            return (
              <motion.div
                key={flower.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: flower.delay,
                  type: "spring",
                  stiffness: 200,
                  damping: 15 
                }}
                style={{
                  position: 'absolute',
                  left: `${flower.x}%`,
                  top: `${flower.y}%`,
                }}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleFlowerClick(flower.id)}
                  animate={{
                    scale: isActive ? [1, 1.1, 1] : 1,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{
                    scale: isActive ? {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    } : {},
                  }}
                  className={`w-16 h-16 rounded-full bg-${flower.color} shadow-lg flex items-center justify-center relative`}
                >
                  {/* Petal effect */}
                  <motion.div
                    animate={{
                      scale: isActive ? [1, 1.5, 1] : 1,
                      opacity: isActive ? [0.5, 0, 0.5] : 0,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut",
                    }}
                    className={`absolute inset-0 rounded-full bg-${flower.color} blur-md`}
                  />
                  
                  <span className="relative z-10 text-garden-cream font-serif text-sm">
                    {flower.note}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Music Information */}
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-garden-cream/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-serif text-garden-moss mb-4">
              About the Music
            </h3>
            <p className="text-lg text-garden-earth leading-relaxed">
              Dan Dutton's musical compositions echo the same cyclical themes present in his 
              paintings—growth, decay, rebirth. Working with found sounds, field recordings, 
              and traditional instruments, he creates ambient soundscapes that feel both ancient 
              and timeless.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-garden-moss/10 rounded-2xl p-8"
          >
            <h4 className="text-2xl font-serif text-garden-earth mb-4">
              Featured Compositions
            </h4>
            <ul className="space-y-3 text-garden-earth">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-garden-violet"></span>
                <span>Spring Bloom (Ambient)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-garden-coral"></span>
                <span>Summer Rain (Field Recording)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-garden-moss"></span>
                <span>Autumn Decomposition (Experimental)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-garden-earth"></span>
                <span>Winter Rest (Minimalist)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

