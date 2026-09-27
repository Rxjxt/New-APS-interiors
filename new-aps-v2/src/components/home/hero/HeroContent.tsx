import SectionHeading from "@/components/common/section-heading";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-4xl">
      <SectionHeading
        badge="Manufacturing Excellence Since 2000"
        title="Built for Business. Crafted with Precision."
        description="NEW APS Interiors manufactures premium RTA furniture, printer cabinets, office furniture, and OEM solutions with over 26 years of engineering expertise, modern manufacturing, and uncompromising quality."
        theme="dark"
      />

      <div className="mt-10">
        <HeroActions />
      </div>

      <div className="mt-14">
        <HeroStats />
      </div>
    </div>
  );
}