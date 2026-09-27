import PageTitle from "@/components/admin/PageTitle";
import ProductForm from "../../../../components/admin/products/ProductForm";

export default function AddProductPage() {
  return (
    <div>
      <PageTitle
        title="Add Product"
        subtitle="Create a new product for your website."
      />

      <ProductForm />
    </div>
  );
}