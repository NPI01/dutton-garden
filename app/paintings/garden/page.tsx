import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import PaintingGallery from "@/components/gallery/painting-gallery";
import ArtGallery from "@/components/gallery/art-gallery";
import RotatingBackground from "@/components/garden/rotating-background";
import { flowerCount } from "@/lib/content/flowers";
import { GARDEN_ANIMALS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "The Garden — Paintings",
  description:
    "Flower paintings, botanical details, and the natural cycles of the year, by Dan Dutton.",
};

export default function GardenPaintingsPage() {
  return (
    <div className="ground-aged relative min-h-screen">
      <RotatingBackground />

      <div className="relative z-10">
        <PageHeader
          kicker="Paintings · The Garden"
          title="The Garden"
          lede="Flowers and botanical details, animals and the natural cycles of the year — the largest and most-loved body of Dan's work. Click any painting to see it whole."
        />
        <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/paintings"
              className="text-sm uppercase tracking-label text-cream/60 transition-colors hover:text-cream"
            >
              ← All paintings
            </Link>
            <span className="text-sm text-cream/50">{flowerCount} works</span>
          </div>
          <PaintingGallery />

          <div className="mt-20">
            <h2 className="font-display text-4xl text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] md:text-5xl">
              Animals & Nature
            </h2>
            <p className="mt-3 max-w-xl text-pretty text-cream/70 drop-shadow">
              Birds, cats, rabbits, and the small lives of the place — the garden&apos;s
              other inhabitants.
            </p>
            <div className="mt-8">
              <ArtGallery items={GARDEN_ANIMALS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
