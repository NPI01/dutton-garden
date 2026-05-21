"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 bg-dandyland-white cross-stitch-pattern overflow-hidden">
      {/* Decorative flower in background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.06, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px]"
      >
        <Image
          src="/flower-images/flowers 25.jpg"
          alt=""
          fill
          className="object-cover rounded-full"
          priority={false}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-hand text-dandyland-gold text-xl mb-2">get to know</p>
          <h2 className="font-display text-5xl md:text-6xl text-dandyland-darkgreen">
            The Artist
          </h2>
          <div className="folk-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/flower-images/flowers 11.jpg"
                alt="Dan Dutton's flower painting — vibrant botanical art"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative frame */}
              <div className="absolute inset-3 border-2 border-dandyland-yellow/40 pointer-events-none" />
            </div>

            {/* Floating accent box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 md:-right-8 bg-dandyland-darkgreen text-dandyland-cream p-4 shadow-xl"
            >
              <p className="font-hand text-dandyland-yellow text-lg">Since 1959</p>
              <p className="font-sans text-xs text-dandyland-sage tracking-wider">Somerset, Kentucky</p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-sans text-dandyland-darkgreen text-lg leading-relaxed">
              Dan Dutton is an American multidisciplinary artist whose work boldly 
              weaves together painting, sculpture, music, and narrative forms — most 
              notably through his groundbreaking dance operas.
            </p>

            <p className="font-sans text-dandyland-green/80 leading-relaxed">
              A longtime resident of Somerset, Kentucky, Dutton has built an expansive 
              creative practice from the grounds of his studio and farm, Dandyland. He 
              conceived, wrote, composed, and choreographed <em>The Secret Commonwealth</em>, 
              a major dance opera cycle broadcast by Kentucky Educational Television.
            </p>

            <p className="font-sans text-dandyland-green/80 leading-relaxed">
              His visual artwork is held in distinguished collections including the 
              Brown-Forman Corporation, Berea College Art Museum, and 21c Museum. His 
              contributions as a painter and broader artist have been featured multiple 
              times on Kentucky Life, underscoring his prominence within the state&apos;s 
              cultural landscape.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dandyland-wheat">
              {[
                { number: "40+", label: "Years Creating" },
                { number: "12", label: "Ballad Paintings" },
                { number: "4", label: "Dance Operas" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                >
                  <p className="font-display text-3xl text-dandyland-green">{stat.number}</p>
                  <p className="font-sans text-xs text-dandyland-sage tracking-wider uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
