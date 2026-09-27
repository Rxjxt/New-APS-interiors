"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden py-32 lg:py-36">
      {/* Background */}
      <Image
        src="/images/hero/factory-placeholder.png"
        alt="NEW APS Interiors"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_center]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <Container className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl pl-2 lg:pl-10 xl:pl-16"
          >
            <HeroContent />

            <div className="mt-14">
              <HeroStats />
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}