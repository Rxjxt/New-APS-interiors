"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

import { getProducts } from "@/services/product.service";
import { Product } from "@/types/product";

interface ProductSearchProps {
  value?: Product | null;
  onChange: (product: Product | null) => void;
}

interface OptionType {
  value: string;
  label: string;
  product: Product;
}

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();

        const data: OptionType[] = res.products.map(
          (product: Product) => ({
            value: product._id,
            label: product.name,
            product,
          })
        );

        setOptions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Select
      isLoading={loading}
      options={options}
      placeholder="Search Product..."
      isClearable
      value={
        value
          ? {
              value: value._id,
              label: value.name,
              product: value,
            }
          : null
      }
      onChange={(selected) =>
        onChange(selected ? selected.product : null)
      }
      className="w-full"
      styles={{
        control: (base) => ({
          ...base,
          minHeight: 48,
          borderRadius: 12,
        }),
      }}
    />
  );
}