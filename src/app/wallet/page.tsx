'use client';

import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';
import { CreditCard, Send, CheckCircle2 } from 'lucide-react';

export default function WalletPage() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('1000');
  const [transferred, setTransferred] = useState(false);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient, amount }),
      });
      const data = await res.json();
      if (data.success) setTransferred(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950 to-slate-900 border border-emerald-500/40 space-y-6 shadow-2xl">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">Finexa Corporate Black Card</span>
            <CreditCard className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="text-2xl font-mono tracking-widest text-white py-4">•••• •••• •••• 8842</div>
        </div>

        {!transferred ? (
          <form onSubmit={handleTransfer} className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4 font-mono">
            <h3 className="text-emerald-400 font-bold uppercase text-xs">Execute Instant Wire Transfer API</h3>
            <input type="text" required placeholder="Recipient IBAN / Name" value={recipient} onChange={(e) => setRecipient(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            <input type="number" required placeholder="Amount ($USD)" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" />
            <button type="submit" className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Execute Transfer
            </button>
          </form>
        ) : (
          <div className="p-8 rounded-3xl bg-slate-900 border border-emerald-500 text-center space-y-2 font-mono">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Wire Executed & Saved in DB</h3>
            <p className="text-slate-300 text-sm">Transferred ${amount} to {recipient}.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
