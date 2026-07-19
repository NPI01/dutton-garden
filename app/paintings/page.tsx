import type { Metadata } from "next";
import SectionLanding from "@/components/section/section-landing";
import { SECTIONS } from "@/lib/content/sections";

const section = SECTIONS.paintings;

export const metadata: Metadata = {
  title: section.title,
  description: section.lede,
};

export default function PaintingsPage() {
  return <SectionLanding section={section} />;
}
