'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Search, Download } from 'lucide-react';

interface Transaction {
  id: string;
  txCode: string;
  name: string;
  category: string;
  amount: string;
  positive: boolean;
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchTx, setSearchTx] = useState('');

  useEffect(() => {
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTransactions(data.transactions);
      });
  }, []);

  const filtered = transactions.filter((t) =>
    t.name.toLowerCase().includes(searchTx.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTx.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white">Transactions Audit Log</h1>
          <button onClick={() => alert('Exporting CSV...')} className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-mono text-xs flex items-center gap-2 border border-slate-700">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-500" />
          <input
            type="text"
            placeholder="Search by keyword..."
            value={searchTx}
            onChange={(e) => setSearchTx(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono"
          />
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-slate-900 text-slate-400 text-xs uppercase border-b border-slate-800">
              <tr>
                <th className="p-4">Transaction Code</th>
                <th className="p-4">Description</th>
                <th className="p-4">Category</th>
                <th className="p-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-900/60 transition-colors">
                  <td className="p-4 text-slate-500 text-xs">{tx.txCode}</td>
                  <td className="p-4 font-bold text-white">{tx.name}</td>
                  <td className="p-4"><span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">{tx.category}</span></td>
                  <td className={`p-4 text-right font-bold ${tx.positive ? 'text-emerald-400' : 'text-slate-300'}`}>{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
