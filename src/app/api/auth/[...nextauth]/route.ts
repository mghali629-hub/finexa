import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      id: 'usr_fnx_88019',
      name: 'Elena Rostova',
      email: 'elena.rostova@finexa.bank',
      tier: 'PRIVATE_WEALTH',
    },
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      token: 'fnx_jwt_sec_99182746',
      user: {
        id: 'usr_fnx_88019',
        email: body.email || 'user@finexa.com',
        tier: 'PREMIUM',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
  }
}
