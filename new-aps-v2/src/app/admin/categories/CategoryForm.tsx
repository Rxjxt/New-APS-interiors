"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  createCategory,
  getCategoryById,
  updateCategory,
} from "@/services/category.service";

import AdminInput from "@/components/admin/AdminInput";
import AdminTextarea from "@/components/admin/AdminTextarea";
import AdminCheckbox from "@/components/admin/AdminCheckbox";
import FormCard from "@/components/admin/FormCard";
import ImageUploader from "@/components/admin/ImageUploader";

interface CategoryFormProps {
  categoryId?: string;
}

export default function CategoryForm({
  categoryId,
}: CategoryFormProps) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [loadingCategory, setLoadingCategory] =
    useState(false);

  const [name, setName] = useState("");

  const [description, setDescription] =
    useState("");

  const [isActive, setIsActive] =
    useState(true);

  const [images, setImages] =
    useState<File[]>([]);

  useEffect(() => {

    if (!categoryId) return;

    const fetchCategory = async () => {

      try {

        setLoadingCategory(true);

        const data =
          await getCategoryById(categoryId);

        const category = data.category;

        setName(category.name);

        setDescription(
          category.description || ""
        );

        setIsActive(category.isActive);

      } catch (error) {

        console.error(error);

      } finally {

        setLoadingCategory(false);

      }
    };

    fetchCategory();

  }, [categoryId]);

  if (loadingCategory) {
    return (
      <h2 className="text-xl font-semibold">
        Loading Category...
      </h2>
    );
  }
    const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);

      formData.append(
        "description",
        description
      );

      formData.append(
        "isActive",
        String(isActive)
      );

      images.forEach((image) => {
        formData.append(
          "image",
          image
        );
      });
      console.log("categoryId:", categoryId);
      if (categoryId) {
        await updateCategory(
          categoryId,
          formData
        );
      } else {
        await createCategory(
          formData
        );
      }

      alert(
        categoryId
          ? "Category Updated Successfully!"
          : "Category Created Successfully!"
      );

      router.push(
        "/admin/categories"
      );

    } catch (error) {

      console.error(error);

      alert(
        categoryId
          ? "Failed to update category."
          : "Failed to create category."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      {/* ================= BASIC INFORMATION ================= */}

      <FormCard title="Basic Information">

        <div className="space-y-6">

          <AdminInput
            label="Category Name"
            placeholder="Enter category name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <AdminTextarea
            label="Description"
            rows={5}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

        </div>

      </FormCard>
            {/* ================= IMAGE ================= */}

      <FormCard title="Category Image">

        <ImageUploader
          images={images}
          setImages={setImages}
        />

      </FormCard>

      {/* ================= SETTINGS ================= */}

      <FormCard title="Settings">

        <AdminCheckbox
          label="Active Category"
          checked={isActive}
          onChange={setIsActive}
        />

      </FormCard>

      {/* ================= SUBMIT ================= */}

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? categoryId
              ? "Updating..."
              : "Saving..."
            : categoryId
            ? "Update Category"
            : "Save Category"}
        </button>

      </div>

    </form>
  );
}