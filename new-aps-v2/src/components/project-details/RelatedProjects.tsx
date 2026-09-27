"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Project, projects } from "@/data/projects";

interface RelatedProjectsProps {
  project: Project;
}

export default function RelatedProjects({
  project,
}: RelatedProjectsProps) {
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#B6945F]">
            MORE PROJECTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Explore More
            <span className="block text-[#B6945F]">
              Completed Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedProjects.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0D1117]">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={`/projects/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#B6945F]"
                >
                  View Project
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}