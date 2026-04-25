"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  // Don't show Footer on Admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">WHITELUX</h3>
            <p className="text-gray-400 text-sm">
              Elevating standard wear to luxury. Designed for the modern
              individual.
            </p>
            <div className="pt-2">
              <h4 className="font-semibold mb-3">Follow</h4>
              <div className="flex items-center gap-4 text-gray-400">
                <a
                  href="https://web.facebook.com/profile.php?id=61563710020876"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/whitelux_wears"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="X"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@whiteoriginal0"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.62 5.02c.6.58 1.28.98 2.05 1.2v2.14c-1.35-.05-2.6-.5-3.68-1.33v7.16a5.3 5.3 0 1 1-5.3-5.3c.23 0 .46.02.69.05v2.32a2.95 2.95 0 1 0 2.26 2.88V3h2.18c.07.74.41 1.43.8 2.02Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/whitelux_original/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/shop/clothes"
                  className="hover:text-white transition-colors"
                >
                  Clothes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/caps"
                  className="hover:text-white transition-colors"
                >
                  Caps
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/bags"
                  className="hover:text-white transition-colors"
                >
                  Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/exclusive"
                  className="hover:text-white transition-colors"
                >
                  Exclusive Drops
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for exclusive access.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 border-none text-sm px-4 py-2 rounded-md flex-1 focus:ring-1 focus:ring-white"
              />
              <button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} WhiteLux. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
