import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "PAYSTACK_SECRET_KEY is not set on the server." },
      { status: 500 },
    );
  }

  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference")?.trim();

  if (!reference) {
    return NextResponse.json({ error: "reference is required." }, { status: 400 });
  }

  const paystackRes = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    {
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
    },
  );

  const payload = (await paystackRes.json().catch(() => null)) as
    | {
        status: boolean;
        message: string;
        data?: { status?: string; reference?: string; amount?: number; currency?: string };
      }
    | null;

  if (!paystackRes.ok || !payload?.status) {
    return NextResponse.json(
      { error: "Failed to verify Paystack transaction.", details: payload?.message },
      { status: 502 },
    );
  }

  return NextResponse.json({
    reference: payload.data?.reference ?? reference,
    status: payload.data?.status ?? "unknown",
    amount: payload.data?.amount,
    currency: payload.data?.currency,
    raw: payload.data ?? null,
  });
}

