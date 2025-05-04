import { test, expect } from '@playwright/test';

test('search filters track list', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await page.getByPlaceholder('Search...').fill('Black');
  const tracks = await page.locator('.track').allTextContents();

  for (const track of tracks) {
    expect(track.toLowerCase()).toContain('black');
  }
});
