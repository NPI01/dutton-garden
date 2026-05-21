"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-dandyland-black">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        poster="/flower-images/flowers 12.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dandyland-black/50 via-transparent to-dandyland-black/80 z-10" />

      {/* Decorative folk pattern corners */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-8 left-8 w-16 h-16 border-2 border-dandyland-yellow/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 right-8 w-16 h-16 border-2 border-dandyland-yellow/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-8 left-8 w-16 h-16 border-2 border-dandyland-yellow/40 z-20"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-8 right-8 w-16 h-16 border-2 border-dandyland-yellow/40 z-20"
      />

      {/* Title content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-hand text-dandyland-yellow text-xl md:text-2xl tracking-widest mb-4">
            Painter · Composer · Dreamer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-dandyland-white leading-none mb-6"
        >
          Dan Dutton
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="folk-divider mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-sans text-dandyland-cream/90 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          A multidisciplinary artist working at the crossroads of painting,
          sculpture, opera, and dance — from his studio at Dandyland,
          Somerset, Kentucky.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12"
        >
          <svg
            className="w-6 h-10 text-dandyland-yellow/60 mx-auto animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Floating flower decoration */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-8 md:right-20 z-20 opacity-30"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="15" r="8" fill="#E8C840" opacity="0.6" />
          <circle cx="20" cy="30" r="8" fill="#B5CC5C" opacity="0.6" />
          <circle cx="60" cy="30" r="8" fill="#E8C840" opacity="0.6" />
          <circle cx="20" cy="55" r="8" fill="#B5CC5C" opacity="0.6" />
          <circle cx="60" cy="55" r="8" fill="#E8C840" opacity="0.6" />
          <circle cx="40" cy="70" r="8" fill="#B5CC5C" opacity="0.6" />
          <circle cx="40" cy="42" r="6" fill="#D4A843" />
        </svg>
      </motion.div>
    </section>
  );
}
