import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

type InitializeRequestBody = {
  email?: string;
  amount?: number;
};

export async function POST(request: Request) {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "PAYSTACK_SECRET_KEY is not set on the server." },
      { status: 500 },
    );
  }

  let body: InitializeRequestBody;
  try {
    body = (await request.json()) as InitializeRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = body.email?.trim();
  const amount = body.amount;
  const currency = "USD";

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (!Number.isInteger(amount) || !amount || amount <= 0) {
    return NextResponse.json(
      {
        error:
          "Amount must be a positive integer in the smallest currency unit.",
      },
      { status: 400 },
    );
  }

  const origin =
    request.headers.get("origin") ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (!origin) {
    return NextResponse.json(
      { error: "Could not determine site origin for callback URL." },
      { status: 500 },
    );
  }

  const reference = randomUUID();
  const callback_url = `${origin.replace(/\/$/, "")}/payment/callback`;

  const paystackRes = await fetch(
    "https://api.paystack.co/transaction/initialize",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        reference,
        callback_url,
        currency,
        channels: ["card"],
        metadata: {
          reference,
        },
      }),
    },
  );

  const payload = (await paystackRes.json().catch(() => null)) as {
    status: boolean;
    message: string;
    data?: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  } | null;

  if (!paystackRes.ok || !payload?.status || !payload.data?.authorization_url) {
    return NextResponse.json(
      {
        error: "Failed to initialize Paystack transaction.",
        details: payload?.message,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    authorization_url: payload.data.authorization_url,
    reference: payload.data.reference,
  });
}
