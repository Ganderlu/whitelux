import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  
  // Basic validation of category
  const validCategories = ["clothes", "caps", "bags"];
  if (!validCategories.includes(category)) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 tracking-tighter capitalize">{category}</h1>
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
}
