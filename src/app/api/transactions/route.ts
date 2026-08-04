import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let txs = await prisma.transaction.findMany();
    if (txs.length === 0) {
      const initialTxs = [
        { txCode: 'TX-9042', name: 'Stripe Settlement', category: 'Revenue', amount: '+ $14,250.00', positive: true },
        { txCode: 'TX-9041', name: 'AWS Cloud Services', category: 'Infrastructure', amount: '- $3,420.50', positive: false },
        { txCode: 'TX-9040', name: 'Apple Store Hardware', category: 'Equipment', amount: '- $2,899.00', positive: false },
      ];
      await prisma.transaction.createMany({ data: initialTxs });
      txs = await prisma.transaction.findMany();
    }
    return NextResponse.json({ success: true, transactions: txs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
