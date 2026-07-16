// tests/vrt.test.js
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('All stories visual regression', async ({ page }) => {
  // Storybook の静的ビルドから index.json を読む
  const index = JSON.parse(fs.readFileSync('./storybook-static/index.json', 'utf-8'));

  const stories = Object.values(index.entries).filter(
    story =>
      !story.id.endsWith('--docs') &&
      !story.id.startsWith('example-page')
  );

  console.log(`Found ${stories.length} stories`);

  for (const story of stories) {
    const url = `http://localhost:6006/iframe.html?id=${story.id}`;
    console.log(`Testing story: ${story.id}`);

    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(200); // 安定化

    await expect(page).toHaveScreenshot(`${story.id}.png`);
  }
});

test.use({
  viewport: { width: 1280, height: 800 },
  ignoreHTTPSErrors: true,
  screenshot: 'on',
});
