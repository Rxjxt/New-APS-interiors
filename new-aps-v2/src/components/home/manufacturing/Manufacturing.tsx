"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/section-heading";

import ManufacturingGallery from "./ManufacturingGallery";

export default function Manufacturing() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            badge="MANUFACTURING EXCELLENCE"
            title="Built with Precision, Powered by Modern Machinery"
            description="Our manufacturing facility combines advanced woodworking equipment, skilled craftsmanship, and rigorous quality control to deliver reliable OEM and custom furniture solutions."
          />
        </motion.div>

        <ManufacturingGallery />
      </Container>
    </section>
  );
}