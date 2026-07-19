import { clsx } from "clsx";

/**
 * A section's opening — a quiet kicker, a large display title, and an
 * editorial lede. Sits at the top of every section landing page.
 */
export default function PageHeader({
  kicker,
  title,
  lede,
  align = "left",
}: {
  kicker: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={clsx(
        "mx-auto max-w-3xl px-5 pb-14 pt-32 md:px-8 md:pt-40",
        align === "center" && "text-center"
      )}
    >
      <p className="kicker text-current opacity-50">{kicker}</p>
      <h1 className="mt-4 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95]">
        {title}
      </h1>
      {lede && (
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed opacity-80 md:text-xl">
          {lede}
        </p>
      )}
    </header>
  );
}
