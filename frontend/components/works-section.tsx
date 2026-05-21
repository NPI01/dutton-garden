"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const works = [
  {
    title: "The Secret Commonwealth",
    category: "Dance Opera Cycle",
    description: "A four-part cycle blending myth, music, and movement — broadcast on Kentucky Educational Television.",
    image: "/flower-images/flowers 27.jpg",
    tags: ["Opera", "Dance", "Film"],
  },
  {
    title: "Ballads of the Barefoot Mind",
    category: "Paintings & Book",
    description: "12 scenes from traditional ballads commissioned by 21c Museum Hotels, exhibited at 21c Louisville.",
    image: "/flower-images/flowers 32.jpg",
    tags: ["Painting", "Ballads", "Book"],
  },
  {
    title: "The Stone Man",
    category: "Opera",
    description: "Dutton's first opera, premiered by Kentucky Opera at the Kentucky Center for the Arts.",
    image: "/flower-images/flowers 21.jpg",
    tags: ["Opera", "Premiere"],
  },
  {
    title: "Rivera-Dutton Sculptures",
    category: "Sculpture Studio",
    description: "Collaborative sculptural work with artist Jesse Rivera, held in private and museum collections.",
    image: "/flower-images/flowers 19.jpg",
    tags: ["Sculpture", "Collaboration"],
  },
  {
    title: "Congressional Rotunda Show",
    category: "Installation Art",
    description: "A one-man exhibition in the rotunda of the US Congressional Office Building in Washington, D.C.",
    image: "/flower-images/flowers 16.jpg",
    tags: ["Installation", "Exhibition"],
  },
  {
    title: "Flower Paintings",
    category: "Botanical Art",
    description: "Vibrant, folk-inspired botanical paintings that capture the wild beauty of Kentucky's natural landscape.",
    image: "/flower-images/flowers 31.jpg",
    tags: ["Painting", "Nature"],
  },
];

function WorkCard({ work, index }: { work: (typeof works)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative bg-dandyland-white shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dandyland-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-dandyland-yellow/90 text-dandyland-black font-sans text-xs tracking-wider uppercase px-3 py-1">
            {work.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl text-dandyland-darkgreen mb-2 group-hover:text-dandyland-green transition-colors">
          {work.title}
        </h3>
        <p className="font-sans text-sm text-dandyland-green/70 leading-relaxed mb-4">
          {work.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-sans text-dandyland-sage bg-dandyland-cream px-2 py-1 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="works" className="relative py-24 md:py-32 bg-dandyland-white cross-stitch-pattern overflow-hidden">
      {/* Decorative corner */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -left-16 w-48 h-48 opacity-[0.06]"
      >
        <img src="/flower-images/flowers 34.jpg" alt="" className="w-full h-full object-cover" />
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
          <p className="font-hand text-dandyland-gold text-xl mb-2">a body of work</p>
          <h2 className="font-display text-5xl md:text-6xl text-dandyland-darkgreen">
            Selected Works
          </h2>
          <div className="folk-divider" />
        </motion.div>

        {/* Works grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <WorkCard key={i} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
