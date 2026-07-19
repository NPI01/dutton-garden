import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import ArtGallery from "@/components/gallery/art-gallery";
import { GENERAL_PAINTINGS } from "@/lib/content/art";

export const metadata: Metadata = {
  title: "Recent Work — Paintings",
  description: "Current paintings and recent works by Dan Dutton.",
};

export default function RecentWorkPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Paintings"
        title="Recent Work"
        lede="Current paintings and works still close to the easel. Click any to see it whole."
      />
      <div className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/paintings"
            className="text-sm uppercase tracking-label text-soil/50 transition-colors hover:text-soil"
          >
            ← All paintings
          </Link>
          <span className="text-sm text-soil/50">{GENERAL_PAINTINGS.length} works</span>
        </div>
        <ArtGallery items={GENERAL_PAINTINGS} />
      </div>
    </div>
  );
}
