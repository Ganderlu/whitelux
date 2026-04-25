export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: "clothes" | "caps" | "bags";
  description: string;
  images: string[];
  isExclusive?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Polo W Original",
    slug: "polo-w-original",
    price: 60,
    category: "clothes",
    description:
      "Polo shirt with embroidered WhiteLux logo. Perfect for casual wear.",
    images: ["/images/white26.jpeg"],
  },
  {
    id: "2",
    name: "Essential Polo",
    slug: "essential-polo",
    price: 45,
    category: "clothes",
    description:
      "Premium pima essential-polo. Breathable, durable, and perfectly cut.",
    images: ["/images/white25.jpeg"],
  },
  {
    id: "3",
    name: "Structured Cap",
    slug: "structured-cap",
    price: 35,
    category: "caps",
    description:
      "Structured cap with metal buckle adjustment. Minimalist branding.",
    images: ["/images/white27.jpeg"],
  },
  {
    id: "4",
    name: "Whitelux Bag",
    slug: "whitelux-bag",
    price: 20,
    category: "bags",
    description:
      "Full-white Whitelux bag. Compact yet spacious enough for essentials.",
    images: ["/images/white28.jpeg"],
  },
  {
    id: "5",
    name: "Eagle Polo",
    slug: "eagle-polo",
    price: 70,
    category: "clothes",
    description:
      "Exclusive polo shirt with satin lining and custom hardware. Only 50 pieces made.",
    images: ["/images/white24.jpeg"],
    isExclusive: true,
  },
  {
    id: "6",
    name: "WL Tote Bag",
    slug: "wl-tote bag",
    price: 20,
    category: "bags",
    description:
      "WL Tote bag with reinforced handles. Perfect for daily carry.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1892&auto=format&fit=crop",
    ],
  },
  {
    id: "7",
    name: "Skull Polo",
    slug: "skull-polo",
    price: 80,
    category: "clothes",
    description: "Skull design polo shirt with a modern fit.",
    images: ["/images/white21.jpeg"],
  },
  {
    id: "8",
    name: "Polo W Original",
    slug: "polo-w-original",
    price: 60,
    category: "clothes",
    description: "Polo shirt with embroidered WhiteLux logo.",
    images: ["/images/white26.jpeg"],
  },
  {
    id: "9",
    name: "Skull Polo",
    slug: "skull-polo",
    price: 80,
    category: "clothes",
    description: "Skull design polo in neutral tones.",
    images: ["/images/white18.jpeg", "/images/white19.jpeg"],
  },
  {
    id: "10",
    name: "Blessed Polo",
    slug: "blessed-polo",
    price: 60,
    category: "clothes",
    description: "Bold and comfortable oversized polo.",
    images: ["/images/white16.jpeg"],
  },
  {
    id: "11",
    name: "Blessed Polo",
    slug: "blessed-polo",
    price: 60,
    category: "clothes",
    description: "Bold and comfortable oversized polo.",
    images: ["/images/white14.jpeg"],
  },
  {
    id: "12",
    name: "Premium Cotton Polo ",
    slug: "premium-cotton polo",
    price: 55,
    category: "clothes",
    description: "Essential polo for warmer days.",
    images: ["/images/white12.jpeg"],
  },
  {
    id: "13",
    name: "Signature Polo",
    slug: "signature-polo",
    price: 70,
    category: "clothes",
    description: "Signature polo with premium print.",
    images: ["/images/white10.jpeg"],
  },
  {
    id: "14",
    name: "Signature Polo",
    slug: "signature-polo",
    price: 70,
    category: "clothes",
    description: "Classic polo shirt with embroidered logo.",
    images: ["/images/white8.jpeg"],
  },
  {
    id: "15",
    name: "Modern Trench Polo",
    slug: "modern-trench-polo",
    price: 70,
    category: "clothes",
    description: "Sleek trench polo for sophisticated layering.",
    images: ["/images/white6.jpeg"],
  },
  {
    id: "16",
    name: "Modern Trench Polo",
    slug: "modern-trench-polo",
    price: 70,
    category: "clothes",
    description: "Sleek trench polo for sophisticated layering.",
    images: ["/images/white4.jpeg"],
  },
  {
    id: "17",
    name: "Eagle Polo",
    slug: "eagle-polo",
    price: 70,
    category: "clothes",
    description: "Basic polo shirt for layering or solo wear.",
    images: ["/images/white2.jpeg"],
  },
  {
    id: "18",
    name: "Classic Dad Cap",
    slug: "classic-dad-cap",
    price: 30,
    category: "caps",
    description: "Vintage washed cotton cap with adjustable strap.",
    images: ["/images/white23.jpeg"],
  },
];
