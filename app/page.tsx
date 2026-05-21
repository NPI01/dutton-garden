'use client';

import InteractiveFlower from '@/components/interactive-flower';
import BloomHero from '@/components/bloom-hero';
import WildButterflies from '@/components/wild-butterflies';
import WildPetals from '@/components/wild-petals';
import WildSparkles from '@/components/wild-sparkles';
import Link from 'next/link';
import { getRandomFlowers } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/theme-context';

export default function Home() {
  const flowerImages = useMemo(() => getRandomFlowers(20), []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isWild } = useTheme();

  return (
    <div className="relative min-h-screen bloom-cursor paint-texture overflow-hidden">
      {/* WILD GARDEN ANIMATIONS - Only show in wild theme */}
      {isWild && (
        <>
          <WildPetals />
          <WildButterflies />
          <WildSparkles />
        </>
      )}
      
      <BloomHero />
      
      {/* Interactive Garden */}
      <section className="relative min-h-screen pt-32">
        {isWild ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-garden-lime/5 via-garden-cyan/5 to-garden-magenta/5 animate-pulse" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-garden-coral/10 via-transparent to-garden-violet/10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-garden-cream via-garden-moss/5 to-garden-violet/10" />
        )}
        
        <div className="relative w-full h-[200vh] overflow-hidden">
          {flowerImages.map((image, index) => (
            <InteractiveFlower
              key={image}
              imagePath={image}
              index={index}
              totalFlowers={flowerImages.length}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className={`relative py-32 px-6 ${isWild ? 'bg-gradient-to-b from-transparent to-garden-midnight/50' : 'bg-gradient-to-b from-garden-violet/10 to-garden-cream'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-garden-moss mb-8">
            Enter the Garden
          </h2>
          <p className="text-xl md:text-2xl text-garden-earth leading-relaxed mb-12 font-serif">
            Experience the vibrant world of Kentucky folk artist Dan Dutton, 
            where painting, music, and myth converge in a celebration of nature's 
            eternal cycles of growth, bloom, and renewal.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Link 
              href="/gallery"
              className="group relative overflow-hidden rounded-2xl bg-garden-moss/10 p-8 hover:bg-garden-moss/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif text-garden-moss mb-4">The Beds</h3>
              <p className="text-garden-earth">Explore the complete gallery of flower paintings</p>
              <div className="mt-6 text-garden-violet group-hover:translate-x-2 transition-transform duration-300">→</div>
            </Link>
            
            <Link 
              href="/studio"
              className="group relative overflow-hidden rounded-2xl bg-garden-earth/10 p-8 hover:bg-garden-earth/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif text-garden-earth mb-4">The Compost</h3>
              <p className="text-garden-earth">Writings, process, and behind-the-scenes</p>
              <div className="mt-6 text-garden-violet group-hover:translate-x-2 transition-transform duration-300">→</div>
            </Link>
            
            <Link 
              href="/music"
              className="group relative overflow-hidden rounded-2xl bg-garden-coral/10 p-8 hover:bg-garden-coral/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-serif text-garden-coral mb-4">The Rain</h3>
              <p className="text-garden-earth">Listen to Dan's musical compositions</p>
              <div className="mt-6 text-garden-violet group-hover:translate-x-2 transition-transform duration-300">→</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-garden-midnight/95 backdrop-blur-md cursor-pointer p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Flower painting"
                fill
                sizes="90vw"
                className="object-contain rounded-lg"
                priority
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-garden-cream/90 hover:bg-garden-cream text-garden-midnight flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 shadow-lg"
                aria-label="Close"
              >
                ×
              </button>
              
              {/* Decorative frame effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 pointer-events-none rounded-lg border-4 border-garden-moss/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

