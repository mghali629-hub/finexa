'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function NotificationsPage() {
  const alerts = [
    { title: 'Large Transaction Alert', desc: 'A payment of £420.50 was made at Harrods London using card ending in •••• 4291.', time: '2 hours ago', category: 'SECURITY', read: false },
    { title: 'Security Login from New Device', desc: 'MacBook Pro 16" logged in from London, UK (IP: 185.220.101.4).', time: 'Yesterday', category: 'ACCOUNT', read: true },
    { title: 'Monthly Interest Payout', desc: 'You received £184.20 interest into your Finexa High-Yield Vault account.', time: '3 days ago', category: 'PAYMENTS', read: true },
    { title: 'Dividend Distribution', desc: 'Apple Inc. (AAPL) paid a quarterly dividend of $42.50 to your account.', time: '5 days ago', category: 'INVESTMENTS', read: true },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-900/30 border border-sky-700/50 px-4 py-1 rounded-full">
              ACTIVITY LOG
            </span>
            <h1 className="text-3xl font-extrabold text-white mt-3">System Notifications</h1>
          </div>
          <button className="text-xs text-sky-400 font-bold hover:underline">Mark All as Read</button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          {alerts.map((a, i) => (
            <div key={i} className={`p-5 rounded-2xl border transition-colors ${!a.read ? 'bg-sky-950/30 border-sky-500/40' : 'bg-slate-950 border-slate-800'}`}>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded">{a.category}</span>
                  <h3 className="font-bold text-white text-sm">{a.title}</h3>
                </div>
                <span className="text-xs text-slate-500">{a.time}</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
