"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="transition-colors hover:text-[#B6945F]"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <Link
              href="/projects"
              className="transition-colors hover:text-[#B6945F]"
            >
              Projects
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#B6945F]">{project.title}</span>
          </div>

          {/* Category */}

          <span className="inline-flex rounded-full bg-[#B6945F]/20 px-5 py-2 text-sm font-semibold tracking-widest text-[#E2C08D] backdrop-blur">
            {project.category}
          </span>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            {project.title}
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            {project.shortDescription}
          </p>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 md:grid-cols-4">
            <div>
              <p className="text-sm uppercase tracking-wider text-white/60">
                Client
              </p>

              <p className="mt-2 font-semibold text-white">
                {project.client}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/60">
                Location
              </p>

              <p className="mt-2 font-semibold text-white">
                {project.location}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/60">
                Area
              </p>

              <p className="mt-2 font-semibold text-white">
                {project.area}
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-white/60">
                Duration
              </p>

              <p className="mt-2 font-semibold text-white">
                {project.duration}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}