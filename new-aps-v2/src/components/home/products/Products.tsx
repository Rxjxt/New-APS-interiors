"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/common/section-heading";

import ProductCard from "./ProductCard";

const products = [
  {
    title: "Printer Cabinets",
    description:
      "Precision-engineered printer cabinets manufactured for OEM partners with exceptional durability and long-term reliability.",
    image: "/images/products/printer-cabinet.png",
    tags: ["OEM", "Steel", "RTA"],
  },
  {
    title: "Copier Cabinets",
    description:
      "Enterprise-grade copier cabinets built for commercial environments with precision engineering and scalable production.",
    image: "/images/products/copier-cabinet.png",
    tags: ["Commercial", "Custom", "OEM"],
  },
  {
    title: "Office Furniture",
    description:
      "Modern office furniture designed to combine functionality, comfort and premium aesthetics for professional workspaces.",
    image: "/images/products/office-furniture.jpg",
    tags: ["Office", "Premium", "Modular"],
  },
  {
    title: "Custom RTA Solutions",
    description:
      "Tailor-made ready-to-assemble furniture manufactured according to client specifications for global bulk orders.",
    image: "/images/products/rta-furniture.jpg",
    tags: ["Custom", "RTA", "Bulk"],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[#FAF8F5] py-12 sm:py-14 lg:py-16"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            badge="Our Products"
            title="Manufacturing Solutions for Modern Workspaces"
            description="We manufacture premium office furniture, printer cabinets, copier cabinets and custom RTA solutions for OEM partners, institutions and commercial environments."
          />
        </motion.div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="h-full"
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}