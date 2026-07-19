import type { Metadata } from "next";
import Image from "next/image";
import SectionLanding from "@/components/section/section-landing";
import Reveal from "@/components/motion/reveal";
import { SECTIONS } from "@/lib/content/sections";
import { MENTORS } from "@/lib/content/dan";

const section = SECTIONS.ballads;

export const metadata: Metadata = {
  title: section.title,
  description: section.lede,
};

export default function BalladsPage() {
  return (
    <>
      <SectionLanding section={section} />

      {/* Voices Before Us — the chain of transmission */}
      <section
        aria-label="Voices before us"
        className="ground-pine grain px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="kicker text-bloomgold/80">The chain of transmission</p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-6xl">
              Voices Before Us
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-cream/75">
              A ballad is not learned from a book. It is handed to you, voice to
              voice, by someone who got it the same way. These are the singers
              who handed the songs to Dan.
            </p>
          </Reveal>
          <ol className="mt-14 space-y-12">
            {MENTORS.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={Math.min(i * 0.05, 0.25)}>
                  <div className="grid gap-2 md:grid-cols-[1fr_2fr] md:gap-10">
                    <div>
                      <h3 className="font-display text-3xl text-cream">{m.name}</h3>
                      <p className="mt-1 font-hand text-xl text-bloomgold/80">
                        {m.relation}
                      </p>
                    </div>
                    <p className="text-pretty leading-relaxed text-cream/75">
                      {m.note}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tape Recorders and Ghosts */}
      <section
        aria-label="Tape recorders and ghosts"
        className="ground-aged grain px-5 py-24 md:px-8"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <figure className="canvas-tex relative aspect-[4/5] overflow-hidden border-[7px] border-tobacco/80 shadow-frame">
              <Image
                src="/art-images/Death-of-a-Ballad-Singer.jpg"
                alt="Death of a Ballad Singer — painting by Dan Dutton, 1984"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-aged/90 to-transparent p-4 text-sm text-cream/90">
                Death of a Ballad Singer, 1984 — acrylic pigment on linen
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="kicker opacity-50">Field recordings & afterlives</p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
              Tape Recorders and Ghosts
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-cream/75">
              <p>
                When Chappel Wallin died, his daughter called Dan in tears: the
                family had nothing of his voice. Dan had the tape — the booming
                old love songs, the slapped-out time, the question at the start
                of the reel: <em>does that thing hear me?</em> When he hung up
                the phone, he saw the painting whole: Death reaching for the
                bird-soul of music as it flies out the open window, and missing.
              </p>
              <p>
                That same tape held a broken snippet of a ballad Chappel could
                barely remember. Years later it was enough for Sheila Kay Adams
                to raise <em>The Grey Cock</em> — a ballad given up for lost in
                America — back into the world entire.
              </p>
              <blockquote className="border-l-2 border-bloomgold/50 pl-5 font-serif text-xl text-cream/90">
                “Tape recorders can produce ghosts, and maybe that's the best
                thing they are able to do.”
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Ancient Sound */}
      <section
        aria-label="The ancient sound"
        className="ground-pine grain px-5 py-24 md:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="kicker text-bloomgold/80">The ancient sound</p>
            <blockquote className="mt-6 font-display text-3xl leading-tight text-cream md:text-5xl">
              “The ballads must incorporate and process every cultural change in
              order to truly live on.”
            </blockquote>
            <p className="mt-6 font-hand text-2xl text-bloomgold/80">
              — and, on the label “folk music”: “Either we're all folks or none
              of us are.”
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
