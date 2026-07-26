"use client";

/**
 * Stage Two — The Garden Walk.
 *
 * A walk down through Dan's flower paintings. The whole set is hung as
 * framed images that fade in as you scroll; the background slowly rotates
 * between three of the paintings behind them. Handwritten fragments break
 * the garden at intervals, and the path ends at the studio door. Any framed
 * painting opens in its own lightbox.
 */

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FLOWERS } from "@/lib/content/flowers";
import RotatingBackground from "@/components/garden/rotating-background";

// Handwritten fragments, shown as breaks between bands of framed flowers.
const FRAGMENTS = [
  "Keep walking…",
  "The garden remembers what the house forgets…",
  "Come up the path — the door is open…",
];

// Split the flowers into four bands, with a fragment between each.
function bands<T>(items: T[], count: number): T[][] {
  const size = Math.ceil(items.length / count);
  return Array.from({ length: count }, (_, i) => items.slice(i * size, (i + 1) * size));
}

export default function GardenWalk() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + FLOWERS.length) % FLOWERS.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const groups = bands(FLOWERS, FRAGMENTS.length + 1);

  return (
    <div className="ground-aged relative min-h-screen">
      <RotatingBackground />

      {/* Nav controls */}
      <div className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 md:px-8">
        <Link
          href="/"
          className="text-[0.7rem] uppercase tracking-label text-cream/70 drop-shadow transition-colors hover:text-cream"
        >
          ← Back to Gate
        </Link>
        <Link
          href="/studio"
          className="text-[0.7rem] uppercase tracking-label text-cream/70 drop-shadow transition-colors hover:text-cream"
        >
          Skip to Studio →
        </Link>
      </div>

      {/* The walk */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-32 pt-28 md:px-8">
        <header className="mb-16 text-center">
          <p className="kicker text-bloomgold/80">Stage Two</p>
          <h1 className="mt-3 font-display text-5xl text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] md:text-7xl">
            The Garden Walk
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-cream/70 drop-shadow">
            Walk down through the flower paintings. Take your time — click any to
            see it whole.
          </p>
        </header>

        {groups.map((group, gi) => (
          <div key={gi}>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {group.map((f) => (
                <li key={f.id}>
                  <FramedFlower
                    src={f.src}
                    alt={f.alt}
                    onOpen={() => setOpen(f.id)}
                  />
                </li>
              ))}
            </ul>

            {gi < FRAGMENTS.length && <Interlude text={FRAGMENTS[gi]} />}
          </div>
        ))}

        {/* The door */}
        <div className="mt-24 text-center">
          <Link
            href="/studio"
            className="group inline-flex flex-col items-center gap-3"
          >
            <span className="font-display text-3xl text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] transition-colors group-hover:text-bloomgold md:text-4xl">
              Enter the Studio
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 text-cream transition-colors group-hover:border-bloomgold group-hover:text-bloomgold">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-aged/95 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Painting viewer"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 text-sm uppercase tracking-label text-cream/70 hover:text-cream"
            >
              Close ✕
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center text-3xl text-cream/70 hover:text-cream md:left-8"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center text-3xl text-cream/70 hover:text-cream md:right-8"
            >
              ›
            </button>
            <motion.figure
              key={open}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[80vh] w-[90vw] max-w-5xl">
                <Image
                  src={FLOWERS[open].src}
                  alt={FLOWERS[open].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** A framed flower painting that fades up as it scrolls into view (CSS-driven). */
function FramedFlower({
  src,
  alt,
  onOpen,
}: {
  src: string;
  alt: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${alt}`}
      className="reveal-scroll canvas-tex group relative block aspect-[4/5] w-full overflow-hidden border-[6px] border-tobacco/80 shadow-frame focus-visible:outline-none"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
    </button>
  );
}

/** A handwritten fragment, breaking the garden between bands of flowers. */
function Interlude({ text }: { text: string }) {
  return (
    <div className="reveal-scroll flex min-h-[40vh] items-center justify-center px-6 py-16 text-center">
      <p className="font-hand text-4xl text-cream drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] md:text-6xl">
        {text}
      </p>
    </div>
  );
}

