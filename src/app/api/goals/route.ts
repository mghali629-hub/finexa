import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const goals = await prisma.financialGoal.findMany();
    return NextResponse.json(goals);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
