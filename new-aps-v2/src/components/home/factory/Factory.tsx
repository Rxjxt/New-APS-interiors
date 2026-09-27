"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "../../common/Container";
import SectionHeading from "@/components/common/section-heading";
import FactoryStats from "./FactoryStats";

export default function Factory() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="OUR FACILITY"
          title="Where Craftsmanship Meets Modern Manufacturing"
          description="Every product begins in our manufacturing facility, where skilled craftsmanship, modern equipment, and strict quality standards come together to create furniture solutions trusted by businesses across India."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 overflow-hidden rounded-[24px] border border-[#D2C0A6]/15 shadow-2xl sm:mt-12 lg:mt-16 lg:rounded-[32px]"
        >
          <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
            <Image
              src="/images/factory.png"
              alt="NEW APS Interiors Manufacturing Facility"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#D2C0A6] sm:text-xs sm:tracking-[0.35em]">
                  NEW APS INTERIORS
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white sm:mt-3 sm:text-3xl">
                  Manufacturing Facility
                </h3>

                <p className="mt-2 text-sm text-white/70">
                  Behror, Rajasthan, India
                </p>
              </div>

              <div className="hidden text-right md:block">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Established
                </p>

                <p className="mt-2 text-lg font-semibold text-[#D2C0A6]">
                  2000
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <FactoryStats />
      </Container>
    </section>
  );
}