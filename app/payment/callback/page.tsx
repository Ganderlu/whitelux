"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useShop } from "@/context/ShopContext";

type VerifyResponse = {
  reference: string;
  status: string;
  amount?: number;
  currency?: string;
};

export default function PaymentCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h1 className="text-2xl font-bold mb-2">Payment</h1>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <PaymentCallbackInner />
    </Suspense>
  );
}

function PaymentCallbackInner() {
  const searchParams = useSearchParams();
  const { clearCart } = useShop();
  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "error"; message: string }
    | { kind: "success"; details: VerifyResponse }
  >({ kind: "loading" });

  const reference = useMemo(() => {
    return (
      searchParams.get("reference")?.trim() ||
      searchParams.get("trxref")?.trim() ||
      ""
    );
  }, [searchParams]);

  useEffect(() => {
    if (!reference) {
      setState({ kind: "error", message: "Missing Paystack reference." });
      return;
    }

    let cancelled = false;

    (async () => {
      const res = await fetch(
        `/api/paystack/verify?reference=${encodeURIComponent(reference)}`,
      );
      const data = (await res
        .json()
        .catch(() => null)) as VerifyResponse | null;

      if (cancelled) return;

      if (!res.ok || !data) {
        setState({ kind: "error", message: "Could not verify payment." });
        return;
      }

      if (data.status === "success") {
        clearCart();
        setState({ kind: "success", details: data });
        return;
      }

      setState({
        kind: "error",
        message: `Payment status: ${data.status}`,
      });
    })().catch(() => {
      if (!cancelled)
        setState({ kind: "error", message: "Could not verify payment." });
    });

    return () => {
      cancelled = true;
    };
  }, [reference, clearCart]);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-2">Payment</h1>

        {state.kind === "loading" && (
          <p className="text-gray-600">Verifying your payment...</p>
        )}

        {state.kind === "success" && (
          <div className="space-y-4">
            <p className="text-green-700 font-medium">Payment successful.</p>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Reference: {state.details.reference}</div>
              {typeof state.details.amount === "number" && (
                <div>
                  Amount: {(state.details.amount / 100).toFixed(2)}{" "}
                  {state.details.currency ?? ""}
                </div>
              )}
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {state.kind === "error" && (
          <div className="space-y-4">
            <p className="text-red-600 font-medium">{state.message}</p>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            >
              Back to Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
