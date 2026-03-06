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
    name: "WL Signature Hoodie",
    slug: "wl-signature-hoodie",
    price: 120,
    category: "clothes",
    description:
      "Heavyweight cotton fleece hoodie with embroidered WhiteLux logo. Oversized fit for maximum comfort and style.",
    images: ["/images/white26.jpeg"],
  },
  {
    id: "2",
    name: "Essential Tee",
    slug: "essential-tee",
    price: 45,
    category: "clothes",
    description:
      "Premium pima cotton t-shirt. Breathable, durable, and perfectly cut.",
    images: ["/images/white25.jpeg"],
  },
  {
    id: "3",
    name: "Structured Cap",
    slug: "structured-cap",
    price: 35,
    category: "caps",
    description:
      "Six-panel structured cap with metal buckle adjustment. Minimalist branding.",
    images: ["/images/white27.jpeg"],
  },
  {
    id: "4",
    name: "Leather Crossbody",
    slug: "leather-crossbody",
    price: 150,
    category: "bags",
    description:
      "Full-grain leather crossbody bag. Compact yet spacious enough for essentials.",
    images: ["/images/white28.jpeg"],
  },
  {
    id: "5",
    name: "Limited Edition Bomber",
    slug: "limited-bomber",
    price: 350,
    category: "clothes",
    description:
      "Exclusive bomber jacket with satin lining and custom hardware. Only 50 pieces made.",
    images: ["/images/white24.jpeg"],
    isExclusive: true,
  },
  {
    id: "6",
    name: "WL Tote",
    slug: "wl-tote",
    price: 80,
    category: "bags",
    description:
      "Heavy canvas tote bag with reinforced handles. Perfect for daily carry.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1892&auto=format&fit=crop",
    ],
  },
  {
    id: "7",
    name: "Classic Denim Jacket",
    slug: "classic-denim-jacket",
    price: 180,
    category: "clothes",
    description: "Timeless denim jacket with a modern fit.",
    images: ["/images/white21.jpeg"],
  },
  {
    id: "8",
    name: "Urban Cargo Pants",
    slug: "urban-cargo-pants",
    price: 95,
    category: "clothes",
    description: "Functional and stylish cargo pants for the city explorer.",
    images: ["/images/white20.jpeg"],
  },
  {
    id: "9",
    name: "Minimalist Sweater",
    slug: "minimalist-sweater",
    price: 110,
    category: "clothes",
    description: "Soft knit sweater in neutral tones.",
    images: ["/images/white18.jpeg", "/images/white19.jpeg"],
  },
  {
    id: "10",
    name: "Streetwear Oversized Shirt",
    slug: "streetwear-oversized-shirt",
    price: 60,
    category: "clothes",
    description: "Bold and comfortable oversized shirt.",
    images: ["/images/white16.jpeg"],
  },
  {
    id: "11",
    name: "Luxury Track Pants",
    slug: "luxury-track-pants",
    price: 85,
    category: "clothes",
    description: "High-end track pants for leisure and style.",
    images: ["/images/white14.jpeg"],
  },
  {
    id: "12",
    name: "Premium Cotton Shorts",
    slug: "premium-cotton-shorts",
    price: 55,
    category: "clothes",
    description: "Essential shorts for warmer days.",
    images: ["/images/white12.jpeg"],
  },
  {
    id: "13",
    name: "Designer Graphic Tee",
    slug: "designer-graphic-tee",
    price: 50,
    category: "clothes",
    description: "Artistic graphic tee with premium print.",
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
    name: "Modern Trench Coat",
    slug: "modern-trench-coat",
    price: 250,
    category: "clothes",
    description: "Sleek trench coat for sophisticated layering.",
    images: ["/images/white6.jpeg"],
  },
  {
    id: "16",
    name: "Relaxed Fit Jeans",
    slug: "relaxed-fit-jeans",
    price: 100,
    category: "clothes",
    description: "Comfortable jeans with a relaxed silhouette.",
    images: ["/images/white4.jpeg"],
  },
  {
    id: "17",
    name: "Essential Tank Top",
    slug: "essential-tank-top",
    price: 30,
    category: "clothes",
    description: "Basic tank top for layering or solo wear.",
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
