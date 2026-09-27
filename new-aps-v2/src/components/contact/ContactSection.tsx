import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

export default function ContactSection() {
  return (
    <section className="bg-[#F8F6F2] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-[#EAF2F8] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#5F6F52]">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Let's Discuss Your Next Workspace
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you're furnishing a new office or transforming an existing
            workspace, our specialists are here to guide you through every step
            from concept to installation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <ContactForm />

          <ContactMap />
        </div>
      </div>
    </section>
  );
}