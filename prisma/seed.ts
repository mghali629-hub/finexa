import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Finexa database...');

  await prisma.account.deleteMany();
  await prisma.financialGoal.deleteMany();
  await prisma.transaction.deleteMany();

  await prisma.account.createMany({
    data: [
      {
        name: 'Private Wealth Operating Account',
        type: 'CHECKING',
        balance: 148500.75,
        currency: 'GBP',
        iban: 'GB29NWBK60161331926819',
      },
      {
        name: 'Euro FX Investment Reserve',
        type: 'SAVINGS',
        balance: 625000.00,
        currency: 'EUR',
        iban: 'DE89370400440532013000',
      },
    ],
  });

  await prisma.transaction.createMany({
    data: [
      {
        txCode: 'TXN-88201',
        name: 'Sovereign Jet Charters',
        category: 'Travel',
        amount: '-£2,450.00',
        status: 'Completed',
        positive: false,
      },
      {
        txCode: 'TXN-88202',
        name: 'Dividend Yield — Global Growth Fund',
        category: 'Investment Return',
        amount: '+£15,000.00',
        status: 'Completed',
        positive: true,
      },
    ],
  });

  await prisma.financialGoal.createMany({
    data: [
      {
        name: 'Venture Capital Fund IV',
        targetAmount: 500000,
        currentAmount: 385000,
        deadline: '2026-12-31',
      },
      {
        name: 'Mediterranean Estate Equity',
        targetAmount: 1000000,
        currentAmount: 720000,
        deadline: '2027-06-30',
      },
    ],
  });

  console.log('Finexa database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
