'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@/components/Header';

export default function FinexaSettingsPage() {
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true, weekly: true });
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('dark');

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans flex flex-col">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16 flex-1 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">PREFERENCES</span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Account Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <h2 className="font-bold text-white text-lg">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[['Full Name', 'text', 'Reginald Fairbanks'], ['Email Address', 'email', 'r.fairbanks@example.com'], ['Phone Number', 'tel', '+44 7700 900461'], ['Date of Birth', 'date', '']].map(([label, type, placeholder], i) => (
              <div key={i}>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">{label}</label>
                <input type={type} defaultValue={placeholder} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50" />
              </div>
            ))}
          </div>
          <button className="bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors">Save Profile</button>
        </div>

        {/* Preferences */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5">
          <h2 className="font-bold text-white text-lg">Display Preferences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Currency</label>
              <select value={currency} onChange={e => setCurrency(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50">
                {['USD', 'GBP', 'EUR', 'AED', 'JPY', 'CHF'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Language</label>
              <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50">
                {['English', 'Arabic', 'French', 'German', 'Spanish', 'Japanese'].map(l => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Theme</label>
              <select value={theme} onChange={e => setTheme(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50">
                {['dark', 'light', 'system'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="font-bold text-white text-lg">Notification Preferences</h2>
          {[
            { key: 'email' as const, label: 'Email Notifications', desc: 'Transaction confirmations and account alerts' },
            { key: 'sms' as const, label: 'SMS Alerts', desc: 'High-value transaction OTPs and security alerts' },
            { key: 'push' as const, label: 'Push Notifications', desc: 'Real-time alerts from the Finexa mobile app' },
            { key: 'weekly' as const, label: 'Weekly Digest', desc: 'Summary of spending, investments, and portfolio performance' },
          ].map((n) => (
            <div key={n.key} className="flex items-center justify-between p-4 bg-slate-950 rounded-xl">
              <div>
                <div className="text-sm font-semibold text-white">{n.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{n.desc}</div>
              </div>
              <button onClick={() => setNotifications(prev => ({ ...prev, [n.key]: !prev[n.key] }))}
                className={`w-12 h-6 rounded-full transition-colors relative ${notifications[n.key] ? 'bg-emerald-500' : 'bg-slate-700'}`}>
                <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${notifications[n.key] ? 'left-6' : 'left-0.5'}`} />
              </button>
            </div>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="bg-slate-900 border border-red-900/40 rounded-2xl p-6">
          <h2 className="font-bold text-red-400 text-lg mb-4">Danger Zone</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Close Account</div>
              <div className="text-xs text-slate-400 mt-0.5">Permanently delete your account and all associated data</div>
            </div>
            <button className="border border-red-700 text-red-400 hover:bg-red-950/40 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">Request Closure</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
