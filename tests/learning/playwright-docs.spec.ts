import { test, expect } from '@playwright/test';

test('navigate to Playwright documentation', async ({ page }) => {

  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // Click on "Docs"
  await page.getByText('Docs').click();

  // Verify URL
  await expect(page).toHaveURL(/docs/);

});