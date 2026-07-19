"use client";

/**
 * Stage Two — The Garden Walk.
 *
 * A scroll-driven passage through Dan's flower paintings. The visitor
 * begins in near-dark; a single bloom emerges; the garden thickens with
 * layered flowers, leaves, and painted fragments at different depths;
 * whole paintings surface; handwritten fragments drift past; the density
 * thins; the studio appears beyond; and the walk delivers them to /studio.
 *
 * Motion is restrained parallax driven by scroll progress — no scroll
 * hijacking. Reduced-motion visitors get crossfades between full
 * compositions instead of deep parallax, preserving the narrative.
 */

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { FLOWERS } from "@/lib/content/flowers";

const FRAGMENTS = [
  { text: "Everything that grows is a kind of singing.", at: 0.22 },
  { text: "the garden remembers what the house forgets", at: 0.44 },
  { text: "come up the path — the door is open", at: 0.7 },
];

// A hand-authored set of layered blooms with depth (parallax factor),
// entry point along the walk, size, and position.
type Layer = {
  flower: number;
  depth: number; // 0 (far) → 1 (near)
  enter: number; // scroll progress where it appears
  x: number; // vw
  y: number; // vh from top of its band
  size: number; // vw
  rotate: number;
};

const LAYERS: Layer[] = [
  { flower: 0, depth: 0.15, enter: 0.02, x: 50, y: 46, size: 26, rotate: -3 },
  { flower: 7, depth: 0.35, enter: 0.12, x: 20, y: 60, size: 20, rotate: 6 },
  { flower: 14, depth: 0.5, enter: 0.14, x: 78, y: 32, size: 22, rotate: -8 },
  { flower: 3, depth: 0.7, enter: 0.24, x: 34, y: 22, size: 16, rotate: 10 },
  { flower: 21, depth: 0.85, enter: 0.26, x: 66, y: 68, size: 18, rotate: -5 },
  { flower: 9, depth: 0.3, enter: 0.34, x: 12, y: 30, size: 24, rotate: 4 },
  { flower: 28, depth: 0.6, enter: 0.36, x: 88, y: 56, size: 20, rotate: -10 },
  { flower: 5, depth: 0.9, enter: 0.44, x: 44, y: 74, size: 14, rotate: 7 },
  { flower: 33, depth: 0.45, enter: 0.46, x: 72, y: 18, size: 22, rotate: -6 },
  { flower: 17, depth: 0.75, enter: 0.54, x: 24, y: 52, size: 18, rotate: 9 },
  { flower: 40, depth: 0.25, enter: 0.56, x: 58, y: 38, size: 26, rotate: -4 },
  { flower: 12, depth: 0.65, enter: 0.64, x: 82, y: 70, size: 18, rotate: 5 },
  { flower: 36, depth: 0.4, enter: 0.66, x: 16, y: 64, size: 20, rotate: -9 },
];

export default function GardenWalk() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mark the journey complete and advance to the studio.
  const goToStudio = () => {
    if (entered) return;
    setEntered(true);
    try {
      localStorage.setItem("dandyland-journeyed", "true");
    } catch {
      /* ignore */
    }
    setTimeout(() => router.push("/studio"), reduceMotion ? 0 : 900);
  };

  // When the walk reaches the end, glide into the studio automatically.
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0.985) goToStudio();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgress, reduceMotion]);

  if (reduceMotion) {
    return <ReducedGardenWalk onEnter={goToStudio} entered={entered} />;
  }

  return (
    <div ref={containerRef} className="relative h-[520vh] bg-aged">
      {/* Sticky viewport that the walk plays out inside */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <GardenSky progress={scrollYProgress} />

        {LAYERS.map((layer) => (
          <Bloom key={layer.flower + "-" + layer.enter} layer={layer} progress={scrollYProgress} />
        ))}

        {FRAGMENTS.map((f) => (
          <Fragment key={f.text} fragment={f} progress={scrollYProgress} />
        ))}

        <StudioThreshold progress={scrollYProgress} />

        {/* Curtain that closes on entry */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 bg-aged"
          initial={{ opacity: 0 }}
          animate={{ opacity: entered ? 1 : 0 }}
          transition={{ duration: 0.9 }}
        />

        <WalkControls progress={scrollYProgress} onSkip={goToStudio} />
      </div>
    </div>
  );
}

/** A slowly shifting ground from night → dawn as the walk proceeds. */
function GardenSky({ progress }: { progress: MotionValue<number> }) {
  const bg = useTransform(
    progress,
    [0, 0.25, 0.6, 1],
    [
      "radial-gradient(120% 100% at 50% 90%, #241a12 0%, #171310 70%)",
      "radial-gradient(120% 100% at 50% 80%, #2c3a26 0%, #171310 75%)",
      "radial-gradient(120% 110% at 50% 70%, #4c6b3a 0%, #241a12 78%)",
      "radial-gradient(130% 120% at 50% 55%, #a7c0cd 0%, #c9825f 45%, #241a12 90%)",
    ]
  );
  return <motion.div className="absolute inset-0" style={{ background: bg }} />;
}

/** A single painted bloom that drifts up through the depth field. */
function Bloom({ layer, progress }: { layer: Layer; progress: MotionValue<number> }) {
  const { enter, depth } = layer;
  const exit = Math.min(enter + 0.5, 1);
  const drift = 18 * (1 - depth); // far flowers drift more slowly/less

  const opacity = useTransform(
    progress,
    [enter - 0.04, enter + 0.05, exit - 0.08, exit],
    [0, depth * 0.35 + 0.55, depth * 0.35 + 0.55, 0]
  );
  const y = useTransform(progress, [enter - 0.05, exit], [drift, -drift]);
  const scale = useTransform(progress, [enter - 0.05, exit], [0.85 + depth * 0.2, 1.05 + depth * 0.25]);

  const flower = FLOWERS[layer.flower % FLOWERS.length];
  const blur = (1 - depth) * 3;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${layer.x}vw`,
        top: `${layer.y}vh`,
        width: `${layer.size}vw`,
        height: `${layer.size}vw`,
        x: "-50%",
        y,
        opacity,
        scale,
        zIndex: Math.round(depth * 30),
        filter: `blur(${blur}px)`,
        rotate: `${layer.rotate}deg`,
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={flower.src}
          alt=""
          fill
          sizes="40vw"
          className="rounded-[45%] object-cover shadow-lift"
          style={{ transform: `rotate(${-layer.rotate}deg)` }}
        />
      </div>
    </motion.div>
  );
}

/** Handwritten fragment surfacing among the flora. */
function Fragment({
  fragment,
  progress,
}: {
  fragment: { text: string; at: number };
  progress: MotionValue<number>;
}) {
  const { at } = fragment;
  const opacity = useTransform(
    progress,
    [at - 0.06, at, at + 0.06, at + 0.12],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [at - 0.06, at + 0.12], [20, -20]);
  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute inset-x-0 top-[38vh] z-30 mx-auto max-w-2xl px-8 text-center font-hand text-3xl text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] md:text-4xl"
    >
      {fragment.text}
    </motion.p>
  );
}

/** A glimpse of the studio door emerging beyond the garden near the end. */
function StudioThreshold({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.72, 0.9, 1], [0, 0.9, 1]);
  const scale = useTransform(progress, [0.72, 1], [0.7, 1.15]);
  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute left-1/2 top-1/2 z-20 flex h-[46vh] w-[70vw] max-w-lg -translate-x-1/2 -translate-y-1/2 items-center justify-center"
    >
      <div className="relative h-full w-full overflow-hidden rounded-t-[48%] border-4 border-clay/70 shadow-lift">
        <Image src="/videos/poster.jpg" alt="" fill sizes="70vw" className="object-cover" priority={false} />
        <div className="absolute inset-0 bg-gradient-to-t from-aged/70 to-transparent" />
        <span className="absolute inset-x-0 bottom-6 text-center font-display text-2xl text-cream">
          the studio
        </span>
      </div>
    </motion.div>
  );
}

/** Skip / back controls + a slim progress bar. */
function WalkControls({
  progress,
  onSkip,
}: {
  progress: MotionValue<number>;
  onSkip: () => void;
}) {
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <div className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8">
        <Link
          href="/"
          className="text-[0.7rem] uppercase tracking-label text-cream/60 transition-colors hover:text-cream"
        >
          ← Back to Gate
        </Link>
        <button
          type="button"
          onClick={onSkip}
          className="text-[0.7rem] uppercase tracking-label text-cream/60 transition-colors hover:text-cream"
        >
          Skip to Studio →
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-50">
        <div className="mb-4 text-center">
          <span className="font-hand text-lg text-cream/70">keep walking…</span>
        </div>
        <div className="h-[3px] w-full bg-cream/10">
          <motion.div className="h-full bg-bloomgold" style={{ width }} />
        </div>
      </div>
    </>
  );
}

/** Reduced-motion walk: gentle crossfades between full compositions. */
function ReducedGardenWalk({
  onEnter,
  entered,
}: {
  onEnter: () => void;
  entered: boolean;
}) {
  const picks = [0, 14, 28, 40, 9];
  return (
    <div className="ground-aged min-h-[100svh]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-16 px-6 py-24 text-center">
        <p className="font-display text-4xl text-cream">The Garden Walk</p>
        <p className="max-w-xl text-pretty text-cream/70">
          A passage through Dan&apos;s flower paintings, on the way to the studio.
        </p>
        {picks.map((p, i) => (
          <figure key={p} className="w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lift">
              <Image
                src={FLOWERS[p % FLOWERS.length].src}
                alt={FLOWERS[p % FLOWERS.length].alt}
                fill
                sizes="(max-width:768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            {FRAGMENTS[i] && (
              <figcaption className="mt-4 font-hand text-2xl text-cream/80">
                {FRAGMENTS[i].text}
              </figcaption>
            )}
          </figure>
        ))}
        <button
          type="button"
          onClick={onEnter}
          disabled={entered}
          className="rounded-full border border-bloomgold px-8 py-3 font-display text-xl text-bloomgold transition-colors hover:bg-bloomgold hover:text-soil"
        >
          Enter the Studio →
        </button>
      </div>
    </div>
  );
}
