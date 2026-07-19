"use client";

/**
 * Stage One — The Gate.
 *
 * A full-viewport looping film of Dandyland. The moving image shows first;
 * after a beat the title arrives, then the invitation to walk through the
 * garden. Two quiet controls sit at the edges: sound, and a shortcut into
 * the studio for returning visitors. No global chrome here (see SiteChrome).
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSound } from "@/contexts/sound-context";

export default function GatePage() {
  const reduceMotion = useReducedMotion();
  const { soundOn, toggleSound } = useSound();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [revealed, setRevealed] = useState(false);
  const [journeyed, setJourneyed] = useState(false);

  // Reveal the title/invitation after the film has established itself.
  useEffect(() => {
    if (reduceMotion) {
      setRevealed(true);
      return;
    }
    const t = setTimeout(() => setRevealed(true), 2400);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  // Note returning visitors who have completed the walk before.
  useEffect(() => {
    try {
      setJourneyed(localStorage.getItem("dandyland-journeyed") === "true");
    } catch {
      /* storage unavailable — treat as first visit */
    }
  }, []);

  // Keep the video element's muted state in sync with the global preference.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !soundOn;
    if (soundOn) v.play().catch(() => {});
  }, [soundOn]);

  return (
    <section
      aria-label="Dandyland — enter"
      className="relative h-[100svh] w-full overflow-hidden bg-aged"
    >
      {/* The film */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/videos/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/dandyland-intro.mp4" type="video/mp4" />
      </video>

      {/* Tonal treatment for legibility */}
      <div className="scrim-full pointer-events-none absolute inset-0" />
      <div className="scrim-b pointer-events-none absolute inset-x-0 bottom-0 h-2/3" />

      {/* Top edge: sound + returning-visitor shortcut */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 md:px-8">
        <button
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-label text-cream/70 transition-colors hover:text-cream"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: soundOn ? "#e0a72e" : "transparent", boxShadow: soundOn ? "0 0 0 1px #e0a72e" : "0 0 0 1px rgba(244,234,212,0.5)" }}
          />
          {soundOn ? "Sound on" : "Sound off"}
        </button>

        <Link
          href="/studio"
          className={
            "text-[0.7rem] uppercase tracking-label transition-all duration-700 " +
            (journeyed
              ? "text-cream/80 hover:text-bloomgold"
              : "text-cream/45 hover:text-cream/80")
          }
        >
          Enter the Studio →
        </Link>
      </div>

      {/* Center: title + invitation */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={
            revealed
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 24, filter: "blur(8px)" }
          }
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(3.75rem,17vw,15rem)] leading-none text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.55)]"
        >
          Dandyland
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: reduceMotion ? 0 : 0.9 }}
          className="mt-6"
        >
          <Link
            href="/garden"
            className="group inline-flex flex-col items-center gap-3"
            aria-label="Take a walk through the garden"
          >
            <span className="font-display text-[clamp(1.15rem,3.4vw,2rem)] text-cream/90 transition-colors group-hover:text-bloomgold">
              Take A Walk Through The Garden
            </span>
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-cream/40 text-cream/80 transition-colors group-hover:border-bloomgold group-hover:text-bloomgold">
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </motion.svg>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Corner mark */}
      <div className="pointer-events-none absolute bottom-5 left-5 z-20 md:left-8">
        <span className="kicker text-cream/45">Dan Dutton · Kentucky</span>
      </div>
    </section>
  );
}
