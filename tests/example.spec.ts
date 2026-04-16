import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Abrimos la página principal
  await page.goto('https://playwright.dev/');

  // Validamos que el título contiene "Playwright"
  // (asegura que la página ha cargado correctamente)
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Accedemos a la home
  await page.goto('https://playwright.dev/');

  // Hacemos click en "Get started"
  // (inicio del flujo de navegación)
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verificamos que hemos navegado correctamente
  // comprobando que aparece "Installation"
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});