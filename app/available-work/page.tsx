import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/section/page-header";
import AssetPlaceholder from "@/components/media/asset-placeholder";
import { COLLECTIONS } from "@/lib/content/dan";

export const metadata: Metadata = {
  title: "Available Work",
  description:
    "Works currently available, commissions, studio visits, and public collections holding Dan Dutton's work.",
};

// Sample listings demonstrating the template — replace with confirmed works.
const AVAILABLE = [
  { title: "Aster, late", medium: "Oil on carved panel", year: "2026", status: "available" },
  { title: "Turtle (study)", medium: "Iron, patinated", year: "2025", status: "inquire" },
  { title: "Barefoot Mind IX", medium: "Oil on panel, carved frame", year: "2024", status: "inquire" },
];

export default function AvailableWorkPage() {
  return (
    <div className="ground-cream grain min-h-screen">
      <PageHeader
        kicker="Quietly for sale"
        title="Available Work"
        lede="A small, changing selection. Nothing here is a storefront — if a piece speaks to you, write, and we'll talk."
      />

      <div className="mx-auto max-w-5xl space-y-24 px-5 pb-28 md:px-8">
        {/* Available works */}
        <section aria-label="Available works">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {AVAILABLE.map((w) => (
              <li key={w.title}>
                <AssetPlaceholder kind="image" label={w.title} ratio="aspect-[4/5]" />
                <div className="mt-4">
                  <h2 className="font-display text-2xl text-soil">{w.title}</h2>
                  <p className="mt-1 text-soil/70">
                    {w.medium} · {w.year}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[0.65rem] uppercase tracking-label text-terracotta">
                      {w.status === "available" ? "Available" : "Inquire"}
                    </span>
                    <Link
                      href="/contact"
                      className="text-sm uppercase tracking-label text-soil/60 hover:text-soil"
                    >
                      Inquire →
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Commissions & Studio visits */}
        <section className="grid gap-12 md:grid-cols-2" aria-label="Commissions and studio visits">
          <div>
            <h2 className="font-display text-3xl text-soil">Commissions</h2>
            <p className="mt-4 text-pretty text-soil/75">
              Sculpture and public art, painting commissions, theatrical design,
              and the occasional special project. Tell us what you have in mind.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block text-sm uppercase tracking-label text-soil/60 hover:text-soil"
            >
              Discuss a commission →
            </Link>
          </div>
          <div>
            <h2 className="font-display text-3xl text-soil">Studio Visits</h2>
            <p className="mt-4 text-pretty text-soil/75">
              Dandyland is a private home as well as a studio, so visits are by
              arrangement. Write, and we'll find a season and a day.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block text-sm uppercase tracking-label text-soil/60 hover:text-soil"
            >
              Request a visit →
            </Link>
          </div>
        </section>

        {/* Collections */}
        <section aria-label="Collections">
          <h2 className="font-display text-3xl text-soil">Collections</h2>
          <p className="mt-3 text-soil/60">
            Selected institutions and public places where the work can be seen.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {COLLECTIONS.map((c) => (
              <li key={c} className="border-l-2 border-terracotta/60 pl-4 text-soil/80">
                {c}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
