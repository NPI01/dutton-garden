"use client";

/**
 * A fluid, editorial gallery for the flower paintings — an uneven, woven
 * grid rather than a uniform catalog, with a full-screen lightbox that
 * supports keyboard navigation (arrows, Escape) and focus management.
 */

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { FLOWERS } from "@/lib/content/flowers";

// A repeating rhythm of tile spans so the grid breathes like a flower bed.
const SPANS = [
  "row-span-2", "", "row-span-2", "", "", "row-span-2", "", "row-span-2", "",
];

export default function PaintingGallery() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + dir + FLOWERS.length) % FLOWERS.length
      ),
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

  return (
    <>
      <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
        {FLOWERS.map((f, i) => (
          <li key={f.id} className={clsx(SPANS[i % SPANS.length])}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="canvas-tex group relative h-full w-full overflow-hidden border-4 border-tobacco/60 shadow-frame focus-visible:outline-none"
              aria-label={`View ${f.alt}`}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-soil/0 transition-colors duration-500 group-hover:bg-soil/10" />
            </button>
          </li>
        ))}
      </ul>

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
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-cream/70 hover:text-cream md:left-8"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-cream/70 hover:text-cream md:right-8"
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
              <div className="relative h-[76vh] w-[88vw] max-w-5xl">
                <Image
                  src={FLOWERS[open].src}
                  alt={FLOWERS[open].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-4 text-center font-hand text-xl text-cream/70">
                {FLOWERS[open].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
