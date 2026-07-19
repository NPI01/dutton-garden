import { clsx } from "clsx";

/**
 * An elegant stand-in for artwork/photography/audio that has not yet been
 * supplied. It names the expected content clearly without visually
 * dominating the page, and documents the path where the file should land.
 */
export default function AssetPlaceholder({
  kind = "image",
  label,
  path,
  className,
  ratio = "aspect-[4/5]",
}: {
  kind?: "image" | "audio" | "video" | "document";
  label: string;
  path?: string;
  className?: string;
  ratio?: string;
}) {
  const glyph = {
    image: "❧",
    audio: "♪",
    video: "▷",
    document: "❯",
  }[kind];

  return (
    <div
      className={clsx(
        "grain relative flex flex-col items-center justify-center overflow-hidden rounded-sm border border-tobacco/40 bg-loam/60 p-6 text-center",
        ratio,
        className
      )}
      role="img"
      aria-label={`${label} (image to be supplied)`}
    >
      <span aria-hidden className="mb-3 font-display text-3xl text-tobacco">
        {glyph}
      </span>
      <span className="font-hand text-xl text-cream/70">{label}</span>
      <span className="mt-2 text-[0.62rem] uppercase tracking-label text-cream/30">
        to be supplied
      </span>
      {path && (
        <code className="mt-3 max-w-full truncate text-[0.6rem] text-cream/25">{path}</code>
      )}
    </div>
  );
}
