'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col items-center justify-center text-center px-4 font-sans">
      <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 text-2xl font-bold mb-4">
        🔒
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Encrypted Gateway Timeout</h2>
      <p className="text-slate-400 text-xs max-w-md mb-6">
        An error occurred during banking session authorization. Client ledger funds remain fully encrypted and secure.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
      >
        Re-authenticate Session
      </button>
    </div>
  );
}
