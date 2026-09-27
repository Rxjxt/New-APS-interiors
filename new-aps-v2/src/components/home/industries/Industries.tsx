"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/common/section-heading";
import IndustryCard from "./IndustryCard";
import { industries } from "./data";

export default function Industries() {
  return (
    <section className="bg-[#F5F2ED] py-12 sm:py-14 lg:py-16">
      <Container>
        <SectionHeading
          badge="Industries We Serve"
          title="Furniture Solutions Across Diverse Industries"
          description="Our expertise spans multiple industries, delivering durable, functional, and aesthetically refined furniture solutions tailored to every workspace."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6 xl:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              className="h-full"
            >
              <IndustryCard {...industry} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}