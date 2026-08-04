import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { recipient, amount } = body;

    const txCode = `TX-${Math.floor(1000 + Math.random() * 9000)}`;
    const tx = await prisma.transaction.create({
      data: {
        txCode,
        name: `Transfer to ${recipient}`,
        category: 'Transfer',
        amount: `- $${Number(amount).toLocaleString()}`,
        positive: false,
      },
    });

    return NextResponse.json({ success: true, transaction: tx });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
