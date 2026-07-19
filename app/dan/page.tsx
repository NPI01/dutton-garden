import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import Reveal from "@/components/motion/reveal";
import { TIMELINE, QUOTES, COLLECTIONS } from "@/lib/content/dan";
import { DAN_PORTRAITS, DAN_RETRO, MAKING } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "Dan Dutton",
  description:
    "Dan Dutton (b. 1959, Somerset, Kentucky) — painter, composer, singer, sculptor, and theater maker. Best known for the opera The Stone Man and Ballads of the Barefoot Mind.",
};

export default function DanPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="An intimate portrait"
        title="Dan Dutton"
        lede="Born in 1959 near Somerset, Kentucky, on a 200-year-old family farm. Painter, composer, singer, sculptor, theater director, designer, filmmaker — not separate careers, but one imaginative practice wearing many coats."
      />

      {/* The Artist — portrait beside bio */}
      <section aria-label="The artist" className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <figure className="canvas-tex relative aspect-[4/5] overflow-hidden border-[7px] border-tobacco/80 shadow-frame">
              <Image
                src={DAN_PORTRAITS[0].src}
                alt="Dan Dutton"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-pretty text-lg leading-relaxed text-soil/80">
              <p>
                The first piece was a muffin tin, beaten flat with a hammer in the
                yard when he was five or six — keeping sharp time, he recalls, with
                a secret droning melody held in the hills. He was painting by
                three, singing before he could remember not singing, selling
                paintings at fourteen, and living from his art out of his own
                studio by seventeen. He never had a formal art lesson.
              </p>
              <p>
                What followed refuses a single category: video installations
                commissioned by the Speed Art Museum; a one-man show in the
                rotunda of the US Congressional Office Building; nine operas,
                beginning with <em>The Stone Man</em>, premiered by Kentucky Opera
                in 1990; the four-part dance-opera cycle{" "}
                <em>The Secret Commonwealth</em>, broadcast by KET and nominated
                for an Emmy; twelve monumental ballad paintings for 21c Museum;
                ceramics for Rookwood; and, with Jesse Rivera, a sculpture studio
                in the old carriage house.
              </p>
              <p>
                All of it comes from one place — the farm outside Somerset he
                half-jokingly named Dandyland, where the Duttons have lived since
                before the Civil War crossed their hill.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* A Life in Making — timeline */}
      <section aria-label="A life in making" className="mx-auto max-w-5xl px-5 py-24 md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-soil md:text-6xl">A Life in Making</h2>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="hidden md:block">
            <div className="sticky top-28 space-y-6">
              {[DAN_RETRO[0], MAKING[0]].map((a) => (
                <figure
                  key={a.src}
                  className="canvas-tex relative aspect-square overflow-hidden border-[6px] border-tobacco/70 shadow-frame"
                >
                  <Image
                    src={a.src}
                    alt={a.title}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
          <ol className="relative border-l-2 border-terracotta/40 pl-8">
            {TIMELINE.map((t, i) => (
              <li key={t.year + i} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-terracotta bg-cream"
                />
                <Reveal delay={Math.min(i * 0.03, 0.3)}>
                  <p className="font-display text-2xl text-terracotta">{t.year}</p>
                  <p className="mt-2 max-w-xl text-pretty leading-relaxed text-soil/80">
                    {t.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* In His Own Words */}
      <section aria-label="In his own words" className="ground-pine grain px-5 py-24 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="font-display text-4xl text-cream md:text-6xl">In His Own Words</h2>
          </Reveal>
          <ul className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {QUOTES.map((q, i) => (
              <li key={q.theme}>
                <Reveal delay={Math.min(i * 0.04, 0.3)}>
                  <p className="kicker text-bloomgold/80">{q.theme}</p>
                  <blockquote className="mt-3 border-l-2 border-bloomgold/50 pl-5 font-serif text-xl leading-relaxed text-cream/90">
                    “{q.text}”
                  </blockquote>
                  {q.context && (
                    <p className="mt-2 pl-5 font-hand text-lg text-cream/50">{q.context}</p>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-cream/50">— Dan Dutton, from interviews</p>
        </div>
      </section>

      {/* Collections */}
      <section aria-label="Collections" className="mx-auto max-w-5xl px-5 py-24 md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl text-soil md:text-5xl">Collections</h2>
          <p className="mt-3 text-soil/60">
            Institutions and public places where the work lives.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {COLLECTIONS.map((c) => (
            <li key={c} className="border-l-2 border-terracotta/60 pl-4 text-soil/80">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            href="/available-work"
            className="text-sm uppercase tracking-label text-soil/60 transition-colors hover:text-soil"
          >
            Available work →
          </Link>
        </div>
      </section>
    </div>
  );
}
