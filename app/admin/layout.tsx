"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Header */}
      <div className="md:hidden flex items-center p-4 bg-white border-b border-gray-200 sticky top-0 z-30">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg mr-4"
        >
          <Menu className="h-6 w-6" />
        </button>
        <span className="font-bold text-lg">Admin Panel</span>
      </div>

      <main className="md:ml-64 p-4 md:p-8 min-h-screen transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
