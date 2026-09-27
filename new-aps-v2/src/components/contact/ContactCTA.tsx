import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28">
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#B6945F]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#B6945F]/30 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's Build Your
            <span className="block text-[#B6945F]">
              Dream Workspace
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're setting up a new office, renovating an existing
            workspace, or looking for premium customized office furniture,
            our team is ready to bring your vision to life.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#B6945F] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="tel:+919810408151"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:border-[#B6945F] hover:bg-white/10"
            >
              <Phone size={18} />
              +91 9810408151
            </Link>
          </div>

          <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">26+</h3>
              <p className="mt-2 text-slate-400">Years of Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">500+</h3>
              <p className="mt-2 text-slate-400">Projects Delivered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">100%</h3>
              <p className="mt-2 text-slate-400">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}