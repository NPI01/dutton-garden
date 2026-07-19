import type { Metadata } from "next";
import GardenWalk from "@/components/garden/garden-walk";

export const metadata: Metadata = {
  title: "The Garden Walk",
  description:
    "A passage through the flower paintings of Dan Dutton, on the way into the studio.",
};

export default function GardenPage() {
  return <GardenWalk />;
}
