"use client";

import { useMemo, useState } from "react";

export default function ContactPage() {
  const contactEmail = "olinyachukwuemeka25@gmail.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Order & Support");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message,
    ].join("\n");

    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${contactEmail}?${params.toString()}`;
  }, [contactEmail, email, message, name, subject]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const isValidEmail =
      trimmedEmail.length === 0 ||
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!message.trim()) {
      setError("Please enter your message.");
      return;
    }

    window.location.href = mailtoHref;
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4">
              Support
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Contact Whitelux
            </h1>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Need help with an order, sizing, or a general question? Send us a
              message and we will get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">
              Send a message
            </h2>
            <p className="text-gray-600 mb-6">
              Include your order number (if you have one) so we can help faster.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  <option>Order & Support</option>
                  <option>Shipping & Returns</option>
                  <option>Sizing</option>
                  <option>Wholesale</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/20 min-h-40 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors"
                >
                  Open Email App
                </a>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl font-bold mb-3">Contact Details</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <div className="font-medium text-gray-900">Email</div>
                <div>{contactEmail}</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">Response Time</div>
                <div>Usually within 24–48 hours</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">Social</div>
                <div>Use the footer icons to reach us on social media.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

