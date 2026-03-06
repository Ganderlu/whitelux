"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ExclusiveAccess() {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === "WHITELUXVIP") {
      setUnlocked(true);
      setError("");
    } else {
      setError("Invalid access code.");
    }
  };

  if (unlocked) {
    const exclusiveProducts = products.filter((p) => p.isExclusive);
    
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="container mx-auto px-4 md:px-6 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-amber-600">VIP ACCESS GRANTED</h1>
          <p className="text-gray-600">Welcome to the inner circle.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {exclusiveProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-20 flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md p-8 border border-gray-200 rounded-xl shadow-lg bg-white"
      >
        <h1 className="text-2xl font-bold text-center mb-6 tracking-tight">EXCLUSIVE ACCESS</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Enter your member code to unlock limited drops.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <button 
            type="submit" 
            className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            UNLOCK
          </button>
        </form>
        
        <p className="text-xs text-center text-gray-400 mt-6">
          Hint: Try "WHITELUXVIP"
        </p>
      </motion.div>
    </div>
  );
}
