"use client";

import { useState } from "react";
import { useShop, ComingSoonItem } from "@/context/ShopContext";
import { Trash2, Plus } from "lucide-react";
import Image from "next/image";

export default function AdminComingSoonPage() {
  const { comingSoonItems, addComingSoonItem, removeComingSoonItem } = useShop();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    releaseDate: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.image) return;
    
    addComingSoonItem(formData);
    setFormData({ title: "", image: "", releaseDate: "", description: "" });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Coming Soon Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Add New Item Form */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Plus className="h-5 w-5" /> Add New Item
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Item Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                placeholder="e.g. Summer Collection Drop 1"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL (Unsplash)
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                placeholder="https://images.unsplash.com/..."
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Use images from images.unsplash.com or local path
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Release Date (Optional)
              </label>
              <input
                type="date"
                value={formData.releaseDate}
                onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none h-24 resize-none"
                placeholder="Brief description..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Add Item
            </button>
          </form>
        </div>

        {/* Existing Items List */}
        <div>
          <h2 className="text-xl font-bold mb-6">Current Items ({comingSoonItems.length})</h2>
          
          <div className="space-y-4">
            {comingSoonItems.length === 0 ? (
              <p className="text-gray-500 italic">No coming soon items yet.</p>
            ) : (
              comingSoonItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm items-center">
                  <div className="relative h-20 w-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-bold">{item.title}</h3>
                    {item.releaseDate && (
                      <p className="text-xs text-gray-500">Release: {item.releaseDate}</p>
                    )}
                    <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                  </div>
                  
                  <button
                    onClick={() => removeComingSoonItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Delete Item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
