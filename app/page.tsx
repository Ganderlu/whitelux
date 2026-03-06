import { Hero } from "@/components/Hero";
import { ComingSoon } from "@/components/ComingSoon";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />

      {/* Categories Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter">
            Shop by Category
          </h2>
          <Link
            href="/shop"
            className="group flex items-center text-sm font-medium hover:underline"
          >
            View All{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Clothes",
              href: "/shop/clothes",
              image: "/images/white24.jpeg",
            },
            {
              name: "Caps",
              href: "/shop/caps",
              image: "/images/white27.jpeg",
            },
            {
              name: "Bags",
              href: "/shop/bags",
              image: "/images/white28.jpeg",
            },
          ].map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-96 overflow-hidden rounded-lg flex items-end p-6"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex w-full justify-between items-center">
                <h3 className="text-2xl font-bold tracking-tighter text-white">
                  {category.name}
                </h3>
                <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ComingSoon />

      {/* Exclusive Feature Teaser */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            EXCLUSIVE DROPS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Members get early access to limited edition pieces. Don't miss out
            on the next drop.
          </p>
          <Link
            href="/exclusive"
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
          >
            Join the List
          </Link>
        </div>
      </section>
    </div>
  );
}
