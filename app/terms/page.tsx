import Link from "next/link";

export default function TermsPage() {
  const sections = [
    {
      title: "Overview",
      body: [
        "These Terms & Conditions govern your use of the Whitelux website and your purchases from Whitelux. By accessing the site or placing an order, you agree to these terms.",
        "If you do not agree, please do not use the website.",
      ],
    },
    {
      title: "Products & Availability",
      body: [
        "We work hard to display product details accurately. Colors may vary slightly depending on your device or lighting.",
        "Product availability can change without notice, especially for limited releases and Exclusive Drops.",
      ],
    },
    {
      title: "Pricing & Payments",
      body: [
        "Prices are shown on the website and may be updated at any time.",
        "Payments are processed securely via our payment provider. Your order is confirmed once payment is successful.",
      ],
    },
    {
      title: "Orders",
      body: [
        "After checkout, you will receive an order confirmation. If you do not receive one, contact us.",
        "We reserve the right to cancel an order if we suspect fraud, pricing errors, or misuse of the site.",
      ],
    },
    {
      title: "Shipping",
      body: [
        "Shipping rates and delivery timelines are shown at checkout. Delivery times are estimates and can vary.",
        "Whitelux is not responsible for delays caused by carriers, customs, or incorrect address information provided at checkout.",
      ],
    },
    {
      title: "Returns & Exchanges",
      body: [
        "Returns and exchanges are subject to eligibility and time limits. Items must be in original condition.",
        "Please review our Shipping & Returns page for details.",
      ],
      cta: { href: "/shipping", label: "View Shipping & Returns" },
    },
    {
      title: "Intellectual Property",
      body: [
        "All content on this website (logos, images, product designs, text, and graphics) is owned by Whitelux or licensed to us and may not be used without permission.",
      ],
    },
    {
      title: "Limitation of Liability",
      body: [
        "To the maximum extent permitted by law, Whitelux will not be liable for indirect, incidental, or consequential damages resulting from the use of the website or products purchased.",
      ],
    },
    {
      title: "Changes to These Terms",
      body: [
        "We may update these Terms & Conditions from time to time. Updates will be posted on this page.",
      ],
    },
    {
      title: "Contact",
      body: ["If you have questions about these terms, contact us."],
      cta: { href: "/contact", label: "Contact Us" },
    },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Please read these terms carefully before using Whitelux or placing
              an order.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold tracking-tighter mb-4">
                {section.title}
              </h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.cta && (
                <div className="mt-6">
                  <Link
                    href={section.cta.href}
                    className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                  >
                    {section.cta.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

