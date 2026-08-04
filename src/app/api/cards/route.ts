import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const cards = await prisma.walletCard.findMany();
    return NextResponse.json(cards);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
