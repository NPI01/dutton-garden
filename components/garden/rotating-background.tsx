"use client";

/**
 * A fixed background that slowly rotates through a few of Dan's flower
 * paintings, behind a dark wash that keeps foreground content legible.
 * Shared by the Garden Walk and the Paintings › Garden page.
 */

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { flowerSrc } from "@/lib/content/flowers";

export const GARDEN_BG = [
  flowerSrc("flowers 28.jpg"),
  flowerSrc("flowers 46.jpg"),
  flowerSrc("flowers 65.jpg"),
];

export default function RotatingBackground({
  images = GARDEN_BG,
}: {
  /** Full public paths to rotate through. Defaults to the garden set. */
  images?: string[];
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % images.length), 7000);
    return () => clearInterval(t);
  }, [reduce, images.length]);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {images.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: reduce ? (idx === 0 ? 1 : 0) : idx === i ? 1 : 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <Image src={src} alt="" fill sizes="100vw" className="object-cover" priority={idx === 0} />
        </motion.div>
      ))}
      {/* Wash so foreground content and text stay legible, but the
          rotating flowers still show clearly through. */}
      <div className="absolute inset-0 bg-aged/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-aged/25 via-aged/30 to-aged/55" />
    </div>
  );
}
