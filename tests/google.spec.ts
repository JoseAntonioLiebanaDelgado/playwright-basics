import { test, expect } from '@playwright/test';

test('buscar en Google', async ({ page }) => {

  // 1. Ir a Google
  await page.goto('https://www.google.com');

  // 2. Aceptar cookies (por si aparece)
  const aceptar = page.getByRole('button', { name: /accept|aceptar/i });
  if (await aceptar.isVisible()) {
    await aceptar.click();
  }

  // 3. Escribir en el buscador
  await page.fill('textarea[name="q"]', 'Playwright testing');

  // 4. Pulsar Enter
  await page.keyboard.press('Enter');

  // 5. Validar que aparecen resultados
  await expect(page).toHaveURL(/search/);

});