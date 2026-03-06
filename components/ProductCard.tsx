"use strict";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4 rounded-md">
        {product.isExclusive && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 z-10 font-bold uppercase tracking-wider">
            Exclusive
          </span>
        )}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-medium text-lg mb-1 group-hover:underline">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </Link>
  );
}
