"use client";

import {
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

interface Props {
  quotation: any;
}

export default function CustomerCard({
  quotation,
}: Props) {
  const Item = ({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }) => (
    <div className="flex gap-4 rounded-xl border border-slate-200 p-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B6945F]/10 text-[#B6945F]">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{label}</p>

        <p className="font-semibold text-slate-800">
          {value || "-"}
        </p>
      </div>
    </div>
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Customer Information
      </h2>

      <div className="grid gap-4">
        <Item
          icon={<Building2 size={20} />}
          label="Company"
          value={quotation.companyName}
        />

        <Item
          icon={<User size={20} />}
          label="Contact Person"
          value={quotation.contactPerson}
        />

        <Item
          icon={<Mail size={20} />}
          label="Email"
          value={quotation.email}
        />

        <Item
          icon={<Phone size={20} />}
          label="Phone"
          value={quotation.phone}
        />

        <Item
          icon={<MapPin size={20} />}
          label="Project Location"
          value={quotation.projectLocation}
        />

        <Item
          icon={<Briefcase size={20} />}
          label="Project Type"
          value={quotation.projectType}
        />

        <div className="rounded-xl border border-slate-200 p-4">
          <p className="mb-2 text-sm text-slate-500">
            Requirements
          </p>

          <p className="leading-7 text-slate-700">
            {quotation.requirements}
          </p>
        </div>
      </div>
    </div>
  );
}