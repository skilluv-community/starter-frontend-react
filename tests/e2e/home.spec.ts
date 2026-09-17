import { expect, test } from '@playwright/test';

test('home renders title and nav', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  // Scope to <nav> — the home page also has a "Counter" link in a card.
  const nav = page.getByRole('navigation');
  await expect(nav.getByRole('link', { name: /counter/i })).toBeVisible();
});

test('counter increments', async ({ page }) => {
  await page.goto('/counter');
  const value = page.getByTestId('counter-value');
  await expect(value).toHaveText('0');
  await page.getByRole('button', { name: /increment/i }).click();
  await page.getByRole('button', { name: /increment/i }).click();
  await expect(value).toHaveText('2');
});
