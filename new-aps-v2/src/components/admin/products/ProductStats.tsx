"use client";

interface ProductStatsProps {
  products: any[];
}

export default function ProductStats({
  products,
}: ProductStatsProps) {
  const totalProducts = products.length;

  const featuredProducts = products.filter(
    (product) => product.featured
  ).length;

  const activeProducts = products.filter(
    (product) => product.isActive
  ).length;

  const inactiveProducts =
    totalProducts - activeProducts;

  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      color: "bg-blue-100 text-blue-700",
      icon: "📦",
    },
    {
      title: "Featured Products",
      value: featuredProducts,
      color: "bg-yellow-100 text-yellow-700",
      icon: "⭐",
    },
    {
      title: "Active Products",
      value: activeProducts,
      color: "bg-green-100 text-green-700",
      icon: "🟢",
    },
    {
      title: "Inactive Products",
      value: inactiveProducts,
      color: "bg-red-100 text-red-700",
      icon: "🔴",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white p-6 shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {card.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {card.value}
              </h2>
            </div>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${card.color}`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}