import Link from "next/link";
import { MAIN_NAV, SECONDARY_NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="grain relative border-t border-cream/10 bg-aged px-5 py-16 text-cream md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-pretty text-cream/60">
            The imaginative country of Kentucky artist Dan Dutton — where the
            garden, the studio, the songs, and the land are one continuous work.
          </p>
        </div>

        <nav aria-label="Sections">
          <p className="kicker mb-4 text-cream/40">Sections</p>
          <ul className="space-y-2">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/75 transition-colors hover:text-bloomgold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="More">
          <p className="kicker mb-4 text-cream/40">More</p>
          <ul className="space-y-2">
            {SECONDARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/75 transition-colors hover:text-bloomgold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/"
                className="text-cream/75 transition-colors hover:text-bloomgold"
              >
                The Gate
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
        <p>© {new Date().getFullYear()} Dan Dutton. All works and images reproduced by permission.</p>
        <p className="font-hand text-base text-cream/50">Made on the land at Dandyland</p>
      </div>
    </footer>
  );
}
