import { test, expect } from '@playwright/test';

test('buscar Playwright en Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  const aceptarCookies = page.getByRole('button', { name: /aceptar|accept/i });

  if (await aceptarCookies.isVisible()) {
    await aceptarCookies.click();
  }

  await page.getByRole('combobox', { name: /buscar|search/i }).fill('Playwright automation');

  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/search/);
});