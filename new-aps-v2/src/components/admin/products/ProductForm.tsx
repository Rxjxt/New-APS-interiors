"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminInput from "@/components/admin/AdminInput";
import AdminTextarea from "@/components/admin/AdminTextarea";
import FormCard from "@/components/admin/FormCard";
import ImageUploader from "@/components/admin/ImageUploader";
import FileUploader from "@/components/admin/FileUploader";
import AdminCheckbox from "@/components/admin/AdminCheckbox";
import { toast } from "sonner";

import {
  createProduct,
  updateProduct,
  getProductById,
} from "@/services/product.service";

import { getCategories } from "@/services/category.service";

interface Category {
  _id: string;
  name: string;
}

interface ProductFormProps {
  productId?: string;
}

export default function ProductForm({
  productId,
}: ProductFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [loadingProduct, setLoadingProduct] =
    useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] =
    useState(true);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [shortDescription, setShortDescription] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [specifications, setSpecifications] =
    useState("");

  const [price, setPrice] = useState("");
  const [gst, setGst] = useState("18");

const [unit, setUnit] = useState("Nos");

  const [features, setFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] =
    useState("");

  const [featured, setFeatured] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const [images, setImages] = useState<File[]>([]);
  const [brochure, setBrochure] =
    useState<File | null>(null);

  // ===========================
  // Load Categories
  // ===========================

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.categories || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingCategories(false);
      }
    };

    loadCategories();
  }, []);

  // ===========================
  // Load Product (Edit)
  // ===========================

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoadingProduct(true);

        const data = await getProductById(productId);

        const product = data.product;

        setName(product.name);
        setCategory(product.category._id);
        setShortDescription(product.shortDescription);
        setDescription(product.description);
        setSpecifications(product.specifications);
        setFeatures(product.features || []);
        setFeatured(product.featured);
        setPrice(String(product.price || 0));
setGst(String(product.gst || 18));
setUnit(product.unit || "Nos");
        setIsActive(product.isActive);

      } catch (error) {
        console.error(error);
      } finally {
        setLoadingProduct(false);
      }
    };

    fetchProduct();

  }, [productId]);

  // ===========================
  // Loading Product
  // ===========================

  if (loadingProduct) {
    return (
      <h2 className="text-xl font-semibold">
        Loading Product...
      </h2>
    );
  }

  // ===========================
  // Features
  // ===========================

  const addFeature = () => {
    if (!featureInput.trim()) return;

    setFeatures([
      ...features,
      featureInput.trim(),
    ]);

    setFeatureInput("");
  };

  const removeFeature = (index: number) => {
    setFeatures(
      features.filter((_, i) => i !== index)
    );
  };
    // ===========================
  // Submit
  // ===========================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("category", category);
      formData.append(
        "shortDescription",
        shortDescription
      );
      formData.append(
        "description",
        description
      );
      formData.append(
        "specifications",
        specifications
      );
      formData.append("price", price);
      formData.append("gst", gst);
formData.append("unit", unit);

      formData.append(
        "featured",
        String(featured)
      );

      formData.append(
        "isActive",
        String(isActive)
      );

      features.forEach((feature) => {
        formData.append("features", feature);
      });

      images.forEach((image) => {
        formData.append("images", image);
      });

      if (brochure) {
        formData.append("brochure", brochure);
      }

      // Create OR Update

      if (productId) {
        await updateProduct(productId, formData);

        toast.success("Product updated successfully!");
      } else {
        await createProduct(formData);

        toast.success("Product created successfully!");
      }

      router.push("/admin/products");

    } catch (error) {
      console.error(error);

      toast.error(
  productId
    ? "Failed to update product."
    : "Failed to create product."
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
            label="Product Name"
            placeholder="Enter product name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            >
              <option value="">
                {loadingCategories
                  ? "Loading Categories..."
                  : "Select Category"}
              </option>

              {categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat._id}
                >
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <AdminTextarea
            label="Short Description"
            rows={3}
            value={shortDescription}
            onChange={(e) =>
              setShortDescription(
                e.target.value
              )
            }
          />

          <AdminTextarea
            label="Description"
            rows={6}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

        </div>
      </FormCard>

      {/* ================= FEATURES ================= */}

      <FormCard title="Features">

        <div className="flex gap-3">

          <input
            value={featureInput}
            onChange={(e) =>
              setFeatureInput(
                e.target.value
              )
            }
            placeholder="Enter feature"
            className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />

          <button
            type="button"
            onClick={addFeature}
            className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700 transition"
          >
            Add
          </button>

        </div>

        <div className="mt-6 space-y-3">

          {features.length === 0 && (
            <p className="text-gray-400">
              No features added yet.
            </p>
          )}

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3"
            >
              <span>{feature}</span>

              <button
                type="button"
                onClick={() =>
                  removeFeature(index)
                }
                className="font-bold text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))}

        </div>

      </FormCard>
            {/* ================= ADDITIONAL INFORMATION ================= */}

     <div className="grid gap-6 md:grid-cols-3">

  <AdminInput
    label="Price"
    type="number"
    placeholder="Enter price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />

  <div>
    <label className="mb-2 block font-medium">
      GST
    </label>

    <select
      value={gst}
      onChange={(e) => setGst(e.target.value)}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    >
      <option value="0">0%</option>
      <option value="5">5%</option>
      <option value="12">12%</option>
      <option value="18">18%</option>
      <option value="28">28%</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block font-medium">
      Unit
    </label>

    <select
      value={unit}
      onChange={(e) => setUnit(e.target.value)}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    >
      <option value="Nos">Nos</option>
      <option value="Piece">Piece</option>
      <option value="Set">Set</option>
      <option value="Sq. Ft.">Sq. Ft.</option>
      <option value="Meter">Meter</option>
    </select>
  </div>

</div>
      {/* ================= MEDIA ================= */}

      <FormCard title="Media">

        <div className="space-y-8">

          <ImageUploader
            images={images}
            setImages={setImages}
          />

          <FileUploader
            file={brochure}
            setFile={setBrochure}
          />

        </div>

      </FormCard>

      {/* ================= SETTINGS ================= */}

      <FormCard title="Settings">

        <div className="space-y-5">

          <AdminCheckbox
            label="Featured Product"
            checked={featured}
            onChange={setFeatured}
          />

          <AdminCheckbox
            label="Active Product"
            checked={isActive}
            onChange={setIsActive}
          />

        </div>

      </FormCard>

      {/* ================= SUBMIT ================= */}

      <div className="flex justify-end">

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? productId
              ? "Updating..."
              : "Saving..."
            : productId
            ? "Update Product"
            : "Save Product"}
        </button>

      </div>

    </form>
  );
}