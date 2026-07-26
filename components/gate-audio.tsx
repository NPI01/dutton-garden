"use client";

/**
 * Ambient sound for the Gate. Rotates through Dan's field recordings and
 * instrumentals, one after another, looping the set. Plays only when the
 * visitor turns sound on (default off); kept low but audible.
 */

import { useEffect, useRef, useState } from "react";
import { useSound } from "@/contexts/sound-context";

const TRACKS = [
  "/sound/03%20Raincrows.m4a",
  "/sound/05%20Cicada%20Cycle.m4a",
  "/sound/Syrinx%202021%20Instrumental%20Water%20Nymp%20Mix.mp3",
];

// Low but audible — a subtle presence behind the film.
const VOLUME = 0.22;

export default function GateAudio() {
  const { soundOn } = useSound();
  const ref = useRef<HTMLAudioElement>(null);
  const [track, setTrack] = useState(0);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    a.volume = VOLUME;
    if (soundOn) {
      // The first play() follows the user's toggle gesture, so it's allowed;
      // subsequent track changes continue on the unlocked element.
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  }, [soundOn, track]);

  return (
    <audio
      ref={ref}
      src={TRACKS[track]}
      onEnded={() => setTrack((t) => (t + 1) % TRACKS.length)}
      preload="none"
      aria-hidden="true"
    />
  );
}
