import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  consent?: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!body.consent) {
    return NextResponse.json({ ok: false, error: 'consent_required' }, { status: 400 });
  }
  if (!body.email && !body.phone) {
    return NextResponse.json({ ok: false, error: 'email_or_phone_required' }, { status: 400 });
  }
  if (body.email && !isValidEmail(body.email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  // TODO: integrate with an email provider (Resend, SendGrid) or save to DB.
  // For now we just log on the server so the request is captured in Vercel logs.
  console.log('[contact]', new Date().toISOString(), {
    email: body.email,
    phone: body.phone,
    checkIn: body.checkIn,
    checkOut: body.checkOut,
    guests: body.guests,
  });

  return NextResponse.json({ ok: true });
}
