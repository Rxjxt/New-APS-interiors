"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/services/dashboard.service";
import DashboardCharts from "./components/DashboardCharts";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);

  const [latestProducts, setLatestProducts] =
    useState<any[]>([]);

  const [latestQuotations, setLatestQuotations] =
    useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getDashboardStats();

        setStats(data.stats);

        setLatestProducts(
          data.latestProducts || []
        );

        setLatestQuotations(
          data.latestQuotations || []
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <h2 className="text-xl">
        Loading...
      </h2>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      {/* Main Stats */}

<div className="grid grid-cols-4 gap-6">

  <Card
    title="Products"
    value={stats.totalProducts}
  />

  <Card
    title="Categories"
    value={stats.totalCategories}
  />

  <Card
    title="Featured"
    value={stats.featuredProducts}
  />

  <Card
    title="Quotations"
    value={stats.totalQuotations}
  />

</div>

{/* Visitor Stats */}

<div className="grid grid-cols-4 gap-6">

  <Card
    title="Visitors Today"
    value={stats.visitorsToday}
  />

  <Card
    title="This Week"
    value={stats.visitorsThisWeek}
  />

  <Card
    title="This Month"
    value={stats.visitorsThisMonth}
  />

  <Card
    title="Total Visitors"
    value={stats.totalVisitors}
  />

</div>

      {/* Quotation Status */}

      <div className="grid grid-cols-5 gap-6">

        <Card
          title="New"
          value={stats.newQuotations}
        />

        <Card
          title="Contacted"
          value={stats.contactedQuotations}
        />

        <Card
          title="Quoted"
          value={stats.quotedQuotations}
        />

        <Card
          title="Won"
          value={stats.wonQuotations}
        />

        <Card
          title="Lost"
          value={stats.lostQuotations}
        />

      </div>
<DashboardCharts
  visitorsToday={stats.visitorsToday}
  visitorsWeek={stats.visitorsThisWeek}
  visitorsMonth={stats.visitorsThisMonth}
  totalVisitors={stats.totalVisitors}
  quotationStats={{
    new: stats.newQuotations,
    contacted: stats.contactedQuotations,
    quoted: stats.quotedQuotations,
    won: stats.wonQuotations,
    lost: stats.lostQuotations,
  }}
/>
      {/* Latest */}

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-bold">
            Latest Products
          </h2>

          <div className="space-y-4">

            {latestProducts.map((product) => (

              <div
                key={product._id}
                className="flex items-center gap-4 border-b pb-3"
              >

                <img
                  src={
                    product.images?.[0] ||
                    "https://dummyimage.com/60x60"
                  }
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div>

                  <p className="font-semibold">
                    {product.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {product.category?.name}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="mb-4 text-xl font-bold">
            Latest Quotations
          </h2>

          <div className="space-y-4">

            {latestQuotations.map(
              (quotation) => (

                <div
                  key={quotation._id}
                  className="border-b pb-3"
                >

                  <p className="font-semibold">
                    {quotation.companyName}
                  </p>

                  <p className="text-sm text-gray-500">
                    {quotation.contactPerson}
                  </p>

                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {quotation.status}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h3 className="text-gray-500">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold">
        {value}
      </p>

    </div>
  );
}