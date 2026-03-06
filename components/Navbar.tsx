"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User, Menu, X, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { cart, wishlist } = useShop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Don't show Navbar on Admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tighter text-black z-50 relative"
              >
                WHITELUX
              </Link>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                <Link
                  href="/shop"
                  className="hover:text-black transition-colors"
                >
                  Shop All
                </Link>
                <Link
                  href="/shop/clothes"
                  className="hover:text-black transition-colors"
                >
                  Clothes
                </Link>
                <Link
                  href="/shop/caps"
                  className="hover:text-black transition-colors"
                >
                  Caps
                </Link>
                <Link
                  href="/shop/bags"
                  className="hover:text-black transition-colors"
                >
                  Bags!
                </Link>
                <Link
                  href="/exclusive"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Exclusive
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/wishlist"
                className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center text-[10px] font-bold text-white rounded-full bg-black">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/admin"
                className="hidden md:flex p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>
              <Link
                href="/cart"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center text-[10px] font-bold text-white rounded-full bg-black">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors z-50 relative"
                aria-label="Menu"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-8 text-2xl font-medium">
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link href="/shop" className="hover:text-gray-600">
                Shop All
              </Link>
              <Link href="/shop/clothes" className="hover:text-gray-600">
                Clothes
              </Link>
              <Link href="/shop/caps" className="hover:text-gray-600">
                Caps
              </Link>
              <Link href="/shop/bags" className="hover:text-gray-600">
                Bags
              </Link>
              <Link
                href="/exclusive"
                className="text-amber-600 hover:text-amber-700"
              >
                Exclusive Drops
              </Link>

              <div className="border-t border-gray-100 my-4"></div>

              <div className="flex flex-col gap-4 text-lg text-gray-600">
                <Link href="/wishlist" className="flex items-center gap-3">
                  <Heart className="h-5 w-5" /> Wishlist ({wishlistCount})
                </Link>
                <Link href="/admin" className="flex items-center gap-3">
                  <User className="h-5 w-5" /> My Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
