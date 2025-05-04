import { test, expect } from '@playwright/test';

function toSeconds(time) {
  const [min, sec] = time.split(':').map(Number);
  return min * 60 + sec;
}

test('playlist duration is calculated correctly', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  const track = page.locator('.track').first();
  const duration = await track.locator('.track-duration').textContent();
  await track.locator('button:has-text("+")').click();
  const expected = toSeconds(duration);
  const displayed = await page.locator('.playlist-duration').textContent();
  expect(Number(displayed)).toBe(expected);
});
