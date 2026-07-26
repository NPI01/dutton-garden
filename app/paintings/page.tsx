import type { Metadata } from "next";
import SectionLanding from "@/components/section/section-landing";
import RotatingBackground from "@/components/garden/rotating-background";
import { SECTIONS } from "@/lib/content/sections";

const section = SECTIONS.paintings;

// Paintings rotating behind the Paintings index.
const PAINTINGS_BG = [
  "/art-images/painting-15.jpg",
  "/art-images/painting-19.jpg",
  "/art-images/painting-22.jpg",
];

export const metadata: Metadata = {
  title: section.title,
  description: section.lede,
};

export default function PaintingsPage() {
  return (
    <SectionLanding
      section={section}
      background={<RotatingBackground images={PAINTINGS_BG} />}
    />
  );
}
