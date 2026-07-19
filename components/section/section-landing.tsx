import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import type { Section } from "@/lib/content/sections";
import AssetPlaceholder from "@/components/media/asset-placeholder";
import PageHeader from "./page-header";
import Reveal from "@/components/motion/reveal";

const GROUND_CLASS: Record<Section["ground"], string> = {
  soil: "ground-soil",
  aged: "ground-aged",
  cream: "ground-cream",
  clay: "ground-clay",
  pine: "ground-pine",
};

/**
 * A section landing page. Subsections are presented as alternating
 * editorial rows — image (or elegant placeholder) beside text — so the
 * page reads as a curated spread, never a uniform card grid.
 */
export default function SectionLanding({ section }: { section: Section }) {
  return (
    <div className={clsx(GROUND_CLASS[section.ground], "grain min-h-screen")}>
      <PageHeader kicker={section.kicker} title={section.title} lede={section.lede} />

      <div className="mx-auto max-w-5xl px-5 pb-28 md:px-8">
        <ul className="flex flex-col gap-16 md:gap-24">
          {section.subsections.map((sub, i) => {
            const flip = i % 2 === 1;
            const rowClass = clsx(
              "group grid items-center gap-6 md:grid-cols-2 md:gap-12",
              sub.href && "cursor-pointer"
            );
            const inner = (
              <>
                <div className={clsx(flip && "md:order-2")}>
                      {sub.image ? (
                        <div className="canvas-tex relative aspect-[4/3] overflow-hidden border-[6px] border-tobacco/70 shadow-frame">
                          <Image
                            src={sub.image}
                            alt={sub.imageAlt ?? sub.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 45vw"
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                          />
                        </div>
                      ) : (
                        <AssetPlaceholder
                          kind="image"
                          label={sub.title}
                          ratio="aspect-[4/3]"
                        />
                      )}
                    </div>

                    <div className={clsx(flip && "md:order-1")}>
                      <span className="kicker opacity-40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 font-display text-4xl md:text-5xl">
                        {sub.title}
                      </h2>
                      <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed opacity-80">
                        {sub.blurb}
                      </p>
                      {sub.href && (
                        <span className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-label opacity-70 transition-opacity group-hover:opacity-100">
                          Enter
                          <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                        </span>
                      )}
                    </div>
              </>
            );
            return (
              <li key={sub.title}>
                <Reveal>
                  {sub.href ? (
                    <Link href={sub.href} className={rowClass}>
                      {inner}
                    </Link>
                  ) : (
                    <div className={rowClass}>{inner}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
