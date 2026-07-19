import type { Metadata } from "next";
import SectionLanding from "@/components/section/section-landing";
import { SECTIONS } from "@/lib/content/sections";

const section = SECTIONS.stage;

export const metadata: Metadata = {
  title: section.title,
  description: section.lede,
};

export default function StagePage() {
  return <SectionLanding section={section} />;
}
