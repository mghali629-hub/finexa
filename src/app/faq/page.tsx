'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

const faqs = [
  { q: 'How is my money protected with Finexa?', a: 'Finexa deposits are eligible for FSCS protection up to £85,000 per individual. Digital assets are held in 256-bit encrypted cold storage with Lloyds underwriting.' },
  { q: 'What are the fees for international wire transfers?', a: 'Finexa Premier accounts enjoy zero transfer fees on SEPA and SWIFT transfers, with transparent interbank FX rates and zero hidden commissions.' },
  { q: 'How do I enable 2FA and Biometric login?', a: 'Go to Settings -> Security and toggle Two-Factor Authentication or Biometric Access to pair your phone or YubiKey.' },
  { q: 'What is the daily wire transfer limit?', a: 'Standard daily limit is £50,000 for domestic FPS and €100,000 for SEPA Instant. Higher limits can be authorized via your private banker.' },
  { q: 'Can I hold both stocks and crypto in one account?', a: 'Yes — Finexa unified portfolio view allows managing NYSE equities, LSE stocks, and BTC/ETH crypto vaults within a single dashboard.' },
  { q: 'How do tax statement downloads work?', a: 'Automated tax reports (PDF/CSV) are generated every tax year end and can be downloaded from the Statements & Reports section.' },
];

export default function FinexaFaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-900/30 border border-sky-700/50 px-4 py-1 rounded-full">
            HELP & SUPPORT
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3">Frequently Asked Questions</h1>
          <p className="text-slate-400 text-xs mt-1">Get answers regarding accounts, security, wire transfers, and tax reports.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 font-bold text-white flex justify-between items-center text-sm">
                <span>{f.q}</span>
                <span className="text-sky-400 font-mono text-xl ml-4 shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-slate-400 text-xs leading-relaxed border-t border-slate-800/60 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
