"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/common/section-heading";
import FeatureItem from "./FeatureItem";

const features = [
  {
    title: "Industry Expertise",
    description:
      "Years of experience delivering premium office furniture manufacturing solutions.",
  },
  {
    title: "Precision Manufacturing",
    description:
      "Modern machinery and skilled craftsmanship ensure exceptional product quality.",
  },
  {
    title: "Customized Solutions",
    description:
      "Every project is tailored to your workspace requirements and business needs.",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product is carefully inspected before it reaches our customers.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Efficient production planning ensures reliable delivery schedules.",
  },
  {
    title: "Customer Commitment",
    description:
      "Long-term relationships built on trust, transparency, and dependable support.",
  },
];

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    className: "-top-3 -left-3 sm:-top-4 sm:-left-4",
  },
  {
    value: "500+",
    label: "Projects Delivered",
    className: "-top-3 -right-3 sm:-top-4 sm:-right-4",
  },
  {
    value: "100%",
    label: "Quality Checked",
    className: "-bottom-3 left-3 sm:-bottom-4 sm:left-4",
  },
  {
    value: "Pan India",
    label: "Delivery",
    className: "-bottom-3 right-3 sm:-bottom-4 sm:right-4",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Why Choose NEW APS"
          title="Built on Trust, Precision & Quality"
          description="For over 15 years, NEW APS Interiors has delivered premium office furniture manufacturing with a strong focus on craftsmanship, innovation, and customer satisfaction."
        />

        <div className="mt-10 grid items-center gap-12 md:mt-12 md:gap-16 lg:mt-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {features.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="overflow-hidden rounded-[24px] border border-[#E6DED2] bg-white shadow-xl lg:rounded-[32px]">
              <div className="relative h-[340px] sm:h-[450px] lg:h-[600px]">
                <Image
                  src="/images/why-choose/factory.jpg"
                  alt="Manufacturing Facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
            </div>

            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`absolute ${stat.className} rounded-xl border border-[#E6DED2] bg-white px-4 py-3 shadow-lg sm:rounded-2xl sm:px-5 sm:py-4 lg:px-6 lg:py-5`}
              >
                <h3 className="text-lg font-bold text-[#111111] sm:text-xl lg:text-2xl">
                  {stat.value}
                </h3>

                <p className="mt-1 text-xs text-[#666666] sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}