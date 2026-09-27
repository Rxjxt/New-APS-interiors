"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import CategoryStats from "@/components/admin/categories/CategoryStats";

import {
  getCategories,
  deleteCategory,
} from "@/services/category.service";

import CategoryTable from "./CategoryTable";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] = useState<string | null>(
    null
  );

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.categories || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [categories, search]);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      await deleteCategory(deleteId);

      setCategories((prev) =>
        prev.filter(
          (category) => category._id !== deleteId
        )
      );

      setDeleteId(null);

      toast.success("Category deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete category.");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <h2 className="text-xl font-semibold">
        Loading Categories...
      </h2>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Categories
        </h1>

        <Link
          href="/admin/categories/add"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
        >
          + Add Category
          <CategoryStats categories={categories} />
        </Link>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search Categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
      />

      {/* Table */}

      <CategoryTable
        categories={filteredCategories}
        onDelete={setDeleteId}
      />

      {/* Delete Dialog */}

      <DeleteCategoryDialog
        open={!!deleteId}
        loading={deleting}
        onClose={() => setDeleteId(null)}
        onDelete={handleDelete}
      />

    </div>
  );
}