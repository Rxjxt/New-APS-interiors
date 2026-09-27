import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTA from "@/components/home/cta/CTA";

export default function GalleryPage() {
  return (
    <main className="overflow-hidden">
      <GalleryHero />
      <GalleryGrid />
      <CTA />
    </main>
  );
}