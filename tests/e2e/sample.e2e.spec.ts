import { test, expect } from '@playwright/test';

test('homepage has MonacoShield in title and shows welcome', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/MonacoShield/i);
  await expect(page.locator('body')).toContainText(['MonacoShield', 'Bienvenue', 'Welcome']);
}); 