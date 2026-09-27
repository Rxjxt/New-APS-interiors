"use client";

import { useRef } from "react";
import { FileText, Upload, X } from "lucide-react";

interface FileUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export default function FileUploader({
  file,
  setFile,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">

      <label className="block text-sm font-semibold text-gray-700">
        Brochure (PDF)
      </label>

      {/* No file selected */}
      {!file && (
        <label
          htmlFor="pdf-upload"
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 transition hover:border-blue-500 hover:bg-blue-50"
        >
          <Upload className="mb-3 h-10 w-10 text-blue-600" />

          <p className="font-semibold text-gray-700">
            Click to Upload PDF
          </p>

          <p className="mt-1 text-sm text-gray-500">
            PDF files only
          </p>

          <input
            id="pdf-upload"
            ref={inputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      )}

      {/* File Selected */}
      {file && (
        <div className="flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-red-100 p-3">
              <FileText className="h-6 w-6 text-red-600" />
            </div>

            <div>
              <p className="font-semibold">
                {file.name}
              </p>

              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={removeFile}
            className="rounded-xl bg-red-500 p-3 text-white transition hover:bg-red-600"
          >
            <X size={18} />
          </button>

        </div>
      )}

    </div>
  );
}