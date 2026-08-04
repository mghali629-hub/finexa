'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

export default function ReportsPage() {
  const reports = [
    { title: 'Annual Tax Statement 2025/26', date: 'April 2026', format: 'PDF (2.4 MB)', category: 'TAX' },
    { title: 'Monthly Wealth Digest — July 2026', date: 'August 2026', format: 'PDF (1.1 MB)', category: 'STATEMENT' },
    { title: 'Crypto Capital Gains Export', date: 'July 2026', format: 'CSV Data', category: 'TAX DATA' },
    { title: 'Equities Dividend Summary H1 2026', date: 'June 2026', format: 'PDF (890 KB)', category: 'INVESTMENTS' },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase bg-sky-900/30 border border-sky-700/50 px-4 py-1 rounded-full">
            FINANCIAL DOCUMENTS
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-3">Download Statements & Reports</h1>
          <p className="text-slate-400 text-xs mt-1">Official tax documents and monthly wealth digests for audit and filing.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
          {reports.map((r, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between md:items-center p-5 bg-slate-950 rounded-2xl border border-slate-800 gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded">{r.category}</span>
                  <h3 className="font-bold text-white text-sm">{r.title}</h3>
                </div>
                <p className="text-xs text-slate-400">{r.date} · {r.format}</p>
              </div>
              <button className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-5 py-2 rounded-xl transition-colors shrink-0">
                Download File
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
