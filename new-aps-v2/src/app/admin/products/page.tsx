"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import {
  getProducts,
  deleteProduct,
} from "@/services/product.service";

import ProductSearch from "@/components/admin/products/ProductSearch";
import ProductTable from "@/components/admin/products/ProductTable";
import ProductStats from "@/components/admin/products/ProductStats";
import ProductPagination from "@/components/admin/products/ProductPagination";
import DeleteProductDialog from "@/components/admin/products/DeleteProductDialog";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] = useState<string | null>(
    null
  );

  const [deleting, setDeleting] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [products, search]);

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      await deleteProduct(deleteId);

      setProducts((prev) =>
        prev.filter(
          (product) => product._id !== deleteId
        )
      );

      setDeleteId(null);

      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <h2 className="text-xl font-semibold">
        Loading Products...
      </h2>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <Link
          href="/admin/products/add"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          + Add Product
        </Link>
      </div>

      {/* Statistics */}

      <ProductStats products={products} />

      {/* Search */}

      <ProductSearch
        search={search}
        setSearch={setSearch}
      />

      {/* Table */}

      <ProductTable
        products={paginatedProducts}
        onDelete={setDeleteId}
      />

      {/* Pagination */}

      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      {/* Delete Dialog */}

      <DeleteProductDialog
        open={!!deleteId}
        loading={deleting}
        onClose={() => setDeleteId(null)}
        onDelete={handleDelete}
      />
    </div>
  );
}