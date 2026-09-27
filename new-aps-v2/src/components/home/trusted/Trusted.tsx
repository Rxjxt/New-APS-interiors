import Badge from "@/components/ui/Badge";
import TrustCard from "./TrustCard";

export default function Trusted() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8 lg:mb-10">
        <Badge>Manufacturing Excellence</Badge>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl lg:mt-4 lg:text-5xl">
          Trusted by OEM Partners Since 2000
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#666666] sm:text-[17px] lg:mt-4 lg:text-lg lg:leading-8">
          For more than two decades, NEW APS Interiors has delivered
          precision-engineered furniture solutions through dependable
          manufacturing, consistent quality, and long-term partnerships.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
        <TrustCard
          value="26+"
          label="Years of Manufacturing Experience"
        />

        <TrustCard
          value="2000+"
          label="Production Capacity Every Month"
        />

        <TrustCard
          value="OEM"
          label="Custom Manufacturing Solutions"
        />

        <TrustCard
          value="100%"
          label="Quality Focused Production"
        />
      </div>
    </section>
  );
}