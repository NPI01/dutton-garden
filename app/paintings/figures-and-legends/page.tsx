import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import ArtGallery from "@/components/gallery/art-gallery";
import { FIGURE_PAINTINGS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "Figures, Lovers, and Legends — Paintings",
  description:
    "Narrative and figurative paintings by Dan Dutton where inherited stories, desire, myth, and contemporary bodies overlap.",
};

export default function FiguresAndLegendsPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Paintings"
        title="Figures, Lovers, and Legends"
        lede="Narrative and figurative paintings in which inherited stories, personal history, desire, myth, and contemporary bodies overlap — Pan in the pasture, lovers on a bench, legends walked into the present."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/paintings"
            className="text-sm uppercase tracking-label text-soil/50 transition-colors hover:text-soil"
          >
            ← All paintings
          </Link>
          <span className="text-sm text-soil/50">{FIGURE_PAINTINGS.length} works</span>
        </div>
        <ArtGallery items={FIGURE_PAINTINGS} />
      </div>
    </div>
  );
}
