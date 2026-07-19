import type { Metadata } from "next";
import PageHeader from "@/components/section/page-header";
import Reveal from "@/components/motion/reveal";
import { ALMANAC } from "@/lib/content/almanac";

export const metadata: Metadata = {
  title: "The Dandyland Almanac",
  description:
    "A living studio notebook — current work, garden changes, seasonal observations, animals, songs, and stories from Dandyland.",
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AlmanacPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="A changing notebook"
        title="The Dandyland Almanac"
        lede="Not a blog — a studio notebook that keeps changing. Current work, garden notes, the animals, songs half-finished, and whatever the season turns up."
      />
      <div className="mx-auto max-w-3xl px-5 pb-28 md:px-8">
        <ol className="flex flex-col divide-y divide-soil/15">
          {ALMANAC.map((entry, i) => (
            <li key={entry.slug} className="py-10 first:pt-0">
              <Reveal delay={i * 0.05}>
                <article>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <time className="font-hand text-xl text-terracotta">
                      {formatDate(entry.date)}
                    </time>
                    {entry.categories?.map((c) => (
                      <span
                        key={c}
                        className="text-[0.65rem] uppercase tracking-label text-soil/40"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 font-display text-3xl text-soil md:text-4xl">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-pretty text-lg leading-relaxed text-soil/75">
                    {entry.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mt-14 font-hand text-xl text-soil/50">
          more entries to come, as the season turns…
        </p>
      </div>
    </div>
  );
}
