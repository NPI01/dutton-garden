'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllFlowerImages, groupIntoClusters } from '@/lib/utils';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredCluster, setHoveredCluster] = useState<number | null>(null);
  
  const clusters = useMemo(() => {
    const allImages = getAllFlowerImages();
    return groupIntoClusters(allImages, 2, 6);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 paint-texture bg-garden-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-6xl md:text-8xl font-serif text-garden-moss mb-4 text-center">
          The Beds
        </h1>
        <p className="text-xl text-center text-garden-earth font-serif italic mb-16">
          A curated collection of flower paintings, arranged like garden beds
        </p>

        {/* Gallery Clusters */}
        <div className="space-y-24">
          {clusters.map((cluster, clusterIndex) => (
            <motion.div
              key={clusterIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: clusterIndex * 0.1 }}
              onMouseEnter={() => setHoveredCluster(clusterIndex)}
              onMouseLeave={() => setHoveredCluster(null)}
              className={`relative grid gap-6 ${
                cluster.length <= 2 ? 'grid-cols-1 md:grid-cols-2' :
                cluster.length <= 4 ? 'grid-cols-2 md:grid-cols-3' :
                'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'
              }`}
            >
              {cluster.map((image, imageIndex) => {
                const isHovered = hoveredCluster === clusterIndex;
                return (
                  <motion.div
                    key={image}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      zIndex: 10,
                      rotate: Math.random() * 4 - 2 
                    }}
                    transition={{
                      duration: 0.3,
                      delay: imageIndex * 0.05,
                    }}
                    onClick={() => setSelectedImage(image)}
                    className="relative aspect-square cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
                  >
                    <Image
                      src={image}
                      alt={`Flower painting ${imageIndex + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500"
                    />
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0.2 : 0,
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-garden-violet via-transparent to-garden-coral"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </motion.div>

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
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
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-garden-cream/90 hover:bg-garden-cream text-garden-midnight flex items-center justify-center text-2xl font-bold transition-all hover:scale-110"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

