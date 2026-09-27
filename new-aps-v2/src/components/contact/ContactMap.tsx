import Link from "next/link";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <div className="relative h-full rounded-[32px] bg-[#EAF2F8] p-5 shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
      {/* Floating Information Card */}

      <div className="absolute left-8 right-8 top-8 z-20 rounded-3xl border border-white/70 bg-white/95 p-6 shadow-xl backdrop-blur-lg">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B6945F] text-white">
            <MapPin size={26} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
              Manufacturing & Experience Centre
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              NEW APS INTERIORS
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              D-8, Somnath City,
              <br />
              Malpura,
              <br />
              District Kotputli Behror,
              <br />
              Behror, Rajasthan 303108
            </p>

            <div className="mt-5 space-y-1 text-slate-600">
              <p>
                <span className="font-semibold">Phone:</span> +91 9810408151
              </p>

              <p>
                <span className="font-semibold">Email:</span>{" "}
                apsinteriors_utsav@yahoo.com
              </p>

              <p>
                <span className="font-semibold">Hours:</span> Monday – Saturday
              </p>

              <p>09:00 AM – 06:00 PM</p>
            </div>

            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=NEW+APS+INTERIORS+Behror"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#B6945F]"
            >
              <Navigation size={18} />
              Get Directions
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Google Map */}

      <div className="h-[650px] overflow-hidden rounded-[28px] border border-white/50">
        <iframe
          title="NEW APS INTERIORS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.012011892643!2d76.24752827575793!3d27.84016687610671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d4ff97e6cb25f%3A0x6b348c2cba4d97b4!2sNEW%20APS%20INTERIORS!5e0!3m2!1sen!2sin!4v1785003950155!5m2!1sen!2sin"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
  );
}