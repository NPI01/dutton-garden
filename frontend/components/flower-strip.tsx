"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const flowerImages = [
  "/flower-images/flowers 13.jpg",
  "/flower-images/flowers 17.jpg",
  "/flower-images/flowers 22.jpg",
  "/flower-images/flowers 26.jpg",
  "/flower-images/flowers 30.jpg",
  "/flower-images/flowers 35.jpg",
  "/flower-images/flowers 38.jpg",
  "/flower-images/flowers 44.jpg",
];

export default function FlowerStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [isInView]);

  // Duplicate the array for seamless looping
  const doubledImages = [...flowerImages, ...flowerImages];

  return (
    <section className="py-16 bg-dandyland-black overflow-hidden">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="text-center mb-10"
      >
        <p className="font-hand text-dandyland-yellow/80 text-lg mb-2">from the garden</p>
        <h3 className="font-display text-3xl md:text-4xl text-dandyland-cream">Botanical Vision</h3>
      </motion.div>

      {/* Scrolling strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dandyland-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dandyland-black to-transparent z-10" />

        <motion.div
          animate={{ x: `${offset}%` }}
          transition={{ ease: "linear" }}
          className="flex gap-4 will-change-transform"
        >
          {doubledImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt={`Flower painting ${i + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
