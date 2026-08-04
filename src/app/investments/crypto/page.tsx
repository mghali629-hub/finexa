'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const cryptoHoldings = [
  { name: 'Bitcoin', symbol: 'BTC', amount: '1.42 BTC', value: '$92,300.00', change: '+3.4%', isUp: true },
  { name: 'Ethereum', symbol: 'ETH', amount: '14.8 ETH', value: '$51,800.00', change: '+5.1%', isUp: true },
  { name: 'Solana', symbol: 'SOL', amount: '120 SOL', value: '$19,400.00', change: '-1.2%', isUp: false },
];

export default function CryptoInvestmentsPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">DIGITAL ASSETS</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Crypto Portfolio</h1>
          <p className="text-slate-400 text-sm mt-2">Institutional-grade custody with insured cold-storage wallets.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs text-slate-400">Total Crypto Valuation</span>
              <div className="text-3xl font-black text-white">$163,500.00</div>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full">+4.2% (24h)</span>
          </div>

          <div className="space-y-3">
            {cryptoHoldings.map((c, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-950 rounded-2xl border border-slate-800/80">
                <div>
                  <div className="font-bold text-white text-sm">{c.name} <span className="text-xs text-slate-400">({c.symbol})</span></div>
                  <div className="text-xs text-slate-400">{c.amount}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white text-sm">{c.value}</div>
                  <div className={`text-xs font-bold ${c.isUp ? 'text-emerald-400' : 'text-red-400'}`}>{c.change}</div>
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
