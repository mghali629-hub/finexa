'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart as LineChartIcon,
  Send,
  CheckCircle2,
  Wallet,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Header, Footer } from '@/components/Header';

interface Transaction {
  id: string;
  txCode: string;
  name: string;
  category: string;
  amount: string;
  positive: boolean;
}

export default function FinexaHomePage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('1000');
  const [transferred, setTransferred] = useState(false);

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTransactions(data.transactions);
      })
      .catch((err) => console.error(err));
  }, [transferred]);

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
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      <Header />

      <main className="flex-1 space-y-16 py-12">
        {/* Terminal Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-400" /> Institutional Liquidity & Treasury Engine
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
            Financial Telemetry & <span className="text-emerald-400">Treasury Terminal</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Real-time multi-currency IBAN vault management, automated wire settlements, and institutional crypto portfolio reserves.
          </p>
        </section>

        {/* Telemetry Metrics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-mono">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-slate-400 text-xs font-sans">Total Treasury Reserve</span>
              <div className="text-3xl font-bold text-white">$6,100,000.00</div>
              <span className="text-emerald-400 text-xs flex items-center gap-1 font-sans"><ArrowUpRight className="w-4 h-4" /> +18.4% Q3 Net</span>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-slate-400 text-xs font-sans">Daily Wire Liquidity</span>
              <div className="text-3xl font-bold text-emerald-400">$1,450,000.00</div>
              <span className="text-slate-500 text-xs font-sans">Instant SWIFT / SEPA Settlement</span>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-slate-400 text-xs font-sans">Corporate Platinum Cards</span>
              <div className="text-3xl font-bold text-white">2 Active Cards</div>
              <span className="text-slate-500 text-xs font-sans">$1.65M Total Credit Line</span>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-slate-400 text-xs font-sans">Asset Risk Score</span>
              <div className="text-3xl font-bold text-emerald-400">AAA Prime</div>
              <span className="text-slate-500 text-xs font-sans">Zero-Trust Vault Security</span>
            </div>
          </div>
        </section>

        {/* Live Transaction Stream & Wire Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
          {/* Stream */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex justify-between items-center font-sans">
              <h3 className="text-lg font-bold text-white">Live Wire Transaction Stream</h3>
              <span className="text-xs text-emerald-400 font-mono">● DB Synchronized</span>
            </div>

            <div className="space-y-3">
              {transactions.map((tx) => (
                <div key={tx.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-white block font-sans">{tx.name}</span>
                    <span className="text-slate-500">{tx.txCode} • {tx.category}</span>
                  </div>
                  <span className={`font-bold text-sm ${tx.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Wire Form */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
            <div className="space-y-1 font-sans">
              <span className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-widest block">Instant Execution</span>
              <h3 className="text-2xl font-bold text-white">Execute API Wire Transfer</h3>
            </div>

            {!transferred ? (
              <form onSubmit={handleTransfer} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Recipient IBAN / Beneficiary</label>
                  <input
                    type="text"
                    required
                    placeholder="US89-FNX-9012-4819"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Transfer Amount ($USD)</label>
                  <input
                    type="number"
                    required
                    placeholder="1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Execute Wire Settlement
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500 text-center space-y-3 font-sans">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Wire Executed & Saved in Database</h3>
                <p className="text-slate-300 text-xs">Transferred ${amount} to {recipient}.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
