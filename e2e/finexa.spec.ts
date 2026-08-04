import { test, expect } from '@playwright/test';

test.describe('Finexa Treasury E2E Automation Suite', () => {
  test('should load financial terminal homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Finexa')).toBeVisible();
  });

  test('should navigate to transactions audit log', async ({ page }) => {
    await page.goto('/transactions');
    await expect(page.locator('text=Transactions Audit Log')).toBeVisible();
  });

  test('should navigate to investment portfolio telemetry', async ({ page }) => {
    await page.goto('/investments');
    await expect(page.locator('text=Investment Portfolio Telemetry')).toBeVisible();
  });

  test('should navigate to cash flow analytics page', async ({ page }) => {
    await page.goto('/analytics');
    await expect(page.locator('text=Detailed Cash Flow Telemetry')).toBeVisible();
  });
});
