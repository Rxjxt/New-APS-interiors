"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin/login");
    }
  }, [router]);

  if (
    typeof window !== "undefined" &&
    !localStorage.getItem("token")
  ) {
    return null;
  }

  return <>{children}</>;
}