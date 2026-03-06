"use client";

import { useShop } from "@/context/ShopContext";
import Image from "next/image";
import { motion } from "framer-motion";

export function ComingSoon() {
  const { comingSoonItems } = useShop();

  if (comingSoonItems.length === 0) {
    return null;
  }

  // Show at most 2 items as requested
  const displayItems = comingSoonItems.slice(0, 2);

  return (
    <section className="py-20 bg-stone-950 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-2 block">
              Teaser
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              COMING SOON
            </h2>
          </div>
          <p className="text-gray-400 max-w-md md:text-right">
            Get a sneak peek at what's dropping next. 
            Exclusive previews for our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-[4/5] md:aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-900"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.releaseDate && (
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold mb-4">
                      DROPPING {new Date(item.releaseDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </span>
                  )}
                  <h3 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
