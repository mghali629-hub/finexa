# 🚀 Deployment Guide

## Prerequisites
- Node.js 18+
- npm 9+

## Setup
```bash
npm install
cp .env.example .env
npx prisma db push
npm run db:seed
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables from `.env.example`
4. Deploy

## Environment Variables
See `.env.example` for all required variables.
