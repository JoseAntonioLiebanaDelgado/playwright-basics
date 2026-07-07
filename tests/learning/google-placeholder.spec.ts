import { test, expect } from '@playwright/test';

test('search using role locator', async ({ page }) => {

  await page.goto('https://www.google.com');

  const accept = page.getByRole('button', { name: /accept|aceptar/i });

  if (await accept.isVisible()) {
    await accept.click();
  }

  const searchBox = page.getByRole('combobox', { name: /buscar|search/i });

  await searchBox.fill('Playwright');

  await expect(searchBox).toHaveValue('Playwright');

});