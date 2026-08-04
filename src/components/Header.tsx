'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LineChart as LineChartIcon } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '/about', label: 'About' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/accounts', label: 'Accounts' },
    { href: '/transactions', label: 'Audit Log' },
    { href: '/cards', label: 'Cards' },
    { href: '/wallet', label: 'Wallet Wire' },
    { href: '/investments', label: 'Portfolio' },
    { href: '/investments/stocks', label: 'Stocks' },
    { href: '/investments/crypto', label: 'Crypto' },
    { href: '/budget', label: 'Budget' },
    { href: '/goals', label: 'Goals' },
    { href: '/payments', label: 'Scheduled' },
    { href: '/loans', label: 'Loans' },
    { href: '/reports', label: 'P&L Reports' },
    { href: '/notifications', label: 'Alerts' },
    { href: '/settings', label: 'Settings' },
    { href: '/security', label: 'Security' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#090D16]/90 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-emerald-500/20">
            <LineChartIcon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white block">Finexa</span>
            <span className="text-[9px] tracking-[0.2em] text-emerald-400 font-mono font-semibold uppercase block -mt-1">Financial Terminal</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-xs font-medium py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={	ransition-colors whitespace-nowrap py-1 \}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.length > 5 && (
            <div className="relative group py-1">
              <button className="flex items-center gap-1 text-slate-300 hover:text-white font-medium transition-colors cursor-pointer py-1">
                <span>More</span>
                <span className="text-[9px] opacity-70">▼</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-52 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 hidden group-hover:block group-focus-within:block z-50">
                <div className="grid grid-cols-1 gap-1 max-h-72 overflow-y-auto no-scrollbar">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white transition-colors block whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>

        <Link
          href="/wallet"
          className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all shrink-0"
        >
          Quick Wire
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#05070E] border-t border-slate-800 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base font-sans">
            <LineChartIcon className="w-5 h-5 text-emerald-400" /> FINEXA TERMINAL
          </div>
          <p className="text-slate-400 text-xs leading-relaxed font-sans">
            Real-Time Enterprise Financial Telemetry, Treasury & Portfolio Analytics.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Accounts & Treasury</h4>
          <ul className="space-y-2">
            <li><Link href="/accounts" className="hover:text-emerald-400">Linked Accounts</Link></li>
            <li><Link href="/transactions" className="hover:text-emerald-400">Audit Log Search</Link></li>
            <li><Link href="/wallet" className="hover:text-emerald-400">Digital Wire Transfer</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Wealth & Analytics</h4>
          <ul className="space-y-2">
            <li><Link href="/investments" className="hover:text-emerald-400">Portfolio Tracking</Link></li>
            <li><Link href="/budget" className="hover:text-emerald-400">Category Budgeting</Link></li>
            <li><Link href="/reports" className="hover:text-emerald-400">Tax & P&L Statements</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider font-sans">Security Support</h4>
          <p className="text-slate-400 font-sans">Corporate Treasury Desk:</p>
          <p className="text-emerald-400 font-bold mt-1 text-sm font-sans">+1 (800) 777-FINEXA</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>© 2026 All rights reserved.</div>
        <div>
          <a
            href="https://devmaster.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <span>Powered by</span>
            <span className="font-bold text-blue-400 hover:underline">DevMaster</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
