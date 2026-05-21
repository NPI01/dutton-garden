"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineEvents = [
  {
    year: "1959",
    title: "Born in Somerset",
    description: "Daniel Dutton is born near Somerset, Kentucky, descendant of the Dutton family associated with the Civil War Battle of Dutton&apos;s Hill.",
    side: "left",
  },
  {
    year: "1980s",
    title: "Early Exhibitions",
    description: "Exhibits visual and video installation art, including commissioned works at J. B. Speed Art Museum in Louisville. Solo show in the US Congressional Office Building rotunda in 1985.",
    side: "right",
  },
  {
    year: "1990",
    title: "The Stone Man Premieres",
    description: "First opera premieres with Kentucky Opera at the Kentucky Center for the Arts, marking the beginning of his operatic work.",
    side: "left",
  },
  {
    year: "1995–2000",
    title: "The Secret Commonwealth",
    description: "Creates and stages a four-part cycle of dance operas: The Changeling and the Bear, The Road, Love and Time, and The Approach of the Mystery. First three parts filmed by Kentucky Educational Television.",
    side: "right",
  },
  {
    year: "2003",
    title: "Ballads of the Barefoot Mind",
    description: "Commissioned by 21c Museum Hotels to paint 12 scenes from traditional ballads, resulting in a paintings, book, and recordings project exhibited at 21c Louisville.",
    side: "left",
  },
  {
    year: "2016",
    title: "Rivera-Dutton Sculpture Studio",
    description: "Forms Rivera-Dutton Sculpture Studio with artist Jesse Rivera. Visual artwork collected by Brown-Forman, Berea College Art Museum, and 21c Museum.",
    side: "right",
  },
  {
    year: "2024",
    title: "Continued Recognition",
    description: "Featured on Kentucky Life in a segment highlighting his multifaceted practice. Remains active and celebrated in the Kentucky arts community.",
    side: "left",
  },
];

function TimelineItem({ event, index }: { event: (typeof timelineEvents)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: event.side === "left" ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex items-center gap-8 md:gap-16 ${
        event.side === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Content card */}
      <div className="flex-1">
        <div className={`bg-dandyland-white p-6 shadow-md border-l-4 border-dandyland-lime relative ${
          event.side === "right" ? "text-left" : "text-left"
        }`}>
          <span className="font-display text-4xl text-dandyland-yellow/70">{event.year}</span>
          <h3 className="font-serif text-xl text-dandyland-darkgreen mt-1 mb-2">{event.title}</h3>
          <p className="font-sans text-sm text-dandyland-green/80 leading-relaxed">{event.description}</p>

          {/* Small flower decoration */}
          <div className="absolute -top-2 -right-2 opacity-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="6" r="3" fill="#E8C840" />
              <circle cx="6" cy="12" r="3" fill="#B5CC5C" />
              <circle cx="18" cy="12" r="3" fill="#B5CC5C" />
              <circle cx="12" cy="18" r="3" fill="#E8C840" />
              <circle cx="12" cy="12" r="2" fill="#D4A843" />
            </svg>
          </div>
        </div>
      </div>

      {/* Center dot */}
      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-dandyland-lime ring-4 ring-dandyland-cream" />
      </div>

      {/* Spacer for other side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="journey" className="relative py-24 md:py-32 bg-dandyland-cream cross-stitch-pattern overflow-hidden">
      {/* Background flower */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-[0.04]">
        <img src="/flower-images/flowers 29.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-hand text-dandyland-gold text-xl mb-2">through the years</p>
          <h2 className="font-display text-5xl md:text-6xl text-dandyland-darkgreen">
            Creative Journey
          </h2>
          <div className="folk-divider" />
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dandyland-lime via-dandyland-yellow to-dandyland-sage transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
