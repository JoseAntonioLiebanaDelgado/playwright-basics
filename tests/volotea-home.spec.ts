import { test, expect } from '@playwright/test';

test('abrir home de Volotea', async ({ page }) => {

  await page.goto('https://www.volotea.com');

  await expect(page).toHaveURL(/volotea/);

});