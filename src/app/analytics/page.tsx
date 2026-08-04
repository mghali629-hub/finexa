'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { TrendingUp, ArrowUpRight, ArrowDownRight, DollarSign, Calendar, Filter, Download } from 'lucide-react';

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('Q3-2026');

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8 font-mono">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest font-mono block">Institutional Cash Flow</span>
            <h1 className="text-3xl font-extrabold text-white font-sans mt-1">Real-Time Financial Telemetry</h1>
          </div>
          <div className="flex gap-2 font-sans">
            {['Q1-2026', 'Q2-2026', 'Q3-2026'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${timeframe === tf ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 border border-slate-800 text-slate-400'}`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-xs font-sans">Quarterly Gross Revenue</span>
            <div className="text-3xl font-bold text-white">$14,250,890.00</div>
            <span className="text-emerald-400 text-xs flex items-center gap-1 font-sans"><ArrowUpRight className="w-4 h-4" /> +24.8% YoY Expansion</span>
          </div>
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-xs font-sans">Operational Burn Rate</span>
            <div className="text-3xl font-bold text-rose-400">$3,840,120.00</div>
            <span className="text-slate-500 text-xs font-sans">-12.4% Cloud Infrastructure Optimization</span>
          </div>
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="text-slate-400 text-xs font-sans">Net Cash Operating Margin</span>
            <div className="text-3xl font-bold text-emerald-400">$10,410,770.00</div>
            <span className="text-emerald-400 text-xs flex items-center gap-1 font-sans"><ArrowUpRight className="w-4 h-4" /> 73.05% Gross Profit Margin</span>
          </div>
        </div>

        {/* SVG Telemetry Revenue Flow Chart */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex justify-between items-center font-sans">
            <h3 className="text-lg font-bold text-white">Monthly Cash Inflow vs Outflow Vector ({timeframe})</h3>
            <span className="text-xs text-emerald-400 font-mono">● Real-Time API Stream</span>
          </div>

          <div className="h-64 w-full bg-slate-950 rounded-2xl p-4 border border-slate-800/80 relative flex items-end justify-between gap-4">
            <svg className="absolute inset-0 w-full h-full p-4 overflow-visible" viewBox="0 0 500 200">
              <defs>
                <linearGradient id="gradientInflow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path d="M 0 150 Q 125 50 250 80 T 500 20 L 500 200 L 0 200 Z" fill="url(#gradientInflow)" />
              <path d="M 0 150 Q 125 50 250 80 T 500 20" fill="none" stroke="#10B981" strokeWidth="4" />
            </svg>
            <div className="relative z-10 w-full flex justify-between items-end text-xs text-slate-500 font-mono pt-40 px-4">
              <span>Month 1</span>
              <span>Month 2</span>
              <span>Month 3</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
