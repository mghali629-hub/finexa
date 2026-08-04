'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const stocks = [
  { name: 'Apple Inc.', ticker: 'AAPL', shares: 120, price: '$224.50', total: '$26,940.00', gain: '+$4,200.00' },
  { name: 'NVIDIA Corp.', ticker: 'NVDA', shares: 85, price: '$118.20', total: '$10,047.00', gain: '+$2,150.00' },
  { name: 'Microsoft Corp.', ticker: 'MSFT', shares: 40, price: '$448.00', total: '$17,920.00', gain: '+$1,890.00' },
];

export default function StocksInvestmentsPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">EQUITIES & ETFS</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Stock Portfolio</h1>
          <p className="text-slate-400 text-sm mt-2">Zero-commission global stock trading across NYSE, NASDAQ, and LSE.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs text-slate-400">Total Equities Value</span>
              <div className="text-3xl font-black text-white">$54,907.00</div>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full">+$8,240.00 All-Time Gain</span>
          </div>

          <div className="space-y-3">
            {stocks.map((s, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-950 rounded-2xl border border-slate-800/80">
                <div>
                  <div className="font-bold text-white text-sm">{s.name} <span className="text-xs text-sky-400 font-mono">({s.ticker})</span></div>
                  <div className="text-xs text-slate-400">{s.shares} shares @ {s.price}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-white text-sm">{s.total}</div>
                  <div className="text-xs font-bold text-emerald-400">{s.gain}</div>
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
