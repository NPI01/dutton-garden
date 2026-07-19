import localFont from "next/font/local";
import { Spectral, Caveat } from "next/font/google";

/**
 * GC Vank — the supplied display face ("Vanko" in the brief).
 * Used selectively: the Dandyland title, major invitations, section
 * titles, decorative labels, and pull quotes. Never body copy.
 */
export const vank = localFont({
  src: [
    { path: "../public/fonts/GCVank.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-vank",
  display: "swap",
  // Fallback keeps layout stable before the display face paints.
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

/**
 * Spectral — literary, warm, high-readability serif for body copy,
 * editorial text, captions, and most UI. Self-hosted by next/font.
 */
export const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

/**
 * Caveat — handwritten voice for margin notes, garden labels, and
 * studio annotations. Used sparingly, never for running text.
 */
export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});
