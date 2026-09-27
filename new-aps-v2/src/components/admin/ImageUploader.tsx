"use client";

import { useRef } from "react";

interface ImageUploaderProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export default function ImageUploader({
  images,
  setImages,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    setImages(Array.from(e.target.files));
  };

  return (
    <div className="space-y-4">

      <label className="block font-medium">
        Product Images
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className="
          cursor-pointer
          border-2
          border-dashed
          border-gray-300
          rounded-2xl
          p-10
          text-center
          hover:border-blue-500
          hover:bg-blue-50
          transition
        "
      >
        <div className="text-5xl mb-4">
            📷
        </div>

        <h3 className="font-semibold text-lg">
          Click to Upload Images
        </h3>

        <p className="text-gray-500 mt-2">
          JPG • PNG • WEBP
        </p>

        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          onChange={handleSelect}
        />
      </div>

      {images.length > 0 && (

        <div className="space-y-2">

          <h4 className="font-medium">
            Selected Images
          </h4>

          {images.map((image, index) => (

            <div
              key={index}
              className="
                flex
                justify-between
                items-center
                rounded-xl
                border
                p-3
              "
            >
              <span>{image.name}</span>

              <button
                type="button"
                className="text-red-500"
                onClick={() =>
                  setImages(
                    images.filter((_, i) => i !== index)
                  )
                }
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}