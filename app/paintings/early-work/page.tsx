import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import ArtGallery from "@/components/gallery/art-gallery";
import { DRAWINGS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "Early Work — Paintings",
  description:
    "Early work, drawings, and studies by Dan Dutton — the hand learning itself.",
};

export default function EarlyWorkPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Paintings"
        title="Early Work & Drawings"
        lede="Drawings and studies — the hand learning itself, and work bound up with family, labor, memory, and place."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/paintings"
            className="text-sm uppercase tracking-label text-soil/50 transition-colors hover:text-soil"
          >
            ← All paintings
          </Link>
          <span className="text-sm text-soil/50">{DRAWINGS.length} works</span>
        </div>
        <ArtGallery items={DRAWINGS} />
      </div>
    </div>
  );
}
