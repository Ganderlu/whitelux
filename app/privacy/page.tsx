import Link from "next/link";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Overview",
      body: [
        "This Privacy Policy explains how Whitelux collects, uses, and protects your information when you use our website or place an order.",
        "By using Whitelux, you agree to the practices described in this policy.",
      ],
    },
    {
      title: "Information We Collect",
      body: [
        "Information you provide: name, email address, shipping address, and any details you submit through forms.",
        "Order information: items purchased, order totals, and transaction references from our payment provider.",
        "Usage information: basic analytics such as pages visited and device/browser details to improve site performance.",
      ],
    },
    {
      title: "How We Use Your Information",
      body: [
        "To process and fulfill orders, including shipping updates and customer support.",
        "To communicate with you about your order or account-related requests.",
        "To improve Whitelux products, services, and website experience.",
      ],
    },
    {
      title: "Payments",
      body: [
        "Payments are processed through our payment provider. We do not store your card details on Whitelux servers.",
        "Your payment provider may collect and process information according to their own privacy policy.",
      ],
    },
    {
      title: "Sharing Your Information",
      body: [
        "We may share necessary information with service providers (payment processing and shipping) to complete your order.",
        "We do not sell your personal information.",
        "We may disclose information if required by law or to protect Whitelux and our customers.",
      ],
    },
    {
      title: "Data Retention",
      body: [
        "We keep information only as long as needed for order processing, support, and legitimate business purposes.",
        "You can request deletion of your information where applicable.",
      ],
    },
    {
      title: "Your Choices",
      body: [
        "You can contact us to update or correct your information.",
        "You can request access to, or deletion of, your personal data where applicable.",
      ],
    },
    {
      title: "Security",
      body: [
        "We take reasonable steps to protect your information. No method of transmission or storage is completely secure, but we work to maintain strong safeguards.",
      ],
    },
    {
      title: "Updates to This Policy",
      body: [
        "We may update this policy from time to time. The latest version will always be available on this page.",
      ],
    },
    {
      title: "Contact",
      body: ["Questions about privacy? Reach out to Whitelux support."],
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
              Privacy Policy
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
              How Whitelux collects, uses, and protects your information.
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

          <div className="text-xs text-gray-500">
            By using Whitelux, you acknowledge this Privacy Policy and our{" "}
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms &amp; Conditions
            </Link>
            .
          </div>
        </div>
      </section>
    </div>
  );
}

