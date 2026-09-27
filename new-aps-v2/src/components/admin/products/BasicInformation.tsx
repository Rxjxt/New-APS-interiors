"use client";

interface BasicInformationProps {
  formData: any;
  setFormData: any;
  categories: any[];
}

export default function BasicInformation({
  formData,
  setFormData,
  categories,
}: BasicInformationProps) {
  return (
    <div className="bg-white rounded-xl shadow p-8 space-y-6">

      <h2 className="text-2xl font-semibold">
        Basic Information
      </h2>

      {/* Product Name */}
      <div>
        <label className="block mb-2 font-medium">
          Product Name
        </label>

        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          placeholder="Enter Product Name"
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-2 font-medium">
          Category
        </label>

        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value,
            })
          }
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Short Description */}
      <div>
        <label className="block mb-2 font-medium">
          Short Description
        </label>

        <textarea
          rows={3}
          value={formData.shortDescription}
          onChange={(e) =>
            setFormData({
              ...formData,
              shortDescription: e.target.value,
            })
          }
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows={6}
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full border rounded-lg px-4 py-3"
        />
      </div>
    </div>
  );
}