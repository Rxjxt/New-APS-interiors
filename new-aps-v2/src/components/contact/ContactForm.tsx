"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import {
  sendOTP,
  verifyOTP,
} from "@/services/otp.service";

const services = [
  "Modular Workstations",
  "Executive Desks",
  "Conference Tables",
  "Reception Furniture",
  "Storage Solutions",
  "Director Cabins",
  "Complete Office Interiors",
  "Custom Furniture",
  "Other",
];

export default function ContactForm() {
  const API = process.env.NEXT_PUBLIC_API_URL;

const [loading, setLoading] = useState(false);

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [companyName, setCompanyName] = useState("");
const [serviceRequired, setServiceRequired] =
  useState("");
const [projectLocation, setProjectLocation] =
  useState("");
const [projectDetails, setProjectDetails] =
  useState("");
  const [otp, setOtp] = useState("");

const [otpSent, setOtpSent] =
  useState(false);

const [emailVerified, setEmailVerified] =
  useState(false);

const [sendingOTP, setSendingOTP] =
  useState(false);

const [verifyingOTP, setVerifyingOTP] =
  useState(false);
  const [timer, setTimer] = useState(0);
async function handleSendOTP() {
  if (!email) {
    toast.error("Please enter your email.");
    return;
  }

  try {
    setSendingOTP(true);

    await sendOTP(email);

    setOtpSent(true);
    setTimer(60);

    toast.success(
      "OTP sent successfully."
    );
  } catch (error) {
    console.error(error);

    toast.error(
      "Failed to send OTP."
    );
  } finally {
    setSendingOTP(false);
  }
}

async function handleVerifyOTP() {
  if (!otp) {
    toast.error("Enter OTP.");
    return;
  }

  try {
    setVerifyingOTP(true);

    await verifyOTP(email, otp);

    setEmailVerified(true);

    toast.success(
      "Email verified successfully."
    );
  } catch (error) {
    console.error(error);

    toast.error(
      "Invalid OTP."
    );
  } finally {
    setVerifyingOTP(false);
  }
}
useEffect(() => {
  if (timer <= 0) return;

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);
function handleChangeEmail() {
  setEmail("");
  setOtp("");
  setOtpSent(false);
  setEmailVerified(false);
  setTimer(0);
}
  async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  try {
    setLoading(true);

    await axios.post(`${API}/quotations`, {
      companyName,
      contactPerson: fullName,
      email,
      phone,
      products: [],
      projectLocation,
      projectType: serviceRequired,
      quantity: 1,
      requirements: projectDetails,
    });

    toast.success(
      "Quotation request submitted successfully!"
    );

    setFullName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setServiceRequired("");
    setProjectLocation("");
    setProjectDetails("");
    setOtp("");
setOtpSent(false);
setEmailVerified(false);

  } catch (error) {
    console.error(error);

    toast.error(
      "Failed to submit quotation."
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="rounded-[32px] border border-[#E7DFD1] bg-[#FFFEFC] p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)] lg:p-10">
      <div className="mb-10">
        <span className="inline-flex items-center rounded-full bg-[#F8F6F2] px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
          Get In Touch
        </span>

        <h2 className="mt-5 text-4xl font-bold text-slate-900">
          Tell Us About Your Project
        </h2>

        <p className="mt-4 text-slate-600 leading-8">
          Whether you're designing a new office or upgrading your workspace,
          we're here to provide customized interior and furniture solutions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Input
  label="Full Name"
  name="name"
  type="text"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
/>

          <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Email Address
  </label>

  <div className="flex gap-3">
    <input
  required
  type="email"
  value={email}
  disabled={emailVerified}
  onChange={(e) => setEmail(e.target.value)}
  className={`h-14 flex-1 rounded-2xl border border-[#E7DFD1] px-5 outline-none transition-all focus:border-[#B6945F] focus:ring-4 focus:ring-[#B6945F]/20 ${
    emailVerified
      ? "bg-gray-100 cursor-not-allowed"
      : "bg-white"
  }`}
    />

    <button
      type="button"
      onClick={handleSendOTP}
      disabled={
  sendingOTP ||
  emailVerified ||
  timer > 0
}
      className="rounded-xl bg-[#B6945F] px-5 text-white hover:bg-[#a07d4d] disabled:opacity-50"
    >
      {emailVerified
  ? "✅ Verified"
  : sendingOTP
  ? "Sending..."
  : timer > 0
  ? `${timer}s`
  : "Send OTP"}
    </button>
  </div>

  {emailVerified && (
  <div className="mt-2 flex items-center justify-between">
    <p className="text-sm font-medium text-green-600">
      ✅ Email Verified
    </p>

    <button
      type="button"
      onClick={handleChangeEmail}
      className="text-sm font-medium text-blue-600 hover:underline"
    >
      Change Email
    </button>
  </div>
)}
</div>
{otpSent && !emailVerified && (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Enter OTP
    </label>

    <div className="flex gap-3">
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter 6-digit OTP"
        className="h-14 flex-1 rounded-2xl border border-[#E7DFD1] bg-white px-5 outline-none transition-all focus:border-[#B6945F] focus:ring-4 focus:ring-[#B6945F]/20"
      />

      <button
        type="button"
        onClick={handleVerifyOTP}
        disabled={verifyingOTP}
        className="rounded-xl bg-green-600 px-5 text-white hover:bg-green-700"
      >
        {verifyingOTP
          ? "Verifying..."
          : "Verify"}
      </button>
    </div>
  </div>
)}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
  label="Phone Number"
  name="phone"
  type="tel"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
/>

          <Input
  label="Company Name"
  name="company"
  type="text"
  value={companyName}
  onChange={(e) => setCompanyName(e.target.value)}
/>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Service Required
            </label>

           <select
  required
  value={serviceRequired}
  onChange={(e) =>
    setServiceRequired(e.target.value)
  }
  className="h-14 w-full rounded-2xl border border-[#E7DFD1] bg-white px-5 outline-none transition-all focus:border-[#B6945F] focus:ring-4 focus:ring-[#B6945F]/20"
>
  <option value="">
    Select Service
  </option>

  {services.map((service) => (
    <option
      key={service}
      value={service}
    >
      {service}
    </option>
  ))}
</select>
          </div>

          <Input
  label="Project Location"
  name="location"
  type="text"
  value={projectLocation}
  onChange={(e) =>
    setProjectLocation(e.target.value)
  }
  required
/>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Project Details
          </label>

          <textarea
  rows={6}
  required
  value={projectDetails}
  onChange={(e) =>
    setProjectDetails(e.target.value)
  }
  placeholder="Tell us about your office space, furniture requirements, timeline, or any specific needs..."
  className="w-full rounded-2xl border border-[#E7DFD1] bg-white px-5 py-4 outline-none transition-all focus:border-[#B6945F] focus:ring-4 focus:ring-[#B6945F]/20"
/>
        </div>

        <button
          disabled={loading || !emailVerified}
          className="group inline-flex h-14 items-center justify-center rounded-full bg-slate-900 px-8 text-white transition-all duration-300 hover:bg-[#B6945F]"
        >
          {loading
  ? "Sending..."
  : !emailVerified
  ? "Verify Email First"
  : (
            <>
              Send Inquiry

              <ArrowRight
                className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

type InputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  required?: boolean;
};

function Input({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-14 w-full rounded-2xl border border-[#E7DFD1] bg-white px-5 outline-none transition-all focus:border-[#B6945F] focus:ring-4 focus:ring-[#B6945F]/20"
      />
    </div>
  );
}