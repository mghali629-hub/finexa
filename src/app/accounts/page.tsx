'use client';

import React, { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Header';
import { Building2, ShieldCheck, CreditCard, DollarSign } from 'lucide-react';

interface Account {
  id: number;
  name: string;
  type: string;
  balance: number;
  currency: string;
  iban: string;
}

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    fetch('/api/accounts')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setAccounts(data.accounts);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 flex-1 space-y-8 font-mono">
        <div className="text-center font-sans space-y-2">
          <span className="text-xs text-emerald-400 font-mono font-bold uppercase tracking-widest block">Vault Reserves</span>
          <h1 className="text-3xl font-extrabold text-white">Institutional Bank Accounts & IBANs</h1>
          <p className="text-slate-400 text-sm">Multi-currency checking, savings, and reserve treasury accounts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((acc) => (
            <div key={acc.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex justify-between items-center font-sans">
                <div>
                  <span className="text-xs text-emerald-400 font-mono font-bold">{acc.type}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{acc.name}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono font-bold">{acc.currency}</span>
              </div>
              <div className="text-xs text-slate-400 font-mono pt-2 border-t border-slate-800 space-y-1">
                <div>IBAN: <strong className="text-white">{acc.iban}</strong></div>
                <div>Balance: <strong className="text-emerald-400 text-lg">${acc.balance.toLocaleString()}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
