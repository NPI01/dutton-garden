"use client";

/**
 * A small framed gallery in the footer that slowly rotates through Dan's
 * work — one image crossfading into the next. Honors reduced motion by
 * holding on a single image.
 */

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FOOTER_IMAGES } from "@/lib/content/footer-images";

export default function FooterGallery() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % FOOTER_IMAGES.length), 4000);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div
      className="canvas-tex relative aspect-[4/3] w-full overflow-hidden border-[6px] border-tobacco/80 shadow-frame"
      aria-label="A rotating gallery of Dan Dutton's work"
      role="img"
    >
      {FOOTER_IMAGES.map((src, idx) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: reduce ? (idx === 0 ? 1 : 0) : idx === i ? 1 : 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
