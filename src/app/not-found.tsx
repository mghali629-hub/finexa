'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-3xl font-black mb-6">
        404
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">Financial Resource Not Found</h1>
      <p className="text-slate-400 text-xs max-w-md mb-8">
        The account ledger, transaction reference, or portfolio page you requested is not available on Finexa Banking.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
        >
          Return to Finexa Home
        </Link>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold rounded-xl text-xs border border-slate-800 transition-colors"
        >
          Open Dashboard
        </Link>
      </div>
    </div>
  );
}
