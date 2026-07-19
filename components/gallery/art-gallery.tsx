"use client";

/**
 * A reusable, accessible artwork gallery with a full-screen lightbox
 * (keyboard: arrows to move, Escape to close). Tiles use a woven, uneven
 * rhythm so a wall of work reads like a hung salon, not a catalog grid.
 */

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import type { Art } from "@/lib/content/art";

const SPANS = ["row-span-2", "", "", "row-span-2", "", "row-span-2", "", ""];

export default function ArtGallery({
  items,
  frame = false,
}: {
  items: Art[];
  /** Draw a carved frame around each tile (for framed paintings). */
  frame?: boolean;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length
      ),
    [items.length]
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
      <ul className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[210px] md:grid-cols-4 md:gap-4">
        {items.map((art, i) => (
          <li key={art.src} className={clsx(SPANS[i % SPANS.length])}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className={clsx(
                "canvas-tex group relative h-full w-full overflow-hidden shadow-frame focus-visible:outline-none",
                frame ? "border-[6px] border-tobacco/80" : "border border-tobacco/40"
              )}
              aria-label={`View ${art.title}`}
            >
              <Image
                src={art.src}
                alt={art.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-aged/85 to-transparent p-2 text-left text-xs text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {art.title}
              </span>
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
            aria-label="Artwork viewer"
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
              <div className="relative h-[76vh] w-[88vw] max-w-5xl">
                <Image
                  src={items[open].src}
                  alt={items[open].title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-4 max-w-2xl text-center">
                <span className="font-hand text-xl text-cream/80">
                  {items[open].title}
                  {items[open].year && `, ${items[open].year}`}
                </span>
                {items[open].medium && (
                  <span className="mt-1 block text-sm uppercase tracking-label text-cream/50">
                    {items[open].medium}
                  </span>
                )}
                {items[open].note && (
                  <span className="mt-2 block text-sm leading-relaxed text-cream/60">
                    {items[open].note}
                  </span>
                )}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
