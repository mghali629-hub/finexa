'use client';
import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function FinexaGoalsPage() {
  const [goals] = useState([
    { id: 1, name: 'Emergency Fund', target: 30000, current: 22500, icon: '🛡️', color: 'bg-blue-500', deadline: 'Dec 2026' },
    { id: 2, name: 'Down Payment — Chelsea Flat', target: 120000, current: 48000, icon: '🏠', color: 'bg-emerald-500', deadline: 'Jun 2028' },
    { id: 3, name: 'Retirement Portfolio (55)', target: 800000, current: 182000, icon: '🏖️', color: 'bg-purple-500', deadline: 'Dec 2041' },
  ]);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">WEALTH PLANNING</span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Financial Goals</h1>
          </div>
          <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors">+ Add New Goal</button>
        </div>

        <div className="space-y-6">
          {goals.map(g => {
            const pct = Math.round((g.current / g.target) * 100);
            return (
              <div key={g.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{g.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg">{g.name}</h3>
                      <span className="text-xs text-slate-400">Target: {g.deadline}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-white">£{g.current.toLocaleString()}</div>
                    <div className="text-xs text-slate-400">of £{g.target.toLocaleString()}</div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-sky-400 font-bold">{pct}% complete</span>
                  </div>
                  <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${g.color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="flex gap-3 pt-1">
                  <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors">Add Funds</button>
                  <button className="border border-slate-700 text-slate-400 text-xs px-4 py-2 rounded-lg hover:border-sky-500/50 transition-colors">Edit Goal</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
