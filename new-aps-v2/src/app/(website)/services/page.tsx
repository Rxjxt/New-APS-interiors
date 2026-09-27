import ServiceHero from "@/components/services/ServiceHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import FeaturedService from "@/components/services/FeaturedService";
import ManufacturingProcess from "@/components/services/ManufacturingProcess";
import Industries from "@/components/services/Industries";
import WhyServices from "@/components/services/WhyServices";
import CTA from "@/components/home/cta/CTA";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServiceHero />
      <ServicesGrid />
      <FeaturedService />
      <ManufacturingProcess />
      <Industries />
      <WhyServices />
      <CTA />
    </main>
  );
}