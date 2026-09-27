"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AdminGuard from "@/components/admin/AdminGuard";

import LogoutModal from "@/components/admin/LogoutModal";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [logoutOpen, setLogoutOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    router.replace("/admin/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      name: "Products",
      href: "/admin/products",
    },
    {
      name: "Categories",
      href: "/admin/categories",
    },
    {
      name: "Quotations",
      href: "/admin/quotations",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="flex w-64 flex-col bg-slate-900 text-white">
          <div className="p-6">
            <h1 className="mb-10 text-2xl font-bold">
              NEW APS Admin
            </h1>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 transition ${
                    pathname.startsWith(item.href)
                      ? "bg-blue-600 text-white"
                      : "hover:bg-slate-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t border-slate-700 p-6">
            <button
              onClick={() => setLogoutOpen(true)}
              className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              🚪 Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8">
  {pathname === "/admin/login" ? (
    children
  ) : (
    <AdminGuard>{children}</AdminGuard>
  )}
</main>
      </div>

      <LogoutModal
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={logout}
      />
    </>
  );
}