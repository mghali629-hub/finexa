'use client';

import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/Header';

interface Card {
  id: number;
  last4: string;
  type: string;
  expiry: string;
  balance: number;
}

export default function CardsPage() {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, last4: '8842', type: 'BLACK VISA CORPORATE', expiry: '12/28', balance: 250000 },
    { id: 2, last4: '4109', type: 'PLATINUM AMEX CONCIERGE', expiry: '09/27', balance: 120000 },
  ]);

  useEffect(() => {
    fetch('/api/cards')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCards(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col justify-between">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">ISSUED INSTRUMENTS</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Virtual & Physical Cards</h1>
          <p className="text-slate-400 text-sm mt-2">Manage spending limits, card controls, and global corporate cards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-slate-700/60 shadow-2xl space-y-8 overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-mono text-sky-400 tracking-wider font-bold">{card.type}</div>
                  <div className="text-slate-400 text-xs mt-1">FINEXA PRIVATE BANKING</div>
                </div>
                <div className="text-2xl font-bold italic text-slate-300">VISA</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-500 font-mono">CARD NUMBER</div>
                <div className="text-2xl font-mono tracking-widest text-white">•••• •••• •••• {card.last4}</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">EXPIRES</div>
                  <div className="text-sm font-mono text-slate-300">{card.expiry}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 font-mono">CREDIT LIMIT</div>
                  <div className="text-xl font-bold text-emerald-400">${card.balance.toLocaleString()}</div>
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
