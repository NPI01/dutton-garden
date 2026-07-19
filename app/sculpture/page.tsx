import type { Metadata } from "next";
import SectionLanding from "@/components/section/section-landing";
import ArtGallery from "@/components/gallery/art-gallery";
import { SECTIONS } from "@/lib/content/sections";
import { SCULPTURE, CERAMICS } from "@/lib/content/art";

const section = SECTIONS.sculpture;

export const metadata: Metadata = {
  title: section.title,
  description: section.lede,
};

export default function SculpturePage() {
  return (
    <>
      <SectionLanding section={section} />
      <div className="ground-soil grain px-5 pb-28 md:px-8">
        <div className="mx-auto max-w-6xl space-y-20">
          <section aria-label="Sculpture">
            <h2 className="font-display text-4xl text-cream md:text-5xl">Sculpture</h2>
            <p className="mt-3 max-w-xl text-pretty text-cream/70">
              Metal and clay creatures, figures, and forms — many made with Jesse
              Rivera at the Rivera–Dutton Studio.
            </p>
            <div className="mt-8">
              <ArtGallery items={SCULPTURE} />
            </div>
          </section>

          <section aria-label="Ceramics">
            <h2 className="font-display text-4xl text-cream md:text-5xl">Ceramics</h2>
            <p className="mt-3 max-w-xl text-pretty text-cream/70">
              Glazed vessels, tiles, and ceramic works — including projects with
              Rookwood Pottery.
            </p>
            <div className="mt-8">
              <ArtGallery items={CERAMICS} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
