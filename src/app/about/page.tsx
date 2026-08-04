'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';
import Link from 'next/link';

export default function FinexaAboutPage() {
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-900/30 border border-sky-700/50 px-4 py-1.5 rounded-full">
            ABOUT FINEXA PRIVATE BANKING
          </span>
          <h1 className="text-5xl font-extrabold text-white mt-4 mb-3">
            Reimagining Private Wealth Management
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Founded in 2021 in London, Finexa merges wealth management, multi-currency checking, and digital asset custody into a seamless, high-security financial platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stat: '£4.8B+', label: 'Assets Under Management' },
            { stat: '28', label: 'Supported Currencies' },
            { stat: '100%', label: 'Cold Storage Vaults' },
            { stat: '24/7', label: 'Concierge Banking' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-sky-400">{s.stat}</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'FSCS Protected', desc: 'Eligible deposits protected up to £85,000 per individual by the Financial Services Compensation Scheme in the United Kingdom.' },
            { title: 'Interbank FX Rates', desc: 'Exchange 28 fiat currencies with zero hidden markups or transaction fees using our direct liquidity access.' },
            { title: '24/7 Concierge Support', desc: 'Dedicated private banking managers available via encrypted chat and phone for instantaneous wire transfers and advisory.' },
          ].map((m, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-3">
              <h3 className="text-xl font-bold text-white">{m.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Experience Modern Financial Freedom</h2>
          <p className="text-slate-400 text-xs max-w-lg mx-auto">Open your Premier Checking & Multi-Asset Vault account in under 4 minutes with instant biometric verification.</p>
          <Link href="/accounts" className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-8 py-3 rounded-xl transition-colors uppercase tracking-wider">
            Open Finexa Premier Account
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
