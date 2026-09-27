"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Modern Corporate Office",
    slug: "modern-corporate-office",
    description:
      "A contemporary corporate workspace featuring stylish meeting pods, open circulation areas, and modern interior elements that promote collaboration and productivity.",
    image: "/images/projects/gallery-1.jpg",
  },
  {
    title: "Reception & Lobby",
    slug: "premium-reception",
    description:
      "A premium reception area with elegant marble finishes, designer lighting, comfortable seating, and a sophisticated reception desk that creates an impressive welcome.",
    image: "/images/projects/gallery-2.jpg",
  },
  {
    title: "Glass Cabin Office",
    slug: "glass-cabin-office",
    description:
      "A private office enclosed with sleek glass partitions, combining openness, privacy, and modern aesthetics for executives and management professionals.",
    image: "/images/projects/gallery-3.jpg",
  },
  {
    title: "Executive Conference Room",
    slug: "executive-conference-room",
    description:
      "A spacious conference room with a premium meeting table, ergonomic seating, and panoramic city views, designed for presentations and strategic discussions.",
    image: "/images/projects/gallery-4.jpg",
  },
  {
    title: "Collaborative Meeting Space",
    slug: "collaborative-workspace",
    description:
      "A stylish meeting room featuring decorative glass partitions, contemporary furniture, and a professional atmosphere that encourages teamwork and innovation.",
    image: "/images/projects/gallery-5.jpg",
  },
  {
    title: "Executive Cabin",
    slug: "executive-cabin",
    description:
      "A luxurious executive cabin with custom wooden furniture, integrated storage, visitor seating, and elegant finishes for a refined leadership workspace.",
    image: "/images/projects/gallery-6.jpg",
  },
];

export default function ProjectCategories() {
  return (
    <section className="bg-[#F5F2ED] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
            PROJECT CATEGORIES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Spaces We
            <span className="block text-[#B6945F]">Transform</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From corporate headquarters to collaborative workspaces, our
            expertise covers every aspect of commercial interior and furniture
            solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-[28px] border border-[#E6DED2] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#0D1117]">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <Link
  href={`/projects/${category.slug}`}
  className="group mt-6 inline-flex items-center gap-2 font-semibold text-[#B6945F] transition-all duration-300 hover:gap-4"
>
  Learn More
  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}