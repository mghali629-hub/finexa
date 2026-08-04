const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Finexa DB...');

  await prisma.transaction.deleteMany();
  await prisma.account.deleteMany();
  await prisma.walletCard.deleteMany();
  await prisma.investment.deleteMany();

  await prisma.transaction.createMany({
    data: [
      { txCode: 'TX-9812-40', name: 'Stripe SaaS Payout', category: 'Revenue', amount: '+$14,250.00', positive: true, status: 'Completed' },
      { txCode: 'TX-9812-41', name: 'AWS Cloud Infrastructure', category: 'Hosting', amount: '-$3,840.00', positive: false, status: 'Completed' },
      { txCode: 'TX-9812-42', name: 'Goldman Sachs Wire Transfer', category: 'Investment', amount: '+$120,000.00', positive: true, status: 'Completed' }
    ]
  });

  await prisma.account.createMany({
    data: [
      { name: 'Corporate Treasury Vault', type: 'Checking', balance: 4250000.00, currency: 'USD', iban: 'US89-FNX-9012-4819' },
      { name: 'Swiss Operating Account', type: 'Savings', balance: 1850000.00, currency: 'EUR', iban: 'CH93-FNX-3019-9812' }
    ]
  });

  await prisma.walletCard.createMany({
    data: [
      { last4: '8812', type: 'Platinum Business Visa', expiry: '08/29', balance: 450000.00 },
      { last4: '4092', type: 'Black Titanium Mastercard', expiry: '12/28', balance: 1200000.00 }
    ]
  });

  await prisma.investment.createMany({
    data: [
      { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'STOCKS', shares: 500, avgBuy: 110.50, currentPrice: 128.40 },
      { symbol: 'BTC', name: 'Bitcoin Reserve', type: 'CRYPTO', shares: 4.5, avgBuy: 54000.00, currentPrice: 65200.00 }
    ]
  });

  console.log('Finexa DB seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
