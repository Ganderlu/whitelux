import Link from "next/link";

export default function ShippingReturnsPage() {
  const sections = [
    {
      title: "Order Processing",
      items: [
        "Orders are processed within 1–3 business days (excluding weekends and public holidays).",
        "During high-volume drops, processing may take slightly longer.",
        "You will receive a confirmation email after checkout and a shipping update once your order is dispatched.",
      ],
    },
    {
      title: "Shipping",
      items: [
        "Shipping rates and available options are shown at checkout based on your address.",
        "Once shipped, you will receive tracking information (where available).",
        "Delivery times depend on your location and the carrier. Delays can happen due to customs or local carrier issues.",
      ],
    },
    {
      title: "Returns",
      items: [
        "Eligible returns must be requested within 7 days of delivery.",
        "Items must be unworn, unwashed, and in original condition with packaging where possible.",
        "For hygiene reasons, some items may be non-returnable.",
      ],
    },
    {
      title: "Exchanges",
      items: [
        "If you need a different size, contact us first so we can confirm availability.",
        "If an exchange is not available, we can process a return (if eligible) and you can place a new order.",
      ],
    },
    {
      title: "Damaged or Incorrect Items",
      items: [
        "If your item arrives damaged or incorrect, contact us within 48 hours of delivery.",
        "Include your order details and clear photos so we can resolve it quickly.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              Support
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Shipping &amp; Returns
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Everything you need to know about delivery, returns, and exchanges
              at Whitelux.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold tracking-tighter mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-bold mb-3">Need help?</h3>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about shipping or a return request, reach
              out and we will guide you.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Tip: Include your order number for faster support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

