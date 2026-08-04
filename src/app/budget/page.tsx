'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';

interface Budget {
  id: number;
  name: string;
  limit: number;
  spent: number;
}

export default function BudgetPage() {
  const [categories, setCategories] = useState<Budget[]>([
    { id: 1, name: 'Cloud Infrastructure & Servers', limit: 150000, spent: 98400 },
    { id: 2, name: 'Executive Travel & Concierge', limit: 80000, spent: 42100 },
    { id: 3, name: 'Marketing & Global Expansion', limit: 120000, spent: 85000 },
    { id: 4, name: 'R&D Security Audits', limit: 65000, spent: 34000 },
  ]);

  useEffect(() => {
    fetch('/api/budget')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      })
      .catch(() => {});
  }, []);

  const totalLimit = categories.reduce((sum, c) => sum + c.limit, 0);
  const totalSpent = categories.reduce((sum, c) => sum + c.spent, 0);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">FINANCIAL CONTROLS</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Corporate Budget Management</h1>
          <p className="text-slate-400 text-sm mt-2">Real-time expenditure tracking against board-approved quarterly allocations.</p>
        </div>

        {/* Overview Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          <div>
            <div className="text-xs text-slate-400 font-medium">TOTAL BUDGET ALLOCATED</div>
            <div className="text-2xl font-bold text-white mt-1">${totalLimit.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">TOTAL SPENT TO DATE</div>
            <div className="text-2xl font-bold text-sky-400 mt-1">${totalSpent.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">REMAINING LIQUIDITY</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">${(totalLimit - totalSpent).toLocaleString()}</div>
          </div>
        </div>

        {/* Budget Categories */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white">Active Allocations by Department</h2>
          <div className="grid grid-cols-1 gap-4">
            {categories.map((cat) => {
              const pct = Math.min(100, Math.round((cat.spent / cat.limit) * 100));
              return (
                <div key={cat.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800/80 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-white">{cat.name}</h3>
                    <div className="text-right">
                      <span className="text-sky-400 font-mono text-sm font-semibold">${cat.spent.toLocaleString()}</span>
                      <span className="text-slate-500 font-mono text-xs"> / ${cat.limit.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${pct > 85 ? 'bg-amber-500' : 'bg-gradient-to-r from-sky-500 to-emerald-400'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{pct}% of limit utilized</span>
                    <span>${(cat.limit - cat.spent).toLocaleString()} available</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
