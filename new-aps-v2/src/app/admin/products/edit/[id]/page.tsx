"use client";

import { useParams } from "next/navigation";

import PageTitle from "@/components/admin/PageTitle";
import ProductForm from "@/components/admin/products/ProductForm";

export default function EditProductPage() {
  const params = useParams();

  return (
    <div>
      <PageTitle
        title="Edit Product"
        subtitle="Update product information."
      />

      <ProductForm
        productId={params.id as string}
      />
    </div>
  );
}