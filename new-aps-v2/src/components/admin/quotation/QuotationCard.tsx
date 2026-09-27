"use client";

import { useMemo } from "react";
import {
  FileText,
  Calendar,
  Clock3,
  CreditCard,
  UserCircle2,
} from "lucide-react";

import { QuotationData } from "@/types/quotation";

interface Props {
  quotationData: QuotationData;
  onChange: (
    field: keyof QuotationData,
    value: string
  ) => void;
}

export default function QuotationCard({
  quotationData,
  onChange,
}: Props) {
  const today = new Date();

  const quotationNo = useMemo(() => {
    const yy = today.getFullYear();
    const random = Math.floor(
      1000 + Math.random() * 9000
    );

    return `APS-${yy}-${random}`;
  }, []);

  const quotationDate =
    today.toISOString().split("T")[0];

  const validTill = useMemo(() => {
    const date = new Date();

    const days = parseInt(
      quotationData.validity
    );

    if (!isNaN(days)) {
      date.setDate(date.getDate() + days);
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }, [quotationData.validity]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Quotation Details
      </h2>

      <div className="space-y-6">
        {/* Quotation Number */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Quotation Number
          </label>

          <div className="flex h-14 items-center rounded-xl border bg-slate-50 px-4">
            <FileText
              className="mr-3 text-[#B6945F]"
              size={20}
            />

            <span className="font-semibold">
              {quotationNo}
            </span>
          </div>
        </div>

        {/* Date */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Quotation Date
          </label>

          <div className="relative">
            <Calendar
              className="absolute left-4 top-4 text-[#B6945F]"
              size={20}
            />

            <input
              type="date"
              value={quotationDate}
              disabled
              className="h-14 w-full rounded-xl border bg-slate-50 pl-12 pr-4"
            />
          </div>
        </div>

        {/* Validity */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Validity
          </label>

          <select
            value={quotationData.validity}
            onChange={(e) =>
              onChange(
                "validity",
                e.target.value
              )
            }
            className="h-14 w-full rounded-xl border px-4"
          >
            <option value="7">
              7 Days
            </option>

            <option value="15">
              15 Days
            </option>

            <option value="30">
              30 Days
            </option>

            <option value="45">
              45 Days
            </option>

            <option value="60">
              60 Days
            </option>
          </select>

          <p className="mt-2 text-sm text-slate-500">
            Valid Till :{" "}
            <span className="font-semibold text-slate-900">
              {validTill}
            </span>
          </p>
        </div>

        {/* Delivery */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Expected Delivery
          </label>

          <div className="relative">
            <Clock3
              className="absolute left-4 top-4 text-[#B6945F]"
              size={20}
            />

            <select
              value={
                quotationData.deliveryTime
              }
              onChange={(e) =>
                onChange(
                  "deliveryTime",
                  e.target.value
                )
              }
              className="h-14 w-full rounded-xl border pl-12"
            >
              <option>
                Ready Stock
              </option>

              <option>
                7 Working Days
              </option>

              <option>
                10 Working Days
              </option>

              <option>
                15 Working Days
              </option>

              <option>
                20 Working Days
              </option>

              <option>
                30 Working Days
              </option>
            </select>
          </div>
        </div>

        {/* Payment */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Payment Terms
          </label>

          <div className="relative">
            <CreditCard
              className="absolute left-4 top-4 text-[#B6945F]"
              size={20}
            />

            <select
              value={
                quotationData.paymentTerms
              }
              onChange={(e) =>
                onChange(
                  "paymentTerms",
                  e.target.value
                )
              }
              className="h-14 w-full rounded-xl border pl-12"
            >
              <option>
                100% Advance
              </option>

              <option>
                50% Advance
              </option>

              <option>
                30% Advance
              </option>

              <option>
                Against Delivery
              </option>

              <option>
                Credit 30 Days
              </option>
            </select>
          </div>
        </div>

        {/* Prepared By */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Prepared By
          </label>

          <div className="flex h-14 items-center rounded-xl border bg-slate-50 px-4">
            <UserCircle2
              className="mr-3 text-[#B6945F]"
              size={20}
            />

            <span>Kumar Utsav</span>
          </div>
        </div>
      </div>
    </div>
  );
}