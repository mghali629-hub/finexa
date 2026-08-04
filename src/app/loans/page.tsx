'use client';
import React from 'react';
import { Header, Footer } from '@/components/Header';

const loanData = [
  { id: 1, name: 'Strategic Growth Capital', amount: 2500000, interestRate: 4.75, monthlyPayment: 52400, remaining: 1875000, term: '60 months', type: 'Business' },
  { id: 2, name: 'Real Estate Acquisition Facility', amount: 8000000, interestRate: 3.90, monthlyPayment: 41800, remaining: 7200000, term: '240 months', type: 'Mortgage' },
  { id: 3, name: 'Equipment Financing Line', amount: 450000, interestRate: 6.20, monthlyPayment: 8700, remaining: 270000, term: '60 months', type: 'Equipment' },
];

export default function LoansPage() {
  const totalDebt = loanData.reduce((s, l) => s + l.remaining, 0);
  const totalMonthly = loanData.reduce((s, l) => s + l.monthlyPayment, 0);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 flex-1 space-y-10">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">CREDIT PORTFOLIO</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Active Loan Facilities</h1>
          <p className="text-slate-400 text-sm mt-2">Manage your institutional credit lines, repayment schedules, and financing terms.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Outstanding Debt', value: `$${(totalDebt / 1e6).toFixed(2)}M`, color: 'text-red-400' },
            { label: 'Monthly Obligations', value: `$${totalMonthly.toLocaleString()}`, color: 'text-amber-400' },
            { label: 'Active Loan Facilities', value: `${loanData.length}`, color: 'text-sky-400' },
          ].map((s, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-xs text-slate-400 font-medium mb-2">{s.label}</div>
              <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Loan Cards */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-white">Loan Details</h2>
          {loanData.map((loan) => {
            const paid = loan.amount - loan.remaining;
            const pct = Math.round((paid / loan.amount) * 100);
            return (
              <div key={loan.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-sky-400 bg-sky-900/30 px-2 py-0.5 rounded">{loan.type.toUpperCase()}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{loan.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">Monthly Payment</div>
                    <div className="text-xl font-bold text-emerald-400">${loan.monthlyPayment.toLocaleString()}</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><div className="text-slate-400 text-xs">Original Principal</div><div className="font-mono font-bold">${(loan.amount / 1e6).toFixed(2)}M</div></div>
                  <div><div className="text-slate-400 text-xs">Outstanding Balance</div><div className="font-mono font-bold text-red-400">${(loan.remaining / 1e6).toFixed(2)}M</div></div>
                  <div><div className="text-slate-400 text-xs">Interest Rate (APR)</div><div className="font-mono font-bold text-amber-400">{loan.interestRate}%</div></div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1"><span>Repayment Progress</span><span>{pct}% paid · {loan.term} term</span></div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apply CTA */}
        <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/30 border border-sky-800/40 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Need Additional Financing?</h2>
          <p className="text-slate-400 mb-6">Our credit officers can structure bespoke facilities for acquisitions, working capital, or capital expenditure.</p>
          <a href="/contact" className="inline-block bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-3 rounded-xl transition-colors">Schedule a Credit Review</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
