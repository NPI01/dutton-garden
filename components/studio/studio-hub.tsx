"use client";

/**
 * Stage Three — The Studio.
 *
 * The main navigation hub, staged as Dan's workspace rather than a grid of
 * cards. Objects in the room (easel, songbook, curtain, workbench, garden
 * door, chair, cabinet, notebook) are the entrances to each section. Every
 * object responds to hover/focus with a light shift and a handwritten
 * label — but all destinations are also listed in an accessible menu below,
 * so nothing depends on finding an object in the scene.
 */

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { DOORWAYS } from "@/lib/content/studio";
import { FLOWERS } from "@/lib/content/flowers";

export default function StudioHub() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="ground-aged grain relative min-h-[100svh] pt-16">
      {/* The staged studio scene */}
      <section
        aria-label="Dan's studio"
        className="relative mx-auto h-[74svh] min-h-[560px] w-full max-w-6xl overflow-hidden"
      >
        {/* Warm lamp light */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 70% at 40% 38%, rgba(224,167,46,0.20) 0%, rgba(201,130,95,0.08) 34%, rgba(23,19,16,0) 68%)",
          }}
        />
        {/* Plank floor suggestion */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 opacity-40"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(90,70,50,0.5) 0 2px, transparent 2px 46px), linear-gradient(to top, rgba(58,44,30,0.7), transparent)",
          }}
        />

        {/* A framed painting on the wall */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[20%] top-[26%] hidden aspect-[3/4] w-[16%] -translate-x-1/2 rotate-[-2deg] border-[6px] border-tobacco/80 bg-loam shadow-lift sm:block"
        >
          <Image src={FLOWERS[24].src} alt="" fill sizes="16vw" className="object-cover" />
        </motion.div>

        {/* The garden door / window showing the real place */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute right-[8%] top-[20%] hidden h-[40%] w-[20%] overflow-hidden rounded-t-[40%] border-4 border-clay/60 shadow-frame md:block"
        >
          <Image src="/videos/poster.jpg" alt="" fill sizes="20vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-aged/50 to-transparent" />
        </motion.div>

        {/* Doorway hotspots */}
        {DOORWAYS.map((d, i) => (
          <Doorway
            key={d.id}
            doorway={d}
            index={i}
            active={active === d.id}
            reduceMotion={!!reduceMotion}
            onEnter={() => setActive(d.id)}
            onLeave={() => setActive((cur) => (cur === d.id ? null : cur))}
          />
        ))}

        {/* Title */}
        <div className="pointer-events-none absolute left-1/2 top-[6%] z-30 -translate-x-1/2 text-center">
          <p className="kicker text-bloomgold/80">Stage Three</p>
          <h1 className="mt-2 font-display text-5xl text-cream md:text-7xl">The Studio</h1>
        </div>
      </section>

      {/* Accessible wayfinding — the real navigation. */}
      <section className="mx-auto max-w-5xl px-5 pb-24 pt-10 md:px-8" aria-label="Find your way">
        <p className="kicker mb-6 text-cream/45">Find your way</p>
        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {DOORWAYS.map((d) => (
            <li key={d.id}>
              <Link
                href={d.href}
                className="group block"
                onMouseEnter={() => setActive(d.id)}
                onFocus={() => setActive(d.id)}
                onMouseLeave={() => setActive((cur) => (cur === d.id ? null : cur))}
                onBlur={() => setActive((cur) => (cur === d.id ? null : cur))}
              >
                <span className="font-display text-2xl text-cream transition-colors group-hover:text-bloomgold group-focus-visible:text-bloomgold">
                  {d.label}
                </span>
                <span className="mt-1 block font-hand text-lg text-cream/55">{d.note}</span>
                <span className="mt-1 block text-[0.7rem] uppercase tracking-label text-cream/30">
                  {d.object}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Doorway({
  doorway,
  index,
  active,
  reduceMotion,
  onEnter,
  onLeave,
}: {
  doorway: (typeof DOORWAYS)[number];
  index: number;
  active: boolean;
  reduceMotion: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.3 + index * 0.08 }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${doorway.x}%`, top: `${doorway.y}%` }}
    >
      <Link
        href={doorway.href}
        aria-label={`${doorway.label} — ${doorway.object}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
        className="group relative flex flex-col items-center"
      >
        {/* Marker */}
        <span
          className={clsx(
            "relative flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-500",
            active
              ? "border-bloomgold bg-bloomgold/30 scale-125"
              : "border-cream/50 bg-cream/5"
          )}
        >
          <span
            className={clsx(
              "h-1.5 w-1.5 rounded-full transition-colors duration-500",
              active ? "bg-bloomgold" : "bg-cream/60"
            )}
          />
          {!reduceMotion && (
            <span
              className={clsx(
                "absolute inset-0 rounded-full",
                active ? "animate-ping bg-bloomgold/30" : "opacity-0"
              )}
            />
          )}
        </span>

        {/* Handwritten label on hover/focus */}
        <span
          className={clsx(
            "pointer-events-none absolute top-6 whitespace-nowrap text-center transition-all duration-500",
            active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          )}
        >
          <span className="block font-display text-xl text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {doorway.label}
          </span>
          <span className="block font-hand text-base text-bloomgold">{doorway.object}</span>
        </span>
      </Link>
    </motion.div>
  );
}
