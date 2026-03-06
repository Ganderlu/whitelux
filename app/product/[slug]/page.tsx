"use client";

import { useShop } from "@/context/ShopContext";
import { notFound, useParams } from "next/navigation";
import { ShoppingBag, Star } from "lucide-react";
import { ProductGallery } from "@/components/ProductGallery";
import { useEffect, useState } from "react";
import { Product } from "@/lib/products";

export default function ProductPage() {
  const { slug } = useParams();
  const { products, addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useShop();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (products.length > 0 && slug) {
        const found = products.find((p) => p.slug === slug);
        setProduct(found || null);
        setIsLoading(false);
    }
  }, [products, slug]);

  const handleAddToCart = () => {
    if (product) {
      setIsAdding(true);
      addToCart(product);
      setTimeout(() => setIsAdding(false), 500);
    }
  };

  const toggleWishlist = () => {
    if (!product) return;
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!product) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600">The product you are looking for does not exist.</p>
        </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            {product.isExclusive && (
              <span className="inline-block bg-black text-white text-xs px-2 py-1 mb-2 font-bold uppercase tracking-wider">
                Exclusive Drop
              </span>
            )}
            <h1 className="text-4xl font-bold tracking-tighter mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-gray-900">
              ${product.price}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex flex-col gap-4 mt-4">
            <button 
              onClick={handleAddToCart}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all w-full md:w-auto ${
                isAdding 
                  ? "bg-green-600 text-white" 
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              {isAdding ? "Added to Cart" : "Add to Cart"}
            </button>
            <button 
              onClick={toggleWishlist}
              className={`flex items-center justify-center gap-2 border px-8 py-4 rounded-full font-bold transition-colors w-full md:w-auto ${
                isWishlisted 
                  ? "bg-gray-100 border-gray-300 text-black" 
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Star className={`h-5 w-5 ${isWishlisted ? "fill-black" : ""}`} />
              {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6 space-y-2 text-sm text-gray-500">
            <p>Free shipping on orders over $200</p>
            <p>30-day return policy</p>
            <p>Authenticity guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
