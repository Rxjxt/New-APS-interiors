"use client";

interface ProductItem {
  product: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface ProductsTableProps {
  items: ProductItem[];
  setItems: React.Dispatch<React.SetStateAction<ProductItem[]>>;
}

export default function ProductsTable({
  items,
  setItems,
}: ProductsTableProps) {
  const updateItem = (
    index: number,
    field: keyof ProductItem,
    value: any
  ) => {
    const updatedItems = [...items];

    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    updatedItems[index].total =
      updatedItems[index].quantity *
      updatedItems[index].unitPrice;

    setItems(updatedItems);
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Quotation Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Enter quantity and unit price for each selected product.
        </p>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full border-collapse">

          <thead>

            <tr className="border-b bg-gray-50">

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-center">
                Qty
              </th>

              <th className="p-4 text-center">
                Unit Price (₹)
              </th>

              <th className="p-4 text-right">
                Total
              </th>

            </tr>

          </thead>

          <tbody>

            {items.map((item, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="p-4">

                  <div className="font-semibold">
                    {item.product}
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </div>

                </td>

                <td className="p-4">

                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(
                        index,
                        "quantity",
                        Number(e.target.value)
                      )
                    }
                    className="w-24 rounded-lg border px-3 py-2 text-center"
                  />

                </td>

                <td className="p-4">

                  <input
                    type="number"
                    min={0}
                    value={item.unitPrice}
                    onChange={(e) =>
                      updateItem(
                        index,
                        "unitPrice",
                        Number(e.target.value)
                      )
                    }
                    className="w-36 rounded-lg border px-3 py-2 text-center"
                  />

                </td>

                <td className="p-4 text-right font-bold text-green-600">

                  ₹ {item.total.toLocaleString()}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}