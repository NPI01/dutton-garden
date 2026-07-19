import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/section/page-header";
import AssetPlaceholder from "@/components/media/asset-placeholder";

export const metadata: Metadata = {
  title: "The Secret Commonwealth — Stage",
  description:
    "Dan Dutton's four-part dance-opera cycle: The Changeling and the Bear, The Road, Love and Time, and The Approach of the Mystery.",
};

const PARTS = [
  {
    n: "I",
    title: "The Changeling and the Bear",
    blurb: "The cycle opens — a child exchanged, a wildness at the door. KET's broadcast of this first part was nominated for an Emmy.",
    image: "/art-images/changeling-and-the-bear-1.jpg",
  },
  { n: "II", title: "The Road", blurb: "Departure and passage; the long walk out of the known." },
  { n: "III", title: "Love and Time", blurb: "What is kept and what is lost as the years turn." },
  {
    n: "IV",
    title: "The Approach of the Mystery",
    blurb: "The cycle gathers toward its threshold.",
  },
] as { n: string; title: string; blurb: string; image?: string }[];

export default function SecretCommonwealthPage() {
  return (
    <div className="ground-aged grain min-h-screen">
      <PageHeader
        kicker="Stage · A four-part dance-opera cycle · 1995–2000"
        title="The Secret Commonwealth"
        lede="An eight-hour, four-part cycle of dance operas — composed, designed, and directed by Dan and staged across Kentucky between 1995 and 2000. The first three parts were filmed and broadcast by Kentucky Educational Television; part one was nominated for an Emmy, and KET's films are still used in Kentucky's public schools."
      />
      <div className="mx-auto max-w-5xl px-5 pb-28 md:px-8">
        <Link
          href="/stage"
          className="text-sm uppercase tracking-label text-cream/50 transition-colors hover:text-cream"
        >
          ← The Stage
        </Link>
        <ol className="mt-8 grid gap-8 sm:grid-cols-2">
          {PARTS.map((p) => (
            <li key={p.title}>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl text-bloomgold">{p.n}</span>
                <h2 className="font-display text-2xl text-cream md:text-3xl">{p.title}</h2>
              </div>
              <p className="mt-2 text-cream/70">{p.blurb}</p>
              <div className="mt-4">
                {p.image ? (
                  <div className="canvas-tex relative aspect-[16/10] overflow-hidden border-[6px] border-tobacco/70 shadow-frame">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <AssetPlaceholder kind="image" label={p.title} ratio="aspect-[16/10]" />
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-12 font-hand text-xl text-cream/50">
          Individual project pages for each part to follow.
        </p>
      </div>
    </div>
  );
}
