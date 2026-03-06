"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { products as initialProducts, Product } from "@/lib/products";

export interface ComingSoonItem {
  id: string;
  title: string;
  image: string;
  releaseDate: string;
  description: string;
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
}

interface ShopContextType {
  comingSoonItems: ComingSoonItem[];
  addComingSoonItem: (item: Omit<ComingSoonItem, "id">) => void;
  removeComingSoonItem: (id: string) => void;
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (cartId: string) => void;
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [comingSoonItems, setComingSoonItems] = useState<ComingSoonItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    // Coming Soon Items Logic
    const savedComingSoon = localStorage.getItem("whitelux_coming_soon");
    const dummy: ComingSoonItem[] = [
      {
        id: "demo-1",
        title: "Velvet Cap Set",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop",
        releaseDate: "2026-04-01",
        description: "Coming next month. Stay tuned.",
      },
      {
        id: "demo-2",
        title: "Summer Breeze Collection",
        image:
          "https://images.unsplash.com/photo-1529139574466-a302d2052574?q=80&w=1020&auto=format&fit=crop",
        releaseDate: "2026-05-15",
        description: "Lightweight fabrics for the perfect summer look.",
      },
    ];

    if (savedComingSoon) {
      try {
        const parsed = JSON.parse(savedComingSoon);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setComingSoonItems(parsed);
        } else {
          setComingSoonItems(dummy);
        }
      } catch (e) {
        console.error("Failed to parse coming soon items", e);
        setComingSoonItems(dummy);
      }
    } else {
      setComingSoonItems(dummy);
      localStorage.setItem("whitelux_coming_soon", JSON.stringify(dummy));
    }

    // Products Logic
    const savedProducts = localStorage.getItem("whitelux_products");
    if (savedProducts) {
      try {
        setProducts(JSON.parse(savedProducts));
      } catch (e) {
        console.error("Failed to parse products", e);
        setProducts(initialProducts);
      }
    } else {
      setProducts(initialProducts);
      localStorage.setItem(
        "whitelux_products",
        JSON.stringify(initialProducts),
      );
    }

    // Cart Logic
    const savedCart = localStorage.getItem("whitelux_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }

    // Wishlist Logic
    const savedWishlist = localStorage.getItem("whitelux_wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem(
      "whitelux_coming_soon",
      JSON.stringify(comingSoonItems),
    );
  }, [comingSoonItems]);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("whitelux_products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    localStorage.setItem("whitelux_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("whitelux_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addComingSoonItem = (item: Omit<ComingSoonItem, "id">) => {
    const newItem = { ...item, id: crypto.randomUUID() };
    setComingSoonItems((prev) => [...prev, newItem]);
  };

  const removeComingSoonItem = (id: string) => {
    setComingSoonItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prev,
        { ...product, cartId: crypto.randomUUID(), quantity: 1 },
      ];
    });
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <ShopContext.Provider
      value={{
        comingSoonItems,
        addComingSoonItem,
        removeComingSoonItem,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}
