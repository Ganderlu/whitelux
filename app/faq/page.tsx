export default function FaqPage() {
  const faqs = [
    {
      q: "What is Whitelux?",
      a: "Whitelux is a modern fashion brand built to elevate standard wear to luxury. We focus on clean design, premium feel, and everyday pieces you can style effortlessly.",
    },
    {
      q: "Do you restock sold out items?",
      a: "Some items may be restocked, but limited drops can sell out permanently. If you see an Exclusive Drop, it may not return once sold out.",
    },
    {
      q: "How do I choose my size?",
      a: "Fit can vary by style. If you prefer a relaxed look, size up. If you like a more tailored fit, choose your usual size. When available, use the product description for fit notes.",
    },
    {
      q: "Can I change or cancel my order after checkout?",
      a: "If your order has not been processed yet, we can try to help. Once an order is packed or shipped, changes and cancellations may not be possible.",
    },
    {
      q: "Where do you ship to?",
      a: "We ship to supported regions based on your checkout address. If you cannot find your location at checkout, contact us and we will advise.",
    },
    {
      q: "How long does delivery take?",
      a: "Delivery time depends on your location and the shipping option selected at checkout. You will receive tracking details once your order ships.",
    },
    {
      q: "What is your returns policy?",
      a: "We accept returns on eligible items in original condition. Items must be unworn, unwashed, and returned with original packaging where possible. See Shipping & Returns for full details.",
    },
    {
      q: "How do I contact Whitelux?",
      a: "Use the Contact Us page to send a message. You can also reach us via our social media links in the footer.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              Help Center
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Quick answers about orders, shipping, returns, and Whitelux.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-bold text-lg flex items-center justify-between gap-6">
                  <span>{item.q}</span>
                  <span className="text-gray-500 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

