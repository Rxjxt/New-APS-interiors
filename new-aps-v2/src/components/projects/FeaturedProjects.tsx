"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Open Workspace",
    slug: "modern-corporate-office",
    type: "Corporate Office",
    image: "/images/projects/project-1.jpg",
    description:
      "A spacious open-plan office featuring ergonomic workstations, collaborative seating, indoor greenery, and abundant natural light to create a productive and comfortable working environment.",
  },
  {
    title: "Premium Reception Lounge",
    slug: "premium-reception",
    type: "Reception & Lobby",
    image: "/images/projects/project-2.jpg",
    description:
      "A welcoming reception lounge designed with premium materials, elegant lighting, comfortable seating, and a contemporary reception desk that creates a lasting first impression for visitors.",
  },
  {
    title: "Executive Meeting Room",
    slug: "executive-conference-room",
    type: "Meeting & Discussion Space",
    image: "/images/projects/project-3.jpg",
    description:
      "A modern executive meeting room equipped with a large conference table, designer lighting, and expansive glazing, offering the perfect setting for client meetings and strategic discussions.",
  },
  {
    title: "Premium Boardroom",
    slug: "glass-cabin-office",
    type: "Boardroom",
    image: "/images/projects/project-4.jpg",
    description:
      "A luxurious boardroom featuring handcrafted wooden furniture, executive chairs, statement pendant lighting, and panoramic city views for high-level meetings and presentations.",
  },
  {
    title: "Collaborative Workspace",
    slug: "collaborative-workspace",
    type: "Innovation Hub",
    image: "/images/projects/project-5.jpg",
    description:
      "A collaborative workspace with stylish glass partitions, flexible layouts, premium office furniture, and modern finishes designed to encourage teamwork and innovation.",
  },
  {
    title: "Executive Cabin",
    slug: "executive-cabin",
    type: "Private Office",
    image: "/images/projects/project-6.jpg",
    description:
      "A private executive cabin combining custom-built furniture, visitor seating, integrated storage, and elegant wood finishes to provide a refined and productive leadership space.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#FAF8F5] py-28">
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
            FEATURED PROJECTS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0D1117] md:text-5xl">
            Signature Spaces That
            <span className="block text-[#B6945F]">
              Define Modern Workplaces
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every workspace we create reflects our commitment to premium
            craftsmanship, intelligent planning, and modern office aesthetics.
            Explore some of our completed commercial interior projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group overflow-hidden rounded-[30px] border border-[#E6DED2] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#B6945F] backdrop-blur">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4 flex items-center gap-2 text-[#B6945F]">
                  <BriefcaseBusiness className="h-5 w-5" />

                  <span className="text-sm font-semibold tracking-wide uppercase">
                    COMPLETED PROJECT
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0D1117]">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#B6945F]">
                    <Sparkles className="h-5 w-5" />

                    <span className="text-sm font-medium">
                      Premium Craftsmanship
                    </span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-2 font-semibold text-[#B6945F] transition-all duration-300 hover:gap-4"
                  >
                    View Details

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}