"use client";

import { useShop } from "@/context/ShopContext";
import { ShoppingBag, Clock, TrendingUp, Users } from "lucide-react";

export default function AdminDashboard() {
  const { products, comingSoonItems } = useShop();

  const stats = [
    {
      title: "Total Products",
      value: products.length,
      icon: ShoppingBag,
      color: "bg-blue-500",
    },
    {
      title: "Coming Soon Items",
      value: comingSoonItems.length,
      icon: Clock,
      color: "bg-purple-500",
    },
    {
      title: "Total Categories",
      value: new Set(products.map(p => p.category)).size,
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      title: "Active Users",
      value: "1.2k",
      icon: Users,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.color} text-white`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Recent Products</h2>
          <div className="space-y-4">
            {products.slice(-5).reverse().map((product) => (
              <div key={product.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-gray-100 rounded-md overflow-hidden relative">
                    {/* Image placeholder */}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                  </div>
                </div>
                <span className="text-sm font-bold">${product.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
          <div className="space-y-4">
            {comingSoonItems.length > 0 ? (
              comingSoonItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-2 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.releaseDate || "Date TBA"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500 italic">No upcoming items scheduled.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
