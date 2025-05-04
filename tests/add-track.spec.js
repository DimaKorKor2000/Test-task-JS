import { test, expect } from '@playwright/test';

test('add track to playlist', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  const firstTrack = page.locator('.track').first();
  const trackName = await firstTrack.locator('.track-title').textContent();
  await firstTrack.locator('button:has-text("+")').click();
  const playlist = page.locator('.playlist');
  await expect(playlist).toContainText(trackName);
});
