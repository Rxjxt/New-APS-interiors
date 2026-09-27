"use client";

import { use } from "react";
import CategoryForm from "../../CategoryForm";

interface EditCategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditCategoryPage({
  params,
}: EditCategoryPageProps) {
  const { id } = use(params);

  return (
    <CategoryForm
      categoryId={id}
    />
  );
}