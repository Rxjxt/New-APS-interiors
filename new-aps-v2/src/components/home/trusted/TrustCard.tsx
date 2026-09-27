import {
  Factory,
  Handshake,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

type TrustCardProps = {
  value: string;
  label: string;
};

export default function TrustCard({
  value,
  label,
}: TrustCardProps) {
  const Icon =
    value === "26+"
      ? Factory
      : value === "2000+"
      ? PackageCheck
      : value === "OEM"
      ? Handshake
      : ShieldCheck;

  return (
    <div className="group h-full rounded-2xl border border-[#E6DED2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6F1EA]">
        <Icon className="h-6 w-6 text-[#B6945F]" />
      </div>

      <h3 className="text-3xl font-bold text-[#111111]">
        {value}
      </h3>

      <p className="mt-3 leading-7 text-[#666666]">
        {label}
      </p>
    </div>
  );
}