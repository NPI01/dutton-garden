import type { Metadata } from "next";
import SectionLanding from "@/components/section/section-landing";
import RotatingBackground from "@/components/garden/rotating-background";
import { SECTIONS } from "@/lib/content/sections";
import { flowerSrc } from "@/lib/content/flowers";

const section = SECTIONS.dandyland;

// The land, a painting, and the last tobacco crop — rotating behind Dandyland.
const DANDYLAND_BG = [
  flowerSrc("flowers 56.jpg"),
  "/art-images/painting-7.jpg",
  "/art-images/Tobacco.jpg",
];

export const metadata: Metadata = {
  title: section.title,
  description: section.lede,
};

export default function DandylandPage() {
  return (
    <SectionLanding
      section={section}
      background={<RotatingBackground images={DANDYLAND_BG} />}
    />
  );
}
