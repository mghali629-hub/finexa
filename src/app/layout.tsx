import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://finexa.bank'),
  title: {
    default: 'Finexa | Private Banking & Multi-Asset Wealth Management',
    template: '%s | Finexa Wealth',
  },
  description: 'Finexa is a next-generation private bank providing instant wire transfers, multi-currency accounts, wealth portfolio analytics, and automated tax reporting.',
  keywords: ['Private Banking', 'Wealth Management', 'Multi-currency', 'Stock Portfolio', 'Crypto Custody', 'FSCS Protected'],
  openGraph: {
    title: 'Finexa | Institutional & Private Wealth Platform',
    description: 'Manage accounts, execute wire transfers, and track global investment portfolios seamlessly.',
    url: 'https://finexa.bank',
    siteName: 'Finexa Private Wealth',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finexa Private Wealth',
    description: 'Next-generation private banking and multi-asset wealth management.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070B14] text-slate-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
