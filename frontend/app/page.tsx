import HeroVideo from "@/components/hero-video";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import WorksSection from "@/components/works-section";
import DandylandSection from "@/components/dandyland-section";
import FlowerStrip from "@/components/flower-strip";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <AboutSection />
      <FlowerStrip />
      <TimelineSection />
      <WorksSection />
      <DandylandSection />
      <Footer />
    </>
  );
}
