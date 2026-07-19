import Link from "next/link";

export default function NotFound() {
  return (
    <div className="ground-aged grain flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="kicker text-bloomgold/70">A path that isn&apos;t here</p>
      <h1 className="mt-6 font-display text-7xl text-cream md:text-9xl">Lost in the garden</h1>
      <p className="mt-6 max-w-md text-pretty text-lg text-cream/70">
        This corner of Dandyland hasn&apos;t grown yet — or the trail has closed
        over. Let&apos;s walk you back to the studio.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/studio"
          className="rounded-full border border-bloomgold px-7 py-3 font-display text-lg text-bloomgold transition-colors hover:bg-bloomgold hover:text-soil"
        >
          Enter the Studio
        </Link>
        <Link
          href="/"
          className="text-sm uppercase tracking-label text-cream/60 transition-colors hover:text-cream"
        >
          Back to the Gate
        </Link>
      </div>
    </div>
  );
}
