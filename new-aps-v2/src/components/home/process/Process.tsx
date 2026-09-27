"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/common/section-heading";
import ProcessStep from "./ProcessStep";

const steps = [
  {
    number: "01",
    title: "Design & Planning",
    description:
      "Understanding client requirements, preparing technical drawings, and planning every detail before production begins.",
    image: "/images/process/design.png",
  },
  {
    number: "02",
    title: "Precision Cutting",
    description:
      "Advanced machinery delivers precise dimensions, clean finishes, and consistent quality for every component.",
    image: "/images/process/cutting.png",
  },
  {
    number: "03",
    title: "Assembly",
    description:
      "Skilled professionals carefully assemble every product using proven manufacturing techniques.",
    image: "/images/process/assembly.png",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Each product undergoes rigorous inspection to ensure flawless quality and long-lasting durability.",
    image: "/images/process/inspection.png",
  },
  {
    number: "05",
    title: "Packaging & Dispatch",
    description:
      "Products are securely packed and prepared for safe, timely delivery across India.",
    image: "/images/process/packaging.png",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F5F2ED] py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            badge="Manufacturing Process"
            title="Crafting Excellence Step by Step"
            description="Every product follows a carefully engineered workflow that ensures precision, consistency, and uncompromising quality."
          />
        </motion.div>

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          <div className="absolute left-0 right-0 top-7 z-0 hidden xl:block">
            <div className="mx-16 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#B6945F]/40 to-transparent" />
          </div>

          <div className="relative grid items-stretch gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3 2xl:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.55,
                }}
                className="flex h-full"
              >
                <ProcessStep {...step} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}