'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { TrendingUp, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface Investment {
  id: number;
  symbol: string;
  name: string;
  type: string;
  shares: number;
  avgBuy: number;
  currentPrice: number;
}

export default function InvestmentsPage() {
  const [investments, setInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    fetch('/api/investments')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setInvestments(data.investments);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8 font-mono">
        <div className="text-center font-sans">
          <span className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-widest block mb-1">Corporate Reserves</span>
          <h1 className="text-3xl font-extrabold text-white">Investment Portfolio Telemetry</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investments.map((inv) => (
            <div key={inv.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center font-sans">
                <div>
                  <span className="text-xs text-emerald-400 font-mono font-bold">{inv.symbol}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{inv.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">{inv.type}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs pt-4 border-t border-slate-800">
                <div>
                  <span className="text-slate-500 block font-sans">Holdings</span>
                  <span className="font-bold text-white">{inv.shares} Units</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-sans">Avg Cost</span>
                  <span className="font-bold text-white">${inv.avgBuy.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-sans">Market Price</span>
                  <span className="font-bold text-emerald-400">${inv.currentPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
