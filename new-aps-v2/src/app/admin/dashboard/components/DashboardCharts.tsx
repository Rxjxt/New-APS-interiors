"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

type Props = {
  visitorsToday: number;
  visitorsWeek: number;
  visitorsMonth: number;
  totalVisitors: number;

  quotationStats: {
    new: number;
    contacted: number;
    quoted: number;
    won: number;
    lost: number;
  };
};

export default function DashboardCharts({
  visitorsToday,
  visitorsWeek,
  visitorsMonth,
  totalVisitors,
  quotationStats,
}: Props) {
  const visitorData = [
    {
      name: "Today",
      visitors: visitorsToday,
    },
    {
      name: "Week",
      visitors: visitorsWeek,
    },
    {
      name: "Month",
      visitors: visitorsMonth,
    },
    {
      name: "Total",
      visitors: totalVisitors,
    },
  ];

  const quotationData = [
    {
      name: "New",
      value: quotationStats.new,
    },
    {
      name: "Contacted",
      value: quotationStats.contacted,
    },
    {
      name: "Quoted",
      value: quotationStats.quoted,
    },
    {
      name: "Won",
      value: quotationStats.won,
    },
    {
      name: "Lost",
      value: quotationStats.lost,
    },
  ];

  const COLORS = [
    "#3B82F6",
    "#F59E0B",
    "#8B5CF6",
    "#10B981",
    "#EF4444",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Visitors */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-bold">
          Visitors Overview
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={visitorData}>
            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#2563EB"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Quotation Status */}

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-6 text-xl font-bold">
          Quotation Status
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>

            <Pie
              data={quotationData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {quotationData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index %
                        COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}