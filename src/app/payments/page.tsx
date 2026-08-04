'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function FinexaPaymentsPage() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const recent = [
    { name: 'Harrison Sterling', account: '•••• 4291', bank: 'Barclays UK' },
    { name: 'Evelyn Vance', account: '•••• 1048', bank: 'HSBC Private' },
    { name: 'Finexa Investment Pot', account: '•••• 8820', bank: 'Finexa Vault' },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">FAST TRANSFERS</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Payments & Wire Transfers</h1>
          <p className="text-slate-400 text-sm mt-2">Send money instantly across SEPA, SWIFT, and Faster Payments networks.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
          <h2 className="font-bold text-white text-xl">New Transfer</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase block mb-1.5">Recipient Name / IBAN</label>
              <input type="text" value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="e.g. GB33 BUKB 6016 1331 9268 19" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase block mb-1.5">Amount (GBP)</label>
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
            </div>
            <button className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
              Confirm & Authorize Transfer
            </button>
          </div>

          <h3 className="font-bold text-white text-base pt-4">Recent Payees</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recent.map((r, i) => (
              <button key={i} onClick={() => setRecipient(r.name)} className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 text-left hover:border-sky-500/50 transition-colors">
                <div className="font-bold text-white text-sm">{r.name}</div>
                <div className="text-xs text-slate-400 mt-1">{r.bank} · {r.account}</div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
