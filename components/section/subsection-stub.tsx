import Link from "next/link";
import PageHeader from "./page-header";
import AssetPlaceholder from "@/components/media/asset-placeholder";

/**
 * A placeholder template for subsections whose real content/assets have not
 * yet been supplied. The route and architecture exist (so links never 404
 * and a CMS can fill them later); the page states clearly what will live
 * here without pretending the material is present.
 */
export default function SubsectionStub({
  kicker,
  title,
  lede,
  backHref,
  backLabel,
  expects,
  placeholders = 3,
}: {
  kicker: string;
  title: string;
  lede: string;
  backHref: string;
  backLabel: string;
  expects: string[];
  placeholders?: number;
}) {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader kicker={kicker} title={title} lede={lede} />
      <div className="mx-auto max-w-5xl px-5 pb-28 md:px-8">
        <Link
          href={backHref}
          className="text-sm uppercase tracking-label text-soil/50 transition-colors hover:text-soil"
        >
          ← {backLabel}
        </Link>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: placeholders }).map((_, i) => (
            <AssetPlaceholder
              key={i}
              kind="image"
              label={`${title} — work ${i + 1}`}
              ratio="aspect-[4/5]"
            />
          ))}
        </div>

        <div className="mt-14 max-w-2xl border-l-2 border-terracotta/50 pl-6">
          <p className="font-hand text-xl text-terracotta">This room is still being hung.</p>
          <p className="mt-3 text-soil/70">When ready, this page will hold:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-soil/70">
            {expects.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
