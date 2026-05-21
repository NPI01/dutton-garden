"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DandylandSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dandyland" className="relative py-24 md:py-32 bg-dandyland-darkgreen overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src="/flower-images/flowers 12.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-hand text-dandyland-yellow text-xl mb-2">home base</p>
          <h2 className="font-display text-5xl md:text-6xl text-dandyland-cream">
            Dandyland
          </h2>
          <div className="folk-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-sans text-dandyland-cream/90 text-lg leading-relaxed">
              Dandyland is Dan Dutton&apos;s studio and farm in Somerset, Kentucky — 
              the creative heart where paintings take shape, operas are composed, and 
              sculptures emerge from the earth.
            </p>

            <p className="font-sans text-dandyland-sage/80 leading-relaxed">
              This working farm and artistic sanctuary serves as both inspiration and 
              stage for Dutton&apos;s multidisciplinary practice. Here, the boundaries 
              between nature and art dissolve — wildflowers become subjects, the land 
              becomes a canvas, and the rhythms of rural life inform his music and operatic compositions.
            </p>

            <p className="font-sans text-dandyland-sage/80 leading-relaxed">
              From Dandyland, Dutton continues to explore and celebrate the intersection 
              of visual arts, music, and storytelling — remaining an integral part of 
              Kentucky&apos;s vibrant cultural landscape.
            </p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-l-4 border-dandyland-yellow pl-6 py-2 mt-8"
            >
              <p className="font-hand text-2xl text-dandyland-yellow/90 leading-relaxed">
                &quot;His contributions integrate diverse disciplines, and he remains 
                active in the Kentucky arts community.&quot;
              </p>
              <footer className="font-sans text-sm text-dandyland-sage mt-2 tracking-wider">
                — Kentucky Arts Community
              </footer>
            </motion.blockquote>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-sm"
                >
                  <Image
                    src="/flower-images/flowers 8.jpg"
                    alt="Dandyland flower garden"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square overflow-hidden rounded-sm"
                >
                  <Image
                    src="/flower-images/flowers 15.jpg"
                    alt="Botanical detail from Dandyland"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-square overflow-hidden rounded-sm"
                >
                  <Image
                    src="/flower-images/flowers 20.jpg"
                    alt="Summer blooms at Dandyland"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative aspect-[3/4] overflow-hidden rounded-sm"
                >
                  <Image
                    src="/flower-images/flowers 41.jpg"
                    alt="Garden landscape at Dandyland"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Decorative flower overlay */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-20 h-20 opacity-30"
            >
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="15" r="8" fill="#E8C840" />
                <circle cx="15" cy="35" r="8" fill="#B5CC5C" />
                <circle cx="65" cy="35" r="8" fill="#E8C840" />
                <circle cx="15" cy="60" r="8" fill="#B5CC5C" />
                <circle cx="65" cy="60" r="8" fill="#E8C840" />
                <circle cx="40" cy="42" r="6" fill="#D4A843" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
