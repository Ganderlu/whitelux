import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              About Whitelux
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Elevating standard wear to luxury.
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Whitelux is a modern fashion brand built for people who want clean
              design, premium quality, and everyday pieces that feel elevated.
              We blend minimal aesthetics with confident detail, so what you
              wear looks intentional from the first look to the final fit.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Whitelux was created with a simple mission: make premium clothing
              and accessories that feel luxurious without being loud. We focus
              on timeless silhouettes, refined textures, and confident fits that
              work from day to night.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every collection is designed to be versatile and wearable. Whether
              you’re stepping out casually or dressing with intention, Whitelux
              is built to complement your lifestyle and elevate your presence.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-4">What We Stand For</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Quality First",
                  text: "Premium fabrics, strong finishes, and attention to detail.",
                },
                {
                  title: "Clean Design",
                  text: "Minimal style, elevated feel, and timeless silhouettes.",
                },
                {
                  title: "Confidence",
                  text: "Pieces that look sharp and feel comfortable all day.",
                },
                {
                  title: "Community",
                  text: "Built with our customers, inspired by real culture.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5"
                >
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-gray-50 p-10 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clothes",
                text: "Modern essentials designed with premium comfort and a refined fit.",
              },
              {
                title: "Caps",
                text: "Clean headwear with subtle branding for everyday confidence.",
              },
              {
                title: "Bags",
                text: "Functional carry pieces made to look luxury and feel durable.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-3">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-500">
                  {item.title}
                </p>
                <p className="text-lg font-bold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            The Whitelux Promise
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We keep it simple: premium quality, consistent design, and pieces
            you’ll want to wear repeatedly. We’re committed to improving every
            drop, listening to our customers, and building a brand you’re proud
            to represent.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-black text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
              Ready to wear Whitelux?
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Explore the latest pieces and find your everyday luxury.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
