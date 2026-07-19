"use client";

import { useSound } from "@/contexts/sound-context";
import { clsx } from "clsx";

/**
 * A small, quiet control that reflects and toggles the global sound
 * preference. Audio only ever begins after this (user gesture).
 */
export default function SoundToggle({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const { soundOn, toggleSound } = useSound();

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-pressed={soundOn}
      aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
      className={clsx(
        "group inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-label transition-opacity",
        tone === "light"
          ? "text-cream/70 hover:text-cream"
          : "text-soil/60 hover:text-soil",
        className
      )}
    >
      <SoundGlyph on={soundOn} />
      <span className="hidden sm:inline">{soundOn ? "Sound on" : "Sound off"}</span>
    </button>
  );
}

function SoundGlyph({ on }: { on: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 9v6h4l5 4V5L8 9H4z" />
      {on ? (
        <>
          <path d="M16 9a4 4 0 0 1 0 6" />
          <path d="M18.5 6.5a7 7 0 0 1 0 11" className="opacity-70" />
        </>
      ) : (
        <path d="M22 9l-5 6M17 9l5 6" className="opacity-80" />
      )}
    </svg>
  );
}
