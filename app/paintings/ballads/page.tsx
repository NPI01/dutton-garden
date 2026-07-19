import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import ArtGallery from "@/components/gallery/art-gallery";
import { BALLAD_PAINTINGS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "Ballads of the Barefoot Mind — Paintings",
  description:
    "The ballad paintings of Dan Dutton, each bound to a song and shown in its carved and painted frame.",
};

export default function BalladPaintingsPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Paintings · Commissioned by 21c Museum, 2003"
        title="Ballads of the Barefoot Mind"
        lede="Twelve monumental oil paintings of scenes from traditional ballads, with a companion set of twelve ink-and-watercolors from Dan's repertoire of thirty-six ballads — shown with his recordings at 21c Museum, Louisville, in 2006. Whitney curator Lawrence Rinder called them “monumental and epic.” The carved and painted frames are part of the work, so they are kept, not cropped."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/paintings"
            className="text-sm uppercase tracking-label text-soil/50 transition-colors hover:text-soil"
          >
            ← All paintings
          </Link>
          <span className="text-sm text-soil/50">{BALLAD_PAINTINGS.length} works</span>
        </div>
        <ArtGallery items={BALLAD_PAINTINGS} frame />
        <p className="mt-14 max-w-2xl border-l-2 border-terracotta/50 pl-6 font-hand text-xl text-terracotta">
          Each painting will open into its own page — with the ballad, its recording,
          studies, and Dan's commentary — as those are added.
        </p>
      </div>
    </div>
  );
}
