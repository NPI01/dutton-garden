import type { Metadata } from "next";
import StudioHub from "@/components/studio/studio-hub";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Enter Dan Dutton's studio — the hub that opens onto the paintings, ballads, stage works, sculpture, and the land at Dandyland.",
};

export default function StudioPage() {
  return <StudioHub />;
}
