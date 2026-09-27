import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Manufacturing from "@/components/about/Manufacturing";
import WhyChoose from "@/components/about/WhyChoose";
import CTA from "@/components/home/cta/CTA";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Manufacturing />
      <WhyChoose />
      <CTA />
    </main>
  );
}