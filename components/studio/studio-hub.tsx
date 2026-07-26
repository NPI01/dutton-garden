/**
 * Stage Three — The Studio.
 *
 * The main navigation hub. A full-viewport film of the studio with the
 * title centered over it, followed by an accessible wayfinding list of the
 * sections (the top navigation carries the same links).
 */

import Link from "next/link";
import { DOORWAYS } from "@/lib/content/studio";
import JourneyPath from "@/components/studio/journey-path";

export default function StudioHub() {
  return (
    <div className="ground-aged grain relative min-h-screen">
      {/* Studio film with the title centered over it */}
      <section
        aria-label="The Studio"
        className="relative h-[100svh] w-full overflow-hidden bg-aged"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          poster="/videos/studio-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/studio-video.mp4" type="video/mp4" />
        </video>

        {/* Legibility washes */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(65% 50% at 50% 50%, rgba(23,19,16,0.55) 0%, rgba(23,19,16,0.25) 45%, rgba(23,19,16,0) 78%)",
          }}
        />
        <div className="scrim-b pointer-events-none absolute inset-x-0 bottom-0 h-2/3" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="font-display text-[clamp(3.5rem,15vw,13rem)] leading-[0.9] text-cream drop-shadow-[0_3px_28px_rgba(0,0,0,0.85)]">
            The Studio
          </h1>
        </div>
      </section>

      {/* Accessible wayfinding — the sections of the studio. */}
      <section className="mx-auto max-w-5xl px-5 py-24 md:px-8" aria-label="Find your way">
        <p className="kicker mb-8 text-cream/45">Find your way</p>

        {/* The wayfinding list, with a dashed trail wandering between the
            section names. The trail is measured from the live label
            positions (see JourneyPath), so it follows the grid as it
            reflows. */}
        <div className="relative pt-6">
          <JourneyPath />
          <ul className="relative z-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {DOORWAYS.map((d) => (
              <li key={d.id}>
                <Link href={d.href} className="group block">
                  <span
                    data-journey-node
                    className="inline-block font-display text-2xl text-cream transition-colors group-hover:text-bloomgold group-focus-visible:text-bloomgold"
                  >
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
        </div>
      </section>
    </div>
  );
}
