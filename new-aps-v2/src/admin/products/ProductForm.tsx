"use client";

export default function ProductForm() {
  return (
    <div className="bg-white rounded-xl shadow p-8">
      <form className="space-y-6">

        <div>
          <label className="block font-medium mb-2">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Category
          </label>

          <select className="w-full border rounded-lg px-4 py-3">
            <option>Select Category</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Short Description
          </label>

          <textarea
            rows={3}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Description
          </label>

          <textarea
            rows={5}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Specifications
          </label>

          <textarea
            rows={4}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Price
          </label>

          <input
            type="number"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Product Images
          </label>

          <input
            type="file"
            multiple
            className="w-full"
          />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" />
          <label>Featured Product</label>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" defaultChecked />
          <label>Active Product</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Product
        </button>

      </form>
    </div>
  );
}