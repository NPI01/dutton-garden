import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import ArtGallery from "@/components/gallery/art-gallery";
import { STAGE_PHOTOS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "The Stone Man — Stage",
  description:
    "Dan Dutton's opera The Stone Man — production photographs and, in time, synopsis, music, designs, and archival materials.",
};

const photos = STAGE_PHOTOS.slice(0, 5);

export default function StoneManPage() {
  return (
    <div className="ground-aged grain min-h-screen">
      <PageHeader
        kicker="Stage · Opera · 1990"
        title="The Stone Man"
        lede="Dan's first opera — an uncategorizable musical stage work premiered by Kentucky Opera at the Kentucky Center for the Arts in 1990, then toured throughout the state. Production photographs below; the full synopsis, music, designs, programs, and Dan's reflections will gather here as they are added."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <Link
          href="/stage"
          className="text-sm uppercase tracking-label text-cream/50 transition-colors hover:text-cream"
        >
          ← The Stage
        </Link>
        <div className="mt-8">
          <ArtGallery items={photos} />
        </div>
      </div>
    </div>
  );
}
