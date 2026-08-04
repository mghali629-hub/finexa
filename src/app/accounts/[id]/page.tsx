'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function AccountDetailPage({ params }: { params: { id: string } }) {
  const transactions = [
    { date: '2026-08-02', desc: 'Transfer from Savings', amount: '+£5,000.00', type: 'credit' },
    { date: '2026-08-01', desc: 'Harrods London Purchase', amount: '-£420.50', type: 'debit' },
    { date: '2026-07-29', desc: 'Dividend Payout — Apple Inc.', amount: '+£184.20', type: 'credit' },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <div>
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">PREMIER CHECKING</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">GB42 FINE 9002 1849 2049</h1>
            <p className="text-slate-400 text-sm mt-1">Primary operational checking account</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white">£48,290.50</div>
            <div className="text-xs text-emerald-400 font-medium">Available Balance</div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          <h2 className="font-bold text-white text-xl mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {transactions.map((t, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-950 rounded-2xl border border-slate-800/60">
                <div>
                  <div className="font-bold text-white text-sm">{t.desc}</div>
                  <div className="text-xs text-slate-500">{t.date}</div>
                </div>
                <div className={`font-bold font-mono text-sm ${t.type === 'credit' ? 'text-emerald-400' : 'text-slate-200'}`}>
                  {t.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
