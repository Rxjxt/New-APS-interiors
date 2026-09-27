"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const gallery = [
  {
    title: "Premium Reception",
    slug: "premium-reception",
    category: "Reception & Lobby",
    image: "/images/projects/portfolio-1.png",
    size: "large",
  },
  {
    title: "Modern Corporate Office",
    slug: "modern-corporate-office",
    category: "Corporate Office",
    image: "/images/projects/portfolio-2.png",
    size: "small",
  },
  {
    title: "Glass Cabin Office",
    slug: "glass-cabin-office",
    category: "Executive Cabin",
    image: "/images/projects/portfolio-3.png",
    size: "small",
  },
  {
    title: "Executive Conference Room",
    slug: "executive-conference-room",
    category: "Meeting Room",
    image: "/images/projects/portfolio-5.png",
    size: "large",
  },
  {
    title: "Collaborative Workspace",
    slug: "collaborative-workspace",
    category: "Innovation Hub",
    image: "/images/projects/portfolio-4.png",
    size: "small",
  },
  {
    title: "Executive Cabin",
    slug: "executive-cabin",
    category: "Private Office",
    image: "/images/projects/portfolio-6.png",
    size: "small",
  },
];

export default function ProjectGallery() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#B6945F]">
            PROJECT GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Explore Our
            <span className="block text-[#B6945F]">
              Recent Transformations
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover a curated showcase of premium office interiors designed by
            NEW APS INTERIORS, where innovative planning, elegant aesthetics,
            and expert craftsmanship come together to create inspiring
            commercial workspaces.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid auto-rows-[280px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className={`group relative overflow-hidden rounded-[30px] shadow-lg ${
                item.size === "large" ? "md:row-span-2" : ""
              }`}
            >
              {/* Clickable Overlay */}
              <Link
                href={`/projects/${item.slug}`}
                className="absolute inset-0 z-20"
                aria-label={item.title}
              />

              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute left-6 top-6 z-10">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#B6945F] backdrop-blur">
                  {item.category}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-white/80">
                    View Project
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B6945F] transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}