import Hero from "@/components/home/hero";
import Trusted from "@/components/home/trusted";
import About from "@/components/home/about";
import Products from "@/components/home/products";
import Process from "@/components/home/process";
import WhyChoose from "@/components/home/why-choose";
import { Factory } from "@/components/home/factory";
import Manufacturing from "@/components/home/manufacturing";
import Industries from "@/components/home/industries";
import CTA from "@/components/home/cta";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Full-width Hero */}
      <Hero />

      {/* Rest of the page with tracing beam */}
      <TracingBeam>
        <Trusted />

        <About />

        <Products />

        <Process />

        <WhyChoose />

        <Factory />

        <Manufacturing />

        <Industries />

        <CTA />
      </TracingBeam>
    </main>
  );
}