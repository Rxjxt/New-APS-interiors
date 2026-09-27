import {
  ManufacturingHero,
  ProcessTimeline,
  FacilitySection,
  MachinerySection,
  QualityControl,
  WhyManufactureWithUs,
} from "@/components/manufacturing";

import OEMSection from "@/components/products/OEMSection";
import CTA from "@/components/home/cta/CTA";

export default function ManufacturingPage() {
  return (
    <main className="overflow-hidden bg-[#FAF8F5]">
      <ManufacturingHero />

      <ProcessTimeline />

      <FacilitySection />

      <MachinerySection />

      

      <WhyManufactureWithUs />

      <OEMSection />

      <CTA
        badge="START YOUR PROJECT"
        title={`Ready to Manufacture\nwith Confidence?`}
        description="Partner with NEW APS INTERIORS for premium office furniture manufacturing, OEM production, and customized workspace solutions delivered with precision and quality."
        primaryButton="Request a Quote"
        secondaryButton="Contact Us"
      />
    </main>
  );
}