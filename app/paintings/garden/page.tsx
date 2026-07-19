import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import PaintingGallery from "@/components/gallery/painting-gallery";
import ArtGallery from "@/components/gallery/art-gallery";
import { flowerCount } from "@/lib/content/flowers";
import { GARDEN_ANIMALS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "The Garden — Paintings",
  description:
    "Flower paintings, botanical details, and the natural cycles of the year, by Dan Dutton.",
};

export default function GardenPaintingsPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Paintings · The Garden"
        title="The Garden"
        lede="Flowers and botanical details, animals and the natural cycles of the year — the largest and most-loved body of Dan's work. Click any painting to see it whole."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/paintings"
            className="text-sm uppercase tracking-label text-soil/50 transition-colors hover:text-soil"
          >
            ← All paintings
          </Link>
          <span className="text-sm text-soil/50">{flowerCount} works</span>
        </div>
        <PaintingGallery />

        <div className="mt-20">
          <h2 className="font-display text-4xl text-soil md:text-5xl">Animals & Nature</h2>
          <p className="mt-3 max-w-xl text-pretty text-soil/70">
            Birds, cats, rabbits, and the small lives of the place — the garden&apos;s
            other inhabitants.
          </p>
          <div className="mt-8">
            <ArtGallery items={GARDEN_ANIMALS} />
          </div>
        </div>
      </div>
    </div>
  );
}
