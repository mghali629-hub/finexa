'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function FinexaSecurityPage() {
  const [twoFA, setTwoFA] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [alerts, setAlerts] = useState(true);

  const sessions = [
    { device: 'MacBook Pro 16" — Chrome 127', location: 'London, UK', time: 'Active now', current: true },
    { device: 'iPhone 15 Pro — Finexa App', location: 'London, UK', time: '2 hours ago', current: false },
    { device: 'iPad Air — Safari', location: 'Dubai, UAE', time: '3 days ago', current: false },
  ];

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">ACCOUNT SECURITY</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Security & Privacy Centre</h1>
          <p className="text-slate-400 text-sm mt-2">Manage your authentication methods, active sessions, and account security settings.</p>
        </div>

        {/* Security Score */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full border-4 border-emerald-500 flex items-center justify-center text-2xl font-black text-emerald-400">82</div>
          <div>
            <div className="text-lg font-bold text-white">Security Score: <span className="text-emerald-400">Strong</span></div>
            <p className="text-slate-400 text-sm mt-1">Enable biometric login to reach 95/100 and achieve maximum protection.</p>
          </div>
        </div>

        {/* Authentication */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="font-bold text-white text-lg">Authentication Methods</h2>
          {[
            { label: 'Two-Factor Authentication (TOTP)', desc: 'Authenticator app required on every login', value: twoFA, setter: setTwoFA, recommended: true },
            { label: 'Biometric Login', desc: 'Face ID / Touch ID for instant secure access', value: biometric, setter: setBiometric, recommended: false },
            { label: 'Security Alerts via Email', desc: 'Notify me of logins from new devices or locations', value: alerts, setter: setAlerts, recommended: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-950 rounded-xl">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                  {item.recommended && <span className="text-xs bg-sky-900/40 text-sky-400 px-2 py-0.5 rounded-full font-medium">Recommended</span>}
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
              </div>
              <button onClick={() => item.setter(!item.value)}
                className={`w-12 h-6 rounded-full transition-colors relative ${item.value ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${item.value ? 'left-6' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>

        {/* Active Sessions */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="font-bold text-white text-lg">Active Sessions</h2>
          {sessions.map((session, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-950 rounded-xl">
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-semibold text-white">{session.device}</span>
                  {session.current && <span className="text-xs bg-green-900/40 text-green-400 px-2 py-0.5 rounded-full">Current</span>}
                </div>
                <p className="text-xs text-slate-400">{session.location} · {session.time}</p>
              </div>
              {!session.current && <button className="text-xs text-red-400 hover:text-red-300 font-semibold border border-red-800/40 px-3 py-1.5 rounded-lg transition-colors">Revoke</button>}
            </div>
          ))}
        </div>

        {/* Password */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="font-bold text-white text-lg mb-4">Password</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Last changed: 45 days ago</p>
              <p className="text-xs text-slate-500 mt-0.5">We recommend changing passwords every 90 days</p>
            </div>
            <button className="bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">Change Password</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
